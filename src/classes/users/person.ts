abstract class Person {
    private cpf: number;
    private email: string;
    private password: string;
    private name: string;
    private age: number;

    constructor(name: string, age: number, cpf: number, email: string, password: string) {
        this.name = name;
        this.age = age;
        this.cpf = cpf;
        this.email = email;
        this.password = password;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
    
    getCpf(): number {
        return this.cpf;
    }

    setName(name: string): void {
        this.name = name;
    }

    setAge(age: number): void {
        this.age = age;
    }

    setCpf(cpf: number) {
        this.cpf = cpf;
    }

    approveLoginEmail(email: string, password: string): boolean {
        if (email === this.email && password === this.password) {
            return true;
        } else {
            return false;
        }
    }

    approveLoginCpf(cpf: number, password: string): boolean {
        if (cpf === this.cpf && password === this.password) {
            return true;
        } else {
            return false;
        }
    }

    changePassword(oldPassword: string, newPassword: string): boolean {
        if(oldPassword === this.password){
            this.password = newPassword;
            return true;
        }
        else
            return false;
    }
}

