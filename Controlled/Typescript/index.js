var Employee = (function () {
    function Employee(givenName) {
        this.givenName = givenName;
    }
    Employee.prototype.getDetails = function () {
        return this.givenName + ":" + this.empId;
    };
    return Employee;
}());
