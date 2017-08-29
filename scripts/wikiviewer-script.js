function grabInput(){
  var input = document.getElementById("search").form.id;
  document.getElementById("results").form.id = input;
}

var wikiAPI = "https://en.wikipedia.org/w/api.php?action=query&titles="+input+"&prop=revisions&rvprop=content&format=json"

function searchWiki() {
  $.ajax({
    url: wikiAPI,
    dataType: "jsonp",
    success: function(data) {
      $("results").html(data);
    }
  })
}

$(document).ready(function() {
  $("button").click(function(){
    searchWiki();
  });
});