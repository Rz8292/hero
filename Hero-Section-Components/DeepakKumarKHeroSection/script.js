document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#get-started').scrollIntoView({ behavior: 'smooth' });
});
