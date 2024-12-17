//  start section landing
console.log("hello");

const ALLdivs = document.querySelectorAll(".landing .card-1");
console.log(ALLdivs);

let startIndex = 0;

function updateClas(newIndex) {
    ALLdivs[startIndex].classList.remove("activ-1"); 
    startIndex = newIndex; 
    ALLdivs[startIndex].classList.add("activ-1"); 
}


setInterval(() => {
    const nextIndex = (startIndex + 1) % ALLdivs.length; 
    updateClas(nextIndex);
    
}, 3000);


// start up button
function handlerScroll() {
    const numStudentPosition = parentCount.getBoundingClientRect().top; 
    const windowHeight = window.innerHeight; 

    if (numStudentPosition < windowHeight) {
        onReachTarget(); 
        window.removeEventListener('scroll', handlerScroll); 
    }
}

window.addEventListener('scroll', handlerScroll);

let upButton = document.querySelector(".Up")

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 300){
        upButton.style.display= "block"
    }else{
        upButton.style.display = "none"
    }
})

console.log(upButton);
upButton.onclick=()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}
// end up button

// start color mode

// // switch color in light mode

let light = document.querySelector("#light")

light.onclick = ()=>{
        document.documentElement.style.setProperty("--bg-color", "#fff")
        document.documentElement.style.setProperty("--secundery-bg-color", "#eee")
        document.documentElement.style.setProperty("--main-text-color", "#1e1e2f")
        document.documentElement.style.setProperty("--tranparent-bg-color", "rgba(255, 255, 255, 0.732")
    

}
// switch color in light mode

let dark = document.querySelector("#dark")

dark.onclick = ()=>{

document.documentElement.style.setProperty("--bg-color", "#1e1e2f")
        document.documentElement.style.setProperty("--secundery-bg-color", "#2a2a40")
        document.documentElement.style.setProperty("--main-text-color", "#fff")

document.documentElement.style.setProperty("--tranparent-bg-color", "#1e1e2fcb")

}

// // end color mode

