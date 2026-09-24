const text = document.getElementById('wow')
const image = document.getElementById('troll')
const delay = ms => new Promise(res => setTimeout(res, ms));
setTimeout(() => {
    AOS.init();
}, 3500);
const yourFunction = async () => {
  await delay(2000)
  console.log("test")
  text.innerHTML="Bah fais ton shopping alors :D"
  image.src="https://media.tenor.com/eBGUp9AeCAMAAAAM/horse-flying.gif"
};

yourFunction()