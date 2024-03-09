// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./calculate_amount.sol";

contract Minute_Glass {

    struct Subscription{
        uint256 id;
        string website_name;
        string website_description;
        string image;
        string website__url;
        uint256 price_per_hr;
        address website_wallet;
    }

    mapping(uint256 => Subscription) public subscriptions;

    uint256 public numberOfSubscriptions = 0;

    struct Interaction{
        address user_wallet;
        address website_address;
        uint256 session_time_seconds;
        
    }

    function createSubscription(uint256 _id, string memory _website_nmae, string memory _website_description, string memory _image, string memory _website_url, uint256 _price_per_hr, address _website_wallet) public returns(uin256){
        Subscription storage subscription = subscriptions[numberOfSubscriptions];

        subscription.id = _id;
        subscription.website_name = _website_nmae;
        subscription.website_description = website_description;
        subscription.image = _image;
        subscription.website__url = _website_url;
        subscription.price_per_hr = _price_per_hr;
        subscription.website_wallet = _website_wallet;

        numberOfSubscriptions++;
        return numberOfSubscriptions - 1;
    }

    address[] userTransactions;

    function accessGrant() public returns(bool grant){}

    function initiateTransaction(uint256 _number, uint256 _amount) public payable {
        subscriptions[_number].website_wallet.transfer(amount);

    }
    
    function getSubscriptions() returns {}

    function getUserTransactions() {}

    function getWebsiteTransactions() {}


}