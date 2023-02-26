//Simulador JS para primera pre entrega del proyecto final JS CH



class Planes {
    
    constructor(nombre, valor) {
      this.nombre = nombre;
      this.valor = valor;
      this.valorIVA = 1.21
    }
  
    mostrarDetalle() {
      console.log(`Plan  ${this.nombre} precio final : $${this.calcularIVA()}`);
    }

    calcularIVA() {
    let precioFinal = this.valor * this.valorIVA
    this.valor = precioFinal
    return precioFinal
    }
}
  
  const planStarter = new Planes("Starter", 5000);
  planStarter.mostrarDetalle(); 

  const planPremium = new Planes("Premium", 12000);
  planPremium.mostrarDetalle(); 

  const planBusiness = new Planes("Business", 23000);
  planBusiness.mostrarDetalle(); 

  const planCorporate = new Planes("Corporate", 47000);
  planCorporate.mostrarDetalle(); 

  let listaDePlanes = [planStarter, planPremium, planBusiness, planCorporate]

let opcionesDePlan = ""
listaDePlanes.forEach(element => {
    opcionesDePlan += ` ${element.nombre},`
});


let existePlan = false
let eligePlan = ""

while (!existePlan) {
    eligePlan = prompt(`elige tu plan entre ${opcionesDePlan.slice(0, -1)} ` ).toLowerCase()
    listaDePlanes.forEach(element => {
        if (eligePlan == element.nombre.toLowerCase()) {
            existePlan = true
        }
        
    });
    
}

let eligeMeses = prompt("elige cantidad de meses a cotizar")

function mostrarValorFinal(){
    if (eligeMeses >= 6 ) {
        listaDePlanes.forEach(element => {
            if (eligePlan == element.nombre.toLowerCase()) {
                element.valor -= 2000 
                console.log(`El precio final de tu plan con descuento es $${element.valor}`)
            }
       });
        
    }
    else {
        listaDePlanes.forEach(element => {
            if (eligePlan == element.nombre.toLowerCase()) {
                console.log(`El precio final de tu plan es $${element.valor}`)
            }
       });
    }  
}

mostrarValorFinal()





