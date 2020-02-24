var txtID, txtPWD;
window.onload = function () {
    txtID = document.getElementById("txtID");
    txtPWD = document.getElementById("txtPWD");
}

//用户名文本框上按回车键，跳到密码框
function idKeyDown() {
    if (window.event.keyCode == 13) {
        txtPWD.focus();
    }
}

//密码文本框上按回车键，提交
function pwdKeyDown() {
    if (window.event.keyCode == 13) {
        submit();
    }
}

function submit() {
    var id = txtID.value;
    var pwd = txtPWD.value;
    if (id == "") {
        alert("用户名不能为空！")
        txtID.focus();
    } else if (pwd == "") {
        alert("密码不能为空！")
        txtPWD.focus();
    } else {
        alert("开始登录验证……");
    }

}