function conditions() {
  var fname, email, agenum, contNum, address;
  fname = String(document.getElementById("fname").value);
  email = String(document.getElementById("mail").value);
  agenum = String(document.getElementById("age").value);
  contNum = String(document.getElementById("num").value);
  address = String(document.getElementById("address").value);
  //for fields being empty
  if (
    fname.length == 0 ||
    email.length == 0 ||
    agenum.length == 0 ||
    contNum.length == 0 ||
    address.length == 0
  ) {
    alert("No field of form should be kept empty.");
  }
  //for age restriction
  if (!(parseInt(agenum, 10) > 0 && parseInt(agenum, 10) < 60)) {
    alert("Please enter valid age(Between 0 to 60).");
  }
  //for mobile number restriction
  var allDigits = /[0-9]/g;
  var rangeResult = allDigits.test(Number(contNum));
  if (!(contNum.length == 10 && rangeResult == true)) {
    alert("Contact number should contain exactly 10 digits.");
  }
}
