$(function(){
	/*setTimeout(function(){
        $(".calendar-widget").css('right', function(){ return $(this).offset().right; })
                     .animate({"right":"0px"}, "slow");   
    }, 5000);

    $('.close-icon').click(function(){
        $(".calendar-widget").css('right', function(){ return $(this).offset().right; })
                     .animate({"right":"-350px"}, "slow");   
    });*/

     var slideLeftBtn = document.querySelector('#c-button--slide-right');

    slideLeftBtn.addEventListener('click', function(e) {
        var slideLeft = new Menu({
      wrapper: '#o-wrapper',
      type: 'slide-right',
      menuOpenerClass: '.c-button',
      maskId: '#c-mask'
    });
      e.preventDefault;
      slideLeft.open();
    });

    $('.slide-up-menu').click(function(){
        $('.site-switcher-section').slideToggle();
        $('.show-site-switcher').show();
    });

    $('.show-site-switcher').click(function(){
        $('.show-site-switcher').hide();
        $('.site-switcher-section').slideToggle();
    });


    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }


    // Promo for TBTW
    var cookie = getCookie('hidePopup');
    if (cookie == null || false){
        $('#promo').removeClass('hidden');
        setTimeout(function(){ $('#promo').addClass('in'); }, 100);
    }
    $(document).on('click tap', '.promo-close', function(e) {
        e.preventDefault();
        $('#promo').addClass('hidden');
        setCookie('hidePopup', true, 0.25);
    });
    $(document).on('click tap', '.promo-tbtw', function(e) {
        setCookie('hidePopup', true, 1);
    });


    // Annual Appeal experiment    
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('appeal') == "true"){
        $('#appeal').removeClass('hidden');
        setTimeout(function(){ $('#appeal').addClass('in'); }, 100);
    }
    $(document).on('click tap', '.appeal-close-overlay', function(e) {
        e.preventDefault();
        $('#appeal').removeClass('in');
        setTimeout(function(){ $('#appeal').addClass('hidden'); }, 500);
    });


    // Watch Preview events
    $('.watch-preview').click(function(){
        var video = $(this).data('video');
        var description = $(this).data('description');
        var image = $(this).data('image');
        var title = $(this).data('title');

        //set html

        //launch modal

        // Get the modal
        var modal = document.getElementById('Preview-Modal');

        
        // Get the <span> element that closes the modal
        //var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        /*span.onclick = function() {
            modal.style.display = "none";
        }*/

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });


    $('.temporary-marker').click(function(){
        var video = $(this).data('video');
        var description = $(this).data('description');
        var image = $(this).data('image');
        var title = $(this).data('title');

        //set html

        //launch modal

        // Get the modal
        var modal = document.getElementById('tour-modal');

        
        // Get the <span> element that closes the modal
        //var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        /*span.onclick = function() {
            modal.style.display = "none";
        }*/

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });

    $('.panel-title a').click(function(){
        var hasClass = $( this ).children("span").hasClass( "icon-accordion-right" );
        $(".icon-accordion-down").addClass("icon-accordion-right").removeClass("icon-accordion-down");

        if(hasClass) {
            $( this ).children("span").addClass("icon-accordion-down");
            $( this ).children("span").removeClass("icon-accordion-right");
        } else {
            $( this ).children("span").addClass("icon-accordion-right");
            $( this ).children("span").removeClass("icon-accordion-down");
        }
    });

    $('.items-to-slide').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 6000
    });




    var $window = $(window);
    
    var startchange = $('main');
	var offset = startchange.offset();
    var startZone = offset.top;
    
    var $callout = $('#callout');
  
    $window.on('scroll', function() {
        // get the height from the top of the header and add a further 255px for the area where the box will come into view, so that the callout will show if the user scrolls down 255px past the header 
        // get the height from the top of the footer, subtract the height of the viewport and subtract a further 100 pixels, so that the callout will show if the user scrolls within 100 pixels of the footer 
        var endZone = $('footer').offset().top - $window.height() - 200;
        
        // checks if the user's position is past the startZone and further from the top than the endZone
        if ($window.scrollTop() > startZone) {
            // if the condition is true, the box slides from the right to the edge of the page and this takes 150 milliseconds
            $callout.animate({'opacity': '1.0'}, 200);
        } else {
            // if the condition is false or the box is in the middle of animating, it is stopped and the callout then slides off the right hand side of the page, takeing 150 milliseconds
           $callout.stop(true).animate({'opacity': '0'}, 200);
        }


    });


	
	$('.marker').click(function() {
		var _lat = $(this).data('lat');
		var _long = $(this).data('long');
		var _title = $(this).data('title');
		var _body = $(this).data('desc');
        var _embed = $(this).data('embed');
		
		$(this).addClass('tour-modal-active');
		//initialize(_lat, _long);
		
		$('.tour-modal-wrapper h3').text(_title);
		$('.tour-modal-wrapper p').text(_body);
        $('#street-view').html('<iframe src="' + _embed + '" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>')
		$('#tour-modal').modal('show');
		$('.marker').not(this).removeClass('tour-modal-active');
		$('body').css('paddingRight', '0px');
	})
	
	
	$('#tour-modal').on('hidden.bs.modal', function () {
    	$('.marker').removeClass('tour-modal-active');
	})
	
	
      
      //appending modal background inside the bigform-content
        $('.modal-backdrop').appendTo('.tour-page');
      //removing body classes to able click events
        //$('body').removeClass();
        
        
    var panorama;
    function initialize(_lat, _long) {
	    
	    if(panorama) {
		    panorama.setPosition(new google.maps.LatLng(_lat, _long));
			panorama.setPov({ heading: 165, pitch: 0});
			panorama.setZoom({zoom: 1});
			panorama.zoomControl = true;
			panorama.disableDefaultUI = true;
	    } else {
		    panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
	            position: {lat: _lat, lng: _long},
	            pov: {heading: 165, pitch: 0},
	            zoom: 1,
	            zoomControl: true,
	            disableDefaultUI: true 
	        });
	    }
    }
    
        
    
    
});

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}





