document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy giá trị từ input
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;

    // Lưu thông tin vào localStorage
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);

    alert("Thông tin đã được lưu");
});