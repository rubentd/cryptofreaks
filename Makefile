rebuild:
	rm -rf build
	truffle compile
	truffle migrate
	cp build/contracts/CryptoFreaks.json frontend/src/contracts/
	truffle exec scripts/generateMonsters.js
	truffle exec scripts/setupAddress.js
