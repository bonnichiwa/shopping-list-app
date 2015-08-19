$(document).ready(function() {
  $(".table-list").sortable({ 
    axis: "y" 
  });
});

// $(".table-items h3").mouseenter(function(){
//   alert("nice");
// });

// $(".table-list").hover(function() {
//   $('.delete').show();
// }, function () {
//   $('.delete').hide();
// });


// $('.table-list').on('mouseenter', 'li', function(){$(this).children('.delete').toggleClass('show');});
//   $('.table-list').on('mouseleave', 'li', function(){$(this).children('.delete').toggleClass('show');});
