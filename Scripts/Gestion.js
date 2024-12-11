// Información de las personas
const people = [
    {
        img: "https://imgs.search.brave.com/DRTmCV_iZUGBrIGxLnFb0fq0r55yMXMf990c6cV-nyo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNzkz/MzkwMjcvZXMvZm90/by9wZXJmaWwtZGUt/dW5hLW11amVyLWpv/dmVuLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1sclJZd1l0/Njg3X2d3UXNXM2Ut/UWFSdlN0c3JBOEJn/cXZheTFpOTdPNTEw/PQ",
        name: "Carla Julia Gonzales",
        email: "Carla@gmail.com",
        phone: "123-456-7890",
        nationality: "Mexicana",
        city: "Ciudad de México",
        title: "Ingeniera",
        specialized: "Licenciado en Administración de Empresas con 5 años de experiencia en gestión de proyectos y optimización de procesos en el sector financiero, logrando una reducción de costos del 20%. Especializado en análisis de datos y desarrollo de estrategias para el crecimiento.",
        experience: ["Gerente de Operaciones | Empresa XYZ: Supervisé un equipo de 15 personas en la gestión de la cadena de suministro, logrando una reducción del 10% en los costos operativos anuales.", "Prácticas Profesionales | Consultora ABC: Apoyé en la elaboración de planes de negocio para clientes, realizando análisis de mercado y proyecciones financieras",],
        studies: ["Licenciatura en Administración de Empresas Universidad ABC | 2018 - 2022", "Promedio: 8.5/10", "Cursos destacados: Finanzas Corporativas, Marketing Digital, Gestión de Proyectos, Comportamiento Organizacional.", "Trabajo de Fin de Grado: Estrategias de Innovación para PYMES en el sector tecnológico, con enfoque en la digitalización y optimización de procesos.",],
        skills: ["JavaScript", "HTML", "CSS"],
        instagram:"https://www.instagram.com/",
        linkedin:"https://www.linkedin.com/",
        facebook:"https://www.facebook.com/",
        gitHub:"https://github.com/",
    },
    {
        img: "https://imgs.search.brave.com/RetRWccVYgcjpE_ck56gaXuy7WUTGJilJx9Ojfaj2aM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/NTEyNDI3NC9lcy9m/b3RvL3JldHJhdG8t/ZGUtaG9tYnJlLWRl/LW1lZGlhbmEtZWRh/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ajNieVA1N2JH/bkxGUGhFd29KTmp3/blFWTDU4UlJwbVlm/TFQ1a19POW5LRT0",
        name: "Juan Roberto Ordoñez",
        email: "Juan@gmail.com",
        phone: "987-654-3210",
        nationality: "Colombiana",
        city: "Bogotá",
        title: "Diseñadora",
        specialized: "Licenciado en Administración de Empresas con 5 años de experiencia en gestión de proyectos y optimización de procesos en el sector financiero, logrando una reducción de costos del 20%. Especializado en análisis de datos y desarrollo de estrategias para el crecimiento.",
        experience: ["Gerente de Operaciones | Empresa XYZ: Supervisé un equipo de 15 personas en la gestión de la cadena de suministro, logrando una reducción del 10% en los costos operativos anuales.", "Prácticas Profesionales | Consultora ABC: Apoyé en la elaboración de planes de negocio para clientes, realizando análisis de mercado y proyecciones financieras",],
        studies: ["Licenciatura en Administración de Empresas Universidad ABC | 2018 - 2022", "Promedio: 8.5/10", "Cursos destacados: Finanzas Corporativas, Marketing Digital, Gestión de Proyectos, Comportamiento Organizacional.", "Trabajo de Fin de Grado: Estrategias de Innovación para PYMES en el sector tecnológico, con enfoque en la digitalización y optimización de procesos.",],
        skills: ["JavaScript", "HTML", "CSS"],
        instagram:"https://www.instagram.com/",
        linkedin:"https://www.linkedin.com/",
        facebook:"https://www.facebook.com/",
        gitHub:"https://github.com/",
    },
    {
        img: "https://imgs.search.brave.com/PqIo88qyawtP8PQR9Zke8-uRLOK8wLesKl7nqkW3B7E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NzQ5NTg2MC9lcy9m/b3RvL2hvbWJyZS1h/ZnJvYW1lcmljYW5v/LWNvbi1nYWZhcy12/aXN0YS1sYXRlcmFs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1nUjh0ZS1WdUJD/djBCcGNhTVpVekM2/LThOS0F5YmVGM1U5/TUtUS3VZWk5VPQ",
        name: "Gerardo Anibal Vargas",
        email: "Gerardo@gmail.com",
        phone: "555-555-5555",
        nationality: "Argentina",
        city: "Buenos Aires",
        title: "Desarrolladora",
        specialized: "Licenciado en Administración de Empresas con 5 años de experiencia en gestión de proyectos y optimización de procesos en el sector financiero, logrando una reducción de costos del 20%. Especializado en análisis de datos y desarrollo de estrategias para el crecimiento.",
        experience: ["Gerente de Operaciones | Empresa XYZ: Supervisé un equipo de 15 personas en la gestión de la cadena de suministro, logrando una reducción del 10% en los costos operativos anuales.", "Prácticas Profesionales | Consultora ABC: Apoyé en la elaboración de planes de negocio para clientes, realizando análisis de mercado y proyecciones financieras",],
        studies: ["Licenciatura en Administración de Empresas Universidad ABC | 2018 - 2022", "Promedio: 8.5/10", "Cursos destacados: Finanzas Corporativas, Marketing Digital, Gestión de Proyectos, Comportamiento Organizacional.", "Trabajo de Fin de Grado: Estrategias de Innovación para PYMES en el sector tecnológico, con enfoque en la digitalización y optimización de procesos.",],
        skills: ["JavaScript", "HTML", "CSS"],
        instagram:"https://www.instagram.com/",
        linkedin:"https://www.linkedin.com/",
        facebook:"https://www.facebook.com/",
        gitHub:"https://github.com/",
    }
];
index = 0;
const revisados = [];
const omitidos = [];
showDetails(index)

