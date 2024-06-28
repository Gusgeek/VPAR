button=document.getElementById("statusButton")

button.addEventListener("click", function(event) {
    var status = document.getElementById("statusId").value;
    if (status && status.length > 0) {
      alert(`Hello ${status} World!`);
    }
    else {
      alert('Hello  World!');
    }
  });