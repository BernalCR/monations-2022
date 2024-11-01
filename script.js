class Country{
    constructor(flag, name, shortLang, lang, url){
        this.flag = flag;
        this.name = name;
        this.shortLang = shortLang;
        this.lang = lang;
        this.url = url;
    }
}

const usa = new Country("https://monatglobal.com/au/wp-content/uploads/sites/12/2022/07/usa-falg.jpg", "UNITED STATES", "EN", "English", "https://monations.com/");
const usaEs = new Country("https://monatglobal.com/au/wp-content/uploads/sites/12/2022/07/usa-falg.jpg", "ESTADOS UNIDOS", "ES", "Español", "https://monations.com/us-es/");
const ca = new Country("https://monatglobal.com/au/wp-content/uploads/sites/12/2022/07/ca-flag.jpg", "CANADA", "EN", "English", "https://monations.com/ca/");
const caFr = new Country("https://monatglobal.com/au/wp-content/uploads/sites/12/2022/07/ca-flag.jpg", "CANADA", "FR", "Français", "https://monations.com/ca-fr/");
const uk = new Country("https://monatglobal.com/au/wp-content/uploads/sites/12/2022/07/uk-flag.jpg", "UNITED KINGDOM", "EN", "English", "https://monations.com/uk/");
const ie = new Country("https://monatglobal.com/au/wp-content/uploads/sites/12/2022/07/ie-flag.jpg", "IRELAND", "EN", "English", "https://monations.com/ie/");
const au = new Country("https://monatglobal.com/au/wp-content/uploads/sites/12/2022/07/au-flag.jpg", "AUSTRALIA", "EN", "English", "https://monations.com/au/");
const es = new Country("https://monatglobal.com/au/wp-content/uploads/sites/12/2022/07/es-flag.jpg", "ESPAÑA", "ES", "Español", "https://monations.com/es/");
const pl = new Country("https://monatglobal.com/au/wp-content/uploads/sites/12/2022/07/pl-flag.jpg", "POLSKA", "PL", "Polski", "https://monations.com/pl/");
const lt = new Country("https://monatglobal.com/au/wp-content/uploads/sites/12/2022/07/lt-flag.jpg", "LIETUVA", "LT", "Lietuvis", "https://monations.com/lt/");

const allCountries = [usa, usaEs, ca, caFr, uk, ie, au, es, pl, lt];


let currentCountry = usa;

// Pintamos las banderas
let currentLocation = document.getElementById('currentLocation');
let countriesList = document.getElementById('countries_list');
currentLocation.innerHTML += `
    <div class="country_card display_flex a_i_center">
        <img alt="${currentCountry.name} flag" src="${currentCountry.flag}">
        <p>${currentCountry.shortLang}</p>
    </div>
`;

allCountries.forEach(country => {
    if(country != currentCountry){
        countriesList.innerHTML +=`
            <a href="${country.url}" class="country_card display_flex a_i_center">
                <img alt="${country.name} flag" src="${country.flag}">
                
                <div>
                    <p class="SuisseIntl_Medium">${country.name}</p>
                    <p>${country.lang}</p>
                </div>
            </a>
        `
    }
});

let scrollPos = window.scrollY;
let scrollBtn = document.getElementById("scrollBtn");
window.addEventListener("scroll", () =>{
    if (window.matchMedia("(max-width: 700px)").matches) {
        let currentScroll = window.scrollY; 
        if (currentScroll < scrollPos){
            scrollBtn.classList.add("active");
        }else{
            scrollBtn.classList.remove("active");
        }
        scrollPos = currentScroll;
    }
});

let section = document.querySelectorAll('.nav_section');
let secondMenu = document.getElementById("second_menu");
window.addEventListener("scroll", () =>{
    if (window.matchMedia("(min-width: 700px)").matches) {
        if(window.scrollY > 50 && !(hamMenu.classList.contains("active") || regionsMenu.classList.contains("active")) ){
            secondMenu.classList.add("active");
        }else{
            secondMenu.classList.remove("active");
        }
    }else {
        if(window.scrollY > section[0].offsetTop  && !(hamMenu.classList.contains("active") || regionsMenu.classList.contains("active"))){
            secondMenu.classList.add("active");
        }else{
            secondMenu.classList.remove("active");
        }
    }
}); 
  
