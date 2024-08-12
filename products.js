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

document?.getElementById('mount-select')?.addEventListener('change', function() {
    const selectedMount = this.value;
    const mountDetails = document.getElementById('mount-details');
    mountDetails.textContent = `Вы выбрали вид крепления: ${selectedMount}`;
});

document?.getElementById('kss-select')?.addEventListener('change', function() {
    const selectedKss = this.value;
    const kssDetails = document.getElementById('kss-details');
    kssDetails.textContent = `Вы выбрали тип КСС: ${selectedKss}`;
});

const headerLink = document.querySelector(".wrapper__desc-btn")
const headerLink2 = document.querySelector(".wrapper__desc-btn2")

headerLink.addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn")?.addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open")
})

function closeModal() {
    document.getElementById("my-modal").classList.remove("open")
}

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

headerLink2.addEventListener("click", function () {
    document.getElementById("my-modal2").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn2")?.addEventListener("click", function () {
    document.getElementById("my-modal2").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal2").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal2 .modal__box2")?.addEventListener('click', event => {
    event._isClickWithInModal = true;
});
    
document.getElementById("my-modal2")?.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// 
document.getElementById('decoding__content-1').addEventListener('mouseover', function() {
    document.getElementById('span_0').style.backgroundColor = 'lightcoral';
});

document.getElementById('decoding__content-1').addEventListener('mouseout', function() {
    document.getElementById('span_0').style.backgroundColor = '#ccc';
});
// 

// 
document.getElementById('decoding__content-2').addEventListener('mouseover', function() {
    document.getElementById('span_2').style.backgroundColor = 'lightcoral';
});

document.getElementById('decoding__content-2').addEventListener('mouseout', function() {
    document.getElementById('span_2').style.backgroundColor = '#ccc';
});
// 

// 
document.getElementById('decoding__content-3').addEventListener('mouseover', function() {
    document.getElementById('span_3').style.backgroundColor = 'lightcoral';
});

document.getElementById('decoding__content-3').addEventListener('mouseout', function() {
    document.getElementById('span_3').style.backgroundColor = '#ccc';
});
// 

// 
document.getElementById('decoding__content-4').addEventListener('mouseover', function() {
    document.getElementById('span_5').style.backgroundColor = 'lightcoral';
});

document.getElementById('decoding__content-4').addEventListener('mouseout', function() {
    document.getElementById('span_5').style.backgroundColor = '#ccc';
});
// 

// 
document.getElementById('decoding__content-5').addEventListener('mouseover', function() {
    document.getElementById('span_6').style.backgroundColor = 'lightcoral';
});

document.getElementById('decoding__content-5').addEventListener('mouseout', function() {
    document.getElementById('span_6').style.backgroundColor = '#ccc';
});
// 

// 
document.getElementById('decoding__content-6').addEventListener('mouseover', function() {
    document.getElementById('span_1').style.backgroundColor = 'lightcoral';
});

document.getElementById('decoding__content-6').addEventListener('mouseout', function() {
    document.getElementById('span_1').style.backgroundColor = '#ccc';
});
// 

// 
document.getElementById('decoding__content-7').addEventListener('mouseover', function() {
    document.getElementById('span_4').style.backgroundColor = 'lightcoral';
});

document.getElementById('decoding__content-7').addEventListener('mouseout', function() {
    document.getElementById('span_4').style.backgroundColor = '#ccc';
});
// 

// const wrapperDesc = document.querySelector('.wrapper__desc');
// const h1Element = wrapperDesc.querySelector('h1');

// var myForm2 = document.getElementById("myForm2");
// var formData = new FormData(myForm2);
// formData += h1Element.innerText
// console.log(formData);

var myForm2 = document.getElementById("myForm2");

myForm2?.addEventListener("submit2", function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    var formData = new FormData(myForm2);

    fetch('../main.php', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Ошибка ' + response.status);
        }
        return response.text();
    })
    .then(function(data) {
        alert('Данные успешно отправлены');
        closeModal(); 
    })
    .catch(function(error) {
        console.error('Произошла ошибка:', error);
        alert('Произошла ошибка при отправке данных');
    });
});