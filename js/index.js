var tab = document.querySelector(".nav")
var code = document.querySelector(".tab_code")
    // 获取tab分页
    // console.log(tab)

for (var i = 0; i < tab.children.length; i++) {
    tab.children[i].setAttribute('index', i);
    tab.children[i].addEventListener('click', function() {
        for (var j = 0; j < tab.children.length; j++) {
            tab.children[j].className = "";
        }
        this.className = "active";
        var index = this.getAttribute('index');

        for (var i = 0; i < code.children.length; i++) {
            code.children[i].style.display = 'none';
        }
        code.children[index].style.display = 'block';
    })
}