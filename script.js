const correctPassword = "targetsecure411";

document.getElementById("openModalButton").onclick = function() {
    document.getElementById("passwordModal").style.display = "flex";
}

document.getElementById("closeModalButton").onclick = function() {
    document.getElementById("passwordModal").style.display = "none";
}

function checkPassword() {
    const enteredPassword = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");

    if (enteredPassword === correctPassword) {
        document.getElementById("passwordModal").style.display = "none";
        document.getElementById("protectedContent").style.display = "block";
        document.getElementById("openModalButton").style.display = "none";
    } else {
        errorMessage.textContent = "Access denied: Incorrect Password. Please try again.";
    }
}

window.onclick = function(event) {
    const modal = document.getElementById("passwordModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}