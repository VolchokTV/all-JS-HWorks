const header = document.createElement('header');
header.innerText = 'To Do List';
const container = document.createElement("div");

const input = document.createElement("input");

const list = document.createElement("ul");

const listItem = document.createElement("li");
const listItem2 = document.createElement("li");

const btn = document.createElement("button");
btn.innerText = "To Do";

document.body.prepend(header);
header.after(container);
container.append(list);
list.append(listItem);
list.append(listItem2);
container.append(input);
container.append(btn);

// ДЗ:
// Средствами JS сделать полноценную страницу,
//  добавить футер на страницу
// Сделать возможность добавления / удаления
//  тудушки в список / из списка по клику по 
//  ней (для этого почитайте про делегирование)