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
    var victory = function(winner, tiles) {
        $('p').text(winner + ' Wins!');
        $(tiles[0]).css('background-color', 'green');
        $(tiles[1]).css('background-color', 'green');
        $(tiles[2]).css('background-color', 'green');
      }


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
          winner = 'X';
          tiles = [$('#lt'), $('#ct'), $('#rt')]
          victory(winner, tiles)
      } else if ($lt == 'X' && $lm == 'X' && $lb == 'X') {
          winner = 'X';
          tiles = [$('#lt'), $('#lm'), $('#lb')]
          victory(winner, tiles)
      } else if ($lt == 'X' && $cm == 'X' && $rb == 'X') {
          winner = 'X';
          tiles = [$('#lt'), $('#cm'), $('#rb')]
          victory(winner, tiles)
      } else if ($ct == 'X' && $cm == 'X' && $cb == 'X') {
          winner = 'X';
          tiles = [$('#ct'), $('#cm'), $('#cb')]
          victory(winner, tiles)
      } else if ($rt == 'X' && $cm == 'X' && $lb == 'X') {
          winner = 'X';
          tiles = [$('#rt'), $('#cm'), $('#lb')]
          victory(winner, tiles)
      } else if ($lm == 'X' && $cm == 'X' && $rm == 'X') {
          winner = 'X';
          tiles = [$('#lm'), $('#cm'), $('#rm')]
          victory(winner, tiles)
      } else if ($lb == 'X' && $cb == 'X' && $rb == 'X') {
          winner = 'X';
          tiles = [$('#lb'), $('#cb'), $('#rb')]
          victory(winner, tiles)
      } else if ($rt == 'X' && $rm == 'X' && $rb == 'X') {
          winner = 'X';
          tiles = [$('#rt'), $('#rm'), $('#rb')]
          victory(winner, tiles)
      } else if ($lt == 'O' && $ct == 'O' && $rt == 'O') {
          winner = 'O';
          tiles = [$('#lt'), $('#ct'), $('#rt')]
          victory(winner, tiles)
      } else if ($lt == 'O' && $lm == 'O' && $lb == 'O') {
          winner = 'O';
          tiles = [$('#lt'), $('#lm'), $('#lb')]
          victory(winner, tiles)
      } else if ($lt == 'O' && $cm == 'O' && $rb == 'O') {
          winner = 'O';
          tiles = [$('#lt'), $('#cm'), $('#rb')]
          victory(winner, tiles)
      } else if ($ct == 'O' && $cm == 'O' && $cb == 'O') {
          winner = 'O';
          tiles = [$('#ct'), $('#cm'), $('#cb')]
          victory(winner, tiles)
      } else if ($rt == 'O' && $cm == 'O' && $lb == 'O') {
          winner = 'O';
          tiles = [$('#rt'), $('#cm'), $('#lb')]
          victory(winner, tiles)
      } else if ($lm == 'O' && $cm == 'O' && $rm == 'O') {
          winner = 'O';
          tiles = [$('#lm'), $('#cm'), $('#rm')]
          victory(winner, tiles)
      } else if ($lb == 'O' && $cb == 'O' && $rb == 'O') {
          winner = 'O';
          tiles = [$('#lb'), $('#cb'), $('#rb')]
          victory(winner, tiles)
      } else if ($rt == 'O' && $rm == 'O' && $rb == 'O') {
          winner = 'O';
          tiles = [$('#rt'), $('#rm'), $('#rb')]
          victory(winner, tiles)
      } else if (($lt == 'X' || $lt == 'O') && ($ct == 'X' || $ct == 'O') &&
          ($rt == 'X' || $rt == 'O') && ($lm == 'X' || $lm == 'O') &&
          ($cm == 'X' || $cm == 'O') && ($rm == 'X' || $rm == 'O') &&
          ($lb == 'X' || $lb == 'O') && ($cb == 'X' || $cb == 'O') &&
          ($rb == 'X' || $rb == 'O')) {
        $('p').text("It's a tie!?!?");
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



/*$(document).ready(function() {
    //for (i = 0; i <=8; i++) {
    //row1.push(Math.floor(Math.random) * 9 + 1)
    //console.log(row1)
    //};
    for (var a=[],i=0;i<=8;++i) a[i]=i + 1;

    function shuffle(array) {
      var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    }

    a = shuffle(a);
    console.log(a);
});

//console.log(row1)
//$('#card').click(function () {
  //  $(this).toggleClass('flipped');
//});

//}); */
