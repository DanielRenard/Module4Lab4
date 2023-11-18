
function addArtistCard(name, portfolio) {
    portfolio.forEach((item) => {
         const template = document
        .getElementById("card-template")
        .content.cloneNode(true);
      template.querySelector(".card-title").innerText = name;
      template.querySelector(".card-text").innerText = item.title;
      template.querySelector(".card-img-top").src = item.url;
      document.querySelector("#card").appendChild(template);
    });
}


const artists = [
    {
      name: "Vincent van Gogh",
      portfolio: [
        {
          title: "Portrait",
          url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
        },
        {
          title: "Sky",
          url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
        },
      ],
    },
  
    {
      name: "Leonardo daVinci",
      portfolio: [
        {
          title: "Mona Lisa",
          url: "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
        },
        {
          title: "Vitruvian Man",
          url: "https://cdn.britannica.com/68/145968-050-01768DAD/Vitruvian-Man-Leonardo-da-Vinci-Gallerie-dellAccademia.jpg",
        },
      ],
    },
  ];

  artists.forEach((item) => {
    addArtistCard(item.name, item.portfolio);
  });