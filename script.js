async function generateRandomImage() {
    const accessKey = 'HkWEghBdGpqOCTyXQ_F_mWO32ayCGO0HglfKgq89Whk';
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const randomImage = document.getElementById("randomImage");
        randomImage.src = data.urls.regular;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
