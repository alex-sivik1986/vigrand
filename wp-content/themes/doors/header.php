<!doctype html>

<!--[if IE 9]>
<html class="lt-ie10" lang="en"> <![endif]-->

<html class="no-js"  <?php language_attributes(); ?> >
<link rel="apple-touch-icon" sizes="57x57" href="/wp-content/uploads/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/wp-content/uploads/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/wp-content/uploads/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/wp-content/uploads/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/wp-content/uploads/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/wp-content/uploads/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/wp-content/uploads/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/wp-content/uploads/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/wp-content/uploads/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/wp-content/uploads/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/wp-content/uploads/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/wp-content/uploads/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/wp-content/uploads/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/wp-content/uploads/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<head>

  <meta charset="<?php bloginfo('charset'); ?>">

  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-131021141-1', 'auto');
  ga('send', 'pageview');

</script>
  <!-- javascript -->
  <!-- <script async src="/wp-content/themes/doors/lazierload_04/js/lib/prototype.js" type="text/javascript"></script> -->
   <!-- NOTE: depends upon prototype 1.6.0 final or greater! -->
  <!-- <script async src="/wp-content/themes/doors/lazierload_04/js/bramus/lazierLoad.js" type="text/javascript"></script> -->

  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-131021141-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-131021141-1');
</script>



  <?php if (!function_exists('has_site_icon')) {

    if (doors_get_option('doors_favicon', '') != '') { ?>

      <link rel="shortcut icon" href="<?php echo esc_url(doors_get_option('doors_favicon')); ?>"/>

    <?php }
  } ?>

  <?php wp_head() ?>
</head>

<body <?php body_class(); ?>>


<!-- offcanvas start -->

<?php

$menu_style = isset($_GET['menustyle']) ? $_GET['menustyle'] : doors_get_option('doors_menu_style', 'corporate');


