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

var imageEditor = {};/**
 * 
 * @type Array
 * @constant
 */
imageEditor.COLORS = [
    '#000000', '#434242', '#888787', '#cbcbca',
    '#7f6b5b', '#c3bea8', '#ef5a36', '#fb9646',
    '#fabe4a', '#e1b54a', '#fdae87', '#fd9887',
    '#fcada0', '#eb6566', '#d64471', '#fc4d93',
    '#d2eada', '#59c5a4', '#b5e1de', '#91dfd7',
    '#528be9', '#114577', '#403ba2', '#4d1177',
    '#c57ade', '#f0cfee'
];
/**
 * 
 * @type Array
 * @constant
 */

imageEditor.TEMPLATE = [
    {
        name: 'Test',
        presets: [{src: "background/bg.png", zindex: 0, type: "background", properties: []}, {title: "An actor must interpret life, and in order to do so must be willing to accept all the experiences life has to offer.", x: 45, y: 59, width: 390, height: 486, scale: 1, deg: .6, zindex: 2, type: "text", properties: [{type: "ShadowColor", value: "#000000"}, {type: "ShadowOffset", value: {x: 0, y: 0}}, {type: "ShadowBlur"}, {type: "ShadowOpacity"}, {type: "TextFill", value: "#ffffff"}, {type: "FontSize", value: 38}, {type: "FontFamily", value: "Sacramento"}, {type: "LineHeight", value: 1.6}, {type: "TextAlign", value: "left"}, {type: "StrokeColor"}, {type: "StrokeWidth", value: 3}]}, {src: "clipart/poppy.png", x: 100, y: 100, width: 600, height: 600, scale: 0.5, deg: -.009, zindex: 1, type: "clipart", properties: []}]
    }, {
        name: 'Test 2',
        presets: [{src: "background/paper.jpg", zindex: 0, type: "background", properties: []}, {title: "Hey! Hope you're liking our About me Image Editor!", x: 35, y: 100, width: 390, height: 486, scale: 1, deg: 3.6, zindex: 2, type: "text", properties: [{type: "TextFill", value: "#5f9ea0"}, {type: "FontSize", value: 37}, {type: "FontFamily", value: "Shadows Into Light"}, {type: "LineHeight", value: 1.4}, {type: "TextAlign", value: "left"}, {type: "StrokeColor"}, {type: "StrokeWidth"}]}, {src: "clipart/photoedge.png", x: 5, y: 5, width: 600, height: 600, scale: .9, deg: -.009, zindex: 1, type: "clipart", properties: []}]
    }, {
        name: 'Test 3',
        presets: [{"src":"background/bg.png","zindex":0,"type":"background","properties":[]},{"src":"clipart/poppy.png","x":100,"y":100,"width":600,"height":600,"scale":0.5,"deg":-0.009,"zindex":1,"type":"clipart","properties":[{"type":"Opacity","value":1}]},{"title":"An actor must interpret life, and in order to do so must be willing to accept all the experiences life has to offer.","x":57,"y":227,"width":390,"height":243.20000000000002,"scale":1,"deg":0.6,"zindex":2,"type":"text","properties":[{"type":"ShadowColor","value":"#000000"},{"type":"ShadowOffset","value":{"x":0,"y":0}},{"type":"ShadowBlur"},{"type":"ShadowOpacity"},{"type":"Opacity","value":1},{"type":"TextFill","value":"#ffffff"},{"type":"FontSize","value":38},{"type":"FontFamily","value":"Sacramento"},{"type":"LineHeight","value":1.6},{"type":"TextAlign","value":"left"},{"type":"StrokeColor","value":"#000000"},{"type":"StrokeWidth","value":3}]}]
    }, {
    }, {
    }, {
    }, {
    }, {
    }, {
    }, {
    }, {
    }, {
    }, {
    }, {
    }, {
    }
];/**
 * 
 * @type Array
 * @constant
 */
imageEditor.CLIPART_CATEGORIES = [
    'all', 'banners', 'ribbons', 'words', 'washi tapes', 'frames'
];

/**
 * 
 * @type Array
 * @constant
 */
imageEditor.SHAPES = [{
        id: 1,
        type: "clipart",
        tags: "banners",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/banner.png"
    }, {
        id: 2,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/blueribbon.png"
    }, {
        id: 3,
        type: "clipart",
        tags: "banners",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/graylace2.png"
    }, {
        id: 4,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/graywashitape.png"
    }, {
        id: 5,
        type: "clipart",
        tags: "banners",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/lace.png"
    }, {
        id: 6,
        type: "clipart",
        tags: "banners",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/photoedge.png"
    }, {
        id: 7,
        type: "clipart",
        tags: "banners",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/poppy.png"
    }, {
        id: 8,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/purplewatercolor.png"
    }, {
        id: 9,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/ribbonwatercolor.png"
    }, {
        id: 10,
        type: "clipart",
        tags: "banners",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/washitape.png"
    }, {
        id: 11,
        type: "clipart",
        tags: "banners",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/watercolorfeathers.png"
    }, {
        id: 12,
        type: "clipart",
        tags: "banners",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/watercolorlace.png"
    }, {
        id: 13,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 600,
        scale: 0.5,
        src: "clipart/whiteribbon.png"
    }, {
        id: 14,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 275,
        scale: 0.5,
        src: "clipart/grayribbon.png"
    }, {
        id: 15,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 209,
        scale: 0.5,
        src: "clipart/line.png"
    }, {
        id: 16,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 209,
        scale: 0.5,
        src: "clipart/ornament.png"
    }, {
        id: 17,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 209,
        scale: 0.5,
        src: "clipart/swirl.png"
    }, {
        id: 18,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 246,
        scale: 0.5,
        src: "clipart/textured.png"
    }, {
        id: 19,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 209,
        scale: 0.5,
        src: "clipart/textured2.png"
    }, {
        id: 20,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 209,
        scale: 0.5,
        src: "clipart/white.png"
    }, {
        id: 21,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 209,
        scale: 0.5,
        src: "clipart/Untitled1-3.png"
    }, {
        id: 22,
        type: "clipart",
        tags: "ribbons",
        width: 600,
        height: 177,
        scale: 0.5,
        src: "clipart/Untitled-3.png"
    }, {
        id: 23,
        type: "clipart",
        tags: "words",
        width: 600,
        height: 184,
        scale: 0.5,
        src: "clipart/aboutme.png"
    }, {
        id: 24,
        type: "clipart",
        tags: "words",
        width: 600,
        height: 184,
        scale: 0.5,
        src: "clipart/blackhello.png"
    }, {
        id: 25,
        type: "clipart",
        tags: "words",
        width: 600,
        height: 184,
        scale: 0.5,
        src: "clipart/grayaboutme.png"
    }, {
        id: 26,
        type: "clipart",
        tags: "words",
        width: 600,
        height: 184,
        scale: 0.5,
        src: "clipart/graywelcome.png"
    }, {
        id: 27,
        type: "clipart",
        tags: "words",
        width: 600,
        height: 184,
        scale: 0.5,
        src: "clipart/hellograycallig.png"
    }, {
        id: 28,
        type: "clipart",
        tags: "words",
        width: 600,
        height: 184,
        scale: 0.5,
        src: "clipart/welcomeblack.png"
    }, {
        id: 29,
        type: "clipart",
        tags: "words",
        width: 600,
        height: 205,
        scale: 0.5,
        src: "clipart/whitewelcome.png"
    }, {
        id: 30,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 156,
        scale: 0.5,
        src: "clipart/graybottompaint.png"
    }, {
        id: 31,
        type: "clipart",
        tags: "washi tapes",
        width: 446,
        height: 103,
        scale: 0.5,
        src: "clipart/brown.png"
    }, {
        id: 32,
        type: "clipart",
        tags: "washi tapes",
        width: 445,
        height: 104,
        scale: 0.5,
        src: "clipart/coralbluescrapbookpaper.png"
    }, {
        id: 33,
        type: "clipart",
        tags: "washi tapes",
        width: 448,
        height: 105,
        scale: 0.5,
        src: "clipart/dots.png"
    }, {
        id: 34,
        type: "clipart",
        tags: "washi tapes",
        width: 446,
        height: 103,
        scale: 0.5,
        src: "clipart/graystripes.png"
    }, {
        id: 35,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 138,
        scale: 0.5,
        src: "clipart/paint.png"
    }, {
        id: 36,
        type: "clipart",
        tags: "washi tapes",
        width: 446,
        height: 103,
        scale: 0.5,
        src: "clipart/plainwhite.png"
    }, {
        id: 37,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 162,
        scale: 0.5,
        src: "clipart/Untitled-1.png"
    }, {
        id: 38,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 162,
        scale: 0.5,
        src: "clipart/Untitled-2.png"
    }, {
        id: 39,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 162,
        scale: 0.5,
        src: "clipart/Untitled-3-.png"
    }, {
        id: 40,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 162,
        scale: 0.5,
        src: "clipart/Untitled-4.png"
    }, {
        id: 41,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 133,
        scale: 0.5,
        src: "clipart/Untitled-5.png"
    }, {
        id: 42,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 133,
        scale: 0.5,
        src: "clipart/Untitled-6.png"
    }, {
        id: 43,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 133,
        scale: 0.5,
        src: "clipart/Untitled-7.png"
    }, {
        id: 44,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 162,
        scale: 0.5,
        src: "clipart/Untitled-8.png"
    }, {
        id: 45,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 162,
        scale: 0.5,
        src: "clipart/Untitled-9.png"
    }, {
        id: 46,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 150,
        scale: 0.5,
        src: "clipart/Untitled-10.png"
    }, {
        id: 47,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 150,
        scale: 0.5,
        src: "clipart/Untitled-11.png"
    }, {
        id: 48,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 150,
        scale: 0.5,
        src: "clipart/Untitled-12.png"
    }, {
        id: 49,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 150,
        scale: 0.5,
        src: "clipart/Untitled-13.png"
    }, {
        id: 50,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 150,
        scale: 0.5,
        src: "clipart/Untitled-14.png"
    }, {
        id: 51,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 150,
        scale: 0.5,
        src: "clipart/Untitled-15.png"
    }, {
        id: 52,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 150,
        scale: 0.5,
        src: "clipart/Untitled-16.png"
    }, {
        id: 53,
        type: "clipart",
        tags: "washi tapes",
        width: 600,
        height: 150,
        scale: 0.5,
        src: "clipart/Untitled-17.png"
    }, {
        id: 54,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-basicsquare.png"
    }, {
        id: 55,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-black.png"
    }, {
        id: 56,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-blackcircle.png"
    }, {
        id: 57,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 517,
        scale: 1,
        src: "frame/frame-blacklineframe.png"
    }, {
        id: 58,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-blacksquare.png"
    }, {
        id: 59,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-circle.png"
    }, {
        id:60,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-circleblack.png"
    }, {
        id: 61,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-cutcornerframe.png"
    }, {
        id: 62,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 295,
        scale: 1,
        src: "frame/frame-frame1.png"
    }, {
        id: 63,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 498,
        scale: 1,
        src: "frame/frame-geoframe.png"
    }, {
        id: 64,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 498,
        scale: 1,
        src: "frame/frame-geoframewhite.png"
    }, {
        id: 65,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-grayframe.png"
    }, {
        id: 66,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-grayoval.png"
    }, {
        id: 67,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 517,
        scale: 1,
        src: "frame/frame-lightwhitegrunge.png"
    }, {
        id: 68,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-oval.png"
    }, {
        id: 69,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-ovalwithgray.png"
    }, {
        id: 70,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-polaroidframe.png"
    }, {
        id: 71,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 517,
        scale: 1,
        src: "frame/frame-redlinegrunge.png"
    }, {
        id: 72,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-roundedrect.png"
    }, {
        id: 73,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-roundedrectlightgray.png"
    }, {
        id: 74,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-roundedrectwithgray.png"
    }, {
        id: 75,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-subtlegrungeframe.png"
    }, {
        id: 76,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-subtlewhiteframe.png"
    }, {
        id: 77,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-tanframe.png"
    }, {
        id: 78,
        type: "clipart",
        tags: "frames",
        width: 600,
        height: 600,
        scale: 1,
        src: "frame/frame-grayladygray.png"
    }];
/**
 * 
 * @type Array
 * @constant
 */
