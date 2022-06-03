let bestprice = document.getElementById("bestprice").innerHTML = 1299;
function extraMamoryCost() {
  document.getElementById("extraMamoryCostmory").innerHTML = 0;
  total();
}
function extraMamoryCost1() {
  document.getElementById("extraMamoryCostmory").innerHTML = 180;
  total();
}
function extraStorageCost() {
  document.getElementById("extraStorageCost").innerHTML = 0;
  total();
}
function extraStorageCost1() {
  document.getElementById("extraStorageCost").innerHTML = 100;
  total();
}
function extraStorageCost2() {
  document.getElementById("extraStorageCost").innerHTML = 180;
  total();
}
function deliveryCharge() {
  document.getElementById("deliveryCharge").innerHTML = 0;
  total();
}
function deliveryCharge1() {
  document.getElementById("deliveryCharge").innerHTML = 20;
  total();
}

function AddPomocode() {
  var coupon = document.getElementById("discount").value;
  const totalNumber = Number(document.getElementById("totlevalue1").innerHTML)
  if (coupon == "stevekaku") {
    var coupon = document.getElementById("discount").value = "";
    console.log("= count", Number(totalNumber - (totalNumber * 0.2)))
    document.getElementById("totlevalue1").innerText = Number(totalNumber - (totalNumber * 0.2));
  }
  else {
    document.getElementById("totlevalue1").innerHTML = Number(totalNumber);
  }
}


function total() {
  const bestprice = Number(document.getElementById("bestprice").innerHTML);
  const extraMamoryCost = Number(document.getElementById("extraMamoryCostmory").innerHTML);
  const extraStorageCost = Number(document.getElementById("extraStorageCost").innerHTML);
  const deliveryCharge = Number(document.getElementById("deliveryCharge").innerHTML);
  const AddPomocode = Number(document.getElementById("totlevalue1").innerHTML);
  const totalnumber = (bestprice + extraStorageCost + extraMamoryCost + deliveryCharge);
  document.getElementById("totlevalue").innerHTML = Number(totalnumber);
  document.getElementById("totlevalue1").innerHTML = Number(totalnumber);
}

