// Set some variables
var errors = 0;
var corrects = 0;
var questionno = 0;
var old = [];
var answers = [];
var answerToggle = 0;
var squares = "";

function copyScore() {
  const paragraph =  "*I scored " + corrects + " out of 300 in the Greenwich TKD grading theory quiz* 🥋\n\n" + squares + "\n\nTry the quiz for yourself at: greenwichtaekwondo.com/quiz";
  const cb = navigator.clipboard;
  cb.writeText(paragraph);
}

function enterScore() {

  // Grab score and name
  var scoreName = document.getElementById('scoreInput').value.toUpperCase();
  console.log(scoreName)

  if (scoreName.length < 3) {
    return false;
  }

  if (["ASS", "4SS", "BUM", "FAG", "CUM", "FUK", "FCK", "DIK", "D1K", 
       "GAY", "G4Y", "CNT", "TIT", "T1T", "FUQ", "POO", "P00", "SEX",
       "S3X", "A$$", "S3X", "$3X", "$EX", "A$S", "AS$", "KUM", "NOB",
       "N0B", "PO0", "P0O"].indexOf(scoreName) > -1) {
    alert("The name you entered is banned. Your input and IP address have been logged and emailed to Mr Tran.")
    return false;
  }

  // Send data
  firebase.initializeApp({
    apiKey: "AIzaSyC7tGeSxeWG3FECjiErOIA3ej27MrQKfLE",
    authDomain: "greenwich-tkd.firebaseapp.com",
    projectId: "greenwich-tkd",
    storageBucket: "greenwich-tkd.appspot.com",
    messagingSenderId: "977936090760",
    appId: "1:977936090760:web:5a41afe9a8b359d72c413d",
    measurementId: "G-SBD6BWM9VL"
  });
  
  let db = firebase.firestore();

    // Add a new document in collection "scores"
    db.collection("scores").doc().set({
        name: scoreName,
        score: corrects
    })
    .then(function() {
        console.log("Score submission successful");
    })
    .catch(function(error) {
        console.error("Error sending score to database", error);
    });

  // Get data
  let fbCounter = 0;
  db.collection("scores").orderBy("score", "desc").limit(10).get().then(querySnapshot => {
      console.log(`Found ${querySnapshot.size} documents.`);
      querySnapshot.forEach(doc => {
        fbCounter++;
        const leaderName = doc.data().name;
        const leaderScore = doc.data().score;

          document.getElementById("scoreName" + fbCounter).innerHTML = leaderName;
          document.getElementById("scoreScore" + fbCounter).innerHTML = leaderScore;
      });
  });
  
  // Show the scoreboard
  document.getElementById("quiz-right-bottom-4").classList.add("hidden");
  document.getElementById("quiz-right-bottom-3").classList.remove("hidden");
};

// Define a function to shuffle the questions
function shuffle(a) {
var j, x, i;
for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
}
return a;
};

