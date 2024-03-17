// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
    function getPrice() internal view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        // ETH/USD rate in 18 digit
        return uint256(answer * 1e10);
    }


    function getConversionRate(uint256 usd) public view returns (uint256)
    {
        uint256 ethPrice = getPrice();
        uint256 usdAmount = usd * 10e18;
        uint256 usdToEth = (ethPrice / usdAmount) * 10e18;
        return usdToEth;
    }
}