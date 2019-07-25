let input = document.getElementById("myInput");
// let datalist = document.getElementById('myDatalist');
input.addEventListener("input", call);

function call() {
  let empty = document.getElementById("myDatalist");
  empty.innerHTML = "";
  let queryString = input.value;

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      //console.log("index.js queryString ", queryString);
      //console.log('front end response', response);
      //console.log(typeof response.result);

      let datalist = document.getElementById("myDatalist");
      response.result.forEach(e => {
        console.log(e);
        let child = document.createElement("option");
        child.value = e;
        datalist.appendChild(child);
      });
    }
  };
  xhr.open("GET", queryString, true);
  xhr.send();
}
