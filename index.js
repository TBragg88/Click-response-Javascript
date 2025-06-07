let saveThumb = document.getElementById("save-thumb");
let countThumb = document.getElementById("count-thumb");
let totalThumb = document.getElementById("total-thumb");
let count = 0;
let totalCount = 0;
document.getElementById("count-btn").addEventListener("click", increment);

function increment(event) {
    let incrementAmount = event.shiftKey ? 10 : 1;
    count += incrementAmount;
    countThumb.textContent = count;
}

function save() {
    let countStr = count + " / ";
    saveThumb.textContent += countStr;

    totalCount += count;
    totalThumb.textContent = "Total: " + totalCount;

    count = 0;
    countThumb.textContent = count;
}

function reset() {
    count = 0;
    totalCount = 0;
    saveThumb.textContent = "";
    countThumb.textContent = count;
    totalThumb.textContent = "Total: " + totalCount;
}

