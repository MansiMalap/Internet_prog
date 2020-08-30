
         //function that display value 

         function display(val) 

         { 

             document.getElementById("res").value+=val 

         } 

           

         //function that evaluates the digit and return result 

         function solution() 

         { 

             let x = document.getElementById("res").value 

             let y = eval(x) 

             document.getElementById("res").value = y 

         } 

           

         //function that clear the display 

         function reset() 

         { 

             document.getElementById("res").value = "" 

         } 
