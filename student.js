export default class
    Student extends Usuario {
    constructor({
        id,
        name,
        points = 0,
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
        this.points = points;
    }
}