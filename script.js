// create variable to count mouse overs
var mouseOverCount = 0;

// count when mouse enters div
$( ".out" )
  .mouseover(function() {
    mouseOverCount += 1;
    $( this ).find( "span" ).text( "mouse over x " + mouseOverCount );
  })
  .mouseout(function() {
    $( this ).find( "span" ).text( "mouse out" );
  });

// make div draggable
  $( function() {
    $( ".out" ).draggable();
  } );
