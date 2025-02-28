const input = document.getElementById('inp');
const button = document.getElementById('btn');
async function getMovies ()
{
      fetch(`hhttps://www.omdbapi.com/?i=tt3896198&apikey=pikachu${input.value}`)
       .then((res) => res.json())
       .then((data) => displayData(data.Search))
       .catch((err) => console.log(err))
    
}
button.addEventListener("click", getMovies)
const mainDiv= document.getElementById('main')
function displayData (movies)
{
    movies.forEach((m) =>
    {
        const movieDiv = document.createElement('div');
        const movieImage = document.createElement('img');
        movieImage.src = m.Poster;
        movieImage.alt = m.Title;
        const movieTitle = document.createElement('h2');
        movieTitle.textContent = m.Title;
        movieDiv.append(movieImage, movieTitle)
        mainDiv.appendChild(movieDiv)
 })   
}