const params = new URLSearchParams(location.search);
const id = params.get("id");

const box = document.getElementById("photoBox");

const voted = localStorage.getItem("voted_" + id);

box.innerHTML = `
  <div class="single">
    <img src="PHOTO/${id}.jpg" class="bigphoto"/>
    
    <div class="buttons">
      <button onclick="vote()">👍 投票</button>
      <button onclick="unvote()">↩ 撤回</button>
    </div>

    <a href="index.html">回首頁</a>
  </div>
`;

function vote() {
  if (localStorage.getItem("voted_" + id)) return;

  let v = Number(localStorage.getItem("vote_" + id) || 0);
  localStorage.setItem("vote_" + id, v + 1);
  localStorage.setItem("voted_" + id, "1");

  alert("投票成功");
}

function unvote() {
  if (!localStorage.getItem("voted_" + id)) return;

  let v = Number(localStorage.getItem("vote_" + id) || 0);
  localStorage.setItem("vote_" + id, Math.max(0, v - 1));
  localStorage.removeItem("voted_" + id);

  alert("已撤回");
}