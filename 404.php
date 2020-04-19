<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php bloginfo('name'); ?> | <?php if( is_home() ) : echo bloginfo( 'description' ); endif; ?><?php wp_title( '', true ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" />

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php
	/*-----------------------------------------------------------------------------------*/
	/* Start header
	/*-----------------------------------------------------------------------------------*/
?>

<header id="masthead" class="site-header" role="banner">
	<div class="container">

		<div id="brand">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a> &mdash; <span><?php echo get_bloginfo( 'description' ); ?></span></h1>
		</div><!-- /brand -->

		<nav role="navigation" class="site-navigation main-navigation">
			<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
		</nav><!-- .site-navigation .main-navigation -->

		<div class="clear"></div>
	</div><!--/container -->

</header><!-- #masthead .site-header -->

<div class="container">

	<div id="primary">
		<div id="content" role="main">

<p><i class="far fa-frown fa-10x" color=#303030></i></p>
<h1>Page Not Found</h1>
<p>Sorry, but the page you requested has not been found.</p>

<?php
	/*-----------------------------------------------------------------------------------*/
	/* Start Footer
	/*-----------------------------------------------------------------------------------*/
?>

<footer class="site-footer" role="contentinfo">
	<div class="site-info container">
		<?php do_action( 'break_credits' ); ?>
        <i class="fab fa-creative-commons"></i> <i class="fab fa-creative-commons-by"></i> <i class="fab fa-creative-commons-sa"></i> <?php echo date("Y"); ?> <a href="https://erikyuzwa.com">Erik Yuzwa</a> | <a href="https://erikyuzwa.com/hello-wordpress">Theme Information</a>
	</div><!-- .site-info -->
</footer><!-- #colophon .site-footer -->

<?php wp_footer(); ?>

</body>
</html>
