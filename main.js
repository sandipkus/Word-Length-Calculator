let button = document.getElementById('button');
let output = document.getElementById('output');

button.addEventListener('click', function(){
    let str = document.getElementById('inputField').value;
    output.innerHTML = str.length;
    inputField.value = "";
})