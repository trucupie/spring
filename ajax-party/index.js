// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

document.addEventListener('DOMContentLoaded', function() {
    const getGiphy = async function(term){
        const { data } = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${term}&limit=1`);

        return data;
    };

    const searchForm = document.getElementById('search-form');
    const searchTerm = document.getElementById('search-term');
    const removeImagesButton = document.getElementById('remove-images');
    const gifContainer = document.getElementById('gif-container');

    searchForm.addEventListener('submit', async function(event){
        event.preventDefault();

        const term = searchTerm.value;
        const { data:[ { images: { original: gif } } ] } = await getGiphy(term);
        const image = document.createElement('img');
        image.src = gif.url;
        gifContainer.appendChild(image);
    });

    removeImagesButton.addEventListener('click', function () {
        gifContainer.innerHTML = '';
    });
});