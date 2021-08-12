var btns = document.getElementsByTagName('button');
// btns得到的是一个伪数组，通过for遍历添加事件
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        for (var j = 0; j < btns.length; j++) {
            btns[j].style.backgroundColor = '';
        }
        this.style.backgroundColor = 'red';
    }
}