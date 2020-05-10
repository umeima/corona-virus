const button = document.getElementById("start-btn")
const préambul = document.getElementById("pré")
const qst=document.getElementById("container")
const stepper = document.querySelectorAll(".stipers h1")
const question=document.getElementById("nextQuestion")
const nextButton=document.getElementById("next-btn")
const input=document.querySelector(".answer-inputs")
const précédent = document.getElementById("pré-btn")
//const progressBar=document.querySelector(".progress")
const nextNumber=document.querySelector(".question-number")
const barWidth=document.querySelector(".bar")
 





//-----------------------//
let index=0;
//-----------------------//



















//----------démarer test -------//
button.addEventListener("click",()=>{
button.classList.add("visible")
préambul.classList.add("visible")
qst.classList.remove("visible")
stepper[0].classList.remove("mouvement")
stepper[1].classList.add("mouvement")
évident()
nextButton.disabled=true 
})
//----------démarer test -------//
//------------------------------------button suivant-------------------------------------------:

nextButton.addEventListener('click',()=>{
   if(index<21){ index++
    showQuestion(questions[index])
    évident()
    prog(index)
    nextButton.disabled=true
    if(index===21){
        nextButton.innerHTML="terminer"
    } else{
        nextButton.innerHTML="suivant"
    }
}
})

//---------------affichage ds qsts----------------------------------------------------------------------------------------:

function showQuestion(questions){
    question.innerText=questions.question
    input.innerHTML = ''
    if(questions.input.type==='radio'){
    questions.input.answer.forEach(answer=> {
        input.innerHTML+=`  <div>
        <input type="radio"  name="choix" id="${answer.text}">
        <label for="${answer.text}">
            <i class="fas ${answer.icon}"></i>
            <span>${answer.text}</span> </label>
    </div>`
        
    })

    } else{ 
        input.innerHTML =`
        <input type="number"  id="${questions.input.name}" min="${questions.input.min}" max="${questions.input.max}" placeholder="${questions.input.min} - ${questions.input.max}">
     <span class="input-span">${questions.input.name}</span> 
`

    }
    
}


//----------button précédent -------//

précédent.addEventListener("click",()=>{
index-- 
showQuestion(questions[index])
évident()
prog(index)
nextButton.disabled=true
if(index===21){
nextButton.innerHTML="terminer"
} else{
    nextButton.innerHTML="suivant"
}

})
//----------visibilité btn pré ------------//

function évident(){
if (index===0){
précédent.style.visibility="hidden"
}else{
    précédent.style.visibility="visible"
}
}

//----------progresse ------------//
function prog(number){
    const addNumber=number+1
    nextNumber.innerHTML=addNumber
   barWidth.style.width=`calc(${addNumber}*calc(100%/22))`
}

//----------disabled btn suivant------------//
input.addEventListener("change",(event)=>{
    const input=event.target
    if(input.type==='number'){
    const number=parseFloat(input.value)
    if (number>=input.min && number<=input.max){
        nextButton.disabled=false  
    }else{
        nextButton.disabled=true  
    }
    
    }else{
        nextButton.disabled=false  
    }
    
})
























//-----------les questions----------//
const questions = [{
    question: 'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Quelle est votre température corporelle ?',

    input: {
        type: 'number',
        name: 'degrés',
        min: 34,
        max: 42
    }
}, {
    question: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
},

 
{
    question:'Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Ces derniers jours, avez-vous un mal de gorge ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, {
    question: 'Actuellement, comment vous vous sentez ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Bien',
            icon: ' far fa-laugh'
        }, {
            text: 'Assez bien',
            icon: ' far fa-smile'
        }, {
            text: 'Fatigué(e)',
            icon: ' far fa-frown'
        }, {
            text: 'Très fatigué',
            icon: 'far fa-dizzy'
        }]
    }
}, {
    question: 'Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',

    input: {
        type: 'number',
        name: 'ans',
        min: 15,
        max: 110
    }
}, 

{
    question: 'Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',

    input: {
        type: 'number',
        name: 'kg',
        min: 20,
        max: 250
    }
}, 

{
    question: 'Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',

    input: {
        type: 'number',
        name: 'cm',
        min: 80,
        max: 250
    }
},

{
    question: 'Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
},

{
    question: 'Êtes-vous diabétique ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
},

{
    question: 'Avez-vous ou avez-vous eu un cancer ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, 

{
    question: 'Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
},

{
    question: 'Avez-vous une insuffisance rénale chronique dialysée ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, 

{
    question: 'Avez-vous une maladie chronique du foie ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, 
{
    question: 'Êtes-vous enceinte ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }, {
            text: 'Homme',
            icon: 'fa-male'

        }]
    }
},
 {
    question: 'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}, 
{
    question: 'Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa-check'
        }, {
            text: 'Non',
            icon: 'fa-times'
        }]
    }
}

]
