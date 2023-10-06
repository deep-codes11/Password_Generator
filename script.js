const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const spChars = `!@#$%^&*()_+~?></"{}[|]-`;

let generate_btn = document.querySelector("#gen-btn");
let pass_length = document.querySelectorAll("option");
let upperBtn = document.querySelector("#btncheck1");
let lowerBtn = document.querySelector("#btncheck2");
let symbolBtn = document.querySelector("#btncheck3");
let numberBtn = document.querySelector("#btncheck4");
let display_field = document.getElementById("result-field");
let range_length = document.getElementById('range');
let gen_length = document.getElementById("gen-length");
let icon = document.getElementById('icon');
let lenth = range_length.value;

let themeToggler = document.getElementById('themeToggle').addEventListener('click', () => {
    let boddy = document.body
    if (document.body.classList == 'light-mode') {
        boddy.classList.replace('light-mode', 'dark-mode')
        themeIcon.classList.replace('fa-regular', 'fa-solid')
        generate_btn.classList.replace('btn-dark', 'btn-light')
        boddy.dataset.bsTheme = 'dark';
    } else {
        boddy.classList.replace('dark-mode', 'light-mode')
        themeIcon.classList.replace('fa-solid', 'fa-regular')
        generate_btn.classList.replace('btn-light', 'btn-dark')
        boddy.dataset.bsTheme = 'light';
    }
})

let coppybtn = document.getElementById('copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(display_field.value);
    icon.classList.replace('fa-clipboard', 'fa-clipboard-check')
    icon.classList.replace('fa-regular', 'fa-solid')
    setTimeout(() => {
        icon.classList.replace('fa-clipboard-check', 'fa-clipboard')
        icon.classList.replace('fa-solid', 'fa-regular')
    }, 1500);
})

gen_length.innerHTML = range_length.value;
range_length.addEventListener('input', () => {
    gen_length.innerHTML = range_length.value;
    lenth = range_length.value
})

generate_btn.addEventListener("click", () => {
    pass_generator(lenth);
});
function getrandomdata(dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}
function pass_generator(password = "") {
    if (upperBtn.checked) {
        password += getrandomdata(upperSet);
    }
    if (lowerBtn.checked) {
        password += getrandomdata(lowerSet);
    }
    if (numberBtn.checked) {
        password += getrandomdata(numbers);
    }
    if (symbolBtn.checked) {
        password += getrandomdata(spChars);
    }
    if (password.length < lenth) {
        return pass_generator(password)
    }
    display_field.value = exactLength(password, lenth);
}

function exactLength(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
