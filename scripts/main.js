let welcome_msg = document.getElementById("welcome");
let username1 = localStorage.getItem("username");

if (username1 != null){
    welcome_msg.innerText = `welcome back ${username1}`;
}

let container = document.getElementById("container");

async function getData() {
    let response = await fetch("https://fakestoreapi.com/products");

    response = await response.json()

    console.log(response[0])

    response.forEach(element => {

        let box = document.createElement("div")
        box.style.border = "3px solid"
        box.classList.add("m-4")
        box.classList.add("d-flex")
        box.classList.add("flex-column")
        box.classList.add("align-items-center")
        box.classList.add("w-50")
        box.classList.add("rounded-4")


        let name = document.createElement("h3")
        name.innerText = element.title
        name.classList.add("text-center")
        name.classList.add("m-3")

        let img = document.createElement("img")
        img.src = element.image
        img.style.width = "50%"
        img.classList.add("rounded-4")

        let price = document.createElement("h3")
        price.innerText = element.price
        price.classList.add("m-3")
        price.classList.add("btn")
        price.classList.add("btn-dark")
        price.classList.add("fs-4")

        box.appendChild(name)
        box.appendChild(img)
        box.appendChild(price)

        container.appendChild(box)

    });

}


getData();