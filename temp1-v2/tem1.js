




let bt = document.getElementById("bt");
let barEl = document.getElementById("br");

bt.onclick = function () {
    barEl.classList.toggle("bar");
    barEl.classList.toggle("flex");
    barEl.classList.toggle("ml-auto");
    barEl.classList.toggle("bar2");
};

let bt2 = document.getElementById("bt2");
let subBar = document.getElementById("subBar");
// let bt2Icon = document.getElementById("bt2Icon");
let bt2Icon = bt2.children[0]

bt2.onclick = function () {
    bt2Icon.classList.toggle("rotate")
    subBar.classList.toggle("sub-bar-dis");
    subBar.classList.toggle("sub-bar-show");
};



// ===============================================
//Testimonials
let card1 = document.getElementById("cr1");
let card2 = document.getElementById("cr2");
let card3 = document.getElementById("cr3");

let a1 = document.getElementById("li1");
let a2 = document.getElementById("li2");
let a3 = document.getElementById("li3");



a1.onclick = function () {
    card1.classList.add("card1");
    card2.classList.remove("card1");
    card3.classList.remove("card1");

    a2.classList.remove("active");
    a1.classList.add("active");
    a3.classList.remove("active");
};

a2.onclick = function () {
    card2.classList.add("card1");
    card1.classList.remove("card1");
    card3.classList.remove("card1");

    a2.classList.add("active");
    a1.classList.remove("active");
    a3.classList.remove("active");
};

a3.onclick = function () {
    card3.classList.add("card1");
    card1.classList.remove("card1");
    card2.classList.remove("card1");

    a2.classList.remove("active");
    a1.classList.remove("active");
    a3.classList.add("active");

};


setInterval(function () {
    if (card1.classList.contains("card1") === true) {
        card1.classList.remove("card1");
        card1.classList.add("card2")
        card2.classList.add("card1");

        a2.classList.add("active");
        a1.classList.remove("active");
        a3.classList.remove("active");

    } else if (card2.classList.contains("card1") === true) {
        card3.classList.add("card1");
        card2.classList.remove("card1");
        card2.classList.add("card3");

        a2.classList.remove("active");
        a1.classList.remove("active");
        a3.classList.add("active");

    } else if (card3.classList.contains("card1") === true) {

        card3.classList.remove("card1");
        card3.classList.add("card3");
        card1.classList.add("card1");
        card2.classList.add("card2")

        a2.classList.remove("active");
        a1.classList.add("active");
        a3.classList.remove("active");
    }


    // card1.classList.contains("card1");

}, 5000)

// 

let header = document.getElementById("head");
let img = document.getElementById("head-img");

window.onscroll = function () {

    if (window.scrollY >= 100) {
        header.style.cssText = `
            background-color: #212529;
        `;

        img.style.cssText = `
            height: 45px;
            margin-top: 0px;
        `;
    } else if (window.scrollY <= 100) {
        s = window.scrollY;
        header.style.cssText = `
            background-color: transparent;
        `;

        img.style.cssText = `
            height: 65px;
            margin-top: 15px;
        `;
    }

}





//110 الفديو رقم 






