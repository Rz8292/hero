var menuToggle = document.getElementById("menuToggle");

var menuBar = gsap.timeline({ paused: true});

menuBar.to('.bar-1', 0.5,{
	attr:{d: "M8,2 L2,8"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-2', 0.5,{
	autoAlpha:0
}, 'start')

menuBar.to('.bar-3', 0.5,{
	attr:{d: "M8,8 L2,2"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.reverse();

var navTl = gsap.timeline({ paused:true });

navTl.to('.fullpage-menu', {
	duration:0,
	display: "block",
	ease: Expo.easeInOut
}, "<");

navTl.to('.menu-bg', {
	duration:1,
	opacity:1,
	ease: Expo.easeInOut
}, "<");

navTl.from('.main-menu li a', {
	duration:1.5,
	y:"100%",
	rotateY:30,
	stagger:0.2,
	ease: Expo.easeInOut 
}, "-=0.5");

navTl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	navTl.reversed(!navTl.reversed());
})




let tl = gsap.timeline();

tl.from("#nav" ,{
    y:-50,
    opacity: 0,
    duration:1,
})
tl.from("#nav-left-part , #nav-right-part .nav-links" ,{
    y:-50,
    opacity: 0,
    duration:1,
    stagger:0.2
}, -0.2);
tl.from("#page1 #image-container #hero-img",{
    opacity: 0,
    duration:0.7
});
tl.from(" #right-part h1 , #right-part h1 ",{
    x: 500,
    opacity: 0,
    duration:0.6,
    stagger:0.4
})
tl.from("#right-part .cta-btn",{
    y:30,
    opacity: 0,
    duration:0.6,
})

tl.from("#image-wrapper #image-div ",{
    y:500,
    opacity: 0,
    duration:0.8,
    stagger:0.2
})