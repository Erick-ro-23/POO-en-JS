function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta produciendo desde la url " + urlSecreta);
}
function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
    constructor(name, videoID,) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}







class Course {
    constructor({ name,
        classes = [],
        comments = [],
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name;
        this.classes = classes;
        this.comments = comments;
        this.isFree = isFree;
        this.lang = lang;
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
    isFree: true,
})
const cursoDefinitivoHTML = new Course({
    name: 'Curso Gratis de Programación Básica',

})
const cursoPracticoHTML = new Course({
    name: 'Curso Gratis de Programación Básica',
    lang: "english",
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
    nameCourses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML,],
});
const escualaData = new LearningPaths({
    nameAcademy: "Escuala de Data Science",
    numberHours: 180,
    nameCourses: [cursoProgBasica, "Curso de Introducción a la Base de Datos",
        "Curso de Vualizacion estadística de Datos", "Curso de Interpretación de datos con Python"],
});
const escualaVgs = new LearningPaths({
    nameAcademy: "Escuala de Videojuegos",
    numberHours: 155,
    nameCourses: [cursoProgBasica, "Curso de Introducción a la Producción de Vgs",
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

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        if (newCourse.isFree) {
            this.aprovedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + " solo puedes tomar cursos abiertos")
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.aprovedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + " no puedes tomar cursos en ingles")
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }
    aprovedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}



//Extends pero con prototipos (lo mismo de arriba):
// function FreeStudent({
//     name,
//     email,
//     username,
//     twitter = undefined,
//     instagram = undefined,
//     facebook = undefined,
//     aprovedCourses = [],
//     learningPaths = [],
// }) {
//     // Llamamos al constructor de Student con el contexto de Expert
//     Student.call(this, {
//         name,
//         email,
//         username,
//         twitter,
//         instagram,
//         facebook,
//         aprovedCourses,
//         learningPaths,
//     });

// }

// function BasicStudent(props) {
//     Student.call(this, props);
// }
// function ExpertStudent(props) {
//     Student.call(this, props);
// }

// // Asignamos el objeto prototipo de Student al objeto prototipo de FreeStudent
// FreeStudent.prototype = Object.create(Student.prototype);
// // Establecemos el constructor de FreeStudent
// // FreeStudent.prototype.constructor = FreeStudent;

// FreeStudent.prototype.approvedCourse = function (newCourse) {
//     if (newCourse.isFree) {
//         this.aprovedCourses.push(newCourse);
//     }
//     else {
//         console.warn("Lo sentimos " + this.name + " solo puedes tomar cursos abiertos")
//     }
// }

// BasicStudent.prototype.approvedCourse = function (newCourse) {
//     if (newCourse.lang !== "english") {
//         this.aprovedCourses.push(newCourse);
//     } else {
//         console.warn("Lo sentimos " + this.name + " no puedes tomar cursos en ingles")
//     }
// }

// ExpertStudent.prototype.approvedCourse = function (newCourse) {
//     this.aprovedCourses.push(newCourse);
// }

// Estudiantes:
const juan2 = new FreeStudent({
    name: "Juan",
    email: "juan123@mail.com",
    username: "juan",
    twitter: "@juanDc123",
    learningPaths: [escualaWeb, escualaVgs],
});

const miguelito2 = new BasicStudent({
    name: "Miguel",
    email: "miguel235@mail.com",
    username: "jiguelitofeliz",
    twitter: "@miguelDR",
    learningPaths: [escualaWeb, escualaData],
});

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

// Playgrounds: Controlar accesos con get y set

// El siguente programa valida si el texto e sun strin o no , si es un "string"
// este trnasforma en Mayusculas la primera letra de cada palabra y sino no lo hace

// export class Course {
//     constructor({
//         name,
//         classes = [],
//     }) {
//         this._name = name;
//         this.classes = classes;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(nuevoNombrecito) {
//         if (typeof nuevoNombrecito === "string") {
//             const words = nuevoNombrecito.split(" ");
//             const wordsNew = words.map(function (word) {
//                 return word[0].toUpperCase() + word.slice(1);
//             }).join(" ");
//             console.log(words);
//             console.log("Texto 1ra letra en Mayusculas: " + wordsNew);
//             this._name = wordsNew;

//         } else {
//             console.error("NO se puede Perro debe ser String!!")
//         }
//     }
// }





