<?php if(doors_get_option('doors_footer_columns')=='tow_a_columns' or doors_get_option('doors_footer_columns')=='four_columns' or doors_get_option('doors_footer_columns')=='three_columns' or  doors_get_option('doors_footer_columns')=='tow_b_columns' or doors_get_option('doors_footer_columns')=='tow_c_columns' ) { ?>
<section class="l-footer-columns">
  
  <div class="row">
    <section class="block">
          <?php
            if(doors_get_option('doors_footer_columns')=='one_columns'){
              $column_one = 12;
              $column_tow = '';
              $column_three = '';
              $column_four = '';

            }elseif(doors_get_option('doors_footer_columns')=='tow_a_columns'){
              $column_one = 4;
              $column_tow = 8;
              $column_three = '';
              $column_four = '';
            }elseif(doors_get_option('doors_footer_columns')=='tow_b_columns') {
              $column_one = 8;
              $column_tow = 4;
              $column_three = '';
              $column_four = '';
            }elseif(doors_get_option('doors_footer_columns')=='tow_c_columns') {
              $column_one = 6;
              $column_tow = 6;
              $column_three = '';
              $column_four = '';

            }elseif(doors_get_option('doors_footer_columns')=='three_columns') {
              $column_one = 4;
              $column_tow = 4;
              $column_three = 4;
              $column_four = '';
            }else {
              $column_one = 3;
              $column_tow = 3;
              $column_three = 3;
              $column_four = 3;
            }
         ?>
         <div class="large-<?php echo esc_attr($column_one) ?> columns">
         <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer') ) : ?><?php endif; ?>
         </div>
         <?php  if(doors_get_option('doors_footer_columns')=='tow_a_columns' or doors_get_option('doors_footer_columns')=='four_columns' or doors_get_option('doors_footer_columns')=='three_columns' or  doors_get_option('doors_footer_columns')=='tow_b_columns' or doors_get_option('doors_footer_columns')=='tow_c_columns' ) { ?>
           <div class="large-<?php echo esc_attr($column_tow) ?> columns two">
          <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer_columns_tow') ) : ?><?php endif; ?>
          </div>
          <?php }
          ?>

          <?php  if(doors_get_option('doors_footer_columns')=='three_columns' or doors_get_option('doors_footer_columns')=='four_columns' ) { ?>

             <div class="large-<?php echo esc_attr($column_three) ?> columns three ">

            <?php

            if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer_columns_three') ) : ?><?php endif;

            ?>
            </div>
            <?php } ?>

            <?php  if(doors_get_option('doors_footer_columns')=='four_columns') { ?>

             <div class="large-<?php echo esc_attr($column_four) ?> columns">

            <?php

            if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer_columns_four') ) : ?><?php endif;

            ?>
            </div>
            <?php } ?>
      </section>
    </div>



</section>
<?php } ?>
<footer class="l-footer">
    <div class="row">
        <div class="footer large-4 columns">
            <section class="block">
                <span><?php echo _e('Powered by', 'doors'); ?> <a href="<?php echo esc_url(home_url('/')); ?>"><?php echo  doors_get_option('doors_poweredby','doors') ?> </a>© <?=date('Y')?></span>
            </section>
        </div>
        <div class="large-4 columns">

        </div>
        <!--<div class="copyright large-4 text-right columns">
            <p style="padding-bottom:0"><a href="https://upper-code.com" target="_blank"><img class="alignnone size-medium wp-image-4317" style="margin: 5px 0px 5px 0;" src="/wp-content/uploads/2014/08/Digital-agency-1.png" alt="Upper-Code - разработка и продвижение сайта" width="150" height="67"></p> <p>
                <?php  echo _e(doors_get_option('doors_copyright','&copy; 2017 Windows & Doors All rights reserved. '), 'doors');   ?>
            </p></a>
        </div>-->
    </div>
</footer>
  		
  <?php
    $menu_style = doors_get_option('doors_menu_style');
    if($menu_style == "offcanvas") { ?>
      <a class="exit-off-canvas"></a>
      </div></div>
    <?php } ?>
  <!-- end offcanvas -->
  <?php
		
		wp_footer(); ?>

   
	</section>
	</div>
