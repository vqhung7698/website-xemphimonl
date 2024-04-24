    let btnInfor = document.querySelector(".itemcore--view__infor");
    let btnCmt = document.querySelector(".itemcore--view__cmt");
    let infor = document.querySelector(".children__film--infor");
    let cmt = document.querySelector(".children__film--cmt");

    //SU KIEN nút thông tin film
    btnInfor.addEventListener("click",function(){
        btnCmt.style.color = "antiquewhite"
        btnInfor.style.color = "aqua"
        infor.classList.remove("children__film-Off");
        cmt.classList.add("children__film-Off");
    })
    //nút xem bình luận
    btnCmt.addEventListener("click",function(){
        btnInfor.style.color = "antiquewhite"
        btnCmt.style.color = "aqua"
        cmt.classList.remove("children__film-Off");
        infor.classList.add("children__film-Off");
    })

    //nút thêm yêu thích
    
    // lấy thông tin từ local storage để in ra
    let nameF = document.getElementById("itemcore--name");
    nameF.textContent = localStorage.getItem("name");
    let quocgiaF = document.getElementById("itemcore--quocgia");
    quocgiaF.textContent = localStorage.getItem("quocgia");
    let namsxF = document.getElementById("itemcore--namsanxuat");
    namsxF.textContent = localStorage.getItem("namsanxuat");
    let theloaiF = document.getElementById("itemcore--theloai");
    theloaiF.textContent = localStorage.getItem("theloai");
    let tomtatF = document.getElementById("itemcore--tomtat");
    tomtatF.textContent = localStorage.getItem("tomtat");
