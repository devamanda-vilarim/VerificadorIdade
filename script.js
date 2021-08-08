function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var faixaEtaria = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                faixaEtaria = 'uma Criança'
                img.setAttribute('src', 'babyboy.jpeg' )
            } else if (idade < 21) {
                // Jovem
                faixaEtaria = 'um Jovem'
                img.setAttribute('src', 'homemjovem.jpg' )
            } else if (idade < 50) {
                // Adulto
                faixaEtaria = 'Adulto'
                img.setAttribute('src', 'homemadulto.jpg' )
            } else {
                // Idoso
                faixaEtaria = 'Idoso'
                img.setAttribute('src', 'idoso.jpg' )
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                faixaEtaria = 'uma Criança'
                img.setAttribute('src', 'babygirl.jpg' )
            } else if (idade < 21) {
                // Jovem
                faixaEtaria = 'uma Jovem'
                img.setAttribute('src', 'mulherjovem.jpg' )
            } else if (idade < 50) {
                // Adulto
                faixaEtaria = 'Adulta'
                img.setAttribute('src', 'mulheradulta.jpg' )
            } else {
                // Idoso
                faixaEtaria = 'Idosa'
                img.setAttribute('src', 'idosa.jpg' )
            }
        }
        res.style.textAlign = 'center'
        
        if (idade < 10 ) {
            res.innerHTML = `Detectamos ${faixaEtaria}  com ${idade} anos.`
        } else if (idade < 21) {
            res.innerHTML = `Detectamos ${faixaEtaria}  com ${idade} anos.`
        }
            if (idade > 21 && idade < 50 && genero == 'Homem'){
                res.innerHTML = `Detectamos um ${genero} ${faixaEtaria} com ${idade} anos.`
            } else if (idade > 21 && idade < 50 && genero == 'Mulher') {
                res.innerHTML = `Detectamos uma ${genero} ${faixaEtaria} com ${idade} anos.`
            } else if (idade > 50 && genero == 'Homem'){
                res.innerHTML = `Detectamos um ${genero} ${faixaEtaria} com ${idade} anos.`
            } else if (idade > 50 && genero == 'Mulher'){
                res.innerHTML = `Detectamos uma ${genero} ${faixaEtaria} com ${idade} anos.`
            }
            
        res.appendChild(img)
    }
}
