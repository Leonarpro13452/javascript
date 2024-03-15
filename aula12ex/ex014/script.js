function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = "fotos/manha.png"
        document.body.style.backgroundColor = '#F2CA58'
    } else if (hora >= 12 && hora <18) {
        img.src = "fotos/tarde.png"
        document.body.style.backgroundColor = '#791B0F'
    } else {
        img.src = "fotos/noite.png"
        document.body.style.backgroundColor = '#5E4972'
    }
}