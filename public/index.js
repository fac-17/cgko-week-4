let input = document.getElementById("myInput");
input.addEventListener("input", call);

function call() {
  let empty = document.getElementById("myDatalist");
  empty.innerHTML = "";
  let queryString = encodeURIComponent(input.value);

  let url = `https://postcodes.io/postcodes/${queryString}/autocomplete`;
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      let datalist = document.getElementById("myDatalist");
      response.result.forEach(e => {
        console.log(e);
        let child = document.createElement("option");
        child.value = e;
        datalist.appendChild(child);
      });
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
