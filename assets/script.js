function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}


function style1() {
    swapStyleSheet('assets/css/style-sunset.css');
}
function style2 () {
    swapStyleSheet('assets/css/style.css');
}
