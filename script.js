//Reuseable function//
function gerElement(id) {
    return document.getElementById(id);
      
}




// hart icon func//

const heartBtns = document.getElementsByClassName("heart");

    let number = 0;
    
    for (let i = 0; i < heartBtns.length; i++) {

      heartBtns[i].addEventListener("click", function() {
        number++;
        let navHeart = gerElement('heart-number').innerText;
        
        document.getElementById('heart-number').innerText = number;
      });
      
    };


    //card function//
    gerElement('allcard').addEventListener('click', function(e) {
        if(e.target.className.includes('call-btn')) {
          const callBtn =e.target;
          let title =callBtn.parentNode.parentNode.children[1].children[1].innerText;
          let serviceNum = callBtn.parentNode.parentNode.children[2].children[0].innerText;
        
        let text =  alert('Calling'+' '+ title +' '+ serviceNum + '...');
         
        };
        
    })








