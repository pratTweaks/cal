

// console.log(inputValue)


const submitButton=document.querySelector(".submit")
let outpulBox=document.querySelector(".pass")

submitButton.addEventListener("click",(event)=>{
     
    let total
    event.preventDefault()
    let inputValue=document.querySelector(".un").value
    inputValue=parseInt(inputValue)
    if(inputValue<=50){
        total=(180*inputValue)-(inputValue*180*0.35);
    }

    else if(inputValue>50 && inputValue<=100){
        total=(180*inputValue)-((inputValue-50)*180*0.45+50*180*0.35)
    }
     else{
        //  total=inputValue*50*0.50
        console.log("gret");
        total=(180*inputValue)-((inputValue-100)*180*0.50 + (50*180*0.80))
     }
    margin= ((inputValue*180)-total)/(inputValue*180)
    margin=margin*100;
    discount=(180*inputValue)-total;
    margin=margin+"%";
    outpulBox.value="Total Discount: "+ discount+", Cost to stockist: "+ total+", Total Selling Price: " +(180*inputValue)+ ", Margin : "+margin;

    //  console.log(outpulBox)
})