// Funcion que evalua en que seccion estamos
let navLinks = document.querySelectorAll('#second_menu a');
let navLi = document.querySelectorAll('#second_menu li');
const scrollspy = () =>{
    navLinks.forEach(links =>{
        links.classList.remove("active")
    });
    section.forEach((sec, i) =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - secondMenu.clientHeight;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")
        if (window.matchMedia("(min-width: 700px)").matches) {
            if(top >= offset && top < offset + height){
                navLinks.forEach(links =>{
                    links.classList.remove("active")
                    document.querySelector("#second_menu a[href*=" + id + "]").classList.add("active");
                });
            }
        } else {
            if(top < offset){
                navLi[i].style.transform = "translate(100%)";
            }else if(top >= offset && top < offset + height){
                navLi[i].style.transform = "translate(0%)";
            }else{
                navLi[i].style.transform = "translate(-100%)";
            }
        }
    });
}

// llamamos la funcion scrollspy, esta se activa cuando comienza la pagina (load) o cuando se hace scroll
window.addEventListener("scroll", () =>{
    scrollspy();
});

window.addEventListener("load", () =>{
    scrollspy();
});


// Funcion del menu de hamburguesa
let mainMenu = document.getElementById("main_menu");
let hamIcon = document.getElementById("ham_icon");
let hamMenu = document.getElementById('ham_menu');
let regionsMenu = document.getElementById('regionsMenu');
let overlayBottom = document.getElementById("overlay_bottom_h");
let linksHam = document.querySelectorAll('.main_list_menu a');

const closeHam = () =>{
    hamMenu.classList.remove('active');
    hamIcon.classList.remove('active');
    
    if (window.matchMedia("(min-width: 700px)").matches) {
        if(window.scrollY > 50){
            secondMenu.classList.add("active");
        }
    }else {
        if(window.scrollY > section[0].offsetTop){
            secondMenu.classList.add("active");
        }
    }
}

const closeReg = () =>{
    regionsMenu.classList.remove('active');
    
    if (window.matchMedia("(min-width: 700px)").matches) {
        if(window.scrollY > 50){
            secondMenu.classList.add("active");
        }
    }else {
        if(window.scrollY > section[0].offsetTop){
            secondMenu.classList.add("active");
        }
    }
}

hamIcon.addEventListener("click", () =>{
    if(!regionsMenu.classList.contains("active")){
        overlayBottom.classList.toggle('active');
    }
    regionsMenu.classList.remove('active');
    hamIcon.classList.toggle('active');
    hamMenu.style.top = `${mainMenu.clientHeight}px`;
    hamMenu.style.height = `${window.innerHeight - mainMenu.clientHeight}px`;
    hamMenu.classList.toggle('active');
    
    if (window.matchMedia("(min-width: 700px)").matches) {
        if(window.scrollY > 50){
            secondMenu.classList.toggle("active");
        }
    }else {
        if(window.scrollY > section[0].offsetTop){
            secondMenu.classList.toggle("active");
        }
    }
});

currentLocation.addEventListener("click", () =>{
    closeHam();
    overlayBottom.classList.add('active');
    regionsMenu.style.top = `${mainMenu.clientHeight}px`;
    regionsMenu.style.height = `${window.innerHeight - mainMenu.clientHeight}px`;
    regionsMenu.classList.add('active');
    
    if (window.matchMedia("(min-width: 700px)").matches) {
        if(window.scrollY > 50){
            secondMenu.classList.toggle("active");
        }
    }else {
        if(window.scrollY > section[0].offsetTop){
            secondMenu.classList.toggle("active");
        }
    }
});

overlayBottom.addEventListener("click", () =>{
    closeHam();
    closeReg();
    overlayBottom.classList.remove('active');
});

closeRegions.addEventListener("click", () =>{
    closeReg();
    overlayBottom.classList.remove('active');
});

linksHam.forEach(link => {
    link.addEventListener("click", () =>{
        closeHam();
        overlayBottom.classList.remove('active');
    });
});


// Countdownd 
(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let monations = "Sep 07, 2022 00:00:00",
        countDown = new Date(monations).getTime(),
        
    x = setInterval(function() {    
        let now = new Date().getTime(),
            distance = countDown - now;
    
        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
        //do something later when date is reached
        if (distance < 0) {
            let headline = document.getElementById("headline"),
                counterBox = document.getElementById("counterBox"),
                content = document.getElementById("content");
    
            headline.innerText = "Monations";
            counterBox.style.display = "none";
            content.style.display = "block";
            clearInterval(x);
        }
    }, 0)
    
}());


// Switch button
let switchBtn = document.querySelector(".switch input");
let monationsMode = document.getElementById("monationsMode");

