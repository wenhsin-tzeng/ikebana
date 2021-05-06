function myFunction(f1){
  var flower1 = document.getElementById("f1");
  var fl1 = document.getElementById("right-flower1");
  var flower2 = document.getElementById("f2");
  var fl2 = document.getElementById("right-flower2");
  var flower3 = document.getElementById('f3');
  var fl3 = document.getElementById('right-flower3');
  var flower4 = document.getElementById('f4');
  var fl4 = document.getElementById('right-flower4');
  var flower5 = document.getElementById('f5');
  var fl5 = document.getElementById('right-flower5');
  var flower6 = document.getElementById('f6');
  var fl6 = document.getElementById('right-flower6');
  var flower7 = document.getElementById('f7');
  var fl7 = document.getElementById('right-flower7');
  var flower8 = document.getElementById('f8');
  var fl8 = document.getElementById('right-flower8');
  var flower9 = document.getElementById('f9');
  var fl9 = document.getElementById('right-flower9');
  var flower10 = document.getElementById('f10');
  var fl10 = document.getElementById('right-flower10');
  var flower11 = document.getElementById('f11');
  var fl11 = document.getElementById('right-flower11');
  var flower12 = document.getElementById('f12');
  var fl12 = document.getElementById('right-flower12');
  var flower13 = document.getElementById('f13');
  var fl13 = document.getElementById('right-flower13');
  var flower14 = document.getElementById('f14');
  var fl14 = document.getElementById('right-flower14');
  var flower15 = document.getElementById('f15');
  var fl15 = document.getElementById('right-flower15');
  var flower16 = document.getElementById('f16');
  var fl16 = document.getElementById('right-flower16');
  var flower17 = document.getElementById('f17');
  var fl17 = document.getElementById('right-flower17');
  var flower18 = document.getElementById('f18');
  var fl18 = document.getElementById('right-flower18');
  var flower19 = document.getElementById('f19');
  var fl19 = document.getElementById('right-flower19');
  var flower20 = document.getElementById('f20');
  var fl20 = document.getElementById('right-flower20');

  if (flower1.checked == true) {
    fl1.style.display = "block";
  } else {
    fl1.style.display = "none";
  }

  if (flower2.checked == true) {
    fl2.style.display = "block";
  } else {
    fl2.style.display = "none";
  }
  if (flower3.checked == true) {
    fl3.style.display = "block";
  } else {
    fl3.style.display = "none";
  }
  if (flower4.checked == true){
    fl4.style.display = "block";
  } else {
    fl4.style.display = "none";
  }
  if (flower5.checked == true){
    fl5.style.display = "block";
  } else {
    fl5.style.display = "none";
  }
  if (flower6.checked == true){
    fl6.style.display = "block";
  } else {
    fl6.style.display = "none";
  }
  if (flower7.checked == true){
    fl7.style.display = "block";
  } else {
    fl7.style.display = "none";
  }
  if (flower8.checked == true){
    fl8.style.display = "block";
  } else {
    fl8.style.display = "none";
  }
  if (flower9.checked == true){
    fl9.style.display = "block";
  } else {
    fl9.style.display = "none";
  }
  if (flower10.checked == true){
    fl10.style.display = "block";
  } else {
    fl10.style.display = "none";
  }
  if (flower11.checked == true){
    fl11.style.display = "block";
  } else {
    fl11.style.display = "none";
  }
  if (flower12.checked == true){
    fl12.style.display = "block";
  } else {
    fl12.style.display = "none";
  }
  if (flower13.checked == true){
    fl13.style.display = "block";
  } else {
    fl13.style.display = "none";
  }
  if (flower14.checked == true){
    fl14.style.display = "block";
  } else {
    fl14.style.display = "none";
  }
  if (flower15.checked == true){
    fl15.style.display = "block";
  } else {
    fl15.style.display = "none";
  }
  if (flower16.checked == true){
    fl16.style.display = "block";
  } else {
    fl16.style.display = "none";
  }
  if (flower17.checked == true){
    fl17.style.display = "block";
  } else {
    fl17.style.display = "none";
  }
  if (flower18.checked == true){
    fl18.style.display = "block";
  } else {
    fl18.style.display = "none";
  }
  if (flower19.checked == true){
    fl19.style.display = "block";
  } else {
    fl19.style.display = "none";
  }
  if (flower20.checked == true){
    fl20.style.display = "block";
  } else {
    fl20.style.display = "none";
  }


}

function showcircle() {
  var circle = document.getElementById('circle');
  circle.style.display = "block";
}
function removecircle(){
  circle.style.display = "none";
}

function showmsg(){
  alert('Click on "To:" and "From:" to fill out the information directly!');
}

function randombg(){
  var random = Math.floor(Math.random() * 7) + 0;
  var bgpics = ["url('bg10.jpg')",
                "url('bg7.jpeg')",
                "url('bg5.jpeg')",
                "url('bg6.jpg')",
                "url('bg8.jpeg')",
                "url('bg9.jpeg')",
                "url('Ikabana.jpeg')"];
  document.getElementById('photo').style.backgroundImage = bgpics[random];
  document.getElementById('photo').style.transition = "background-image 2s ease-in-out";
}

function takeshot() {
  let div = document.getElementById('photo');
  html2canvas(div).then(function (canvas) {
    var myWindow = window.open ("", "", "width=750,height=850");
    myWindow.document.body.appendChild(canvas);
    myWindow.document.title = "Save Card To Your Computer!";
    // document.getElementById('output').appendChild(canvas);

  })
}
