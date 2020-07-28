<?php get_header();

print get_template_part('parts/title-bar');

 ?>
	
	
<!-- content  -->
			<main class="row l-main">
				<div class="large-12 main columns" style="    margin-top: 0px;">
					<div class="view view-blog view-id-blog view-display-id-page">
						<div class="row view-content">
					<!-- loop ... -->				
						<?php if (have_posts()) : ?>
               <?php while (have_posts()) : the_post(); ?>   
             
									<div class="blog-posts">
									<article>
										<div class="field field-name-field-blog-image field-type-image field-label-hidden field-wrapper">
											<?php /* the_post_thumbnail('doors_blog-thumb');*/ ?>
										</div>
										<div class="body field">
											<?php the_content(); ?>
										</div>
										<div style="display:none" class="post-info"> 
				              <span class="post-date"><i class="fa-calendar fa"></i> <?php echo get_the_date(); ?></span>
				              <span class="post-author"><i class="fa-user fa"></i> <?php the_author() ?></span>

				              <?php if(has_tag()){ ?>
				                <span class="post-tags"><i class="fa-tag fa"></i> <?php the_tags() ?></span>
				              <?php } ?>

				              <?php if(has_category()){ ?>
				                <span class="post-categories"><i class="fa-folder fa"></i>  <?php echo esc_html__('Categories:','doors'); the_category() ?></span>
				              <?php } ?>
				          </div>
				          <?php if (comments_open()|| get_comments_number()){
                  comments_template( '', true ); 
                } ?>
									</article>
									</div>
						     <?php endwhile;
							endif;?>
						<!-- /loop.. ********-->
							<?php wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'doors' ), 'after' => '</div>' ) ); ?>
						</div>
					</div>
				</div>
				<!--/.main region -->
				<!-- *************sidebar ***********-->
				<?php /* get_sidebar();*/ ?>
				<!-- *************/sidebar ***********-->
			</main>
			<!-- /content  -->
			<?php get_footer(); ?>