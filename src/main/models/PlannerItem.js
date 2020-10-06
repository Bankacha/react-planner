export default class PlannerItem {
    
    title = '';
    description = '';
    completed = false;
    day = '';

    constructor(title, description, day) {
        this.title = title;
        this.description = description;
        this.day = day;
    }

}