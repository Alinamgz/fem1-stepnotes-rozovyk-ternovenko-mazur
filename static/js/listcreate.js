const cancelNewList = document.querySelector('#cancelNewList');
const saveNewList = document.querySelector('#saveNewList');
const addNewItem = document.querySelector('#addNewItem');
const writeListItem = document.querySelector('#writeListItem');
const listArea = document.querySelector('#listArea');
const todoList = [];

<<<<<<< HEAD
=======

>>>>>>> 60fc861685899a9543b480aee563d57fd2899755
cancelNewList.addEventListener('click', function(){
//нужна ф-ция  очистить массив с заполненными пунктами, а так же очистить инпуты нзвания заметки и пункт
    //перейти на гавную стараницу
    window.location.href ="/";
});

saveNewList.addEventListener('click', function(){
//нужна ф-ция  послать запрос на запись заметки в БД, а так же очистить инпуты нзвания заметки и пункт
    //перейти на гавную стараницу
    window.location.href ="/";
});

addNewItem.addEventListener('click', function () {
    let valueListItem = document.querySelector('#writeListItem').value;
    //создать ассоциативный массив с типа {todo: "...", check: false}
    //где todo - список дела, а check - помечено ли дело как выполненное?  = false - дело не выполнено
    let templateItem = {};
    templateItem.todo = valueListItem;
    templateItem.check = false;
    let lengthTodoList = todoList.length;
    todoList[lengthTodoList] = templateItem;
    addItems();
    //очистить поле ввода
    writeListItem.value = null;
});

function addItems() {
    let lineWithItems = "";
    for (key in todoList){
<<<<<<< HEAD
        lineWithItems += `<div class="list-group-item" data-item="item${Math.floor(100 + Math.random() * 900)}"><label><input type ="checkbox"><span class="ml-2">${todoList[key].todo}</span></label><span class="ml-5 remove-item">X</span></div>`
    }
    listArea.innerHTML = lineWithItems;
}

listArea.addEventListener('click', function (e) {
    if(e.target.classList.contains("remove-item")) {
    console.dir(e.target.parentNode);
        e.target.parentNode.remove();
        console.log(todoList);
    }
});

{
    id;
    type: "list",
    title:
    body:[{text: checked},{//...}],

}
=======
        lineWithItems += `<div class="list-group-item" data-item="item${Math.floor(100 + Math.random() * 900)}"><input type ="checkbox"><span class="ml-2">${todoList[key].todo}</span><span class="ml-5">X</span></div>`
    }
    listArea.innerHTML = lineWithItems;
}
>>>>>>> 60fc861685899a9543b480aee563d57fd2899755