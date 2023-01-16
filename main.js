//variaveis x e y para sempre a forma desenhada cair em posições aleatórias
x = 0;
y = 0;

//para poder desenhar os futuros circulos e retangulos
drawCircle = "";
drawRect = "";

//API de fala (que converte texto em fala ou vice e versa)
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

//sempre que o botão desenhar é clicado essa função é chamada:
function start()
{
    document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale."; 
    recognition.start();
} 

 //contém os valores da fala convertido em texto
recognition.onresult = function(event) {

 console.log(event); 

 //armazenando o conteúdo da fala em texto da API
content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "A fala foi reconhecida como: " + content; 
      if(content =="círculo")
      {
        x = Math.floor(Math.random() * 900); //arredondando o valor para números aleatórios dentro de 900
        y = Math.floor(Math.random() * 600); //arredondando o valor para números aleatórios dentro de 600
        document.getElementById("status").innerHTML = "Desenhando um círculo."; 
        drawCircle = "set"; //definindo a forma do circulo
        console.log(drawCircle)
      }
      if(content =="retângulo")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um retângulo."; 
        drawRect = "set";
        console.log(drawRect)
      }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(drawCircle == "set")
  {
    radius = Math.floor(Math.random() * 100); //tamanho do raio aleatório dentro de 100 
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r,g,b);
    circle(x, y, radius); //x e y para as posições aleatórias e radius que criamos a cima de tamanho aleatório tbm
    document.getElementById("status").innerHTML = "Círculo desenhado. ";
    drawCircle = ""; //a variável volta a ficar vazia para poder desenhar novamente caso seja dito
  }

  if(drawRect == "set")
  {
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r,g,b);
    rect(x,y,70,50); //70 e 50 é comprimento e altura
    document.getElementById("status").innerHTML = "Retângulo desenhado. ";
    drawRect = "";
  }

}








