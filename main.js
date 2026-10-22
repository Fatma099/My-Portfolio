// Open,Close Menu
const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("open");
});


//  Light,Dark Mode
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    if (document.body.getAttribute("data-theme") === "light") {
        document.body.setAttribute("data-theme", "dark");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.setAttribute("data-theme", "light");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});
// Typing
const typingText = document.getElementById("typingText");
const text = "Frontend Developer";
let letter = 0;

function typing() {
    if (letter < text.length) {
        typingText.textContent += text[letter];
        letter++;
        setTimeout(typing, 100);
    } else {
        setTimeout(function () {
            typingText.textContent = "";
            letter = 0;
            typing();
        }, 1500);
    }
}
typing();

// Scroll To Top
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
});

scrollTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formMessage = document.getElementById("formMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formMessage.textContent = "";
    let valid = true;

    if (fullName === "")
    {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    if (email === "" ||!email.includes("@") ||!email.includes("."))
    {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }
    if (message === "")
    {
        messageError.textContent = "Please enter a message.";
        valid = false;
    }
    if (valid)
    {
        formMessage.textContent =
            "Your form has been validated successfully.";
        contactForm.reset();
    }
});