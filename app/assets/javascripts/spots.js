
$(document).ready(ready);
$(document).on('page:load', ready);

var ready;
ready = function() {

  $( function() {
     $( "#datepicker" ).datepicker();
   } );

  var date = new Date();
  var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  $('#datepicker').datepicker({
      minDate: today,
      dateFormat: 'dd/mm/yy'
  });

};
