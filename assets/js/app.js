//Gets countdown time
function Init() {
  console.log("Initiating...");
  SetCountdownTime();
}

function SetCountdownTime() {
  jQuery.get("/time.txt", function (data) {
    console.log("UNIX time for event: " + data);
    var flipdown = new FlipDown(parseInt(data));
    flipdown.start();
  });
}

Init();
