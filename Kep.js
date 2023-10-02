 class Kep{
    #kepSrc = {}
    constructor(kepSrc,index,szuloElem)
    {
        szuloElem.append("<div class='sglKep'>")
        this.#kepSrc = kepSrc
        this.tarolo = szuloElem.children("div:last-child")
        this.tarolo.append(`<img src= "${this.#kepSrc.src}" alt= "">`)
        this.kepImg = this.tarolo.children("img")
        this.tarolo.on("click", () => {
            this.kattintasTrigger();
        });
        this.kattintottKep(kepSrc)
     
    }
    kattintasTrigger() {
        let esemeny = new CustomEvent("megjelenit", { detail: this });
        window.dispatchEvent(esemeny);
    }
    kattintottKep(kepSrc) {
        this.kattintott = kepSrc
    }

} export default Kep