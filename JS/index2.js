function fnLogin() {
    var user = document.getElementById("user").value;
    var psd = document.getElementById("psd").value;

    if(user==''){
        alert('用户名不能为空');
        return false;
    }
    if(psd==''){
        alert('密码不能为空');
        return false;
    }
    console.log(user);
    alert('注册成功');
}