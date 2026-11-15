const scholarships = [
    { 
        name: "Beca de Cuota Interna FIME", 
        role: "Facultad de Ingeniería Mecánica y Eléctrica",
        description: "Beca otorgada por la facultad para exentar el pago de la cuota interna a estudiantes de Ingeniería con buen desempeño académico.",
        imgUrl: "https://static.wixstatic.com/media/37966b_53c196b4313d4d62b390a41991133a0a.gif",
        iconClass: "fa-solid fa-gears",
        link: "https://www.fime.uanl.mx/"
    },
    { 
        name: "Beca de Excelencia Académica", 
        role: "Universidad Autónoma de Nuevo León",
        description: "Dirigida a estudiantes de la UANL con promedios sobresalientes. Exenta el pago de cuotas de rectoría y reconoce el alto nivel académico del alumno.",
        imgUrl: "https://logos-world.net/wp-content/uploads/2022/05/UANL-Emblem.png",
        iconClass: "fa-solid fa-award",
        link: "https://www.uanl.mx/tramites/becas/"
    },
    { 
        name: "Beca Santander Tecnologías", 
        role: "Becas Santander",
        description: "Programa orientado a estudiantes de áreas STEM. Ofrece capacitaciones y apoyos para fortalecer competencias de programación, bases de datos y desarrollo de software.",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiwxBNwgfiYgUDnFXiof9GF2LamZXpuw1ndjIQ1Pnsg&s=10",
        iconClass: "fa-solid fa-laptop-code",
        link: "https://app.santanderopenacademy.com/"
    },
    { 
        name: "Beca Fundación Telmex Telcel", 
        role: "Fundación Telmex",
        description: "Apoyo a nivel nacional para estudiantes de licenciatura en ingeniería. Requiere mantener un alto promedio y otorga un apoyo económico mensual junto con equipo de cómputo.",
        imgUrl: "https://logodownload.org/wp-content/uploads/2022/04/telmex-logo-1.png",
        iconClass: "fa-solid fa-hand-holding-dollar",
        link: "https://www.fundaciontelmextelcel.org/becas"
    }
];

const container = document.getElementById("scholarship-container");
const detailsSection = document.getElementById("details-section");
const detailsTitle = document.getElementById("details-title");
const detailsDesc = document.getElementById("details-desc");
const detailsImg = document.getElementById("details-img");
const detailsLink = document.getElementById("details-link");
const infoAlert = document.getElementById("info-alert");
const closeAlertBtn = document.getElementById("close-alert");

closeAlertBtn.addEventListener("click", () => {
    infoAlert.classList.add("hidden");
});

detailsLink.addEventListener("click", () => {
    alert(`Serás redirigido a la página oficial de: ${detailsTitle.textContent}`);
});

scholarships.forEach(scholarship => {
    const card = document.createElement("div");
    card.className = "scholarship-card";
    card.innerHTML = `
        <i class="${scholarship.iconClass} card-icon"></i>
        <h2>${scholarship.name}</h2>
        <br>
        <p>${scholarship.role}</p>
    `;
    
    card.addEventListener("click", () => {
        document.querySelectorAll(".scholarship-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        
        detailsTitle.textContent = scholarship.name;
        detailsDesc.textContent = scholarship.description;
        detailsImg.src = scholarship.imgUrl;
        detailsLink.href = scholarship.link;
        
        detailsSection.classList.remove("hidden");
    });

    container.appendChild(card);
});