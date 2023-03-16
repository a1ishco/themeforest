import { langdata, langdataFooter, langdataSearch, langdataCat } from "../js/langData.js";

const colrBtn = document.querySelector('#colr')
const btn = document.querySelector('#langBtn');
const langItem = document.querySelectorAll('.nav-link')
const brandLang = document.querySelector('.navbar-brand')
const blueBlog = document.querySelector('.blog')
const blueHome = document.querySelector('.home')
const langFooter = document.querySelectorAll('#footer-nav')
const langSearch = document.querySelectorAll('#search-txt')
const langCat = document.querySelectorAll('.cat-li-txt')
const langBtnPlay = document.querySelectorAll('#playBtn')
const sidebar = document.querySelectorAll(".sidebar-first-body")
const mode = document.querySelector('#mode')

const langAZ = () => {
        
    for (let i in langdata.az) {
        langItem[i].innerHTML = langdata.az[i];
    }

    brandLang.innerHTML = 'Game Boy  <img width="40px" src="https://i.gifer.com/origin/e0/e02ce86bcfd6d1d6c2f775afb3ec8c01_w200.gif" alt="">';
    blueBlog.innerHTML = 'Oyun Otağı';
    blueHome.innerHTML = 'Ana səhifə // Bloq';
    for (let i in langdataFooter.az) {
        langFooter[i].innerHTML = langdataFooter.az[i];
    }

    langSearch[0].innerHTML = langdataSearch.az[0];
    $('#search-txt-plc').attr("placeholder", 'Burada axtar');
    $('#cat').html("Kateqoriya")

    for (let i in langdataCat.az) {
        langCat[i].innerHTML = langdataCat.az[i];
    }

    $('#banner-btn').html("İndi Al!!!")
    $('#tags').html("Populyar Teqlər")
    $(langBtnPlay).html("İndi Oyna")
    $('.card-text span').html("Buraxılış tarixi ")
    $('.card-rev i').html("Reytinq:")
    $('#logout').html('<a href="login.html">Çıxış</a>')

    btn.innerHTML = '<img src="img/Flag_of_the_United_Kingdom_(1-2).svg.png" width="30px" height="20px" alt=""> EN'

}

const langEN = () =>{
    for (let i in langdata.en) {
        langItem[i].innerHTML = langdata.en[i];
    }
    brandLang.innerHTML = 'Game Boy  <img width="40px" src="https://i.gifer.com/origin/e0/e02ce86bcfd6d1d6c2f775afb3ec8c01_w200.gif" alt="">';
    blueBlog.innerHTML = 'Game Boy';
    blueHome.innerHTML = 'Home // Blog';

    for (let i in langdataFooter.en) {
        langFooter[i].innerHTML = langdataFooter.en[i];
    }
    langSearch[0].innerHTML = langdataSearch.en[0];
    $('#search-txt-plc').attr("placeholder", 'Search here');
    $('#cat').html("Category")


    for (let i in langdataCat.en) {
        langCat[i].innerHTML = langdataCat.en[i];
    }
    $('#banner-btn').html("Buy Now!!!")
    $('#tags').html("Popular Tags")
    $(langBtnPlay).html("Play Now")
    $('.card-text span').html("Date Released")
    $('.card-rev i').html("Rating:")
    $('#logout').html('<a href="login.html">Log Out</a>')


    btn.innerHTML = '<img src="img/Flag_of_Azerbaijan.svg.png" width="30px" height="20px" alt=""> AZ'
}

const changeLang = () => {
    
    
    if (btn.innerHTML === "<img src=\"img/Flag_of_Azerbaijan.svg.png\" width=\"30px\" height=\"20px\" alt=\"\"> AZ") {
        langAZ();
    } else {
        langEN();
    }
}

$('#year').html(new Date().getFullYear());



colrBtn.onclick = () => {
    if (colrBtn.innerHTML == '🌙') {
        console.log("if-1");
        mode.className = "dark";
        colrBtn.innerHTML = '☀'
    } else {
        console.log("if-2");
        colrBtn.innerHTML = '🌙';
        mode.className = "light";
    }
}

if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode', 'light')
} else {
    colrBtn.onclick = () => {
        if (colrBtn.innerHTML === '🌙') {
            mode.className = "dark";
            colrBtn.innerHTML = '☀';
            localStorage.setItem('mode', 'dark');
        }
        else {
            colrBtn.innerHTML = '🌙';
            mode.className = "light";
            localStorage.setItem('mode', 'light');
        }
    }
}

if (localStorage.getItem('mode') == 'dark') {
    mode.className = "dark";
    colrBtn.innerHTML = '☀';
} else {
    colrBtn.innerHTML = '🌙'
    mode.className = "light";
}


btn.addEventListener('click', changeLang)