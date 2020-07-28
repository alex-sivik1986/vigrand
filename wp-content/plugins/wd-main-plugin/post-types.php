<?php 
/*-------------- portfolio custom posttyp -----------------------*/
 if( ! function_exists('doors_portfolio_posttype')): 
  function doors_portfolio_posttype() {
    register_post_type( 'portfolio',
      array(
        'labels' => array(
          'name' => __( 'Portfolio', 'doors' ),
          'singular_name' => __( 'portfolio', 'doors' ),
          'add_new' => __( 'Add New Portfolio Item', 'doors' ),
          'add_new_item' => __( 'Add New Portfolio Item', 'doors' ),
          'edit_item' => __( 'Edit portfolio', 'doors' ),
          'new_item' => __( 'Add New Portfolio Item', 'doors' ),
          'view_item' => __( 'View Portfolio Item', 'doors' ),
          'search_items' => __( 'Search Portfolio Item', 'doors' ),
          'not_found' => __( 'No Portfolio Item found', 'doors' ),
          'not_found_in_trash' => __( 'No Portfolio Item found in trash', 'doors' )
        ),
        'public' => true,
        'menu_icon' => 'dashicons-portfolio',
        'supports' => array( 'title', 'thumbnail', 'comments','editor'),
        'capability_type' => 'post',
        'rewrite' => array("slug" => "portfolio"), // Permalinks format
        'menu_position' => 5
      )
    );
    register_taxonomy( 'projet', 'portfolio', array( 'hierarchical' => true,
											                               'label' => 'Categories',
											                               'query_var' => true,
											                               'show_ui' => true,
											                               'rewrite' => true ) );
  }
  add_action( 'init', 'doors_portfolio_posttype' );
endif;


//----------------------- Custom type Team Member -----------------
if( ! function_exists('doors_teammember_posttype')): 
  function doors_teammember_posttype() {
    register_post_type( 'team-member',
      array(
        'labels' => array(
          'name' => __( 'Team Members', 'doors' ),
          'singular_name' => __( 'team member', 'doors' ),
          'add_new' => __( 'Add New Team Member', 'doors' ),
          'add_new_item' => __( 'Add New Team Member', 'doors' ),
          'edit_item' => __( 'Edit Team Member', 'doors' ),
          'new_item' => __( 'Add New Team Member', 'doors' ),
          'view_item' => __( 'View Team Member', 'doors' ),
          'search_items' => __( 'Search Team Member', 'doors' ),
          'not_found' => __( 'No Team Member found', 'doors' ),
          'not_found_in_trash' => __( 'No Team Member found in trash', 'doors' )
        ),
        'public' => true,
        'menu_icon' => 'dashicons-businessman',
        'supports' => array( 'title'),
        'capability_type' => 'post',
        'rewrite' => array("slug" => "team-member"), // Permalinks format
        'menu_position' => 5
      )
    );
  }
  add_action( 'init', 'doors_teammember_posttype' );
endif;
//----------------------- Custom type Testimonials -----------------
if( ! function_exists('doors_testimonials_posttype')):
  function doors_testimonials_posttype() {
    register_post_type( 'testimonials',
      array(
        'labels' => array(
          'name' => __( 'Testimonials', 'doors' ),
          'singular_name' => __( 'testimonial', 'doors' ),
          'add_new' => __( 'Add New Testimonial', 'doors' ),
          'add_new_item' => __( 'Add New Testimonial', 'doors' ),
          'edit_item' => __( 'Edit Testimonial', 'doors' ),
          'new_item' => __( 'Add New Testimonial', 'doors' ),
          'view_item' => __( 'View Testimonial', 'doors' ),
          'search_items' => __( 'Search Testimonial', 'doors' ),
          'not_found' => __( 'No Testimonials found', 'doors' ),
          'not_found_in_trash' => __( 'No Testimonials found in trash', 'doors' )
        ),
        'public' => true,
        'menu_icon' 					=> 			'dashicons-format-quote',
        'supports' => array( 'title', 'excerpt'),
        'capability_type' => 'post',
        'rewrite' => array("slug" => "testimonials"), // Permalinks format
        'menu_position' => 5
      )
    );
  }
  add_action( 'init', 'doors_testimonials_posttype' );
endif;