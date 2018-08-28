pragma solidity ^0.4.21;

import "./Pausable.sol";

contract CryptoFreaks is Pausable {
    // to be used for "random" gene generation
    uint rIndex;
    // Number of total generated monsters
    uint numMonsters;
    // list of monsters by id
    mapping (uint256 => Monster) public monsters;
    // number of monsters by owner
    mapping (address => uint) public monsterOwnershipCount;
    // given a monster id return owner
    mapping (uint => address) public monsterToOwnerIndex;

    event MonsterGenerated(uint id);
    event MonsterSold(uint id);
    event MonsterGifted(uint id);
    event MonsterBred(uint mom, uint dad, uint baby);

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
     * The monster id must be lower than number of generated monsters
     * @param _monsterID id of the monster we want to check if exists
     */
    modifier exists(uint _monsterID) {
        require(_monsterID < numMonsters, "Monster id out of bounds");
        _;
    }

    /**
     * This method must be called by the monster owner only
     * @param _monsterID id of the monster that should be owned by msg.sender
     */
    modifier onlyMonsterOwner(uint _monsterID) {
        require(monsterToOwnerIndex[_monsterID] == msg.sender, "Monster is not owned by user");
        _;
    }

    /**
     * Monster must be for sale
     * @param _monsterID id of the monster that needs to be for sale
     */
    modifier isForSale(uint _monsterID) {
        require(monsters[_monsterID].forSale, "Monster has to be for sale");
        _;
    }

    modifier paidEnough(uint _monsterID) { 
        require(msg.value >= monsters[_monsterID].price, "Not enough momney to buy this monster");
        _;
    }

    /**
     * Return total amount of generated monsters
     */
    function totalSupply() public view returns(uint) {
        return numMonsters;
    }

    /**
     * Generates a "random" (not really) new monster
     */
    function generateMonster() public onlyOwner {
        emit MonsterGenerated(numMonsters);
        monsters[numMonsters] = Monster({
            id: numMonsters + 1,
            genes: uint(keccak256(block.timestamp, rIndex)),
            generation: 0,
            owner: owner,
            forSale: true,
            price: 5 finney
        });
        monsterOwnershipCount[owner] = monsterOwnershipCount[owner] + 1;
        monsterToOwnerIndex[numMonsters] = owner;
        numMonsters = numMonsters + 1;
        rIndex = rIndex + block.number;
    }

    /**
     * Get a monster by id
     * @param _monsterID if of the monster we want to get
     */
    function getMonster(uint _monsterID) public view exists(_monsterID) returns(
        uint id,
        uint generation,
        uint genes,
        address owner,
        bool forSale,
        uint price
    ) {
        Monster storage m = monsters[_monsterID];
        id = _monsterID;
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

            for (monsterID = 0; monsterID < numMonsters; monsterID++) {
                result[resultIndex] = monsterID;
                resultIndex++;
            }

            return result;
        }
    }

    /**
     * Return a list of the monsters owned by an address
     * @param _owner address of the owner for the monsters we want to fetch
     */
    function getMonstersOfOwner(address _owner) public view returns(uint[]) {
        uint numMonstersOwner = monsterOwnershipCount[_owner];

        if (numMonsters == 0) {
            // Return an empty array
            return new uint[](0);
        } else {
            uint[] memory result = new uint[](numMonstersOwner);
            uint resultIndex = 0;

            // We count on the fact that all cats have IDs starting at 1 and increasing
            // sequentially up to the totalCat count.
            uint catId;

            for (catId = 1; catId <= numMonsters; catId++) {
                if (monsterToOwnerIndex[catId] == _owner) {
                    result[resultIndex] = catId;
                    resultIndex++;
                }
            }

            return result;
        }
    }

    /*
     * Put a monster in the market
     * @param _monsterID id of the monster to put on sale
     */
    function putOnSale(uint _monsterID, uint _price) public onlyMonsterOwner(_monsterID) whenNotPaused() {
        monsters[_monsterID].forSale = true;
        monsters[_monsterID].price = _price;
    }

    /*
     * Monster is no longer for sale
     * @param _monsterID id of the monster to remove from sale
     */
    function removeFromSale(uint _monsterID) public onlyMonsterOwner(_monsterID) whenNotPaused(){
        monsters[_monsterID].forSale = false;
    }

    /*
     * Buy monster
     */
    function buyMonster(uint _monsterID) public payable isForSale(_monsterID) paidEnough(_monsterID) whenNotPaused(){
        address owner = monsters[_monsterID].owner;
        emit MonsterSold(_monsterID);
        monsters[_monsterID].forSale = false;
        owner.transfer(monsters[_monsterID].price);
        monsterOwnershipCount[owner] = monsterOwnershipCount[owner] - 1;
        monsters[_monsterID].owner = msg.sender;
        monsterToOwnerIndex[_monsterID] = msg.sender;
        monsterOwnershipCount[msg.sender] = monsterOwnershipCount[msg.sender] + 1;
    }

    /*
     * Gift monster to another user
     * @param _monsterID id of monster I'm giving away
     * @param _user address of user to receive monster
     */
    function giftMonster(uint _monsterID, address _user) public payable onlyMonsterOwner(_monsterID) whenNotPaused(){
        emit MonsterGifted(_monsterID);
        monsters[_monsterID].forSale = false;
        monsters[_monsterID].owner = _user;
        monsterToOwnerIndex[_monsterID] = _user;
        monsterOwnershipCount[_user] = monsterOwnershipCount[_user] + 1;
        monsterOwnershipCount[msg.sender] = monsterOwnershipCount[msg.sender] - 1;
    }

}