imageEditor.FONTS = [{
        type: "FontFamily",
        title: "Handwriting",
        data: [{
                id: 19,
                title: "Abril Fatface"
            }, {
                id: 2,
                title: "Alef"
            }, {
                id: 127,
                title: "Alex Brush"
            }, {
                id: 98,
                title: "Allura"
            }, {
                id: 90,
                title: "Amatic SC"
            }, {
                id: 14,
                title: "Annie Use Your Telescope"
            }, {
                id: 101,
                title: "Anonymous Pro"
            }, {
                id: 56,
                title: "Antic Didone"
            }, {
                id: 6,
                title: "Architects Daughter"
            }, {
                id: 138,
                title: "Arvo"
            }, {
                id: 115,
                title: "Bad Script"
            }, {
                id: 49,
                title: "Belgrano"
            }, {
                id: 28,
                title: "BenchNine"
            }, {
                id: 62,
                title: "Bentham"
            }, {
                id: 36,
                title: "Berkshire Swash"
            }, {
                id: 70,
                title: "Boogaloo"
            }, {
                id: 148,
                title: "Bubbler One"
            }, {
                id: 58,
                title: "Buda"
            }, {
                id: 72,
                title: "Butterfly Kids"
            }, {
                id: 99,
                title: "Cabin Condensed"
            }, {
                id: 84,
                title: "Cabin Sketch"
            }, {
                id: 20,
                title: "Cagliostro"
            }, {
                id: 10,
                title: "Carrois Gothic"
            }, {
                id: 41,
                title: "Cedarville Cursive"
            }, {
                id: 134,
                title: "Clicker Script"
            }, {
                id: 107,
                title: "Comfortaa"
            }, {
                id: 114,
                title: "Coming Soon"
            }, {
                id: 66,
                title: "Courgette"
            }, {
                id: 31,
                title: "Cousine"
            }, {
                id: 81,
                title: "Covered By Your Grace"
            }, {
                id: 103,
                title: "Crushed"
            }, {
                id: 85,
                title: "Cutive"
            }, {
                id: 60,
                title: "Cutive Mono"
            }, {
                id: 94,
                title: "Dancing Script"
            }, {
                id: 119,
                title: "Damion"
            }, {
                id: 105,
                title: "Dawning of a New Day"
            }, {
                id: 88,
                title: "Delius"
            }, {
                id: 38,
                title: "Devonshire"
            }, {
                id: 3,
                title: "Dr Sugiyama"
            }, {
                id: 24,
                title: "Elsie"
            }, {
                id: 9,
                title: "Engagement"
            }, {
                id: 77,
                title: "Euphoria Script"
            }, {
                id: 4,
                title: "Fauna One"
            }, {
                id: 44,
                title: "Finger Paint"
            }, {
                id: 120,
                title: "Flamenco"
            }, {
                id: 43,
                title: "Gabriela"
            }, {
                id: 18,
                title: "Gilda Display"
            }, {
                id: 102,
                title: "Give You Glory"
            }, {
                id: 21,
                title: "Gloria Hallelujah"
            }, {
                id: 150,
                title: "Grand Hotel"
            }, {
                id: 25,
                title: "Great Vibes"
            }, {
                id: 59,
                title: "Gruppo"
            }, {
                id: 135,
                title: "Handlee"
            }, {
                id: 7,
                title: "Happy Monkey"
            }, {
                id: 17,
                title: "Herr Von Muellerhoff"
            }, {
                id: 82,
                title: "IM Fell DW Pica SC"
            }, {
                id: 104,
                title: "IM Fell English SC"
            }, {
                id: 35,
                title: "Indie Flower"
            }, {
                id: 139,
                title: "Josefin Sans"
            }, {
                id: 47,
                title: "Josefin Slab"
            }, {
                id: 116,
                title: "Julius Sans One"
            }, {
                id: 75,
                title: "Jura"
            }, {
                id: 124,
                title: "Just Another Hand"
            }, {
                id: 144,
                title: "Just Me Again Down Here"
            }, {
                id: 15,
                title: "Kite One"
            }, {
                id: 111,
                title: "Kranky"
            }, {
                id: 113,
                title: "Kristi"
            }, {
                id: 108,
                title: "La Belle Aurore"
            }, {
                id: 140,
                title: "League Script"
            }, {
                id: 133,
                title: "Leckerli One"
            }, {
                id: 145,
                title: "Lekton"
            },{
                id: 1,
                title: "Lily Script One"
            }, {
                id: 74,
                title: "Lobster"
            }, {
                id: 57,
                title: "Lobster Two"
            }, {
                id: 97,
                title: "Londrina Outline"
            }, {
                id: 46,
                title: "Londrina Sketch"
            }, {
                id: 5,
                title: "Loved by the King"
            }, {
                id: 123,
                title: "Marck Script"
            }, {
                id: 65,
                title: "Meddon"
            }, {
                id: 95,
                title: "Megrim"
            }, {
                id: 50,
                title: "Merriweather"
            }, {
                id: 30,
                title: "Miniver"
            }, {
                id: 79,
                title: "Miltonian"
            }, {
                id: 93,
                title: "Miltonian Tattoo"
            }, {
                id: 130,
                title: "Monoton"
            }, {
                id: 122,
                title: "Montez"
            }, {
                id: 146,
                title: "Mr De Haviland"
            }, {
                id: 147,
                title: "Mr Bedfort"
            }, {
                id: 126,
                title: "Mrs Saint Delafield"
            }, {
                id: 42,
                title: "Muli"
            }, {
                id: 45,
                title: "Neucha"
            }, {
                id: 48,
                title: "Niconne"
            }, {
                id: 128,
                title: "Nixie One"
            }, {
                id: 100,
                title: "Nobile"
            }, {
                id: 23,
                title: "Noto Sans"
            }, {
                id: 125,
                title: "Nothing You Could Do"
            }, {
                id: 137,
                title: "Old Standard TT"
            }, {
                id: 8,
                title: "Oregano"
            }, {
                id: 13,
                title: "Over the Rainbow"
            }, {
                id: 78,
                title: "Oleo Script"
            }, {
                id: 69,
                title: "Orienta"
            }, {
                id: 61,
                title: "Open Sans"
            }, {
                id: 53,
                title: "Open Sans Condensed"
            }, {
                id: 64,
                title: "Oswald"
            }, {
                id: 33,
                title: "Prata"
            }, {
                id: 32,
                title: "PT Sans"
            }, {
                id: 51,
                title: "Playball"
            }, {
                id: 80,
                title: "Playfair Display"
            }, {
                id: 76,
                title: "Patrick Hand"
            }, {
                id: 68,
                title: "Petit Formal Script"
            }, {
                id: 55,
                title: "PT Sans Narrow"
            }, {
                id: 83,
                title: "Pacifico"
            }, {
                id: 129,
                title: "Parisienne"
            }, {
                id: 118,
                title: "Poiret One"
            }, {
                id: 149,
                title: "Pompiere"
            }, {
                id: 92,
                title: "PT Serif"
            }, {
                id: 86,
                title: "PT Serif Caption"
            }, {
                id: 143,
                title: "Princess Sofia"
            }, {
                id: 37,
                title: "Questrial"
            }, {
                id: 91,
                title: "Quicksand"
            }, {
                id: 16,
                title: "Ribeye"
            }, {
                id: 27,
                title: "Ribeye Marrow"
            }, {
                id: 52,
                title: "Roboto Slab"
            }, {
                id: 54,
                title: "Raleway"
            }, {
                id: 87,
                title: "Reenie Beanie"
            }, {
                id: 136,
                title: "Rochester"
            }, {
                id: 109,
                title: "Rouge Script"
            }, {
                id: 106,
                title: "Ruluko"
            }, {
                id: 12,
                title: "Stint Ultra Expanded"
            }, {
                id: 67,
                title: "Sarina"
            }, {
                id: 117,
                title: "Sacramento"
            }, {
                id: 112,
                title: "Sail"
            }, {
                id: 132,
                title: "Satisfy"
            }, {
                id: 63,
                title: "Seaweed Script"
            }, {
                id: 142,
                title: "Shadows Into Light"
            }, {
                id: 34,
                title: "Shadows Into Light Two"
            }, {
                id: 141,
                title: "Snippet"
            }, {
                id: 131,
                title: "Sofia"
            }, {
                id: 73,
                title: "Sorts Mill Goudy"
            }, {
                id: 10,
                title: "Source Sans Pro"
            }, {
                id: 11,
                title: "Stalemate"
            }, {
                id: 40,
                title: "Sue Ellen Francisco"
            }, {
                id: 110,
                title: "Swanky and Moo Moo"
            }, {
                id: 26,
                title: "The Girl Next Door"
            }, {
                id: 29,
                title: "Vast Shadow"
            }, {
                id: 22,
                title: "Vibur"
            }, {
                id: 39,
                title: "Yeseva One"
            }, {
                id: 89,
                title: "Yesteryear"
            }, {
                id: 71,
                title: "Waiting for the Sunrise"
            }, {
                id: 96,
                title: "Walter Turncoat"
            }, {
                id: 121,
                title: "Zeyada"
            }]
    }];/**
 * 
 * @type Array
 * @constant
 */
imageEditor.EFFECTS = [{
        id: 1,
        title: "None",
        value: {
            name: "none"
        }
    }, {
        id: 7,
        title: "Black & White",
        value: {
            name: "blackwhite"
        }
    }, {
        id: 4,
        title: "Clarity",
        value: {
            name: "clarity"
        }
    }, {
        id: 19,
        title: "Concentrate",
        value: {
            name: "concentrate"
        }
    }, {
        id: 7,
        title: "Cross Process",
        value: {
            name: "crossProcess"
        }
    }, {
        id: 14,
        title: "Glowing Sun",
        value: {
            name: "glowingSun"
        }
    }, {
        id: 10,
        title: "Grungy",
        value: {
            name: "grungy"
        }
    }, {
        id: 15,
        title: "Hazy Days",
        value: {
            name: "hazyDays"
        }
    }, {
        id: 18,
        title: "Hemingway",
        value: {
            name: "hemingway"
        }
    }, {
        id: 16,
        title: "Her Majesty",
        value: {
            name: "herMajesty"
        }
    }, {
        id: 11,
        title: "Jarques",
        value: {
            name: "jarques"
        }
    }, {
        id: 3,
        title: "Lomo",
        value: {
            name: "lomo"
        }
    }, {
        id: 9,
        title: "Love",
        value: {
            name: "love"
        }
    }, {
        id: 17,
        title: "Nostalgia",
        value: {
            name: "nostalgia"
        }
    }, {
        id: 13,
        title: "Old Boot",
        value: {
            name: "oldBoot"
        }
    }, {
        id: 8,
        title: "Orange Peel",
        value: {
            name: "orangePeel"
        }
    }, {
        id: 12,
        title: "Pinhole",
        value: {
            name: "pinhole"
        }
    }, {
        id: 5,
        title: "Sepia",
        value: {
            name: "sepia"
        }
    }, {
        id: 5,
        title: "Sin City",
        value: {
            name: "sinCity"
        }
    }, {
        id: 6,
        title: "Sunrise",
        value: {
            name: "sunrise"
        }
    }, {
        id: 2,
        title: "Vintage",
        value: {
            name: "vintage"
        }
    }];/**
 * 
 * @type Array
 * @constant
 */
imageEditor.TOOLS = [/*{
        method: 'reset',
        type: 'background clipart text circle line rectangle triangle image',
        id: 'reset',
        tip: 'Reset the Workspace',
        icon: 'reset'
    }, */{
        method: 'back',
        type: 'clipart text circle line rectangle triangle image',
        id: 'back',
        tip: 'Back',
        icon: 'return'
    }, {
        method: 'delete',
        type: 'clipart text circle line rectangle triangle image',
        id: 'Delete',
        tip: 'Delete Object',
        icon: 'trash'
    }, {
        method: 'editText',
        type: 'background',
        id: 'text',
        tip: 'Add Text',
        icon: 'text'
    }, /*{
        method: 'showProperty',
        type: 'background',
        id: 'Images',
        tip: 'Add Images',
        icon: 'images'
    }, */{
        method: 'showWindow',
        type: 'background',
        id: 'clipart',
        tip: 'Add Clipart',
        icon: 'clipart'
    }, {
        method: 'showProperty',
        type: 'background',
        id: 'shape',
        tip: 'Add Shapes',
        icon: 'shapes'
    }, {
        method: 'changeBackground',
        type: 'background',
        id: 'upload',
        tip: 'Change background',
        icon: 'background'
    },/* {
        method: 'showProperty',
        type: 'background',
        id: 'frameGroup',
        tip: 'Add Frame',
        icon: 'frame'
    }, */{
        method: 'showProperty',
        type: 'background clipart image',
        id: 'Brightness',
        tip: 'Change Brightness',
        icon: 'brightness'
    }, {
        method: 'showProperty',
        type: 'background clipart image',
        id: 'Contrast',
        tip: 'Change Contrast',
        icon: 'contrast'
    }, {
        method: 'showProperty',
        type: 'background image',
        id: 'Filter',
        tip: 'Apply Image Effects',
        icon: 'filter'
    }, {
        method: 'moveToTop',
        type: 'clipart text circle line rectangle triangle image',
        id: 'ToTop',
        tip: 'Move to Front',
        icon: 'front'
    }, {
        method: 'moveToBottom',
        type: 'clipart text circle line rectangle triangle image',
        id: 'ToBottom',
        tip: 'Move to Back',
        icon: 'back'
    }, {
        method: 'flipHorizontal',
        type: 'clipart image',
        id: 'FlipH',
        tip: 'Flip Horizontal',
        icon: 'fliph'
    }, {
        method: 'flipVertical',
        type: 'clipart image',
        id: 'FlipV',
        tip: 'Flip Vertical',
        icon: 'flipv'
    }, {
        method: 'showProperty',
        type: 'clipart text circle line rectangle triangle image',
        id: 'Opacity',
        tip: 'Change Opacity',
        icon: 'opacity'
    }, {
        method: 'showProperty',
        type: 'clipart text circle line rectangle triangle image',
        id: 'shadow',
        tip: 'Add Shadow',
        icon: 'shadow'
    }, {
        method: 'showProperty',
        type: 'clipart circle line rectangle triangle',
        id: 'FillColor',
        tip: 'Color Fill',
        icon: 'color'
    }, {
        method: 'editText',
        type: 'text',
        id: 'editText',
        tip: 'Edit Text',
        icon: 'text'
    }, {
        method: 'showProperty',
        type: 'text',
        id: 'fontFamilyGroup',
        tip: 'Font Family',
        icon: 'font'
    }, {
        method: 'showProperty',
        type: 'text',
        id: 'style',
        tip: 'Font Style',
        icon: 'text-style'
    }, {
        method: 'showProperty',
        type: 'text circle line rectangle triangle',
        id: 'stroke',
        tip: 'Stroke',
        icon: 'text-stroke'
    }];/**
 * 
 * @type Array
 * @constant
 */
imageEditor.SETTINGS = [{
        type: "shadow",
        grouped: true,
        items: [{
                type: "ShadowColor",
                title: "Color",
                data: {
                    type: "color",
                    range: "basic",
                    transparent: true
                }
            }, {
                type: "ShadowBlur",
                title: "Blur",
                data: {
                    type: "range",
                    min: 0,
                    max: 40,
                    step: 1,
                    start: 4
                }
            }, {
                type: "ShadowOffset",
                title: "Offset",
                data: {
                    type: "double-range",
                    min: -50,
                    max: 50,
                    step: 1,
                    start: 4
                }
            }, {
                type: "ShadowOpacity",
                title: "Opacity",
                data: {
                    type: "range",
                    min: 0,
                    max: 1,
                    step: 0.1,
                    start: 0.5
                }
            }]
    }, {
        type: "Filter",
        data: imageEditor.EFFECTS
    }, {
        type: "shape",
        data: [{
                id: 1,
                title: "Line",
                value: {
                    name: "line"
                }
            }, {
                id: 2,
                title: "Circle",
                value: {
                    name: "circle"
                }
            }, {
                id: 3,
                title: "Rectangle",
                value: {
                    name: "rectangle"
                }
            }, {
                id: 4,
                title: "Triangle",
                value: {
                    name: "triangle"
                }
            }]
    }, {
        type: "style",
        items: [{
                type: "TextFill",
                title: "Text Fill",
                data: {
                    type: "color"
                }
            }, {
                type: "FontSize",
                title: "Text Size",
                data: {
                    type: "range",
                    min: 8,
                    max: 120,
                    step: 1,
                    start: 28
                }
            }, {
                type: "FontStyle",
                title: "Font Style",
                data: [{
                        id: 1,
                        title: "Normal",
                        value: "normal"
                    }, {
                        id: 2,
                        title: "Italic",
                        value: "italic"
                    }, {
                        id: 3,
                        title: "Bold",
                        value: "bold"
                    }]
            }, {
                type: "TextAlign",
                title: "Text Align",
                data: [{
                        id: 1,
                        title: "Left",
                        value: "left"
                    }, {
                        id: 2,
                        title: "Center",
                        value: "center"
                    }, {
                        id: 3,
                        title: "Right",
                        value: "right"
                    }]
            }, {
                type: "LineHeight",
                title: "Line Height",
                data: {
                    type: "range",
                    min: 0.6,
                    max: 4,
                    step: 0.1,
                    start: 2
                }
            }]
    }, {
        type: "border",
        items: [{
                type: "BorderWidth",
                title: "Border Width",
                data: {
                    type: "range",
                    min: 0,
                    max: 100,
                    step: 10,
                    start: 0
                }
            }, {
                type: "BorderColor",
                title: "Border Color",
                data: {
                    type: "color"
                }
            }, {
                type: "CornerRadius",
                title: "Corner Radius",
                data: {
                    type: "range",
                    min: 0,
                    max: 800,
                    step: 10,
                    start: 0
                }
            }]
    }, {
        type: "stroke",
        items: [{
                type: "StrokeWidth",
                title: "Stroke Width",
                data: {
                    type: "range",
                    min: 1,
                    max: 40,
                    step: 1,
                    start: 1
                }
            }, {
                type: "StrokeColor",
                title: "Stroke Color",
                data: {
                    type: "color",
                    transparent: true
                }
            }]
    }, {
        type: "fontFamilyGroup",
        items: imageEditor.FONTS
    }, {
        type: "Brightness",
        title: "Brightness",
        data: {
            type: "range",
            min: -100,
            max: 100,
            step: 1,
            start: 0,
            serialize: false
        }
    }, {
        type: "Contrast",
        title: "Contrast",
        data: {
            type: "range",
            min: -100,
            max: 100,
            step: 1,
            start: 0,
            serialize: false
        }
    }, {
        type: "Opacity",
        title: "Opacity",
        data: {
            type: "range",
            min: 0,
            max: 1,
            step: 0.01,
            start: 1
        }
    }, {
        type: "FillColor",
        title: "Color",
        data: {
            type: "color",
            range: "basic",
            transparent: true
        }
    }];/**
 * Generic class
 */
(function() {
    var n = false, t = /xyz/.test(function() {
        xyz;
    }) ? /\b__superobject\b/ : /.*/;
    this.Class = function() {
    };
    Class.extend = function(i) {
        function u() {
            !n && this.__constructor && this.__constructor.apply(this, arguments);
        }
        var e = this.prototype, f, r;
        n = true;
        f = new this;
        n = false;
        for (r in i)
            f[r] = typeof i[r] === "function" && typeof e[r] === "function" && t.test(i[r]) ? function(n, t) {
                return function() {
                    var r = this.__superobject, i;
                    return this.__superobject = e[n], i = t.apply(this, arguments), this.__superobject = r, i;
                };
            }(r, i[r]) : i[r];
        return u.prototype = f, u.prototype.constructor = u, u.extend = arguments.callee, u;
    };
}());/**
 * @class Core object class
 * @returns {Object}
 * @augments Class
 */
