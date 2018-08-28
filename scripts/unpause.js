var CryptoFreaks = artifacts.require('CryptoFreaks');

module.exports = async function() {
  const instance = await CryptoFreaks.deployed(); 
  
  await instance.unpause({ from: process.env.OWNER});
};