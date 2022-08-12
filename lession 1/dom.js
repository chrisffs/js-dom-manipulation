var header = document.getElementById('main-header');
var headerTitle = document.getElementById('header-title')
var body = document.getElementsByTagName('body')
var firstContainer = document.querySelector('.container:nth-child(1)')
var secondContainer = document.getElementById('main')
var headerTwo = document.getElementsByTagName ('h2')
var form = document.getElementsByTagName ('form')
var inputFirst = document.querySelector('input:nth-child(1)')
var inputSecond = document.querySelector('input:nth-child(2)')
var li = document.getElementsByTagName('li')

header.style.backgroundColor = "#F9F6EE"

headerTitle.textContent = "Semicolon Gang"
headerTitle.style.color = "#00CCCC"
headerTitle.style.fontFamily = "Poppins"
headerTitle.style.textTransform = "uppercase"
headerTitle.style.fontWeight = "700"

body[0].style.backgroundColor = "#252422"

firstContainer.style.textAlign = "center"

secondContainer.style.backgroundColor = "#2E3133"


for (let i = 0; i < headerTwo.length; i++) {
    headerTwo[i].style.textAlign = "center"
    headerTwo[i].style.fontFamily = "Poppins"
    headerTwo[i].style.color = "#00cccc"
}

headerTwo[0].textContent = "Add New Member";
headerTwo[1].textContent = "Members";

form[0].style.justifyContent = "center"

inputFirst.style.backgroundColor = "#252422"
inputFirst.style.fontFamily = "Poppins"

inputSecond.style.fontFamily = "Inter"
inputSecond.style.color = "#252422"
inputSecond.style.backgroundColor = "#00CCCC"

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "#252422"
    li[i].style.color = "#00CCCC"
    li[i].style.fontFamily = "Poppins"
    li[i].style.textAlign = "center"
    li[i].style.borderBottom = "3px solid #2E3133"
    
}

li[0].textContent = "Prench"
li[1].textContent = "Alyssa"
li[2].textContent = "Kym"
li[3].textContent = "Jan Leinzer"
console.log(ul)