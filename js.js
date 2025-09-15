




function clickOne(){
    let image1 = document.getElementById('img1')
    let image2 = document.getElementById('img2')
    let btnOne = document.getElementById('txtOne')
    
    
    
    if(btnOne.style.display == '' ){
        btnOne.style.display = 'block'
        image1.style.display = 'none'
    } else if ( btnOne.style.display = ''){
        image2.style.display = 'block'
    }

    
    
   
    
    
} function clickTwo(){
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
