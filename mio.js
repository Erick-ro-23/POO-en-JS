import Student from "./student";
import Teacher from "./teacher";
import LearningPaths from "./learningPaths";

// Cursos

const curosProgBasica = new Course({
    id: 'curosProgBasica',
    name: 'Curso Gratis de Programación Básica',
    classes: ["Digitalizacion de datos", "Estructura de Datos", "POO"],
})
const curosDefinitivoHTML = new Course({
    id: 'curosDefinitivoHTML',
    name: 'Curso Definitivo de HTML',
    classes: ["Clases Definitivo de HTML y CSS",
        "Clases de HTML y Css", "Introduccion a JavaScript"]
})
const curosPracticoHTML = new Course({
    id: 'curosPract',
    name: 'Curso Gratis de Programación Básica',
    classes: ["Practicas de HTML", "Clases Prácticas de HTML y CSS", "Ejemplos de POO"]
})

//Academias:

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

const escuelaDIgitales = new LearningPaths({ curosProgBasica });

//Teachers:

const Fredy = new Teacher({
    id: "123",
    name: 'Fredy',
    email: "fredyvega@mail.com",
    username: 'fredyveg_23',
    twitter: '@fredy234',
    edad: 45,
    curso: [curosProgBasica, curosDefinitivoHTML, curosPracticoHTML]

});


//Students:
const juan2 = new Student({
    name: "Juan",
    email: "juan123@mail.com",
    username: "juan",
    twitter: "@juanDc123",
    learningPaths: [escualaWeb, escualaVgs],
    aprovedCourses: [curosProgBasica, curosDefinitivoHTML, curosPracticoHTML],
    points: 3560,

})

const miguelito2 = new Student({
    name: "Miguel",
    email: "miguel235@mail.com",
    username: "jiguelitofeliz",
    twitter: "@miguelDR",
    learningPaths: [escualaWeb, escualaData],
    points: 2340,

})

const juan3 = new Student({
    name: "Juan",
    email: "juan21@mail.com",
    username: "jiguelitofeliz",
    twitter: "@miguelDR",
    learningPaths: [escualaWeb, escualaData],
})












