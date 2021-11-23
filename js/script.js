$(document).ready(function() {
  
  $('.progress .progress-bar').css("width",
  function() {
      return $(this).attr("aria-valuenow") + "%";
  }
);


$(".filter-button").click(function(){
  var value = $(this).attr('data-filter');
  
  if(value == "all")
  {
  
  $('.filter').show('1000');
  }
  else
  {
  
  $(".filter").not('.'+value).hide('3000');
  $('.filter').filter('.'+value).show('3000');
  
  }
  });
  
  if ($(".filter-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");


  //expander

  // REMOVE AND ADD CLICK EVENT 
  $('.doAddItem').on('click', function () {
    $(".gridder").data('gridderExpander').gridderAddItem('TEST');
});

// Call Gridder
$(".gridder").gridderExpander({
    scrollOffset: 60,
    scrollTo: "panel", // "panel" or "listitem"
    animationSpeed: 400,
    animationEasing: "easeInOutExpo",
    onStart: function () {
        console.log("Gridder Inititialized");
    },
    onExpanded: function (object) {
        console.log("Gridder Expanded");
    },
    onChanged: function (object) {
        console.log("Gridder Changed");
    },
    onClosed: function () {
        console.log("Gridder Closed");
    }
});


//Validate js



});