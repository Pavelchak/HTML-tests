var el1=this.document.getElementById("Vasia");
var el2=this.document.getElementById("Vova");
class User{
    name : string;
    age : number;
    constructor(_name:string, _age:number){
        this.name=_name;
        this.age=_age;
    }
}
var vasia:User = new User("Вася",29);
el1.innerHTML="Імя:  "+vasia.name+"  вік:  "+vasia.age;
var vova:User = new User("Вова",45);
el2.innerHTML="Імя:  "+vova.name+"  вік:  "+vova.age;