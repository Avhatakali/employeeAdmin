export class Task{

    name:string;
    surname:string;
    username:string;
    password:string;
    id:string;
    role:string;

    constructor(name:string, surname:string, username:string, password:string, id:string, role:string){
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.id = id;
        this.role = role;

    }
}