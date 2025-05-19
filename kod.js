function oblicz()
{
    var szerokosc=document.getElementById("sz").value;
    var dlugosc=document.getElementById("d").value;
    var laminowane=document.getElementById("l").checked;
    var winylowe=document.getElementById("w").checked;
    var deska=document.getElementById("deska").checked;
    var pole=szerokosc*dlugosc;
    var koszt=0;

    if (((szerokosc<=0 || dlugosc<=0) && (deska==true || winylowe==true || laminowane==true)))
    {
       alert("Wprowadź poprawne dane.");
    }
    else if(winylowe==true)
    {
        koszt=14*pole;
    }
    else if(deska==true)
    {
        koszt=18*pole;
    }
    else if (laminowane==true)
    {
         koszt=12*pole;
    }
    else
    {
        alert("Wprowadź poprawne dane.");
    }


    document.getElementById("paragraf").innerHTML="Pole powierzchni pomieszczenia: "+pole+", koszt montażu "+koszt+".";
}