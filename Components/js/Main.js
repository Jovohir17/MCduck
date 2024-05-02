// Функция для обновления времени
function updateTime() {
    // Задаем дату, до которой идет обратный отсчет (YYYY, MM (начиная с 0), DD, HH, MM, SS)
    const targetDate = new Date(2024, 10, 5, 0, 0, 0); // Например, 1 июля 2024 года

    // Получаем текущую дату и время
    const now = new Date();

    // Вычисляем разницу между текущей датой и заданной датой в миллисекундах
    const diff = targetDate - now;

    // Вычисляем количество дней, часов, минут и секунд
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Обновляем элементы на странице с новыми значениями времени
    document.getElementById('daysItem').querySelector('h2').textContent = days;
    document.getElementById('hoursItem').querySelector('h2').textContent = hours;
    document.getElementById('minutesItem').querySelector('h2').textContent = minutes;
    document.getElementById('secondsItem').querySelector('h2').textContent = seconds;
}

// Вызываем функцию updateTime() каждую секунду (1000 миллисекунд)
setInterval(updateTime, 0);



//
// let slideIndex = 0;
// showSlides();
//
// function showSlides() {
//     const slides = document.getElementsByClassName("img");
//     const currentSlide = document.getElementById("currentSlide");
//
//     // Скрыть все слайды
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove("active");
//     }
//
//     // Увеличиваем индекс слайда
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//
//     // Показываем текущий слайд с анимацией
//     slides[slideIndex - 1].style.opacity = "1"; // Плавно показываем слайд
//     slides[slideIndex - 1].classList.add("active");
//     currentSlide.value = slideIndex; // Обновляем индикатор текущего слайда
//
//     // Скрыть предыдущий слайд после небольшой задержки
//     setTimeout(function() {
//         const previousSlideIndex = slideIndex - 2 < 0 ? slides.length - 1 : slideIndex - 2;
//         slides[previousSlideIndex].style.opacity = "0"; // Плавно скрываем предыдущий слайд
//     }, 100); // Задержка перед скрытием предыдущего слайда (в миллисекундах)
//
//     // Задаем интервал автоматического переключения (например, каждые 3 секунды)
//     setTimeout(showSlides, 1500); // Измените время переключения по вашему желанию
// }

document.addEventListener("mousemove", e => {
    document.documentElement.style.setProperty("--mouse-x", e.clientX +'px');
    document.documentElement.style.setProperty("--mouse-y", e.clientY +'px');
});

// JavaScript used to set randomness for particles.
// Could be done via SSR

const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const PARTICLES = document.querySelectorAll('.particle')
PARTICLES.forEach(P => {
    P.setAttribute('style', `
		--x: ${RANDOM(20, 80)};
		--y: ${RANDOM(20, 80)};
		--duration: ${RANDOM(6, 20)};
		--delay: ${RANDOM(1, 10)};
		--alpha: ${RANDOM(40, 90) / 100};
		--origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
		--origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
		--size: ${RANDOM(40, 90) / 100};
	`)
})