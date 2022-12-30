function dangnhap() {
    let username = "admin";
    let password = "123";
    let user = document.getElementById("userName");
    let pass = document.getElementById("passWord");
    if (user.value === username && pass.value === password) {
        window.location.href = "manageClient.html";
        localStorage.setItem("user","admin");
    } else {
        document.getElementById("text").innerHTML = "Đăng nhập thất bại, bạn hay xem lại tên đăng nhập hoặc mật khẩu"
    }
}

