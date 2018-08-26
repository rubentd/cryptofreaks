pragma solidity ^0.4.24;

contract CryptoFreaks {

    struct Monster {
        uint id;
        string name;
        address owner;
    }

    mapping (uint256 => Monster) public getMonster;

}