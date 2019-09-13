
//global variables to sync java script to html elements/classes

let bgtxt = document.querySelector('#bigtext');
let nxtbtn = document.querySelector('#next');
let smtxt = document.querySelector('#smalltext');
let GRbtn = document.querySelector('#goreset');


//setting click to the goreset class and to run it's function
GRbtn.addEventListener('click', goresetbutton);



//setting click to the next class in html and to run it's function
nxtbtn.addEventListener('click', nextbutton);





var page = 1;




function goresetbutton() {

    switch (page) {
        case 1:

            // bigtext 'Pick a number from 01-99'
            bgtxt.innerHTML = 'Pick a <br> number <br> from <br> 01-99';
            // next button needs to reveal
            nxtbtn.style.visibility = 'visible';
            // small text 'when you have your number click next'
            smtxt.innerHTML = 'when you have your number <br> click next';

            // go needs to change to reset icon and needs to take you back to page 1
            GRbtn.innerHTML = 'Reset';

            page = 2
            break;


        default:
            //reset to page 1
            
            location.reload();
           
                
              

            break;
           
    }


}

function nextbutton() {
    switch (page) {
        case 1:


            //goreset function runs for this case

            page = 2
            break;


        case 2:
           
            bgtxt.innerHTML = 'Add both <br> digits <br> together <br> to get a <br> new <br> number';
            
            nxtbtn.style.visibility = 'visible';
           
            smtxt.innerHTML = 'Ex: 14 is 1 + 4 = 5 <br> Ex: 7 is 0 + 7 = 7 <br> click next to proceed';


            // go needs to change to reset icon and needs to take you back to page 1

            page = 3
            break;

        case 3:
            
            bgtxt.innerHTML = 'Subtract <br> your new <br> number <br> from the <br> original <br> number ';
         
            nxtbtn.style.visibility = 'visible';
            
            smtxt.innerHTML = 'Ex: 14 - 5 = 9 <br> click next to proceed';


            // go needs to change to reset icon and needs to take you back to page 1

            page = 4
            break;

        case 4:
           
            bgtxt.innerHTML = ' ';

            for (var i = 0; i < 100; i++) {
                if (i % 9 == 0) {
                    bgtxt.innerHTML += i + ' = &' + '<br>';
                }
                else  {
                    var c = String.fromCharCode(Math.floor(Math.random() * 10) + 36);
                    bgtxt.innerHTML += i + ' = ' + c + '<br>';
                }
                

            }

            // next button needs to say REVEAL
            nxtbtn.style.visibility = 'visible';
            // small text 'when you have your number click next'
            smtxt.innerHTML = 'Ex: 14 is 1 + 4 = 5 <br> click next to proceed';


            // go needs to change to reset icon and needs to take you back to page 1

            page = 5
            break;

        case 5:
            // bigtext 'Pick a number from 01-99'
            bgtxt.innerHTML = '&';
            // next button needs to reveal
            nxtbtn.style.visibility = 'hidden';
            // small text 'when you have your number click next'
            smtxt.innerHTML = 'Your symbol is: <br> &';


            // go needs to change to reset icon and needs to take you back to page 1

            

            page = 6
            break;


    }


}