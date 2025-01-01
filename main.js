/***********************/
/** //1// **/
for(var i=1; i <= 10; i++){ 
  document.writeln(i);
  }

  document.writeln("<br>");

/***********************/
/** //2// **/
var i=1
while(i<=10){
    document.writeln(i);
    i++
  }

  document.writeln("<br>");
  
/***********************/
/** //3// **/  
var number=[1,2,3,4,5]
for(i=0;i<5;i++){
    document.writeln(number[i]);
}

document.writeln("<br>");
  
/***********************/
/** //4// **/  
for(var i=0;i<=10;i+=2){
  document.writeln(i+"")
}

document.writeln("<br>");
  
/***********************/
/** //5// **/  
var sum=0;
for(i=1;i<=10;i++){
    sum+=i;}
    document.write(sum)

    document.writeln("<br>");
  
/***********************/
/** //6// **/  
var number=[1,2,3,4,5]
var largest=number[0]
for(i=0;i<5;i++){
    if(number[i]>largest){
    largest=number[i]}
   }
   document.write(largest)

   document.writeln("<br>");
  
/***********************/
/** //7// **/    
var number=[5,4,3,2,1]
var smallest=number[0]
for(i=0;i<5;i++){
       if(number[i]<smallest){
        smallest=number[i]}
      }
      document.write(smallest)
   
      document.writeln("<br>");  

/***********************/
/** //11// **/
var number=[1,2,3,4,5]
var sum=0
for(i=0;i<5;i++){
    sum+=number[i]} 
var avarage=sum/5
document.write(avarage)
   
      document.writeln("<br>");  

/***********************/
/** //12// **/
var factorial=1; 
for(i=1;i<=5;i++){
    factorial*=i}
    document.write(factorial) 

  document.writeln("<br>");  

/***********************/
/** //13// **/
 

document.writeln("<br>");  

/***********************/
/** //14// **/
var number=5;
for(i=1;i<=10;i++){
     multiple=i*number
    document.writeln(number,'*', i, '=', multiple + ",")
}

 document.writeln("<br>");  

/***********************/
/** //15// **/
var number=[1,2,3,4,5]
for(i=0; i<5; i+=2){
    document.writeln(number[i])
}

  document.writeln("<br>");  

/***********************/
/** //16// **/
var x=[1,2,3,4,5]
for(i=x.length-1;i>=0;i--){
    document.writeln(x[i])
}

 document.writeln("<br>");  

/***********************/
/** //17// **/
var number=[1,2,3,4,5]
var startIndex=2
var endIndex=4
for(i=2; i<=4;i++){
    document.writeln(number[i])
}

document.writeln("<br>");  

/***********************/
/** //18// **/
var number=[1,2,3,4,5]
var numberTofind=4
var found=true
for(i=0;i<5;i++){
    if(number[i]===numberTofind){
        found=true
    }
}document.write(found)

document.writeln("<br>");  

/***********************/
/** //19// **/
var number=[1,2,1,3,2,1]
var numberTocount=1
var count=3
for(i=0;i<number;i++){
    if(number[i]===numberTocount){
        count=3
    }
}document.write(count)

document.writeln("<br>");  

/***********************/
/** //20// **/
var number=10
var x=0, y=1
for(i=2; i<=8; i++){
    document.writeln(x)
    number=x+y
    x=y
    y=number
}