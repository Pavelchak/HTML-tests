enum Operation {Addition = 0, Subtraction, Multiplication, Division};
let op: Operation = Operation.Addition;
//
// const check = e => {
//     if ((e.keyCode < 48 || e.keyCode > 57) &&
//         e.keyCode !== 46) e.preventDefault();
//     // допускаются '0-9' и '.' для дробных процентов
// };
// document.querySelector('form[name="calculator"]').addEventListener('keypress', check);

document.getElementById("butM").addEventListener("click", () => {
        let v1: string = this.document.getElementById("value1").value;
        let v2: string = this.document.getElementById("value2").value;
        let filter = /^[0-9]{1,}[.]{0,1}[0-9]{0,}$/;
        if(filter.test(v1)==false || filter.test(v2)==false){
            return;
        }
        let z: number;
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
        this.document.getElementById("value3").value = z.toString();
        // this.document.getElementById("butM").hidden=true;
    }
);

document.getElementById("typeOperation").addEventListener("change", () => {
        op = this.document.getElementById('typeOperation').value;
        if (op == Operation.Addition) {
            this.document.getElementById("legend1").innerText = "Операція додавання";
            this.document.getElementById("butM").value = "Додати";
        }
        if (op == Operation.Subtraction) {
            this.document.getElementById("legend1").innerText = "Операція віднімання";
            this.document.getElementById("butM").value = "Відняти";
        }
        if (op == Operation.Multiplication) {
            this.document.getElementById("legend1").innerText = "Операція множення";
            this.document.getElementById("butM").value = "Помножити";
        }
        if (op == Operation.Division) {
            this.document.getElementById("legend1").innerText = "Операція ділення";
            this.document.getElementById("butM").value = "Поділити";
        }
    }
);







