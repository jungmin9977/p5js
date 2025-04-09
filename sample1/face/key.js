
let DownHair1;
let DownHair2;
let DownHair3;
let DownHair4;
let DownHair5;
let UpHair1;
let UpHair2;
let UpHair3;
let BackHair1;
let BackHair2;

let mouth1;
let mouth2;

let LeftEyeXpos;
let LeftEyeYpos;
let RightEyeXpos;
let RightEyeYpos;

let leftUpEyeDoorXpos;
let leftUpEyeDoorYpos;
let rightUpEyeDoorXpos;
let rightUpEyeDoorYpos;
let leftDownEyeDoorYpos;
let rightDownEyeDoorYpos;

let eyeSpeed=0.2;
let eyeDoorSpeed=0.15;
let windSpeed=0.5;
let lotate=0.5;
function setup() {
  createCanvas(400, 400);
   
   

  LeftEyeXpos=150;
  LeftEyeYpos=198; 
  RightEyeXpos=250;
  RightEyeYpos=198;

  leftUpEyeDoorXpos=  148  ;
  rightUpEyeDoorYpos= 200 ;
  rightUpEyeDoorXpos=  252 ;
  leftUpEyeDoorYpos= 200 ;

  leftDownEyeDoorYpos=197;
  rightDownEyeDoorYpos=197;
  

  
  
}


