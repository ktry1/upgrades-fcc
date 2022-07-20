// Logic contract

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Box {
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
        return 1;
    }

}