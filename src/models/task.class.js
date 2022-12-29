import { LEVELS } from "./levels.enum";

export class Task{
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, desc, completed, level){
        this.name = name;
        this.description = desc;
        this.completed = completed;
        this.level = level;
    }
}