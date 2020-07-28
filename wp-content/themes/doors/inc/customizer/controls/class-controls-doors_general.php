<?php

class Doors_Customizer_Controls_General extends Doors_Customizer_Controls {

    public $controls = array();

    public function __construct() {
        $this->section = 'doors_general';
     //   $this->priority = new Doors_Customizer_Priority(0, 1);

        parent::__construct();

        add_action( 'customize_register', array( $this, 'add_controls' ), 30 );
        add_action( 'customize_register', array( $this, 'set_controls' ), 35 );
    }

    public function add_controls( $wp_customize ) {
        $this->controls = array(
            'doors_options_array[doors_menu_style]' => array(
                'label' => __( 'Menu Style', 'doors' ),
                'type' => 'select',
                'default' => doors_get_option('doors_menu_style'),
                'description' => 'Menu style selection',
                'choices' => array(
                     'corporate' => __( 'corporate', 'doors' )
                      ),
                'sanitize_callback' => 'esc_attr'
            ),
            'doors_options_array[doors_home_page]' => array(
                'label' => __( 'Background Image', 'doors' ),
                'type' => 'WP_Customize_Image_Control',
                'default' => doors_get_option('doors_home_page'),
                'description' => 'Background image',
                'settings' => 'doors_options_array[doors_home_page]'
            ),
            'doors_options_array[doors_show_title]' => array(
                'label' => __( 'Show Website Title', 'doors' ),
                'type' => 'checkbox',
                'description' => 'Show or hide website title',
                'default' => doors_get_option('doors_show_title')
            ),
            'doors_options_array[doors_menu_in_grid]' => array(
                'label' => __( 'Show Menu In The Grid', 'doors' ),
                'type' => 'checkbox',
                'description' => 'Show the menu in the grid',
                'default' => doors_get_option('doors_menu_in_grid')
            ),
            'doors_options_array[doors_menu_sticky]' => array(
                'label' => __( 'Stick Menu To Top', 'doors' ),
                'type' => 'checkbox',
                'description' => 'Stick menu to top',
                'default' => doors_get_option('doors_menu_sticky')
            ),
            'doors_options_array[doors_show_cart]' => array(
                'label' => __( 'Show Cart On Header', 'doors' ),
                'type' => 'checkbox',
                'description' => 'Stick Menu To Top',
                'default' => doors_get_option('doors_show_cart')
            ),
            'doors_options_array[doors_show_logo]' => array(
                'label' => __( 'Show Logo', 'doors' ),
                'type' => 'checkbox',
                'description' => 'Show logo',
                'default' => doors_get_option('doors_show_logo')
            ),
            'doors_options_array[doors_logo]' => array(
                'label' => __( 'Logo Link', 'doors' ),
                'type' => 'WP_Customize_Image_Control',
                'default' => doors_get_option('doors_logo'),
                'description' => 'Logo link',
                'settings' => 'doors_options_array[doors_logo]'
            ),
            'doors_options_array[doors_404_page]' => array(
                'label' => __( '404 Page Background Image', 'doors' ),
                'type' => 'WP_Customize_Image_Control',
                'default' => doors_get_option('doors_404_page'),
                'description' => '404 page background image',
                'settings' => 'doors_options_array[doors_404_page]'
            )
        );

        return $this->controls;
    }

}

new Doors_Customizer_Controls_General();
