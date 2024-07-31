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

document.addEventListener('DOMContentLoaded', function() {
    // Обработка клика на элемент кастомного селекта
    document.querySelector('.custom-select').addEventListener('click', function() {
        this.querySelector('.select-items').classList.toggle('select-hide');
        this.querySelector('.select-selected').classList.toggle('select-arrow-active');
    });

    // Обработка клика на элемент внутри кастомного селекта
    document.querySelectorAll('.custom-select .select-items div').forEach(function(item) {
        item.addEventListener('click', function() {
            const select = this.closest('.custom-select');
            const selectedValue = this.getAttribute('data-value');
            const selectedText = this.textContent;

            // Обновляем текст выбранной модели в кастомном селекте
            select.querySelector('.select-selected').textContent = selectedText;
            select.querySelector('.select-items').classList.add('select-hide');
            select.querySelector('.select-selected').classList.remove('select-arrow-active');

            // Обновляем текст в элементе model-details
            document.getElementById('model-details').textContent = `Вы выбрали тип: ${selectedValue}`;
        });
    });

    // Закрытие кастомного селекта, если клик происходит вне его
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.select-selected')) {
            document.querySelectorAll('.select-items').forEach(function(item) {
                item.classList.add('select-hide');
            });
            document.querySelectorAll('.select-selected').forEach(function(item) {
                item.classList.remove('select-arrow-active');
            });
        }
    });
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