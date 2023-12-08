/*
const message = () => {
    alert("Haha, vypršel ti čas, opakuješ semestr :)")
}

setTimeout(message, 5000) // function setTimeout(handler) {}
*/

/* setInterval(() => {
    document.body.innerHTML += "<p>YOU HAVE BEEN HACKED HAHAHAHA</p>"
}, 2000)
*/

let seconds = 0
let minutes = 0

setInterval(() => {
    if(seconds === 60) {
        seconds = 0
        minutes++ // minutes = minutes + 1; minutes-- -> minutes = minutes - 1
    } else {
        seconds++
    }

    document.body.innerHTML = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}, 1000)

/* 
let seconds = 0
let minutes = 0


setInterval(() => {
    if(seconds === 60) {
        seconds = 0
        minutes++ // minutes = minutes + 1; minutes--
    } else {
        seconds++
    }

    // 00:01
    document.body.innerHTML = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}, 1000)
*/

/*
let btn = document.querySelector("#test")

btn.addEventListener("Click", e) => {
    e.target.
}
*/

const form = document.querySelector("#form")

form.addEventListener("submit", () => {
    const txtEl = document.querySelector("#elTxt")
    e.preventDefault()

    alert(`Vitej uzivateli, ${Number(txtEl.value) + 1}!`)
})
