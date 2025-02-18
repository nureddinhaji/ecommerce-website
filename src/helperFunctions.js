// Function to validate new password
function validatePassword(newPassword) {
    if (newPassword.length < 8) {
        return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(newPassword)) {
        return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(newPassword)) {
        return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(newPassword)) {
        return "Password must contain at least one number";
    }
    return "";
}

export {validatePassword};