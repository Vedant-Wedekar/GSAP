gsap.from("#page1 #box1", {
    x:100
})

gsap.to("#page1 #box1", {
    x:500,
    repeat:-1,
    y:200
})

gsap.from("#page2 #box2", {
    x:100,
    y:100,
    scale:2,
    backgroundColor:"pink",
    repeat:-1,
    duration:2,
    ScrollerTrigger: {
        trigger:"#page2 #box2",
        scroller:"body",
        start:"top 50%",
        scrub:1,
        pin:true,marker:true
    }
})