var SimpleDrawer = new Class({
    options: {
        target: '.drawer-target',
        toggle: '.drawer-toggle',
        autoActive: true
    },
    container: null,
    target: null,
    toggle: null,

    initialize: function (container, options) {
        this.container = container;
        jQuery.extend(true, {}, this.options, options);
        this.target = jQuery(this.container).find(this.options.target).first();
        this.toggle = jQuery(this.container).find(this.options.toggle).first();
        if (this.options.autoActive) {
            this.target.hide();
        }
        this.setToggleState();
        var self = this;
        jQuery(this.toggle).on("click", function(event) {
            jQuery(self.target).slideToggle( "fast", function() {
                self.setToggleState();
            });
        });
    },

    setToggleState: function () {
        if (jQuery(this.target).is( ":hidden" )) {
            this.setToggleInactive();
        } else {
            this.setToggleActive();
        }
    },

    setToggleInactive: function () {
        if (jQuery(this.toggle).is(':checkbox')) {
            jQuery(this.toggle).prop('checked', false);
        }
        jQuery(this.toggle).removeClass('active');
    },

    setToggleActive: function () {
        if (jQuery(this.toggle).is(':checkbox')) {
            jQuery(this.toggle).prop('checked', true);
        }
        jQuery(this.toggle).addClass('active');
    }

});