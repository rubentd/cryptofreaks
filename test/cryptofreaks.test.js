var CryptoFreaks = artifacts.require('CryptoFreaks')

/**
 * These tests verify the main functions of the contract, 
 * and also some error cases to verify protection agains not permitted functions
 */

contract('CryptoFreaks', function(accounts) {

    const owner = accounts[0];
    const bob = accounts[1];
    const alice = accounts[2];
    const oneFinney = web3.toWei(0.001, 'ether');
    const fiveFinneys = web3.toWei(0.005, 'ether');

    var cryptoFreaks;
    beforeEach(function() {
        return CryptoFreaks.new()
        .then(function(instance) {
            cryptoFreaks = instance;
        });
    });

    it("should generate a new monster", async() => {
        const initialNumMonsters = await cryptoFreaks.totalSupply();

        // Generate three new monsters as the contract owner
        await cryptoFreaks.generateMonster({from: owner});
        await cryptoFreaks.generateMonster({from: owner});
        await cryptoFreaks.generateMonster({from: owner});

        // get the number of monsters
        const numMonsters = await cryptoFreaks.totalSupply();
        // get all the monsters
        const allMonsters = await cryptoFreaks.getAllMonsters();
        const monsterIDs = allMonsters.map(id => (id.toNumber()));

        assert.equal(initialNumMonsters.toNumber(), 0, 'Initial number of monsters must be zero');
        assert.equal(numMonsters.toNumber(), 3, 'after adding generating three monsters, totalSupply should be 3');
        assert.equal(monsterIDs[0], 0, 'Id of first monster should be zero');
        assert.equal(monsterIDs[1], 1, 'Id of second monster should be 1');
        assert.equal(monsterIDs[2], 2, 'Id of third monster should be 2');
       
    });

    it("should fetch the first generated monster", async() => {
        await cryptoFreaks.generateMonster({from: owner});

        // check that the number of monsters is only one
        const numMonsters = await cryptoFreaks.totalSupply();
        assert.equal(numMonsters, 1, 'Number of monsters should be one');

        // Get id and owner for generated monster
        const monster = await cryptoFreaks.getMonster(0);
        
        assert.equal(monster[0].toNumber(), 0, 'Monster id should be zero');
        assert.equal(monster[3], owner, 'Monster owner should be contract owner');
    });

    it("should fetch the list of generated monsters", async() => {
        // Generate five monsters and check result

        await cryptoFreaks.generateMonster({from: owner});
        await cryptoFreaks.generateMonster({from: owner});
        await cryptoFreaks.generateMonster({from: owner});
        await cryptoFreaks.generateMonster({from: owner});
        await cryptoFreaks.generateMonster({from: owner});

        const numMonsters = await cryptoFreaks.totalSupply();
        assert.equal(numMonsters, 5, 'Number of monsters should be five');
        
        const monsters = await cryptoFreaks.getAllMonsters();
        assert.equal(monsters.length, 5, 'List of monsters should have a length of five');
    });

    it("should let bob buy a monster for the correct amount", async() => {
        // Generate two monsters 

        await cryptoFreaks.generateMonster({from: owner});
        await cryptoFreaks.generateMonster({from: owner});
        
        // try to buy with insufficient funds
        await cryptoFreaks.buyMonster(0, { from : bob, value: fiveFinneys });
        
        let error = false;
        try {
            await cryptoFreaks.buyMonster(0, { from : bob, value: oneFinney });
        } catch(e) {
            error = true;
        }
        assert.equal(error, true, 'one finney is not enough');

        // buy with sufficient funds
        await cryptoFreaks.buyMonster(1, { from : bob, value: fiveFinneys });
        const bobMonsters = await cryptoFreaks.getMonstersOfOwner(bob);
        assert.equal(bobMonsters.length, 2, 'got two monsters');
    });

    it("bob should be able to set for sale / not for sale his monstert", async() => {
        // generate a monster, make bob buy it and then change status
        await cryptoFreaks.generateMonster({from: owner});
        await cryptoFreaks.buyMonster(0, { from : bob, value: fiveFinneys });

        await cryptoFreaks.putOnSale(0, 50000, { from : bob });

        const monster = await cryptoFreaks.getMonster(0);
        assert.equal(monster[5], 50000, 'The price is right');


        await cryptoFreaks.removeFromSale(0, { from : bob });
        const sameMonster = await cryptoFreaks.getMonster(0);
        assert.equal(sameMonster[4], false, 'Not for sale');

    });

});
