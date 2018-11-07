var CryptoFreaks = artifacts.require('CryptoFreaks');

module.exports = async function() {
  const instance = await CryptoFreaks.deployed(); 
  
  const N = 40;
  console.log(`Generating ${N} random monsters`);
  
  for(var i = 0; i < N; i++) {
    await instance.generateMonster();
  }

};
