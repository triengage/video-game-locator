document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("search").addEventListener("click", searchfn);
  $(document).ready(function() {
      $('#searchBox').keydown(function(event) {
          if (event.keyCode == 13) {
              searchfn();
              return false;
          };
      });
  });
});


function searchfn() {
var searchByName = $("#searchBox").val();
var url = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=50&offset=0&order=release_dates.date%3Adesc&search=" + searchByName

var data = '';

$.ajax({
   beforeSend: function(request) {
       request.setRequestHeader("X-Mashape-Key", 'API KEY GOES HERE');
   },
   dataType: "json",
   url: url,
   data: data,
   success: function(data) {
       console.log(data);
        $(document).ready(function() {
            $('#gameResults').DataTable( {
                'destroy': true,
                'aaData': data,
                'aoColumns': [
                    { "mDataProp": "name" }
                ]
            });   
        });

        
    }

});

};


     
