var thongTinFilm = document.querySelectorAll('.thongtinfilm'); //class chứa thông tin film
var filmEvent = document.querySelectorAll(".js-item-select-film");  //the a co class nay se chon the thongTinFilm phia truoc kề nó để getInFor
filmEvent.forEach(element => {
    element.addEventListener('click', function () {
        localStorage.setItem("name", element.previousElementSibling.children[1].textContent);
        localStorage.setItem("quocgia", element.previousElementSibling.children[2].textContent);
        localStorage.setItem("namsanxuat", element.previousElementSibling.children[3].textContent);
        localStorage.setItem("theloai", element.previousElementSibling.children[4].textContent);
        localStorage.setItem("tomtat", element.previousElementSibling.children[5].textContent);
    })
});