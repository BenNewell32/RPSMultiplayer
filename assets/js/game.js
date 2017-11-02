//////////////////////
// Initialize Firebase
//////////////////////
  //https://console.firebase.google.com/project/rpsmultiplayerd/database/data/

  var config = {
    apiKey: "AIzaSyCQzKshlvYR_cGjpyWMk9Q0Fug7keHJtw8",
    authDomain: "rpsmultiplayerd.firebaseapp.com",
    databaseURL: "https://rpsmultiplayerd.firebaseio.com",
    projectId: "rpsmultiplayerd",
    storageBucket: "",
    messagingSenderId: "87886522018"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();


/////////////////////
//CHARACTER SELECITON
/////////////////////
  $(document).on("click", ".btn-primary", function(){
    var character = $(this).text().trim();
    console.log(character);
    
    localStorage.setItem("Character",character);
      console.log(localStorage.getItem("Character"));
    localStorage.setItem("allWins",0);
      console.log(localStorage.getItem("allWins"));
    localStorage.setItem("allLosses",0);
      console.log(localStorage.getItem("allLosses"));
    
    window.open("http://htmlpreview.github.io/?https://github.com/BenNewell32/RPSMultiplayer/blob/master/index.html");
  });


  //If user has selected character, add to title
  if(localStorage.getItem("Character") !== null && localStorage.getItem("Character") !== '') {
    var characterDiv= $("<div>")
    characterDiv.text("Welcome " + localStorage.getItem("Character")); 
    $(".titlecharacter").html(characterDiv);
  }


//////////////////////////
// IF PLAYER 1 IS SELECTED
//////////////////////////
  $(document).on("click", "#player1", function(){

    //firbase variables for Player 1
    if(localStorage.getItem("Character") !== null && localStorage.getItem("Character") !== '') {
      plyr1Ref= database.ref("plyr1");
      // console.log(plyr1Ref);
      database.ref("plyr1").set({
        plyrname: localStorage.getItem("Character"),
        alltimelosses1: parseInt(localStorage.getItem("allLosses")),
        alltimewins1: parseInt(localStorage.getItem("allWins")),
        currentloss1: 0,
        currentwins1: 0,
      });
    };
  });


    //create player1 div
    var char1Ref= database.ref("plyr1");
    char1Ref.on("value", function(snapshot){
      snapshot.forEach(function(childSnapshot) {

        if(localStorage.getItem("Character") !== null && localStorage.getItem("Character") !== '') {
          
          // console.log(char1Ref);
          var char1div= $("<div>");

          var p1name=childSnapshot.val();
          $(char1div).text(p1name);
          $("#plyr1btn").html(char1div);
        };
      });
    

      var plyr1wins = localStorage.getItem("allWins");
      var plyr1losses = localStorage.getItem("allLosses");
      
      
      var scoreDiv = $("<div>")
      scoreDiv.text("Wins: "+ plyr1wins +" , Losses: " + plyr1losses)

      $("#plyr1btn").append(scoreDiv);

      //add RPS icons
      var rpsDiv = $("<div>");
      
      var opbuttonR = $("<button>");
      opbuttonR.attr("class","btn btn-secondary");
      var iconDivR = $("<img>");
      iconDivR.attr("src","assets/images/rleft.png");
      iconDivR.attr("id","rock1");
      iconDivR.attr("class","iconimg");
      iconDivR.attr("data-value","rock");

      var opbuttonP = $("<button>");
      opbuttonP.attr("class","btn btn-secondary");
      var iconDivP = $("<img>");
      iconDivP.attr("src","assets/images/pleft.png");
      iconDivP.attr("id","paper1");
      iconDivP.attr("class","iconimg");
      iconDivP.attr("data-value","paper");
      
      var opbuttonS = $("<button>");
      opbuttonS.attr("class","btn btn-secondary");
      var iconDivS = $("<img>");
      iconDivS.attr("src","assets/images/sleft.png");
      iconDivS.attr("id","scissors1");
      iconDivS.attr("class","iconimg");
      iconDivS.attr("data-value","scissors");

      opbuttonR.append(iconDivR);
      opbuttonP.append(iconDivP);
      opbuttonS.append(iconDivS);

      rpsDiv.append(opbuttonR);
      rpsDiv.append(opbuttonP);
      rpsDiv.append(opbuttonS);
      $("#plyr1RPS").html(rpsDiv);

    });



//////////////////////////
// IF PLAYER 2 IS SELECTED
//////////////////////////
  $(document).on("click", "#player2", function(){

    //firbase variables for Player 2
    if(localStorage.getItem("Character") !== null && localStorage.getItem("Character") !== '') {
      plyr2Ref= database.ref("plyr2");
      // console.log(plyr2Ref);
      database.ref("plyr2").set({
        plyrname: localStorage.getItem("Character"),
        alltimelosses2: parseInt(localStorage.getItem("allLosses")),
        alltimewins2: parseInt(localStorage.getItem("allWins")),
        currentloss2: 0,
        currentwins2: 0,
      });
    };
  });


    //create player2 div
    var char2Ref= database.ref("plyr2");
    char2Ref.on("value", function(snapshot){
      snapshot.forEach(function(childSnapshot) {

        if(localStorage.getItem("Character") !== null && localStorage.getItem("Character") !== '') {
          
          // console.log(char2Ref);
          var char2div= $("<div>");

          var p2name=childSnapshot.val();
          $(char2div).text(p2name);
          $("#plyr2btn").html(char2div);
        };
      });
    

      var plyr2wins = localStorage.getItem("allWins");
      var plyr2losses = localStorage.getItem("allLosses");
      
      
      var scoreDiv = $("<div>")
      scoreDiv.text("Wins: "+ plyr2wins +" , Losses: " + plyr2losses)

      $("#plyr2btn").append(scoreDiv);

      //add RPS icons
      var rpsDiv = $("<div>");
      
      var opbuttonR = $("<button>");
      opbuttonR.attr("class","btn btn-secondary");
      var iconDivR = $("<img>");
      iconDivR.attr("src","assets/images/rleft.png");
      iconDivR.attr("id","rock2");
      iconDivR.attr("class","iconimg");
      iconDivR.attr("data-value","rock");

      var opbuttonP = $("<button>");
      opbuttonP.attr("class","btn btn-secondary");
      var iconDivP = $("<img>");
      iconDivP.attr("src","assets/images/pleft.png");
      iconDivP.attr("id","paper2");
      iconDivP.attr("class","iconimg");
      iconDivP.attr("data-value","paper");
      
      var opbuttonS = $("<button>");
      opbuttonS.attr("class","btn btn-secondary");
      var iconDivS = $("<img>");
      iconDivS.attr("src","assets/images/sleft.png");
      iconDivS.attr("id","scissors2");
      iconDivS.attr("class","iconimg");
      iconDivS.attr("data-value","scissors");

      opbuttonR.append(iconDivR);
      opbuttonP.append(iconDivP);
      opbuttonS.append(iconDivS);

      rpsDiv.append(opbuttonR);
      rpsDiv.append(opbuttonP);
      rpsDiv.append(opbuttonS);
      $("#plyr2RPS").html(rpsDiv);

    });


/////////////////
//SCORING SECTION
/////////////////

  $(document).on("click", ".iconimg", function(){
    if($(this).attr('id').includes(1) 
       // and waiting=0 
       ){
      database.ref("score1").set({
        plyr1currentguess: $(this).attr('data-value'),
        waiting1:1
      });
    };
    if($(this).attr('id').includes(2) 
       // and waiting=0 
       ) {
      database.ref("score2").set({
        plyr2currentguess: $(this).attr('data-value'),
        waiting2:1
      });
    };
  });

  //   //work in progress
  var score1fb = database.ref('score1');
  var score2fb = database.ref('score2');
  score1fb.on('value', got1Data, errData);
  score2fb.on('value', got2Data, errData);
  var plyr1guess = '';
  var plyr1status = 0;
  var plyr2guess = '';
  var plyr2status = 0;

  function got1Data(data){
    console.log(data.val().plyr1currentguess);
    plyr1guess=data.val().plyr1currentguess;
    plyr1status= data.val().waiting1;

  }
  function got2Data(data){
    console.log(data.val().plyr2currentguess);
    plyr2guess=data.val().plyr2currentguess;
    plyr2status= data.val().waiting2;

  } 

  function errData(data){
    console.log("Error!");
    console.log(err);
  };

        var p1score=0;
        var p2score=0;
  ////////////
  //CHANNGING CODE TO READ OFF FIRBASE CHANGES FOR EACH PLAYER
  //PLAYER 1//
  ////////////
        var s1Ref= database.ref("score1");
  s1Ref.on('value', function(snapshot){
  
        console.log(plyr1guess);
        console.log(plyr1status);
        console.log(plyr2guess);
        console.log(plyr2status);

          if (plyr1status==1 && plyr1status==1){

            if (plyr1guess==plyr2guess){
                  console.log("push");
                  var csDiv= $("<div>")
                  csDiv.text("PUSH"); 
                  $("#cs").html(csDiv);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });
                }
            if (plyr1guess=='rock' && plyr2guess=='paper'){
                  console.log("player 2 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P2 wins!"); 
                  $("#cs").html(csDiv);
                  p2score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                  });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                  });
                  
                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
            if (plyr1guess=='rock' && plyr2guess=='scissors'){
                  console.log("player 1 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P1 wins!"); 
                  $("#cs").html(csDiv);
                  p1score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });

                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
            if (plyr1guess=='paper' && plyr2guess=='rock'){
                  console.log("player 1 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P1 wins!"); 
                  $("#cs").html(csDiv);
                  p1score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });

                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
            if (plyr1guess=='paper' && plyr2guess=='scissors'){
                  console.log("player 2 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P2 wins!"); 
                  $("#cs").html(csDiv);
                  p2score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });

                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
            if (plyr1guess=='scissors' && plyr2guess=='rock'){
                  console.log("player 2 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P2 wins!"); 
                  $("#cs").html(csDiv);
                  p2score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });

                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
            if (plyr1guess=='scissors' && plyr2guess=='paper'){
                  console.log("player 1 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P1 wins!"); 
                  $("#cs").html(csDiv);
                  p1score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });

                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
          }
          else{
            console.log("waiting for selections");
          }
          if (p1score==3) {
                  var csDiv= $("<div>")
                  csDiv.text("Game P1"); 
                  $("#cs").html(csDiv);
                  p1score=0;
                  p2score=0;

          }
          if (p2score==3){
                  var csDiv= $("<div>")
                  csDiv.text("Game P2"); 
                  $("#cs").html(csDiv);
                  p1score=0;
                  p2score=0;

          }
      });

  ////////////
  //CHANNGING CODE TO READ OFF FIRBASE CHANGES FOR EACH PLAYER
  //PLAYER 2//
  ////////////
        var s2Ref= database.ref("score2");
  s2Ref.on('value', function(snapshot){
  
        console.log(plyr1guess);
        console.log(plyr1status);
        console.log(plyr2guess);
        console.log(plyr2status);

          if (plyr1status==1 && plyr1status==1){

            if (plyr1guess==plyr2guess){
                  console.log("push");
                  var csDiv= $("<div>")
                  csDiv.text("PUSH"); 
                  $("#cs").html(csDiv);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });
                }
            if (plyr1guess=='rock' && plyr2guess=='paper'){
                  console.log("player 2 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P2 wins!"); 
                  $("#cs").html(csDiv);
                  p2score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                  });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                  });
                  
                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
            if (plyr1guess=='rock' && plyr2guess=='scissors'){
                  console.log("player 1 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P1 wins!"); 
                  $("#cs").html(csDiv);
                  p1score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });

                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
            if (plyr1guess=='paper' && plyr2guess=='rock'){
                  console.log("player 1 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P1 wins!"); 
                  $("#cs").html(csDiv);
                  p1score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });

                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
            if (plyr1guess=='paper' && plyr2guess=='scissors'){
                  console.log("player 2 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P2 wins!"); 
                  $("#cs").html(csDiv);
                  p2score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });

                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
            if (plyr1guess=='scissors' && plyr2guess=='rock'){
                  console.log("player 2 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P2 wins!"); 
                  $("#cs").html(csDiv);
                  p2score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });

                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
            if (plyr1guess=='scissors' && plyr2guess=='paper'){
                  console.log("player 1 wins");
                  var csDiv= $("<div>")
                  csDiv.text("P1 wins!"); 
                  $("#cs").html(csDiv);
                  p1score++;
                  console.log(p1score);
                  console.log(p2score);
                  database.ref("score1").set({
                    plyr1currentguess: "",
                    waiting1:0
                    });
                  database.ref("score2").set({
                    plyr2currentguess: "",
                    waiting2:0
                    });

                  database.ref("wins2").set({
                    secondplr: p2score,
                    waiting2:0
                  });
                  database.ref("wins1").set({
                    firstplr: p1score,
                    waiting2:0
                  });
            }
          }
          else{
            console.log("waiting for selections");
          }
          if (p1score==3) {
                  var csDiv= $("<div>")
                  csDiv.text("Game P1"); 
                  $("#cs").html(csDiv);
                  p1score=0;
                  p2score=0;

          }
          if (p2score==3){
                  var csDiv= $("<div>")
                  csDiv.text("Game P2"); 
                  $("#cs").html(csDiv);
                  p1score=0;
                  p2score=0;

          }
      });