<?php  if (!is_page(3507)) { ?>
<script type="text/javascript">
//test
    (function($){
    $.each(["addClass","removeClass"],function(i,methodname){
        var oldmethod = $.fn[methodname];
        $.fn[methodname] = function(){
              oldmethod.apply( this, arguments );
              this.trigger(methodname+"change");
              return this;
        }
    });
    })(jQuery);
  
    // main function for the infinite loop
    function vc_custominfiniteloop_init(vc_cil_element_id){

      var vc_element = '#' + vc_cil_element_id; // because we're using this more than once let's create a variable for it
      window.maxItens = jQuery(vc_element).data('per-view'); // max visible items defined
      window.addedItens = 0; // auxiliary counter for added itens to the end 
            
      // go to slides and duplicate them to the end to fill space
      jQuery(vc_element).find('.vc_carousel-slideline-inner').find('.vc_item').each(function(){
        // we only need to duplicate the first visible images
	
        if (window.addedItens < window.maxItens) {
          if (window.addedItens == 0 ) {
            // the fisrt added slide will need a trigger so we know it ended and make it "restart" without animation
            jQuery(this).clone().addClass('vc_custominfiniteloop_restart').removeClass('vc_active').appendTo(jQuery(this).parent());            
          } else {
            jQuery(this).clone().removeClass('vc_active').appendTo(jQuery(this).parent());         
          }
		//console.log(jQuery(this).clone().data('rel', number));
          window.addedItens++;
		 
        }
      });

      // add the trigger so we know when to "restart" the animation without the user knowing about it
      jQuery('.vc_custominfiniteloop_restart').bind('addClasschange', null, function(){
        
        // navigate to the carousel element , I know, its ugly ...
        var vc_carousel = jQuery(this).parent().parent().parent().parent();

        // first we temporarily change the animation speed to zero
        jQuery(vc_carousel).data('vc.carousel').transition_speed = 0;

        // make the slider go to the first slide without animation and because the fist set of images shown
        // are the same that are being shown now the slider is now "restarted" without that being visible 
        jQuery(vc_carousel).data('vc.carousel').to(0);
     
        // allow the carousel to go to the first image and restore the original speed 
        setTimeout("vc_cil_restore_transition_speed('"+jQuery(vc_carousel).prop('id')+"')",500);
      });

    }

    // restore original speed setting of vc_carousel
    function vc_cil_restore_transition_speed(element_id){
    // after inspecting the original source code the value of 600 is defined there so we put back the original here
    jQuery('#' + element_id).data('vc.carousel').transition_speed = 600; 
    }

    // init     
    jQuery(document).ready(function(){    
	  if (jQuery(window).width() > 768) {
      // find all vc_carousel with the defined class and turn them into infine loop
      jQuery('.vc_custominfiniteloop').find('div[data-ride="vc_carousel"]').each(function(){
		  
        // allow time for the slider to be built on the page
        // because the slider is "long" we can wait a bit before adding images and events needed  
        var vc_cil_element = jQuery(this).prop("id");
        setTimeout("vc_custominfiniteloop_init('"+vc_cil_element+"')",2000);      
      });     }
	  //jQuery("a[data-rel^='prettyPhoto']").prettyPhoto();
	  jQuery(document).on('click','.vc_right, .vc_left',function(){
		  jQuery("a[data-rel^='prettyPhoto']").prettyPhoto();
	  });
	  
    });

</script>
<?php } ?>

<script>

// init     
    jQuery(document).ready(function(){    
	   jQuery(document).on('click','#pvh-okna .vc_right, #pvh-okna .vc_left',function(e){
		   e.preventDefault();
 
		  var hide_arrow = jQuery("#pvh-okna .vc_item:nth-child(4)").hasClass('vc_active');
		  if(hide_arrow){  
			jQuery("#pvh-okna .vc_right").hide();
		  } 
		  
		  if(jQuery(this).hasClass('vc_left')){
			jQuery("#pvh-okna .vc_right").show();  
		    
		  }		  
	  });
    });

</script>
	</body>
</html>