var city, province;
window.onload = function () {
    city = document.getElementById("city");
    province = document.getElementById("province");
}
var cityObject = {
    SiChuan: ["成都", "绵阳", "德阳"],
    ZheJiang: ["杭州", "宁波"]
};

function changeCity() {
    if (city.children.length > 1) {
        var length = city.children.length;
        for (var j = 1; j < length; j++) {
            city.removeChild(city.children[1]);
        }
    }
    addNode();
}

function addNode() {
    if (province.value == 1) {
        for (var i = 0; i < cityObject.SiChuan.length; i++) {
            addOption(cityObject.SiChuan[i]);
        }
    }
    if (province.value == 2) {
        for (var i = 0; i < cityObject.ZheJiang.length; i++) {
            addOption(cityObject.ZheJiang[i]);
        }
    }
}

function addOption(object) {
    var option = document.createElement("option");
    node = document.createTextNode(object);
    option.appendChild(node);
    city.appendChild(option);
}