// 补丁脚本
var tagA = document.getElementsByTagName("a");

for (var i = 0; i < tagA.length; i ++) {
    tagA[i].innerText += "  **  这里用补丁脚本加了一句话";
}