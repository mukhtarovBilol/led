var swiperThumbs = new Swiper('.mySwiper', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var swiperMain = new Swiper('.mySwiper2', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: swiperThumbs,
    },
});

document.getElementById('model-select').addEventListener('change', function() {
    const selectedModel = this.value;
    const modelDetails = document.getElementById('model-details');
    modelDetails.textContent = `Вы выбрали модель: ${selectedModel}`;
});

document.getElementById('mount-select').addEventListener('change', function() {
    const selectedMount = this.value;
    const mountDetails = document.getElementById('mount-details');
    mountDetails.textContent = `Вы выбрали вид крепления: ${selectedMount}`;
});

document.getElementById('kss-select').addEventListener('change', function() {
    const selectedKss = this.value;
    const kssDetails = document.getElementById('kss-details');
    kssDetails.textContent = `Вы выбрали тип КСС: ${selectedKss}`;
});