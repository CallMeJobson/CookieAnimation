
// Timeline variable for Gsap
const timeline = gsap.timeline({defaults: {duration:0.75, ease: "power1.out"} })

//.cookie-container is a class
timeline.fromTo(".cookie-container", {scale: 0}, {scale: 2, ease: "elastic.out(1, 0.4)", duration: 1.5})

timeline.fromTo(".cookie",{opacity: 0, x:-50, rotation:"-45deg"}, {opacity: 1, x:0, rotation:"0deg"}, "<60%") //The 60 percent is 60% of the way through the animation
// The commend below syncs with the command above
timeline.fromTo(".text",{opacity: 0, x:30}, {opacity: 1, x:0}, "<")


//Cookie Jump 
//-1 makes the cookie jump forever
timeline.fromTo(".cookie", {y: 0, rotation: "0deg"}, {y:-20, yoyo:true, repeat: -1, rotation: -20})

//Crums
timeline.fromTo("#crums", {y: 0}, {y:-20, yoyo:true, repeat: -1}, "<")



//Fading the cookie out 
const button = document.querySelector('button')
button.addEventListener("click", () =>{
  gsap.to('.cookie-container',{opacity: 0, y:100, duration: 0.75, ease: "power1.out"})  
})


