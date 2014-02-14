/**
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
                            scrollbars: true,
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
        );