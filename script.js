async function generateRandomAnimeImage() {
    const apiUrl = 'https://api.waifu.pics/sfw/waifu';
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const randomAnimeImage = document.getElementById("randomAnimeImage");
        randomAnimeImage.src = data.url;

        // Tạo một yêu cầu tải xuống
        const link = document.createElement('a');
        link.href = data.url;
        link.download = 'anime_image.jpg';
        link.click();
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
