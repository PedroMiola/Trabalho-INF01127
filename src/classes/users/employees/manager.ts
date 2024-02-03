class Manager extends Employee{


    constructor(name: string, age: number, cpf: number, email: string, password: string, paymentVal: number) {
        super(name, age, cpf, email, password, paymentVal);
    }


    upgradeUserToVip(user: User): UserVIP {
        return new UserVIP(user.getName(), user.getAge(), user.getCpf(), user.getEmail(), user.getPassword());
    }

    downgradeVIPUser(user: UserVIP): User {
        return new User(user.getName(), user.getAge(), user.getCpf(), user.getEmail(), user.getPassword());
    }

    generateReport(): string {
        return "Generating report...";
    }
}