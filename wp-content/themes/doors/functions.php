<?php
/**
 *----------------- include ------------------------------------------
 */
include_once( get_template_directory() .'/inc/tools.php' );
include_once( get_template_directory() .'/inc/plugins/plugins.php' );
include_once( get_template_directory() .'/inc/panel.php' );
include_once(get_template_directory() .'/inc/meta-box.php');
include_once(get_template_directory() .'/inc/mega-menu.php');
require_once( get_template_directory() .  '/inc/aq_resizer.php');







function doors_setup() {
	//----------- text domaine----------
	load_theme_textdomain( 'doors', get_template_directory().'/languages' );

	if ( function_exists( 'add_theme_support' ) ) {
		add_theme_support( 'post-thumbnails' );
		add_theme_support('post-formats', array('gallery', 'link', 'quote', 'video', 'audio'));
		add_theme_support('automatic-feed-links');
		add_theme_support( 'woocommerce' );
		add_theme_support('custom-background');
		add_theme_support( 'title-tag' );
	}

	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary Navigation', 'doors' ),
		'right-menu' => esc_html__( 'Right', 'doors' ),
		'menu_button' => esc_html__( 'button menu', 'doors' ),
	) );

}
add_action( 'after_setup_theme', 'doors_setup' );

/*
 * ---------- Page Title----------
 */
