const cardFilter = document.querySelector('.card-filter');
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const addItem = document.querySelector('.addItem');
const input = document.querySelector('#newTask')
const cardAdd = document.querySelector('.card__add')
const todoList = document.querySelector('#todo')
const remove = document.querySelector('.remove')
const li = document.createElement('li')
const messenger = document.querySelector('.card__todo--messenger');



// hàm thêm giá tị value
function addValue() {

    // lấy giá trị value nhập vào và truyền vào biến value
    let value = input.value.trim()

    // nếu có value thì mới thực hiện hàm
    if (value) {
        renderElement({
            text: value,
        })

        saveLocalstorage()
        handleMessage()

    }

    input.value = ''

}
addValue()

// sử lý sự kiện click thêm value
addItem.addEventListener('click', (e) => {
    e.preventDefault();
    addValue()

})


// sử lý sự kiện enter để thêm value
input.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        e.preventDefault();
        addValue()
    }
})



// render ra dữ liệu
function renderElement(options) {

    var li = document.createElement('li')
    li.innerHTML = `
        <span>${options.text}</span>
        <div class="buttons">
            <button class="remove" data-index="1" data-status="todo" ">
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="complete" data-index="1" data-status="todo"
                onclick="completeToDo(event)">
                <i class="noCheck far fa-check-circle"></i>
                <i class="check fas fa-check-circle"></i>
            </button>
        </div>
    `

    // sử lý sự kiện xoá item
    li.querySelector('.buttons').addEventListener('click', function (e) {

        if (e.target.closest('i')) {
            this.parentElement.remove()

            // gọi lại hàm localStorage
            saveLocalstorage()
            handleMessage()


        }

    })


    todoList.appendChild(li)
}


// render datetime
function renderTime() {
    const date = new Date()

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const minutes = date.getMinutes()

    const cardTitle = document.querySelector('.card-title')
    cardTitle.innerHTML = `
        <h2>My Tasks</h2>
        <p>July ${day}, ${year}</p>    
        `
    console.log(minutes);
}
renderTime()





// lưu dữ liệu vào localStorage
function saveLocalstorage() {

    let listItem = document.querySelectorAll('li');
    var todoStorage = []

    listItem.forEach((item) => {
        let text = item.querySelector('span').innerText
        todoStorage.push({
            text
        });

    })
    localStorage.setItem('todolist', JSON.stringify(todoStorage))

}

// load lại localStorage để làm mới
function loadTodoLocal() {

    let data = JSON.parse(localStorage.getItem('todolist'))
    if (data) {
        data.forEach((item) => {
            renderElement(item)
        })
    }
}

loadTodoLocal()

// xử lý hiện và đóng Card Filter
cardFilter.addEventListener('click', function (e) {
    cardFilter.classList.toggle('open');
})



// xử lý messenger
function handleMessage() {

    if (todoList.querySelector('li')) {

        messenger.style.display = 'none';
    } else {
        messenger.style.display = 'block';

    }
}
handleMessage()


// sắp xếp item


two.addEventListener('click', function (e) {
    const itemProduct = document.querySelectorAll('li')
    const array = []
    itemProduct.forEach(function (item) {
        const valueItemText = item.querySelector('span').innerText
        array.push(valueItemText.split('-'))
    })
    // console.log(array.split(''));
    console.log(array);
    console.log(array.sort());
})


const months = ['March', 'Jan', 'Feb', 'Dec'];

// console.log(months.sort());



const sortASC = () => {
    let ulToDo = document.querySelectorAll('.todo')
    // console.log(ulToDo);
    // todoList.sortToDoList(false);
    // showToDoList(ulToDo);
}

sortASC()