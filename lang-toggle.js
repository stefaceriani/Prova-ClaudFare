const langBtn = document.getElementById("lang-toggle");

let currentLang = "it";

const texts = {
    it: {
        webDev: "Web Developer",
        separator: "      &      ",
        graphic: "Graphic Designer",
        intro1: "Sono Stefano Ceriani,",
        intro2: "Web Developer e Graphic Designer.",
        intro3: "Creo esperienze digitali coinvolgenti e soluzioni visive innovative.",
        explore: "Esplora il mio lavoro",
        projects: "Vedi i miei progetti",
        footer: "© 2025-2026 Stefano Ceriani. Tutti i diritti riservati."
    },
    en: {
        webDev: "Web Developer",
        separator: "      &      ",
        graphic: "Graphic Designer",
        intro1: "I'm Stefano Ceriani,",
        intro2: "Web Developer and Graphic Designer.",
        intro3: "I create engaging digital experiences and innovative visual solutions.",
        explore: "Explore my work",
        projects: "View my projects",
        footer: "© 2025-2026 Stefano Ceriani. All rights reserved."
    }
};

langBtn.addEventListener("click", () => {
    currentLang = currentLang === "it" ? "en" : "it";

    document.querySelector(".hero-text h2").textContent = texts[currentLang].webDev;
    document.querySelectorAll(".hero-text h2")[1].textContent = texts[currentLang].graphic;

    document.querySelector("pccr").textContent = texts[currentLang].intro1;
    document.querySelector("pcc").textContent = texts[currentLang].intro2;
    document.querySelector("pc").textContent = texts[currentLang].intro3;

    document.querySelector(".hero-buttons h3").textContent = texts[currentLang].explore;
    document.querySelector(".hero-buttons .btn").textContent = texts[currentLang].projects;

    document.querySelector("footer p").textContent = texts[currentLang].footer;

    langBtn.textContent = currentLang === "it" ? "IT / EN" : "EN / IT";
});



// const langBtn = document.getElementById("lang-toggle");

//let currentLang = "it";

//const texts = {
//    it: {
//        navbarProjects: "Progetti",
 //       navbarAbout: "Chi sono",
  //      navbarContact: "Contatti",
  //      webDev: "· Web Developer",
   //     graphic: "· Graphic Designer",
  //      intro1: "Sono Stefano Ceriani,",
   //     intro2: "Web Developer e Graphic Designer.",
  //     intro3: "Creo esperienze digitali coinvolgenti e soluzioni visive innovative.",
 //       explore: "Esplora il mio lavoro",
  //      projects: "Vedi i miei progetti",
 //       footer: "© 2025-2026 Stefano Ceriani. Tutti i diritti riservati."
 //   },
 //   en: {
 //       navbarProjects: "Projects",
 //       navbarAbout: "About",
 //       navbarContact: "Contact",
 //       webDev: "· Web Developer",
   //     graphic: "· Graphic Designer",
  //      intro1: "I'm Stefano Ceriani,",
   //     intro2: "Web Developer and Graphic Designer.",
  //      intro3: "I create engaging digital experiences and innovative visual solutions.",
   //     explore: "Explore my work",
   //     projects: "View my projects",
 //       footer: "© 2025-2026 Stefano Ceriani. All rights reserved."
 //   }
//};

//langBtn.addEventListener("click", () => {
//    currentLang = currentLang === "it" ? "en" : "it";

//    document.querySelector(".hero-text h2").textContent = texts[currentLang].webDev;
//    document.querySelectorAll(".hero-text h2")[1].textContent = texts[currentLang].graphic;

//    document.querySelector("pccr").textContent = texts[currentLang].intro1;
//    document.querySelector("pcc").textContent = texts[currentLang].intro2;
//    document.querySelector("pc").textContent = texts[currentLang].intro3;

//    document.querySelector(".hero-buttons h3").textContent = texts[currentLang].explore;
//    document.querySelector(".hero-buttons .btn").textContent = texts[currentLang].projects;
//    document.querySelector(".footer").textContent = texts[currentLang].footer;

//    langBtn.textContent = currentLang === "it" ? "IT / EN" : "EN / IT";
//});
// Initialize with default language
//langBtn.click();