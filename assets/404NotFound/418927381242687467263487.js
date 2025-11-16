function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const statusBox = document.getElementById("flagBox");
const isAdmin = getCookie("admin");

if (isAdmin === "Benar") {
  statusBox.innerHTML =
    "🎉 Kamu Admin!<br><br>FLAG: <b>404{C00K13s_H1J4Ck1ng_iS_34Sy}</b>";
  statusBox.style.background = "rgba(0,255,0,0.3)";
} else {
  statusBox.innerHTML =
    "❌ Kamu bukan Admin!<br>Kamu penyusup, Awas Kue tidak selalu benar ";
  statusBox.style.background = "rgba(255,0,0,0.3)";
}
