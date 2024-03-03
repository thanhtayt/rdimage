async function generateRandomImage() {
    const width = 500; // Kích thước ảnh (chiều rộng)
    const height = 300; // Kích thước ảnh (chiều cao)
    const apiUrl = `https://picsum.photos/${width}/${height}`;

    try {
        const response = await fetch(apiUrl);
        const randomImage = document.getElementById("randomImage");
        randomImage.src = response.url;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
