const x = document.querySelector(".NameTitle")
x.style.color = "red"
console.log(x.innerText)
const nameForm = document.querySelector("#NameForm")
nameForm.addEventListener("submit", event => {
    event.preventDefault()
    const userName = nameForm.elements.name.value.trim();
    if (userName === 'Daniel' || userName === 'daniel') {
        window.alert('Hey that\'s me!'); 
    } else if (userName === 'Jacky' || userName === 'jacky' || userName === 'Jacqueline' || userName === 'Jacqueline') {
        window.alert('Hi gorgeous!'); 
    } else {
        window.alert("Thank you for visiting my webpage " + userName)
    }
})
   

