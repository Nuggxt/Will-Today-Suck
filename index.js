let yesNo = '';

document.getElementById('ansBtn').onclick = function() {
    yesNo = Math.floor(Math.random() * 2);
    document.getElementById('display').innerHTML = yesNo;
    if (yesNo === 1) {
        document.getElementById('display').innerHTML = 'Yes';
    } else {
        document.getElementById('display').innerHTML = 'No';
    }
}