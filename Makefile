rebuild:
	rm -rf build
	truffle compile
	OWNER=${OWNER} truffle migrate --network local
	cp build/contracts/CryptoFreaks.json frontend/src/contracts/
	OWNER=${OWNER} truffle exec scripts/generateMonsters.js --network local