// Función para mostrar detalles en el div izquierdo
function showDetails(index) {
    const person = people[index];
    const detailsDiv = document.getElementById("details");
    detailsDiv.innerHTML = `
<div class="datos">
                <div class="Presentacion">
                    <img src= "${person.img}" alt="${person.name}" style="width:120px; height:120px; border-radius:50%;">
                    <h2>${person.name}</h2>
                </div>
                <div class="Contacto">
                <div class="Con">
                    <p><strong>Correo:</strong> ${person.email}</p>
                    <p><strong>Teléfono:</strong> ${person.phone}</p>
                    <p><strong>Nacionalidad:</strong> ${person.nationality}</p>
                    <p><strong>Ciudad:</strong> ${person.city}</p>
                    <p><strong>Título:</strong> ${person.title}</p>
                </div>
                </div>
            </div>
            <div class="Especializacion">
                <h3>Especializacion</h3>
                <p>${person.specialized}</p>
            </div> 
            <div class="Capacidad">
                <div class="Experiencia">
                    <h4>Experiencia</h4>
                    <ul>
                        ${person.experience.map(experien => `<li>${experien}</li>`).join('')}
                    </ul>
                </div>
                <div class="Estudios">
                    <h4>Estudios</h4>
                    <ul>
                        ${person.studies.map(studie => `<li>${studie}</li>`).join('')}
                    </ul>
                </div>
                <div class="Habilidades">
                    <h4>Habilidades</h4>
                    <ul>
                        ${person.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="Botones">
                <div class="buttons">
                    <button class="revisado" onclick="markAsReviewed(${index})">Revisado</button>
                    <button class="omitir" onclick="markAsOmitted(${index})">Omitir</button>
                </div>

                <div class="Redes">
                    <a href="${person.instagram}" target="_blank">
                        <img src= "https://cdn-icons-png.freepik.com/512/2504/2504918.png" style="width:38px; height:38px;">
                    </a>
                    <a href="${person.linkedin}" target="_blank">
                        <img src= "https://cdn-icons-png.freepik.com/512/2504/2504923.png" style="width:38px; height:38px;">
                    </a>
                    <a href="${person.facebook}" target="_blank">
                        <img src= "https://cdn-icons-png.freepik.com/512/2504/2504903.png" style="width:38px; height:38px;">
                    </a>
                    <a href="${person.gitHub}" target="_blank">
                        <img src= "https://cdn-icons-png.freepik.com/512/2504/2504911.png" style="width:38px; height:38px;">
                    </a>
                </div>
            </div>
            </div>
`;
}

// Función para marcar como revisado
function markAsReviewed(index) {
    revisados.push(people[index]);
    removePerson(index);
    showDetails(index + 1);
}

// Función para marcar como omitido
function markAsOmitted(index) {
    omitidos.push(people[index]);
    removePerson(index);
    showDetails(index + 1);
}

// Función para eliminar la persona del div derecho
function removePerson(index) {
    const personDiv = document.getElementById(`person-${index}`);
    personDiv.remove();
    const detailsDiv = document.getElementById("details");
    detailsDiv.innerHTML = "<h2>Detalles de la Persona</h2><p>Selecciona una persona para ver los detalles aquí.</p>";
}
