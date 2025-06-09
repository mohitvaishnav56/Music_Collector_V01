let cardContainer = document.querySelector(".card-container");
let cards = [];

let openForm = document.querySelector(".openForm");
let formCont = document.querySelector(".form-cont");
openForm.addEventListener("click", () => {
    formCont.style.display = "block";
});

let closeForm = document.querySelector(".closeForm");
closeForm.addEventListener("click", () => {
    formCont.style.display = "none";
});

let songName = document.querySelector(".song-name");
let artistName = document.querySelector(".artist-name");
let imgurl = document.querySelector(".imgurl");
let coverBg = document.querySelector(".coverBg");
let submitBtn = document.querySelector(".submitBtn");
let favCount = document.querySelector(".fav-count");

// 💡 Utility function to create and render a single card
function renderCard(card) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `
        <div class="img" style="background-image: url(${card.coverBg});">
            <img src="${card.imgurl}" alt="">
        </div>
        <div class="content">
            <h3 class="song-name">${card.name}</h3>
            <p class="artist-name">${card.artist}</p>
            <button class="favBtn" style="background-color: #F54A00;">favourite</button>
        </div>
    `;

    cardContainer.appendChild(cardDiv);

    // Attach fav button functionality
    let favBtn = cardDiv.querySelector(".favBtn");
    favBtn.addEventListener("click", () => {
        if (favBtn.innerText === "favourite") {
            favBtn.innerText = "remove";
            favBtn.style.backgroundColor = "rgb(125, 226, 36)";
            favCount.innerText = Number(favCount.innerText) + 1;
        } else {
            favBtn.innerText = "favourite";
            favBtn.style.backgroundColor = "#F54A00";
            favCount.innerText = Number(favCount.innerText) - 1;
        }
    });
}

// 🧠 When the user submits the form
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const newCard = {
        name: songName.value,
        artist: artistName.value,
        imgurl: imgurl.value,
        coverBg: coverBg.value,
    };

    cards.push(newCard);      // Add to array
    renderCard(newCard);      // Render this card
    formCont.style.display = "none"; // Close form

    // Clear form inputs
    songName.value = "";
    artistName.value = "";
    imgurl.value = "";
    coverBg.value = "";
});
