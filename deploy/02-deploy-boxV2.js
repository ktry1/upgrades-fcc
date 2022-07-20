const {network} = require("hardhat");
const {developmentChains} = require("../helper-hardhat-config");
const {verify} = require("../utils/verify");

module.exports = async ({getNamedAccounts,deployments}) =>{
    const {deploy,log} = deployments;
    const {deployer} = await getNamedAccounts();
    
    console.log("-----------------");

    const boxV2 = await deploy("BoxV2", {
        from: deployer,
        args:[],
        log:true,
        waitConfirmations: network.config.blockConfirmations || 1
    })

    if (!developmentChains.includes(network.name)){
        console.log("Verifying...");
        await verify(boxV2.address,[]);
    }

}