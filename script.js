const PILIHAN = { batu: "✊", gunting: "✌️", kertas: "🖐️" };

function pilihan_musuh() {
    let keys = Object.keys(PILIHAN);
    let index = Math.floor(Math.random() * keys.length);
    return keys[index];
}

function dapatkan_hasil(pemain, musuh) {
    if (pemain === musuh) return "seri";
    if (
        (pemain === "batu" && musuh === "gunting") ||
        (pemain === "gunting" && musuh === "kertas") ||
        (pemain === "kertas" && musuh === "batu")
    )
        return "menang";
    return "kalah";
}

const TEKS_MENANG = document.querySelector(`#teks-menang`);
const RONDE = document.querySelector("#ronde");

function cekPemenang() {
    let pemain = this.value;
    let musuh = pilihan_musuh();

    let hasil = dapatkan_hasil(pemain, musuh);
    TEKS_MENANG.innerText = hasil === "seri" ? "Permainan Seri!" : `Kamu ${hasil}!`;

    RONDE.innerHTML = `${PILIHAN[pemain]} VS ${PILIHAN[musuh]}`;
}

const BUTTONS = document.querySelectorAll(".pilihan button");

for (const btn of BUTTONS) {
    btn.addEventListener("click", cekPemenang);
}
