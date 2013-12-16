

$(document).ready(function() {

  var question1 = {
    question: "What year did the first Led Zeppelin album come out?",
    answers: ["1968", "1969", "1970", "1971"],
    correct: 1, //index of answer
    explain: "The eponymously named album \'Led Zeppelin\' came out January 11th, 1969",
  };
  var question2 = {
    question: "What album is Stairway to Heaven on?",
    answers: ["Led Zeppelin I", "Led Zeppelin III", "Led Zeppelin IV", "Houses of the Holy"],
    correct: 2,
    explain: "Led Zeppelin IV is actually their fourth unnamed studio album.  They sold more than 23 million in the US alone",
  }; 
  var question3 = {
    question: "What song on Led Zeppelin II was Led Zeppelin sued for plagerism?",
    answers: ["Good Times Bad Times", "Whole Lotta Love", "What Is and What Should Never Be",  "Ramble On"],
    correct: 1,
    explain: "Willie Dixon wrote a very similar song to Whole Lotta Love.",
  }; 

  var question4 = {
    question: "How many studio albums did Led Zeppelin record before their breakup in 1980?",
    answers: ["7", "9", "10", "12"],
    correct: 1,
    explain: "Led Zeppelin discography includes nine studio albums, four live albums, nine compilation albums, sixteen singles and eight music downloads.",
  };

  var question5 = {
    question: "Which of the following songs did Led Zeppelin never play in its entirety live?",
    answers: ["D\'yer Mak\'er", "Tangerine", "When the Levee Breaks", "Misty Mountain Hop"],
    correct: 0,
    explain: "D\'yer Mak\'er was never played in its entirety.  However, bits were played during other songs (source: Wikipedia)",
  };

  var question6 = {
    question: "How many albums did Led Zeppelin sell during their performing career?",
    answers: ["17 million", "82 million", "106 million", "121 million"],
    correct: 2,
    explain: "With 106 albums sold during their recording career they trail only the Beatles and Elvis Presley by total albums sold",
  };
  var question7 = {
    question: "What was the name of Led Zeppelin\'s personal jet?",
    answers: ["The moon rider", "The zeppelin", "The stairway to heaven", "The starship"],
    correct: 3,
    explain: "'The Starship' was the first Boeing-720 ever built",
  }; 
  var question8 = {
    question: "What year was Led Zeppelin inducted into rock and roll hall of fame?",
    answers: ["1985", "1993", "1995", "1999", "2001"],
    correct: 2,
    explain: "Cool timeline of Led Zeppelin stuff: http://rockhall.com/inductees/led-zeppelin/timeline/",
  };
  var quest_list = [question1, question2, question3, question4, question5, question6, question7, question8];
  var numQuestions = quest_list.length;
  var numPictures = 10;
  var score = 0;
  var currentlyClicked = -1; //Index of currently selected answer
  var currentQuestion = 0; //Index of current question


  $('#start').click(function(){
    $('#welcome').addClass('hidden');
    $('#question').removeClass('hidden');

    var new_pic = "images/band" + (Math.floor(Math.random()*numPictures)+1) + ".jpg";
    $('#quest_background').attr('src', new_pic);

    var new_top = (Math.random()  * ($(window).height() - $('#question').height() - 10))+10;
    var new_left = (Math.random() * ($(window).width()  - $('#question').width()  - 50))+50;
    $('#question').css('left', new_left + 'px').css('top', new_top + 'px');

    $('#quest_title').text(quest_list[0].question);

    var numAnswers = quest_list[0].answers.length;

    for (var i=0; i<numAnswers; i++){
      $('#answer_copy_me').clone(true).appendTo('#answer_bucket').removeClass('hidden').addClass('possibleAnswer').attr('id', 'answer_' + i);
      var new_item = $('#answer_bucket').last();
      $('#answer_' + i + ' p').text(quest_list[0].answers[i]);
    }
  });

  $('.checker').click(function(){

      var new_pic = "images/band" + (Math.floor(Math.random()*numPictures)+1) + ".jpg";
      $('#quest_background').attr('src', new_pic);
      var id = $(this).closest("div").attr("id");
      id = id.substr(id.length - 1);
      if(id!=currentlyClicked){
        $("#answer_"+currentlyClicked + ' input').attr('checked', false);
        currentlyClicked = id;
      }
  });
  $('#answer_button').click(function(){
    if (currentlyClicked== -1){
      return;
    }
      $('#question').addClass('hidden');
      if (currentlyClicked == quest_list[currentQuestion].correct){
        score++;
        $('#correct').removeClass('hidden');
      }
      else {
        $('#incorrect').removeClass('hidden');
      }

      $('.explain').text(quest_list[currentQuestion].explain);

      currentQuestion++;
      currentlyClicked = -1;
  });


  $('.nextButton').click(function(){
    if (~$('#correct').hasClass('hidden')) {
          $('#correct').addClass('hidden');
    } 
    if (~$('#incorrect').hasClass('hidden')) {
          $('#incorrect').addClass('hidden');
    } 
    if (currentQuestion >= numQuestions){
      $('#done').removeClass('hidden');
      $('#score').text(score + ' out of ' + numQuestions);
    }
    else {
      $('#question').removeClass('hidden');

      var new_pic = "images/band" + (Math.floor(Math.random()*numPictures)+1) + ".jpg";
      $('#quest_background').attr('src', new_pic);

      var new_top = (Math.random()  * ($(window).height() - $('#question').height() - 10))+10;
      var new_left = (Math.random() * ($(window).width()  - $('#question').width()  - 50))+50;
      $('#answer_bucket div.possibleAnswer').remove();
      $('#question').css('left', new_left + 'px').css('top', new_top + 'px');
      $('#quest_title').text(quest_list[currentQuestion].question);


      var numAnswers = quest_list[currentQuestion].answers.length;
      for (var i=0; i<numAnswers; i++){
        $('#answer_copy_me').clone(true).appendTo('#answer_bucket').removeClass('hidden').addClass('possibleAnswer').attr('id', 'answer_' + i);
        var new_item = $('#answer_bucket').last();
        $('#answer_' + i + ' p').text(quest_list[currentQuestion].answers[i]);
      };
    }
  });
});







