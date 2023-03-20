/*Azumbra_Joshua --- (reverted back to version of this code without the bugged counttime statemenmt)*/

function whileloop() 
{   alert("Payload is away")
    var currTime = 10; 
    var i = 1; 


    while (i <12)   /*<--Due to the fact the "i" variable starts off as 1 and adds 1, to reach zero on a 10, there needs to be a buffer of 2*/
    { 
        setTimeout(function () { 
            document.getElementById("counttimeTimer").innerHTML = "Time until launch" + currTime; 
            currTime=currTime -1;
             }, 1000 * i); 
        i = i+1;
      
            }
            if (i >=12) /*if statement, inside the whileloop, detecting when i is greater or equal to 12, otherwise known as when currTime is 0 */
            {
                setTimeout(function () {        /**in order for this if statement to actuate properly with the existing variables, it needs to declare its own setTimeout function to not be actuated imediatly */
                    document.getElementById("counttimeTimer2").innerHTML = "Blastoff"; 
                    currTime=currTime -1;
                     }, 1000 * i); 
                i = i+1;
            } 
}

function currcancel() /*launch cancel function, works by directly opposing the whileloop function 1 to 1 */
{
    alert("launch canceled")
    var currTime = 10; 
    var i = 1;

    while (i < 12) 
    { 
        setTimeout(function () { 
            document.getElementById("counttimeTimer").innerHTML = "Delay initiated" + currTime; 
            currTime=currTime +1;   /*instead of reducing currTime, it adds it, effectively haulting a launch */
             }, 1000 * i); 
        i = i-1; /*in order to prevent the Blastoff from going off from the invisible i variable, it also directly counters the i variable */
    }
}