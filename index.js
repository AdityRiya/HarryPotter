var score = 0;
var total = 25;
var point = 1;

var highest = total * 1;

function init() {
 sessionStorage.setItem('a1', 'b');
 sessionStorage.setItem('a2', 'd');
 sessionStorage.setItem('a3', 'c');
 sessionStorage.setItem('a4', 'a');
 sessionStorage.setItem('a5', 'd');
 sessionStorage.setItem('a6', 'a');
 sessionStorage.setItem('a7', 'b');
 sessionStorage.setItem('a8', 'c');
 sessionStorage.setItem('a9', 'd');
 sessionStorage.setItem('a10', 'a');
 sessionStorage.setItem('a11', 'c');
 sessionStorage.setItem('a12', 'c');
 sessionStorage.setItem('a13', 'd');
 sessionStorage.setItem('a14', 'a');
 sessionStorage.setItem('a15', 'a');
 sessionStorage.setItem('a16', 'b');
 sessionStorage.setItem('a17', 'b');
 sessionStorage.setItem('a18', 'c');
 sessionStorage.setItem('a19', 'b');
 sessionStorage.setItem('a20', 'a');
 sessionStorage.setItem('a21', 'a');
 sessionStorage.setItem('a22', 'a');
 sessionStorage.setItem('a23', 'b');
 sessionStorage.setItem('a24', 'c');
 sessionStorage.setItem('a25', 'd');
}


$(document).ready(function () {
 $('.quesForm').hide();


 $('#q1').show();
 $('.quesForm #submit').click(function () {
  current = $(this).parents('form:first').data('question');
  next = $(this).parents('form:first').data('question') + 1;
  $('.quesForm').hide();
  $('#q' + next + '').show();
  process('' + current + '');
  return false;
 });
});

function process(n) {
 var submitted = $('input[name = q' + n + ']:checked').val();
 if (submitted == sessionStorage.getItem('a' + n + '')) {
  score++;
 }

 if (n == total) {
  $('#results').html('<h2 class="pt-4">Your Final Score is : ' + score + ' out of 25</h2> ')
  if (score >= 15) {
   $('#results').append('<h2 class="text-center pt-4">You are "THE REAL HARRY POTTER FAN"</h2><a class="btn btn-outline-info" href="quiz.html">Take QUIZ Again</a><a class="btn btn-outline-info m-2" href="index.html">Back</a> ')
  } else {
   $('#results').append('<h2 class="text-center">Good Job</h2> <a class="btn btn-outline-info" href="quiz.html">Take QUIZ Again</a><a class="btn btn-outline-info m-2" href="index.html">Back</a>')
  }


 }
 return false;

}


window.addEventListener('load', init, false)