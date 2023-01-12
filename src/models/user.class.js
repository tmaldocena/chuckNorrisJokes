import { ROLES } from "./role.enum";

export class User {
    username = '';
    email = '';
    password = '';
    role = ROLES.USER;

    constructor(user, mail, pass, role){
        this.email = mail;
        this.username = user;
        this.password = pass;
        this.role = role;
    }
}