if ($menu_style == "offcanvas") { ?>

<div class="off-canvas-wrap" data-offcanvas>

  <div class="inner-wrap">

    <a class="left-off-canvas-toggle" href="#"><i class="fa fa-bars"></i></a>

    <aside class="left-off-canvas-menu">

      <?php

      $defaults = array(

        'theme_location' => '',

        'menu' => '',

        'container' => 'div',

        'container_class' => '',

        'container_id' => '',

        'menu_class' => 'menu',

        'menu_id' => '',

        'echo' => true,

        'fallback_cb' => 'doors_main_menu_fallback',

        'before' => '',

        'after' => '',

        'link_before' => '',

        'link_after' => '',


        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',

        'depth' => 0,

        'walker' => '',

      );


      wp_nav_menu($defaults);



      ?>

    </aside>



    <?php }


    if (doors_get_option('doors_box_wrapper') == 'on') { ?>

      <img src="<?php echo esc_url(doors_get_option('doors_home_page')) ?>" class="bg_image_body"
           alt="<?php echo esc_html__('body background', 'doors') ?>">

    <?php }


    $boxed_class = '';

    if (doors_get_option('doors_box_wrapper') == 'on') {

      $boxed_class = 'doors_wrapper';

    } ?>



    <div id="spaces-main" class="pt-perspective <?php echo esc_attr($boxed_class) ?>">

      <section class="page-section home-page" id="page-content">

        <!--.l-header region -->

        <header class="l-header <?php echo esc_attr($menu_style); ?>-layout">

          <?php if (doors_get_option('doors_show_top_social_bare') == 'on') { ?>

            <div class="header-top social_top_bar">

              <div class="row">

                <div class="large-5 columns header_top_left">

                  <ul class="social-icons accent inline-list">

                    <?php if (doors_get_option('flickr') != ""): ?>

                      <li class="flickr">

                        <a href="<?php echo esc_url(doors_get_option('flickr')); ?>"><i
                            class="fa fa-flickr"></i></a>

                      </li>

                    <?php endif ?>

                    <?php if (doors_get_option('facebook') != ""): ?>

                      <li class="facebook">

                        <a href="<?php echo esc_url(doors_get_option('facebook')); ?>"><i
                            class="fa fa-facebook"></i></a>

                      </li>

                    <?php endif ?>

                    <?php if (doors_get_option('twitter') != ""): ?>

                      <li class="twitter">

                        <a href="<?php echo esc_url(doors_get_option('twitter')); ?>"><i
                            class="fa fa-twitter"></i></a>

                      </li>

                    <?php endif ?>

                    <?php if (doors_get_option('vimeo') != ""): ?>

                      <li class="vimeo">

                        <a href="<?php echo esc_url(doors_get_option('vimeo')); ?>"><i
                            class="fa fa-vimeo-square"></i></a>

                      </li>

                    <?php endif ?>

                  </ul>

                </div>


              </div>

            </div>

          <?php } ?>

          <div class="contain-to-grid
                      <?php if (doors_get_option('doors_menu_sticky') == '1') echo "sticky"; ?> ">

            <nav class="top-bar" data-topbar>

              <ul class="title-area">

                <li class="name">

                  <?php if (doors_get_option('doors_show_logo') == '1'): ?>

                    <?php $image = doors_get_option('doors_logo', get_template_directory_uri() . "/images/logo2.png");

                    if(!empty($image)){

                      ?>

                      <p><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"
                             title="<?php echo bloginfo('name') ?>" class="active">
                          <img src="<?php echo esc_url($image) ?>"
                               alt="<?php echo bloginfo('name') ?>"/></a></p>

                    <?php
                    }
                     endif; ?>

                  <?php if (doors_get_option('doors_show_title' , '') == '1'): ?>

                    <a href="<?php echo esc_url(home_url('/')); ?>"><h2
                        class="p-t-20"><?php echo bloginfo('name') ?></h2></a>

                  <?php endif ?>

                </li>

                <?php if ($menu_style != "offcanvas" && $menu_style != "modern") { ?>

                  <li class="toggle-topbar menu-icon">

                    <a href="#"><span><?php echo esc_html__('Menu', 'doors') ?></span></a>

                  </li>

                <?php } ?>

              </ul>


              <div class="larg-6 text-right">
                <?php if( doors_get_option('phone') != "") { ?>
                <div class="address_bar">
                  <div class="address_icon">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <ul class="bar">
                    <li class="address"><?php echo esc_html__('Call Us Today','doors') ?></li>
                    <li class="text_add"><a onclick="ga('send', 'event', 'tel', 'header1');" href="tel:+<?=$phone = preg_replace('![^0-9]!', '', doors_get_option('phone','458-362-1258'))?>"><?php echo doors_get_option('phone','458-362-1258'); ?></a></li>
                  </ul>
                </div>
                <?php }
                     if( doors_get_option('phone2') != "" && doors_get_option('phone3') != "") { ?>
                <div class="address_bar">
                  <div class="address_icon">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <ul class="bar">
                 
                    <li class="text_add"><a onclick="ga('send', 'event', 'tel', 'header2');" href="tel:+<?=$phone = preg_replace('![^0-9]!', '', doors_get_option('phone2','458-362-1258'))?>"><?php echo doors_get_option('phone2','458-362-1258'); ?></a></li>
					<li class="text_add"><a onclick="ga('send', 'event', 'tel', 'header3');" href="tel:+<?=$phone = preg_replace('![^0-9]!', '', doors_get_option('phone3','458-362-1258'))?>"><?php echo doors_get_option('phone3','458-362-1258'); ?></a></li>
                  </ul>
                </div>
                <?php }
				
                if( doors_get_option('work') != "") { ?>
                <div class="address_bar">
                  <div class="address_icon">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                  </div>
                  <ul class="bar">
                    <li class="address"><?php echo esc_html__('Work Time','doors') ?></li>
                    <li class="text_add"><?php
                      $work_time = doors_get_option('work');
                      if(empty($work_time)){
                        echo '09:00-17:00';
                      }else{
                        echo _e(doors_get_option('work'), 'doors');
                      }
                      ?></li>
                  </ul>
                </div>
                <?php }

                if( doors_get_option('adress') != "") { ?>
                <div class="address_bar">
                  <div class="address_icon">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <ul class="bar">
                    <li class="address"><?php echo esc_html__('Address','doors') ?></li>
                    <li class="text_add"><?php echo doors_get_option('adress', '547, San Diego'); ?></li>
                  </ul>
                </div>
                <?php } ?>
              </div>

              <?php

              if (doors_get_option('doors_call_to_action') != "") {

                echo html_entity_decode(doors_get_option('doors_call_to_action'));

              } ?>

              <section class="<?php echo esc_attr($menu_style); ?> top-bar-section">

                <?php





                if ($menu_style == "corporate") {

                  $defaults = array(

                    'theme_location' => 'primary',

                    'menu' => '',

                    'container' => 'div',

                    'container_class' => 'menu-menu-container',

                    'container_id' => '',

                    'menu_class' => 'menu left',

                    'menu_id' => 'menu-menu',

                    'echo' => true,

                    'fallback_cb' => 'doors_main_menu_fallback',

                    'before' => '',

                    'after' => '',

                    'link_before' => '',

                    'link_after' => '',


                    'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',

                    'depth' => 0,

                    'walker' => new doors_top_bar_walker,


                  );


                  wp_nav_menu($defaults);
                  $text_button_header = doors_get_option('button');
				 if(ICL_LANGUAGE_CODE=='ru') {
					 $class="popmake-4512";
				 } else { 

                     $class="popmake-4521";
					 }
                  ?>

                  <div class="request-quote right" <?php if(empty($text_button_header)){ echo 'style = "display: none"';} ?>>

                    <a href="<?php echo doors_get_option('doors_button_link');?>" class="<?=$class?> has-icon"><?php echo _e($text_button_header);  ?></a>

                  </div>

                <?php } elseif ($menu_style == "modern") { ?>

                  <a href="#" id="trigger-overlay" title=""><i class="fa fa-bars"></i></a>

                  <div class="overlay overlay-scale">

                    <button type="button" class="overlay-close"><?php echo esc_html__('Close', 'doors') ?></button>

                    <nav>

                      <?php

                      $defaults = array(

                        'theme_location' => 'primary',

                        'menu' => '',

                        'container' => 'div',

                        'container_class' => '',

                        'container_id' => '',

                        'menu_class' => 'menu',

                        'menu_id' => '',

                        'echo' => true,

                        'fallback_cb' => 'doors_main_menu_fallback',

                        'before' => '',

                        'after' => '',

                        'link_before' => '',

                        'link_after' => '',


                        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',

                        'depth' => 0,

                        'walker' => new doors_top_bar_walker,

                      );


                      wp_nav_menu($defaults);



                      ?>

                    </nav>

                  </div>



                <?php } elseif ($menu_style == "creative") { ?>

                  <?php

                  $defaults = array(

                    'theme_location' => 'primary',

                    'menu' => '',

                    'container' => 'div',

                    'container_class' => '',

                    'container_id' => '',

                    'menu_class' => 'menu right',

                    'menu_id' => '',

                    'echo' => true,

                    'fallback_cb' => 'doors_main_menu_fallback',

                    'before' => '',

                    'after' => '',

                    'link_before' => '',

                    'link_after' => '',


                    'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',

                    'depth' => 0,

                    'walker' => new doors_top_bar_walker,

                  );


                  wp_nav_menu($defaults);



                  ?>



                <?php } elseif ($menu_style == "nav-layout-metro") { // $menu_style == "nav-layout-metro" ?>

                  <?php

                  wp_nav_menu(array(

                    'theme_location' => 'primary',

                    'container_class' => 'top-bar-section',

                    'container' => 'div',

                    'menu_class' => 'main-nav',

                    'menu_id' => 'main-menu',

                    'walker' => new doors_top_bar_walker,

                    'fallback_cb' => 'doors_main_menu_fallback')); ?>

                <?php } ?>

              </section>

            </nav>

          </div>
<!--<div class="image_header"></div>-->
          <!--/.top-Menu -->

        </header>