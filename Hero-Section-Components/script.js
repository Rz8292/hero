function firstPageAnim() {
	var tl = gsap.timeline();

	tl.from(".logo", {
		 y:'-10',
		 opacity:0,

		 duration:1.5,
		 ease: Expo.easeInOut
	})
 
	   .from(".navbar a", {
		 y:'-10',
		 opacity:0,

		 duration:1.5,
		 delay: -1,
		 ease: Expo.easeInOut
	})
}

var timeout;

function circlechaptakaro() {
    var timeout;
    var minicircle = document.getElementById('minicircle');

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        var xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX);
        var yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY);

        minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;

        timeout = setTimeout(function () {
            minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}

// Ensure the firstPageAnim function is called at the appropriate time
document.addEventListener('DOMContentLoaded', function () {
    const part1 = document.querySelector('.main-heading-part1');
    const part2 = document.querySelector('.main-heading-part2');
    const subHeading = document.querySelector('.sub-heading');
    const searchContainer = document.querySelector('.search-container');
    const searchIcon = document.querySelector('#search-icon');

    // Add the animate class to trigger CSS animations
    setTimeout(() => {
        part1.classList.add('animate');
    }, 500); // delay to start animation for part1

    setTimeout(() => {
        part2.classList.add('animate');
    }, 1000); // delay to start animation for part2
    
    setTimeout(function() {
        subHeading.style.opacity = '1';
    }, 500); 

    searchIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        searchContainer.classList.toggle('active');
    })
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            searchContainer.classList.remove('active');
        }
    });

    // Call the firstPageAnim function
    firstPageAnim();
    circlechaptakaro();
});
