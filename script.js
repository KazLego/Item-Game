let frdly = document.getElementById("ptman")
let map = document.getElementById("map")
let treasureX = Math.random() * 500
let treasureY = Math.random() * 500
let hints = document.getElementById("golu")
let Frdlymov = true
let steps = document.getElementById("Step")
let stepnub = 0
steps.innerHTML = Math.floor(stepnub)
map.onclick = function (event) {
    if (Frdlymov == true) {
        let frdlyX = event.offsetX
        let frdlyY = event.offsetY

        frdly.style.left = frdlyX + "px"
        frdly.style.top = frdlyY + "px"


        let x = frdlyX - treasureX
        let y = frdlyY - treasureY
        let distance = Math.sqrt(x * x + y * y)
        stepnub = stepnub+distance
        steps.innerHTML = Math.floor(stepnub)

        console.log(distance);
        if (distance < 10) {
            hints.innerHTML = "you win"

            Frdlymov = false



        }
        else if (distance < 25) {
            hints.innerHTML = "flaming ground"

        }
        else if (distance < 50) {
            hints.innerHTML = "Nether realm"

        }
        else if (distance < 75) {
            hints.innerHTML = "Humid like a rain forest"

        }
        else if (distance < 100) {
            hints.innerHTML = "Cold as the ocean"

        }
        else {
            hints.innerHTML = "frezeing like the void"
        }

    }
}