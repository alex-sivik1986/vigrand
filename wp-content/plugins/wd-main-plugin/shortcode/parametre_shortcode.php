<?php  
//*-------------------------------btn shortcode---------------------*/
include_once (dirname (__FILE__) . '/tinymce/tinymce.php');
require_once (dirname (__FILE__) . '/tinymce/ajax.php');


add_action('init', 'add_button');

function add_button() {
   if ( current_user_can('edit_posts') &&  current_user_can('edit_pages') ) {
     add_filter('mce_external_plugins', 'add_plugin');
     add_filter('mce_buttons',          'register_button');
   }
}

function register_button($buttons) {
   array_push($buttons, "portfolio");
   array_push( $buttons, 'pricingtable' );
   array_push( $buttons, 'doors_team' );
	 array_push( $buttons, 'testimonial' );
	 array_push( $buttons, 'doors_testimonial' );
	 array_push( $buttons, 'doors_google_map' );

   return $buttons;
}

function add_plugin($plugin_array) {
   $plugin_array['portfolio'] = get_template_directory_uri() . '/inc/js/customcodes.js';
   $plugin_array['pricingtable'] = get_template_directory_uri() . '/inc/js/customcodes.js';
   $plugin_array['doors_team'] = get_template_directory_uri() . '/inc/js/customcodes.js';
	 $plugin_array['testimonial'] = get_template_directory_uri() . '/inc/js/customcodes.js';
	 $plugin_array['doors_testimonial'] = get_template_directory_uri() . '/inc/js/customcodes.js';
	 $plugin_array['doors_google_map'] = get_template_directory_uri() . '/inc/js/customcodes.js';
   return $plugin_array;
}