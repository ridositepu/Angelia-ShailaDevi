const hearts = document.getElementById("hearts");
function makeHeart(count=1){
  for(let i=0;i<count;i++){
    const h=document.createElement("span");
    h.className="heart";
    h.textContent=["♥","♡","❤","✦"][Math.floor(Math.random()*4)];
    h.style.left=Math.random()*100+"%";
    h.style.fontSize=(12+Math.random()*24)+"px";
    h.style.animationDuration=(5+Math.random()*5)+"s";
    h.style.animationDelay=(Math.random()*1.5)+"s";
    hearts.appendChild(h);
    setTimeout(()=>h.remove(),10000);
  }
}
setInterval(()=>makeHeart(1),900);
makeHeart(12);

const modal=document.getElementById("modal");
document.getElementById("openLetter").onclick=()=>{document.querySelector(".letter").scrollIntoView({behavior:"smooth"});setTimeout(()=>{modal.classList.add("show");modal.setAttribute("aria-hidden","false")},700)};
document.getElementById("closeModal").onclick=()=>{modal.classList.remove("show");modal.setAttribute("aria-hidden","true")};
modal.addEventListener("click",e=>{if(e.target===modal) modal.classList.remove("show")});
document.getElementById("surprise").onclick=()=>{modal.classList.add("show");makeHeart(45)};
document.getElementById("moreHearts").onclick=()=>makeHeart(35);
document.getElementById("scrollDown").onclick=()=>document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
document.getElementById("bigHeart").onclick=()=>makeHeart(20);

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
