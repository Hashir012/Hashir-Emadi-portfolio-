// =========================
// Premium Portfolio Script
// =========================

// Smooth scrolling
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click',function(e){
        const target=this.getAttribute('href');
        if(target.startsWith('#')){
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// Navbar background on scroll
const nav=document.querySelector('nav');

window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        nav.style.background="rgba(0,0,0,.85)";
        nav.style.boxShadow="0 10px 25px rgba(0,0,0,.4)";
    }else{
        nav.style.background="rgba(0,0,0,.45)";
        nav.style.boxShadow="none";
    }
});

// Fade animation
const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll(".skill-card,.project-card,.box,.about-content,.about-image").forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});

// Button ripple effect
document.querySelectorAll(".btn,.project-btn").forEach(btn=>{
    btn.addEventListener("click",function(e){

        let circle=document.createElement("span");

        let x=e.clientX-this.offsetLeft;
        let y=e.clientY-this.offsetTop;

        circle.style.left=x+"px";
        circle.style.top=y+"px";
        circle.className="ripple";

        this.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },600);

    });
});

// Typing effect
const text="AI & Cloud Computing Professional";
const title=document.querySelector(".left h2");

if(title){

let i=0;
title.innerHTML="";

function typing(){

    if(i<text.length){
        title.innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,70);
    }

}

typing();

}

// Active menu
const sections=document.querySelectorAll("section");
const links=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){
current=section.getAttribute("id");
}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){
link.classList.add("active");
}

});

});