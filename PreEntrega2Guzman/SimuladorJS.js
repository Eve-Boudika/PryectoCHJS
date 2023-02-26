//Simulador JS para primera pre entrega del proyecto final JS CH


let valorPlanStarter, valorPlanPremium
let eligePlan = prompt("elige tu plan entre Starter o Premium").toLowerCase()
let eligeMeses = prompt("elige cantidad de meses a cotizar")
const valorIVA = 1.21

if (eligeMeses >= 6 ) {
    valorPlanStarter = 5000
    valorPlanPremium = 12000
    
} else {
    valorPlanStarter = 5200
    valorPlanPremium = 12500
}


function elegirUnPlan(){
    eligePlan   
    return eligePlan
    
}

function calcularValor(plan){
    plan = eligePlan

let textoMeses = "mes"

for (let i = 0; i < eligeMeses; i++) {
    if (i > 0) {
        textoMeses = "meses"
    }
    let numeroMes = i + 1
    
  
    if (plan == 'starter') {
        let planConIva = (valorPlanStarter * numeroMes) * valorIVA
        console.log("el valor final de tu plan para " + numeroMes + " " + textoMeses + " " + "de contratación es $ " + planConIva )
    } 
    else if (plan == 'premium') {
        let planConIva = (valorPlanPremium * numeroMes) * valorIVA
        console.log("el valor final de tu plan para " + numeroMes + " " + textoMeses + " " + "de contratación es $ " + planConIva )
    }
    else {
        console.log('Nombre del plan inválido')
        
    }
    
}

}

elegirUnPlan()
calcularValor()
