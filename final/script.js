// js styling
var headerBg = document.getElementById('main-header');
var headerTitle = document.getElementById('header-title')
var main = document.getElementById('main')
var mainHeaderTwo = document.querySelectorAll('#main h2')
var input = document.querySelectorAll('input')

// functionalities of the page
var form = document.getElementById('addForm');
var itemLists = document.getElementById('items');
var filter = document.getElementById('filter')
var addMembers = document.getElementById('item')
var lists = itemLists.getElementsByTagName('li')

// styling body
document.body.style.fontFamily = "Poppins"
document.body.style.backgroundColor = "#393D3F"

//styling header
headerBg.style.backgroundColor = "#252422"
headerBg.style.color = "#00CCCC"

headerTitle.style.fontWeight = "700"
headerTitle.textContent = 'SEMICOLON GANG'

filter.style.backgroundColor = "#393D3F"
filter.setAttribute('placeholder', 'Search Members...')

// styling main
main.style.backgroundColor = "#252422"

for (let i = 0; i < mainHeaderTwo.length; i++) {
    mainHeaderTwo[i].style.color = "#00CCCC"
}

mainHeaderTwo[0].textContent = 'Add Members'
mainHeaderTwo[1].textContent = 'Members'

addMembers.style.backgroundColor = "#393D3F"

for (let i = 0; i < input.length; i++) {
    input[i].style.color = "#A5A4A4"
}

for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = "#393D3F"
    lists[i].style.color = "#A5A4A4"
}



console.log(lists);


// Form Submit event 
form.addEventListener('submit', addItem)

// li Delete Event 
itemLists.addEventListener('click', removeItem)

// Filter Event
filter.addEventListener('keyup', filterItems)
// Adding the item Function
function addItem(e) {
    e.preventDefault();

    // Getting value of the text inputed
    let newItem = document.getElementById('item').value;
    
    // Creating the li
    let li = document.createElement('li');

    //styling new li
    li.style.backgroundColor = "#393D3F"
    li.style.color = "#A5A4A4"

    // Adding Class to the li
    li.className = "list-group-item";

    // Adding text node to li
    li.appendChild(document.createTextNode(newItem));

    // Adding the deleteBtn
    let deleteBtn = document.createElement('button')
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    deleteBtn.appendChild(document.createTextNode('X'))
    // Appending the deleteBtn to the li
    li.appendChild(deleteBtn)

    // Adding the li to the itemLists
    itemLists.appendChild(li)
}

// Deleteing Item function
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure want to remove?')) {
            let li = e.target.parentElement;
            itemLists.removeChild(li)
        }
    }
}

// Filter Function
function filterItems(e) {
    // convert first to lowercase
    let text = e.target.value.toLowerCase();

    // get the li's
    let lis = itemLists.getElementsByTagName('li')

    // convert to an array
    Array.from(lis).forEach(function(item){
        let members = item.firstChild.textContent;
        if(members.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}