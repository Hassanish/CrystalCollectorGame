$(document).ready(function() {

    var userRandomCounts =0;
    var wins = 0;
    var losses = 0;
    $('#winning').text(wins);
    $('#losser').text(losses);
   
    Start();
    Reset();
    
    function Start () {
        var numbers = []
            while(numbers.length < 4){
              var randomnumber = Math.floor((Math.random()* 11) + 1);
                var randomguesses = false;
                    for (var i=0; i< numbers.length; i++){ 
                        if (numbers[i] == randomnumber){
                            rundomguesses = true;}}
                               if(!randomguesses)numbers[numbers.length]=randomnumber;
                     }
    crystals = ['https://github.com/Hassanish/HW-Wireframe/blob/master/week-4-game/assets/images/RedCrystal.png.docx.png',
            'https://github.com/Hassanish/HW-Wireframe/blob/master/week-4-game/assets/images/BlueCrystal.png.docx.png',
            'https://github.com/Hassanish/HW-Wireframe/blob/master/week-4-game/assets/images/YellowCrystal.png.docx.png',
            'https://github.com/Hassanish/HW-Wireframe/blob/master/week-4-game/assets/images/GreenCrystal.png.docx.png'];            
     console.log(numbers);       
       for (i = 0; i < numbers.length; i++) {
            var Crystall = $('<img>');
            Crystall.attr('data-num', numbers[i]);
            Crystall.attr('src', crystals[i]);
            Crystall.attr('alt', 'crystals');
            Crystall.addClass('EachCrystal')
            $('#crystals').append(Crystall);}
            }
    //resets the game
    function Reset() {

        userRandomCounts= 0;
        $('#TScore').text(userRandomCounts);
        // Selects a random number to be shown at the start of the game
        // Number should be should be between 19 - 120
        var numberToGuess = Math.floor((Math.random()* 100) + 19);
        
        $('.ComputerRandomNumber').text(numberToGuess);
        //sets up click for jewels
        $('.EachCrystal').on('click', function(){
            userRandomCounts = userRandomCounts + parseInt($(this).data('num'));
           
            $('#TScore').text(userRandomCounts);
            if (userRandomCounts == numberToGuess){
            $('#Results').text('Yee you won!');
            wins ++;
            $('#winning').text(wins);
            alert("You won!"); 
            console.log(wins)
            $('#crystals').empty();
            Start();
            Reset();
                
            } else if (userRandomCounts> numberToGuess){
                $('#Results').text('You lose!')
                losses ++;
                alert ("Oops you lost!");
  
                $('#losser').text(losses);
                console.log(losses)
                $('#crystals').empty();
                Start();
                Reset();
            }
        });
    }

});
