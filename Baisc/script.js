gsap.to("#box", {
  // Animation properties
  duration: 2,
  delay:2,
  x: 500,
  y: 500,
  rotation: 360,
  scale: 2,
   backgroundColor:"pink",
    borderRadius:"50%"
  },
  // Animation options
  )
  gsap.from("#box", {
    x:100,
    y:100,
    duration:2,
    rotation: 360,
    scale: 2,
    backgroundColor:"blue",
    stagger:1,
    yoyo:true
  })

  var tl = gsap.timeline()
  tl.to("#box",{
    
  })