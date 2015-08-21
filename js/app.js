$(document).ready(function() {
  findItem();
  sortList();
  crossOff();
  showDelete();
  addEntry();
  deleteEntry();
  clearList();
});

jQuery.expr[':'].Contains = function(a,i,m){
    return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
};

function findItem() {
    $("#search-item").change(function() {
      var filter = $(this).val();
      if(filter) {
        $("ul").find("span:not(:Contains("+filter+"))").parent().slideUp();
        $("ul").find("span:Contains("+filter+")").parent().slideDown();
      } else {
        $("ul").find("li").slideDown();
      } 
      return false;
    })
    .keyup(function () {
      $(this).change();
  });
}

function sortList() {
  $(".table-list").sortable({ 
    axis: "y" 
  });
}

function crossOff() {
$("ul").on('click','li', function() {
  $(this).toggleClass("cross-out");
});
}

function showDelete() {
$("ul").on('mouseenter', 'li', function(){
  $(this).children('.delete').show();
})

.on('mouseleave','li', function(){
  $(this).children('.delete').hide();
});
}

function addEntry() {
  $('form').submit(function () {

    var entry_value = $('input#items-todo').val();

    if ($('input#items-todo').val().length == '0') {
        $('#error').show();
        $('input#items-todo').val("");
        return false
      } else {
        $('#error').hide();
        $('ul').append('<li class="shopping-item"><div class="checked"></div><span>' +  entry_value + '</span><img class="delete" src="images/x_mark.png" height="28px" width="28px"><hr></li>');

    $('input#items-todo').val("");
    return false
    }
  });
}

function deleteEntry() {
  $('ul').on('click', '.delete', function(e) {
    e.preventDefault();
      $(this).parent().remove();
  });
}

function clearList() {
$('#clear-list').click(function(){
    if (confirm("Are you sure you want to clear your current shopping list?")) {
      $(".table-list").empty();
    } else {
      return false;
    }
});
}





