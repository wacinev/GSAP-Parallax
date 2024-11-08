const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true,
		invalidateOnRefresh: true
	}
});

gsap.utils.toArray("#hero *").forEach(layer => {
	const depth = layer.dataset.depth;
	tl.to(layer, { 
		y: () => -(layer.offsetHeight * depth), 
		ease: "none" 
	}, 0);
});

/*
This code was posted to the GSAP Forums by Jack Doyle, the creator of GSAP (it's in the embedded CodePen's "Babel" tab)
https://gsap.com/forums/topic/28309-scrolltrigger-parallax-header-recalculating-incorrectly-on-window-resize/?do=findComment&comment=140003
*/