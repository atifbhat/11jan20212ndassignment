var num = prompt("enter the size");
var n = parseInt(num);


let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "<br/>";
}
document.write(string);