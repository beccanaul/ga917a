// create variable to count mouse overs
var mouseOverCount = 0;

var arr = [
  'fish', 'dog', 'cat'
];

// count when mouse enters div
$( ".out" )
.mouseover(function() {
  mouseOverCount += 1;
  $( this ).find( "p" ).text(arr[mouseOverCount %arr.length]);
})
.mouseout(function() {
  $( this ).find( "p" ).text( "mouse out" );
});

// make div draggable
  $( function() {
    $( ".out" ).draggable();
  } );
