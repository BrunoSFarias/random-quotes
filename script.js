$(document).ready(function(){
var quotes=[
  {
    quote: "Bandido bom é bandido morto e enterrado em pé para ocupar pouco espaço no cemitério.",
    author: "Alborghetti"
  },
  {quote: "Cada homem tem uma propriedade particular em sua própria pessoa; a esta ninguém tem qualquer direito senão ele mesmo. O trabalho de seus braços e a obra das suas mãos, pode-se afirmar, são propriamente dele.",
   author: "John Locke"},
  {quote: " O estado atual de degradação moral, de desintegração social e de podridão cultural é precisamente o resultado de uma tolerância demasiada e, acima de tudo, errônea e equivocada. Ao invés de todos os habituais democratas, comunistas e adeptos de estilos de vida alternativos serem rapidamente isolados, excluídos e expulsos da civilização (de acordo com os princípios dos contratos), eles são tolerados pela sociedade. ",
   author: "Hans-Hermann Hoppe"},
  {quote: "A economia é uma virtude distributiva e consiste não em poupar mas em escolher.",
   author: "Edmund Burke"},
  {quote: "Nunca esqueçamos esta verdade fundamental: o Estado não tem fonte de dinheiro senão o dinheiro que as pessoas ganham por si mesmas e para si mesmas. Se o Estado quer gastar mais dinheiro, somente poderá fazê-lo emprestando de sua poupança ou aumentando seus impostos. Não é correto pensar que alguém pagará. Esse “alguém” é “você”. Não há “dinheiro público”, há apenas “dinheiro dos contribuintes”.", 
   author: "Margaret Thatcher"},
  {quote: "Aquele que luta com monstros deve acautelar-se para não tornar-se também um monstro. Quando se olha muito tempo para um abismo, o abismo olha para você.",
   author: "Friedrich Nietzsche"},
  {quote: "Sábio é aquele que conhece os limites da própria ignorância.",
   author: "Sócrates"},
  {quote: "As pessoas comuns pensam apenas como passar o tempo. Uma pessoa inteligente tenta usar o tempo.",
   author: "Arthur Schopenhauer"},
  {quote: "A ânsia de salvar a humanidade é quase sempre uma desculpa para a ânsia de governá-la.",
   author: "H.L. Mencken"},
  {quote: "Se uma lei é injusta, um homem não apenas está certo em desobedecê-la, como ele tem a obrigação de fazê-lo.",
   author: "Thomas Jefferson"},
  {quote: "Os homens da ciência suspeitam de algo sobre este mundo, mas ignoram quase tudo. Os sábios interpretam os sonhos e os deuses riem-se.",
   author: "Lovercraft"},
  {quote: "Se a liberdade significa alguma coisa, será sobretudo o direito de dizer às outras pessoas o que elas não querem ouvir.",
   author: "George Orwell"},
  {quote: "O tempo é o criador, o conservador, o destruidor de tudo o que existe. Assim, ele traz todos os indivíduos à existência pelo nascimento, mantém-nos na existência pela duração, completa sua existência chamando-os ao seio imenso do passado pela morte. É o ato vivo da Trindade. E suas diferentes operações constituem uma só: pois ele só cria destruindo, e toda destruição é nele uma realização plena. Ele é o lugar de todas as gêneses e de todas as aniquilações. A cada instante ele nos retira o ser e nos dá o ser: suspende-nos entre o ser e o nada.",
   author: "Luís Lavelle"},
  {quote: "Portanto, quando se diz que o Mundo Moderno sofre uma crise, o que se entende mais habitualmente é que ele chegou a um ponto crítico, ou, noutros termos, que uma transformação mais ou menos profunda está iminente, que uma mudança de orientação deverá inevitavelmente produzir-se em breve, para o bem ou para o mal, de modo mais ou menos brusco, com ou sem catástrofe. Esta acepção é perfeitamente legítima e corresponde bem a uma parte do que eu próprio penso, mas apenas a uma parte, porque, para mim, colocando-me num ponto de vista mais geral, é toda a época moderna, no seu conjunto, que representa para o Mundo um período de crise.", author: "Mario Vargas Llosa"},
  {quote: "Os pobres hippies nutrem muitas ilusões quando imaginam representar a  vanguarda da humanidade futura, quando em realidade são apenas os produtos degenerados de um mundo corrompido e próximo da ruína",
   author: "Martin Lings"}];
  
  
  $('#qButton').click(function(event){
  
	var quote = $('#quoteContent p').text();
			var author = $('#quoteAuthor').text();
 
   event.preventDefault(); 
    // começa aqui
   var randomNumber= Math.floor(Math.random()*quotes.length);
    for(i=0; i< quotes.length; i+=1){
var newQuoteTexto = quotes[randomNumber].quote;
var newQuoteAuthor = quotes[randomNumber].author;
      // tempo de animação
var timeAnimation = 570;
      var quoteContent = $('#quoteContent');
      
     // função da animação
      
        quoteContent.fadeOut(timeAnimation, function(){
        quoteContent.html('');
				quoteContent.append('<p>'+newQuoteTexto+'</p>'+'<p id="quoteAuthor">'+'-								'+newQuoteAuthor+'</p>');
        
        //fadein animation.
        quoteContent.fadeIn(timeAnimation);
          
          //mudança de cor
       /*   var color = '#';
          var option = ['FFFFFF','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
          color += option[Math.floor(Math.random() * option.length)];
          
          document.getElementById('cores').style.background = color;
          var container = $("#cores");
          container.fadeOut(timeAnimation);
          container.fadeIn(timeAnimation);
          */
     
      }); 
      
    };
    
  });
  
  $('#qButton').click(function(evt){


})

});
