let DEFAULT_SALARY = 1000;

function Employee(name, grade, department, salary) {
    this.name = name;
    this.grade = grade;
    this.department = department;

    this.salary = salary || 0;
}

// 此处不能用箭头函数
Employee.prototype.getName = function() {
    return this.name;
};
Employee.prototype.getDepartment = function() {
    return this.department;
};
Employee.prototype.getGrade = function() {
    return this.grade;
};
Employee.prototype.getSalary = function() {
    return this.salary;
};
Employee.prototype.calculateSalary = function() {
    return this.grade * DEFAULT_SALARY;
};

Employee.prototype.getDetails = function() {
    return 'Employee Name: ' + this.getName() + '\nDepartment: ' + this.getDepartment() +
    '\nGrade: ' + this.getGrade() + '\nSalary: ' + this.getSalary();
};