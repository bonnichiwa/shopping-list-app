$(document).ready(function() {
  sortList();
  crossOff();
  showDelete();
});

function sortList() {
  $(".table-list").sortable({ 
    axis: "y" 
  });
}

function crossOff() {
$("li").click(function() {
  $(this).toggleClass("cross-out");
});
}

function showDelete() {
$("li").mouseenter(function(){
  $(this).children('.delete').show();
})
.mouseleave(function(){
  $(this).children('.delete').hide();
});
}

