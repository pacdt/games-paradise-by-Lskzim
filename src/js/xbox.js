let jogos = [
    {
        nome: "Forza Horizon 5",
        poster: "https://picfiles.alphacoders.com/479/thumb-479583.jpg",
    },
    {
        nome: "Forza Horizon 5",
        poster: "https://picfiles.alphacoders.com/479/thumb-479583.jpg",
    },
    {
        nome: "Forza Horizon 5",
        poster: "https://picfiles.alphacoders.com/479/thumb-479583.jpg",
    },
    {
        nome: "Forza Horizon 5",
        poster: "https://picfiles.alphacoders.com/479/thumb-479583.jpg",
    },
    {
        nome: "Forza Horizon 5",
        poster: "https://picfiles.alphacoders.com/479/thumb-479583.jpg",
    },
    {
        nome: "Forza Horizon 5",
        poster: "https://picfiles.alphacoders.com/479/thumb-479583.jpg",
    },
    {
        nome: "Forza Horizon 5",
        poster: "https://picfiles.alphacoders.com/479/thumb-479583.jpg",
    },
    {
        nome: "Forza Horizon 5",
        poster: "https://picfiles.alphacoders.com/479/thumb-479583.jpg",
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
