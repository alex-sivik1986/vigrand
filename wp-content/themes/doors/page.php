<?php get_header();

  if(!(is_front_page())) {
  	if(get_post_meta(get_the_ID(), 'doors_page_show_title_area', true) != 'no'){ ?>
		  <section class="titlebar ">
			  <div class="row">
				  <div class="right">
					  <?php doors_breadcrumb(); ?>
				  </div>
				  <div>
					  <h1 id="page-title" class="title <?php echo 'text-' . get_post_meta(get_the_ID(), 'doors_page_title_position', true) ?>"><?php the_title(); ?></h1>
				  </div>
			  </div>
		  </section>
  <?php 
		}
		}  ?>
  
  <!-- content  -->
	<main class="l-main">
		<div class="main row">	
		  <?php if (have_posts()) :
       while (have_posts()) : the_post(); ?>    
  			<article>
  				<div class="body field">
  					<?php the_content(); ?>
  				</div>
  			</article>
      <?php endwhile;
      endif; ?>

<?php if (comments_open()){
                  comments_template( '', true ); 
                } ?>
		</div>  
	</main>
	<!-- /content  -->
		
	<?php get_footer(); ?>