imageEditor.coreObject = Class.extend(
        /** @lends imageEditor.coreObject.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        for (var t in params) {
                            this[t] = params[t];
                        }
                        this.eventListeners = {};
                    },
                    /**
                     * Setup an event
                     * 
                     * @public
                     * @param {String} event
                     * @param {Function} callback
                     */
                    on: function(event, callback) {
                        this.eventListeners[event] || (this.eventListeners[event] = []);
                        this.eventListeners[event].push(callback);
                    },
                    /**
                     * Trigger an event
                     * 
                     * @public
                     * @param {String} event
                     * @param {Object} callback
                     */
                    fire: function(event, callback) {
                        var r = this.eventListeners[event], u, i;
                        if (r) {
                            for (u = r.length, i = 0; i < u; i++) {
                                r[i].apply(this, [callback || {}]);
                            }
                        }
                    }
                }
        );/**
 * @class UI element class
 * @returns {Object}
 * @augments imageEditor.coreObject
 */
imageEditor.uiElement = imageEditor.coreObject.extend(
        /** @lends imageEditor.uiElement.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.__superobject(params);
                        this.propertyQueue = [];
                    },
                    /**
                     * Process and load image(s) into this element
                     * 
                     * @param {Array} n
                     * @param {Function} t
                     */
                    loadImages: function(n, t) {
                        this.fire("progress-start", "Loading image", this);
                        var i = 0, r = {};
                        $.each(n, function(u, f) {
                            var e = new Image;
                            e.onload = function() {
                                r[f] = e;
                                i++;
                                i == n.length && (t(r), this.fire("progress-complete", this));
                            }.bind(this);
                            e.onerror = function() {
                                this.fire("progress-complete", this);
                                this.fire("error", "The image could not be loaded", this);
                            }.bind(this);
                            e.src = f.toLowerCase().startsWith("http") || f.toLowerCase().startsWith("data") ? f : config.assetsURL + f;
                        }.bind(this));
                    },
                    draw: function() {
                    },
                    deselect: function() {
                    },
                    getProperties: function() {
                    },
                    /**
                     * Select this element
                     * 
                     * @public
                     */
                    select: function() {
                        this.fire("select", this);
                    },
                    /**
                     * Redraw the main editor stage
                     * 
                     * @public
                     */
                    drawStage: function() {
                        this.layer.getStage().draw();
                    },
                    setProperty: function(type, value, callback) {
                        var found, i, f, prop;
                        if (this.propertyQueue.length > 0 || this.propertyInProgress) {
                            for (found = false, i = 0; i < this.propertyQueue.length; ++i)
                                this.propertyQueue[i].type === type && (this.propertyQueue[i].value = value, this.propertyQueue[i].callback = callback, found = true);
                            found || this.propertyQueue.push({
                                type: type,
                                value: value,
                                callback: callback
                            });
                            return;
                        }
                        this.propertyInProgress = true;
                        f = eval("this.set" + type);
                        this._isAsyncProperty(type) ? f.call(this, value, function() {
                            if (callback && callback.call(this), this.propertyInProgress = false, this.propertyQueue.length > 0) {
                                var n = this.propertyQueue.pop();
                                this.setProperty(n.type, n.value, n.callback);
                            }
                        }.bind(this)) : (f.call(this, value), callback && callback.call(this), this.propertyInProgress = false, this.propertyQueue.length > 0 && (prop = this.propertyQueue.pop(), this.setProperty(prop.type, prop.value, prop.callback)));
                    },
                    getProperty: function(type) {
                        var f = eval("this.get" + type);
                        return f ? f.call(this) : null;
                    },
                    applyProperties: function(callback) {
                        if (this.properties) {
                            var t = null, i = function(r) {
                                if (r === this.properties.length) {
                                    callback.call(this);
                                    return;
                                }
                                t = this.properties[r];
                                r++;
                                this.setProperty(t.type, t.value, function() {
                                    i(r);
                                }.bind(this));
                            }.bind(this);
                            i(0);
                        } else
                            callback.call(this);
                    },
                    /**
                     * Check if the property can lock down the browser (is async)
                     * 
                     * @private
                     * @param {String} property
                     * @returns {Boolean}
                     */
                    _isAsyncProperty: function(property) {
                        return property === "FontFamily" || property === "Frame" || property === "Filter" || property == "Contrast" || property == "Brightness";
                    },
                    /**
                     * Get the configuration of an element property
                     * 
                     * @param {Array} property
                     * @private
                     * @returns {Object}
                     */
                    _getPropertyConfig: function(property) {
                        var t, i;
                        if (property instanceof Array) {
                            for (t = [], i = 0; i < property.length; ++i)
                                t[t.length] = this._getPropertyConfig(property[i]);
                            return t;
                        }
                        return {
                            type: property,
                            value: this.getProperty(property)
                        };
                    },
                    getConfig: function() {
                        return {
                            type: this.type,
                            properties: this.getProperties()
                        };
                    }
                }
        );/**
 * @class Shape element class
 * @returns {Object}
 * @augments imageEditor.uiElement
 */
imageEditor.uiShape = imageEditor.uiElement.extend(
        /** @lends imageEditor.uiShape.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} n
                     * @constructs
                     */
                    __constructor: function(n, t) {
                        var i, r;
                        this.__superobject(n, t);
                        this.properties = this.properties || [];
                        this.width = this.width || 100;
                        this.height = this.height || 100;
                        this.scale = this.scale || 1;
                        this.deg = this.deg || 0;
                        this.x || (i = this.layer.getCanvas().getWidth(), this.x = this.cornerOffset ? this.getStageWidth() / 2 - this.width * this.scale / 2 : this.getStageWidth() / 2);
                        this.y || (r = this.layer.getCanvas().getHeight(), this.y = this.cornerOffset ? this.getStageHeight() / 2 - this.height * this.scale / 2 : this.getStageHeight() / 2);
                        this.group = new Kinetic.Group({
                            x: this.x,
                            y: this.y,
                            width: this.width,
                            height: this.height,
                            draggable: true,
                            dragOnTop: false,
                            scale: {
                                x: this.scale,
                                y: this.scale
                            },
                            rotation: this.deg
                        });
                        this.cornerOffset === undefined && this.group.offset(this.width / 2, this.height / 2);
                        this.group.on("mousedown tap dragstart", function() {
                            this.ready && this.select();
                        }.bind(this));
                        this.group.on("dragmove", function() {
                            var n = this.group.position();
                            this.setPosition(n.x, n.y);
                            this.updateAnchorPosition();
                        }.bind(this));
                        this.layer.add(this.group);
                        this.zindex || this.group.moveToTop();
                    },
                    getStageWidth: function() {
                        return this.layer.getStage().getWidth() / this.layer.getStage().scale().x;
                    },
                    getStageHeight: function() {
                        return this.layer.getStage().getHeight() / this.layer.getStage().scale().y;
                    },
                    dispose: function() {
                        this.group.remove();
                        this.anchor.remove();
                        this.drawStage();
                    },
                    moveToTop: function() {
                        this.group.moveToTop();
                        this.anchor.moveToTop();
                    },
                    moveToBottom: function() {
                        this.anchor.moveToBottom();
                        this.group.moveToBottom();
                    },
                    setPosition: function(x, y) {
                        this.x = x;
                        this.y = y;
                    },
                    /**
                     * Select this element
                     * 
                     * @public
                     */
                    select: function() {
                        this.selected = true;
                        this.boundingBox || (this.boundingBox = new Kinetic.Rect({
                            width: this.width,
                            height: this.height,
                            stroke: "#FC7488",
                            strokeWidth: 0.5,
                            dash: [2, 2]
                        }), this.group.add(this.boundingBox), this.addAnchor());
                        this.boundingBox.show();
                        this.anchor.show();
                        this.__superobject();
                    },
                    /**
                     * De-select this element
                     * 
                     * @public
                     */
                    deselect: function() {
                        this.selected = false;
                        this.boundingBox && (this.boundingBox.hide(), this.anchor.hide());
                    },
                    updateAnchorPosition: function() {
                        var n = this.group.position(), t = 0, i;
                        this.cornerOffset ? (t = this._distance({
                            x: 0,
                            y: 0
                        }, {
                            x: this.width * this.scale,
                            y: 0
                        }), this.startAngle = this._angle({
                            x: n.x,
                            y: n.y
                        }, {
                            x: n.x + this.width,
                            y: n.y
                        })) : (this.startAngle = this._angle({
                            x: n.x,
                            y: n.y
                        }, {
                            x: n.x + this.width / 2,
                            y: n.y - this.height / 2
                        }), t = this._distance({
                            x: 0,
                            y: 0
                        }, {
                            x: this.width * this.scale / 2,
                            y: this.height * this.scale / -2
                        }));
                        i = this._getPointAt(this.group.position(), t, this.group.rotation() + this.startAngle);
                        this.anchor.position(i);
                    },
                    update: function() {
                        var n = this.group.position(), i = this.anchor.position(), r = this.anchor.offset(), u = {
                            x: i.x - r.x,
                            y: i.y - r.y
                        }, e = this._angle(n, u), t, f;
                        this.deg = e - this.startAngle - this.anchor.rotation();
                        this.group.rotation(this.deg);
                        t = 0;
                        t = this.cornerOffset ? this._distance(n, {
                            x: n.x + this.width * this.scale,
                            y: n.y
                        }) : this._distance(n, {
                            x: n.x + this.width * this.scale / 2,
                            y: n.y - this.height * this.scale / 2
                        });
                        f = this._distance(n, u);
                        this.scale = this.scale * f / t;
                        this.group.scale({
                            x: this.scale,
                            y: this.scale
                        });
                        this.layer.draw();
                    },
                    _angle: function(start, end) {
                        var i = {
                            x: start.x,
                            y: start.y - Math.sqrt(Math.abs(end.x - start.x) * Math.abs(end.x - start.x) + Math.abs(end.y - start.y) * Math.abs(end.y - start.y))
                        };
                        return 360 * Math.atan2(end.y - i.y, end.x - i.x) / Math.PI;
                    },
                    _getPointAt: function(n, t, i) {
                        return i *= Math.PI / 180, {
                            x: n.x + Math.sin(Math.PI - i) * t,
                            y: n.y + Math.cos(Math.PI - i) * t
                        };
                    },
                    _distance: function(n, t) {
                        var r = t.x - n.x, i;
                        return r = r * r, i = t.y - n.y, i = i * i, Math.sqrt(r + i);
                    },
                    addAnchor: function() {
                        this.anchor = new Kinetic.Circle({
                            stroke: "#FC7488",
                            fill: "#FC7488",
                            strokeWidth: 0.5,
                            radius: 8,
                            dragOnTop: false,
                            draggable: true,
                            name: 'helper'
                        });
                        this.anchor.on("dragmove", function() {
                            this.update(this);
                        }.bind(this));
                        this.anchor.on("mouseover", function() {
                            this.anchor.stroke('#000');
                            this.drawStage();
                        }.bind(this));
                        this.anchor.on("mouseout", function() {
                            this.anchor.stroke('#FC7488');
                            this.drawStage();
                        }.bind(this));
                        this.updateAnchorPosition();
                        this.layer.add(this.anchor);
                    },
                    setSize: function(width, height) {
                        this.width = width;
                        this.height = height;
                        this.group.setSize(width, height);
                        this.cornerOffset === undefined && this.group.offset(this.width / 2, this.height / 2);
                        this.boundingBox && (this.boundingBox.setSize(width, height), this.updateAnchorPosition());
                    },
                    setHeight: function(value) {
                        this.height = value;
                        this.group.height(value);
                        this.cornerOffset === undefined && this.group.offset(this.width / 2, this.height / 2);
                        this.boundingBox && (this.boundingBox.height(value), this.updateAnchorPosition());
                    },
                    setScale: function(value) {
                        this.scale = value;
                        this.group.scale({
                            x: value,
                            y: value
                        });
                    },
                    applyFilter: function(n, t, callback) {
                        var r, u;
                        if (t.name === "none") {
                            this.filterConfig = null;
                            callback(n);
                            return;
                        }
                        this.filterConfig = t;
                        r = document.createElement("canvas");
                        r.width = n.width;
                        r.height = n.height;
                        u = this;
                        this.fire("download-start", this);
                        Caman(r, n.src, function() {
                            this[t.name]();
                            this.render(function() {
                                var t = r.toDataURL("image/jpeg", .84), n = new Image;
                                n.onload = function() {
                                    r = null;
                                    callback(n);
                                    u.fire("download-complete", this);
                                };
                                n.src = t;
                            });
                        });
                    },
                    setShadowColor: function(value) {
                        this._getShadowedShape().shadowColor(value);
                    },
                    getShadowColor: function() {
                        return this._getShadowedShape().shadowColor();
                    },
                    setShadowBlur: function(value) {
                        this._getShadowedShape().shadowBlur(value);
                    },
                    getShadowBlur: function() {
                        return this._getShadowedShape().shadowBlur();
                    },
                    setShadowOffset: function(value) {
                        this._getShadowedShape().shadowOffset({
                            x: value[0],
                            y: value[1]
                        });
                    },
                    getShadowOffset: function() {
                        return this._getShadowedShape().shadowOffset();
                    },
                    setShadowOpacity: function(value) {
                        this._getShadowedShape().shadowOpacity(value);
                    },
                    getShadowOpacity: function() {
                        return this._getShadowedShape().shadowOpacity();
                    },
                    getShadowConfig: function() {
                        return this._getShadowedShape().hasShadow() ? this._getPropertyConfig(["ShadowColor", "ShadowOffset", "ShadowBlur", "ShadowOpacity"]) : [];
                    },
                    getConfig: function() {
                        return jQuery.extend(false, {
                            x: Math.round(this.x),
                            y: Math.round(this.y),
                            width: this.width,
                            height: this.height,
                            scale: this.scale,
                            deg: this.deg,
                            zindex: this.group.getZIndex()
                        }, this.__superobject());
                    }
                }
        );/**
 * @class Text element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiText = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiText.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.localFonts = ["Arial", "Georgia"];
                        this.cornerOffset = true;
                        this.strokeCol = '#000000';
                        params.width || (params.width = 400);
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.txt = new Kinetic.Text({
                            width: this.width,
                            text: this.title,
                            fill: "black",
                            fontSize: 24,
                            lineHeight: 1.2,
                            fontFamily: "Arial",
                            lineJoin: "round"
                        });
                        this.group.add(this.txt);
                        this.applyProperties(function() {
                            this._updateHeight();
                            this.redraw();
                            this.ready = true;
                            this.fire("ready", this);
                        });
                    },
                    /**
                     * Redraw the element in case it gets altered
                     * 
                     * @public
                     */
                    redraw: function() {
                        this.drawStage();
                    },
                    update: function() {
                        this.__superobject();
                        /*
                         this.setSize(this.scale * this.group.getWidth(), this.scale * this.group.getHeight());
                         this.scale = 1;
                         this.group.scale({
                         x: 1,
                         y: 1
                         });
                         this.txt.setWidth(this.width);
                         this.stroke && this.stroke.width(this.width);
                         this.setHeight(this.txt.getHeight());
                         */
                        this.stroke && this.stroke.width(this.width);
                    },
                    setText: function(value) {
                        this.title = value;
                        this.txt.setText(value);
                        this.stroke && this.stroke.setText(value);
                        this._updateHeight();
                        this.redraw();
                    },
                    getText: function() {
                        return this.txt.getText();
                    },
                    setFontSize: function(size) {
                        this.txt.setFontSize(size);
                        this.stroke && this.stroke.fontSize(size);
                        this._updateHeight();
                    },
                    getFontSize: function() {
                        return this.txt.fontSize();
                    },
                    setLineHeight: function(height) {
                        this.txt.setLineHeight(height);
                        this.stroke && this.stroke.setLineHeight(height);
                        this._updateHeight();
                    },
                    getLineHeight: function() {
                        return this.txt.getLineHeight();
                    },
                    setFontFamily: function(n, t) {
                        jQuery.inArray(n, this.localFonts) !== -1 ? (this._setFontFamily(n), t(this)) : this._loadFont(n, function() {
                            this._setFontFamily(n);
                            t(this);
                        }.bind(this));
                    },
                    getFontFamily: function() {
                        return this.txt.fontFamily();
                    },
                    setTextAlign: function(align) {
                        this.txt.setAlign(align);
                        this.stroke && this.stroke.setAlign(align);
                    },
                    setFontStyle: function(style) {
                        this.txt.fontStyle(style);
                        this.stroke && this.stroke.fontStyle(style);
                    },
                    getFontStyle: function() {
                        return this.txt.fontStyle();
                    },
                    getTextAlign: function() {
                        return this.txt.getAlign();
                    },
                    setTextFill: function(n) {
                        this.txt.setFill(n);
                        this.stroke && this.stroke.fill(n);
                    },
                    getTextFill: function() {
                        return this.txt.getFill();
                    },
                    setStrokeColor: function(n) {
                        this._createStroke();
                        this.stroke.stroke(n);
                    },
                    getStrokeColor: function() {
                        if (this.stroke) {
                            return this.stroke.stroke();
                        }
                    },
                    setStrokeWidth: function(n) {
                        this.strokeWid = n;
                        if (n === 0) {
                            this._removeStroke();
                        }
                        else {
                            this._createStroke();
                            this.stroke.strokeWidth(n);
                        }
                    },
                    getStrokeWidth: function() {
                        if (this.stroke) {
                            return this.stroke.strokeWidth();
                        }
                    },
                    setOpacity: function(n) {
                        this.txt.opacity(n);
                        this.stroke && this.stroke.opacity(n);
                    },
                    getOpacity: function() {
                        return this.txt.getOpacity();
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        n = n.concat(this._getPropertyConfig(["Opacity", "TextFill", "FontSize", "FontFamily", "LineHeight", "TextAlign", "FontStyle"]));
                        if (this.stroke) {
                            n = n.concat(this._getPropertyConfig(["StrokeColor", "StrokeWidth"]));
                        }
                        return n;
                    },
                    getConfig: function() {
                        return jQuery.extend({
                            title: this.title
                        }, this.__superobject());
                    },
                    _updateHeight: function() {
                        this.setHeight(this.txt.getHeight());
                    },
                    _setFontFamily: function(n) {
                        this.txt.fontFamily(n);
                        this.stroke && this.stroke.fontFamily(n);
                        this._updateHeight();
                    },
                    _loadFont: function(n, t) {
                        this.fire("progress-start", "Loading Font", this);
                        this.ready = false;
                        var i = this, r = function() {
                            t();
                            i.ready = true;
                            i.fire("progress-complete", i);
                        };
                        WebFont.load({
                            google: {
                                families: [n]
                            },
                            active: function() {
                                r();
                            },
                            inactive: function() {
                                r();
                                i.fire("error", "The specified font could not be loaded", this);
                            }
                        });
                    },
                    _createStroke: function() {
                        this.stroke || (this.stroke = this.txt.clone(), this.stroke.fillEnabled(), this.stroke.opacity(this.txt.opacity()), this.group.add(this.stroke), this.stroke.moveToBottom(), this._transferShadow(this.txt, this.stroke));
                    },
                    _removeStroke: function() {
                        this.stroke && (this._transferShadow(this.stroke, this.txt), this.stroke.remove(), this.stroke = null);
                    },
                    _getShadowedShape: function() {
                        return this.stroke || this.txt;
                    },
                    _transferShadow: function(n, t) {
                        n.hasShadow() && (t.setShadowColor(n.getShadowColor()), t.setShadowBlur(n.getShadowBlur()), t.setShadowOffset(n.getShadowOffset()), t.setShadowOpacity(n.getShadowOpacity()), n.shadowEnabled(false), t.shadowEnabled(true));
                    }
                }
        );/**
 * @class Background element class
 * @returns {Object}
 * @augments imageEditor.uiElement
 */
