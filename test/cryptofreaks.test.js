var CryptoFreaks = artifacts.require('CryptoFreaks')

contract('CryptoFreaks', function(accounts) {

    const owner = accounts[0];
    const alice = accounts[1];
    const bob = accounts[2];

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

    // it("should allow someone to purchase an item", async() => {
    //     const supplyChain = await SupplyChain.deployed()

    //     var eventEmitted = false

    //     var event = supplyChain.Sold()
    //     await event.watch((err, res) => {
    //         sku = res.args.sku.toString(10)
    //         eventEmitted = true
    //     })

    //     const amount = web3.toWei(2, "ether")

    //     var aliceBalanceBefore = await web3.eth.getBalance(alice).toNumber()
    //     var bobBalanceBefore = await web3.eth.getBalance(bob).toNumber()

    //     await supplyChain.buyItem(sku, {from: bob, value: amount})

    //     var aliceBalanceAfter = await web3.eth.getBalance(alice).toNumber()
    //     var bobBalanceAfter = await web3.eth.getBalance(bob).toNumber()

    //     const result = await supplyChain.fetchItem.call(sku)

    //     assert.equal(result[3].toString(10), 1, 'the state of the item should be "Sold", which should be declared second in the State Enum')
    //     assert.equal(result[5], bob, 'the buyer address should be set bob when he purchases an item')
    //     assert.equal(eventEmitted, true, 'adding an item should emit a Sold event')
    //     assert.equal(aliceBalanceAfter, aliceBalanceBefore + parseInt(price, 10), "alice's balance should be increased by the price of the item")
    //     assert.isBelow(bobBalanceAfter, bobBalanceBefore - price, "bob's balance should be reduced by more than the price of the item (including gas costs)")
    // })

    // it("should allow the seller to mark the item as shipped", async() => {
    //     const supplyChain = await SupplyChain.deployed()

    //     var eventEmitted = false

    //     var event = supplyChain.Shipped()
    //     await event.watch((err, res) => {
    //         sku = res.args.sku.toString(10)
    //         eventEmitted = true
    //     })

    //     await supplyChain.shipItem(sku, {from: alice})

    //     const result = await supplyChain.fetchItem.call(sku)

    //     assert.equal(eventEmitted, true, 'adding an item should emit a Shipped event')
    //     assert.equal(result[3].toString(10), 2, 'the state of the item should be "Shipped", which should be declared third in the State Enum')
    // })

    // it("should allow the buyer to mark the item as received", async() => {
    //     const supplyChain = await SupplyChain.deployed()

    //     var eventEmitted = false

    //     var event = supplyChain.Received()
    //     await event.watch((err, res) => {
    //         sku = res.args.sku.toString(10)
    //         eventEmitted = true
    //     })

    //     await supplyChain.receiveItem(sku, {from: bob})

    //     const result = await supplyChain.fetchItem.call(sku)

    //     assert.equal(eventEmitted, true, 'adding an item should emit a Shipped event')
    //     assert.equal(result[3].toString(10), 3, 'the state of the item should be "Received", which should be declared fourth in the State Enum')
    // })

});
