const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");

function add_to_list (){
    let new_li = document.createElement("li");
    new_li.textContent = input.value;
    list.appendChild(new_li);
    new_li.innerHTML += `<button class="${input.value}">❌</button>`
    const books = Array.from(list.children)
    books.forEach(book => console.log(this))
    // console.log(books)
    // console.log(Array.from(list.children))
}

function del_item (button) {
    // document.querySelector(".")
    console.log(button)

}

button.addEventListener("click", add_to_list);