// Define a function activated when the user selects a grade
function selectDifficulty(grade) {
    // Change question number to 1
    questionno++;
    // Filter questions by chosen grade
    var gradeQuestions = questions.filter(function (el) {
      return el.grade === grade;
    });
    // Pick a question at random
    var question = gradeQuestions[Math.floor(Math.random()*gradeQuestions.length)];
    // Add ID to list so we don't pick it again
    old.push(question.id);
    // Create a new array for the question and shuffle it
    answers = [{"answer": question.micah,"id":"micah"}, {"answer": question.fu1,"id":"fu"}, {"answer": question.fu2,"id":"fu"}, {"answer": question.fu3,"id":"fu"}];
    shuffle(answers);
    // Hide the selection screen
    document.getElementById("quiz-right-bottom-2").classList.add("hidden");
    document.getElementById("quiz-right-bottom-1").classList.remove("hidden");
    // Print the new question to page
    document.getElementById("quiz-header").innerHTML = "Question " + questionno;
    document.getElementById("quiz-right-top").innerHTML = question.question;
    document.getElementById("quiz-right-bottom-1").innerHTML =
    "<div id='" + answers[0].id + "' class='quiz-button " + answers[0].id + "'>" + answers[0].answer + "</div>" + "<div id='" + answers[1].id + "' class='quiz-button " + answers[1].id + "'>" + answers[1].answer + "</div>" + "<div id='" + answers[2].id + "' class='quiz-button " + answers[2].id + "'>" + answers[2].answer + "</div>" + "<div id='" + answers[3].id + "' class='quiz-button " + answers[3].id + "'>" + answers[3].answer + "</div>"

  // Define a function when a user needs a new question
  function newQuestion() {
    // Pick a question at random
    var question = gradeQuestions[Math.floor(Math.random()*gradeQuestions.length)];
    // Have we had this question before?
    // Yes:
    if (old.indexOf(question.id) >= 0) {
      newQuestion();
    // No:
    } else {
    // Add ID to list so we don't pick it again
    old.push(question.id);
    // Create a new array for the question and shuffle it
    answers = [{"answer": question.micah,"id":"micah"}, {"answer": question.fu1,"id":"fu"}, {"answer": question.fu2,"id":"fu"}, {"answer": question.fu3,"id":"fu"}];
    shuffle(answers);
    // Print the new question to page
    document.getElementById("quiz-header").innerHTML = "Question " + questionno;
    document.getElementById("quiz-right-top").innerHTML = question.question;
    document.getElementById("quiz-right-bottom-1").innerHTML =
    "<div id='" + answers[0].id + "' class='quiz-button " + answers[0].id + "'>" + answers[0].answer + "</div>" + "<div id='" + answers[1].id + "' class='quiz-button " + answers[1].id + "'>" + answers[1].answer + "</div>" + "<div id='" + answers[2].id + "' class='quiz-button " + answers[2].id + "'>" + answers[2].answer + "</div>" + "<div id='" + answers[3].id + "' class='quiz-button " + answers[3].id + "'>" + answers[3].answer + "</div>"

    // Listen out for the answer and run function if right or wrong is picked
    var items1 = document.getElementsByClassName("micah");
    for (var i = 0; i < items1.length; i++) {
      items1[i].addEventListener("click", function() { nextQuestion(this, 'micah'); }, false);
    };

    var items2 = document.getElementsByClassName("fu");
    for (var i = 0; i < items2.length; i++) {
      items2[i].addEventListener("click", function() { nextQuestion(this, 'fu'); }, false);
      };
    };
  };

  // Define a function for when user gets to end
  function completeQuiz() {

    // Reset questions
    questionno = 0;

    document.getElementById("quiz-header").innerHTML = "You've answered all the questions";
    document.getElementById("quiz-right-top").innerHTML = "Now try another grade";
    document.getElementById("quiz-right-bottom-1").innerHTML = "<div class='quiz-button' id='nextRound'>More questions</div>";
    
    const nextRoundButton = document.querySelector("#nextRound");

    nextRoundButton.addEventListener("click", function () {
      
    // Grey out the completed grade
    document.getElementById(grade).classList.add("beltDone");
  
    // Show selection screen
    document.getElementById("quiz-right-bottom-1").classList.add("hidden");
    document.getElementById("quiz-header").innerHTML = "Pick your grade";
    document.getElementById("quiz-right-top").innerHTML = "<p id='quiz-right-top'>Choose your current grade to set the difficulty:</p>";
    document.getElementById("quiz-right-bottom-2").classList.remove("hidden");
    });
  };

  // Brief intermission before end of the quiz
  function endQuiz() {
    document.getElementById("score").innerHTML = " ";
    document.getElementById("lives").innerHTML = "XXX";
    document.getElementById("quiz-header").innerHTML = "Game Over";
    document.getElementById("quiz-right-top").innerHTML = "You scored " + corrects;
    document.getElementById("quiz-right-bottom-1").classList.add("hidden");
    document.getElementById("quiz-right-bottom-4").classList.remove("hidden");
  };

  // Define a function for when an answer is selected
  function nextQuestion(element, micahorfu) {
    // Was the answer right?
    if(micahorfu == 'micah') {
      corrects++;
      squares = squares.concat("🟩");
      document.getElementById("score").innerHTML = "Score: " + corrects;
      element.style.color = 'green';
      element.style.border = '1px solid green';
      var items4 = document.getElementsByClassName("micah");
      for (var i = 0; i-1 < items4.length; i++) {
        items4[i].className = "quiz-button-nohov";
      }
      var items5 = document.getElementsByClassName("fu");
      for (var i = 0; i-1 < items5.length; i++) {
        items5[i].className = "quiz-button-nohov";
      }
      var items5 = document.getElementsByClassName("fu");
      for (var i = 0; i-1 < items5.length; i++) {
        items5[i].className = "quiz-button-nohov";
      }
    // Or wrong?
    } else {
      errors++;
      if (errors < 3) {
        squares = squares.concat("🟨");
      } else {
        squares = squares.concat("🟥");
      }
      document.getElementById("micah").style.color = 'green';
      document.getElementById("micah").style.border = '1px solid green';
      element.style.color = 'red';
      element.style.border = '1px solid red';
      var items4 = document.getElementsByClassName("micah");
      for (var i = 0; i-1 < items4.length; i++) {
        items4[i].className = "quiz-button-nohov";
      }
      var items5 = document.getElementsByClassName("fu");
      for (var i = 0; i-1 < items5.length; i++) {
        items5[i].className = "quiz-button-nohov";
      }
      var items5 = document.getElementsByClassName("fu");
      for (var i = 0; i-1 < items5.length; i++) {
        items5[i].className = "quiz-button-nohov";
      }
    }
    // If there haven't been three errors:
    if (errors == 0) {
        document.getElementById("lives").innerHTML = "  ";
        questionno++;
        // Check if it's the end of the quiz
        if (questionno == 31) {
          completeQuiz();
        // Otherwise, next question
        } else {
          document.getElementById("quiz-right-bottom-1").innerHTML += "<div id='next' class='next'>Next question</div>";
          document.getElementById("next").addEventListener("click", function() { newQuestion(); }, false);
      };
    // If there haven't been three errors:
    } else if (errors == 1) {
        document.getElementById("lives").innerHTML = "X";
        questionno++;
        // Check if it's the end of the quiz
        if (questionno == 31) {
          completeQuiz();
        // Otherwise, next question
        } else {
          document.getElementById("quiz-right-bottom-1").innerHTML += "<div id='next' class='next'>Next question</div>";
          document.getElementById("next").addEventListener("click", function() { newQuestion(); }, false);
      };
    // If there haven't been three errors:
    } else if (errors == 2) {
        document.getElementById("lives").innerHTML = "XX";
        questionno++;
        // Check if it's the end of the quiz
        if (questionno == 31) {
          completeQuiz();
        // Otherwise, next question
        } else {
          document.getElementById("quiz-right-bottom-1").innerHTML += "<div id='next' class='next'>Next question</div>";
          document.getElementById("next").addEventListener("click", function() { newQuestion(); }, false);
      };
    // If there HAVE been three errors:
    } else {
        // End quiz
        document.getElementById("lives").innerHTML = "XXX";
        questionno++;
        document.getElementById("quiz-right-bottom-1").innerHTML += "<div id='next' class='next'>See your score</div>";
        document.getElementById("next").addEventListener("click", function() { endQuiz(); }, false);
    };
  };

  // Listen out for the answer and run function if right or wrong is picked
  var items1 = document.getElementsByClassName("micah");
  for (var i = 0; i < items1.length; i++) {
    items1[i].addEventListener("click", function() { nextQuestion(this, 'micah'); }, false);
  };

  var items2 = document.getElementsByClassName("fu");
  for (var i = 0; i < items2.length; i++) {
    items2[i].addEventListener("click", function() { nextQuestion(this, 'fu'); }, false);
  };
};