imageEditor.uiBackground = imageEditor.uiElement.extend(
        /** @lends imageEditor.uiBackground.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.renderGroup = new Kinetic.Group({
                            x: 0,
                            y: 0,
                            width: this.stageWidth,
                            height: this.stageHeight
                        });
                        this.bg = new Kinetic.Image({
                            width: this.stageWidth,
                            height: this.stageHeight
                        });
                        this.layer.add(this.renderGroup);
                        this.renderGroup.add(this.bg);
                        this.loadImages([this.src], function(n) {
                            this.photoImage = this.photoImageOrig = n[this.src];
                            this.renderGroup.on("mousedown tap", function() {
                                this.select();
                            }.bind(this));
                            this.updateOrder();
                            this.applyProperties(function() {
                                this._fill();
                                this.redraw();
                                this.ready = true;
                                this.fire("ready", this);
                            });
                        }.bind(this));
                    },
                    /**
                     * Redraw the element in case it gets altered
                     * 
                     * @public
                     */
                    redraw: function() {
                        this.drawStage();
                    },
                    /**
                     * Select this element
                     * 
                     * @public
                     */
                    select: function() {
                        this.selected = true;
                        this.__superobject();
                    },
                    /**
                     * Remove this element
                     * 
                     * @public
                     */
                    dispose: function() {
                        this.bg.remove();
                        this.drawStage();
                    },
                    /**
                     * Get the photo of this background
                     * 
                     * @public
                     * @returns {Object}
                     */
                    getPhoto: function() {
                        return this.src;
                    },
                    /**
                     * Set the photo of this background
                     * 
                     * @public
                     * @param {String} img
                     */
                    setPhoto: function(img) {
                        this.loadImages([img], function(t) {
                            this.src = img;
                            this.photoImage = this.photoImageOrig = t[img];
                            this.setFilter(this.filter, function() {
                                this.redraw();
                            }.bind(this));
                        }.bind(this));
                    },
                    setFilter: function(filter, callback) {
                        var i = [];
                        filter == null || filter.name === "none" ? this.filter = null : (this.filter = filter, i[i.length] = filter);
                        this._filter(this.photoImageOrig, i, function(n) {
                            this.photoImage = this.renderedImage = n;
                            this._adjust(function() {
                                this._fill();
                                callback(this);
                            }.bind(this));
                        }.bind(this));
                    },
                    getFilter: function() {
                        return this.filter;
                    },
                    _adjust: function(callback) {
                        var t = [];
                        this.contrast && this.contrast !== 0 && (t[t.length] = {
                            name: "contrast",
                            params: this.contrast
                        });
                        this.brightness && this.brightness !== 0 && (t[t.length] = {
                            name: "brightness",
                            params: this.brightness
                        });
                        this._filter(this.renderedImage || this.photoImageOrig, t, function(t) {
                            this.photoImage = t;
                            this._fill();
                            callback(this);
                        }.bind(this));
                    },
                    setContrast: function(value, callback) {
                        this.contrast = value;
                        this._adjust(callback);
                    },
                    getContrast: function() {
                        return this.contrast || 0;
                    },
                    setBrightness: function(value, callback) {
                        this.brightness = value;
                        this._adjust(callback);
                    },
                    getBrightness: function() {
                        return this.brightness || 0;
                    },
                    setFrame: function(img, callback) {
                        if (img == null) {
                            this.frame && (this.frame.remove(), this.frame = null, this.frameFillColor && (this.frameFillColor = null), this.redraw());
                            callback(this);
                            return;
                        }
                        this.loadImages([img], function(i) {
                            this.frameSrc = img;
                            this.frame || (this.frame = new Kinetic.Image({
                                width: this.stageWidth,
                                height: this.stageHeight
                            }), this.renderGroup.add(this.frame), this.updateOrder());
                            this.frame.setImage(i[img]);
                            //this.frame.hitFunc(function() {
                                this.frameFillColor && this.setFrameFillColor(this.frameFillColor);
                            //}.bind(this));
                            //this.layer.drawHit();
                            callback(this);
                        }.bind(this));
                    },
                    getFrame: function() {
                        return this.frame != null ? this.frameSrc : null;
                    },
                    setFrameFillColor: function(color) {
                        if (this.frame) {
                            if (color == "transparent") {
                                this.frameFillColor = null;
                            }
                            else {
                                this.frameFillColor = color;
                                this.frame.cache();
                                this.frame.setFilterColorFill(color);
                                this.frame.filters([Kinetic.Filters.ColorFill]);
                                this.layer.draw();
                            }
                        }
                    },
                    getFrameFillColor: function() {
                        return this.frameFillColor;
                    },
                    updateOrder: function() {
                        this.renderGroup.moveToBottom();
                        //this.frame && this.frame.moveToTop();
                    },
                    getProperties: function() {
                        var n = [];
                        return this.filter && (n = n.concat(this._getPropertyConfig("Filter"))), this.frame && (n = n.concat(this._getPropertyConfig("Frame"))), this.frameFillColor && (n = n.concat(this._getPropertyConfig("FrameFillColor"))), this.contrast && this.contrast != 0 && (n = n.concat(this._getPropertyConfig("Contrast"))), this.brightness && this.brightness != 0 && (n = n.concat(this._getPropertyConfig("Brightness"))), n;
                    },
                    getConfig: function() {
                        return jQuery.extend({
                            src: this.src,
                            zindex: 0
                        }, this.__superobject());
                    },
                    _fill: function() {
                        this.bg.setImage(this.photoImage);
                    },
                    /**
                     * Apply filter on this background
                     * 
                     * @private
                     * @param {Object} n
                     * @param {Function} callback
                     * @param {Object} t
                     */
                    _filter: function(n, t, callback) {
                        var r, u;
                        if (t == null || t.length == 0) {
                            callback(n);
                            return;
                        }
                        r = document.createElement("canvas");
                        r.width = n.width;
                        r.height = n.height;
                        u = this;
                        this.fire("progress-start", "Applying Filters", this);
                        Caman(r, n.src, function() {
                            for (var n = 0; n < t.length; ++n) {
                                this[t[n].name](t[n].params);
                            }
                            this.render(function() {
                                var t = r.toDataURL(), n = new Image;
                                n.onload = function() {
                                    r = null;
                                    callback(n);
                                    u.fire("progress-complete", this);
                                };
                                n.src = t;
                            });
                        });
                    }
                }
        );/**
 * @class Clipart element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiClipart = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiClipart.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.cornerOffset = true;
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.loadImages([this.src], function(n) {
                            this.imgObj = this.imgObjOrig = n[this.src];
                            this.img = new Kinetic.Image({
                                image: this.imgObj
                            });
                            this.resizeGroup();
                            this.applyProperties(function() {
                                this.group.add(this.img);
                                this.redraw();
                                this.ready = true;
                                this.fire("ready", this);
                            });
                        }.bind(this));
                    },
                    resizeGroup: function() {
                        this.width = this.img.width();
                        this.height = this.img.height();
                    },
                    /**
                     * Redraw the element in case it gets altered
                     * 
                     * @public
                     */
                    redraw: function() {
                        this.drawStage();
                    },
                    setFillColor: function(color) {
                        /*
                        if (color != "transparent") {
                            this.fillColor = color;
                            this.img.fill(this.fillColor);
                        }
                        else {
                            this.img.fill('rgba(0, 0, 0, 0)');
                        }
                        return;
                        this.img.clearFilter();
                        */
                        color == "transparent" ? this.fillColor = null : (this.fillColor = color, this.img.cache(), this.img.setFilterColorFill(color), this.img.filters([Kinetic.Filters.ColorFill]), this.img.draw());
                    },
                    getFillColor: function() {
                        return this.fillColor;
                    },
                    setOpacity: function(value) {
                        this.img.opacity(value);
                        this.redraw();
                    },
                    getOpacity: function() {
                        return this.img.getOpacity();
                    },
                    setFlipHorizontal: function() {
                        this.flipHorizontal ? (this.flipHorizontal = null, this.img.scaleX(1), this.img.setX(0)) : (this.flipHorizontal = true, this.img.scaleX(-1), this.img.setX(this.width));
                    },
                    setFlipVertical: function() {
                        this.flipVertical ? (this.flipVertical = null, this.img.scaleY(1), this.img.setY(0)) : (this.flipVertical = true, this.img.scaleY(-1), this.img.setY(this.height));
                    },
                    getFlipVertical: function() {
                        return this.flipVertical;
                    },
                    getFlipHorizontal: function() {
                        return this.flipHorizontal;
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        n = n.concat(this._getPropertyConfig("Opacity"));
                        if (this.filterConfig) {
                            n = n.concat(this._getPropertyConfig("Filter"));
                        }
                        if (this.fillColor) {
                            n = n.concat(this._getPropertyConfig("FillColor"));
                        }
                        if (this.flipVertical) {
                            n = n.concat(this._getPropertyConfig("FlipVertical"));
                        }
                        if (this.flipHorizontal) {
                            n = n.concat(this._getPropertyConfig("FlipHorizontal"));
                        }
                        if (this.contrast && this.contrast != 0) {
                            n = n.concat(this._getPropertyConfig("Contrast"));
                        }
                        if (this.brightness && this.brightness != 0) {
                            n = n.concat(this._getPropertyConfig("Brightness"));
                        };
                        return n;
                    },
                    getConfig: function() {
                        return jQuery.extend({
                            src: this.src
                        }, this.__superobject());
                    },
                    _getShadowedShape: function() {
                        return this.img;
                    },
                    _adjust: function(callback) {
                        var t = [];
                        this.contrast && this.contrast !== 0 && (t[t.length] = {
                            name: "contrast",
                            params: this.contrast
                        });
                        this.brightness && this.brightness !== 0 && (t[t.length] = {
                            name: "brightness",
                            params: this.brightness
                        });
                        this._filter(this.renderedImage || this.imgObjOrig, t, function(t) {
                            this.imgObj = t;
                            this._fill();
                            callback(this);
                        }.bind(this));
                    },
                    _fill: function() {
                        this.img.setImage(this.imgObj);
                    },
                    setContrast: function(value, callback) {
                        this.contrast = value;
                        this._adjust(callback);
                    },
                    getContrast: function() {
                        return this.contrast || 0;
                    },
                    setBrightness: function(value, callback) {
                        this.brightness = value;
                        this._adjust(callback);
                    },
                    getBrightness: function() {
                        return this.brightness || 0;
                    },
                    /**
                     * Apply filter on this image
                     * 
                     * @private
                     * @param {Object} n
                     * @param {Function} callback
                     * @param {Object} t
                     */
                    _filter: function(n, t, callback) {
                        var r, u;
                        if (t == null || t.length == 0) {
                            callback(n);
                            return;
                        }
                        r = document.createElement("canvas");
                        r.width = n.width;
                        r.height = n.height;
                        u = this;
                        this.fire("progress-start", "Applying Filters", this);
                        Caman(r, n.src, function() {
                            for (var n = 0; n < t.length; ++n) {
                                this[t[n].name](t[n].params);
                            }
                            this.render(function() {
                                var t = r.toDataURL(), n = new Image;
                                n.onload = function() {
                                    r = null;
                                    callback(n);
                                    u.fire("progress-complete", this);
                                };
                                n.src = t;
                            });
                        });
                    }
                }
        );/**
 * @class Image element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiImage = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiClipart.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.cornerOffset = true;
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.loadImages([this.src], function(n) {
                            this.photoImage = this.photoImageOrig = n[this.src];
                            this.img = new Kinetic.Image({
                                image: this.photoImage
                            });
                            this.applyProperties(function() {
                                this.group.add(this.img);
                                this.redraw();
                                this.ready = true;
                                this.fire("ready", this);
                            });
                        }.bind(this));
                    },
                    /**
                     * Redraw the element in case it gets altered
                     * 
                     * @public
                     */
                    redraw: function() {
                        this.drawStage();
                    },
                    setFilter: function(filter, callback) {
                        var i = [];
                        filter == null || filter.name === "none" ? this.filter = null : (this.filter = filter, i[i.length] = filter);
                        this._filter(this.photoImageOrig, i, function(n) {
                            this.photoImage = this.renderedImage = n;
                            this._adjust(function() {
                                this._fill();
                                callback(this);
                            }.bind(this));
                        }.bind(this));
                    },
                    getFilter: function() {
                        return this.filterConfig;
                    },
                    setOpacity: function(value) {
                        this.img.opacity(value);
                        this.redraw();
                    },
                    getOpacity: function() {
                        return this.img.getOpacity();
                    },
                    setFlipHorizontal: function() {
                        this.flipHorizontal ? (this.flipHorizontal = null, this.img.scaleX(1), this.img.setX(0)) : (this.flipHorizontal = true, this.img.scaleX(-1), this.img.setX(this.width));
                    },
                    setFlipVertical: function() {
                        this.flipVertical ? (this.flipVertical = null, this.img.scaleY(1), this.img.setY(0)) : (this.flipVertical = true, this.img.scaleY(-1), this.img.setY(this.height));
                    },
                    getFlipVertical: function() {
                        return this.flipVertical;
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        return this.filterConfig && (n = n.concat(this._getPropertyConfig("Filter"))), this.FlipVertical && (n = n.concat(this._getPropertyConfig("FlipVertical"))), this.contrast && this.contrast != 0 && (n = n.concat(this._getPropertyConfig("Contrast"))), this.brightness && this.brightness != 0 && (n = n.concat(this._getPropertyConfig("Brightness"))), this.flipHorizontal && (n = n.concat(this._getPropertyConfig("FlipHorizontal"))), n;
                    },
                    getConfig: function() {
                        return jQuery.extend({
                            src: this.src
                        }, this.__superobject());
                    },
                    _getShadowedShape: function() {
                        return this.img;
                    },
                    _adjust: function(callback) {
                        var t = [];
                        this.contrast && this.contrast !== 0 && (t[t.length] = {
                            name: "contrast",
                            params: this.contrast
                        });
                        this.brightness && this.brightness !== 0 && (t[t.length] = {
                            name: "brightness",
                            params: this.brightness
                        });
                        this._filter(this.renderedImage || this.photoImageOrig, t, function(t) {
                            this.photoImage = t;
                            this._fill();
                            callback(this);
                        }.bind(this));
                    },
                    _fill: function() {
                        this.img.setImage(this.photoImage);
                    },
                    setContrast: function(value, callback) {
                        this.contrast = value;
                        this._adjust(callback);
                    },
                    getContrast: function() {
                        return this.contrast || 0;
                    },
                    setBrightness: function(value, callback) {
                        this.brightness = value;
                        this._adjust(callback);
                    },
                    getBrightness: function() {
                        return this.brightness || 0;
                    },
                    /**
                     * Apply filter on this image
                     * 
                     * @private
                     * @param {Object} n
                     * @param {Function} callback
                     * @param {Object} t
                     */
                    _filter: function(n, t, callback) {
                        var r, u;
                        if (t == null || t.length == 0) {
                            callback(n);
                            return;
                        }
                        r = document.createElement("canvas");
                        r.width = n.width;
                        r.height = n.height;
                        u = this;
                        this.fire("progress-start", "Applying Filters", this);
                        Caman(r, n.src, function() {
                            for (var n = 0; n < t.length; ++n) {
                                this[t[n].name](t[n].params);
                            }
                            this.render(function() {
                                var t = r.toDataURL(), n = new Image;
                                n.onload = function() {
                                    r = null;
                                    callback(n);
                                    u.fire("progress-complete", this);
                                };
                                n.src = t;
                            });
                        });
                    }
                }
        );/**
 * @class Line shape element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiLineShape = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiLineShape.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.cornerOffset = true;
                        params.scale || (params.scale = 1);
                        params.width || (params.width = 200);
                        params.height || (params.height = 200);
                        params.deg || (params.deg = 0);
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.line = new Kinetic.Line({
                            points: [0, 0, 200, 200],
                            scale: this.scale,
                            rotation: this.deg,
                            stroke: 'black',
                            strokeWidth: 6
                        });
                        this.applyProperties(function() {
                            this.group.add(this.line);
                            this.redraw();
                            this.ready = true;
                            this.fire("ready", this);
                        });
                    },
                    /**
                     * Redraw the element in case it gets altered
                     * 
                     * @public
                     */
                    redraw: function() {
                        this.drawStage();
                    },
                    setFillColor: function(color) {
                        this.line.clearFilter();
                        color == "transparent" ? this.fillColor = null : (this.fillColor = color, this.line.setFilterColorFill(color), this.line.setFilter(Kinetic.Filters.ColorFill));
                    },
                    getFillColor: function() {
                        return this.fillColor;
                    },
                    setFilter: function(filter, callback) {
                        this.line.setImage(this.imgObj);
                        this.applyFilter(this.imgObj, filter, function(n) {
                            this.line.setImage(n);
                            callback(this);
                        }.bind(this));
                    },
                    getFilter: function() {
                        return this.filterConfig;
                    },
                    setOpacity: function(value) {
                        this.line.setOpacity(value);
                        this.redraw();
                    },
                    getOpacity: function() {
                        return this.line.getOpacity();
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        n = n.concat(this._getPropertyConfig("Opacity"));
                        return this.fillColor && (n = n.concat(this._getPropertyConfig("FillColor"))), n = n.concat(this._getPropertyConfig(["StrokeColor", "StrokeWidth"])), n;
                    },
                    getConfig: function() {
                        return jQuery.extend({
                            src: this.src
                        }, this.__superobject());
                    },
                    _getShadowedShape: function() {
                        return this.line;
                    },
                    setStrokeColor: function(n) {
                        this.line.stroke(n);
                    },
                    getStrokeColor: function() {
                        return this.line.stroke();
                    },
                    setStrokeWidth: function(n) {
                        this.line.strokeWidth(n);
                    },
                    getStrokeWidth: function() {
                        return this.line.strokeWidth();
                    }
                }
        );/**
 * @class Circle shape element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiCircleShape = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiCircleShape.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.cornerOffset = true;
                        params.width || (params.width = 200);
                        params.height || (params.height = 200);
                        params.deg || (params.deg = 0);
                        params.radius || (params.radius = 100);
                        params.scale || (params.scale = 1);
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.circle = new Kinetic.Circle({
                            x: this.x,
                            y: this.y,
                            radius: this.radius,
                            rotation: this.deg,
                            scale: this.scale,
                            stroke: 'black',
                            fill: 'black',
                            strokeWidth: 4
                        });
                        this.group.add(this.circle);
                        this.applyProperties(function() {
                            this.redraw();
                            this.ready = true;
                            this.fire("ready", this);
                        });
                    },
                    /**
                     * Redraw the element in case it gets altered
                     * 
                     * @public
                     */
                    redraw: function() {
                        this.drawStage();
                    },
                    setFillColor: function(color) {
                        if (color != "transparent") {
                            this.fillColor = color;
                            this.circle.fill(this.fillColor);
                        }
                        else {
                            this.circle.fill('rgba(0, 0, 0, 0)');
                        }
                    },
                    getFillColor: function() {
                        return this.fillColor;
                    },
                    setOpacity: function(value) {
                        this.circle.setOpacity(value);
                        this.redraw();
                    },
                    getOpacity: function() {
                        return this.circle.getOpacity();
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        n = n.concat(this._getPropertyConfig("Opacity"));
                        return this.fillColor && (n = n.concat(this._getPropertyConfig("FillColor"))), n = n.concat(this._getPropertyConfig(["StrokeColor", "StrokeWidth"])), n;
                    },
                    _getShadowedShape: function() {
                        return this.circle;
                    },
                    setStrokeColor: function(n) {
                        this.circle.stroke(n);
                    },
                    getStrokeColor: function() {
                        return this.circle.stroke();
                    },
                    setStrokeWidth: function(n) {
                        this.circle.strokeWidth(n);
                    },
                    getStrokeWidth: function() {
                        return this.circle.strokeWidth();
                    }
                }
        );/**
 * @class Triangle shape element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiTriangleShape = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiLineShape.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.cornerOffset = true;
                        params.width || (params.width = 200);
                        params.height || (params.height = 200);
                        params.scale || (params.scale = 1);
                        params.deg || (params.deg = 0);
                        params.radius || (params.radius = 100);
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.line = new Kinetic.RegularPolygon({
                            x: this.x,
                            y: this.y,
                            sides: 3,
                            scale: this.scale,
                            rotation: this.deg,
                            stroke: 'black',
                            strokeWidth: 4,
                            fill: 'black',
                            radius: this.radius
                        });
                        this.applyProperties(function() {
                            this.group.add(this.line);
                            this.redraw();
                            this.ready = true;
                            this.fire("ready", this);
                        });
                    },
                    /**
                     * Redraw the element in case it gets altered
                     * 
                     * @public
                     */
                    redraw: function() {
                        this.drawStage();
                    },
                    setFillColor: function(color) {
                        this.line.clearFilter();
                        color == "transparent" ? this.fillColor = null : (this.fillColor = color, this.line.setFilterColorFill(color), this.line.setFilter(Kinetic.Filters.ColorFill));
                    },
                    getFillColor: function() {
                        return this.fillColor;
                    },
                    setFilter: function(filter, callback) {
                        this.line.setImage(this.imgObj);
                        this.applyFilter(this.imgObj, filter, function(n) {
                            this.line.setImage(n);
                            callback(this);
                        }.bind(this));
                    },
                    getFilter: function() {
                        return this.filterConfig;
                    },
                    setOpacity: function(value) {
                        this.line.setOpacity(value);
                        this.redraw();
                    },
                    getOpacity: function() {
                        return this.line.getOpacity();
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        n = n.concat(this._getPropertyConfig("Opacity"));
                        return this.fillColor && (n = n.concat(this._getPropertyConfig("FillColor"))), n = n.concat(this._getPropertyConfig(["StrokeColor", "StrokeWidth"])), n;
                    },
                    getConfig: function() {
                        return jQuery.extend({
                            src: this.src
                        }, this.__superobject());
                    },
                    _getShadowedShape: function() {
                        return this.line;
                    },
                    setStrokeColor: function(n) {
                        this.line.stroke(n);
                    },
                    getStrokeColor: function() {
                        return this.line.stroke();
                    },
                    setStrokeWidth: function(n) {
                        this.line.strokeWidth(n);
                    },
                    getStrokeWidth: function() {
                        return this.line.strokeWidth();
                    }
                }
        );/**
 * @class Rectangle shape element class
 * @returns {Object}
 * @augments imageEditor.uiShape
 */
