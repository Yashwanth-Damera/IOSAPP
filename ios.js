// function calculate(){

//     let givenrate = parseFloat(document.getElementById("Rate").Value);

//     let giventotal = parseFloat(document.getElementById("total").Value);
    
//     let value = givenrate + giventotal;

//     document.querySelector(".data").innerHTML = value;

//     document.getElementById("Taxcollected").innerHTML = "$"+giventotal*0.055;

//     document.getElementById("TotalAmount").innerHTML = "$"+(giventotal+(giventotal*givenrate)+(giventotal*0.055));

//     //return false;

// }


const tip1 = (total, rate) => {
    return (total * rate) / 100;
  }
  const tax1 = (total) => {
    return (total * 5.5) / 100;
  }
  const grandtot = (total, tip, tax) => {
    return total + tip + tax;
  }
  document.querySelector('#grand').addEventListener('click', () => {
    // Never trust the user. ALWAYS white list input text
    const i = parseFloat(document.querySelector('#total').value)
    const j = parseFloat(document.querySelector('#Rate').value)
    document.getElementById("tip1").innerHTML = "$" + tip1(i, j);
    document.getElementById("tax1").innerHTML = "$" + tax1(i);
    t = tip1(i, j);
    ta = tax1(i);
    document.getElementById("grandtotal").innerHTML = "$"+grandtot(i, t, ta);
  })