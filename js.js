
function clickOne(){

let img1 = document.getElementById('img1')
let btnOne = document.getElementById('txtOne')


if(btnOne.style.display == ''){
    btnOne.style.display = 'block'
    img1.src = 'faq-accordion-main/assets/images/icon-minus.svg'
} else{
    btnOne.style.display = ''
    img1.src = 'faq-accordion-main/assets/images/icon-plus.svg'
}
}


function clickTwo(){
    let btnTwo = document.getElementById('txtTwo')
    let img2 = document.getElementById('img2')
    

    if(btnTwo.style.display == ''){
        btnTwo.style.display = 'block';
        img2.src = 'faq-accordion-main/assets/images/icon-minus.svg'
        
    } else{
        btnTwo.style.display = ''
        img2.src = 'faq-accordion-main/assets/images/icon-plus.svg'
    }
}   

function clickThree(){
     let btnThree = document.getElementById('txtThree')
     let img3 = document.getElementById('img3')
    if(btnThree.style.display == ''){
        btnThree.style.display = 'block'
        img3.src = 'faq-accordion-main/assets/images/icon-minus.svg'
    } else{
        btnThree.style.display = ''
        img3.src = 'faq-accordion-main/assets/images/icon-plus.svg'
    }
}   function clickFour(){
     let btnFour = document.getElementById('txtFour')
     let img4 = document.getElementById('img4')

    if(btnFour.style.display == ''){
        btnFour.style.display = 'block'
        img4.src = 'faq-accordion-main/assets/images/icon-minus.svg'
    } else{
        btnFour.style.display = ''
        img4.src = 'faq-accordion-main/assets/images/icon-plus.svg'
    }
}