imageEditor.uiRectangleShape = imageEditor.uiShape.extend(
        /** @lends imageEditor.uiRectangleShape.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.cornerOffset = true;
                        params.width || (params.width = 200);
                        params.height || (params.height = 160);
                        params.scale || (params.scale = 1);
                        params.deg || (params.deg = 0);
                        this.__superobject(params);
                    },
                    /**
                     * Draw this element onto the stage
                     * 
                     * @public
                     */
                    draw: function() {
                        this.rect = new Kinetic.Rect({
                            x: 0,
                            y: 0,
                            width: this.width,
                            height: this.height,
                            rotation: this.deg,
                            scale: this.scale,
                            strokeWidth: 4,
                            fill: 'black',
                            stroke: 'black'
                        });
                        this.applyProperties(function() {
                            this.group.add(this.rect);
                            this.redraw();
                            this.ready = true;
                            this.fire("ready", this);
                        });
                    },
                    /**
                     * Redraw the element in case it gets altered
                     * 
                     * @public
                     */
                    redraw: function() {
                        this.drawStage();
                    },
                    setFillColor: function(color) {
                        if (color != "transparent") {
                            this.fillColor = color;
                            this.rect.fill(this.fillColor);
                        }
                    },
                    getFillColor: function() {
                        return this.fillColor;
                    },
                    setOpacity: function(value) {
                        this.rect.setOpacity(value);
                        this.redraw();
                    },
                    getOpacity: function() {
                        return this.rect.getOpacity();
                    },
                    getProperties: function() {
                        var n = this.getShadowConfig();
                        n = n.concat(this._getPropertyConfig("Opacity"));
                        return this.fillColor && (n = n.concat(this._getPropertyConfig("FillColor"))), n = n.concat(this._getPropertyConfig(["StrokeColor", "StrokeWidth"])), n;
                    },
                    getConfig: function() {
                        return jQuery.extend({
                            src: this.src
                        }, this.__superobject());
                    },
                    _getShadowedShape: function() {
                        return this.rect;
                    },
                    setStrokeColor: function(n) {
                        this.rect.stroke(n);
                    },
                    getStrokeColor: function() {
                        return this.rect.stroke();
                    },
                    setStrokeWidth: function(n) {
                        this.rect.strokeWidth(n);
                    },
                    getStrokeWidth: function() {
                        return this.rect.strokeWidth();
                    }
                }
        );/**
 * @class UI Panel class
 * @returns {Object}
 * @augments imageEditor.coreObject
 */
