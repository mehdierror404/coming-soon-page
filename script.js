const form = document.getElementById('form');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('error');
const iconError = document.getElementById('iconError');

// Function to show error message, icon, and change border color
function showError() {
    iconError.style.visibility = 'visible';
    errorMessage.style.visibility = 'visible';
    emailInput.style.border = '2px solid hsl(0, 93%, 68%)';
}

// Function to clear error message, hide icon, and reset border color
function clearError() {
    iconError.style.visibility = 'hidden';
    errorMessage.style.visibility = 'hidden';    
    emailInput.style.border = '1px solid rgba(255, 204, 204, 0.9)';
}

form.addEventListener('submit', (e) => {
    const emailValue = emailInput.value.trim();

    if (emailValue === '' || !isValidEmail(emailValue)) {
        e.preventDefault();
        showError();
    } else {
        clearError();
    }
});

// Function to validate email format
function isValidEmail(email) {
    const emailParts = email.split('@');

    // Check for the correct number of parts
    if (emailParts.length !== 2) {
        return false;
    }

    const localPart = emailParts[0].trim();
    const domainPart = emailParts[1].trim();

    // Check if local part is not empty and domain part contains at least one dot
    return localPart.length > 0 && domainPart.includes('.') && domainPart.length >= 6;
}

// Add event listener to dynamically handle input changes
emailInput.addEventListener('input', function() {
    // Check if the email input is valid
    if (isValidEmail(this.value)) {
        clearError();
        this.style.border = '2px solid rgba(255, 204, 204, 0.9)';
    } else if (this.value === '') {
        // If input is empty, clear errors
        clearError();
        this.style.border = '2px solid rgba(255, 204, 204, 0.9)';
    }
});
