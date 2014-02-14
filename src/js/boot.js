/**
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