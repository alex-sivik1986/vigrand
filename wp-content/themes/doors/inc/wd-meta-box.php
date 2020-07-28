<?php 

if (!class_exists('doors_meta_box')) {
	class doors_meta_box {
		var $customfields = array(
			array(
          "name"			=> "page_vertical_area_transparency",
          "title"			=> "Enable transparent left menu area on load",
          "description"	=> "",
          "float_left" 	=> "",
          "clear_after" 	=> "",
          "type"			=> "selectbox",
          "values"		=> array(
              ""	=>	"",
              "no"	=>	"No",
              "yes"	=>	"Yes"
          ),
          "scope"			=>	array("page","post","portfolio_page"),
          "capability"	=> "manage_options",
          "dependency"	=> array("vertical_area" => array("yes")),
      ),
      array(
				"name"			=> "header-style",
				"title"			=> "Header style",
				"description"	=> "",
				"float_left" 	=> "",
				"clear_after" 	=> "",
				"type"			=> "selectbox",
				"values"		=> array(
					""	=>	"",
					"light"	=>	"Light",
					"dark"	=>	"Dark"	
				),
				"scope"			=>	array("page","post","portfolio_page"),
				"capability"	=> "manage_options",
				"dependency"	=> ""
			),
		);
	}
}


if ( class_exists('doors_meta_box') ) {
	$doors_meta_box_var = new doors_meta_box();
}
 ?>