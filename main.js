//Creo un Objeto Literario:
const natalia = {
    name: 'Natalia',
    age: 25,
    cursosAprobados: ["Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y Css"
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};

//Creo Un prototipo Student:
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

//creamos un Método de la funsion por fuera del Prototipo Student:

Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

//Creamos una instancia del prototipo Student:

const juanita = new Student("Juanita Alejandra",
    15,
    ["Curso de la introduccion a los videojuegos",
        "Curso de Creación de personajes"])

//Natila Apruebe otro curso

natalia.cursosAprobados.push("Curso de Responsive Design");

//Prototipos con la sintaxis de Clases:

class Student2 {
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2({
    name: "Miguelito",
    age: 25,
    email: "miguelito@example.com",
    // cursosAprobados: ["Curso de Análisis de Negocios para ciencias de Datos",
    //     "Principios de visualización de datos para BI",],
});

