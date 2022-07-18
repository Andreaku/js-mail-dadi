const userEmailInput = document.getElementById("user-email");
const accessButton = document.getElementById("access-button");
const authorizedEmails = ["andrea@bool.it", "lerri@bool.it", "1995@bool.it"];

accessButton.addEventListener("click", function() {
  
  const userEmail = userEmailInput.value;
  let accessAllowed = "Ci dispiace, non sei autorizzato ad accedere!";
  for (let i = 0; i < authorizedEmails.length; i++) {
    if (authorizedEmails[i] == userEmail) {
      accessAllowed = "Benvenuto, ti stiamo reindirizzando alla tua casella di posta, attendere prego...";
    }
}

alert(accessAllowed);
})


