var tb = document.querySelector('tbody');

var data = [{
    num: 001,
    subject: 'javascript',
    score: 100
}, {
    num: 002,
    subject: 'javascript',
    score: 90
}, {
    num: 003,
    subject: 'javascript',
    score: 98
}, {
    num: 004,
    subject: 'javascript',
    score: 70
}]

console.log(data.length)
for (var i = 0; i < data.length; i++) { // 行
    var tr = document.createElement('tr');
    tb.appendChild(tr)
    for (k in data[i]) { // 列
        var td = document.createElement('td');
        td.innerHTML = data[i][k]
        tr.appendChild(td)
    }
    var td = document.createElement('td');
    td.innerHTML = "<a href='javascript:;'>删除</a>"
    tr.appendChild(td);
}

var as = document.querySelectorAll('a');

for (var i = 0; i < as.length; i++) {
    as[i].onclick = function() {
        tb.removeChild(this.parentNode.parentNode);
    }
}