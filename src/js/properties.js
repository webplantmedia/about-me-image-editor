/**
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
                    min: 0,
                    max: 40,
                    step: 1,
                    start: 0
                }
            }, {
                type: "StrokeColor",
                title: "Stroke Color",
                data: {
                    type: "color"
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
    }];