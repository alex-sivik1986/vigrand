<?php
/* Security-Check */
if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class pbsfi_pro
{
	/** @var pbSEOFriendlyImages */
	var $pbSEOFriendlyImages;

	var $updateURL = 'https://pb-seo-friendly-images.s3-eu-west-1.amazonaws.com/';
	var $updateslug = 'pb-seo-friendly-images-pro';
	var $updatejson = 'pb-seo-friendly-images-pro-4.json';

	public function __construct( pbSEOFriendlyImages &$pb_SEO_friendly_images )
	{
		$this->pbSEOFriendlyImages = $pb_SEO_friendly_images;

		$this->updater();

		if( false === $this->pbSEOFriendlyImages->isProVersion() ) {
			// ?!
		}
	}

	public function initialize()
	{
		if( ! is_admin() && ! is_feed() ) {

			if( $this->pbSEOFriendlyImages->settings['enable_lazyload'] || $this->pbSEOFriendlyImages->settings['enable_lazyload_acf'] ) {
				add_action( 'wp_head', array(__CLASS__, 'thresholdVariable') );
				add_action( 'wp_enqueue_scripts', array(__CLASS__, 'unveilScript') );
			}

			if( $this->pbSEOFriendlyImages->settings['enable_lazyload'] ) {
				add_filter( 'post_thumbnail_html', array(__CLASS__, 'lazyLoadImages') );
				add_filter( 'the_content', array(__CLASS__, 'lazyLoadImages'), 12 );
				add_filter( 'get_avatar', array(__CLASS__, 'lazyLoadImages') );
			}

			if( $this->pbSEOFriendlyImages->settings['enable_lazyload_acf'] ) {
				add_filter( 'acf/load_value/type=textarea', array(__CLASS__, 'lazyLoadImages'), 19 );
				add_filter( 'acf/load_value/type=wysiwyg', array(__CLASS__, 'lazyLoadImages'), 19 );

				//add_filter( 'acf_load_value-textarea', array(__CLASS__, 'lazyLoadImages'), 20 );
				//add_filter( 'acf_load_value-wysiwyg', array(__CLASS__, 'lazyLoadImages'), 20 );
			}

			if( $this->pbSEOFriendlyImages->settings['link_title'] ) {
				add_filter( 'the_content', array(__CLASS__, 'optimizeLinkTitle'), 998 );

				add_filter( 'acf/load_value/type=textarea', array(__CLASS__, 'optimizeLinkTitle'), 19 );
				add_filter( 'acf/load_value/type=wysiwyg', array(__CLASS__, 'optimizeLinkTitle'), 19 );

				//add_filter( 'acf_load_value-textarea', array(__CLASS__, 'optimizeLinkTitle'), 20 );
				//add_filter( 'acf_load_value-wysiwyg', array(__CLASS__, 'optimizeLinkTitle'), 20 );
			}

			if( $this->pbSEOFriendlyImages->settings['disable_srcset'] ) {
				self::disableResponsiveImages();
			}

			// Woocommerce
			if( $this->pbSEOFriendlyImages->settings['wc_title'] && $this->pbSEOFriendlyImages->isProVersion() ) {
				add_filter('wp_get_attachment_image_attributes', array(__CLASS__, 'prepareContentImagesAttributes'), 19, 2);
			}

			if( ! $this->pbSEOFriendlyImages->settings['wc_title'] && $this->pbSEOFriendlyImages->isProVersion() ) {
				add_filter('wp_get_attachment_image_attributes', array(__CLASS__, 'prepareDynamicContentImageAttributes'), 19, 2);
			}
		}
	}

	protected function updater()
    {
        try{
            $UpdateChecker = Puc_v4_Factory::buildUpdateChecker(
                $this->updateURL.$this->updatejson,
                $this->pbSEOFriendlyImages->plugin['file'],
                $this->updateslug
            );
        } catch (Exception $e) {
            new WP_Error( 'broke', 'Puc_v4_Factory failed!' );
        }
    }
}