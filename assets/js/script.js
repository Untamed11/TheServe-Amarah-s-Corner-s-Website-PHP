window.onload = function () {
    var navbar = document.getElementById('bottom-navbar');
    var overlay = document.getElementById('backgroundOverlay');
    var navbarbtn = document.getElementById('navbar');
    var search = document.getElementById('search-form');
    var searchbtn = document.getElementById('search-btn');
    document.onclick = function (e) {
        if (e.target.id == 'backgroundOverlay') {
            navbar.classList.remove('active');
            overlay.style.display = 'none';
        }
        if (e.target === navbarbtn) {
            navbar.classList.toggle('active');
            overlay.style.display = 'block';
            search.classList.remove('active');
        }
        if (e.target.id == 'backgroundOverlay') {
            search.classList.remove('active');
            overlay.style.display = 'none';
        }
        if (e.target === searchbtn) {
            search.classList.toggle('active');
            overlay.style.display = 'block';
            navbar.classList.remove('active');
        }
    };
    window.onscroll = () => {
        search.classList.remove('active');
        navbar.classList.remove('active');
    }
};