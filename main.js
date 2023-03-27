// const para = document.querySelectorAll('p')
//
// para[0].addEventListener('click', updateName)
//
// function updateName() {
//     let name = prompt('Напишите новое имя')
//     para[0].textContent = "Player 1:" + name
// }

// let num1 = Number(prompt("Введите первое число"))
// let oper = prompt("Выберите действие \n+\n-\n*\n/")
// let num2 = Number(prompt("Введите второе число"))
//
//
// const calc = () => {
//     let result
//     (isNaN(num1) || isNaN(num2)) ?
//         alert("Введите только числа") :
//         true
//
//
//     switch (oper) {
//         case "+" :
//             result = num1 + num2
//             break
//         case "-" :
//             result = num1 - num2
//             break
//         case "*" :
//             result = num1 * num2
//             break
//         case "/" :
//             (num2 === 0) ? result = "Ошибка" : result = num1 / num2
//             break
//         default:
//             alert("Выберите правильное действие")
//     }
//     alert(result)
// }
// calc()
// let permannaya = "efuhfuehuf"
// function oldFunction(arg , arg2 ){
//     console.log(arg+arg2)
// }
//
//
// oldFunction(2 , 3)
//
//
// const  new_func = (arg , arg2 ) =>{
//     console.log(arg+arg2)
// }
//
// new_func( 4 ,5)
//
// const button = document.querySelectorAll('button')
//
// for (let i = 0; i< button.length; i++) {
//     button[i].onclick = (event) => {
//         document.body.style.backgroundColor = event.target.innerText
//     }
// }


// class Cars {
//     constructor(options) {
//         this.model = options.model
//         this.color = options.color
//         this.wheels = options.wheels
//         this.price = options.price
//     }
//     start() {
//         console.log(`${this.model} заведен`)
//     }
//     getInfo() {
//         console.log(`Это ${this.model} ${this.color} ${this.wheels} ${this.price}`)
//     }
// }
// class Ferrari extends Cars{
//     constructor(options) {
//         super(options);
//     }
// }
// const ferrari = new Ferrari({
//     model: 'ferrari',
//     color: 'Чёрный',
//     wheels: 3,
//     price: "10000$"
//
// })
// ferrari.start()
// ferrari.getInfo()

const buttons = document.querySelectorAll(".show-answer")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;

        if (answer.style.display === "none") {
            answer.style.display = "block"
            button.textContent = "Скрыть ответ"
        } else {
            answer.style.display = "none"
            button.textContent = "Показать ответ"
        }
    })
})



















