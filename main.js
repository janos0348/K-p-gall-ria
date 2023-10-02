import Kep from "./Kep.js"
$(function () {
    const kepekTomb = [
        {src: "kepek/kep1.jpg"},
        {src: "kepek/kep2.jpg"},
        {src: "kepek/kep3.jpg"},
        {src: "kepek/kep4.jpg"},
        {src: "kepek/kep5.jpg"},
        {src: "kepek/kep6.jpg"},
        {src: "kepek/kep7.jpg"},
        {src: "kepek/kep9.jpg"},
        {src: "kepek/kep10.jpg"}
    ]
    let nagyKartyaIndex = 0
    const GALERIA = $("#galeria")
    const NAGYKEP = $("#nagyKep")

    const nagyKep = new Kep(kepekTomb[nagyKartyaIndex],nagyKartyaIndex,NAGYKEP);

    kepekTomb.forEach((elem, index) =>{
        const kep = new Kep(elem,index, GALERIA)
    })


    $(window).on("kepvaltas", (event) => {
        let kattintottId = event.detail.index;
        nagyKartyaIndex = kattintottId;
        nagyKep.kattintottKep(galeriaTomb[kattintottId]);
    });
})