const active = document.querySelectorAll(".active")
const customersThings = document.querySelector(".customersThings__load")
const next = document.querySelector(".next")
const back = document.querySelector(".back")
const allBlock = document.querySelector(".customersThings__Collection")

for (let num = 0; num < 2; num++) {
    active[num].style.display = "inline-block";
}

// Перелистывание с изменением цвета квадратика и блоков
next.addEventListener("click", function () {
    let needBlck, needBlckNext
    for (let num = 0; num < 5; num++) {
        if (customersThings.children[num].classList.contains('activeBlock') == true & customersThings.children[num + 1] != undefined) {
            needBlck = customersThings.children[num];
            needBlckNext = customersThings.children[num + 1];
            needBlck.classList.remove("activeBlock")
            needBlckNext.classList.add("activeBlock")
            needBlck.style.backgroundColor = "#939191"
            needBlckNext.style.backgroundColor = "#FF6433"
            // изменение видимого блока
            allBlock.children[num*2].style.display = "none"
            allBlock.children[num*2 + 1].style.display = "none"
            allBlock.children[num*2 + 2].style.display = "inline-block"
            allBlock.children[num*2 + 3].style.display = "inline-block"
            break
        }
    }
})
back.addEventListener("click", function () {
    console.log("начало цикла")
    let needBlck, needBlckNext
    for (let num = 3; num >= 0; num--) {
        if (customersThings.children[num].classList.contains('activeBlock') == true & customersThings.children[num - 1] != undefined) {
            needBlck = customersThings.children[num];
            needBlckNext = customersThings.children[num - 1];
            needBlck.classList.remove("activeBlock")
            needBlckNext.classList.add("activeBlock")
            needBlck.style.backgroundColor = "#939191"
            needBlckNext.style.backgroundColor = "#FF6433"
            // изменение видимого блока
            allBlock.children[num*2 + 1].style.display = "none"
            allBlock.children[num*2].style.display = "none"
            allBlock.children[num*2 - 1].style.display = "inline-block"
            allBlock.children[num*2 - 2].style.display = "inline-block"
            break
        }
    }
})

// Кнопка с плюсиком
const QuestionsList = document.querySelector(".Questions__list")

let parentNodeItem

QuestionsList.addEventListener("click", function (event) {
    if (event.target.innerHTML == "+") {
        parentNodeItem = event.target.parentNode.parentNode
        parentNodeItem.children[1].style.display = "inline-block"
        event.target.innerHTML = "-"
         return
    }
    if (event.target.innerHTML == "-") {
        parentNodeItem = event.target.parentNode.parentNode
        parentNodeItem.children[1].style.display = "none"
        event.target.innerHTML = "+"
        return
    }
})