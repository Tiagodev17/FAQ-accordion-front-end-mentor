function clickOne(){

let img1 = document.getElementById('img1')
let btnOne = document.getElementById('txtOne')


if(btnOne.style.display = 'none'){
    btnOne.style.display = 'block'
    img1.src = 'faq-accordion-main/assets/images/icon-minus.svg'
} else if(btnOne.style.display = 'block'){
    btnOne.style.display = 'none'
    img1.src = 'faq-accordion-main/assets/images/icon-plus.svg'
}


}






function clickTwo(){
    let btnTwo = document.getElementById('txtTwo')
    

    if(btnTwo.style.display == ''){
        btnTwo.style.display = 'block';
        
    } else{
        btnTwo.style.display = 'none'
    }
}   function clickThree(){
     let btnThree = document.getElementById('txtThree')

    if(btnThree.style.display == 'none'){
        btnThree.style.display = 'block'
    } else{
        btnThree.style.display = 'none'
    }
}   function clickFour(){
     let btnFour = document.getElementById('txtFour')

    if(btnFour.style.display == 'none'){
        btnFour.style.display = 'block'
    } else{
        btnFour.style.display = 'none'
    }
}
