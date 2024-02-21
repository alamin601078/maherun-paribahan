// const seats = document.getElementById('A1')


// console.log(seats)

// const seatse = document.querySelectorAll('.seat')
// // console.log(seatse)
// for (let setlist = 0; setlist < seatse.length; setlist++) {
//     const setid = seatse[setlist];
//     // console.log(setid)
//   setid.addEventListener("click" , function(){
//     // console.log("sethfdh")

//     const se = setid.querySelector(".name")
//     // console.log(se.innerText)
//   })
// }

/* count palas */
// const countPlas = document.querySelectorAll('.seat')
// // console.log(countPlas)
// let countMainas = 0;
// for (const count of countPlas){
//   count.addEventListener("click" , function(){
//     countMainas = parseInt('countMainas') + 1;
//     innertextPlas("seatCount",countMainas)
    
//     })
// }

// let countPlase = 0;
// for (const count of countPlas){
//   count.addEventListener("click" , function(){
//     countPlase = countPlase + 1;
//     innerText("count",countPlase)
    
//     })
// }

/* countMainas */
// const countMaina = document.querySelectorAll("seatCounts")
// console.log(countMainas)

const allseat =document.getElementsByClassName("seat");

for (const seat of allseat){
    seat.addEventListener("click" , function(event){
      const seaName =event.target.innerText
      // console.log(event.target.innerText)

      const seatselectContainer = document.getElementById("seatSelectcontainer")



      event.target.setAttribute("disabled", false);

      event.target.setAttribute("remove", false);

      const seatCondition = getconvatetValu("count");
      if (seatCondition + 1 > 4){
        alert("ek shathe forth er beshi hobe na")
        return;
      }
      event.target.style = "bg-green-500";



      // update seat
      const seatHave = getconvatetValu("seatCount")
      document.getElementById("seatCount").innerText = seatHave - 1;

      const seatSeletCount = getconvatetValu("count")
      document.getElementById("count").innerText = seatSeletCount + 1;





      const tr =document.createElement("tr")

      const th = document.createElement("th")
      const th1 = document.createElement("th")
      const th2 = document.createElement("th")
      
      th.innerText = seaName;
      th1.innerText = "Economoy";
      th2.innerText = 550 ;

      tr.appendChild(th);
      tr.appendChild(th1);
      tr.appendChild(th2);

      seatselectContainer.appendChild(tr);

      
      updateTotalValu(550);
      updateGrandTotalValu();

      });
  }



    function updateGrandTotalValu (statas) {
      const totalCost = getconvatetValu("total-Price")
      document.getElementById("grand-valu").innerText= totalCost;
      if (statas == undefined){
        
      }else{
        const cuponCode = document.getElementById("cupon-code").valu;
        console.log(cuponCode)
        if (cuponCode == 'NEW20'){
          const discount = totalCost * .2;
          document.getElementById("grand-valu").innerText= totalCost - discount;
        } 
        else if (cuponCode == 'copol30') {
          const discount = totalCost * .3;
          document.getElementById("grand-valu").innerText= totalCost - discount;
          
        } else {
          
        }
        console.log('div ase')
      }
      
   
     
    }

  function updateTotalValu (value){
    console.log(value)
    const totalCost = getconvatetValu("total-Price")
    const sum = totalCost + parseInt(value);
    document.getElementById("total-Price").innerText = sum
  }





function getconvatetValu (id){
  const price = document.getElementById(id).innerText;
  const convartPrice = parseInt(price);
  return convartPrice;
}

function innerText(id, valu){
  document.getElementById(id).innerText = valu;
}

function innertextPlas(id , valu){
  document.getElementById(id).innerText = id -valu;
}

// console.log(document.getElementById(seatCount));