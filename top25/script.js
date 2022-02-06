const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");


function add_to_list (){
    let div = document.createElement("div")
    list.appendChild(div)
    let new_li = document.createElement("li");
    new_li.textContent = input.value;
    div.appendChild(new_li)
    // new_li.innerHTML += `<button class="button_${input.value}">❌</button>`
    // new_button = document.querySelector(`.button_${input.value}`) 
    // new_button.addEventListener("click", del_book(input.value))
    let new_button = document.createElement("button")
    new_button.textContent = "❌"
    div.appendChild(new_button)
    new_button.addEventListener("click", () => {
        list.removeChild(div)
    })

}



button.addEventListener("click", add_to_list);