/////////////////
//COMMENT SECTION
/////////////////
  $(document).on("click", "#entercom", function(){

    var userN = localStorage.getItem("Character");
    var commentN = $("#commdet").val().trim();
    var timeN = Date().trim().split("GMT",1);
    console.log(timeN);
    database.ref("Comments").push(
      {
      user: userN,
      time: timeN,
      comment: commentN,
    });
  });

  var commentRef= database.ref("Comments");
  commentRef.on('value', function(snapshot){
    $(".comment-data-table").empty();
    snapshot.forEach(function(childSnapshot) {
    
    // console.log(childSnapshot.val().Role);
    var newTR = $("<tr>");
    var newuser = $("<td>");
    var newtime = $("<td>");
    var newcomm = $("<td>");
    newcomm.attr("style","width: 70%");



    newuser.text(childSnapshot.val().user);
    newtime.text(childSnapshot.val().time);
    newcomm.text(childSnapshot.val().comment);
    
    newTR.append(newuser);
    newTR.append(newtime);
    newTR.append(newcomm);
    //console.log(newTR);

   $(".comment-data-table").prepend(newTR);
   $(".comments").val('');
    });
  });

  $(document).on("click", "#clearcom", function(){
    $(".comments").val('');
  });

////////
//TO DOs
////////
    // Change Player Name to read value from database
    // Change win or losses based on value from database
    // add total win losses to local 
        // add total win/losses to firebase
        // add to html

////////
//EXTRAS
////////
  //SCROLLER ON COMMENT BOX

  //SPACE BETWEEN RPS ICONS

  //PLAY SOUND ON CHARACTER SELECTION WEBPAGE
    // var sample = document.getElementById("foobar");
    // sample.play();
    // console.log(document.getElementById("foobar"));

  //if characters are the same.... send to real site for battle
  //https://emulatoronline.com/n64-games/super-smash-bros/