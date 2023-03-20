/*Azumbra_Joshua_  updated whileloop function*/

function whileloop() 
{   alert("Payload is away")
    var currTime = 10; 
    var i = 10;  /*<--updated i to match currTime*/


    while (i >0)   /*<--because i equals currTime, there is now no need to account for 2 digits*/
    { 
        setTimeout(function () { 
            document.getElementById("counttimeTimer").innerHTML = "Time until launch" + currTime; 
            currTime=currTime -1;
             }, 1000 * i); 
        i = i-1;

            } 
            if (i <=0) /*if statement, now detects if i hits 0 or when currTime hits 0 */
            {
                setTimeout(function () {        /**in order for this if statement to actuate properly with the existing variables, it needs to declare its own setTimeout function to not be actuated imediatly */
                 document.getElementById("counttimeTimer2").innerHTML = "Blastoff";
                currTime=currTime -1;
                     }, 1000 * i); 
                i = i-1;
            } 
}

function currcancel() /*launch cancel function, works by directly opposing the whileloop function 1 to 1 */
{
    alert("launch canceled")
    var currTime = 10; 
    var i = 10;    /*<-- updated i here as well to match top*/

    while (i > 10) /*inverted cancel statement to reflect switch from i=i+1 to i=i-1 variable acuation*/ 
    { 
        setTimeout(function () { 
            document.getElementById("counttimeTimer").innerHTML = "Delay initiated" + currTime; 
            currTime=currTime -1;   /*instead of reducing currTime, it adds it, effectively haulting a launch */
             }, 1000 * i); 
        i = i+1; /*in order to prevent the Blastoff from going off from the invisible i variable, it also directly counters the i variable */
    }
}