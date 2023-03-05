function loader() {
  var input = document.getElementById("input").value;
  var save = atob(input);
  document.getElementById("display").value = save;

  var data = JSON.parse(save);
  if (data.money !== undefined) {
    var antimatter = document.getElementById("d-money");
    antimatter.value = data.money;
  }
  if (data.totalmoney !== undefined) {
    var totalantimatter = document.getElementById("d-totalmoney");
    totalantimatter.value = data.totalmoney;
  }
  if (data.tickspeed !== undefined) {
    var tickspeed = document.getElementById("d-tickspeed");
    tickspeed.value = data.tickspeed;
  }
  if (data.tickSpeedCost !== undefined) {
    var tickspeedcost = document.getElementById("d-tickspeedcost");
    tickspeedcost.value = data.tickSpeedCost;
  }
}

function saver() {
  var updatedData = JSON.parse(document.getElementById("display").value);
  if (updatedData.money !== undefined) {
    updatedData.money = document.getElementById("d-money").value;
  }
  if (updatedData.totalmoney !== undefined) {
    updatedData.totalmoney = document.getElementById("d-totalmoney").value;
  }
  if (updatedData.tickspeed !== undefined) {
    updatedData.tickspeed = document.getElementById("d-tickspeed").value;
  }
  if (updatedData.tickSpeedCost !== undefined) {
    updatedData.tickSpeedCost = document.getElementById("d-tickspeedcost").value;
  }

  var encoded = btoa(JSON.stringify(updatedData));
  document.getElementById("input").value = encoded;

  document.getElementById("display").value = JSON.stringify(updatedData);
}
