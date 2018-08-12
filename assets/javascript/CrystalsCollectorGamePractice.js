$(document).ready(function() {
//  Decaring variables for tallies
    var userRandomCounts =0;
    var wins = 0;
    var losses = 0;
    $('#winning').text(wins);
    $('#losser').text(losses);
    $('#losser').text(losses);  
   
    Start();
    Reset();
    
    function Start () {
        var numbers = []
        // Setting up random numbers for each jewel
          // Random number has to be between 1 - 12
            while(numbers.length < 4){
              var randomnumber = Math.floor((Math.random()* 12) + 1);
                var randomguesses = false;
                    for (var i=0; i< numbers.length; i++){ 
                        if (numbers[i] == randomnumber){
                            rundomguesses = true;}}
                               if(!randomguesses)numbers[numbers.length]=randomnumber;
                     }
    //Inserting the images
    crystals = ["assets/images/blue.png",
    "assets/images/green.png",
    "assets/images/red.png",
    "assets/images/yellow.png"];            
     console.log(numbers);       
       for (i = 0; i < numbers.length; i++) {
            var Crystall = $('<img>');
            Crystall.attr('data-num', numbers[i]);
            Crystall.attr('src', crystals[i]);
            Crystall.attr('alt', 'crystals');
            Crystall.addClass('EachCrystal')
            $('#crystals').append(Crystall);}
            }
    function Reset() {

        userRandomCounts= 0;
        $('#TScore').text(userRandomCounts);
        // Selects a random number to be shown at the start of the game
        // Number should be should be between 19 - 120
        var numberToGuess = Math.floor((Math.random()* 100) + 19);
        
        $('.ComputerRandomNumber').text(numberToGuess);

        $('.EachCrystal').on('click', function(){
            userRandomCounts = userRandomCounts + parseInt($(this).data('num'));
           //sets win/lose conditions
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