imageEditor.uiPanelElement = imageEditor.coreObject.extend(
        /** @lends imageEditor.uiPanelElement.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.__superobject(params);
                        var self = this;
                        $(document).on("click", ".editor-prop-pan .cancel", function() {
                            self.close();
                        });
                        $(document).on("click", ".editor-pan-nav a", function(n) {
                            n.preventDefault();
                            var i = $(this).parents(".editor-pan"), r = i.find(".editor-pan-content").removeClass("active").filter($(this).attr("href")).addClass("active");
                            i.find(".editor-pan-nav li").removeClass("active");
                            $(this).parents("li").addClass("active");
                            self._refreshScroller(r);
                        });
                    },
                    /**
                     * Show this UI element
                     * 
                     * @public
                     * @param {Object} obj
                     * @param {String} type
                     */
                    show: function(obj, type) {
                        var i = $(".editor-prop-pan-" + type), r, u, f;
                        if (i.length === 0)
                            for (r = 0; r < this.settings.length; ++r)
                                if (this.settings[r].type == type) {
                                    i = this._panel(imageEditor.SETTINGS[r]);
                                    break;
                                }
                        u = i.find(".editor-pan-content").removeClass("active");
                        u.each(function() {
                            var t = $(this), i = obj.getProperty(t.data("type"));
                            t.hasClass("user-photo-selector") ? t.find("input").val("") : t.hasClass("color") ? t.find("input").spectrum("set", i || "#000") : t.hasClass("range") ? t.find(".range-slider").val(i || 0) : t.hasClass("double-range") ? (t.find(".range-slider-one").val(i[0] || 0), t.find(".range-slider-two").val(i[1] || 0)) : (t.find("li").removeClass("selected"), i && t.find("li").each(function(n, t) {
                                JSON.stringify($(t).data("val")) === JSON.stringify(i) && $(t).addClass("selected");
                            }));
                        });
                        i.find(".editor-pan-nav li").removeClass("active").first().addClass("active");
                        f = u.first().addClass("active");
                        i.hide().fadeIn("fast");
                        this._refreshScroller(f);
                    },
                    /**
                     * Close this UI element
                     * 
                     * @public
                     */
                    close: function() {
                        return $(".editor-pan").fadeOut("fast"), $(".toolbar li").removeClass("active"), false;
                    },
                    /**
                     * Draw a property panel
                     * 
                     * @public
                     * @param {Object} property
                     */
                    _panel: function(property) {
                        var u = $('<div class="editor-pan editor-prop-pan editor-prop-pan-' + property.type + '"></div>').appendTo(".panels"), e = $('<div class="editor-pan-body"></div>').appendTo(u), r = [], t, f, i;
                        if (property.items)
                            for (t = 0; t < property.items.length; ++t)
                                f = "editor_pan_content_" + property.items[t].type + "_" + t, r[r.length] = {
                                    id: f,
                                    title: property.items[t].title
                                }, this._content(f, property.items[t], e);
                        else {
                            this._content("editor_pan_content_" + property.type, property, e);
                        }
                        return i = $('<div class="editor-pan-nav border-box"></div>').appendTo(u), r.length > 1 && (i = $("<ul></ul>").appendTo(i), $.each(r, function(n, t) {
                            $('<li class="border-box"><a href="#' + t.id + '">' + t.title + "</a></li>").appendTo(i);
                        })), u;
                    },
                    _content: function(n, t, i) {
                        var r = $('<div class="editor-pan-content editor-pan-content-{0}" id="{1}"></div>'.format(t.type.toLowerCase(), n)).data("type", t.type).appendTo(i);
                        if (t.data instanceof Array) {
                            this._list(t, r);
                        }
                        else if (t.data instanceof Object) {
                            r.addClass(t.data.type);
                            switch (t.data.type) {
                                case "color":
                                    if (i.hasClass('mini')) {
                                        i.removeClass('mini');
                                    }
                                    i.addClass('maxi');
                                    this._colorSelect(t.type, t.data, r);
                                    break;
                                case "range":
                                    if (!i.hasClass('maxi')) {
                                        i.addClass('mini');
                                    }
                                    this._rangeSelect(t.type, t.data, r, false);
                                    break;
                                case "double-range":
                                    i.addClass('maxi');
                                    this._rangeSelect(t.type, t.data, r, true);
                                    break;
                                case "background":
                                    i.addClass('maxi');
                                    this._upload(t.type, t.data, r);
                                    break;
                            }
                        }
                        r.hide();
                    },
                    _list: function(n, t) {
                        var z;
                        if (n.type === 'FontFamily') {
                            z = '<li class="property-item border-box"><div class="thumb thumb-{1}-{2}"><img src="images/fonts/{2}.png" /></div><div class="label border-box"><span>{0}</span></div></li>';
                        }
                        else if (n.type === 'Filter') {
                            z = '<li class="property-item border-box"><div class="thumb thumb-{1}-{2}"><img src="images/effects/{2}.png" /></div><div class="label border-box"><span>{0}</span></div></li>';
                        }
                        else {
                            z = '<li class="property-item border-box"><div class="thumb thumb-{1}-{2}">&nbsp;</div><div class="label border-box"><span>{0}</span></div></li>';
                        }
                        for (var u = $("<ul></ul>").appendTo(t), i, f, e, r = 0; r < n.data.length; ++r) {
                            i = n.data[r];
                            if (typeof i.value === 'undefined') {
                                i.value = i.title;
                            }
                            f = $(z.format(i.title, n.type.toLowerCase(), i.title.toLowerCase().replace(/ /g, "-"))).data("val", i.value).appendTo(u), n.thumb && f.addClass("property-item-image").find(".thumb").html("").append('<img class="lazy" data-original="' + environment.assetsThumbURL.format(i.value) + '" src="images/loading.gif" alt="' + i.title + '" />');
                        }
                        this._carousel(u, t, i.length);
                        e = this;
                        u.find("li").on("tap", function() {
                            if (t.data("scroller").moved)
                                return false;
                            $(this).parents(".editor-prop-pan").find(".editor-pan-content-" + n.type.toLowerCase() + " li").removeClass("selected");
                            $(this).addClass("selected");
                            e.applyProperty(n.type, $(this).data("val"));
                        });
                    },
                    /**
                     * Internal function for lazyloading the images in this panel
                     * 
                     * @private
                     */
                    _loadThumbs: function() {
                        $("img.lazy").lazyload();
                    },
                    _refreshScroller: function(element) {
                        var t = element.data("scroller");
                        t && (t.refresh(), this._loadThumbs());
                    },
                    _colorSelect: function(n, t, i) {
                        var f = imageEditor.COLORS, r = $("<ul><\/ul>").appendTo(i), e, s, o, u;
                        for (t.transparent && r.append('<li class="property-item color-item color-transparent border-box" data-val="transparent"><div class="thumb">&nbsp;</div><div class="label border-box"><span>Transparent</span></div></li>'), e = $('<li class="property-item color-item color-item-selector border-box"></li>').appendTo(r), s = $('<input type="text" />').appendTo(e), $('<div class="label border-box"><span>Select Color</span></div>').appendTo(e), o = this, s.spectrum({
                        color: "#000",
                                showButtons: false,
                                move: function(t) {
                                    o.applyProperty(n, t.toHexString());
                                }.bind(this)
                        }), u = 0; u < f.length; ++u)
                            r.append('<li class="property-item color-item border-box" data-val="{0}"><div class="thumb" style="background-color:{0}">&nbsp;</div><div class="label border-box"><span>{0}</span></div></li>'.format(f[u]));
                        this._carousel(r, i, f.length);
                        i.find(".color-item").on("tap", function() {
                            if (i.data("scroller").moved) {
                                return false;
                            }
                            o.applyProperty(n, $(this).attr("data-val"));
                        });
                    },
                    _carousel: function(element, container) {
                        var i = new IScroll(container.get(0), {
                            scrollX: true,
                            scrollY: false,
                            tap: true,
                            mouseWheel: true,
                            mouseWheelSpeed: 40,
                            scrollbars: "custom",
                            interactiveScrollbars: true
                        }),
                        r = 0;
                        element.find("li").each(function() {
                            r += $(this).outerWidth();
                        });
                        element.width(r + 30);
                        container.data("scroller", i);
                        i.on("scrollEnd", function() {
                            this._loadThumbs();
                        }.bind(this));
                    },
                    _rangeSelect: function(n, t, i, r) {
                        var u = $('<div class="editor-pan-slider"></div>').appendTo(i), f, o, e;
                        f = $('<div class="noUiSlider range-slider range-slider-one"></div>').appendTo(u);
                        o = null;
                        t.serialize && (o = $('<input type="text" readonly="readonly" />').appendTo(u));
                        e = null;
                        r && (u.addClass("editor-pan-slider-double"), e = $('<div class="noUiSlider range-slider range-slider-two"></div>').appendTo(u));
                        i.find(".range-slider").noUiSlider({
                            range: [t.min, t.max],
                            step: t.step,
                            start: t.start,
                            handles: 1,
                            slide: function() {
                                this.applyProperty(n, r ? [f.val(), e.val()] : f.val());
                            }.bind(this),
                            serialization: {
                                to: t.serialize ? o : false,
                                resolution: t.step
                            }
                        });
                    },
                    _upload: function(n, t, i) {
                        var f = this, u = $('<input type="file" size="30" class="hidden" id="photo_custom_input" />').appendTo(i),
                                e = function(n) {
                                    for (var t, r, i = 0; t = n[i]; i++)
                                        t.type.match("image.*") && (r = new FileReader, r.onload = function() {
                                            return function(n) {
                                                u.replaceWith(u = u.clone(true));
                                                f.close();
                                                f.window.cropPhoto(n.target.result);
                                            };
                                        }(t), r.readAsDataURL(t));
                                };
                        u.appendTo(i).on("change", function(n) {
                            e(n.target.files);
                        });
                        $('#photo_custom_input').trigger('click');
                    },
                    applyProperty: function(type, obj) {
                        if (type === 'shape') {
                            this.editor.addObject({
                                type: obj.name,
                                x: 100,
                                y: 100
                            });
                        }
                        else {
                            var i = this.editor.getSelectedObject();
                            i.setProperty(type, obj, function() {
                                i.redraw();
                            });
                        }
                    },
                    editText: function(obj) {
                        var t = $(".editor-pan-edit-text"), i, r, self = this;
                        t.length === 0 && (t = $('<div class="editor-pan editor-prop-pan editor-pan-edit-text"></div>').appendTo(".panels").hide(), i = $('<div class="editor-pan-body"></div>').appendTo(t), r = $('<div class="editor-pan-content border-box active"><textarea rows="4" cols="50"></textarea><button class="save-text button">Insert</button></div>').appendTo(i));
                        if (obj.type === 'text') {
                            $('.editor-pan-edit-text .save-text').off().hide();
                            $('.editor-pan-edit-text textarea').off().val(obj.title).on("input paste", function() {
                                obj.setText($(this).val());
                            });
                        }
                        else {
                            $('.editor-pan-edit-text textarea').off().val('');
                            $('.editor-pan-edit-text .save-text').off().show().on("click", function() {
                                var val = $('.editor-pan-edit-text textarea').val();
                                if (val !== '') {
                                    self.editor.addObject({
                                        type: "text",
                                        title: val,
                                        x: 50,
                                        y: 50,
                                        width: 200,
                                        scale: 1
                                    });
                                    self.close();
                                    $('.editor-pan').remove();
                                }
                                else {
                                    $.ClassyNotty({
                                        title: 'Error',
                                        content: 'Please enter some text.',
                                        error: true,
                                        img: 'images/error.png'
                                    });
                                }
                            });
                        }
                        t.show();
                    }
                }
        );/**
 * @class UI ProgressBar class
 * @returns {Object}
 * @augments Class
 */
imageEditor.uiProgressElement = Class.extend(
        /** @lends imageEditor.uiProgressElement.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.elem = $(params.elem);
                        this.counter = 0;
                    },
                    /**
                     * Show this UI element
                     * 
                     * @public
                     * @param {String} element
                     */
                    show: function(element) {
                        this.counter++;
                        this.elem.html("<span>" + element + "</span>").show();
                    },
                    /**
                     * Hide this UI element
                     * 
                     * @public
                     */
                    hide: function() {
                        this.counter--;
                        this.counter === 0 && this.elem.hide();
                    }
                }
        );/**
 * @class UI Toolbar class
 * @returns {Object}
 * @augments imageEditor.coreObject
 */
imageEditor.uiToolbarElement = imageEditor.coreObject.extend(
        /** @lends imageEditor.uiToolbarElement.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.__superobject(params);
                        this.scroller = new IScroll(".toolbar", {
                            scrollX: true,
                            scrollY: false,
                            tap: true,
                            mouseWheel: true,
                            scrollbars: 'custom',
                            interactiveScrollbars: true,
                            mouseWheelSpeed: 40
                        });
                        var self = this;
                        $("nav.toolbar").on("tap", 'li', function() {
                            self.click($(this));
                        });
                    },
                    /**
                     * Track clicks on a button from this toolbar
                     * 
                     * @public
                     * @param {Object} element
                     */
                    click: function(element) {
                        var self = this;
                        if (this.scroller.moved || element.hasClass("disabled")) {
                            return false;
                        }
                        if (element.hasClass("active")) {
                            this.panel.close();
                            element.removeClass("active");
                            return;
                        }
                        var r = element.attr("data-method"), i = element.attr("data-id"), t = this.editor.getSelectedObject();
                        this.panel.close();
                        $("nav.toolbar li").removeClass("active");
                        i && $("nav.toolbar li[data-id=" + i + "]").addClass("active");
                        switch (r) {
                            case "back":
                                this.editor.getBackground().select();
                                element.removeClass("active");
                                break;
                            case "delete":
                                if (confirm('Are you sure you want to delete the currently selected object? You will lose all its changes!')) {
                                    this.editor.deleteObject(t);
                                }
                                element.removeClass("active");
                                break;
                            case "moveToTop":
                                this.editor.moveObjectToTop(t);
                                element.removeClass("active");
                                break;
                            case "moveToBottom":
                                this.editor.moveObjectToBottom(t);
                                element.removeClass("active");
                                break;
                            case "showProperty":
                                this.panel.show(t, i);
                                break;
                            case "showWindow":
                                this.window._build(i, '');
                                break;
                            case "editText":
                                this.panel.editText(t);
                                break;
                            case "flipHorizontal":
                                t.setProperty("FlipHorizontal", true, function() {
                                    t.redraw();
                                });
                                element.removeClass("active");
                                break;
                            case "flipVertical":
                                t.setProperty("FlipVertical", true, function() {
                                    t.redraw();
                                });
                                element.removeClass("active");
                                break;
                            case 'changeBackground':
                                element.removeClass("active");
                                $('#background').trigger('click');
                                break;
                        }
                    },
                    /**
                     * Show or hide a button from this toolbar
                     * 
                     * @public
                     * @param {String} value
                     */
                    update: function(value) {
                        $("nav.toolbar li").each(function() {
                            var t = $(this).attr("data-type");
                            t && (t.indexOf(value) != -1 ? ($(this).removeClass("disabled"), $(this).show()) : t.indexOf("all") != -1 ? ($(this).addClass("disabled"), $(this).show()) : $(this).hide());
                        });
                        this._update();
                    },
                    /**
                     * Update the scrollbar in case the width of the toolbar
                     * expands over the workspace
                     * 
                     * @private
                     */
                    _update: function() {
                        var t = $("nav.toolbar").find("li").filter(":visible");
                        $("nav.toolbar").find("ul").width(t.length * (t.first().width() + 8));
                        this.scroller.refresh();
                    }
                }
        );/**
 * @class UI Window class
 * @returns {Object}
 * @augments imageEditor.coreObject
 */
