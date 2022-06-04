// primeira ação, fazer funcionar os botões ligar e desligar

const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );

function isLampBroken (){
    return lamp.src.indexOf( 'quebrada' ) > -1
}
// função para verificar se a lâmpada está quebrada ou não, ela vai estar quebrada se
// quando tiver o endereço do 'quebrada' no src,(passado como parâmetro do indexOf(), que quando encontra traz um número maior que 1, 
// e senão encontra traz -1)

function lampOn(){
    if( !isLampBroken()){ // se não estiver quebrada,
    lamp.src = './img/ligada.jpg' //ela liga
    }
}
// o objetivo da função é pegar e trocar a imagem, para a imagem da lâmpada ligada
function lampOff(){
    if( !isLampBroken()){ // se não estiver quebrada
    lamp.src = './img/desligada.jpg' // ela desliga
    }
}
// o objetivo da função é pegar e trocar a imagem, para a imagem da lâmpada desligada
function lampBroken (){
    lamp.src = './img/quebrada.jpg'
}
// o objetivo da função é quando der duplo click na lâmpada ela irá quebrar


turnOn.addEventListener( 'click', lampOn );
// quando alguém clicar no ligar, ela vai "escutar o click" e executar o método para ligar a lâmpada, (function lampOn())
turnOff.addEventListener( 'click' , lampOff );
// quando alguém clicar no desligar, ela vai "escutar o click" e executar o método para desligar a lâmpada, (function lampOn())
lamp.addEventListener( 'mouseover', lampOn );
// pedindo para escutar um evento, pelo 'mouseover', quando passar por cima da lâmpada ela liga.
lamp.addEventListener( 'mouseleave', lampOff );
// pedindo para escutar um evento, pelo 'mouseleave', quando sair  da lâmpada ela desliga.
lamp.addEventListener( 'dblclick', lampBroken )
// pedindo para escutar um evento pelo dblclick, quando clicas duas vezes sob a lâmpada ela irá quebrar


