```javascript
/* 首頁按鈕平滑捲動 */
const scrollBtn = document.getElementById("scrollBtn");

scrollBtn.addEventListener("click", function () {

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

});


/* 導覽列平滑捲動 */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* FAQ 展開 / 收合 */
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {

    button.addEventListener("click", function () {

        const answer = this.nextElementSibling;

        const isOpen = answer.style.display === "block";


        /* 先關閉所有 FAQ */
        document.querySelectorAll(".faq-answer").forEach(item => {

            item.style.display = "none";

        });


        /* 若原本未展開，則展開 */
        if (!isOpen) {

            answer.style.display = "block";

        }

    });

});


/* 捲動時導覽列效果 */
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        nav.style.backgroundColor = "rgba(0, 0, 0, 0.98)";
        nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)";

    } else {

        nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        nav.style.boxShadow = "none";

    }

});


/* 區塊淡入效果 */
const sections = document.querySelectorAll(".section");

function showSection() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {

            section.classList.add("show");

        }

    });

}


/* 頁面載入與捲動時執行 */
window.addEventListener("load", showSection);

window.addEventListener("scroll", showSection);
```
