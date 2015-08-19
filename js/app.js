$(document).ready(function() {
  sortList();
  crossOff();
  showDelete();
  addEntry();
  deleteEntry();
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

// function itemEntry() {
//   $('form').submit(function() {
//     if ($('input').val() !== '') {
//       var input_value = $('input').val();
//       $('.table-list ul').append('<li>' + input_value + '</li>');
// }
// });
// }

function addEntry() {
  $('form').submit(function () {
    if ($('input#items-todo').val().length == '0') {
        $('#error').show();
        $('input#items-todo').val("");
        return false
      } else {
        $('#error').hide();
        $('ul').append('<li>' + '<div class="checked"></div>' +  $('input#items-todo').val() + '<div class="delete"></div>' + '<hr>' + '</li>');
    $('input#items-todo').val("");
    return false
    }
  });
}

function deleteEntry() {
  $('.delete').click(function () {
    $(this).parent('li').remove();
  });
}





