function performaction(y){
    let userinput = document.getElementById("userinput").value;
    let calclength = userinput.length;
    var lastvalue = userinput[calclength - 1];
    console.log(lastvalue);
    if (lastvalue == "+" || lastvalue == "-" || lastvalue == "*" || lastvalue == "÷") {
        let userinput = document.getElementById("userinput").value;
        let calclength = userinput.length;
        let lastvalue = userinput.substring(0,calclength-1);
        document.getElementById("userinput").value = lastvalue;
        document.getElementById("userinput").value  += y;
        }

    else{
document.getElementById("userinput").value  += y;

    }

}

function btn(x){
document.getElementById("userinput").value  += x;
}
     
function calculatebtn(){
    let userinput = document.getElementById("userinput").value;
    let calclength = userinput.length;
    var lastvalue = userinput[calclength - 1];
    if (lastvalue == "+" || lastvalue == "-" || lastvalue == "*" || lastvalue == "÷") {
        let userinput = document.getElementById("userinput").value;
        let calclength = userinput.length;
        let lastvalue = userinput.substring(0,calclength-1);
        document.getElementById("userinput").value = lastvalue;
        document.getElementById("userinput").value = eval( document.getElementById("userinput").value);
        }

    else{
        document.getElementById("userinput").value = eval( document.getElementById("userinput").value);

    }
}   

function clear1(){
    document.getElementById("userinput").value="";
}

function backspace(){
    let userinput = document.getElementById("userinput").value;
    let calclength = userinput.length;
    let lastvalue = userinput.substring(0,calclength-1);
    document.getElementById("userinput").value = lastvalue;
}