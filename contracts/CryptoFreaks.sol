pragma solidity ^0.4.21;

import "./Pausable.sol";

contract CryptoFreaks is Pausable {
    // Number of total generated monsters
    uint numMonsters;
    // list of monsters by id
    mapping (uint256 => Monster) public monsters;
    // number of monsters by owner
    mapping (address => uint) public monsterOwnershipCount;
    // given a monster id return owner
    mapping (uint => address) public monsterToOwnerIndex;

    event MonsterGenerated(uint id);

    constructor() public {
        numMonsters = 0;
    }

    struct Monster {
        uint id;
        uint genes;
        uint generation;
        address owner;
        bool forSale;
        uint price;
    }

    /**
     * Themonster id must be lower than number of generated monsters
     */
    modifier mustExist(uint _monsterID) {
        require(_monsterID < numMonsters, "Monster id out of bounds");
        _;
    }

    /**
     * Return total amount of generated monsters
     */
    function totalSupply() public view returns(uint) {
        return numMonsters;
    }

    /**
     * Generates a random new monster
     */
    function generateMonster() public onlyOwner {
        emit MonsterGenerated(numMonsters);
        monsters[numMonsters] = Monster({
            id: numMonsters + 1,
            genes: generateRandomGenes(),
            generation: 0,
            owner: owner,
            forSale: false,
            price: 0
        });
        monsterOwnershipCount[owner] = monsterOwnershipCount[owner] + 1;
        monsterToOwnerIndex[numMonsters] = owner;
        numMonsters = numMonsters + 1;
    }

    /**
     * Get a monster by id
     */
    function getMonster(uint _monsterID) public view mustExist(_monsterID) returns(
        uint generation,
        uint genes,
        address owner,
        bool forSale,
        uint price
    ) {
        Monster storage m = monsters[_monsterID];
        generation = m.generation;
        genes = m.genes;
        owner = m.owner;
        forSale = m.forSale;
        price = m.price;
    }

    /*
     * Return a list of all the available monsters
     */
    function getAllMonsters() public view returns(uint256[]) {
        if (numMonsters == 0) {
            // Return an empty array
            return new uint256[](0);
        } else {
            uint256[] memory result = new uint256[](numMonsters);
            uint256 resultIndex = 0;

            // We count on the fact that all cats have IDs starting at 1 and increasing
            // sequentially up to the totalCat count.
            uint256 monsterID;

            for (monsterID = 1; monsterID <= numMonsters; monsterID++) {
                result[resultIndex] = monsterID;
                resultIndex++;
            }

            return result;
        }
    }

    /**
     * Return a list of the monsters owned by an address
     */
    // function getMonstersOfOwner(address _owner) public view {
    //     uint256 numMonstersOwner = monsterOwnershipCount(_owner);

    //     if (numMonsters == 0) {
    //         // Return an empty array
    //         return new uint256[](0);
    //     } else {
    //         uint256[] memory result = new uint256[](tokenCount);
    //         uint256 resultIndex = 0;

    //         // We count on the fact that all cats have IDs starting at 1 and increasing
    //         // sequentially up to the totalCat count.
    //         uint256 catId;

    //         for (catId = 1; catId <= numMonsters; catId++) {
    //             if (monsterToOwnerIndex[catId] == _owner) {
    //                 result[resultIndex] = catId;
    //                 resultIndex++;
    //             }
    //         }

    //         return result;
    //     }
    // }

    function generateRandomGenes() private view returns (uint) {
        uint head = randomGen(3);
        uint body = randomGen(2);
        uint eyes = randomGen(7);
        uint mouth = randomGen(7);
        uint leftArm = randomGen(4);
        uint rightArm = randomGen(4);
        uint legs = randomGen(2);
        uint top = randomGen(4);
        uint color = randomGen(9);

        return color +
            top * 10 +
            legs * 100 +
            rightArm * 1000 +
            leftArm * 10000 +
            mouth * 100000 +
            eyes * 1000000 +
            body * 10000000 +
            head * 100000000;
    }

    /* Generates a random number from 0 to max based on the last block hash */
    function randomGen(uint max) private view returns (uint randomNumber) {
        return uint(keccak256(block.number, block.timestamp)) % max;
    }

}