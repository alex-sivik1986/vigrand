<?php

class Doors_Customizer_Controls_Top_Header extends Doors_Customizer_Controls {

    public $controls = array();

    public function __construct() {
        $this->section = 'doors_top_header';
     //   $this->priority = new Doors_Customizer_Priority(0, 1);

        parent::__construct();

        add_action( 'customize_register', array( $this, 'add_controls' ), 30 );
        add_action( 'customize_register', array( $this, 'set_controls' ), 35 );
    }

    public function add_controls( $wp_customize ) {
        $this->controls = array(
            'doors_options_array[doors_call_to_action]' => array(
                'label' => __( 'Call to Action Button', 'doors' ),
                'type' => 'textarea',
                'default' => doors_get_option('doors_call_to_action'),
                'description' => 'Call to action button',
                'input_attrs' => array(
                    'placeholder' => esc_html__('Put your HTML code here','doors')
                )
            ),
            'doors_options_array[phone]' => array(
                'label' => __( 'Phone', 'doors' ),
                'type' => 'text',
                'default' => doors_get_option('phone'),
                'description' => 'Phone',
                'input_attrs' => array(
                    'placeholder' => esc_html__('Your Phone number','doors')
                )
            ),
			'doors_options_array[phone2]' => array(
                'label' => __( 'Phone', 'doors' ),
                'type' => 'text',
                'default' => doors_get_option('phone2'),
                'description' => 'Phone',
                'input_attrs' => array(
                    'placeholder' => esc_html__('Your Phone number','doors')
                )
            ),
			'doors_options_array[phone3]' => array(
                'label' => __( 'Phone', 'doors' ),
                'type' => 'text',
                'default' => doors_get_option('phone3'),
                'description' => 'Phone',
                'input_attrs' => array(
                    'placeholder' => esc_html__('Your Phone number','doors')
                )
            ),
            'doors_options_array[adress]' => array(
                'label' => __( 'Address', 'doors' ),
                'type' => 'text',
                'default' => doors_get_option('adress'),
                'description' => 'Address',
                'input_attrs' => array(
                    'placeholder' => esc_html__('Your first Address','doors')
                )
            ),
            'doors_options_array[button]' => array(
                'label' => __( 'Header Button', 'doors' ),
                'type' => 'text',
                'default' => doors_get_option('button'),
                'description' => 'Header Button',
                'input_attrs' => array(
                    'placeholder' => esc_html__('Button text','doors')
                )
            ),
            'doors_options_array[work]' => array(
                'label' => __( 'Work Time', 'doors' ),
                'type' => 'text',
                'default' => doors_get_option('work'),
                'description' => 'Work Time',
                'input_attrs' => array(
                    'placeholder' => esc_html__('from - to','doors')
                )
            )
        );

        return $this->controls;
    }

}

new Doors_Customizer_Controls_Top_Header();
