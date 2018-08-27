var CryptoFreaks = artifacts.require('CryptoFreaks')

contract('CryptoFreaks', function(accounts) {

    const owner = accounts[0];
    const alice = accounts[1];
    const bob = accounts[2];
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

        await cryptoFreaks.generateMonster({from: owner});
        await cryptoFreaks.generateMonster({from: owner});
        await cryptoFreaks.generateMonster({from: owner});

        const numMonsters = await cryptoFreaks.totalSupply();


        const allMonsters = await cryptoFreaks.getAllMonsters();
        const monsterIDs = allMonsters.map(id => (id.toNumber()));

        assert.equal(initialNumMonsters.toNumber(), 0, 'Initial number of monsters must be zero');
        assert.equal(numMonsters.toNumber(), 3, 'after adding generating three monsters, totalSupply should be 3');
        assert.equal(monsterIDs[0], 1, 'Id of first monster should be zero');
        assert.equal(monsterIDs[1], 2, 'Id of second monster should be 1');
        assert.equal(monsterIDs[2], 3, 'Id of third monster should be 2');
       
    });

    it("should fetch the first generated monster", async() => {
        await cryptoFreaks.generateMonster({from: owner});

        const numMonsters = await cryptoFreaks.totalSupply();
        assert.equal(numMonsters, 1, 'Number of monsters should be one');
        
        const monster = await cryptoFreaks.getMonster(0);
        assert.equal(monster[0].toNumber(), 0, 'Monster id should be zero');
        assert.equal(monster[2], owner, 'Monster owner should be contract owner');
    });

    it("should fetch the list of generated monsters", async() => {
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
        await cryptoFreaks.generateMonster({from: owner});
        await cryptoFreaks.generateMonster({from: owner});
        
        await cryptoFreaks.buyMonster(0, { from : bob, value: fiveFinneys });
        
        let error = false;
        try {
            await cryptoFreaks.buyMonster(0, { from : bob, value: oneFinney });
        } catch(e) {
            error = true;
        }
        assert.equal(error, true, 'one finney is not enough');

        await cryptoFreaks.buyMonster(1, { from : bob, value: fiveFinneys });
        const bobMonsters = await cryptoFreaks.getMonstersOfOwner(bob);
        assert.equal(bobMonsters.length, 2, 'got two monsters');
    });

    // set for sale
    // set price
    // set not for sale
    // gift
    

});
