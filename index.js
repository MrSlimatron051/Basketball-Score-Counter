let scoreH = document.getElementById("home-score")
let scoreG = document.getElementById("guest-score")
let h1 = 0
let g1 = 0

function updateScoreH1() {
    h1 += 1
    scoreH.textContent = h1
}

function updateScoreH2() {
    h1 += 2
    scoreH.textContent = h1
}

function updateScoreH3() {
    h1 += 3
    scoreH.textContent = h1
}

function updateScoreG1() {
    g1 += 1
    scoreG.textContent = g1
}

function updateScoreG2() {
    g1 += 2
    scoreG.textContent = g1
}

function updateScoreG3() {
    g1 += 3
    scoreG.textContent = g1
}

function clearScores() {
    h1 = 0
    g1 = 0
    scoreH.textContent = 0
    scoreG.textContent = 0
}