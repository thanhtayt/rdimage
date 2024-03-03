async function generateRandomImage() {
    const apiKey = 'PtSfavOuLJSBm9TR7DHCV1fKueYGfyt44dASK4t8ErOQEitURMxnoJs4';
    const random = Math.random(); // Generate random number
    const apiUrl = `https://api.pexels.com/v1/curated?per_page=1&random=${random}`; // Add random number as parameter

    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: apiKey
            }
        });
        const data = await response.json();

        const randomImage = document.getElementById("randomImage");
        randomImage.src = data.photos[0].src.large;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
