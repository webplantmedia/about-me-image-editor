/**
 * About me image editor
 * 
 * @preserve
 * @author Angiemakes www.angiemakes.com
 * @license GPLv2
 * @package Image Editor
 * @version 1.0.12
 */

var config = {
    apiExportURL: 'save.php',
    assetsURL: 'assets/',
    assetsThumbURL: 'assets/{0}',
    presets: [{
            src: 'background/bg.png',
            type: 'background'
        }],
    width: 500,
    height: 600,
    container: 'editor'
};

var imageEditor = {};