var dt;
var days = ["天", "一", "二", "三", "四", "五", "六"];
window.onload = function () {
    dt = document.getElementById("lblDT");
    getDT();
    setInterval("getDT()", 1000);
}

function getDT() {
    var now = new Date();       //获取当前日期和时间对象
    var y = now.getFullYear();  //获取年份（4位）
    var M = now.getMonth() + 1; //获取月份，注意 +1
    var d = now.getDate();      //获取月中的第几天
    var h = now.getHours();     //获取小时
    var m = now.getMinutes();   //获取分钟
    var s = now.getSeconds();   //获取秒数
    var day = now.getDay();     //获取星期几，注意特殊值0
    if (m < 10) m = "0" + m;    //若小于10，则前面补"0"成两位   
    if (d < 10) d = "0" + d;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    var str = y + "年" + M + "月" + d + "日 " +
        h + ":" + m + ":" + s + " 星期" + days[day];
    dt.innerHTML = str;
}