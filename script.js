// Part 1 - Task 1: Personal Info Object

const userProfile = {
    name: "Student",
    birthYear: 2000,
    isDeveloper: true,
    hobbies: ["Programming", "Reading", "Learning English"]
};


// Part 1 - Task 2: Arithmetic Calculations

function displayProfile() {
    const currentYear = new Date().getFullYear();

    const age = currentYear - userProfile.birthYear;

    const totalHobbies = userProfile.hobbies.length;

    document.getElementById("profileName").textContent = userProfile.name;

    document.getElementById("profileBirthYear").textContent =
        userProfile.birthYear;

    document.getElementById("profileAge").textContent = age;

    document.getElementById("developerStatus").textContent =
        userProfile.isDeveloper ? "Yes" : "No";

    document.getElementById("hobbyCount").textContent = totalHobbies;

    console.log("User Profile:", userProfile);
    console.log("Current Age:", age);
    console.log("Total Hobbies:", totalHobbies);
}


// Part 2 - Task 3 and Task 4: Form and Event Listener

const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();

    const birthYear = Number(
        document.getElementById("birthYear").value
    );

    const currentYear = new Date().getFullYear();

    if (username === "") {
        alert("Please enter your username.");
        return;
    }

    if (
        !Number.isInteger(birthYear) ||
        birthYear < 1900 ||
        birthYear > currentYear
    ) {
        alert("Please enter a valid birth year.");
        return;
    }

    // Update the object
    userProfile.name = username;
    userProfile.birthYear = birthYear;

    // Update the profile on the page
    displayProfile();

    alert("Profile updated successfully!");
});


// Part 3 - Task 5: Creating and Removing Elements

const hobbyList = document.getElementById("hobbyList");

const newItem = document.getElementById("newItem");

const addButton = document.getElementById("addItem");

const removeButton = document.getElementById("removeItem");

const message = document.getElementById("message");


// Add Item Button

addButton.addEventListener("click", function() {
    const hobby = newItem.value.trim();

    if (hobby === "") {
        message.textContent = "Please enter a hobby first.";
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");

    listItem.textContent = hobby;

    listItem.className = "list-group-item";

    // Add the item to the list
    hobbyList.appendChild(listItem);

    // Update the hobbies array
    userProfile.hobbies.push(hobby);

    // Update the total number of hobbies
    displayProfile();

    newItem.value = "";

    message.textContent = "Hobby added successfully!";
});


// Remove Item Button

removeButton.addEventListener("click", function() {
    if (hobbyList.lastElementChild === null) {
        message.textContent = "The hobby list is empty.";
        return;
    }

    // Remove the last hobby from the array
    userProfile.hobbies.pop();

    // Remove the last item from the list
    hobbyList.removeChild(hobbyList.lastElementChild);

    // Update the total number of hobbies
    displayProfile();

    message.textContent = "Last hobby removed successfully.";
});


// Display the initial profile when the page loads

displayProfile();