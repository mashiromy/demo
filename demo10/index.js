var text = document.querySelector('textarea');
var btn = document.querySelector('button');
var ul = document.querySelector('ul')

btn.onclick = function() {
    var comment = document.createElement('li');
    comment.innerHTML = text.value + "<a href='javascript:;'>删除</a>"
    ul.insertBefore(comment, ul.children[0])
        // 获取所有删除标签
    var as = document.querySelectorAll('a');
    for (var i = 0; i < as.length; i++) {
        as[i].onclick = function() {

            ul.removeChild(this.parentNode);
        }
    }
    text.value = '';
}