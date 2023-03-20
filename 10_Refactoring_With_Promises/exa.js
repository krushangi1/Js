
function student (name,age) {
    this.name =  name,
    this.age = age


}

class Print{

    print(){
        console.log("this is extended method");
    }
}

class Employee extends Print{

    constructor(name,age){
        super()
        this.name=name;
        this.age = age;
    }


    add(){
        console.log("this is add");
    }
}

const e1 = new Employee("xyz",30);

student.prototype.gender = function(){
    console.log("this is add of student");
};

const stu1 = new student("xyz",20);
const stu2 = new student("abc",20);



