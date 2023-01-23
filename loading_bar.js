const percentage = document.querySelector(".percentage-ind");
const loadingLine = document.querySelector(".loading_bar-down");
let x = 0;
// now we can manipulate things accordingly 

const update = (x) => {
    percentage.innerHTML = x + "%";
    loadingLine.style.width = x + "%";
    x += 1;


    if (x <= 100) {
        setTimeout(() => {
            update(x);
        }, 18);
    }
}
update(x);


