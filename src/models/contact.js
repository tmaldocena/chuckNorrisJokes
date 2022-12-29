export class Contact{
    name = '';
    last_name = '';
    email = '';
    online = false;

    constructor(name, l_name, mail, online){
        this.name = name;
        this.last_name = l_name;
        this.email = mail;
        this.online = online;
    }
}