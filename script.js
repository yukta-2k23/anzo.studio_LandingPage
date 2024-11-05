var main = document.querySelector(".main")
var heading = document.querySelector('.content h1')

var h1dimension = heading.getBoundingClientRect() 

var h1centreX = h1dimension.width/2 + h1dimension.left
var h1centreY = h1dimension.height/2 + h1dimension.top

var xval = 0
var yval = 0

main.addEventListener('mousemove',function(dets){
    xval = (dets.x - h1centreX)/50
    yval = -(dets.y - h1centreY)/10

    gsap.to(heading,{
        transform:`rotateY(${xval}deg) rotateX(${yval}deg)`,
        duration:2,
        ease: 'expo.out'
    })

})