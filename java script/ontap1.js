

const list = [
    {
      name : 'Đừng bước qua đời nhau',
      srcimg :'/coban/img/lebaobinh.jpg',
      orwen : 'Lê Bảo Bình',
      namenow : 'Chỉ là không cùng nhau (live)',
      time : '3:46',
    },
    {
      name : 'Tuyển tập Polab',
      srcimg : "/coban/img/polanooirbat.jpg",
      orwen : 'Tổng Hợp',
      namenow :'Tuyển tập Polab (live)',
      time : '16:10',
    },
    {
      name : 'Đừng Chờ Anh Nữau',
      srcimg : "/coban/img/braasda.jpg",
      orwen : 'Tăng Phúc',
      namenow : 'Đừng Chờ Anh Nữa (live)',
      time : '3:25',
    },
    {
      name : 'Đừng bước qua đời nhau',
      srcimg : '/coban/img/lebaobinh.jpg',
      orwen : 'Lê Bảo Bình',
      namenow : 'Chỉ là không cùng nhau (live)',
      time : '3:46',
    }

]
const Bodylist = document.querySelector('.body_list');
list.map(function(count){
  const BodyListItem = document.createElement('div')
  BodyListItem.className = 'body_list_item'
  BodyListItem.innerHTML = `
  <div class="body_list_item_img">
    <i class="fas fa-music"></i>
    <img  class="body_list_item_img-anh" src="${count.srcimg}" alt="">
    <div class="body_l(ist_item_img_name">
        <h3 class="body_list_item_img_name_baihat">${count.name}</h3>
        <p class="body_list_item_img_name_tacgia">${count.orwen}</p>
    </div>
  </div>
  <div class="body_list_item_time">
    <div class="body_list_item_time_namenow">${count.namenow} </div>
    <div class="body_list_item_time_now"> ${count.time}</div>
  `
  Bodylist.appendChild(BodyListItem);
})


