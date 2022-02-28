var list = [
    {
        name: 'Big City Boy',
        namecasi:"Binz",
        img:"/code music player/img/binz.jpg",
        mp3: '/code music player/img/binzmp.mp3',
    },
    {
        name: 'Sao Cha Không ',
        namecasi:"Phan Mạnh Quỳnh",
        img:"/code music player/img/phanmanhquynh.jpg",
        mp3: '/code music player/img/manhquynhmp.mp3',
    },
    {
        name: 'Chắc ai đó sẽ về thôi',
        namecasi:"Sơn Tùng",
        img:"/code music player/img/sontung.jpg",
        mp3: '/code music player/img/sontungmp.mp3',
    },
    {
        name: 'Sao Cha Không ',
        namecasi:"Phan Mạnh Quỳnh",
        img:"/code music player/img/phanmanhquynh.jpg",
        mp3: '/code music player/img/manhquynhmp.mp3',
    },
    {
        name: 'Big City Boy',
        namecasi:"Binz",
        img:"/code music player/img/binz.jpg",
        mp3: '/code music player/img/binzmp.mp3',
    },
    
    {
        name: 'Chắc ai đó sẽ về thôi',
        namecasi:"Sơn Tùng",
        img:"/code music player/img/sontung.jpg",
        mp3: '/code music player/img/sontungmp.mp3',
    }
]
// const $ = document.querySelector.bind(document)
// var $$ = document.querySelectorAll.bind(document)
var listbaihat = document.querySelector('.listbaihat')
var Music = document.querySelector('.Music')
    for(i= 0;  i< list.length;i++){
        var htmls = document.createElement('div')
        htmls.innerHTML = `<div class="lisMuct">
        <div class="headerlist">
        <img class="imglistms"src="${list[i].img}" alt="">
        </div>
        <div class="contentlist">
        <p class="tenbaihat">${list[i].name}</p>
        <p class="tencasi">${list[i].namecasi}</p>
        </div>
        </div>`
        listbaihat.appendChild(htmls)
    }
function handerlevent(){
    document.onscroll = function(){
        console.log(window.scrollY)
        if(window.scrollY==508){
            Music.style.display = 'flex'
        }
    }
}
handerlevent()

