async function sha256() {
    var message = document.getElementById("prehash").value
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    
    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    var text = document.getElementById("afterhash").innerHTML = "<a id='afterhash'>" + hashHex + "</a>"
    return hashHex;
}

function randstr(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]().,:;-_+*çÇñÑ@"中例如';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

async function saltySha256() {
    var message = document.getElementById("prehash").value
    var randstring = randstr(document.getElementById("saltlen").value)
    var message2 = message + randstring
    alert(randstring)
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message2);                    
    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    var text = document.getElementById("afterhash").innerHTML = "<a id='afterhash'>" + hashHex + "</a>"
    return hashHex;
}