imageEditor.uiWindowElement = imageEditor.coreObject.extend(
        /** @lends imageEditor.uiWindowElement.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        this.__superobject(params);
                        var self = this;
                        $(document).on("click", ".editor-win .editor-cancel", function() {
                            self.close();
                        });
                        $(document).on("click", ".editor-win .thumbnail", function() {
                            self.close();
                            var n = self.editor.addObjectById($(this).attr("data-id"));
                            return n.select(), false;
                        });
                        $(document).on("click", ".editor-win-nav a", function() {
                            var n = $(this).parents(".editor-win");
                            return n.find(".editor-win-content").removeClass("active").filter($(this).attr("href")).addClass("active"), n.find(".editor-win-nav li").removeClass("active"), $(this).parents("li").addClass("active"), self._lazyLoad(), false;
                        });
                        this.editor.window = this;
                    },
                    /**
                     * Internal function for lazyloading the images in this window
                     * 
                     * @private
                     */
                    _lazyLoad: function() {
                        $("img.lazy").lazyload({
                            container: $(".editor-win-contents")
                        });
                    },
                    /**
                     * Create the window UI template
                     * 
                     * @private
                     * @param {String} element
                     * @param {String} header
                     * @returns {Object}
                     */
                    _create: function(element, header) {
                        var i = $('<div class="editor-win ' + element + '"></div>').appendTo(".editor");
                        return i.append('<div class="editor-win-head"><h2>' + header + '</h2><a class="editor-cancel"><span>Close</span></a></div>'), i.append('<div class="editor-win-body"><ul class="editor-win-nav border-box clearfix"></ul><div class="editor-win-contents border-box"></div><div class="editor-win-footer"></div></div>'), i;
                    },
                    /**
                     * Internal function for showing the window UI
                     * 
                     * @private
                     * @param {Object} element
                     */
                    _show: function(element) {
                        element.css("z-index", 99).addClass("editor-win-active").fadeIn();
                        element.find(".editor-win-contents").outerHeight($(".editor").innerHeight() - element.find(".editor-win-head").outerHeight() - element.find(".editor-win-nav").outerHeight() - element.find(".editor-win-footer").outerHeight() - 1);
                    },
                    /**
                     * Close this UI element
                     * 
                     * @public
                     */
                    close: function() {
                        $(".editor-win").removeClass("editor-win-active").fadeOut();
                        $(".toolbar li").removeClass("active");
                    },
                    /**
                     * Open the window for cropping an image
                     * 
                     * @public
                     * @param {Object} n
                     */
                    cropPhoto: function(n) {
                        var e = "editor-win-crop", f = $("." + e), i = this, r, t, u, o;
                        this.jcrop = {};
                        r = function(n) {
                            var u, r;
                            i.jcrop.api && i.jcrop.api.destroy();
                            u = f.find(".editor-win-contents");
                            u.html("");
                            r = $('<img alt="" />').appendTo(u).get(0);
                            r.onload = function() {
                                var h = u.width(), s = u.height(), n = getImageSize(t()), f = h / n.width, e, o;
                                f * n.height > s && (f = s / n.height);
                                i.jcrop.scale = f;
                                e = Math.floor(f * n.width);
                                o = Math.floor(f * n.height);
                                r.style.width = e + "px";
                                r.style.height = o + "px";
                                $(r).Jcrop({
                                    setSelect: [0, 0, e, o],
                                    onSelect: function(n) {
                                        i.jcrop.crop = n;
                                    }
                                }, function() {
                                    i.jcrop.api = this;
                                });
                            };
                            r.src = n;
                        };
                        t = function() {
                            return $("." + e + " img").get(0);
                        };
                        f.length == 0 && (f = this._create(e, "Crop your image"), u = f.find(".editor-win-nav"), u.addClass("editor-win-toolbar"), $('<span>right 90</span>').appendTo(u).click(function() {
                            r(rotateImage(t(), 90));
                        }), $('<span>left 90</span>').appendTo(u).click(function() {
                            r(rotateImage(t(), -90));
                        }), $('<span>rotate 180</span>').appendTo(u).click(function() {
                            r(rotateImage(t(), 180));
                        }), $('<span>Flip Vertical</span>').appendTo(u).click(function() {
                            r(flipVertical(t()));
                        }), $('<span>Flip Horizontal</span>').appendTo(u).click(function() {
                            r(flipHorizontal(t()));
                        }), o = f.find(".editor-win-footer").addClass("visible"), $('<button class="button">Apply</button>').appendTo(o).click(function() {
                            var n = document.createElement("canvas"), f;
                            n.width = config.width;
                            n.height = config.height;
                            var r = i.jcrop.scale, u = i.jcrop.crop, e = n.getContext("2d");
                            e.drawImage(t(), Math.floor(u.x / r), Math.floor(u.y / r), Math.floor(u.w / r), Math.floor(u.h / r), 0, 0, config.width, config.height);
                            f = n.toDataURL("image/jpeg", 0.84);
                            this.editor.getSelectedObject().setPhoto(f);
                            this.close();
                        }.bind(this)));
                        this._show(f);
                        r(n);
                    },
                    /**
                     * Open the window for cropping an image
                     * 
                     * @public
                     * @param {Object} n
                     */
                    cropPhotoSave: function(n) {
                        var e = "editor-win-crop", f = $("." + e), i = this, r, t, u, o;
                        this.jcrop = {};
                        r = function(n) {
                            var u, r;
                            i.jcrop.api && i.jcrop.api.destroy();
                            u = f.find(".editor-win-contents");
                            u.html("");
                            r = $('<img alt="" />').appendTo(u).get(0);
                            r.onload = function() {
                                var h = u.width(), s = u.height(), n = getImageSize(t()), f = h / n.width, e, o;
                                f * n.height > s && (f = s / n.height);
                                i.jcrop.scale = f;
                                e = Math.floor(f * n.width);
                                o = Math.floor(f * n.height);
                                r.style.width = e + "px";
                                r.style.height = o + "px";
                                $(r).Jcrop({
                                    setSelect: [0, 0, e, o],
                                    onSelect: function(n) {
                                        i.jcrop.crop = n;
                                    }
                                }, function() {
                                    i.jcrop.api = this;
                                });
                            };
                            r.src = n;
                        };
                        t = function() {
                            return $("." + e + " img").get(0);
                        };
                        f.length == 0 && (f = this._create(e, "Crop your image"), u = f.find(".editor-win-nav"), u.addClass("editor-win-toolbar"), o = f.find(".editor-win-footer").addClass("visible"), $('<button class="button">Download</button>').appendTo(o).click(function() {
                            var n = document.createElement("canvas"), f;
                            n.width = config.width;
                            n.height = config.height;
                            var r = i.jcrop.scale, u = i.jcrop.crop, e = n.getContext("2d");
                            e.drawImage(t(), Math.floor(u.x / r), Math.floor(u.y / r), Math.floor(u.w / r), Math.floor(u.h / r), 0, 0, config.width, config.height);
                            f = n.toDataURL("image/png", 0.9);
                            $.ajax({
                                type: "POST",
                                url: config.apiExportURL,
                                data: {
                                    imgData: f
                                },
                                cache: false,
                                success: function(result) {
                                    $('.export-iframe').remove();
                                    $('body').append('<iframe class="export-iframe" src=""></iframe>');
                                    $('.export-iframe').attr('src', config.apiExportURL + '?get=' + result);
                                }
                            });
                            this.close();
                        }.bind(this)));
                        this._show(f);
                        r(n);
                    },
                    /**
                     * Internal function for building up the window's DOM
                     * 
                     * @private
                     * @param {String} n
                     * @param {String} t
                     */
                    _build: function(n, t) {
                        var self = this, y = "editor-win-" + n, r = $("." + y), c, f, h, i, a, e, v;
                        if (r.length == 0) {
                            if (r = this._create(y, t), c = r.find(".editor-win-nav"), f = r.find(".editor-win-contents"), n == "save") {
                                $(".card-save-form").appendTo(f).show();
                            }
                            else {
                                var o = $('<ul class="clearfix"></ul>').appendTo(f),
                                        s = $('<div class="load-more button">More</div>').appendTo(f),
                                        u = $('<h2>Cliparts</h2>'),
                                        l = $('<div class="toolbar-sub"></div>').appendTo(c);
                                r.find(".editor-win-head h2").replaceWith(u).wrap('<div class="editor-win-search border-box"></div>');
                                var _t = '';
                                for (var _i = 0; _i < imageEditor.CLIPART_CATEGORIES.length; _i++) {
                                    _t += '<span' + ((imageEditor.CLIPART_CATEGORIES[_i] === 'all') ? ' class="active"' : '') + '>' + imageEditor.CLIPART_CATEGORIES[_i] + '</span>';
                                }
                                l.append(_t);
                                h = null;
                                c.addClass("editor-win-toolbar");
                                i = null;
                                a = function(t) {
                                    var u, r;
                                    for (i = [], u = new RegExp(t, "i"), r = 0; r < self.shapes.length; ++r)
                                        self.shapes[r].type == n && (self.shapes[r].tags.search(u) != -1 || self.shapes[r].title != null && self.shapes[r].title.search(u) != -1) && (i[i.length] = self.shapes[r]);
                                };
                                a("");
                                e = function() {
                                    var u = o.find("li").length, t = u + 30, r, n, f;
                                    for (t > i.length && (t = i.length), r = u; r < t; ++r)
                                        n = i[r], f = n.src != null ? '<img src="' + config.assetsThumbURL.format(n.src) + '" alt="" />' : n.title, o.append('<li class="thumbnail" data-id="' + n.id + '"><span class="helper"></span>' + f + "</li>");
                                    t >= i.length ? s.hide() : s.show();
                                    $.waypoints("refresh");
                                };
                                s.waypoint(function() {
                                    h = $(this);
                                    h.waypoint("disable");
                                    e();
                                    h.waypoint("enable");
                                }, {
                                    offset: "bottom-in-view",
                                    context: f
                                });
                                e();
                                s.on("click", function() {
                                    e();
                                });
                                v = function() {
                                    if (u.val() === 'all') {
                                        a("");
                                    }
                                    else {
                                        a(u.val());
                                    }
                                    o.html("");
                                    o.scrollTop();
                                    e();
                                };
                                u.on("input", function() {
                                    v();
                                });
                                l.find("span").click(function() {
                                    $('.toolbar-sub span').removeClass('active');
                                    $(this).addClass('active');
                                    u.val($(this).text());
                                    v();
                                });
                            }
                        }
                        this._show(r);
                        this._lazyLoad();
                    }
                }
        );/**
 * @class Editor core class
 * @returns {Object}
 * @augments imageEditor.coreObject
 */
var editor = imageEditor.coreObject.extend(
        /** @lends editor.prototype */
                {
                    /**
                     * Constructor function for this class
                     * 
                     * @public
                     * @param {Object} params
                     * @constructs
                     */
                    __constructor: function(params) {
                        var self = this;

                        this.__superobject(params);
                        this.scale = 1;
                        this.stage = new Kinetic.Stage({
                            container: this.container,
                            width: this.width,
                            height: this.height,
                            scale: {
                                x: this.scale,
                                y: this.scale
                            }
                        });
                        this.layer = new Kinetic.Layer;
                        this.stage.add(this.layer);
                        this.progressbar = new imageEditor.uiProgressElement({
                            elem: ".progress"
                        });
                        this.items = [];
                        for (var z = 0; z < imageEditor.TOOLS.length; z++) {
                            $('.toolbar > ul').append('<li data-method="' + imageEditor.TOOLS[z].method + '" data-type="' + imageEditor.TOOLS[z].type + '" data-id="' + imageEditor.TOOLS[z].id + '" class="tips" title="' + imageEditor.TOOLS[z].tip + '">' +
                                    '<i class="editor-icon editor-icon-' + imageEditor.TOOLS[z].icon + '"></i>' +
                                    '</li>');
                        }
                        /*
                         $(document).on('keydown', null, 'del', function() {
                         self.deleteObject(self.getSelectedObject());
                         return false;
                         });
                         */
                        $('.upload').on('click', function() {
                            $('#upload').trigger('click');
                            return false;
                        });
                        $('.reset').on('click', function() {
                            if (confirm('Are you sure you want to reset the workspace? You will lose all the changes!')) {
                                self.clearStage();
                            }
                            return false;
                        });
                        $('.get-template').on('click', function() {
                            var el = $('textarea.out');
                            if (el.hasClass('hidden')) {
                                el.val(self.getConfig());
                                el.removeClass('hidden');
                            }
                            else {
                                el.addClass('hidden');
                            }
                        });
                        $('.download').on('click', function() {
                            self.toDataUrl(function(t) {
                                self.window.cropPhotoSave(t);
                            }), false;
                            return false;
                        });
                        this.getTemplates();
                        $('.more').on('click', function() {
                            self.getTemplates();
                        });
                        $('nav.templates').on('click', '.template', function() {
                            if (confirm('Are you sure you want to load a template? You will lose all the changes!')) {
                                var id = $(this).data('id');
                                if (typeof imageEditor.TEMPLATE[id] !== 'undefined') {
                                    self.clearStage();
                                    self.loadConfig(imageEditor.TEMPLATE[id].presets);
                                }
                            }
                            return false;
                        });
                        $('#background').on('change', function(e) {
                            e = e || window.event;
                            e.preventDefault();
                            e = e.originalEvent || e;
                            var reader = new FileReader();
                            reader.onload = function(event) {
                                self.window.cropPhoto(event.target.result);
                            };
                            reader.onerror = function() {
                                $.ClassyNotty({
                                    title: 'Error',
                                    content: 'Your image must be a PNG or JPEG image.',
                                    error: true,
                                    img: 'images/error.png'
                                });
                            };
                            reader.readAsDataURL(e.target.files[0]);
                            return false;
                        });
                        $('#upload').on('change', function(e) {
                            e = e || window.event;
                            e.preventDefault();
                            e = e.originalEvent || e;
                            var reader = new FileReader();
                            reader.onload = function(event) {
                                var image = new Image();
                                image.src = event.target.result;
                                image.onload = function() {
                                    var _s = this, scale = 1;
                                    if (_s.width > config.width) {
                                        scale = config.width / _s.width;
                                    }
                                    else if (_s.height > config.height) {
                                        scale = config.height / _s.height;
                                    }
                                    self.addObject({
                                        type: 'image',
                                        src: event.target.result,
                                        x: 10,
                                        y: 10,
                                        deg: 0,
                                        width: _s.width,
                                        height: _s.height,
                                        scale: scale
                                    });
                                };
                            };
                            reader.onerror = function() {
                                $.ClassyNotty({
                                    title: 'Error',
                                    content: 'Your image must be a PNG or JPEG image.',
                                    error: true,
                                    img: 'images/error.png'
                                });
                            };
                            reader.readAsDataURL(e.target.files[0]);
                            return false;
                        });
                        $(function() {
                            $('.tips').tipsy({
                                gravity: $.fn.tipsy.autoNS,
                                live: true
                            });
                        });
                        $(window).unload(function() {
                            //localStorage.editor = self.getConfig();
                        });
                        $('.templates, .output').css({
                            height: $('section.editor').height() - 18
                        });
                        $('textarea.out').css({
                            height: $('section.editor').height() - 66
                        });
                    },
                    getTemplates: function() {
                        var t = '', x = 0, start = parseInt($('.more').data('start'));
                        start = (typeof start === 'undefined' ? 0 : start);
                        for (var i = start; i < imageEditor.TEMPLATE.length; i++) {
                            if (x >= 10) {
                                $('.more').removeClass('backup').html('more').data('start', x).show();
                                break;
                            }
                            t += '<div id="ed_template_' + i + '" data-id="' + i + '" class="template' + (i % 2 ? ' last' : '') + '"></div>';
                            x++;
                            $('.more').addClass('backup').html('back').data('start', 0);
                        }
                        $('nav.templates .list').empty().append(t);
                    },
                    /**
                     * Empty the stage
                     * 
                     * @public
                     */
                    clearStage: function() {
                        this.items = [];
                        this.layer.destroyChildren();
                        this.layer.draw();
                        //localStorage.editor = '';
                    },
                    /**
                     * Add an object specified by its id, into the stage
                     * 
                     * @public
                     * @param {Integer} id
                     * @returns {Object}
                     */
                    addObjectById: function(id) {
                        return this.addObject(this.getItemConfig(id));
                    },
                    /**
                     * Add an object into the editor's stage
                     * 
                     * @public
                     * @param {Object} obj
                     * @returns {Object}
                     */
                    addObject: function(obj) {
                        obj.layer = this.layer;
                        obj.stageWidth = this.width / this.scale;
                        obj.stageHeight = this.height / this.scale;
                        do {
                            obj.id = Math.floor(Math.random() * 1e4);
                        }
                        while (this.getObjectById(obj.id) !== null);
                        var t = null;
                        switch (obj.type) {
                            case "clipart":
                                t = new imageEditor.uiClipart(obj);
                                break;
                            case "image":
                                t = new imageEditor.uiImage(obj);
                                break;
                            case "text":
                                t = new imageEditor.uiText(obj);
                                break;
                            case "line":
                                t = new imageEditor.uiLineShape(obj);
                                break;
                            case "circle":
                                t = new imageEditor.uiCircleShape(obj);
                                break;
                            case "rectangle":
                                t = new imageEditor.uiRectangleShape(obj);
                                break;
                            case "triangle":
                                t = new imageEditor.uiTriangleShape(obj);
                                break;
                            case "background":
                                t = new imageEditor.uiBackground(obj);
                        }
                        return this._addObject(t), t;
                    },
                    /**
                     * Return a pointer to the object specified by its id
                     * 
                     * @public
                     * @param {Integer} id
                     * @returns {Object}
                     */
                    getObjectById: function(id) {
                        for (var t = 0; t < this.items.length; ++t) {
                            if (id === this.items[t].id) {
                                return this.items[t];
                            }
                        }
                        return null;
                    },
                    _addObject: function(obj) {
                        this.items[this.items.length] = obj;
                        obj.on("select", function() {
                            this.deselectAll(obj.id);
                            this.fire("item-selected", obj);
                        }.bind(this));
                        obj.on("progress-start", function(n) {
                            this.progressbar.show(n);
                        }.bind(this));
                        obj.on("progress-complete", function() {
                            this.progressbar.hide();
                        }.bind(this));
                        obj.on("ready", function() {
                            for (var n = 0; n < this.items.length; ++n) {
                                if (!this.items[n].ready) {
                                    return false;
                                }
                            }
                            this.fire("ready", this);
                        }.bind(this));
                        obj.on("error", function(n) {
                            $.ClassyNotty({
                                title: 'Error',
                                content: n,
                                error: true,
                                img: 'images/error.png'
                            });
                        }.bind(this));
                        obj.type !== "background" && this.updateBackgroundOrder();
                        obj.draw();
                        //obj.select();
                    },
                    getItemConfig: function(obj) {
                        for (var t = 0; t < imageEditor.SHAPES.length; ++t) {
                            if (imageEditor.SHAPES[t].id == obj) {
                                return jQuery.extend(true, {
                                }, imageEditor.SHAPES[t]);
                            }
                        }
                    },
                    deleteObject: function(obj) {
                        obj.dispose();
                        this.items.remove(obj);
                        this.getBackground().select();
                    },
                    deleteObjectType: function(type) {
                        for (var t = 0; t < this.items.length; ++t) {
                            this.items[t].type == type && this.deleteObject(this.items[t]);
                        }
                    },
                    deselectAll: function(n) {
                        $.each(this.items, function(t, i) {
                            i.id !== n && i.deselect();
                        });
                        this.fire("deselect-all", this);
                        this.stage.draw();
                    },
                    getSelectedObject: function() {
                        var n = null;
                        return $.each(this.items, function(t, i) {
                            i.selected && (n = i);
                        }), n;
                    },
                    moveObjectToTop: function(obj) {
                        obj.moveToTop();
                        this.updateBackgroundOrder();
                        this.stage.draw();
                    },
                    moveObjectToBottom: function(obj) {
                        obj.moveToBottom();
                        this.updateBackgroundOrder();
                        this.stage.draw();
                    },
                    updateBackgroundOrder: function() {
                        this.getBackground().updateOrder();
                    },
                    getBackground: function() {
                        for (var n = 0; n < this.items.length; ++n) {
                            if (this.items[n].type == "background") {
                                return this.items[n];
                            }
                        }
                    },
                    toDataUrl: function(callback) {
                        this.stage.setSize(config.width, config.height);
                        this.stage.scale({
                            x: 1,
                            y: 1
                        });
                        this.stage.draw();
                        this.deselectAll();
                        this.stage.toDataURL({
                            mimeType: "image/png",
                            quality: 0.9,
                            callback: function(t) {
                                this.stage.setSize(this.width, this.height);
                                this.stage.scale({
                                    x: this.scale,
                                    y: this.scale
                                });
                                this.stage.draw();
                                this.getBackground().select();
                                callback(t);
                            }.bind(this)
                        });
                    },
                    getConfig: function() {
                        for (var t = [], n = 0; n < this.items.length; ++n) {
                            t[t.length] = this.items[n].getConfig();
                        }
                        return JSON.stringify(t);
                    },
                    loadConfig: function(config) {
                        var t, i;
                        for (config.sort(function(n, t) {
                            return n.zindex - t.zindex;
                        }), t = 0; t < config.length; ++t)
                            i = this.addObject(config[t]), i.type == "background" && i.select();
                    }
                }
        );function getImageSize(n) {
    var t = new Image;
    return t.src = n.src, {
        width: t.width,
        height: t.height
    };
}

