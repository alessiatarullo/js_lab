let count = 0

function increaseCount() {
    count ++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if (count == 10) {
        alert("You reached 10 followers!");
    }
    else if (count == 20) {
        alert("You reached 20 followers!");
    }
}

