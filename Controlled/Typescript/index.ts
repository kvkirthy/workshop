class Employee{
    private empId: string

    constructor(private givenName: string){

    }

    public getDetails():string{
         return `${this.givenName}:${this.empId}`;
    }
}