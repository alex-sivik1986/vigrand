<?php

class Jobify_Customize_Mulitcheck_Control extends WP_Customize_Control {
	public $type = 'multicheck';

	public function render_content() {
		$values = $this->value();

		if ( ! is_array( $values ) ) {
			$values = explode( ',', $values );
		}
?>


	<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
	
	<p>
	<?php foreach ( $this->choices as $key => $value ) : ?>
		<label for="<?php echo $this->id; ?>-<?php echo $key; ?>">
			<input type="checkbox" class="multicheck" id="<?php echo $this->id; ?>-<?php echo $key; ?>" value="<?php echo $key; ?>" <?php checked( in_array( $key, $values ), true ); ?> />
			<?php echo esc_attr( $value ); ?> 
		</label><br />
	<?php endforeach; ?>
	</p>
		
	<?php if ( ! empty( $this->description ) ) : ?>
		<span class="description customize-control-description"><?php echo $this->description; ?></span>
	<?php endif; ?>

	<input type="hidden" value="<?php echo esc_attr( implode( ',', $values ) ); ?>" <?php $this->link(); ?> />

<?php
	}
}