function resizeImage(n, t, i, r) {
    var u = new Image;
    u.onload = function() {
        var e = t, n = Math.floor(u.height * t / u.width), f, o, s;
        n > i && (e = Math.floor(u.width * i / u.height), n = i);
        f = document.createElement("canvas");
        f.width = e;
        f.height = n;
        o = f.getContext("2d");
        o.drawImage(u, 0, 0, e, n);
        s = f.toDataURL("image/jpeg", .84);
        r(s);
    };
    u.src = n;
}

function rotateImage(n, t) {
    var u = t * Math.PI / 180, i = getImageSize(n),
            e = Math.ceil(Math.abs(i.width * Math.cos(u) + i.height * Math.sin(u))),
            o = Math.ceil(Math.abs(i.width * Math.sin(u) + i.height * Math.cos(u))),
            f = document.createElement("canvas"), r;
    return f.width = e, f.height = o, r = f.getContext("2d"), r.translate(e / 2, o / 2), r.rotate(t * Math.PI / 180), r.translate(i.width / -2, i.height / -2), r.drawImage(n, 0, 0), f.toDataURL();
}

function flipHorizontal(n) {
    var i = getImageSize(n), t;
    return canvas = document.createElement("canvas"), canvas.width = i.width, canvas.height = i.height, t = canvas.getContext("2d"), t.translate(i.width, 0), t.scale(-1, 1), t.drawImage(n, 0, 0), canvas.toDataURL();
}

function flipVertical(n) {
    var i = getImageSize(n), t;
    return canvas = document.createElement("canvas"), canvas.width = i.width, canvas.height = i.height, t = canvas.getContext("2d"), t.translate(0, i.height), t.scale(1, -1), t.drawImage(n, 0, 0), canvas.toDataURL();
}
$.fn.serializeObject = function() {
    var n = {}, t = this.serializeArray();
    return $.each(t, function() {
        n[this.name] ? (n[this.name].push || (n[this.name] = [n[this.name]]), n[this.name].push(this.value || "")) : n[this.name] = this.value || "";
    }), n;
};
Array.prototype.remove = function() {
    for (var n, t = arguments, i = t.length, r; i && this.length; )
        for (n = t[--i];
                (r = this.indexOf(n)) !== - 1; )
            this.splice(r, 1);
    return this;
};
Function.prototype.bind = function(n) {
    var t = this;
    return function() {
        return t.apply(n, arguments);
    };
};
String.prototype.startsWith = function(n) {
    return this.indexOf(n) === 0;
};
String.prototype.format = function() {
    var n = arguments;
    return this.replace(/{(\d+)}/g, function(t, i) {
        return typeof n[i] !== "undefined" ? n[i] : t;
    });
};
(function() {
    var t = [].indexOf || function(n) {
        for (var t = 0, i = this.length; t < i; t++)
            if (t in this && this[t] === n)
                return t;
        return -1;
    }, n = [].slice;
    (function(n, t) {
        return typeof define == "function" && define.amd ? define("waypoints", ["jquery"], function(i) {
            return t(i, n);
        }) : t(n.jQuery, n);
    })(this, function(i, r) {
        var a, b, v, o, k, h, s, y, u, f, p, w, d, l, c, e;
        return a = i(r), y = t.call(r, "ontouchstart") >= 0, o = {
            horizontal: {},
            vertical: {}
        }, k = 1, s = {}, h = "waypoints-context-id", p = "resize.waypoints", w = "scroll.waypoints", d = 1, l = "waypoints-waypoint-ids", c = "waypoint", e = "waypoints", b = function() {
            function n(n) {
                var t = this;
                this.$element = n;
                this.element = n[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + k++;
                this.oldScroll = {
                    x: n.scrollLeft(),
                    y: n.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                n.data(h, this.id);
                s[this.id] = this;
                n.bind(w, function() {
                    var n;
                    if (!(t.didScroll || y))
                        return t.didScroll = true, n = function() {
                            return t.doScroll(), t.didScroll = false;
                        }, r.setTimeout(n, i[e].settings.scrollThrottle);
                });
                n.bind(p, function() {
                    var n;
                    if (!t.didResize)
                        return t.didResize = true, n = function() {
                            return i[e]("refresh"), t.didResize = false;
                        }, r.setTimeout(n, i[e].settings.resizeThrottle);
                });
            }
            return n.prototype.doScroll = function() {
                var n, t = this;
                return n = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !y || n.vertical.oldScroll && n.vertical.newScroll || i[e]("refresh"), i.each(n, function(n, r) {
                    var e, f, u;
                    return u = [], f = r.newScroll > r.oldScroll, e = f ? r.forward : r.backward, i.each(t.waypoints[n], function(n, t) {
                        var i, f;
                        return r.oldScroll < (i = t.offset) && i <= r.newScroll ? u.push(t) : r.newScroll < (f = t.offset) && f <= r.oldScroll ? u.push(t) : void 0;
                    }), u.sort(function(n, t) {
                        return n.offset - t.offset;
                    }), f || u.reverse(), i.each(u, function(n, t) {
                        if (t.options.continuous || n === u.length - 1)
                            return t.trigger([e]);
                    });
                }), this.oldScroll = {
                    x: n.horizontal.newScroll,
                    y: n.vertical.newScroll
                };
            }, n.prototype.refresh = function() {
                var r, t, n, u = this;
                return n = i.isWindow(this.element), t = this.$element.offset(), this.doScroll(), r = {
                    horizontal: {
                        contextOffset: n ? 0 : t.left,
                        contextScroll: n ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: n ? 0 : t.top,
                        contextScroll: n ? 0 : this.oldScroll.y,
                        contextDimension: n ? i[e]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, i.each(r, function(n, t) {
                    return i.each(u.waypoints[n], function(n, r) {
                        var u, e, f, o, s;
                        if (u = r.options.offset, f = r.offset, e = i.isWindow(r.element) ? 0 : r.$element.offset()[t.offsetProp], i.isFunction(u) ? u = u.apply(r.element) : typeof u == "string" && (u = parseFloat(u), r.options.offset.indexOf("%") > -1 && (u = Math.ceil(t.contextDimension * u / 100))), r.offset = e - t.contextOffset + t.contextScroll - u, (!r.options.onlyOnScroll || f == null) && r.enabled)
                            return f !== null && f < (o = t.oldScroll) && o <= r.offset ? r.trigger([t.backward]) : f !== null && f > (s = t.oldScroll) && s >= r.offset ? r.trigger([t.forward]) : f === null && t.oldScroll >= r.offset ? r.trigger([t.forward]) : void 0;
                    });
                });
            }, n.prototype.checkEmpty = function() {
                if (i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical))
                    return this.$element.unbind([p, w].join(" ")), delete s[this.id];
            }, n;
        }(), v = function() {
            function n(n, t, r) {
                var u, f;
                r = i.extend({}, i.fn[c].defaults, r);
                r.offset === "bottom-in-view" && (r.offset = function() {
                    var n;
                    return n = i[e]("viewportHeight"), i.isWindow(t.element) || (n = t.$element.height()), n - i(this).outerHeight();
                });
                this.$element = n;
                this.element = n[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = t;
                this.enabled = r.enabled;
                this.id = "waypoints" + d++;
                this.offset = null;
                this.options = r;
                t.waypoints[this.axis][this.id] = this;
                o[this.axis][this.id] = this;
                u = (f = n.data(l)) != null ? f : [];
                u.push(this.id);
                n.data(l, u);
            }
            return n.prototype.trigger = function(n) {
                if (this.enabled)
                    return this.callback != null && this.callback.apply(this.element, n), this.options.triggerOnce ? this.destroy() : void 0;
            }, n.prototype.disable = function() {
                return this.enabled = false;
            }, n.prototype.enable = function() {
                return this.context.refresh(), this.enabled = true;
            }, n.prototype.destroy = function() {
                return delete o[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty();
            }, n.getWaypointsByElement = function(n) {
                var r, t;
                return (t = i(n).data(l), !t) ? [] : (r = i.extend({}, o.horizontal, o.vertical), i.map(t, function(n) {
                    return r[n];
                }));
            }, n;
        }(), f = {
            init: function(n, t) {
                var r;
                return t == null && (t = {}), (r = t.handler) == null && (t.handler = n), this.each(function() {
                    var u, r, n, f;
                    return u = i(this), n = (f = t.context) != null ? f : i.fn[c].defaults.context, i.isWindow(n) || (n = u.closest(n)), n = i(n), r = s[n.data(h)], r || (r = new b(n)), new v(u, r, t);
                }), i[e]("refresh"), this;
            },
            disable: function() {
                return f._invoke(this, "disable");
            },
            enable: function() {
                return f._invoke(this, "enable");
            },
            destroy: function() {
                return f._invoke(this, "destroy");
            },
            prev: function(n, t) {
                return f._traverse.call(this, n, t, function(n, t, i) {
                    if (t > 0)
                        return n.push(i[t - 1]);
                });
            },
            next: function(n, t) {
                return f._traverse.call(this, n, t, function(n, t, i) {
                    if (t < i.length - 1)
                        return n.push(i[t + 1]);
                });
            },
            _traverse: function(n, t, f) {
                var e, o;
                return n == null && (n = "vertical"), t == null && (t = r), o = u.aggregate(t), e = [], this.each(function() {
                    var t;
                    return t = i.inArray(this, o[n]), f(e, t, o[n]);
                }), this.pushStack(e);
            },
            _invoke: function(n, t) {
                return n.each(function() {
                    var n;
                    return n = v.getWaypointsByElement(this), i.each(n, function(n, i) {
                        return i[t](), true;
                    });
                }), this;
            }
        }, i.fn[c] = function() {
            var r, t;
            return t = arguments[0], r = 2 <= arguments.length ? n.call(arguments, 1) : [], f[t] ? f[t].apply(this, r) : i.isFunction(t) ? f.init.apply(this, arguments) : i.isPlainObject(t) ? f.init.apply(this, [null, t]) : t ? i.error("The " + t + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.");
        }, i.fn[c].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        }, u = {
            refresh: function() {
                return i.each(s, function(n, t) {
                    return t.refresh();
                });
            },
            viewportHeight: function() {
                var n;
                return (n = r.innerHeight) != null ? n : a.height();
            },
            aggregate: function(n) {
                var r, t, u;
                return (r = o, n && (r = (u = s[i(n).data(h)]) != null ? u.waypoints : void 0), !r) ? [] : (t = {
                    horizontal: [],
                    vertical: []
                }, i.each(t, function(n, u) {
                    return i.each(r[n], function(n, t) {
                        return u.push(t);
                    }), u.sort(function(n, t) {
                        return n.offset - t.offset;
                    }), t[n] = i.map(u, function(n) {
                        return n.element;
                    }), t[n] = i.unique(t[n]);
                }), t);
            },
            above: function(n) {
                return n == null && (n = r), u._filter(n, "vertical", function(n, t) {
                    return t.offset <= n.oldScroll.y;
                });
            },
            below: function(n) {
                return n == null && (n = r), u._filter(n, "vertical", function(n, t) {
                    return t.offset > n.oldScroll.y;
                });
            },
            left: function(n) {
                return n == null && (n = r), u._filter(n, "horizontal", function(n, t) {
                    return t.offset <= n.oldScroll.x;
                });
            },
            right: function(n) {
                return n == null && (n = r), u._filter(n, "horizontal", function(n, t) {
                    return t.offset > n.oldScroll.x;
                });
            },
            enable: function() {
                return u._invoke("enable");
            },
            disable: function() {
                return u._invoke("disable");
            },
            destroy: function() {
                return u._invoke("destroy");
            },
            extendFn: function(n, t) {
                return f[n] = t;
            },
            _invoke: function(n) {
                var t;
                return t = i.extend({}, o.vertical, o.horizontal), i.each(t, function(t, i) {
                    return i[n](), true;
                });
            },
            _filter: function(n, t, r) {
                var u, f;
                return (u = s[i(n).data(h)], !u) ? [] : (f = [], i.each(u.waypoints[t], function(n, t) {
                    if (r(u, t))
                        return f.push(t);
                }), f.sort(function(n, t) {
                    return n.offset - t.offset;
                }), i.map(f, function(n) {
                    return n.element;
                }));
            }
        }, i[e] = function() {
            var i, t;
            return t = arguments[0], i = 2 <= arguments.length ? n.call(arguments, 1) : [], u[t] ? u[t].apply(null, i) : u.aggregate.call(null, t);
        }, i[e].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, a.load(function() {
            return i[e]("refresh");
        });
    });
}.call(this));/**
 * @class Main ImageEditor class
 * @returns {Object}
 */
var ImageEditor = function() {
    this.editor = null;
    this.panel = null;
    this.toolbar = null;
    this.window = null;
    /**
     * Constructor function for this class
     * 
     * @public
     * @constructs
     */
    this.__constructor = function() {
        var self = this, u = config.presets, r;
        this.editor = new editor({
            container: config.container,
            width: config.width,
            height: config.height
        });
        this.window = new imageEditor.uiWindowElement({
            shapes: imageEditor.SHAPES,
            editor: this.editor
        });
        this.panel = new imageEditor.uiPanelElement({
            settings: imageEditor.SETTINGS,
            editor: this.editor,
            window: this.window
        });
        this.toolbar = new imageEditor.uiToolbarElement({
            panel: this.panel,
            editor: this.editor,
            window: this.window
        });
        this.editor.on("deselect-all", function() {
            self.panel.close();
            self.toolbar.update();
        });
        this.editor.on("item-selected", function(obj) {
            self.toolbar.update(obj.type);
        });
        typeof localStorage.editor !== 'undefined' && (r = JSON.parse(localStorage.editor), r.length > 0 && (u = r));
        this.editor.loadConfig(u);
    };
    this.__constructor();
};