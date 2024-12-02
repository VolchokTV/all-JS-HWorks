const header = document.createElement('header');
header.innerText = 'To Do List';
const container = document.createElement("div");

const input = document.createElement("input");

const list = document.createElement("ul");

const listItem1 = document.createElement("li");
listItem1.innerText = 'To Do task1';
const listItem2 = document.createElement("li");
listItem2.innerText = 'To Do task2';
const btn = document.createElement("button");
btn.innerText = "To Do";

document.body.prepend(header);
header.after(container);
container.append(list);
list.append(listItem1);
list.append(listItem2);
container.append(input);
container.append(btn);

// ДЗ:
// Средствами JS сделать полноценную страницу,
//  добавить футер на страницу
// Сделать возможность добавления / удаления
//  тудушки в список / из списка по клику по 
//  ней (для этого почитайте про делегирование)