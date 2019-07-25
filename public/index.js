let input = document.getElementById("myInput");
input.addEventListener("input", call);

function call() {
  let queryString = input.value;

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
          let response = JSON.parse(xhr.responseText);
          console.log("index.js queryString ", queryString);
          console.log(response);
      }
  };

  xhr.open("GET", queryString, true);
  xhr.send();
}
