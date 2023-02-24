function add() {
    let numberA = document.getElementById('Number1').value;
    let numberB = document.getElementById('Number2').value;
    let Result;
    Result = Number(numberA) + Number(numberB);
    document.getElementById('result').innerHTML = 'Kết Quả = ' + Result;
}

function sub() {
    let numberA = document.getElementById('Number1').value;
    let numberB = document.getElementById('Number2').value;
    let Result;
    Result = Number(numberA) - Number(numberB);
    document.getElementById('result').innerHTML = 'Kết Quả = ' + Result;
}

function multi() {
    let numberA = document.getElementById('Number1').value;
    let numberB = document.getElementById('Number2').value;
    let Result;
    Result = Number(numberA) * Number(numberB);
    document.getElementById('result').innerHTML = 'Kết Quả = ' + Result;
}

function divi() {
    let numberA = document.getElementById('Number1').value;
    let numberB = document.getElementById('Number2').value;
    let Result;
    Result = Number(numberA) / Number(numberB);
    document.getElementById('result').innerHTML = 'Kết Quả = ' + Result;
}

function UpDown() {
    let number = document.getElementById('Number').value;
    let conver = parseInt(number);
    document.getElementById('Number').value = conver + Number(2);
}
function DownUp() {
    let number = document.getElementById('Number').value;
    let conver = parseInt(number);
    document.getElementById('Number').value = conver - Number(2);
}