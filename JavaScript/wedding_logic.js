// Set default date & time (like real site)
window.onload = function () {
  let today = new Date();

  // Date
  let yyyy = today.getFullYear();
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let dd = String(today.getDate()).padStart(2, '0');
  document.getElementById("date").value = `${yyyy}-${mm}-${dd}`;

  // Time
  let hours = String(today.getHours()).padStart(2, '0');
  let minutes = String(today.getMinutes()).padStart(2, '0');
  document.getElementById("time").value = `${hours}:${minutes}`;
};

// Swap Cities
function swapCities() {
  let from = document.getElementById("from");
  let to = document.getElementById("to");

  let temp = from.value;
  from.value = to.value;
  to.value = temp;
}

// Search Button
function searchCab() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  alert(`Searching Cabs\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nTime: ${time}`);
}