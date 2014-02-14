ui = {
    toggleMethods: function() {
        $.element.toggleClass(this, 'toggled');
        $('.sectionItems', this.parentNode.parentNode).toggleClass('invisible');
    },
    toggleModule: function(module) {
        if (module) {
            var name = 'filter module-' + module;
            if ($('body').toggleClass(name).hasClass(name)) {
                createCookie("jZUDocModule", module);
            }
            else {
                eraseCookie("jZUDocModule");
            }
        }
        ui.hideEmptySections();
        ui.updateFragmentLocation();
    },
    hideEmptySections: function() {
        var sections = $('.section');
        sections.each(function(i) {
            var count = 0;
            var sectionItems = $(this).find('.sectionItems');
                sectionItems.find('.sectionItem').each(function() {
                if ($.element.css(this, 'display') != 'none') {
                    count++;
                }
            });
            if (sectionItems.e.length > 0 && count == 0) {
                $.element.addClass(this, 'invisible');
            }
            else {
                $.element.removeClass(this, 'invisible');
            }
        });
    },
    updateFragmentLocation: function() {
        if (window.location.hash) {
            window.location.hash = window.location.hash;
        }
    },
    updateModuleState: function() {
        var module = readCookie("jZUDocModule");
        if (module) {
            $('body').addClass('filter module-' + module);
            ui.hideEmptySections();
        }
        ui.updateFragmentLocation();
    }
}
window.onload = function() {
    $('.method-toggler').on('click', ui.toggleMethods);
    $('.module-filter').attr('title', 'Module Filter');
    $.each(['core', 'css', 'dom', 'event', 'ajax'], function(i,e) {
        $('.module-' + e + ' .module-filter').on('click', function() {
            ui.toggleModule(e);
        });
    });
    ui.updateModuleState();
    if (typeof dp != 'undefined') {
        dp.SyntaxHighlighter.HighlightAll('code');    
    }
}
window.onunload = function() {
    $.event.removeAll();
}
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
function eraseCookie(name) {
    createCookie(name, "", -1);
}