const color = document.querySelector('body');
 const rand = Math.floor(Math.random() * 10) + 1; 
console.log("hi welcome to my store\n Also I forgot to mention there is a little\n bit of Javascript\nDOM selector- \nquery selector to obtain the body.style.backgroundColor element\n and replace this element with 3 colors utlising Math.random()\nThis number(or in my JS file rand) => ", rand, " if greater or equal to 2.5 will be\na light orange color which has a hex code of #f7af43\n if greater or equal to 7.5 will be what the computer or browser interpets as light blue\n");

if(rand <= 2.5){
  color.style.backgroundColor  = "#f7af43";
}
if(rand >= 7.5 ){
   color.style.backgroundColor   = "lightblue";
}
if(rand >= 5 && rand < 7.5 ){
   color.style.backgroundColor   = "lightgreen";
}


