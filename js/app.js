$(document).ready(function() {
  findItem();
  sortList();
  crossOff();
  showDelete();
  addEntry();
  deleteEntry();
  clearList();
});

function findItem() {
  $('#search-item').keyup(function(){

    var that = this, $allListElements = $('ul > li');

    var $matchingListElements = $allListElements.filter(function(i, li){
        var listItemText = $(li).text().toUpperCase(), 
            searchText = that.value.toUpperCase();
        return ~listItemText.indexOf(searchText);
    });

    $allListElements.hide();
    $matchingListElements.show();

});
}

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

function addEntry() {
  $('form').submit(function () {

    var entry_value = $('input#items-todo').val();

    if ($('input#items-todo').val().length == '0') {
        $('#error').show();
        $('input#items-todo').val("");
        return false
      } else {
        $('#error').hide();
        $('ul').append('<li><div class="checked"></div><span>' +  entry_value + '</span><img class="delete" src="images/x_mark.png" height="28px" width="28px"><hr></li>');
        
    $('input#items-todo').val("");
    return false
    }
  });
}

function deleteEntry() {
  $('img').click(function () {
    $(this).parent('li').remove();
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





