const soups = [
	{
		id: 1,
		soupName: "CHIKEN SOUP",
		soupImage:
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQA-PMsMds02tWpF4ZrSgvTWVZy5jOB7P1Sg&s",
	},	
	{
	
		id: 2,
		soupName: "VEGTABLE SOUP",
		imageURL:
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIl1RiPdcL92FzB4GWqU7hcZcfnEV6jzhbzQ&s",
	},
	{
		soupName: "MUTTON SOUP",
		imageURL:
		"https://www.seriouseats.com/thmb/OA9APJ1aPo98jYVPfIzHPILNPJU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__12__20171115-chicken-soup-vicky-wasik-11-80db1a04d84a43a089e0559efdddd517.jpg",
        
	},
	{
		id: 4,
		soupName: "CORN SOUP",
		imageURL:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c3OQXz74gy2y1QrFdD1tVTw9YrL-5_SA-w&s",
	},
	{
		id: 5,
		soupName: "TOMATO SOUP",
		imageURL:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtiyxr_oZ63ESEgIw4it3zF3__p8qPzROfg&s",
	},
	{
	   id: 1,
       soupName: "CHIKEN SOUP",
	   soupImage:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQA-PMsMds02tWpF4ZrSgvTWVZy5jOB7P1Sg&s",
    },
		
   {

	   id: 2,
	   soupName: "VEGTABLE SOUP",
	   imageURL:
	     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIl1RiPdcL92FzB4GWqU7hcZcfnEV6jzhbzQ&s" ,
   },
   {
	   soupName: "MUTTON SOUP",
	   imageURL:
	     "https://www.seriouseats.com/thmb/OA9APJ1aPo98jYVPfIzHPILNPJU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__12__20171115-chicken-soup-vicky-wasik-11-80db1a04d84a43a089e0559efdddd517.jpg",
	
   },
   {
	  id: 4,
	  soupName: "CORN SOUP",
	  imageURL:
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c3OQXz74gy2y1QrFdD1tVTw9YrL-5_SA-w&s",
   },
   {
	  id: 5,
	  soupName: "TOMATO SOUP",
	 imageURL:
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtiyxr_oZ63ESEgIw4it3zF3__p8qPzROfg&s",
   },

   {

       id: 1,
       soupName: "CHIKEN SOUP",
      soupImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQA-PMsMds02tWpF4ZrSgvTWVZy5jOB7P1Sg&s",
    },
	
    {

     id: 2,
     soupName: "VEGTABLE SOUP",
     imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIl1RiPdcL92FzB4GWqU7hcZcfnEV6jzhbzQ&s",
    },
    {
     soupName: "MUTTON SOUP",
      imageURL:
      "https://www.seriouseats.com/thmb/OA9APJ1aPo98jYVPfIzHPILNPJU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__12__20171115-chicken-soup-vicky-wasik-11-80db1a04d84a43a089e0559efdddd517.jpg",

   },
   {
     id: 4,
     soupName: "CORN SOUP",
     imageURL:
	   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c3OQXz74gy2y1QrFdD1tVTw9YrL-5_SA-w&s",
    },
    {
     id: 5,
     soupName: "TOMATO SOUP",
     imageURL:
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtiyxr_oZ63ESEgIw4it3zF3__p8qPzROfg&s",
    },	
	
]
const mainDiv= document.getElementById('box')
function displayData ()
{
    soups.forEach((val) =>
    {
        const soupDiv = document.createElement('div');
        soupDiv.classList.add('soup')
        const soupImage = document.createElement('img');//<img>
        soupImage.src = val.imageURL//<img src="">
        soupImage.alt= val.soupName//<img src="" alt="">
        const souptitle = document.createElement('h2');//<h2></h2>
        souptitle.textContent = val.soupName;
        soupDiv.append(soupImage, souptitle);
        mainDiv.appendChild(soupDiv)
    })   
}
displayData()