<?php
/**
 * The Template for displaying all single products.
 *
 * Override this template by copying it to yourtheme/woocommerce/single-product.php
 *
 * @author    WooThemes
 * @package  WooCommerce/Templates
 * @version     2.4.8
 */

if (!defined('ABSPATH')) exit; // Exit if accessed directly

get_header('shop');
?>
<section class="titlebar ">
  <div class="row">
    <div class="large-8 columns">
      <h2 id="page-title" class="title"><?php echo wc_get_product()->get_title(); ?></h2>
    </div>
    <div class="large-4 columns right">
      <?php do_action('woo_custom_breadcrumb'); ?>
    </div>
  </div>
</section>
<?php
?>
<?php
/**
 * woocommerce_before_main_content hook
 *
 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
 * @hooked woocommerce_breadcrumb - 20
 */
do_action('woocommerce_before_main_content');
?>
<div class="row p-t-60">
  <?php while (have_posts()) : the_post(); ?>

    <?php wc_get_template_part('content', 'single-product'); ?>

  <?php endwhile; // end of the loop. ?>

  <?php
  /**
   * woocommerce_after_main_content hook
   *
   * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
   */
  do_action('woocommerce_after_main_content');
  ?>

  <?php
  /**
   * woocommerce_sidebar hook
   *
   * @hooked woocommerce_get_sidebar - 10
   */
  // do_action( 'woocommerce_sidebar' );
  ?>

  <?php get_footer('shop'); ?>
</div>