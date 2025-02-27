/*  跑馬燈 */
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.image-slider .slide');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    let currentIndex = 0;

    // 顯示圖片的函數
    function showSlide(index) {
        // 隱藏所有圖片
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        // 顯示當前圖片
        slides[index].classList.add('active');
    }

    // 每 3 秒切換一次圖片
    setInterval(function () {
        currentIndex = (currentIndex + 1) % slides.length; // 循環顯示圖片
        showSlide(currentIndex);
    }, 3000); // 3秒換一次圖片

    // 點擊左箭頭切換圖片
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // 點擊右箭頭切換圖片
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // 初始化顯示第一張圖片
    showSlide(currentIndex);
});

/* 三個槓槓 */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

/* 下拉選單 */
document.querySelector('.dropdown-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle('active');
});