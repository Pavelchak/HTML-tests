var el1 = this.document.getElementById("Vasia");
var el2 = this.document.getElementById("Vova");
var User = (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var vasia = new User("Вася", 29);
el1.innerHTML = "Імя:  " + vasia.name + "  вік:  " + vasia.age;
var vova = new User("Вова", 45);
el2.innerHTML = "Імя:  " + vova.name + "  вік:  " + vova.age;
