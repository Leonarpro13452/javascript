function verificar() {
    var ano = new Date()
    var ano_atual = ano.getFullYear() 
    var ano_nascimento = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if (ano_nascimento.value.length == 0 || Number(ano_nascimento.value) > ano_atual) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano_atual - Number(ano_nascimento.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sex[0].checked) {
            gênero = 'Homem'
            if (idade < 13) {
                img.setAttribute('src','fotos/bebe-m.png')
            } else if (idade < 29) {
                img.setAttribute('src','fotos/jovem-m.png')
            } else if (idade < 65) {
                img.setAttribute('src','fotos/adulto-m.png')
            } else {
                img.setAttribute('src','fotos/idoso.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade < 13) {
                img.setAttribute('src','fotos/bebe-f.png')
            } else if (idade < 29) {
                img.setAttribute('src','fotos/jovem-f.png')
            } else if (idade < 65) {
                img.setAttribute('src','fotos/adulto-f.png')
            } else {
                img.setAttribute('src','fotos/idosa.png')
            }
        }
        res.style.textalign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos <br>`
        res.appendChild(img)
    }
}