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
inputFirst.setAttribute('value', '1');

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



var newList = document.createElement('li');
var newMem = document.createTextNode('Christian');

newList.className = "list-group-item";
newList.appendChild(newMem);
newList.style.backgroundColor = "#252422"
newList.style.color = "#00CCCC"
newList.style.fontFamily = "Poppins"
newList.style.textAlign = "center"
newList.style.borderBottom = "3px solid #2E3133"

var ul = document.querySelector('.container #main ul')

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

insertAfter(newList, ul.lastElementChild);

var newBtn = document.createElement('button')
var main = document.getElementById('main')

newBtn.className = "btn btn-primary"
newBtn.id = "button"
newBtn.textContent = "Click Me"
newBtn.style.margin = "1rem 0"
newBtn.style.fontFamily = "Inter"
newBtn.style.color = "#252422"
newBtn.style.backgroundColor = "#00CCCC"

insertAfter(newBtn, main.lastElementChild)
console.log(newBtn)

newBtn.addEventListener('mousemove', buttonClick)

function buttonClick(e) {
    newBtn.style.color = "rgb("+e.offsetX+", 40,"+e.offsetY+")";
}