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


    //callBtn function//
    gerElement('allcard').addEventListener('click', function(e) {
        if(e.target.className.includes('call-btn')) {
          const callBtn =e.target;
          let title =callBtn.parentNode.parentNode.children[1].children[1].innerText;
          let serviceNum = callBtn.parentNode.parentNode.children[2].children[0].innerText;
          let hisfirstElement = callBtn.parentNode.parentNode.children[1].children[0].innerText;

          let date =new Date().toLocaleTimeString();

          let makeHistory = gerElement('add-hisbtn');
          let makeNewhis = document.createElement('div');
          makeNewhis.innerHTML = `
          
          <div class="rounded-md shadow-sm p-4 my-4 flex justify-between items-center">
          <div><h1 class="text-sm font-bold">${hisfirstElement}</h1>
          <h1 class="text-sm">${serviceNum}</h1></div>
          <div>${date}</div>
          </div>
          
          `
          makeHistory.appendChild(makeNewhis);
          
          
             let coin =gerElement('coin-number').innerText;
          let numOfcoin =parseInt(coin);
         let finalCoin = numOfcoin -20;
         gerElement('coin-number').innerText = finalCoin;
         if ( finalCoin > 20) {
            alert('Calling'+' '+ title +' '+ serviceNum + '...');




         }
        

        else if (finalCoin < 20) {
          alert("You don't have sufficient coin. you need at least 20 coins to make a call");
           gerElement('coin-number').innerText = 0;
          makeNewhis.innerHTML =' ';
         }
         
      
          }


          gerElement('history-btn').addEventListener('click', function(){
            gerElement('add-hisbtn').innerHTML = ' ';
          })
           
    });




  //copyBtn function//
  gerElement('allcard').addEventListener('click', function(e) {
        if(e.target.className.includes('copy-btn')) {
          const copyBtn =e.target;
         
          let text =copyBtn.parentNode.parentNode.children[2].children[0].innerText;
        

        navigator.clipboard.writeText(text).then(() => {
          alert("Copied: " + text);
        });
        
        let beforeCopy =gerElement('copy-num').innerText;
        let copyCount = parseInt(beforeCopy);
        let finalCount = copyCount + 1;
        gerElement('copy-num').innerText = finalCount;


        }
      });






    

