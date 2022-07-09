const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "boudewijngijsberts2003@gmail.com",
        Password: "@Boudewijn2003@",
        To: "boudewijngijsberts2003@gmail.com",
        From: "test@gmail.com",
        Subject: "Contactformulier VisionSupport",
        Body: "hoi"
      }).then(message => alert(message))
})