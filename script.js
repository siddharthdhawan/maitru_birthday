
let current=0;
const pages=document.querySelectorAll(".page");
function nextPage(){
pages[current].classList.remove("active");
current=Math.min(current+1,pages.length-1);
pages[current].classList.add("active");
}
function blowCandle(){
document.getElementById("wish").innerHTML=
"<h2>🎉 I hope every wish you made tonight finds its way to you ❤️</h2><button onclick='nextPage()'>My Promise ➜</button>";
}
