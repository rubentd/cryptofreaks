var CryptoFreaks = artifacts.require('CryptoFreaks');

module.exports = async function() {
  const instance = await CryptoFreaks.deployed(); 
  
  await instance.pause({ from: process.env.OWNER});
};
