var div=document.createElement("div");
div.id="container";
div.style.textAlign="centre";
var input=document.createElement("input");
input.setAttribute("type","text");
input.style.width="30%";
input.id="countryname";

var button=document.createElement("button");
button.setAttribute("type", "button");
button.innerHTML="click me";
button.style.margin="6px";
button.addEventListener("click",getdata);

var para1=document.createElement("p");
para1.id="results1";

var para2=document.createElement("p");
para2.id="results2";

var para3=document.createElement("p");
para3.id="results3";

div.append(input,button,para1,para2,para3);
document.body.append(div);

//var result=document.getElementById("results").innerHTML=`Active : ${res2[index].Active}`

async function getdata(){
    let res=document.getElementById("countryname").value;
    console.log(res);
    try{
        let res1=await fetch(`https://api.covid19api.com/total/dayone/country/${res}`);
 let res2=await res1.json();
 console.log(res2);
 index=res2.length-1;
 //var active=console.log(`Active : ${res2[index].Active}`);
  var active=`Active Case : ${res2[index].Active}`;
  
  var death=`Death Case : ${res2[index].Deaths}`;
  
  var recoverd=`Recovered Case : ${res2[index].Recovered}`;
 para1.append(active);
 para2.append(death);
 para3.append(recoverd);


    }catch (error){
        console.log(error);
    }

}