rebuild:
	rm -rf build
	truffle compile
	OWNER_ADDRESS=0x169B68F1df7EC718BB78C420c337a0B5a6659203 truffle migrate --network local
	cp build/contracts/CryptoFreaks.json frontend/src/contracts/
	OWNER_ADDRESS=0x169B68F1df7EC718BB78C420c337a0B5a6659203 truffle exec scripts/generateMonsters.js --network local
