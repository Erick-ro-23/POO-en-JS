export default class
    Teacher extends Usuario {
    edad = 0;
    constructor({
        id,
        name,
        edad,
        email,
        username,
        curso = [],
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        aprovedCourses = [],
        learningPaths = [],
    }) {
        super(id, name, email, username, curso, twitter, learningPaths, aprovedCourses);
        this.edad = edad;
    }
}