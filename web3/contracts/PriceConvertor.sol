// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
    function getPrice() internal view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x7bAC85A8a13A4BcD8abb3eB7d6b4d632c5a57676);
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        // MATIC/USD rate in 18 digit
        return uint256(answer * 1e10);
    }


    function getConversionRate(uint256 rupee) internal view returns (uint256){
        uint256 maticPrice = getPrice();
        uint256 usd = rupee/80;
        uint256 rupeeToMatic = ((1/maticPrice) * usd) / 1e18;
        return rupeeToMatic;
    }
}