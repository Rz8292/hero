document.getElementById('theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('moon').classList.toggle('visible');
    document.getElementById('sun').classList.toggle('visible');
});

document.addEventListener('DOMContentLoaded', function() {
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('moon').classList.remove('visible');
        document.getElementById('sun').classList.add('visible');
    } else {
        document.getElementById('moon').classList.add('visible');
        document.getElementById('sun').classList.remove('visible');
    }
});

function loadAnimation(containerId, animationPath){
    lottie.loadAnimation({
        container: document.getElementById(containerId),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath
    });
}

loadAnimation('web', 'animations/web.json');
loadAnimation('coding', 'animations/coding.json');
loadAnimation('time', 'animations/time.json');
loadAnimation('animation', 'animations/animation.json');
loadAnimation('image1', 'animations/image.json');




