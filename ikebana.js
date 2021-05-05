function myFunction(f1){
  var flower1 = document.getElementById("f1");
  var fl1 = document.getElementById("right-flower1");
  var flower2 = document.getElementById("f2");
  var fl2 = document.getElementById("right-flower2");
  var flower3 = document.getElementById("f3");
  var fl3 = document.getElementById("right-flower3");

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
}

var flower4 = document.getElementById('fl4');
var fl4 = document.getElementById('right-flower4');

flower4.addEventListener('click', function(){
  fl4.style.display = "block";
  flower4.style.backgroundColor = "pink";
})

document.getElementById('button').addEventListener('click', function() {
        html2canvas(document.querySelector('.container-right'), {
            onrendered: function(canvas) {
                // document.body.appendChild(canvas);
              return Canvas2Image.saveAsPNG(canvas);
            }
        });
    });
