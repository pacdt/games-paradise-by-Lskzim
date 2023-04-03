let jogos = [
    {
        nome: "God Of War",
        poster: "https://img.elo7.com.br/product/main/38C078F/poster-adesivo-god-of-war-42-5x60cm-desenho.jpg",
    },
    {
        nome: "The last of US",
        poster: "https://static.gamevicio.com/imagens_itens/big/13/the-last-of-us-remastered-cover-012333.webp",
    },
    {
        nome: "God Of War",
        poster: "https://img.elo7.com.br/product/main/38C078F/poster-adesivo-god-of-war-42-5x60cm-desenho.jpg",
    },
    {
        nome: "God Of War",
        poster: "https://img.elo7.com.br/product/main/38C078F/poster-adesivo-god-of-war-42-5x60cm-desenho.jpg",
    },
    {
        nome: "God Of War",
        poster: "https://img.elo7.com.br/product/main/38C078F/poster-adesivo-god-of-war-42-5x60cm-desenho.jpg",
    },
    {
        nome: "God Of War",
        poster: "https://img.elo7.com.br/product/main/38C078F/poster-adesivo-god-of-war-42-5x60cm-desenho.jpg",
    },
    {
        nome: "God Of War",
        poster: "https://img.elo7.com.br/product/main/38C078F/poster-adesivo-god-of-war-42-5x60cm-desenho.jpg",
    },
    {
        nome: "God Of War",
        poster: "https://img.elo7.com.br/product/main/38C078F/poster-adesivo-god-of-war-42-5x60cm-desenho.jpg",
    },
];

const projectDiv = document.getElementById("games");
projectDiv.innerHTML = "";

const cardElems = jogos.map((card) => {
	return `
        <div class="game">
            <img class="poster" src="${card.poster}" alt="${card.nome} poster" title="${card.nome}" />
                <h3>${card.nome}</h3>
                <button>Play Now</button>
        </div>
    `;
});

projectDiv.innerHTML = cardElems.join("");
