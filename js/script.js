document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo');
    let currentIndex = 0;

    function showPhoto(index) {
        photos.forEach((photo, i) => {
            photo.classList.remove('active');
            if (i === index) {
                photo.classList.add('active');
            }
        });
    }

    document.getElementById('next-btn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % photos.length;
        showPhoto(currentIndex);
    });

    document.getElementById('prev-btn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        showPhoto(currentIndex);
    });

    showPhoto(currentIndex);

    document.addEventListener('click', function() {
        const music = document.getElementById('background-music');
        if (music.paused) {
            music.play();
        }
    }, { once: true });
});
