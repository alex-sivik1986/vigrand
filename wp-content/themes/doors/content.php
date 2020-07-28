<li  id="post-<?php the_ID() ?>" <?php post_class(); ?>>
<article>						
	<h2 class="post-title" style="font-size:18px"><a href="<?php esc_url(the_permalink()); ?>"><?php the_title(); ?></a></h2>
	<div class="post-thmbnail">
		<?php if(has_post_thumbnail()) {
		?>
		
		
		<?php the_post_thumbnail('doors_blog-thumb'); ?>
		
		<?php
	}
        ?>
	<div style="display:none" class="date">
				<?php 
				echo get_the_date('d M');
					 ?>
			</div>
	</div>

	<div style="display:none" class="post-info">
			<span  class="author">
					<?php echo esc_html__('By : ', 'doors') ?>
				<span><?php the_author(); ?></span>
			</span>
			<?php the_category() ?>
			<span class="comment-count">
				
					<?php comments_number('0', '1', '% responses'); ?>
				
				<?php echo esc_html__('comment', 'doors') ?>
			</span>
	</div>
	<div class="body text-secondary">
		<p><?php  $post_id = get_post( get_the_ID() ); echo $post_id->post_excerpt; ?></p>
	</div>
	<div class="read-more"><a href="<?php esc_url(the_permalink()); ?>"><?php echo esc_html__('Read More', 'doors'); ?><i class="fa fa-long-arrow-right"></i></a></div>
	
</article>
</li>