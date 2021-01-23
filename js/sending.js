function messagesend() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/802632826117554192/8hilqRcgMtZHwcGQhdm71XJwmg0Wezz4Nufa2GSx7XJ_dJNHtd3hqFQs2IfurLxPqQx5");

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
