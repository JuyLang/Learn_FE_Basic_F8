// Dom Event
// . prenvenDefault
// 2.stopPropagation

var aLement = document.links;

for ( var i = 0; i < HTMLTextAreaElement.length; i++){
    aLement[i].onclick = function (e){
        if(!e.target.href.startsWith('https://f8.edu.vn')){
            e.preventDefault();
        }
    }
}
