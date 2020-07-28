<?php 
function doors_pricing_table($atts) {
           
  extract( shortcode_atts( array(
    'title'       => 'Standard',
    'price'       => '$99.99',
    'description' => 'An awesome description',
    'button_text' => 'Buy Now',
    'button_link' => '#',
    'featured'    => '',
    'content_text'     => '<ul><li>Option #1</li><li>Option #2</li><li>Option #3</li><li>Option #4</li></p>',
  ), $atts ) );
  
  ob_start(); ?>
  
  <ul class="pricing-table <?php echo $featured; ?>">
    <li class="title"><?php echo $title; ?></li>
    <li class="price"><?php echo $price; ?></li>
    <li class="description"><?php echo $description; ?></li>
    <li>
      <?php echo $content_text; ?>      
    </li>
    
    <li class="cta-button">
      <a href="<?php echo $button_link; ?>" class="button"><?php echo $button_text; ?></a>
    </li>
  </ul>
<?php return ob_get_clean();
}
add_shortcode( 'doors_pricing_table', 'doors_pricing_table' );