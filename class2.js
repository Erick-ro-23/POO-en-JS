class Course {
    constructor({ name, classes = [], comments = [] }) {
        this._name = name;
        this.classes = classes;
        this.comments = comments;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre) {
        if (nuevoNombre === "Curso Malo") {
            console.error("Noooo WEb");
        } else {
            this._name = nuevoNombre;
        }
    }

}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programación Básica',

})
const cursoDefinitivoHTML = new Course({
    name: 'Curso Gratis de Programación Básica',

})
const cursoPracticoHTML = new Course({
    name: 'Curso Gratis de Programación Básica',

})

class LearningPaths {
    constructor({
        nameCourses = [],
        numberHours,
        nameAcademy,
    }) {
        this.nameCourses = nameCourses;
        this.numberHours = numberHours;
        this.nameAcademy = nameAcademy;
    }
}

const escualaWeb = new LearningPaths({
    nameAcademy: "Escuala de Desarrolo Web",
    numberHours: 120,
    nameCourses: [curosProgBasica, curosDefinitivoHTML, curosPracticoHTML,],
});
const escualaData = new LearningPaths({
    nameAcademy: "Escuala de Data Science",
    numberHours: 180,
    nameCourses: [curosProgBasica, "Curso de Introducción a la Base de Datos",
        "Curso de Vualizacion estadística de Datos", "Curso de Interpretación de datos con Python"],
});
const escualaVgs = new LearningPaths({
    nameAcademy: "Escuala de Videojuegos",
    numberHours: 155,
    nameCourses: [curosProgBasica, "Curso de Introducción a la Producción de Vgs",
        "Curso de Unreal Engine", "Curso de Unioty 3D"],
});

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
    learningPaths: [escualaWeb, escualaVgs],

})

const miguelito2 = new Student({
    name: "Miguel",
    enmail: "miguel235@mail.com",
    username: "jiguelitofeliz",
    twitter: "@miguelDR",
    learningPaths: [escualaWeb, escualaData],

})


//Cosas de prueba

class Banda {

    constructor({
        nombre,
        generos = [],
    }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }

    agregarIntegrante(integranteNuevo) {

        if (this.integrantes.some(data => data.instrumento === 'Bateria')) {
            console.log("Ya hay un Baterista");
        }
        else {
            this.integrantes.push(integranteNuevo)
        }
    }
}

//Crear clase Integrante
class Integrante {
    constructor(nombre, instrumento) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
    // Tu código aquí 👈

}

