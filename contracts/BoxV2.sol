// Logic contract

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract BoxV2 {
    uint256 internal s_internalValue;

    event  ValueChanged(uint256 newValue);

    function store(uint256 newValue) public {
        s_internalValue = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns(uint256){
        return s_internalValue;
    }

    function version() public pure returns(uint256 version) {
        return 2;
    }

    function increment() public {
        s_internalValue+=1;
        emit ValueChanged(s_internalValue);
    }

}