const text = document.getElementById('wow')
const image = document.getElementById('troll')
const page = document.getElementById('body')
const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const textM = document.getElementById("modal-text");
const imagM = document.getElementById("modal-Image");
const video = document.getElementById("modal-video");

page.style.overflow = "hidden"
const delay = ms => new Promise(res => setTimeout(res, ms));
setTimeout(() => {
    AOS.init();
}, 3500);
const yourFunction = async () => {
  await delay(3500)
  console.log("test")
  page.style.overflow = "scroll"
  text.innerHTML="Bah fais ton shopping alors :D"
  image.src="https://media.tenor.com/eBGUp9AeCAMAAAAM/horse-flying.gif"
};

yourFunction()

function openModal(tit, te, ima, vid){
    title.textContent = tit;
    textM.textContent = te;
    imagM.src = ima;
    modal.classList.remove("hidden");
    document.body.className = "no-scroll";
    if(vid != null){
        video.classList.remove("hidden");
        video.getElementsByTagName("source")[0].src = vid;
        video.load();
    }
}

document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
    video.classList.add("hidden");
    document.body.className = ""
});
