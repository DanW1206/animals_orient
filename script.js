// Get references to the elements
const button = document.getElementById('actionButton');
const message = document.getElementById('message');
let clickCount = 0;

// Add an event listener to the button
button.addEventListener('click', () => {
    clickCount++;
    
    // Update the message text
    message.textContent = `You clicked the button ${clickCount} time(s)!`;
    
    // Simple conditional styling
    if (clickCount % 5 === 0) {
        message.style.color = 'green';
    } else {
        message.style.color = '#333';
    }
});