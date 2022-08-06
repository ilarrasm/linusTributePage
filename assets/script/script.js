/// Crear carousel 
// el carousel debe funcionar automaticamente y debe tener flechas para moverlo. Con hacer hover debe detenerse la animación. 
// cambiar el contenido de la imagen desde el src y darle una descripción desde el alt. 
// definir el año y el <p>  </p> del contenido 
// crear objeto 
// Todas las imagenes en webp
const array = []

class itemsCarousel {
    constructor(name, src, alt, year, paragraph) {
        this.name = name;
        this.src = src;
        this.alt = alt;
        this.year = year;
        this.paragraph = paragraph;
    };
};

const born = new itemsCarousel("born", "born", "1969 Born on December 28th in Helsinki, Finland", "1969", "Born on December 28th in Helsinki, Finland"),
    vic20 = new itemsCarousel("first computer", "commodoreVic20", "1981 Starts programming in BASIC on a Commodore VIC-20.", "1981", "Starts programming in BASIC on a Commodore VIC-20."),
    university = new itemsCarousel("university", "universityHelsinski", "1988 Enrolls at the University of Helsinki.", "1988", "Enrolls at the University of Helsinki."),
    prota = new itemsCarousel("prototipo", "prototype", "1991 Releases first public prototype of Linux.", "1991", "Releases first public prototype of Linux."),
    master = new itemsCarousel("master", "masterDegree", "1996 Complets his master's degree with Laudatur grade at the Department of Computer Science at the University of Helsinki.", "1996", "Complets his master's degree with Laudatur grade at the Department of Computer Science at the University of Helsinki."),
    eef = new itemsCarousel("EEF", "eef", "1998 Receives the EFF Pioneer Award", "1998", "Receives the EFF Pioneer Award"),
    git = new itemsCarousel("git", "git", "2005 Releases the first public version of Git, Version 0.99.", "2005", "Releases the first public version of Git, Version 0.99."),
    museum = new itemsCarousel("museum", "museum", '2008 Inducted into the Hall of Fellows of the Computer History Museum "for the creation of the Linux kernel and the management of open source development of the widely used Linux operating system."', "2008", 'Inducted into the Hall of Fellows of the Computer History Museum "for the creation of the Linux kernel and the management of open source development of the widely used Linux operating system."'),
    ccprize = new itemsCarousel("ccprize", "ccprize", '2010 Awarded the C&C Prize by the NEC Corporation for "contributions to the advancement of the information technology industry, education, research, and the improvement of our lives.', "2010", 'Awarded the C&C Prize by the NEC Corporation for "contributions to the advancement of the information technology industry, education, research, and the improvement of our lives.'),
    nobel = new itemsCarousel("nobel", "nobel", "2012 Receives the Millennium Technology Prize, widely described as technology's equivalent of the Nobel Prize.", "2012", "Receives the Millennium Technology Prize, widely described as technology's equivalent of the Nobel Prize."),
    hallOfFame = new itemsCarousel("hallOfFame", "hallOfFame", "2012 Inducted, as one of 33 inaugural inductees, into ISOC's Internet Hall of Fame.", "2012", "Inducted, as one of 33 inaugural inductees, into ISOC's Internet Hall of Fame."),
    ieee = new itemsCarousel("ieee", "ieee", "2014 Receives the IEEE Computer Society's Computer Pioneer Award.", "2014", "Receives the IEEE Computer Society's Computer Pioneer Award.");

array.push(born, vic20, university, prota, master, eef, git, museum, ccprize, hallOfFame, ieee)


const img = document.querySelector("#carousel img")
const span = document.querySelector("#carouselContent span")
const p = document.querySelector("#carouselContent p")
let i = 0
let lastItem = array[array.length-1]
const nextEvent =() =>{
    let item = array[i]
    const {name, src, alt, year, paragraph} = item
    img.src = `./assets/media/carousel/${src}.webp`
    img.alt = alt
    span.innerHTML = year
    p.innerHTML = paragraph
    if(item === lastItem){
        i = 0
    }else{
        i += 1
    }    
}
const prevEvent = () =>{
    let item = array[i]
    const {name, src, alt, year, paragraph} = item
    img.src = `./assets/media/carousel/${src}.webp`
    img.alt = alt
    span.innerHTML = year
    p.innerHTML = paragraph
    if(item === array[0]){
        i = array.length-1
    }else{
        i -= 1
    }    
}
nextEvent()
const nextInterval = setInterval(nextEvent, 7000);
const next = document.querySelector("#next")
next.addEventListener("click", nextEvent)
const prev = document.querySelector("#prev")
prev.addEventListener("click", prevEvent)




const hamburguerButton = document.querySelector("#hamburguer");
hamburguerButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const menu = document.querySelector("#menu");
    if(menu.style.display === "flex"){
        menu.style.display = "none"
    }else{
        menu.style.display = "flex"
    }
})