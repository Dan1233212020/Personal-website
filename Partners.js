const x = document.querySelector(".NameTitle")
x.style.color = "red"
console.log(x.innerText)
const nameForm = document.querySelector("#NameForm")
nameForm.addEventListener("submit", event => {
    event.preventDefault()
    const userName = nameForm.elements.name.value.trim();
    window.alert("Thank you for visiting my webpage " + userName)
})

