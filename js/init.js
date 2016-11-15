
		
jQuery(document).ready(function($){

if (gestures.mobile=='mobile'){
	// device detection
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

		$(gestures.container).on('dbltap', function(){
		
			jQuery(location).attr('href', gestures.destination );
	
			}
		).on('swipeleft', function() {

				var post_nav = jQuery('link[rel="next"]');
		
				if ( post_nav ) {
					jQuery(location).attr('href', post_nav.attr('href'));
				}		
	
			}	
		).on('swiperight', function() {

				var post_nav = jQuery('link[rel="prev"]');
		
				if ( post_nav ) {
					jQuery(location).attr('href', post_nav.attr('href'));
				}		
	
			}
		);
	}
}else{


	$(gestures.container).on('dbltap', function(){
		
			jQuery(location).attr('href', gestures.destination );
	
		}
	).on('swipeleft', function() {

			var post_nav = jQuery('link[rel="next"]');
		
			if ( post_nav ) {
				jQuery(location).attr('href', post_nav.attr('href'));
			}		
	
		}	
	).on('swiperight', function() {

			var post_nav = jQuery('link[rel="prev"]');
		
			if ( post_nav ) {
				jQuery(location).attr('href', post_nav.attr('href'));
			}		
	
		}
	);

}

});
