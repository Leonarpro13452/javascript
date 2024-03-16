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
        if (sex[0].checked) {
            gênero = 'Homem'
        } else {
            gênero = 'Mulher'
        }
        res.style.textalign = 'center'
        res.innerHTML = ` Você é ${gênero}`
    }
}