// Get Parameters from some url
var getUrlParameter = function getUrlParameter(sPageURL) {
    var url = sPageURL.split('?');
    var obj = {};
    if (url.length == 2) {
      var sURLVariables = url[1].split('&'),
          sParameterName,
          i;
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          obj[sParameterName[0]] = sParameterName[1];
      }
      return obj;
    } else {
      return undefined;
    }
};

// Execute actions on images generated from Markdown pages
var images = $("div#body-inner img");
// Wrap image inside a featherlight (to get a full size view in a popup)
images.wrap(function(){
  var image =$(this);
  return "<a href='" + image[0].src + "' data-featherlight='image'></a>";
});

// Change styles, depending on parameters set to the image
images.each(function(index){
  var image = $(this)
  var o = getUrlParameter(image[0].src);
  if (typeof o !== "undefined") {
    var h = o["height"];
    var w = o["width"];
    var c = o["classes"];
    image.css("width", function() {
      if (typeof w !== "undefined") {
        return w;
      } else {
        return "auto";
      }
    });
    image.css("height", function() {
      if (typeof h !== "undefined") {
        return h;
      } else {
        return "auto";
      }
    });
    if (typeof c !== "undefined") {
      var classes = c.split(',');
      for (i = 0; i < classes.length; i++) {
        image.addClass(classes[i]);
      }
    }
  }
});


$('#toc-menu').hover(function() {
	$('.progress').stop(true, false, true).fadeToggle(300);
});
$('.progress').hover(function() {
	$('.progress').stop(true, false, true).fadeToggle(300);
});

// Calculate each progress section
/*
$(window).scroll(function (){
  $("#body-inner h2").each(function(i){
      //console.log($(this));
      var this_top = $(this).offset().top;
      var height = $(this).height();
      var this_bottom = this_top + height;
      var percent = 0;

      // Scrolled within current section
      if (top >= this_top && top <= this_bottom) {
          percent = ((top - this_top) / (height - wrapper_height)) * 100;
          if (percent >= 100) {
              percent = 100;
          //$(".progress .wrapper .bar:eq("+i+") i").css("color", "#fff");
          console.log("aaa");
          }
          else {
              //$(".progress .wrapper .bar:eq("+i+") i").css("color", "#36a7f3");
              console.log("bb");
          }
      }
      else if (top > this_bottom) {
          percent = 100;
          //$(".progress .wrapper .bar:eq("+i+") i").css("color", "#fff");
          console.log("ccc");
      }
      //console.log(i);
      //$(".progress .wrapper .bar:eq("+i+") span").css("width", percent + "%");
      //console.log("ddd");
  });
});*/
