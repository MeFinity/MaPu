function loader() {
  var input = document.getElementById("input").value;
  var save = atob(input);
  document.getElementById("display").value = save;

  var data = JSON.parse(save);
  if (data.money !== undefined) {
    var antimatter = document.getElementById("d-money");
    antimatter.value = new Decimal(data.money).toString();
  }
  if (data.totalmoney !== undefined) {
    var totalantimatter = document.getElementById("d-totalmoney");
    totalantimatter.value = new Decimal(data.totalmoney).toString();
  }
  if (data.tickspeed !== undefined) {
    var tickspeed = document.getElementById("d-tickspeed");
    tickspeed.value = new Decimal(data.tickspeed).toString();
  }
  if (data.tickSpeedCost !== undefined) {
    var tickspeedcost = document.getElementById("d-tickspeedcost");
    tickspeedcost.value = new Decimal(data.tickSpeedCost).toString();
  }
  if (data.tickspeedMultiplier !== undefined) {
    var tickspeedMultiplier = document.getElementById("d-tickspeedmultiplier");
    tickspeedMultiplier.value = new Decimal(data.tickspeedMultiplier).toString();
  }
  if (data.tickSpeedMultDecrease !== undefined) {
    var tickSpeedMultDecrease = document.getElementById("d-tickspeedmultdecrease");
    tickSpeedMultDecrease.value = new Decimal(data.tickSpeedMultDecrease).toString();
  }
  if (data.tickSpeedMultDecreaseCost !== undefined) {
    var tickSpeedMultDecreaseCost = document.getElementById("d-tickspeedmultdecreasecost");
    tickSpeedMultDecreaseCost.value = new Decimal(data.tickSpeedMultDecreaseCost).toString();
  }
}

function saver() {
  var updatedData = JSON.parse(document.getElementById("display").value);
  if (updatedData.money !== undefined) {
    updatedData.money = new Decimal(document.getElementById("d-money").value).toString();
  }
  if (updatedData.totalmoney !== undefined) {
    updatedData.totalmoney = new Decimal(document.getElementById("d-totalmoney").value).toString();
  }
  if (updatedData.tickspeed !== undefined) {
    updatedData.tickspeed = new Decimal(document.getElementById("d-tickspeed").value).toString();
  }
  if (updatedData.tickSpeedCost !== undefined) {
    updatedData.tickSpeedCost = new Decimal(document.getElementById("d-tickspeedcost").value).toString();
  }
  if (updatedData.tickspeedMultiplier !== undefined) {
    updatedData.tickspeedMultiplier = new Decimal(document.getElementById("d-tickspeedmultiplier").value).toString();
  }
  if (updatedData.tickSpeedMultDecrease !== undefined) {
    updatedData.tickSpeedMultDecrease = new Decimal(document.getElementById("d-tickspeedmultdecrease").value).toString();
  }
  if (updatedData.tickSpeedMultDecreaseCost !== undefined) {
    updatedData.tickSpeedMultDecreaseCost = new Decimal(document.getElementById("d-tickspeedmultdecreasecost").value).toString();
  }

  var encoded = btoa(JSON.stringify(updatedData));
  document.getElementById("input").value = encoded;

  document.getElementById("display").value = JSON.stringify(updatedData);
}
