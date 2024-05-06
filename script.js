function validateSyntax() {
    // Retrieve input value
    const input = document.getElementById('petInput').value;

    // Placeholder for validation result
    let result = '';

    // Regular expression to validate syntax: starts with 'pet_' followed by at least 1 alphanumeric character
    const validSyntax = /^pet_[a-zA-Z0-9]+$/;

    // Check if input matches the valid syntax pattern
    if (validSyntax.test(input)) {
        result = 'Valid Syntax ✅';
    } else {
        result = 'Invalid Syntax ❌';
    }
    
    // Display validation result
    document.getElementById('result').innerText = result;
}
