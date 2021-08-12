let path = anime.path('#Layer_1 path');

anime({
    targets: path,
    translateX: path('x'),
    translateY: path('y'),
    easing: 'linear',
    duration: 400,
    loop: true,
    autoplay: true
})