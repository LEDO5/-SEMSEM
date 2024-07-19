let points = 0;
let boostMultiplier = 1;
let boostPrice = [100, 1000, 10000, 50000, 100000, 250000, 500000, 1000000, 10000000, 25000000];
let boostLevel = 0;

// Mock user ID (replace with real user ID from authentication system)
let userID = localStorage.getItem('userID');
if (!userID) {
    userID = 'user' + Math.floor(Math.random() * 100000);
    localStorage.setItem('userID', userID);
}

// Generate referral link
let inviteLink = `https://example.com/invite?ref=${userID}`;

// Mock data for invite list (replace with real data from backend)
let inviteList = ["User1", "User2", "User3"];

document.getElementById('tapCoin').addEventListener('click', () => {
    points += boostMultiplier;
    document.getElementById('points').textContent = points;
});

document.getElementById('boostButton').addEventListener('click', () => {
    if (boostLevel < boostPrice.length && points >= boostPrice[boostLevel]) {
        points -= boostPrice[boostLevel];
        boostMultiplier++;
        boostLevel++;
        document.getElementById('points').textContent = points;
        if (boostLevel < boostPrice.length) {
            document.getElementById('boostButton').textContent = `Buy Boost (${boostPrice[boostLevel]} Points)`;
        } else {
            document.getElementById('boostButton').disabled = true;
            document.getElementById('boostButton').textContent = "Max Boost Reached";
        }
    } else {
        alert('Not enough points to buy boost!');
    }
});

document.getElementById('inviteButton').addEventListener('click', () => {
    window.location.href = 'invite.html';
});

function goBack() {
    window.location.href = 'index.html';
}

if (document.getElementById('inviteLink')) {
    document.getElementById('inviteLink').textContent = inviteLink;
}

if (document.getElementById('inviteList')) {
    let inviteListElement = document.getElementById('inviteList');
    inviteList.forEach(user => {
        let li = document.createElement('li');
        li.textContent = user;
        inviteListElement.appendChild(li);
    });
}
