async function generateRandomAnimeImage() {
    const apiUrl = 'https://api.waifu.pics/sfw/waifu';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const randomAnimeImage = document.getElementById("randomAnimeImage");
        randomAnimeImage.src = data.url;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
