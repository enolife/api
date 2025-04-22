// Function to fetch JSON with a delay
function fetchJSONWithDelay(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(`Fetched JSON after ${delay/1000} seconds from ${url}:`, data);
                    resolve(data);
                })
                .catch(error => {
                    console.error(`Error fetching JSON after ${delay/1000} seconds from ${url}:`, error);
                    reject(error);
                });
        }, delay);
    });
}

// Main function to load JSON twice with 8-second delays
async function loadJSONTwice() {
    const jsonUrl = "json"; // Relative path to /api/json
    const delay = 8000; // 8 seconds in milliseconds

    try {
        // First fetch after 8 seconds
        console.log("Starting first JSON fetch...");
        const firstResult = await fetchJSONWithDelay(jsonUrl, delay);
        console.log("First fetch completed:", firstResult);

        // Second fetch after another 8 seconds (16 seconds total from start)
        console.log("Starting second JSON fetch...");
        const secondResult = await fetchJSONWithDelay(jsonUrl, delay);
        console.log("Second fetch completed:", secondResult);
    } catch (error) {
        console.error("Failed to load JSON:", error);
    }
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded, initiating JSON fetches...");
    loadJSONTwice();
});
