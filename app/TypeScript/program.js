var _this = this;
var Operation;
(function (Operation) {
    Operation[Operation["Addition"] = 0] = "Addition";
    Operation[Operation["Subtraction"] = 1] = "Subtraction";
    Operation[Operation["Multiplication"] = 2] = "Multiplication";
    Operation[Operation["Division"] = 3] = "Division";
})(Operation || (Operation = {}));
;
var op = Operation.Addition;
//
// const check = e => {
//     if ((e.keyCode < 48 || e.keyCode > 57) &&
//         e.keyCode !== 46) e.preventDefault();
//     // допускаются '0-9' и '.' для дробных процентов
// };
// document.querySelector('form[name="calculator"]').addEventListener('keypress', check);
document.getElementById("butM").addEventListener("click", function () {
    var v1 = _this.document.getElementById("value1").value;
    var v2 = _this.document.getElementById("value2").value;
    var filter = /^[0-9]{1,}[.]{0,1}[0-9]{0,}$/;
    if (filter.test(v1) == false || filter.test(v2) == false) {
        return;
    }
    var z;
    if (op == Operation.Addition) {
        z = parseFloat(v1) + parseFloat(v2);
    }
    if (op == Operation.Subtraction) {
        z = parseFloat(v1) - parseFloat(v2);
    }
    if (op == Operation.Multiplication) {
        z = parseFloat(v1) * parseFloat(v2);
    }
    if (op == Operation.Division) {
        z = parseFloat(v1) / parseFloat(v2);
    }
    _this.document.getElementById("value3").value = z.toString();
    // this.document.getElementById("butM").hidden=true;
});
document.getElementById("typeOperation").addEventListener("change", function () {
    op = _this.document.getElementById('typeOperation').value;
    if (op == Operation.Addition) {
        _this.document.getElementById("legend1").innerText = "Операція додавання";
        _this.document.getElementById("butM").value = "Додати";
    }
    if (op == Operation.Subtraction) {
        _this.document.getElementById("legend1").innerText = "Операція віднімання";
        _this.document.getElementById("butM").value = "Відняти";
    }
    if (op == Operation.Multiplication) {
        _this.document.getElementById("legend1").innerText = "Операція множення";
        _this.document.getElementById("butM").value = "Помножити";
    }
    if (op == Operation.Division) {
        _this.document.getElementById("legend1").innerText = "Операція ділення";
        _this.document.getElementById("butM").value = "Поділити";
    }
});
