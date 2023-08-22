// JavaScript source code
document.getElementById("emailButton").addEventListener("click", function() {
    var recipientEmail = "tamas.eva73@gmail.com";
    var emailSubject = "Konzultacio!";
    var emailBody = "Üdvözlöm,\n\n";
    
    var mailtoLink = "mailto:" + recipientEmail + "?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(emailBody);
    
    window.open(mailtoLink, "_blank");
});
