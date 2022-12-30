class Client {
    constructor(cccd,name,birth,hometown,gender) {
        this.cccd = cccd;
        this.name = name;
        this.birth =birth;
        this.hometown = hometown;
        this.gender = gender;
    }
    getCccd() {
        return this.cccd;
    }
    setCccd(value) {
        this.cccd = value;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getBirth() {
        return this.birth;
    }
    setBirth(value) {
        this.birth = value;
    }
    getHometown() {
        return this.hometown;
    }
    setHometown(value) {
        this.hometown = value;
    }
    getGender() {
        return this.gender;
    }
    setGender(value) {
        this.gender = value;
    }
}
let product = new Client('035210004210','Ngô Gia Long','07/09/2000','Mỹ lộc Nam Định ','Nam');
let product2 = new Client('0352300003100','Ngô Gia Tự','04/04/2000','Mỹ Hạ Trên Mây','Nam');
let clientArr =[product,product2];
function display() {
    let result = "";
    result += "<table style=\" border: 1px solid black; width: 700px; height: 300px; float: right\" ><th style=\"font-size: 20px\" colspan=\"7\"id='text'>Thông tin khách hàng</th>" +
        "<tr>" +
        "<th>cccd</th>" +
        "<th>name</th>" +
        "<th>birth</th>" +
        "<th>hometown</th>" +
        "<th>gender</th>" +
        "</tr>"
    for (let i = 0; i < clientArr.length; i++) {
        result += "<tr>" +
            "<td>" + clientArr[i].getCccd() + "</td>" +
            "<td>" + clientArr[i].getName() + "</td>" +
            "<td>" + clientArr[i].getBirth() + "</td>" +
            "<td>" + clientArr[i].getHometown() + "</td>" +
            "<td>" + clientArr[i].getGender() + "</td>" +
            "<td><button style=\"background-color: orange ; color: white\" type=\"button\" onclick='editClient(" + i + ")'>Edit</button></td>" +
            "<td><button style=\"background-color: orange ; color: white\" type=\"button\" onclick='deleteProd(" + i + ")'>Delete</button></td>" +
            "</tr>"
    }
    result += "</table>"
    document.getElementById("show").innerHTML = result;
}
function add() {
    let cccd = document.getElementById('cccd').value;
    let name = document.getElementById('name').value;
    let birth = document.getElementById('birth').value;
    let hometown = document.getElementById('hometowm').value;
    let male = document.getElementById('nam').checked;
    let gender = "";
    if(male == true){
        gender ="Nam";
    }else{
        gender = "Nữ";
    }
    let client1 = new Client(cccd,name,birth,hometown,gender);
    clientArr.push(client1);
    display();
}
function editClient(index) {
    let cccd = prompt("Input cccd:");
    let name = prompt("Input name: ")
    let birth = prompt("Input birth:");
    let hometown = prompt("Input hometown");
    let gender = prompt("Input gender");
    let client2 = new Client(cccd,name,birth,hometown,gender);
    clientArr[index] = client2;
    display();
}
function deleteProd(index) {
    clientArr.splice(index, 1);
    display()
}