function draw() {







  background(200);

  if(mouseIsPressed){

   let c2=color('#00BFFF');
   let c1=color(0,0,255);


  for(let x=0; x<height; x++){
   let inter = map(x, 0, width, 0, 1); // 변수 x의 값을 0에서 1사이 값으로 보정해준다.
   let c = lerpColor(c1, c2, inter); // c1과 c2 색상 사이에서 inter 값에 따라 색상 혼합
    stroke(c);
    line(x,0 , x, height);
   }
    


  

   let shakeX=random(-2,2);
   let shakeY=random(-2,2);
   translate(shakeX,shakeY);
}else{



   
}
 

 






  
  rectMode(CENTER);
  
  noStroke();
  fill('#FFC0C0');
  
  rect(200,200, 199, 100);//얼굴
  rect(200,140,199,20);//이마
  
  
 // arc(200,200,200,200,0,TWO_PI,PI,);
  
  quad(100,250,140,290, 260, 290,300,250);//턱   
  
  fill(0);
  stroke(0);
  
  triangle(100,200,120,120,100, 125);//구렛나루(왼)
  
  
  triangle(300,200,280,100,300, 125);//구렛나루(오)
  
  arc(200,130,201,110,PI,TWO_PI);
  //rect(200,110,200,80,120,120,0,0);//머리
  
  fill(0);
  stroke(100);
  UpHair1=arc(190,130,20,30,PI,PI+HALF_PI); //머리칼
  UPHair2=arc(148,130,20,30,PI-(PI+HALF_PI),PI-PI); 
  UpHair3=line(168,130,168,110);
  
  stroke(0);
  DownHair1=arc(210,125,20,35,HALF_PI,PI);
  DownHair2=arc(230,125,20,37,HALF_PI,PI);
  DownHair3=arc(250,125,20,39,HALF_PI,PI);
  DownHhair4=arc(270,125,20,41,HALF_PI,PI);
  DownHair5=arc(290,125,20,43,HALF_PI,PI);
  
  
  BackHair1=arc(190,85,20,30,PI,PI+HALF_PI); //머리칼
  BackHair2=arc(148,90,20,30,PI-(PI+HALF_PI),PI-PI); 
  
 
  noStroke();
  fill(0,0,0,100);
  arc(150,180,30,20,PI+QUARTER_PI,TWO_PI);  //눈썹(왼)
  arc(250,180,30,20,PI-TWO_PI,PI-(PI+QUARTER_PI)); //눈썹(오)
  
  strokeWeight(3);
  
  
  noFill();
  stroke(70);
  rect(150,200,65,50,15,15,90,90);//안경(왼)
  rect(250,200,65,50,15,15,90,90);//안경(오)
  line(180,190,220,190);//코받침
  line(100,175,117,190);
  line(300, 175, 283, 190);

  
  
  
  
  fill('#FFC0C0');
  
  
  
  line(203,185,205,220); //콧대
  arc(210,230,10,10 , PI+ HALF_PI,TWO_PI+QUARTER_PI);// 콧망울
  arc(200,230,10,10 , 0+QUARTER_PI,HALF_PI+QUARTER_PI);//콧망울
  
  fill('#FF8080');
  // 입술 윗부분
  
  // 입술 아랫부분
  


  if(mouseIsPressed){




   for(let i = 190 ; i<215; i+=5 ){
      strokeWeight(2);
      fill(255);
      rect(i,247,5,5);

   }
   for(let i = 190 ; i<215; i+=5 ){

      fill(255);
      rect(i,252,5,5);

   }

  }
  else{
   mouth1=arc(200, 250, 30, 15, PI, TWO_PI, PIE);
   mouth2=arc(200, 255, 30, 10, 0, PI);


  }
  

  if(mouseIsPressed){

   strokeWeight(3);
   line(140,200,145,195);
   line(145,195,150,200);
   line(150,200,155,195);
   line(155,195,160,200);
   line(160,200,165,195);

   line(260,200,255,195);
   line(255,195,250,200);
   line(250,200,245,195);
   line(245,195,240,200);
   line(240,200,235,195);







  }
  else{

   noFill();
  
  stroke(0);
  fill(0);
  ellipse(LeftEyeXpos,LeftEyeYpos,11,11);//눈동자(왼)
  noFill(0);
  arc(leftUpEyeDoorXpos,leftUpEyeDoorYpos,35,20,PI+QUARTER_PI,TWO_PI);//눈꺼풀(왼)
  arc(150,leftDownEyeDoorYpos,20,8,0,radians(190));
  
  fill(0);
   ellipse(RightEyeXpos, RightEyeYpos, 11, 11); // 눈동자(오)

  noFill();
  // 수평 반전된 왼쪽 눈
  arc(rightUpEyeDoorXpos, rightUpEyeDoorYpos, 35, 20,PI-TWO_PI ,PI-(PI+QUARTER_PI) ); // 눈꺼풀(오)

  // 수평 반전된 왼쪽 눈의 아크
  arc(250, rightDownEyeDoorYpos, 20, 8, PI-radians(190), PI); // 반전된 왼쪽 눈 아크


  }
 

  





if(keyIsPressed){

  
    if( keyCode===LEFT_ARROW){ 
        
        
        LeftEyeXpos-=eyeSpeed; 
        RightEyeXpos-=eyeSpeed;

        



     }

     else if( keyCode===RIGHT_ARROW){

        LeftEyeXpos+=eyeSpeed;  
        RightEyeXpos+=eyeSpeed;
     }

     else{   }

     if( keyCode===UP_ARROW){

        LeftEyeYpos-=eyeSpeed; 
        RightEyeYpos-=eyeSpeed;

        leftUpEyeDoorYpos-=eyeDoorSpeed;
        rightUpEyeDoorYpos-=eyeDoorSpeed;
     }
     else if( keyCode===DOWN_ARROW){

        LeftEyeYpos+=eyeSpeed; 
        RightEyeYpos+=eyeSpeed;

        leftDownEyeDoorYpos+=eyeDoorSpeed;
        rightDownEyeDoorYpos+=eyeDoorSpeed;
     }

     


}
else{ 
    LeftEyeXpos=150;
    RightEyeXpos=250;
    LeftEyeYpos=198;
    RightEyeYpos=198;

    
    rightUpEyeDoorYpos= 200 ;
    leftUpEyeDoorYpos= 200 ;

    leftDownEyeDoorYpos=197;
    rightDownEyeDoorYpos=197;
}


 
} 