function doors_wp_title( $title, $sep ) {

	if ( is_feed() )
		return $title;

	// Add the site description for the home/front page.
	$site_description = get_bloginfo( 'name', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		$title = esc_html__( 'Home - ', 'doors' ) ."$title";


	return $title;
}
add_filter( 'wp_title', 'doors_wp_title', 10, 2 );

/*-----------------add Body Classes------------------------------------------*/
function doors_body_classes( $classes ) {
	if ( doors_get_option( 'doors_box_wrapper' ) == 'on' ) {
		$classes[] = 'bg_body_color';
	}
	return $classes;
}
add_filter( 'body_class','doors_body_classes' );

function doors_theme_add_editor_styles() {
	add_editor_style( 'custom-editor-style.css' );
}
add_action( 'admin_init', 'doors_theme_add_editor_styles' );

/**
 *-----------------add sidebar------------------------------------------
 */

function doors_widgets_init() {
	register_sidebar(array(
		'name' => esc_html__('Sidebar Right','doors'),
		'id' => 'sidebar-1',
		'before_widget' => '<section>',
		'after_widget' => '</section>',
		'before_title' => '<h5 class="block-title">',
		'after_title' => '</h5>',
	));
	register_sidebar(array(
		'name' => esc_html__( 'Sidebar Left','doors'),
		'id' => 'sidebar-2',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget' => '</section>',
		'before_title' => '<h5 class="block-title">',
		'after_title' => '</h5>',
	));

	register_sidebar(array(
		'name' => esc_html__('Footer 1st column','doors'),
		'id'   => 'footer',
		'before_widget' => '<div>',
		'after_widget' => '</div>',
		'before_title' => '<h5 class="block-title">',
		'after_title' => '</h5>',
	));
	register_sidebar(array(
		'name' => esc_html__('Footer 2nd column','doors'),
		'id'   => 'footer_columns_tow',
		'before_widget' => '<div>',
		'after_widget' => '</div>',
		'before_title' => '<h5 class="block-title">',
		'after_title' => '</h5>',
	));
	register_sidebar(array(
		'name' => esc_html__('Footer 3rd column','doors'),
		'id'   => 'footer_columns_three',
		'before_widget' => '<div>',
		'after_widget' => '</div>',
		'before_title' => '<h5 class="block-title">',
		'after_title' => '</h5>',
	));
	register_sidebar(array(
		'name' => esc_html__('Footer 4th column','doors'),
		'id'   => 'footer_columns_four',
		'before_widget' => '<div>',
		'after_widget' => '</div>',
		'before_title' => '<h5 class="block-title">',
		'after_title' => '</h5>',
	));

	register_sidebar(array('name' => esc_html__( 'Woocommerce Sidebar','doors' ),
		'id' => 'shop-widgets',
		'description' => esc_html__( 'Appears on the shop page of your website.', 'doors' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s shop-widgets">',
		'after_widget' => '</div>',
		'before_title' => '<h4 class="widget-title">',
		'after_title' => '</h4>',
	));
}

add_action( 'widgets_init', 'doors_widgets_init' );


/**
 *--------------- Image presets-----------
 */

add_image_size( 'doors_small-thumb',         100, 70, true );
add_image_size( 'doors_sidebar-thumb',         160, 150, true );
add_image_size( 'doors_recent-blog-h',         465, 243, true );
add_image_size( 'doors_recent-blog-v',         390, 308, true );
add_image_size( 'doors_blog-thumb',            800, 450, true );
add_image_size( 'doors_650x350',               650, 350, true );
add_image_size( 'doors_team',                  550, 576, true );
add_image_size( 'doors_team_member_slider',    744, 833, true );
add_image_size( 'doors_team_member_carousel',  370, 370, true );
add_image_size( 'doors_sidebar-thumb',         140, 140, true );
add_image_size( 'doors_1900x620',              1900, 620, true );
add_image_size( 'doors_portfolio',             946, 802, true );

/**
 * --------------- Number of Products to dispaly per page (9) -----------
 */
add_filter( 'loop_shop_per_page', create_function( '$cols', 'return 9;' ), 20 );


/**
 * ---------------load scripts and styles--------------------------------
 */

function doors_fonts_url($font_body_name, $doors_font_weight_style, $doors_main_text_font_subsets) {
	$doors_font_url = '';

	/*
	Translators: If there are characters in your language that are not supported
	by chosen font(s), translate this to 'off'. Do not translate into your own language.
	 */
	if ( 'off' !== _x( 'on', 'Google font: on or off', 'doors' ) ) {
		$doors_font_url = add_query_arg( 'family', urlencode( $font_body_name . ':' . $doors_font_weight_style . '&subset=' . $doors_main_text_font_subsets ), "//fonts.googleapis.com/css" );
	}
	return $doors_font_url;
}



function doors_load_js_css_file() {
	/*----------google -fonts ------------------*/
	$doors_font_body_name = doors_get_option('doors_body_font_familly',"default");
	$doors_font_weight_style = doors_get_option('doors_body_font_weight_list', '400');
	$doors_main_text_font_subsets = doors_get_option('doors_main-text-font-subsets');

	$font_header_name = doors_get_option('doors_head_font_familly',"default");
	$doors_heading_font_weight_style = doors_get_option('doors_heading-font-weight-style-list', '700');
	$doors_heading_text_font_subsets = doors_get_option('doors_heading-text-font-subsets');

	$doors_navigation_font_familly = doors_get_option('doors_navigation_font_familly',"default");
	$doors_navigation_font_weight_style = doors_get_option('doors_navigation-font-weight-style-list');
	$doors_navigation_text_font_subsets = doors_get_option('doors_navigation-text-font-subsets');



	$protocol = is_ssl() ? 'https' : 'http';

	if(is_rtl()){
		wp_enqueue_style('doors_body_google_fonts',$protocol.'://fonts.googleapis.com/earlyaccess/droidarabickufi.css');
	}elseif($doors_font_body_name != "default" && $doors_font_weight_style!=""){
		wp_enqueue_style('doors_body_google_fonts',doors_fonts_url($doors_font_body_name, $doors_font_weight_style, $doors_main_text_font_subsets), array(), '1.0.0' );
	}else{
		wp_enqueue_style('doors_body_google_fonts',$protocol.'://fonts.googleapis.com/css?family=Archivo+Narrow:400,700|Lato:400,700');
	}


	if($font_header_name != "default" && $doors_heading_font_weight_style!=""){
		wp_enqueue_style('doors_header_google_fonts',doors_fonts_url($font_header_name, $doors_heading_font_weight_style, $doors_heading_text_font_subsets), array(), '1.0.0' );
	}

	if($doors_navigation_font_familly != "default" && $doors_navigation_font_weight_style!=""){
		wp_enqueue_style('doors_navigation_google_fonts',doors_fonts_url($doors_navigation_font_familly, $doors_navigation_font_weight_style, $doors_navigation_text_font_subsets), array(), '1.0.0' );
	}

	wp_enqueue_style( 'animation-custom',  get_template_directory_uri() . "/css/animate-custom.css" );
	wp_enqueue_style( 'doors_app',       get_template_directory_uri() . "/css/app.css" );
	wp_enqueue_style( 'component',         get_template_directory_uri() . "/css/vendor/component.css" );
	wp_enqueue_style('doors_style',       get_template_directory_uri() . '/style.css');
	wp_enqueue_style('doors_owlcarousel',    get_template_directory_uri() . "/css/owl.carousel.css");
	wp_enqueue_style('woocommerce',        get_template_directory_uri() . "/css/woocommerce.css");
	wp_enqueue_style('mediaelementplayer', get_template_directory_uri() . "/css/mediaelementplayer.css");
	wp_enqueue_style('font-awesome',       get_template_directory_uri() . "/css/font-awesome.min.css");
	wp_enqueue_style('doors_custom-line',    get_template_directory_uri() . '/style.css');


	if ( is_singular() && get_option( 'thread_comments' ) )

  wp_enqueue_script( 'comment-reply' );
	wp_enqueue_script('doors_plugins',           get_template_directory_uri() . "/js/plugins.js", array( 'jquery' ) );
  wp_enqueue_script('foundation-reveal', get_template_directory_uri() . "/js/foundation/foundation.reveal.js",array( 'jquery' ));
  wp_enqueue_script('foundation-equalize', get_template_directory_uri() . "/js/foundation/foundation.equalizer.js", array( 'jquery' ) );

	wp_enqueue_script('doors_shortcodes-js',     get_template_directory_uri() . "/js/shortcode/script-shortcodes.js", array( 'jquery' ) );
	wp_enqueue_script('googleapismap',     "https://maps.googleapis.com/maps/api/js?v=3.exp", array( 'jquery' ), 3, true );
	wp_enqueue_script('doors_wd_owlcarousel',    get_template_directory_uri() . "/js/wd_owlcarousel.js", array( 'jquery' ) );
	wp_enqueue_script('doors_scripts',           get_template_directory_uri() . '/js/scripts.js',array( 'jquery', 'hoverIntent' ));


}
add_action( 'wp_enqueue_scripts', 'doors_load_js_css_file' );


function doors_style_customizer(){

	global $wp_query;
	if(!is_search() and !is_404()){
		$doors_thePageID = $wp_query->post->ID;
	}else{
		$doors_thePageID = "";
	}


	$doors_style = get_post_meta($doors_thePageID, 'doors_page_title_area_style', true);
	$doors_page_bg_img = get_post_meta($doors_thePageID, 'doors_page_title_area_bg_img', true);


	//********* inline style ***************/
	$doors_custom_css = "";
	$doors_custom_css .= "";
	$doors_custom_css .= ".l-footer-columns { background-color: " . doors_get_option('footer_bg_color') . "}";
	$doors_custom_css .= ".l-footer-columns, .l-footer-columns .block-title , .l-footer-columns ul li a { color: " . doors_get_option('footer_text_color') . "}";
	$doors_custom_css .= ".l-footer { background-color: " . doors_get_option('copyright_bg_color') . "; color: " . doors_get_option('copyright_text_color') . ";}";
	$doors_footer_bg_img = doors_get_option('doors_footer_bg_image');

	if(isset($doors_footer_bg_img) && $doors_footer_bg_img!='') {
		$doors_custom_css .= "
            .l-footer-columns {
              background-image: url('$doors_footer_bg_img');
              background-size: cover;

            }";
	}
	if(is_page() & ($doors_style != 'standard') ){
		//-------------title page--------------
		$doors_custom_css .= "
      .titlebar {";
		if($doors_page_bg_img != "") {
			$doors_custom_css .= "background-image: url($doors_page_bg_img) ".get_post_meta($doors_thePageID, 'doors_page_title_area_bg_color', true) .";";
		}
		$doors_custom_css .= "width:100%;
        text-align:".get_post_meta($doors_thePageID, 'doors_page_title_position', true).";
        background-size: cover;
      }
      #page-title,.breadcrumbs a{
        color:".get_post_meta($doors_thePageID, 'doors_page_title_color', true) .";
      }";
	}

	$doors_custom_css .= "
	  .contain-to-grid .top-bar .text-right  {
			background : ".doors_get_option('adress_bar_bgcolor').";
		}
	 
	  .contain-to-grid .top-bar .text-right .address_bar .bar .address, 
	  .contain-to-grid .top-bar .text-right .address_bar .bar .text_add, 
	  .contain-to-grid .top-bar .text-right .address_bar .address_icon i {
			color : ".doors_get_option('adress_bar_color').";
		}
		";

	$doors_custom_css .= "
 							body {
 								background : ".doors_get_option('wrapper_bg_color').";
 							}
 			";

	if(doors_get_option('doors_box_wrapper')=='on') {
		$doors_custom_css .= "
 							.bg_body_color {
 								background : ".doors_get_option('wrapper_bg_color').";
 							}
 			";
	}
	if( is_rtl() ){
		$doors_custom_css .= "body, p, #lang_sel_list {
            font-family : 'Droid Arabic Kufi', serif;
          } ";

		$doors_custom_css .= "h1, h2, h3, h4, h5, h6 {
              font-family : 'Droid Arabic Naskh', serif;
            } ";
	}else{
		if((doors_get_option('doors_body_font_familly')!='default') && (doors_get_option('doors_body_font_familly')!= false)){
			$doors_custom_css .= "body, body p {
          font-family :'". doors_get_option('doors_body_font_familly', 'Helvetica')."';
          font-weight :" . doors_get_option('doors_font-weight-style').";
          font-style:'". doors_get_option('doors_body_font_style')."';
         font-size :'". doors_get_option('doors_body_font_size') ."';
        }";
			if (doors_get_option('doors_main_text_lettre_spacing') != false && doors_get_option('doors_main_text_lettre_spacing') != "") {
				$doors_custom_css .= "body, body p {
            letter-spacing :" . doors_get_option('doors_main_text_lettre_spacing').";
          }";
			}

		}else {
			$doors_custom_css .= "body, body p {
          font-family: 'Helvetica';
          font-weight :" . doors_get_option('doors_font-weight-style').";
        }";
			if (doors_get_option('doors_main_text_lettre_spacing') != false && doors_get_option('doors_main_text_lettre_spacing') != "") {
				$doors_custom_css .= "body, body p {
            letter-spacing :" . doors_get_option('doors_main_text_lettre_spacing').";
          }";
			}
		}
		if((doors_get_option('doors_head_font_familly')!='default') && (doors_get_option('doors_head_font_familly')!= false) ){
			$doors_custom_css .= "h1, h2, h3, h4, h5, h6, .menu-list a {
          font-family :'". doors_get_option('doors_head_font_familly', 'Helvetica')."';
          font-weight :" . doors_get_option('doors_heading-font-weight-style').";
          font-style :'". doors_get_option('doors_head_font_style') ."';
          font-size :'". doors_get_option('doors_head_font_size') ."';
        }";
			if (doors_get_option('doors_heading_text_lettre_spacing') != false && doors_get_option('doors_heading_text_lettre_spacing') != "") {
				$doors_custom_css .= "h1, h2, h3, h4, h5, h6, .menu-list a {
            letter-spacing :" . doors_get_option('doors_heading_text_lettre_spacing').";
          }";
			}
		}else {
			$doors_custom_css .= "h1, h2, h3, h4, h5, h6, .menu-list a {
          font-family: 'Helvetica';
          font-weight :" . doors_get_option('doors_heading-font-weight-style', '700').";
          font-style :'". doors_get_option('doors_head_font_style', 'normal') ."';
          font-size :'". doors_get_option('doors_head_font_size', '12px') ."';
        }";
			if (doors_get_option('doors_heading_text_lettre_spacing') != false && doors_get_option('doors_heading_text_lettre_spacing') != "") {
				$doors_custom_css .= "h1, h2, h3, h4, h5, h6, .menu-list a {
            letter-spacing :" . doors_get_option('doors_heading_text_lettre_spacing').";
          }";
			}
		}

		if((doors_get_option('doors_navigation_font_familly')!='default') && (doors_get_option('doors_navigation-font-weight-style')!= false) ){
			$doors_custom_css .= ".top-bar-section ul.menu > li > a:not(.button) {
            font-family : '" . doors_get_option('doors_navigation_font_familly', 'Helvetica') . "';
            font-weight : " . doors_get_option('doors_navigation-font-weight-style') . ";
			font-style : '" . doors_get_option('doors_navigation_font_style')  . "';
    	    font-size :'". doors_get_option('doors_navigation_font_size') ."';
          }";
			if (doors_get_option('doors_navigation_text_lettre_spacing') != false && doors_get_option('doors_navigation_text_lettre_spacing') != "") {
				$doors_custom_css .= ".top-bar-section ul li > a {
              letter-spacing :" . doors_get_option('doors_navigation_text_lettre_spacing').";
            }";
			}
		}else {
			$doors_custom_css .= ".top-bar-section ul li > a {
              font-family: 'Helvetica';
              font-weight : " . doors_get_option('doors_navigation-font-weight-style', '400') . ";
              font-style : '" . doors_get_option('doors_navigation_font_style', 'normal')  . "';
              font-size :'". doors_get_option('doors_navigation_font_size', '12') ."';
            }";
			if (doors_get_option('doors_navigation_text_lettre_spacing') != false && doors_get_option('doors_navigation_text_lettre_spacing') != "") {
				$doors_custom_css .= ".top-bar-section ul li > a {
                letter-spacing :" . doors_get_option('doors_navigation_text_lettre_spacing').";
              }";
			}
		}
	}
	$doors_custom_css .= "

		.primary-color_bg, .square-img > a:before,
		.boxes .box > a:before, .boxes .box .flipper a:before,

		.doors_onepost .title-block span, .one_post_box .box_image .titel_icon .box_icon,
		.one_post_box .more, .boxes .box-container > a:before,
		.boxes .box-container .flipper a:before,
		.boxes.small.layout-5 .box-icon, .boxes.small.layout-5-inverse .box-icon,
		.boxes.small.layout-6 .box-icon i.fa, .carousel_blog span.tag a,
		.wd-carousel-container .carousel-icon i, .search_box input[type='submit'],
		table thead, table tfoot, .block-block-17, .row.call-action, .blog-info,
		button.dark:hover, button.dark:focus, .button.dark:hover, .button.dark:focus,
		span.wpb_button:hover, span.wpb_button:focus,.sidebar #searchsubmit,
		.woocommerce .widget_price_filter .ui-slider .ui-slider-range,
		.woocommerce-page .widget_price_filter .ui-slider .ui-slider-range,
		.products .product .button,
		.woocommerce #content input.button.alt, .woocommerce #respond input#submit.alt, .woocommerce a.button.alt,
		.woocommerce button.button.alt, .woocommerce input.button.alt, .woocommerce-page #content input.button.alt,
		.woocommerce-page #respond input#submit.alt, .woocommerce-page a.button.alt,
		.woocommerce-page button.button.alt, .woocommerce-page input.button.alt,
		.woocommerce #content input.button:hover, .woocommerce #respond input#submit:hover,
		.woocommerce a.button:hover, .woocommerce button.button:hover,
		.woocommerce input.button:hover, .woocommerce-page #content input.button:hover,
		.woocommerce-page #respond input#submit:hover, .woocommerce-page a.button:hover,
		.woocommerce-page button.button:hover, .woocommerce-page input.button:hover,
		.woocommerce span.onsale, .woocommerce-page span.onsale,
		.woocommerce-page button.button, .widget_product_search #searchsubmit, .widget_product_search #searchsubmit:hover,
		.sidebar #searchsubmit, .l-footer-columns #searchsubmit,.page-numbers.current,.post-password-form input[type='submit'],
		.page-links a:hover, .request-quote.right, input.wpcf7-submit, div.vc_tta-color-grey.vc_tta-style-classic .vc_tta-panel.vc_active .vc_tta-panel-heading,
		div.vc_tta-color-grey.vc_tta-style-classic .vc_tta-tab.vc_active > a, .sidebar-left,
		.blog-post .sticky .blog-info, .team-member-slider .owl-dots .owl-dot.active span, .team-member-slider .owl-theme .owl-dots .owl-dot:hover span,
		.team-member-carousel .owl-dots .owl-dot.active span, .team-member-carousel .owl-theme .owl-dots .owl-dot:hover span,
		#comments ul.commentlist li.comment section.comment .comment-reply-link, #comments ol.commentlist li.comment section.comment .comment-reply-link
		  {
						background :		".doors_get_option('primary_color','rgba(38,95,180,1)').";
		}

		.blog-post .sticky .blog-info {
			background: ".doors_get_option('primary_color','rgba(38,95,180,1)')." repeating-linear-gradient(-55deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) 10px, rgba(0, 0, 0, 0) 10px, rgba(0, 0, 0, 0) 20px) repeat scroll 0 0;
		}

		.sidebar #s:active,
    .sidebar #s:focus, .boxes.layout-3 .box-icon, div.vc_tta-color-grey.vc_tta-style-classic .vc_tta-panel.vc_active .vc_tta-panel-heading,
    div.vc_tta-color-grey.vc_tta-style-classic .vc_tta-tab.vc_active > a {
      border-color :    ".doors_get_option('primary_color','rgba(38,95,180,1)').";
    }
    div.vc_tta-color-grey.vc_tta-style-classic .vc_tta-tab > a {
      border-bottom-color :    ".doors_get_option('primary_color','rgba(38,95,180,1)').";
    }
     .wd-image-text h4:after, .wd-title-element:after {
     background-color :    ".doors_get_option('primary_color','')." !important;
     }
    .blog-info .arrow {
      border-color: transparent ".doors_get_option('primary_color','rgba(38,95,180,1)').";
		}

		.primary-color_color, h1, h2, h3, h4, h5, h6, .layout-4 .box-container h3.box-title-4, .wd-title-element, .wd-image-text h4, a, a:focus, a.active, a:active, a:hover,section.corporate .menu-item a i,
		 .box-container:hover .box-title, .blog-posts i, div.boxes.small.layout-3 .box-icon i {
				color : 	".doors_get_option('primary_color','rgba(38,95,180,1)')." ;
		}
		 .boxes.small.layout-3 .box-icon i,
		  div.boxes.small.layout-3:hover .box-icon i {
		   color: rgba(255,255,255,1);
		 }

		.blog-posts h2 a, .breadcrumbs > *, .breadcrumbs,  .woocommerce .woocommerce-breadcrumb, .woocommerce-page .woocommerce-breadcrumb {
			color : ".doors_get_option('secondary_color')."
		}
		button, .button, button:hover, button:focus, .button:hover, .button:focus, .products .product:hover .button,
		.woocommerce-product-search > input[type='submit'] {
			background-color : ".doors_get_option('secondary_color')."
		}
		.request-quote.right{
		  color : 	".doors_get_option('primary_color','rgba(38,95,180,1)')." ;
		}

		.corporate-layout .top-bar-section ul.menu > li > a,
		.creative-layout .top-bar-section ul li > a {
      color :    ".doors_get_option('navigation_text_color','#000').";
    }

    .contain-to-grid.sticky .top-bar-section .menu-menu-container ul  {
			background-color:" . doors_get_option('navigation_bg_color_sticky','#FFF') . ";
		}

		.l-footer-columns, .l-footer-columns .block-title , .l-footer-columns ul li a {
			color: " . doors_get_option('footer_text_color') . "
		}

		.l-footer {
			background-color : ".doors_get_option('copyright_bg'). "
		}

		.contain-to-grid.sticky.fixed , .top-bar , .corporate-layout .contain-to-grid.sticky, header.l-header,.corporate-layout .contain-to-grid {
			background-color : ".doors_get_option('header_bg'). "
		}

		#spaces-main {
			background-color : ".doors_get_option('container_bg'). "
		}";


	$doors_custom_css .= html_entity_decode( doors_get_option('doors_theme_custom_css') );
	$doors_custom_css .= "
											.blog-info .arrow {
    									border-left-color:".doors_get_option('primary_color','rgba(38,95,180,1)')." ;
												}
												.ui-accordion-header-active, .ui-tabs-active, .box-icon {
													border-top-color:".doors_get_option('primary_color','rgba(38,95,180,1)')."
												}

												";

	wp_enqueue_style( 'doors_custom_styler',   get_template_directory_uri() . "/css/custom_styler.css" );
	wp_add_inline_style( 'doors_custom_styler', $doors_custom_css );
}