const onButton = () =>{
    switchBtn.checked = true;
    monationsMode.classList.add("active");
}

let tlMode = gsap.timeline()
tlMode.call(onButton)
tlMode.to("#monationsMode", {opacity:1}) 

ScrollTrigger.create({
    trigger: "#monationsMode",
    start: "top 80%",
    animation: tlMode
});

switchBtn.addEventListener("input", () =>{
    monationsMode.classList.toggle("active");
});


// Agenda
let agendaOptions = document.querySelectorAll(".agenda_days");
let navDaysAgenda = document.querySelectorAll('#navbar_agenda ul li');
let tabContent = document.querySelectorAll('.tab_content');
let modalAgenda = document.getElementById("myModal");

agendaOptions.forEach(options =>{
    options.addEventListener("click", (e) =>{
        let selectedDay = e.target.className;
        navDaysAgenda.forEach(day =>{
            (day.className == selectedDay) ? day.classList.add("active") :  day.classList.remove("active");
        });
        
        tabContent.forEach(tabDay =>{ 
            if(tabDay.classList.contains(selectedDay)){
                modalAgenda.style.display = "block";
                tabDay.classList.add("active")
            }else{
                tabDay.classList.remove("active");
            }
        });
        
        window.addEventListener("click", (e) => {
            if (e.target == modalAgenda || e.target.classList.contains("close_agenda")) {
                modalAgenda.style.display = "none";
            }
        })
    }); 
});


// Speakers 
let overlayTop = document.getElementById("overlay_top_h");

const tlSpeaker1 = gsap.timeline();
tlSpeaker1.to("#offSpeaker1", {x: "0%", duration: 0.3})
          .to("#offSpeaker1 *", {opacity: 1, duration: 0.3})
          .to("body", {overflow: "hidden"}, 0)
          .reversed(true); 

const tlSpeaker2 = gsap.timeline();
tlSpeaker2.to("#offSpeaker2", {x: "0%", duration: 0.3})
          .to("#offSpeaker2 *", {opacity: 1, duration: 0.3})
          .to("body", {overflow: "hidden"}, 0)
          .reversed(true);


let tlSpeakers = [tlSpeaker1, tlSpeaker2];

tlSpeakers.forEach((tl, i) =>{
    document.getElementById(`btn_speaker_${i+1}`).addEventListener("click", () =>{
        tl.reversed(!tl.reversed());
        overlayTop.classList.add('active');
    });
});

let closeSpeaker = document.querySelectorAll(".close_speaker");
tlSpeakers.forEach((tl, i) =>{
    overlayTop.addEventListener("click", () => {
        tl.reversed(true);
        overlayTop.classList.remove('active');
    });
    
    closeSpeaker[i].addEventListener("click", () =>{
        tl.reversed(true);
        overlayTop.classList.remove('active');
    });
});



// Why attend

if (window.matchMedia("(min-width: 700px)").matches) {
    gsap.utils.toArray(".attend_row").forEach((row, i) => {
        const [x, xEnd] = i % 2 ? ["85%", (row.scrollWidth - row.offsetWidth) * -1.5] : [row.scrollWidth * -0.5, 0];
        gsap.fromTo(row,{ x },{
          x: xEnd,
            scrollTrigger: {
                trigger: row,
                scrub: 2.5,
                start:"top 100%",
                end: "bottom 25%",
                // markers: {startColor: "blue", endColor: "yellow", fontSize: "12px"}
            } 
        });
    });
} else {
    /* MOBILE */
    gsap.utils.toArray(".attend_row").forEach((row, i) => {
        const [x, xEnd] = i % 2 ? ["85%", (row.scrollWidth - row.offsetWidth) * -1] : [row.scrollWidth * -0.9, 0];
        gsap.fromTo(row,{ x },{
          x: xEnd,
            scrollTrigger: {
                trigger: row,
                scrub: 1,
                start:"top 100%",
                end: "bottom 25%",
                // markers: {startColor: "blue", endColor: "yellow", fontSize: "12px"}
            } 
        });
    });
}


// Hotels
let availableHotels = document.getElementById("available_hotels");
let soldOutHotels = document.getElementById("soldOut_hotels");
let filterApplied = document.getElementById("filter_applied");
let hotelInputs = document.querySelectorAll("#off_hotels input");

class Hotels{
    constructor(category, name, address, price, url, available){
        this.category = category;
        this.name = name;
        this.address = address;
        this.price = price;
        this.url = url;
        this.available = available;
    }
}

