$(document).ready(function() {

    var userRandomCounts =0;
    var wins = 0;
    var losses = 0;
    $('#winning').text(wins);
    $('#losser').text(losses);
 /*  var name=prompt();
   function add(jj, jj){
       return jj+jj;}
alert (add);*/
   
   
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

        var numberToGuess = Math.floor((Math.random()* 100) + 19);
        
        $('.ComputerRandomNumber').text(numberToGuess);

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
