var trs = document.querySelector('tbody').getElementsByTagName('tr');

for (var i = 0; i < trs.length; i++) {
    trs[i].onmouseover = function() {
        // console.log('1')
        this.className = 'bg';
    }
    trs[i].onmouseout = function() {
        // console.log('1')
        this.className = '';
    }
}