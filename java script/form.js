var My = document.forms.test;
var message = document.getElementById("message");

My.onsubbit = function (){
    if(My.Ten.value == ""){
        message.innerHTML = "vui long nhap lai ten";
        return false;
    }
    else
    {
        message.innerHTML = "";
        return true;
    }
}