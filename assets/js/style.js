const header = document.querySelector("header");
const btn=document.querySelector("button")

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if(scrollY<=388){
        header.style.backgroundColor="#ffc017";
        btn.style.backgroundColor="black"
    }else{
        header.style.backgroundColor="white";
        btn.style.backgroundColor="#1a8917"
    }
});
