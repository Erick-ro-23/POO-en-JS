class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        aprovedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.aprovedCourses = aprovedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "Juan",
    enmail: "juan123@mail.com",
    username: "juan",
    twitter: "@juanDc123",
})

const miguelito2 = new Student({
    name: "Miguel",
    enmail: "miguel235@mail.com",
    username: "jiguelitofeliz",
    twitter: "@miguelDR",
})