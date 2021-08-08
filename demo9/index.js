var tab_list = document.getElementsByTagName('li');
var items = document.getElementsByClassName('item')

for (var i = 0; i < tab_list.length; i++) {
    // 给所有li标签设置index
    tab_list[i].setAttribute('index', i);
    tab_list[i].onclick = function() {
        // 点击那个li标签，那个li变色
        // 排他思想，先全部清除颜色
        for (var i = 0; i < tab_list.length; i++) {
            tab_list[i].className = '';
        }
        this.className = 'currer';
        // 获取当前的index，对应items的每一个元素
        let index = this.getAttribute('index');
        console.log(index);
        // 排他思想
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        // 给index对应的item显示
        items[index].style.display = 'block'
    }

}