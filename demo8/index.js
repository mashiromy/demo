var check = document.getElementById('check');
var tbs = document.getElementById('tbs').getElementsByTagName('input');

check.onclick = function() {
    for (var i = 0; i < tbs.length; i++) {
        // 点击全选，下边的全部选择
        tbs[i].checked = this.checked
    }
}

for (var i = 0; i < tbs.length; i++) {
    tbs[i].onclick = function() {
        // 控制全选按钮是否选中
        var flag = true;
        // 每次点击下边的按钮都要检查这些按钮是否全部选中
        for (var i = 0; i < tbs.length; i++) {
            if (!tbs[i].checked) {
                flag = false;
                break;
            }
        }
        check.checked = flag;
    }
}