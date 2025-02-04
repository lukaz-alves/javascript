function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'images/fotomanha.png'
        document.body.style.background = '#EEDD82'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'images/fototarde.png'
        document.body.style.background = '#BDB76B'
    } else {
        // BOA NOITE
        img.src = 'images/fotonoite.png'
        document.body.style.background = '#192947'
    }
}