class HashEmployees {
    private employees: { [email: string]: Employee };

    constructor() {
        this.employees = {};
    }

    addEmployee(employee: Employee) {
        this.employees[employee.getCpf()] = employee;
    }

    getEmployee(email: string): Employee | undefined {
        return this.employees[email];
    }

    removeEmployee(email: string) {
        delete this.employees[email];
    }

    listEmployees(): Employee[] {
        return Object.values(this.employees);
    }
}