add_action( 'wp_enqueue_scripts', 'doors_style_customizer' );



// add a link to the WP Toolbar
function doors_toolbar_link($wp_admin_bar) {
	$args = array(
		'id' => 'doors_theme_options',
		'title' => 'Theme Options',
		'href' => get_home_url().'/wp-admin/themes.php?page=doors-theme-option',
		'meta' => array(
			'class' => 'wd-theme-options',
			'title' => 'Theme Settings Panel'
		)
	);
	$wp_admin_bar->add_node($args);
}
add_action('admin_bar_menu', 'doors_toolbar_link', 9999999);

/**
 * ---------------menu--------------------------------
 */ $doors_count = 1;
class doors_top_bar_walker extends Walker_Nav_Menu {
	static protected $menu_bg_test;
	function start_el(&$output, $item, $depth = 0, $args = Array(), $id = 0) {

		$doors_class = "";
		if(is_object($args)){
			global $doors_count;
			$icon=$item->classes[1];
			if($item->mega_menu == 1) {
				$doors_class= 'doors_mega-menu';
			}
			$doors_icon = $item->mega_menu_icon ;
			self::$menu_bg_test = $item->mega_menu_bg_image;
			$indent = ($depth) ? str_repeat("\t", $depth) : '';
			$class_names = $value = '';

			$classes = empty($item -> classes) ? array() : (array)$item -> classes;
			$classes[] = ($item -> current) ? 'active' : '';
			$classes[] = ($args -> has_children) ? ' color-1 has-dropdown not-click' : '';
			$args -> link_before = (in_array('section', $classes)) ? '<label>' : '';
			$args -> link_after = (in_array('section', $classes)) ? '</label>' : '';
			$output .= (in_array('section', $classes));
			$class_names = ($args -> has_children) ? 'has-dropdown not-click '.$doors_class : '';
			$parent = $item -> menu_item_parent;
			if ($parent == 0) {
				$doors_count++;
			}

			$class_names .= ' color-' . $doors_count;
			$class_names = strlen(trim($class_names)) > 0 ? ' class="' . esc_attr($class_names) . '"' : '';
			$output .= $indent . '
			<li id="menu-item-' . $item -> ID . '"' . $value . $class_names . '>';

			$attributes = !empty($item -> attr_title) ? ' title="' . esc_attr($item -> attr_title) . '"' : '';
			$attributes .= !empty($item -> target) ? ' target="' . esc_attr($item -> target) . '"' : '';
			$attributes .= !empty($item -> xfn) ? ' rel="' . esc_attr($item -> xfn) . '"' : '';
			$attributes .= !empty($item -> url) ? ' href="' . esc_url($item -> url) . '"' : '';

			$attributes .= ' class="has-icon"';

			$item_output = $args -> before;
			$item_output .= (!in_array('section', $classes)) ? '
			<a' . $attributes . '>' : '';
			if(($icon != '') and ($icon != '---- None ----'))  {

				$item_output .= '<i class="'.$doors_icon.' fa"></i> ';
			}
			$item_output .= $args -> link_before . apply_filters('the_title', $item -> title, $item -> ID);
			$item_output .= $args -> link_after;
			$item_output .= (!in_array('section', $classes)) ? '</a>' : '';
			$item_output .= $args -> after;


			$output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
		}


	}

