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

1. Run your own local ethereum network using Ganache.
2. Clone this repo and go to that folder for the next steps.
3. Delete `build` folder if present (for rebuilds)
4. Run `make rebuild` to compile the contracts using truffle, and setup the contract address to the frontend config.
5. from the `frontend` directory run `yarn install` and then `yarn start`. Then you should be able to test the app on your browser.
6. Make sure Metamask is connected to the local network (usually trough the RPC server: http://127.0.0.1:8545)
7. Similar to Cryptokitties, you will be able to browse monsters, buy them, sell them, and gift to other users (no breeding function at the time)  

![copy contract address](docs/preview.png)

## Run deployed version 

1. Switch Metamask to Rinkeby testnet
2. Go to https://cryptofreaks.herokuapp.com/

## Deployed address (Rinkeby)
CryptoFreaks: 0xb7f63b4c55870736eaabd4497942ed2c51da5094


## Clarification about ethpm

It was not possible to install the example-package-owned at this time:

![copy contract address](docs/ethpm_error.png)

Instead I used a openzeppelin's Ownable.sol which is equivalent.

