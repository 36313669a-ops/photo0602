const gallery = document.getElementById("gallery");

let photos = [];

fetch("data/photos.json")
  .then(res => res.json())
  .then(data => {
    photos = data;
    render();
  });

function render() {
  photos.forEach(p => {
    const votes = getVotes(p.id);

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = `PHOTO/${p.id}.jpg`;
    img.className = "photo";

    const qrUrl = `${location.origin}/photo.html?id=${p.id}`;

    card.innerHTML = `
      <div class="img-wrap">
        <img src="PHOTO/${p.id}.jpg" class="photo"/>
        <img class="qr" src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(qrUrl)}"/>
      </div>

      <div class="info">
        <div>${p.title}</div>
        <div>👍 ${votes}</div>
        <a href="photo.html?id=${p.id}">進入投票</a>
      </div>
    `;

    gallery.appendChild(card);
  });
}

function getVotes(id) {
  return Number(localStorage.getItem("vote_" + id) || 0);
}