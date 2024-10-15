console.log("hello world 2222222");

function submitForm(event) {
  event.preventDefault();
  // console.log("inside the function here");
  let firstname = document.getElementById("firstName").value;
  document.getElementById("firstName").value = "";
  let lastname = document.getElementById("lastName").value;
  document.getElementById("lastName").value = "";
  let emailn = document.getElementById("email").value;
  document.getElementById("email").value = "";

  let itemArr = [];
  let items = document.getElementsByName("items");
  for (var i of items) {
    if (i.checked) {
      itemArr.push(i.value);
    }
    // console.log("it is checkbox "+i.value + " " + i.checked);
  }

  let gender;
  let genderRadio = document.getElementsByName("gender");
  for (var i of genderRadio) {
    if (i.checked) {
      gender = i.value;
    }
  }

  

  console.log(
    firstname +
      " " +
      lastname +
      " " +
      emailn +
      " " +
      gender +
      " " +
      itemArr +
      " "
  );
}
