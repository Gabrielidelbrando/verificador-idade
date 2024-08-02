/*minha função sempre precisa acompanhar o nome da 
ação que eu quero executar*/

//new date pega a data atual
//fullyear pega o ano atual
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
// a variavel está ligando meu html ao js, para que eu possa manipular

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('tente novamente')
    
    }else{

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //o number é pra me especificar que se trata de um numero
        var genero = ''

        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade< 10){
                img.setAttribute('src','bebe-homem.jpg' )
            } else if(idade<21){
                img.setAttribute('src', 'adulto-homem.jpg')
            }else if(idade<50){
                img.setAttribute('src', 'idoso-homem.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        //appenchild adiciona o texto abaixo, no nosso caso a imagem abaixo do genero e idade.

    }
}
