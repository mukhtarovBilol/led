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

const headerLink = document.querySelector(".wrapper__desc-btn")

headerLink.addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn")?.addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box")?.addEventListener('click', event => {
    event._isClickWithInModal = true;
});
    
document.getElementById("my-modal")?.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

const formBtn = document.querySelector(".form__btn")
formBtn?.addEventListener("click", function(event){
    event.preventDefault(); // Предотвращаем отправку формы на сервер
    console.log("Форма не отправлена");
});