// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./PriceConvertor.sol";


contract Minute_Glass {

    using PriceConverter for uint256;

    struct Subscription{
        uint256 id;
        string website_name;
        string website_description;
        string image;
        string website__url;
        uint256 price_per_hr;
        address payable website_wallet;
    }

    mapping(uint256 => Subscription) public subscriptions;

    uint256 public numberOfSubscriptions = 0;


    function createSubscription(string memory _website_nmae, string memory _website_description, string memory _image, string memory _website_url, uint256 _price_per_hr, address payable  _websitewallet) public returns(uint256){
        Subscription storage subscription = subscriptions[numberOfSubscriptions];

        subscription.id = numberOfSubscriptions;
        subscription.website_name = _website_nmae;
        subscription.website_description = _website_description;
        subscription.image = _image;
        subscription.website__url = _website_url;
        subscription.price_per_hr = _price_per_hr;
        subscription.website_wallet = _websitewallet;

        numberOfSubscriptions++;
        return numberOfSubscriptions - 1;
    }

    function getSubscription(uint256 _subscription_num) public view  returns (string memory) {
        return subscriptions[_subscription_num].website_name;
    }

    function accessGrant(uint256 _product_number) public view returns(bool grant){
        uint256 price = subscriptions[_product_number].price_per_hr;
        if(msg.sender.balance > price){
            return true;
        }else{
            return false;
        }
    }

    struct Transaction{
        address sender;
        uint256 amount;
    } 
    Transaction[] userTransactions;

    function initiateTransaction(uint256 _number, uint256 _amount) public payable {
        subscriptions[_number].website_wallet.transfer(_amount);
        userTransactions.push(Transaction(msg.sender, msg.value));
    }

    function showTransactions() public view returns(Transaction[] memory){
        return userTransactions;
    }

    function rupee_to_matic(uint256 rupee) public view returns(uint256){
        return PriceConverter.getConversionRate(rupee);
    }

    function calculateCharge(uint256 subscription_number,uint256 time_in_sec) public view returns(uint256){
        uint256 perSecondRate = subscriptions[subscription_number].price_per_hr / 3600;
        uint256 total_charge = perSecondRate * time_in_sec;
        return PriceConverter.getConversionRate(total_charge);
    }

    function getUserBalance() public view returns(uint256){
        return msg.sender.balance;
    }

    //website_1,website_1_desc,website_1_img,website_1_url,80,0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
    //website_2,website_2_desc,website_2_img,website_2_url,80,0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db
    

}