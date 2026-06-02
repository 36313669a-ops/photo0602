const admin = document.getElementById("admin");

for (let i = 1; i <= 65; i++) {
  const id = String(i).padStart(3, "0");
  const votes = localStorage.getItem("vote_" + id) || 0;

  const div = document.createElement("div");
  div.innerHTML = `${id} - ${votes} 票`;
  admin.appendChild(div);
}

function exportData() {
  let data = {};

  for (let i = 1; i <= 65; i++) {
    const id = String(i).padStart(3, "0");
    data[id] = localStorage.getItem("vote_" + id) || 0;
  }

  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "votes.json";
  a.click();
}