//list hotels
const hotel1 = new Hotels("GREAT RATES", "COURTYARD", "ST. LOUIS DOWNTOWN WEST", "169", "https://www.marriott.com/event-reservations/reservation-link.mi?id=1638471005987&key=GRP&app=resvlink", true);
const hotel2 = new Hotels("BY THE ARCH", "HILTON", "ST. LOUIS AT THE BALLPARK", "169", "https://www.hilton.com/en/attend-my-event/monations-2022-st-louis-hbpstl/", true);
const hotel3 = new Hotels("NEAR EVENT CAMPUS", "HOLIDAY INN", "ST. LOUIS DOWNTOWN CONVENTION CENTER", "168", "https://www.ihg.com/holidayinn/hotels/us/en/find-hotels/hotel/rooms?qDest=811%20North%20Ninth%20Street,%20St.%20Louis,%20MO,%20US&qCiMy=82022&qCiD=1&qCoMy=82022&qCoD=12&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=MON&qSlH=STLCC&qAkamaiCC=MX&qSrt=sBR&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va.ii.sp.nd.ct.sx.we.lx&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&qSHBrC=HI&icdv=99801505", true);
const hotel4 = new Hotels("NEAR EVENT CAMPUS", "LUMIÈRE PLACE CASINO HOTEL", "", "169", "https://www.caesars.com/book/room-list?arrivalDate=09/06/2022&departureDate=09/07/2022&dateSearchFormat=exact-dates&roomDetails=[%7B%22adults%22:2,%22children%22:0%7D]&propCode=lus&roomCount=1&viewrates=dollars&roomFilters=[%7B%22accessible%22:[%22N%22]%7D]", true);
const hotel5 = new Hotels("BY THE ARCH", "HYATT REGENCY", "St. Louis at the Arch", "199", "https://www.hyatt.com/en-US/group-booking/STLRS/G-MNAT", true);
const hotel6 = new Hotels("PREMIUM STAY", "LE MÉRIDIEN", "St. Louis Downtown", "209", "https://monatglobal.com/au/wp-content/uploads/sites/12/2022/07/Le-Meridien-St-Louis-Downtown-.jpg", true);
const hotel7 = new Hotels("PREMIUM STAY", "LIVE! BY LOEWS", "", "199", "https://www.loewshotels.com/live-by-loews-st-louis-missouri/monations-2022", true);
const hotel8 = new Hotels("NEAR EVENT CAMPUS", "MARRIOTT", "St. Louis Grand", "179", "https://book.passkey.com/event/50291254/owner/84420/landing", true);
const hotel9 = new Hotels("GREAT RATES", "PEAR TREE INN", "St. Louis Near Union Station", "149", "https://www.druryhotels.com/bookandstay/newreservation/?groupno=2442572", true);
const hotel10 = new Hotels("PREMIUM STAY", "ST. LOUIS UNION STATION HOTEL, CURIO COLLECTION BY HILTON", "", "169", "https://www.hilton.com/en/book/reservation/deeplink?&ctyhocn=STLCUQQ&arrivalDate=2022-09-07&departureDate=2022-09-11&groupCode=MON22", true);
const hotel11 = new Hotels("PREMIUM STAY", "THE WESTIN", "St. Louis", "199", "https://www.marriott.com/event-reservations/reservation-link.mi?id=1635805414824&key=GRP&app=resvlink", true);

//Sold out Hotels
const hotel12 = new Hotels("NEAR EVENT CAMPUS", "COURTYARD", "St. Louis Downtown / Convention Center", "164", "https://www.marriott.com/event-reservations/reservation-link.mi?id=1638546111668&key=GRP&app=resvlink", false);
const hotel13 = new Hotels("NEAR EVENT CAMPUS", "EMBASSY SUITES BY HILTON", "St. Louis Downtown", "185", "https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=STLWAES&groupCode=CESMOA&arrivaldate=2022-09-05&departuredate=2022-09-12&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT", false);
const hotel14 = new Hotels("BY THE ARCH", "HAMPTON INN", "St. Louis Downtown (At the Gateway Arch)", "159", "https://www.hilton.com/en/attend-my-event/stldthx-mon-3eaddbd6-5fb9-441f-9f2d-e1b16ba4d2c3/", false);
const hotel15 = new Hotels("BY THE ARCH", "HILTON", "St. Louis Downtown at the Arch", "169", "https://www.hilton.com/en/attend-my-event/monations2022stlouis/", false);
const hotel16 = new Hotels("PREMIUM STAY", "HOTEL", "St. Louis, Autograph Collection", "205", "https://www.marriott.com/event-reservations/reservation-link.mi?id=1646694553250&key=GRP&app=resvlink", false);
const hotel17 = new Hotels("PREMIUM STAY", "HOTEL INDIGO", "St. Louis Downtown", "179", "https://www.ihg.com/hotelindigo/hotels/us/en/find-hotels/hotel/rooms?qDest=501%20Olive%20Street,%20St.%20Louis,%20MO,%20US&qCiMy=82022&qCiD=7&qCoMy=82022&qCoD=11&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=MON&qSlH=STLID&qAkamaiCC=MX&qSrt=sBR&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va.ii.sp.nd.ct.sx.we.lx&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&qSHBrC=IN&icdv=99801505", false);


