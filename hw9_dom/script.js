// const header = document.createElement('header');
// header.innerText = 'To Do List';
// const container = document.createElement("div");

// const input = document.createElement("input");

// const list = document.createElement("ul");

// const listItem1 = document.createElement("li");
// listItem1.innerText = 'To Do task1';
// const listItem2 = document.createElement("li");
// listItem2.innerText = 'To Do task2';
// const btn = document.createElement("button");
// btn.innerText = "To Do";

// document.body.prepend(header);
// header.after(container);
// container.append(list);
// list.append(listItem1);
// list.append(listItem2);
// container.append(input);
// container.append(btn);

// ДЗ:
// Средствами JS сделать полноценную страницу,
//  добавить футер на страницу
// Сделать возможность добавления / удаления
//  тудушки в список / из списка по клику по
//  ней (для этого почитайте про делегирование)

const header = document.createElement("header");
header.innerText = "Задачи на день";
header.classList.add("header");
const footer = document.createElement("footer");
footer.classList.add("footer");
const paragraf = document.createElement("p");
paragraf.innerText = "&copy; 2024 Воробьев А.В.";

const container = document.createElement("div");
container.classList.add("container");
const label = document.createElement("label");
label.classList.add("label");
label.innerText = "Еще больше задач";
const input = document.createElement("input");
input.placeholder = "Новая задача";

const list = document.createElement("ul");

const listItem1 = document.createElement("li");
listItem1.innerText = " 1 клик отмечает задачу";

const listItem2 = document.createElement("li");
listItem2.innerText = "2-ой клик удаляет задачу из списка";

const btn = document.createElement("button");
btn.innerText = "Добавить задачу";

    // Функция для добавления задачи
    btn.addEventListener('click', () => {
        const taskText = input.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            list.appendChild(li);
            input.value = ''; // Очищаем ввод
        }
    });

     // Делегирование событий для удаления и отметки задач
     list.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'LI') {
            // Переключение выполненной задачи
            target.classList.toggle('completed');
            
            // Удаление задачи по двойному клику
            target.addEventListener('dblclick', () => {
                list.removeChild(target);
            });
        }
    });

document.body.prepend(header);
header.after(container);
container.append(list);
container.append(list);
list.append(listItem1);
list.append(listItem2);

container.append(label);
container.append(input);
container.append(btn);
container.after(footer);
footer.append(paragraf);


// const onClick = () => {
// //   console.log('click');
// //   btn.removeEventListener('click', onClick);
// // };

// // btn.addEventListener('click', onClick);

// // input.addEventListener('focus', () => {
// //   console.log('focus');
// // });

// // input.addEventListener('input', () => {
// //   console.log('input');
// // });

// // btn.addEventListener('click', onClick);
// // function onClick() {
// //   console.log('click');
// //   console.log(this.innerHTML);
// // }

// // [...list.childNodes].forEach((el) =>
// //   el.addEventListener('click', function () {
// //     console.log(this.innerHTML);
// //   }),
// // );

// // const inputData = document.createElement('div');
// // input.before(inputData);

// // input.addEventListener('input', (event) => {
// //   console.log(event.target.value);
// //   inputData.innerText = event.target.value;
// // });
// // listItem1.addEventListener('click', (event) => {
// //   event.stopPropagation();
// //   console.log('item', event);
// // });

// // list.addEventListener('click', (event) => {
// //   console.log('list', event.target, event.currentTarget);
// // });
