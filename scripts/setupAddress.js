const CONTRACT_NAME = 'CryptoFreaks';
const fs = require('fs');
var CryptoFreaks = artifacts.require(CONTRACT_NAME);

module.exports = async function() {
  
  const instance = await CryptoFreaks.deployed(); 
  console.log('Saving address: ' + instance.address);
  const data = `export const CONTRACT_NAME = '${CONTRACT_NAME}';
export const CONTRACT_ADDRESS = '${instance.address}';
  `;

  // Write to frontend config file here
  fs.writeFile('./frontend/src/config.js', data, function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });

};
