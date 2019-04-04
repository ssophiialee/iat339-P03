n =  new Date();
y = n.getFullYear();
m = n.getMonth() < 9? '0' + (n.getMonth() + 1) : (n.getMonth()+1);
d = n.getDate() < 10? '0' + n.getDate():n.getDate();
document.getElementById("date").innerHTML = d + "." + m + "." + y;