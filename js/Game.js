

var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function randomValue(alphabet)
{
var len=alphabet.length;
var randomAlpha=Math.random();
randomAlpha=randomAlpha*len;
var b=Math.floor(randomAlpha+1);
return b;
}
var value=0;
 var clickBtn="";
 var scoreValue=0;
 var wrongValue=0;
//this is that function when user will click on any button he will get like push that button
$(".click-btn").click(function(){

  clickBtn=$(this).attr("id");
   $("#"+clickBtn).addClass("pressed");
   setTimeout(function(){$("#"+clickBtn).removeClass("pressed");},200);
    var b=randomValue(alphabet);
   //$(".show-Alpha").text(alphabet[b]);

   $("button#"+clickBtn).click(function() {
     var str=$(this).html();

     var btnClicked=str.slice(11,16)
     console.log(btnClicked);
     var toMatchValue=$("."+btnClicked).html();
     var showValue=$(".show-Alpha").html();
     console.log("show "+showValue)

    if(toMatchValue==showValue)
    {
      $("#"+clickBtn).addClass("rightPressed");
      setTimeout(function(){$("#"+clickBtn).removeClass("rightPressed");},3000);
        scoreValue=scoreValue+5;
        var audio = new Audio('sounds/Correct-answer.mp3');
        audio.play();
      $(".score").text("Score: "+scoreValue)

      setTimeout(ChangeAlpha,3000);
      console.log(scoreValue);

    }
    else {
       $("#"+clickBtn).addClass("wrongPressed");
       var wrongSound = new Audio('sounds/wrong-answer.mp3');
       wrongSound.play();
       setTimeout(function(){
         ChangeAlpha();

         wrongValue=wrongValue+1;
         console.log("wrongValue "+wrongValue)
         $("#"+clickBtn).removeClass("wrongPressed");},3000);

    }
   })
   if(scoreValue>100)
   {
     alert("highScore:"+scoreValue);
   }
   if(wrongValue==3)
   {
     alert("tryAgain");
     scoreValue=0;
     $(".score").text("Score: "+scoreValue)
   }
});


///this is that function where user will click on start Game then he will get new page to play a game ....
function ChangeAlpha() {


var b=randomValue(alphabet);
$(".show-Alpha").text(alphabet[b]);
  // console.log("b= "+b)
 var numbers=[0];
  if(b>=26)
   {
     numbers=[b,b-2,b-1,b-4];
   }
   else
   {
    numbers=[b,b+2,b+1,b+4];
   }
  var numbers = [b, b+1, b+2, b+3];
  var random1 = shuffle(numbers);
//  console.log(b+"    "+random1);


   $(".type1").text(alphabet[random1[0]]);
   $(".type2").text(alphabet[random1[1]]);
   $(".type3").text(alphabet[random1[2]] );
   $(".type4").text(alphabet[random1[3]]);

 }



//this that function which will generate random  numbers  in array without repeating that numbers.....

function shuffle(o)
{
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
  
