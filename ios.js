function calculate(){

    let givenrate = parseFloat(document.getElementById("Rate").Value);

    let giventotal = parseFloat(document.getElementById("total").Value);

    document.getElementById("Tipcollected").innerHTML = "$"+givenrate+giventotal;

    document.getElementById("Taxcollected").innerHTML = "$"+giventotal*0.055;

    document.getElementById("TotalAmount").innerHTML = "$"+(giventotal+(giventotal*givenrate)+(giventotal*0.055));

    return false;

}