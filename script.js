document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 's' || e.key === 'p')) {
        e.preventDefault();
    }
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});
