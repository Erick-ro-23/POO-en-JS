export default class
    Course {
    constructor({ id, name, classes = [], comments = [] }) {
        this.id = id;
        this.name = name;
        this.classes = classes;
        this.comments = comments;
    }
}