let arrayHotels = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8, hotel9, hotel10, hotel11, hotel12, hotel13, hotel14, hotel15, hotel16, hotel17]

const showHotels = (h, i, box) =>{
    box.innerHTML += `
        <a aria-label="book hotel ${h.name}" class="card_hotel" href="${h.url}" target="_blank">
            <div id="img_hotel_${i+1}" class="image_module_hotel bkgnd">
                <div class="display_flex col_100 a_s_flex_start"><p class="label_hotel">${h.category}</p></div>
            </div>
            <div class="text_module_hotel">
                <p class="hotel_name SuisseIntl_Medium">${h.name}</p>
                <p class="hotel_address">${h.address}</p>
                <p class="hotel_rate">RATES STARTING AT <span>$${h.price}</span></p>
                <button class="monations_btn hotel_btn"><p>BOOK NOW</p></button>
            </div>
        </a> 
    `
}

arrayHotels.forEach((hotel, i) =>{
    if(hotel.available){
        showHotels(hotel, i, availableHotels);
    }else{
        showHotels(hotel, i, soldOutHotels);  
    }
});

const tlHotels = gsap.timeline();
tlHotels.to("#off_hotels", {x: "0%", duration: 0.3})
          .to("#off_hotels *", {opacity: 1, duration: 0.3})
          .to("body", {overflow: "hidden"}, 0)
          .reversed(true);  

document.getElementById("filterBox").addEventListener("click", () =>{
    tlHotels.play();
    overlayTop.classList.add('active');
});

hotelInputs.forEach(input =>{
    input.addEventListener("input", () =>{
        availableHotels.innerHTML = "";
        tlHotels.reverse();
        overlayTop.classList.remove('active');

        filterApplied.innerHTML = `
            <p>${input.value}<span id="closeFilter">x</span></p>
        `;
        
        document.getElementById("closeFilter").addEventListener("click", () =>{
            filterApplied.innerHTML = "";
            document.querySelector('input[value="ALL"]').checked = true;
            availableHotels.innerHTML = "";
            arrayHotels.forEach((hotel, i) =>{
                if(hotel.available){
                    showHotels(hotel, i, availableHotels);
                }
            });
        });
        
        arrayHotels.forEach((hotel, i) =>{
            if(hotel.available){
                if(input.value == hotel.category){
                    showHotels(hotel, i, availableHotels);
                }else if(input.value == "ALL"){
                    showHotels(hotel, i, availableHotels);
                }
            }
        });
    });
});

overlayTop.addEventListener("click", () => {
    tlHotels.reverse();
    overlayTop.classList.remove('active');
});

document.getElementById("closeHotels").addEventListener("click", () =>{
    tlHotels.reverse();
    overlayTop.classList.remove('active');  
});
 
 
// Destination

const tlTravel = gsap.timeline();
tlTravel.to("#offTravel", {x: "0%", duration: 0.3})
          .to("#offTravel *", {opacity: 1, duration: 0.3})
          .to("body", {overflow: "hidden"}, 0)
          .reversed(true);  

document.getElementById("travelBtn").addEventListener("click", () =>{
    tlTravel.play();
    overlayTop.classList.add('active');
});

overlayTop.addEventListener("click", () => {
    tlTravel.reverse();
    overlayTop.classList.remove('active');
});

document.getElementById("closeTravel").addEventListener("click", () =>{
    tlTravel.reverse();
    overlayTop.classList.remove('active');  
});
 











const disableScroll = () => document.documentElement.style.overflow = 'hidden';
const enableScroll = () => document.documentElement.style.overflow = '';

disableScroll();
enableScroll();