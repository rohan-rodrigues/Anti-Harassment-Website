/*var callBtn = document.getElementById("call");
var messageBtn = document.getElementById("message");
messageBtn.checked = isMessageBtn;
callBtn.checked = isCallBtn;
var isMessageBtn = false;

var usernameMain = "User";

var addContacts = document.getElementById("addContacts");
var contactsDiv = document.getElementById("contacts"); */
 

var safeButton = document.getElementById("button1");
var unsafeButton = document.getElementById("button2");
var safe = true;
var fingerprint = document.getElementById("fingerprint");
fingerprint.onkeyup = startFunction();
var waitTime = 60000; 



/*function submitForm() {
    if (callBtn.checked || messageBtn.checked) {
        if (messageBtn.checked) {
            isMessageBtn = true;
        }
        else {
            isMessageBtn = false;
        }
    }
    else {
        alert("You have not selected all the required settings!");
    }
    usernameMain = document.getElementById("username");
}

function addContact() {
    addContacts = document.getElementById("addContacts");
    if (addContact == null) {
        alert("No contacts have been added");
    }
    else {
        var textNode = document.createTextNode();
        textNode.value = addContacts.value;
        contactsDiv.appendChild(textNode);
    }
} */
                        
function safeFunction(num) {                            
    if (num == 1){
        safeButton.style.backgroundColor = "#66CD00";
        unsafeButton.style.backgroundColor = "#000000";
        safe = true;
    }
    else {
        safeButton.style.backgroundColor = "#000000";
        unsafeButton.style.backgroundColor = "#FF0000";
        safe = false;
    }
 }
                        
function startFunction() {
    if (contacts == null) {
        alert("No emergency contacts have been added as yet. Go to settings to add contacts.");
    }
    else {
        setTimeout(checkIfSafe, waitTime);
    }                     
}
                        
function checkIfSafe() {
    if (!safe) {
        if (isMessageBtn) {
      //      for (var i = 0; i < contacts.length; i++) {
                Twilio.sendMessage(/*contacts[i]*/555-555-555, /*usernameMain*/ + " is not feeling safe and needs help");
      //      } 
        }
        else {
    //        for (var i = 0; i < contacts.length; i++) {
                Twilio.callAndSay(/*contacts[i]*/555-555-555,  /*usernameMain*/ + " is not feeling safe and needs help");
   //         }
        }
    }
}