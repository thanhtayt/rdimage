async function generateRandomImage() {
    const apiKey = '42672181-94ab2764da5b745c3a762f97d';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const randomImage = document.getElementById("randomImage");
        const randomIndex = Math.floor(Math.random() * data.hits.length);
        randomImage.src = `${data.hits[randomIndex].largeImageURL}?random=${Math.random()}`;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
