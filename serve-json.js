// Function to generate a random userId (e.g., 8-digit number as a string)
function generateRandomUserId() {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
}

// Fetch the static JSON file
fetch('./user-base-detail.json')
    .then(response => response.json())
    .then(data => {
        // Replace the placeholder userId with a random one
        data.data.userId = generateRandomUserId();

        // Set the response headers to mimic JSON API
        const jsonString = JSON.stringify(data);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Output the JSON (for testing in browser)
        document.body.innerText = jsonString;

        // Optionally, you can redirect or handle the response differently
        // For example, console.log(data) for debugging
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
        document.body.innerText = JSON.stringify({ error: 'Failed to load JSON' });
    });