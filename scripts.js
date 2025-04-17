let modelName = "XYZ";
let duration = 0;

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost;
    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }

    costLabel.innerHTML = totalCost.toFixed(2); // Makes it look like 123.00
}

function changeModel() {
    let modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}

function changeDuration() {
    let newDuration = prompt("Enter number of days to book:");
    newDuration = parseInt(newDuration);

    if (!isNaN(newDuration) && newDuration >= 0) {
        duration = newDuration;
        document.getElementById("duration-text").innerHTML = duration;
        recalculate();
    } else {
        alert("Please enter a valid number of days!");
    }
}

// Add event listeners after the DOM loads
window.onload = function () {
    let modelButton = document.getElementById("model-button");
    let durationButton = document.getElementById("duration-button");

    modelButton.addEventListener("click", changeModel);
    durationButton.addEventListener("click", changeDuration);
};


modelButton.addEventListener("click", changeModel);


let durationButton = document.getElementById("change-duration");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    
    let newDuration = prompt("Enter the new duration in months:");
    
    duration = Number(newDuration);
    
    durationText.innerHTML = duration + " months";
    
    recalculate();
}

durationButton.addEventListener("click", changeDuration);

function generateGitHubPagesURL(username, repoName) {
    return "https://" + username + ".github.io/" + repoName;
}


let username = "username"; 
let repoName = "username";

let websiteURL = generateGitHubPagesURL(username, repoName);
console.log("Your website URL is:", websiteURL);
