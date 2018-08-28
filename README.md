## Collectible.
## Tradeable.
## Horrible.

### Collect and trade digital creatures

This is a game centered around tradeable and collectible monsters. 
Each monster is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.

You can buy, sell and gift cryptofreaks to other players

# Instructions

## How to run locally 

Make sure you have all the necessary tools installed: truffle, yarn/npm, ganache-cli 

1.- Run your own local ethereum network using Ganache. Copy the first account address, to be used as owner. 
2.- Clone this repo and go to that folder for the next steps.
3.- Run `OWNER=<owner_address> make rebuild` to compile the contracts using truffle. Replace <owner_address> with the one you copied on the previous step
4.- Copy the contract address generated during the deploy step (see image) this will be needed to setup the frontend
5.- open `frontend/src/config.js` and copy the previous value for the constant `CONTRACT_ADDRESS`

![copy contract address](docs/contract_address.png)

6.- from the `frontend` directory run `yarn install` and then `yarn start`. Then you should be able to test the app on your browser.
7.- Make sure Metamask is connected to the local network (usually trough the RPC server: http://127.0.0.1:8545)
8.- Similar to Cryptokitties, you will be able to browse monsters, buy them, sell them, and gift to other users (no breeding function at the time)  

## Run deployed version 

1.- Switch Metamask to Ropsten (Make sure you have Ropsten ETH)
2.- Go to http://rubentd.com/cryptofreaks
3.- Enjoy!
