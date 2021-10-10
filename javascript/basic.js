var a=0;
function display(){
    var change=document.getElementById("phone");
    if(a%2==0)
    {
        change.style.display="block";
        a=a+1;
    }
    else{
        change.style.display="none";
        a=a+1;
    }

}