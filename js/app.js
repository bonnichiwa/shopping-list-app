$(document).ready(function() {
  $("tr").sortable({ 
    axis: "y" 
  });
});

$('.table-list').on('mouseenter', 'tr', function(){
  $(this).children('.delete').toggleClass('show');
});

$('.table-list').on('mouseleave', 'tr', function(){
  $(this).children('.delete').toggleClass('show');
});