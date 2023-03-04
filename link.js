
function addstu(){
    var baseURL = "http://localhost:8080"
    var url = baseUrl + "/user/regist"
    alert  (document.getElementById("name").value)
    axios.post(url, {
        name: document.getElementById("name").value,
        sex:document.getElementById("sex").value,
        birthday:document.getElementById("birthday").value ,
        major:document.getElementById("major").value,
        grade:document.getElementById("grade").value,
        source_address:document.getElementById("source_address").value,
        scores:document.getElementById("scores").value,
        phone:document.getElementById("phone").value,
        id:document.getElementById("id").value,
    }).then(res => {
        console.log(res);
    });
}
function adduser(){
    var baseUrl= "http://localhost:8080"
    var url = baseUrl + "/user/regist"
    axios.post(url, {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        account: document.getElementById("account").value,
        password: document.getElementById("password").value,
    }).then(res => {
        console.log(res);
    });
}
