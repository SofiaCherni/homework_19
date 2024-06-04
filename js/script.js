let n = 0;

while(isNaN(n) || (n < 1)) {
    n = +prompt("Введіть довжину масива", "4")
}
let num = +prompt("Введіть значення елемента масива верхнього правого кута", "4");
let arr = [];
let matrix = document.querySelector('.matrix');
matrix.innerHTML = ''
for (let i = 0; i < n; i++) {
    arr[i] = [];
    let tr = document.createElement('tr');
    for (let j = 0; j < n; j++) {
        
        let td = document.createElement('td');
        if (i === 0 && j === n - 1) {
            td.textContent = num;
            td.classList.add('color');
            arr[i][j] = num;
        } else {
            let randomNum = Math.round(Math.random()*9);
            td.textContent = randomNum;
            arr[i][j] = randomNum;
        }
        tr.appendChild(td);
    }
    matrix.appendChild(tr);
}

let btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    let row = +prompt("Введіть номер рядка для підрахунку суми", "2");
    row = row - 1;
    let result = document.querySelector('.sum-row');
    let sum = 0;
    for (let i = 0; i < arr[row].length; i++) {
        let m = matrix.rows[row].cells[i];
        sum += arr[row][i];
        m.style.backgroundColor = "yellow";
    }
    result.textContent = sum;
    result.innerHTML = `Сума ${row+1} радку: ` + sum + "<br />";
});

let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', function() {
    let col = +prompt("Введіть номер стовпця для підрахунку суми", "2");
    col = col - 1;
    let result = document.querySelector('.sum-col');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let k = matrix.rows[i].cells[col];
        sum += arr[i][col];
        k.style.backgroundColor = "orange";
    }
    result.textContent = sum;
    result.innerHTML = `Сума ${col+1} стовпця: ` + sum + "<br />";
});

let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function() {
    let result = document.querySelector('.main-diagonal');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let k = matrix.rows[i].cells[i];
        sum += arr[i][i];
        k.style.backgroundColor = "blue";
    }
    result.textContent = sum;
    result.innerHTML = "Сума головної діагоналі: " + sum + "</br>";
    
});

let btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', function() {
    let result = document.querySelector('.side-diagonal');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let k = matrix.rows[i].cells[arr.length - 1 - i];
        sum += arr[i][arr.length - 1 - i];
        k.style.backgroundColor = "green";
    }
    result.textContent = sum;
    result.innerHTML = "Сума побічної діагоналі: " + sum + "</br>";
    
});

let btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', function() {
    let result = document.querySelector('.sum__half-matrix');
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let k = matrix.rows[i].cells[j];
            sum += arr[i][j];
            k.style.backgroundColor = "pink";
        }
    }
    result.textContent = sum;
    result.innerHTML = "Сума половини матриці без головною діагоналлю зверху зправа: " + sum + "</br>";
});

let btn5 = document.querySelector('.btn5');
btn5.addEventListener('click', function() {
    let result = document.querySelector('.sum__half-matrix1');
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let k = matrix.rows[i].cells[j];
            sum += arr[i][j];
            k.style.backgroundColor = "purple";
        }
    }
    result.textContent = sum;
    result.innerHTML = "Сума половини матриці з головною діагоналлю зверху зправа: " + sum + "</br>";
});

let btn6 = document.querySelector('.btn6');
btn6.addEventListener('click', function() {
    let result = document.querySelector('.sum__half-matrix2');
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            let k = matrix.rows[i].cells[j];
            sum += arr[i][j];
            k.style.backgroundColor = "red";
        }
    }
    result.textContent = sum;
    result.innerHTML = "Сума половини матриці без головною діагоналлю знизу зліва: " + sum + "</br>";
});

let btn7 = document.querySelector('.btn7');
btn7.addEventListener('click', function() {
    let result = document.querySelector('.sum__half-matrix3');
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            let k = matrix.rows[i].cells[j];
            sum += arr[i][j];
            k.style.backgroundColor = "salmon";
        }
    }
    result.textContent = sum;
    result.innerHTML = "Сума половини матриці з головною діагоналлю знизу зліва: " + sum + "</br>";
});

let btn8 = document.querySelector('.btn8');
btn8.addEventListener('click', function() {
    let result = document.querySelector('.sum__half-matrix4');
    sum = 0;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            let k = matrix.rows[i].cells[j];
            sum += arr[i][j];
            k.style.backgroundColor = "orchid";
        }
    }
    result.textContent = sum;
    result.innerHTML = "Сума половини матриці без побічної діагоналі зверху зліва: " + sum + "</br>";
});

let btn9 = document.querySelector('.btn9');
btn9.addEventListener('click', function() {
    let result = document.querySelector('.sum__half-matrix5');
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            let k = matrix.rows[i].cells[j];
            sum += arr[i][j];
            k.style.backgroundColor = "lawngreen";
        }
    }
    result.textContent = sum;
    result.innerHTML = "Сума половини матриці з побочною діагоналлю зверху зліва: " + sum + "</br>";
});

let btn10 = document.querySelector('.btn10');
btn10.addEventListener('click', function() {
    let result = document.querySelector('.sum__half-matrix6');
    sum = 0;
    for (let i = 1; i < arr.length; i++) {
        for (let j = arr.length-i; j < arr.length; j++) {
            let k = matrix.rows[i].cells[j];
            sum += arr[i][j];
            k.style.backgroundColor = "burlywood";
        }
    }
    result.textContent = sum;
    result.innerHTML = "Сума половини матриці без побічної діагоналі внизу зправа: " + sum + "</br>";
});