	function end_el(&$output, $item, $depth = 0, $args = Array()) {
		$output .= '
</li>' . "\n";
	}

	function start_lvl(&$output, $depth = 0, $args = Array()) {
		$indent = str_repeat("\t", $depth);
		if (isset($menu_bg_test) && $menu_bg_test != "") {
			$output .= "\n" . $indent . '
<ul class="sub-menu dropdown " style = "background-image : url('.self::$menu_bg_test.')">
	'. "\n";
		}
		else {
			$output .= "\n" . $indent . '
			<ul class="sub-menu dropdown ">
	'. "\n";
		}

	}

	function end_lvl(&$output, $depth = 0, $args = Array()) {
		$indent = str_repeat("\t", $depth);
		$output .= $indent .


			'

 </ul>' . "\n";
	}

	function display_element($element, &$children_elements, $max_depth, $depth = 0, $args, &$output) {
		$id_field = $this -> db_fields['id'];
		if (is_object($args[0])) {
			$args[0] -> has_children = !empty($children_elements[$element -> $id_field]);
		}
		return parent::display_element($element, $children_elements, $max_depth, $depth, $args, $output);
	}

}
function doors_main_menu_fallback() {
	echo '<div class="empty-menu">';
	echo esc_html__( 'Please assign a menu to the primary menu location under Menus Settings', 'doors' ); ?>
	</div> <?php
}
/**
 * Sets up the content width value based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) )
	$content_width = 625;

/*---------wooocomerce---------*/
//Reposition WooCommerce breadcrumb
function doors_woocommerce_remove_breadcrumb(){
	remove_action(
		'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);
}
add_action(
	'woocommerce_before_main_content', 'doors_woocommerce_remove_breadcrumb'
);

function doors_woocommerce_custom_breadcrumb(){
	woocommerce_breadcrumb();
}

add_action( 'woo_custom_breadcrumb', 'doors_woocommerce_custom_breadcrumb' );







// Ensure cart contents update when products are added to the cart via AJAX (place the following in functions.php)
add_filter( 'woocommerce_add_to_cart_fragments', 'doors_woocommerce_header_add_to_cart_fragment' );

function doors_woocommerce_header_add_to_cart_fragment( $fragments ) {
	ob_start();
	?>
	<a class="cart-contents" href="<?php echo WC()->cart->get_cart_url(); ?>" title="<?php esc_html_e( 'View your shopping cart','doors' ); ?>"><?php echo sprintf (esc_html__( '%d item', 'doors', WC()->cart->cart_contents_count ), WC()->cart->cart_contents_count ); ?> - <?php echo WC()->cart->get_cart_total(); ?></a>
	<?php

	$fragments['a.cart-contents'] = ob_get_clean();

	return $fragments;
}


/*--------------------meta box multi image uploade-------------------*/
// add meta box
function doors_multiple_image () {
	add_meta_box('doors_meta_box_multiple_image', 'Multiple Image', 'doors_upload_image','post');
}
add_action( 'add_meta_boxes', 'doors_multiple_image' );
function doors_upload_image() {
	global $post;?>

	<div class="add_portfolio_images">
		<h3>Portfolio Images (multiple upload)</h3>
		<div class="add_portfolio_images_inner">

			<button class="wd-gallery-upload button button-primary button-large">Browse</button>
			<ul class="wd-gallery-images-holder clearfix">
				<?php
				$portfolio_image_gallery_val = get_post_meta( $post->ID, 'doors_portfolio-image-gallery', true );
				if($portfolio_image_gallery_val!='' ) $portfolio_image_gallery_array=explode(',',$portfolio_image_gallery_val);

				if(isset($portfolio_image_gallery_array) && count($portfolio_image_gallery_array)!=0):

					foreach($portfolio_image_gallery_array as $gimg_id):

						$gimage_wp = wp_get_attachment_image_src($gimg_id,'thumbnail', true);
						echo '<li class="wd-gallery-image-holder"><img src="'.$gimage_wp[0].'"/></li>';

					endforeach;

				endif;
				?>
			</ul>
			<input type="hidden" value="<?php echo esc_attr($portfolio_image_gallery_val); ?>" id="doors_portfolio-image-gallery" name="doors_portfolio-image-gallery">
		</div>
	</div>
	<?php
}
//save meta box
if(isset($_POST['doors_portfolio-image-gallery'])){
	function doors_save_meta_box_image($post_id) {
		update_post_meta($post_id, 'doors_portfolio-image-gallery', $_POST['doors_portfolio-image-gallery']);
	}
	add_action('save_post', 'doors_save_meta_box_image' );
}
//ajax
if (!function_exists('doors_gallery_upload_get_images')){
	function doors_gallery_upload_get_images(){
		$ids=$_POST['ids'];
		$ids=explode(",",$ids);
		foreach($ids as $id):
			$image = wp_get_attachment_image_src($id,'thumbnail', true);
			echo '<li class="wd-gallery-image-holder"><img src="'.$image[0].'"/></li>';
		endforeach;
		exit;
	}
}
add_action( 'wp_ajax_doors_gallery_upload_get_images', 'doors_gallery_upload_get_images');

// retrieves the attachment ID from the file URL
function doors_get_image_id($image_url) {
	global $wpdb;
	$image_url   = esc_sql( $image_url );
	$attachment = $wpdb->get_col($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE guid='%s';", $image_url ));
	if (isset($attachment[0])) {
		return $attachment[0];
	}
}

// initialize options
if (!function_exists('doors_initialize_options')) {
	function doors_initialize_options() {

		$options_array = get_option("doors_options_array");

		if( !$options_array ) {
			$options_array = array(
				'doors_show_logo' => "",
				'doors_show_cart' => "",
				'doors_show_top_social_bare' => "",
				'doors_box_wrapper' => "",
				'doors_menu_in_grid' => "",
				'doors_menu_sticky' => "",
				'doors_show_title' => "",
				'doors_footer_bg_image' => "",
				'footer_bg_color' => "",
				'footer_text_color' => "",
				'doors_copyright' => "",
				'doors_poweredby' => "",
				'copyright_text_color' => "",
				'doors_logo' => "",
				'doors_404_page' => "",
				'doors_home_page' => "",
				'doors_favicon' => "",
				'doors_theme_custom_css' => "",
				'wrapper_bg_color' => "",
				'primary_color' => "",
				'secondary_color' => "",
				'adress_bar_color' => "",
				'social_bar_color' => "",
				'copyright_bg' => "",
				'header_bg' => "",
				'container_bg' => "",
				'doors_footer_columns' => "",
				'navigation_text_color' => "",
				'navigation_bg_color_sticky' => "",
				'footer_text_color' => "",
				'doors_copyright' => "",
				'language_area_html' => "",
				'doors_show_wpml_widget' => '',
				'twitter' => "",
				'facebook' => "",
				'flickr' => "",
				'vimeo' => "",
				'phone' => "",
				'adress' => "",
				'doors_body_font_familly' => "lato",
				'doors_body_font_style' => "",
				'doors_font-weight-style' => "",
				'doors_main_text_lettre_spacing' => '',
				'doors_main-text-font-subsets' => "",
				'doors_head_font_familly' => "Helvetica",
				'doors_head_font_style' => "",
				'doors_heading-font-weight-style' => "",
				'doors_heading-text-font-subsets' => "",
				'doors_heading_text_lettre_spacing' => "",
				'doors_navigation_font_familly' => "",
				'doors_navigation_font_style' => "",
				'doors_navigation-font-weight-style' => "",
				'doors_navigation-text-font-subsets' => "",
				'doors_navigation_text_lettre_spacing' => "",
				'doors_menu_style' => "",
				'doors_theme_custom_js' => ""
			);
			update_option("doors_options_array",$options_array);
		}
	}
}


// get options value
if (!function_exists('doors_get_option')) {
	function doors_get_option($doors_option_key , $doors_option_default_value = null) {
		doors_initialize_options();
		$options_array = get_option("doors_options_array");
		$doors_meta_value = "";
		if (array_key_exists($doors_option_key, $options_array)) {
			if (isset($options_array[$doors_option_key]) && !empty($options_array[$doors_option_key])) {
				$doors_meta_value = esc_attr($options_array[$doors_option_key]);
			}

			if ($doors_meta_value == "") {
				$doors_meta_value = $doors_option_default_value;
			}
		}

		return $doors_meta_value;
	}
}

// get options value
if (!function_exists('doors_save_option')) {
	function doors_save_option($doors_option_key, $doors_option_value = null) {
		$options_array = get_option("doors_options_array");
		$options_array[$doors_option_key] = $doors_option_value;
		update_option("doors_options_array",$options_array);
	}
}



if(!function_exists('doors_get_categories')) {
	function doors_get_categories( $taxonomy = '') {
		$args = array(
			'type' => 'post',
			'hide_empty' => 0
		);

		$output = array();

		$args['taxonomy'] = $taxonomy;
		$categories = get_categories( $args);

		if(!empty($categories) && is_array($categories)) {
			foreach( $categories as $category ) {
				if(is_object($category)) {
					$output[$category->name] = $category->slug;
				}
			}
		}

		return $output;
	}
}

function doors_theme_custom_js() {

	?>
	<script type="text/javascript">
		jQuery(document).foundation();
	</script>

	<?php

	if(doors_get_option('doors_theme_custom_js','') !=''){
		echo '<script type="text/javascript">
				'.doors_get_option('doors_theme_custom_js').'
			</script>';
	}

}
add_action( 'wp_footer', 'doors_theme_custom_js' );


function doors_removeslashes($string){
	$string = implode("",explode("\\",$string));

	return stripslashes(trim($string));
}



function doors_init() {
	return Doors_class::instance();
}

//doors_init();

class Doors_class {

	private static $instance;

	public $helpers;

	public $customizer;

	public $activation;

	public $integrations;
	public $widgets;

	public $template;

	public $page_settings;
	public $widgetized_pages;

	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Doors_class ) ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

	public function __construct() {
		$this->base();
		$this->setup();
	}

	// Integration getter helper
	public function get( $integration ) {
		return $this->integrations->get( $integration );
	}

	private function base() {
		$this->files = array(
			'customizer/class-customizer.php'
		);

		foreach ( $this->files as $file ) {
			require_once( get_template_directory() . '/inc/' . $file );
		}
	}

	private function setup() {

		$this->customizer = new Doors_Customizer();

		add_action( 'after_setup_theme', array( $this, 'setup_theme' ) );
	}

	public function setup_theme() {
		load_theme_textdomain( 'doors', get_template_directory() . '/languages' );
		add_editor_style( 'css/editor-style.css' );

		add_theme_support( 'custom-background', apply_filters( 'doors_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

	}
  
}


function help4cms_wpcf7_form_elements($html) {
    $post_not_work = array(3576,3791,3277,3419,3296,3827,5,2828);
    if (!in_array(get_the_ID(), $post_not_work)) {
        

        help4cms_replace_include_blank('menu-120', get_the_title(), get_the_title(), $html); // Chnage here your dropdown menu ID
        help4cms_replace_include_blank('menu-180', get_the_title(), get_the_title(), $html); // Chnage here your dropdown menu ID
		help4cms_replace_include_blank('menu-995', get_the_title(), get_the_title(), $html); // Chnage here your dropdown menu ID
		help4cms_replace_include_blank('menu-945', get_the_title(), get_the_title(), $html); // Chnage here your dropdown menu ID
    }

        return $html;

}
function help4cms_replace_include_blank($name, $text, $value, &$html)
        {
            $matches = false;
            preg_match('/<select name="' . $name . '"[^>]*>(.*)<\/select>/iU', $html, $matches);

                if ($matches) {
                    $delete = str_replace( '<option value="' . mb_strtolower($value) . '">' . mb_strtolower($text) . '</option>', '', $matches[0]);
                    $select = str_replace('<option value="">---</option>', '<option value="' . mb_strtolower($value) . '">' . mb_strtolower($text) . '</option>', $delete);

                    $html = preg_replace('/<select name="' . $name . '"[^>]*>(.*)<\/select>/iU', $select, $html);


                }

        }
add_filter('wpcf7_form_elements', 'help4cms_wpcf7_form_elements');
function wta_custom_after_title( $post_type ) { 
 ?><div class="after-title-help postbox">
 <h3><span style="color: #ff0000; font-family: 'arial black', sans-serif;">ВНИМАНИЕ!</span></h3>
 <div class="inside">
<p style="text-align: left;"><span style="color: #ff0000;"> Вы можете добавить к своей статье фотографии, но размером не более чем 2 mb каждая. Перед загрузкой фотографий их небходимо уменьшить до указанного размера и рекомендуемого разрешения не более 1600px. </span>
  <span style="font-size: 14px;"><em>Если вы не можете это сделать сами - воспользуйтесь онлайн сервисом для уменьшения и сжатия изображений. При уменьшении размера фото следует указать размер по большей стороне 1600. <a href="https://www.iloveimg.com/ru/resize-image" target="_blank" rel="noopener">Перейти на сервис уменьшения фото </a></em><p style="text-align: center;">

Если у вас есть вопросы или возникли проблемы - свяжитесь с администратором сайта</p></span>
   </p>
 </div>
</div>
 <?php }
 add_action( 'edit_form_after_title', 'wta_custom_after_title' );
 
 
function shapeSpace_check_https() { 
if ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || $_SERVER['SERVER_PORT'] == 443) { 
    return true; 
}
    return false;
}

add_action( 'template_redirect', 'bhww_ssl_template_redirect');
add_post_type_support( 'page', 'excerpt' );
/*function bhww_ssl_template_redirect() {
if ( shapeSpace_check_https() ) {
    if ( 0 === strpos( $_SERVER['REQUEST_URI'], 'http' ) ) {    
        wp_redirect( preg_replace( '|^(https://)|', 'http://', $_SERVER['REQUEST_URI'] ), 301 );
        exit(); 
    } else {
        wp_redirect( 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'], 301 );
        exit();     
    }
}   
}
*/



/* 
add_filter( 'category_link', function($a){
	return str_replace( 'category/', '', $a );
}, 99 ); */
