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
// let gen_length = document.getElementById("gen-length");
let icon = document.getElementById('icon');
// let lenth = 0;

let themeToggler = document.getElementById('themeToggle').addEventListener('click', () => {
    let boddy = document.body
    if (document.body.classList == 'light-mode') {
        boddy.classList.replace('light-mode', 'dark-mode')
        themeIcon.classList.replace('fa-regular', 'fa-solid')
        boddy.dataset.bsTheme = 'dark';
    } else {
        boddy.classList.replace('dark-mode', 'light-mode')
        themeIcon.classList.replace('fa-solid', 'fa-regular')
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

function plength(lenth = 0) {
    if (pass_length[0].selected) return lenth = 4;
    else if (pass_length[1].selected) return lenth = 6;
    else if (pass_length[2].selected) return lenth = 8;
    else if (pass_length[3].selected) return lenth = 10;
    else if (pass_length[4].selected) return lenth = 12;
    else if (pass_length[5].selected) return lenth = 16;
}
generate_btn.addEventListener("click", () => {
    pass_generator(plength());
});
function getrandomdata(dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}
function pass_generator(password = "") {
    plength()
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
    if (password.length < plength()) {
        return pass_generator(password)
    }
    // gen_length.innerText = password.length;
    display_field.value = exactLength(password, plength());
}

function exactLength(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
