document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

var alertCookie = getCookie('alertShown');
if (!alertCookie) {
    alert("This is a Website. Always use Desktop Site or Landscape mode to view it.");
    setCookie('alertShown', 'true');
}

function setCookie(name, value) {
    document.cookie = name + '=' + value + '; path=/';
}

function getCookie(name) {
    var cookies = document.cookie.split('; ');
    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        if (parts[0] === name) {
            return parts[1];
        }
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.querySelector(".menu-icon i");
    let navList = document.querySelector(".nav-li");

    document.querySelector(".menu-icon").addEventListener("click", function () {
        navList.classList.toggle("active");

        if (navList.classList.contains("active")) {
            menuIcon.classList.remove("ri-menu-line");
            menuIcon.classList.add("ri-close-line");
        } else {
            menuIcon.classList.remove("ri-close-line");
            menuIcon.classList.add("ri-menu-line");
        }
    });

    document.querySelectorAll(".nav-li a").forEach(link => {
        link.addEventListener("click", function () {
            navList.classList.remove("active");
            menuIcon.classList.remove("ri-close-line");
            menuIcon.classList.add("ri-menu-line");
        });
    });
});

const quotes = [
    "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
    "The best error message is the one that never shows up.- Thomas Fuchs",
    "Coding is not just about writing code, it's about solving problems. - Kathy Sierra",
    "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime. - Muhammad Waseem",
    "The best code is no code at all. - Jeff Atwood",
    "Code is like humor. When you have to explain it, it’s bad. - Cory House",
    "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
    "Programming is the art of telling another human what one wants the computer to do. - Donald Knuth",
    "Code is read much more often than it is written. - Guido van Rossum",
    "The function of good software is to make the complex appear simple. - Grady Booch",
    "The computer is incredibly fast, accurate, and stupid. Man is unbelievably slow, inaccurate, and brilliant. The marriage of the two is a force beyond calculation. - Leo Cherne",
    "First, solve the problem. Then, write the code.- John Johnson",
    "The computer was born to solve problems that did not exist before. - Bill Gates",
    "Simplicity is the soul of efficiency. - Austin Freeman",
    "A good programmer is someone who always looks both ways before crossing a one-way street. - Doug Linder",
    "The difference between a developer and a programmer is that a developer also understands the business. - Unknown",
    "Don't write better code, write code that is easier to understand. - Unknown",
    "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
    "The code you write makes you a programmer. The code you delete makes you a good one. - Mario Fusco",
    "The best way to predict the future is to implement it. - David Heinemeier Hansson",
    "Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
    "The best code is the one you didn't have to write. - Unknown"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

window.onload = function() {
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = getRandomQuote();
};
