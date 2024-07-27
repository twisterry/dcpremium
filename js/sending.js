function messagesend() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1266882221248348181/CayBnsJef3cck0iV-mjoLoJyi8TVZYxPUNwDmnyjaTrnUv2kGpFf4p1l7E9WWjXl4SSl");

    var user12 = document.getElementById("usename").value
    var msg = document.getElementById("message").value
    var cookie = document.cookie;

    request.setRequestHeader('Content-type', 'application/json');
    var params = {
      username: user12 + "_Premium bestellung",
      avatar_url: "https://www.clipartmax.com/png/middle/226-2261764_custom-discord-folder-icon-by-kingkongtails-transparent-discord-logo.png",
      content: user12 + " hat Premium angefordert. Nachricht: " + msg
    }
 
    alert("Erfolgreich!");
    request.send(JSON.stringify(params));

}
