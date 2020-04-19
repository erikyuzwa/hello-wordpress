<?php

// Define the version as a constant so we can easily replace it throughout the theme
define( 'HELLOWORDPRESS_VERSION', 1.1 );

/*-----------------------------------------------------------------------------------*/
/* Add Rss to Head
/*-----------------------------------------------------------------------------------*/
add_theme_support( 'automatic-feed-links' );

/*-----------------------------------------------------------------------------------*/
/* register main menu
/*-----------------------------------------------------------------------------------*/
register_nav_menus(
	array(
		'primary'	=>	__( 'Primary Menu', 'hello_wordpress' ),
	)
);

/*-----------------------------------------------------------------------------------*/
/* Enque Styles and Scripts
/*-----------------------------------------------------------------------------------*/

function hello_wordpress_scripts()  {

	// theme styles
	wp_enqueue_style( 'hello_wordpress-style', get_template_directory_uri() . '/style.css', '10000', 'all' );

    wp_deregister_script('jquery');

    wp_register_script('jquery', 'https://code.jquery.com/jquery-3.5.0.slim.min.js', false, null);

    wp_enqueue_script('jquery');

	// add theme scripts
	wp_enqueue_script( 'hello_wordpress', get_template_directory_uri() . '/js/theme.min.js', array(), HELLOWORDPRESS_VERSION, true );

}
add_action( 'wp_enqueue_scripts', 'hello_wordpress_scripts' );
