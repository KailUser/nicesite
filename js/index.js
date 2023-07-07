// JavaScript
function redirect(url) {
    window.open(url, "Popup", "width=400,height=500");
  }

  // Get the button element
  var myButton = document.getElementById("AddBot");

  // Add an event listener for the button click
  myButton.addEventListener("click", function() {
    redirect(" https://discord.com/oauth2/authorize?client_id=1102236579495411834&permissions=380641864792&scope=bot+applications.commands");
  });
