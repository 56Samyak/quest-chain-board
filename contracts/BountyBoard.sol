
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract BountyBoard {
    struct Bounty {
        uint256 id;
        string title;
        string description;
        uint256 reward;
        address payable poster;
        address payable hunter;
        bool isCompleted;
        bool isActive;
        uint256 deadline;
    }

    mapping(uint256 => Bounty) public bounties;
    uint256 public bountyCounter;

    event BountyCreated(uint256 indexed id, string title, uint256 reward, address poster);
    event BountyAccepted(uint256 indexed id, address hunter);
    event BountyCompleted(uint256 indexed id, address hunter);

    function createBounty(
        string memory _title,
        string memory _description,
        uint256 _deadline
    ) public payable {
        require(msg.value > 0, "Reward must be greater than 0");
        
        bountyCounter++;
        bounties[bountyCounter] = Bounty({
            id: bountyCounter,
            title: _title,
            description: _description,
            reward: msg.value,
            poster: payable(msg.sender),
            hunter: payable(address(0)),
            isCompleted: false,
            isActive: true,
            deadline: _deadline
        });

        emit BountyCreated(bountyCounter, _title, msg.value, msg.sender);
    }

    function acceptBounty(uint256 _bountyId) public {
        Bounty storage bounty = bounties[_bountyId];
        require(bounty.isActive, "Bounty not active");
        require(bounty.hunter == address(0), "Bounty already accepted");
        
        bounty.hunter = payable(msg.sender);
        emit BountyAccepted(_bountyId, msg.sender);
    }

    function completeBounty(uint256 _bountyId) public {
        Bounty storage bounty = bounties[_bountyId];
        require(bounty.poster == msg.sender, "Only poster can mark as complete");
        require(bounty.hunter != address(0), "No hunter assigned");
        require(!bounty.isCompleted, "Already completed");
        
        bounty.isCompleted = true;
        bounty.isActive = false;
        bounty.hunter.transfer(bounty.reward);
        
        emit BountyCompleted(_bountyId, bounty.hunter);
    }

    function getAllBounties() public view returns (Bounty[] memory) {
        Bounty[] memory allBounties = new Bounty[](bountyCounter);
        for (uint256 i = 1; i <= bountyCounter; i++) {
            allBounties[i - 1] = bounties[i];
        }
        return allBounties;
    }
}
