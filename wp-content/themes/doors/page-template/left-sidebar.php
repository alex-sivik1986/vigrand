<?php
/*
Template Name: left sidebar
*/
?>
<?php get_header(); 
if(get_post_meta(get_the_ID(), 'doors_page_show_title_area', true) == 'yes') {?>
		<section class="titlebar ">
				<div class="row">
					<div class="right">
						<?php doors_breadcrumb(); ?>
					</div>
					<div>
						<h1 id="page-title" class="title"><?php the_title(); ?></h1>
					</div>
				</div>
			</section>
		<?php } ?>
<!-- content  -->
			<main class="row l-main">
				<?php get_sidebar('left'); ?>
				<div class="large-9 main columns">
					<a id="main-content"></a>
					<div class="view view-blog view-id-blog view-display-id-page">
						<div class="view-content">
			<!-- loop ... -->				
					<?php if (have_posts()) : ?>
               <?php while (have_posts()) : the_post(); ?>    
     
					<article  class="node node-blog node-promoted view-mode-full" id="node-13">
						<div class="body field">
							<?php the_content(); ?>
						</div>
					</article>
     <?php endwhile; 
endif;
     ?>


<?php if (comments_open()){
                  comments_template( '', true ); 
                } ?>
							
<!-- /loop.. ********-->
						</div>

					</div>
				</div>

			</main>
			<!-- /content  -->
			<?php get_footer(); ?>