/* var el = document.getElementById("shoppingList");
el.addEventListener('click', function(e) {
  itemDone(e);
}, false);

$(document).ready(function() {
   $("#shoppingList").click(function() {
     $(this).itemDone();
 });
 });

 function getTarget(e) {
   return e.target;
 }

 function itemDone(e) {
   var target, elParent, elGrandparent;
   target = getTarget(e);
   elParent = target.parentNode;
   elGrandparent = target.parentNode.parentNode;
   elGrandparent.removeChild(elParent);

   if (e.preventDefault) {
     e.preventDefault();
   }
 }

var $listText = $('ul').text();
$('ul').append('<p>' + $listText + '</i>'); */

var val = $(this).val(" ");



$(document).ready(function() {
    $('td').click(function() {
      var card = $(this).html();
      console.log(card);
      if (card == ' ') {
        $(this).text('X');
        $(this).css('background-color', 'red');
 } else if (card == 'X') {
        $(this).text('O');
        $(this).css('background-color', 'blue');
 } else if (card == 'O') {
        $(this).text(' ')
        $(this).css('background-color', 'white');
 }
});
   $('td').click(function() {
     $(this).delay(2000).queue(function() {

      var $lt = $('#lt').text()
      var $ct = $('#ct').text()
      var $rt = $('#rt').text()
      var $lm = $('#lm').text()
      var $cm = $('#cm').text()
      var $rm = $('#rm').text()
      var $lb = $('#lb').text()
      var $cb = $('#cb').text()
      var $rb = $('#rb').text()

      if($lt == 'X' && $ct == 'X' && $rt == 'X') {
        $('p').text('X Wins!');
        $('#lt, #ct, #rt').css('background-color', 'green');
      } else if ($lt == 'X' && $lm == 'X' && $lb == 'X') {
        $('p').text('X Wins!');
        $('#lt, #lm, #lb').css('background-color', 'green');
      } else if ($lt == 'X' && $cm == 'X' && $rb == 'X') {
        $('p').text('X Wins!');
        $('#lt, #cm, #rb').css('background-color', 'green');
      } else if ($ct == 'X' && $cm == 'X' && $cb == 'X') {
        $('p').text('X Wins!');
        $('#ct, #cm, #cb').css('background-color', 'green');
      } else if ($rt == 'X' && $cm == 'X' && $lb == 'X') {
        $('p').text('X Wins!');
        $('#rt, #cm, #lb').css('background-color', 'green');
      } else if ($lm == 'X' && $cm == 'X' && $rm == 'X') {
        $('p').text('X Wins!');
        $('#lm, #cm, #rm').css('background-color', 'green');
      } else if ($lb == 'X' && $cb == 'X' && $rb == 'X') {
        $('p').text('X Wins!');
        $('#lb, #cb, #rb').css('background-color', 'green');
      } else if ($rt == 'X' && $rm == 'X' && $rb == 'X') {
        $('p').text('X Wins!');
        $('#rt, #rm, #rb').css('background-color', 'green');
      } else if ($lt == 'O' && $ct == 'O' && $rt == 'O') {
        $('p').text('O Wins!');
        $('#lt, #ct, #rt').css('background-color', 'green');
      } else if ($lt == 'O' && $lm == 'O' && $lb == 'O') {
        $('p').text('O Wins!');
        $('#lt, #lm, #lb').css('background-color', 'green');
      } else if ($lt == 'O' && $cm == 'O' && $rb == 'O') {
        $('p').text('O Wins!');
        $('#lt, #cm, #rb').css('background-color', 'green');
      } else if ($ct == 'O' && $cm == 'O' && $cb == 'O') {
        $('p').text('O Wins!');
        $('#ct, #cm, #cb').css('background-color', 'green');
      } else if ($rt == 'O' && $cm == 'O' && $lb == 'O') {
        $('p').text('O Wins!');
        $('#rt, #cm, #lb').css('background-color', 'green');
      } else if ($lm == 'O' && $cm == 'O' && $rm == 'O') {
        $('p').text('O Wins!');
        $('#lm, #cm, #rm').css('background-color', 'green');
      } else if ($lb == 'O' && $cb == 'O' && $rb == 'O') {
        $('p').text('O Wins!');
        $('#lb, #cb, #rb').css('background-color', 'green');
      } else if ($rt == 'O' && $rm == 'O' && $rb == 'O') {
        $('p').text('O Wins!');
        $('#rt, #rm, #rb').css('background-color', 'green');
      //} else if (($lt == 'X' || 'O') && ($ct == 'X' || 'O') && ($rt == 'X' || 'O') &&
      //  ($lm == 'X' || 'O') && ($cm == 'X' || 'O') && ($rm == 'X' || 'O') &&
      //  ($lb == 'X' || 'O') && ($cb == 'X' || 'O') && ($rb == 'X' || 'O')) {
      //  $('p').text("It's a tie!?!?");
      } else {
        $('p').text(' ');
      }
      console.log($lt);
      console.log($ct);
      console.log($rt);

      $(this).dequeue();

        });
});

    $("button").click(function() {
         $('p').text(' ')
         $('#ct').text(' ')
         $('#rt').text(' ')
         $('#lt').text(' ')
         $('#lm').text(' ')
         $('#cm').text(' ')
         $('#rm').text(' ')
         $('#lb').text(' ')
         $('#cb').text(' ')
         $('#rb').text(' ')
         $('#ct').css('background-color', 'white');
         $('#rt').css('background-color', 'white');
         $('#lt').css('background-color', 'white');
         $('#lm').css('background-color', 'white');
         $('#cm').css('background-color', 'white');
         $('#rm').css('background-color', 'white');
         $('#lb').css('background-color', 'white');
         $('#cb').css('background-color', 'white');
         $('#rb').css('background-color', 'white');

});
});
//$('#card').click(function () {
  //  $(this).toggleClass('flipped');
//});

//});
