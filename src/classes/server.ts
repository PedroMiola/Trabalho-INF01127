import { Employee } from "./users/employees/employee";
import { HashEmployees } from "./users/employees/hash_employees";
import { User } from "./users/clients/user";
import { HashUsers } from "./users/clients/hash_user";
import { Pokemon } from "./pokemon/pokemon";
import { HashPokes } from "./pokemon/hash_poke";
import { Manager } from "./users/employees/manager";
import { UserVIP } from "./users/clients/uservip";
export class Server{
    private employees: HashEmployees;
    private users: HashUsers;
    private pokemons: HashPokes;
    private manager: Manager;

    constructor(){
        this.employees = new HashEmployees();
        this.users = new HashUsers();
        this.pokemons = new HashPokes();
        this.manager = new Manager("Pedro", 22, 12345678910, "pedro@gmail.com", "senha", 1000);
    }

    listPokemons(): Array<Pokemon>{
        return this.pokemons.listPokemons();
    }

    listClients(): Array<User>{
        return this.users.listUsers();
    }

    listEmployees(): Array<Employee>{
        return this.employees.listEmployees();
    }

    addClient(user: User): void{
        this.users.addUser(user); 
    }

    addEmployee(employee: Employee): void{
        this.employees.addEmployee(employee);
    }

    addPokemon(pokemon: Pokemon): void{
        this.pokemons.addPokemon(pokemon);
    }

    removePokemon(id: number): void{
        this.pokemons.removePokemon(id);
    }

    removeClient(email: string): void{
        this.users.removeUser(email);
    }

    removeEmployee(email: string): void{
        this.employees.removeEmployee(email);
    }

    approveLogin(email: string, password: string): boolean{
        if(this.manager.getEmail() == email && this.manager.getPassword() == password){
            return true;
        }

        let user = this.users.getUser(email);
        if(user != undefined && user != null){
            if(user.getPassword() == password){
                return true;
            }
        }

        let employee = this.employees.getEmployee(email);
        if(employee != undefined && employee != null){
            if(employee.getPassword() == password){
                return true;
            }
        }

        return false;
    }

    upgradeUserToVip(user: User): void{
        let userVIP = this.manager.upgradeUserToVip(user);
        this.users.removeUser(user.getEmail());
        this.users.addUser(userVIP);
    }

    downgradeVIPUser(user: UserVIP): void{
        let userNormal = this.manager.downgradeVIPUser(user);
        this.users.removeUser(user.getEmail());
        this.users.addUser(userNormal);
    }
}