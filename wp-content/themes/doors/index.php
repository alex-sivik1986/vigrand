<?php get_header();
 ?>
    <section class="titlebar ">
    	<div class="row">
    		<div class="large-8 columns">
    			<?php if(doors_is_blog()){
    				$doors_blog_id = get_option('page_for_posts'); 
					if($doors_blog_id == false ) {
						?><h1 id="page-title" class="title"><?php single_cat_title(); ?></h1><?php	
					}else {
						?><h1 id="page-title" class="title"><?php echo get_the_title($doors_blog_id); ?></h1><?php	
					}
    				
    			}else{
    				?><h1 id="page-title" class="title"><?php the_title(); ?></h1><?php
    			} ?>
    			
    		</div>
    		<div class="large-4 columns">
    			<?php doors_breadcrumb(); ?>
    		</div>
    	</div>
    </section>
    <!-- content  -->
		<main class="row l-main">
				<ul class="main blog-post large-block-grid-3">						
  			<!-- loop ... -->
        <?php if (have_posts()) : ?>
           <?php while (have_posts()) : the_post(); 
           
           	?>    
     				
							
									<?php get_template_part('content', get_post_format()); ?>
								
		        <?php endwhile;
								endif;
 						
						if (comments_open()) {
							comments_template('', true);
						}
					 ?>	
					<!-- /loop.. ********-->
										</ul>
										<!-- Pagination -->
										<div class="wd-pagination">
											<?php echo paginate_links(); ?>
										</div>
										<!-- /Pagination -->
									
							
								</main>
			
			<?php get_footer(); ?>