var score, roundScore, dice, activePlayer, gamePlaying;

newGame();





//eventListener for clicking button to generate random button
document.querySelector('.btn-roll').addEventListener('click',function() {
// if game is active
if(gamePlaying){
    
//generation of random number of dice
dice= Math.floor(Math.random()*6 +1 );


//display the number generated as a picture
document.querySelector('.dice').style.display='block';
document.querySelector('.dice').src='dice'+ dice +'.jfif';
if(dice !=1){

//add the number generated to the current score and display
roundScore += dice;
document.querySelector('#current-' + activePlayer).textContent=roundScore;
}
else{

//changePlayers
changePlayer();

}

}
});





//EventListener HoldButton
//Add roundscore to score when you press hold
document.querySelector('.btn-hold').addEventListener('click',function(){

    //if game is active
if (gamePlaying){
    score[activePlayer] += roundScore;
    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];

//checking for a winner
if (score[activePlayer] >=20 ){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';

        //remove the dice display
        document.querySelector('.dice').style.display='none';
    
        //remove the active class and add winner class
         document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
         document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        
        //deactivates the whole game
        gamePlaying=false;

    }
    else{
      //changeplayer
      changePlayer();

    }
}
   
});

document.querySelector('.btn-new').addEventListener('click',newGame);



//function definitions//////


function changePlayer(){
    //set current scores of activePlayer to zero
document.getElementById('current-1').textContent='0';
document.getElementById('current-0').textContent='0';
//toggle players
activePlayer == 0 ?activePlayer =1:activePlayer=0;

//roundscore resets to zero
roundScore=0;

// toggle active class
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

}


function newGame(){

        //change display scores to zero
        document.querySelector('#score-0').textContent='0';
        document.querySelector('#score-1').textContent='0';
        document.querySelector('#current-0').textContent='0';
        document.querySelector('#current-1').textContent='0';
        score=[0,0];
        roundScore=0;
        activePlayer=0;
        gamePlaying=true;
      
    
        //hide display dice
        document.querySelector('.dice').style.display='none';
    
        //change Player display name
        document.querySelector('#name-0').textContent='Player 1'
        document.querySelector('#name-1').textContent='Player 2'
    
            //remove the winner class
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        
        
    
        
}
