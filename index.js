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

/* hamburger */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const dropdowns = document.querySelectorAll('.dropdown');
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isTablet = window.matchMedia('(max-width: 1024px)').matches;
    
    // 漢堡菜單點擊事件
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // 處理下拉菜單
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle') || dropdown.querySelector('a');
        const content = dropdown.querySelector('.dropdown-content');
        
        if (!content) return;
        
        // 電腦和中等屏幕的懸停效果
        if (!isMobile) {
            dropdown.addEventListener('mouseenter', function() {
                if (isTablet && !nav.classList.contains('active')) return;
                content.style.display = 'block';
            });
            
            dropdown.addEventListener('mouseleave', function() {
                if (isTablet && !nav.classList.contains('active')) return;
                content.style.display = 'none';
            });
        }
        
        // 手機和中等屏幕的點擊效果
        if (isMobile || isTablet) {
            toggle.addEventListener('click', function(e) {
                if (isTablet && !nav.classList.contains('active')) return;
                
                e.preventDefault();
                e.stopPropagation();
                
                // 關閉其他打開的下拉菜單
                document.querySelectorAll('.dropdown-content').forEach(item => {
                    if (item !== content) {
                        item.classList.remove('active');
                    }
                });
                
                content.classList.toggle('active');
            });
        }
    });
    
    // 點擊頁面其他區域關閉菜單
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            document.querySelectorAll('.dropdown-content').forEach(item => {
                item.classList.remove('active');
            });
        }
    });
    
    // 窗口大小改變時重置狀態
    window.addEventListener('resize', function() {
        const currentIsMobile = window.matchMedia('(max-width: 768px)').matches;
        const currentIsTablet = window.matchMedia('(max-width: 1024px)').matches;
        
        if (!currentIsTablet) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            document.querySelectorAll('.dropdown-content').forEach(item => {
                item.style.display = '';
                item.classList.remove('active');
            });
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');
        const dropdowns = document.querySelectorAll('.dropdown');
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const isTablet = window.matchMedia('(max-width: 1024px)').matches;
    
        // 漢堡按鈕點擊事件
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    
        // 處理下拉選單（中等螢幕懸停效果）
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle') || dropdown.querySelector('a');
            const content = dropdown.querySelector('.dropdown-content');
    
            if (!content) return;
    
            // 中等螢幕懸停展開
            if (isTablet && !isMobile) {
                dropdown.addEventListener('mouseenter', function() {
                    if (!nav.classList.contains('active')) return;
                    content.style.display = 'block';
                });
    
                dropdown.addEventListener('mouseleave', function() {
                    if (!nav.classList.contains('active')) return;
                    content.style.display = 'none';
                });
            }
    
            // 手機版點擊展開
            if (isMobile) {
                toggle.addEventListener('click', function(e) {
                    if (!nav.classList.contains('active')) return;
                    e.preventDefault();
                    content.classList.toggle('active');
                });
            }
        });
    
        // 點擊頁面其他區域關閉導航
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
                document.querySelectorAll('.dropdown-content').forEach(item => {
                    item.style.display = 'none';
                    item.classList.remove('active');
                });
            }
        });
    });
});

//campaign
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.slides-wrapper');
    const totalImages = 25; // 共25张照片
    
    // 清空容器（确保没有残留内容）
    wrapper.innerHTML = '';

    // 动态加载所有照片
    for (let i = 1; i <= totalImages; i++) {
        wrapper.innerHTML += `
            <div class="slide">
                <img src="/image/campaign/${i}.jpg" alt="活動照片 ${i}">
            </div>
        `;
        console.log(`已添加照片: /image/campaign/${i}.jpg`); // 调试用
    }

    // 立即检查生成的HTML（调试用）
    console.log("生成的HTML：", wrapper.innerHTML);
});