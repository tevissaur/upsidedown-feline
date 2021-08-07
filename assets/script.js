function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}


function style1() {
    swapStyleSheet('assets/css/color-sunset.css');
}
function style2 () {
    swapStyleSheet('assets/css/color-coastal.css');
}
