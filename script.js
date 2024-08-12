var myForm = document.getElementById("myForm");

myForm?.addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    var formData = new FormData(myForm);

    fetch('main.php', {
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
    })
    .catch(function(error) {
        console.error('Произошла ошибка:', error);
        alert('Произошла ошибка при отправке данных');
    });
});



document.getElementById('burger').addEventListener('click', function() {
    const navList = document.querySelector('.header__nav-list');
    const overlay = document.getElementById('overlay');
    this.classList.toggle('active');
    navList.classList.toggle('active');
    overlay.classList.toggle('active');
});

document.getElementById('overlay').addEventListener('click', function() {
    const navList = document.querySelector('.header__nav-list');
    const burger = document.getElementById('burger');
    this.classList.remove('active');
    navList.classList.remove('active');
    burger.classList.remove('active');
});