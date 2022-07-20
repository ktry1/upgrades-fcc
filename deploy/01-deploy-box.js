const {network} = require("hardhat");
const {developmentChains} = require("../helper-hardhat-config");
const {verify} = require("../utils/verify");

module.exports = async ({getNamedAccounts,deployments}) =>{
    const {deploy,log} = deployments;
    const {deployer} = await getNamedAccounts();
    
    console.log("-----------------");

    const box = await deploy("Box", {
        from: deployer,
        args: [],
        log:true,
        waitConfirmations: network.config.blockConfirmations || 1,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
            viaAdminContract: {
                name: "BoxProxyAdmin",
                artifact: "BoxProxyAdmin"
            }
        }
    })

    if (!developmentChains.includes(network.name)){
        console.log("Verifying...");
        await verify(box.address,[]);
    }

}