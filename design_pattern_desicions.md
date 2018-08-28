# Design pattern desicions

## Emergency stop (Circuit breaker)

The main contract extends the `isPausable` contract, giving it the ability to be paused at any given time.
Adding a fast and reliable method to halt any sensitive contract functionality.

All the sensitive methods for the main contract use the `whenNotPaused` modifier.

Run `OWNER=<owner_address> truffle exec --network local scripts/pause.js` to pause CrytopFreaks

Run `OWNER=<owner_address> truffle exec --network local scripts/unpause.js` to unpause CrytopFreaks


## Restrict function access

Only the owner of the contract can generate new monsters.
Only the monster can sell/gift


## Randomness

The main contract generates a random number of a predefined interval in the deterministic environment of a blockchain.
This is done on the `generateMonster` method, with:

`uint(keccak256(block.timestamp, rIndex))`

to generate pseudo-random genetic information.

