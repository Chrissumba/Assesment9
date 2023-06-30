class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const bonus = 0.1 * this.salary;
        return (this.salary + bonus) * 12;
    }
}


const manager1 = new Manager("Chris Sumba", 50000, "Sales");
const manager2 = new Manager("Humphery Mugera", 60000, "Marketing");

const manager1AnnualSalary = manager1.calculateAnnualSalary();
const manager2AnnualSalary = manager2.calculateAnnualSalary();

console.log(manager1.name + "'s annual salary:", manager1AnnualSalary);
console.log(manager2.name + "'s annual salary:", manager2AnnualSalary);