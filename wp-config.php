<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sam' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'S[4IWP-mC7(kl)1!4HrhpCp)$}YoxZ_6@3(CyN=M@D(xfH=j,o=xw.Me4aT5$t3_' );
define( 'SECURE_AUTH_KEY',  '!ac?9Ngz`5Ah3E4&I2R60f&0]S4zk!(Xx8w3w+>BB{jgKb9@lvqpo&6c8Ho[og|<' );
define( 'LOGGED_IN_KEY',    '=`![Y$gvQ{UG@zF+56E,<3MN~o~0&L5ykw9OG;0C#I4|~*;M?xO%jrmU;A0}@B]r' );
define( 'NONCE_KEY',        '}xv2yum[WlLgk&E,c~#LT$Vtt%ics`Q-kUV>flAT}3r*]{64%[,PxsuMa2?e?0^:' );
define( 'AUTH_SALT',        ';brpKcGiQ6 -p!$]p?@;V2uKD)TyG1L?&W@$aIR =IQQXq||WIm61r1mdSBPvIPF' );
define( 'SECURE_AUTH_SALT', '1C7Vw3co{3G]AZ|Hktb-V/1JQnEe63~}TKBcU y!n_bdX9_7`+pm^VI#)TP>NZgq' );
define( 'LOGGED_IN_SALT',   '0BpGTb2P~&YH={[-gus/rJW8t;=Hs%l3)Q1nx2]L NGHM6Z%JD;N]Uonp@Or6u_;' );
define( 'NONCE_SALT',       'zG?403{g@Q[5&53R~[;,U3(VSI:y~)=WX[<E>M+c{#DW5;w[|f<cUGI!{}d!;-N&' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
