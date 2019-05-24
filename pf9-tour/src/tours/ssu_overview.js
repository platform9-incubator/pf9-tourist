import {
    short_wait, long_wait,
    get_spot_position,
    add_spotlight_overlay,
    waitForSelector,
    fix_height,
    scroll_to
} from './globals';

export function ssu_overview() {
    $(".popover.tourist-popover").remove();
    var STEPS = [{
        content: "<p>You are always working in the context of a 'Tenant' within Platform9. This Tenant is created by your Administrator and is typically pre-allocated with fixed resource capacity. You can see all the Tenants your Administrator has given you access to and navigate to them from here.</p>",
        setup: function (tour, options, view) {
            var self = this;
            waitForSelector("#tenants-dropdown > .caret", tour, self);
        },
		my: 'top right',
        at: 'top center',
        closeButton: true,
        nextButton: true
    }, {
        content: "<p>The Dashboard view gives you visibility into the quotas allocated to your Tenant and how much of them are currently being consumed. If you are having trouble provisioning resources, here's where you should check to see if this is due to lack of capacity, and contact your Administrator if so.</p>",
        setup: function (tour, options, view) {
            $('#leftnav-dashboard').click();
            var self = this;
            scroll_to('#dashboard-quota-usage-2');
            waitForSelector("#dashboard-quota-usage", tour, self);
        },
        my: 'top center',
        at: 'bottom center',
        closeButton: true,
        nextButton: true
    }, {
        content: "<p>As a user within this Tenant, you have access to an Image Catalog for this Tenant that is populated by your Administrator with Virtual Machine Images. Use these images to deploy Virtual Machines. Request your Administrator if there are images missing or should be added to your catalog. </p>",
        setup: function (tour, options, view) {
            $('#leftnav-images').click();
            var self = this;

            var myInterval = setInterval(function() {
                if ($(".image-status-icon")[0] && $(".image-status-icon")[0].getBoundingClientRect().width === 0){
                    console.log("Bounding rectangle is non-existent, retrying...");
                } else if ($(".no-data-page")[0] && $(".no-data-page")[0].getBoundingClientRect().width !== 0) {
                    scroll_to('#new-image-btn');
                    clearInterval(myInterval);
                    var self = this;
                    tour.view.setTarget($('#new-image-btn'), self);
                    tour.view.show();
                    setTimeout(function () {
                        add_spotlight_overlay();
                    }, short_wait);
                } else {
                    // console.log("OK");
                    scroll_to('.image-status-icon');
                    clearInterval(myInterval);
                    var self = this;
                    tour.view.setTarget($('.image-status-icon'), self);
                    tour.view.show();
                    setTimeout(function () {
                        add_spotlight_overlay();
                    }, short_wait);
                }
            }, short_wait);
        },
        nextButton: true,
        closeButton: true,
        my: 'left center',
        at: 'right center',
    }, {
        content: "<p>These are Virtual Machine instances that are deployed using Images in the catalog. You have access to all Virtual Machines deployed within this Tenant, as you are collaborating with members of this Tenant. From here, you can deploy Virtual Machines that will be owned by you, log into console, and perform various other operations on them.</p>",
        setup: function (tour, options, view) {
            $('#leftnav-instances').click();
            var self = this;

            var myInterval = setInterval(function() {
                if ($("#instances-table")[0] && $("#instances-table")[0].getBoundingClientRect().width === 0){
                    console.log("Bounding rectangle is non-existent, retrying...");
                } else if ($(".no-data-page")[0] && $(".no-data-page")[0].getBoundingClientRect().width !== 0) {
                    scroll_to('#new-instance-btn');
                    clearInterval(myInterval);
                    var self = this;
                    tour.view.setTarget($('#new-instance-btn'), self);
                    tour.view.show();
                    setTimeout(function () {
                        add_spotlight_overlay();
                    }, long_wait);
                } else {
                    // console.log("OK");
                    scroll_to('#instances-tab');
                    clearInterval(myInterval);
                    var self = this;
                    tour.view.setTarget($('#instances-tab'), self);
                    tour.view.show();
                    setTimeout(function () {
                        add_spotlight_overlay();
                    }, long_wait);
              }
            }, long_wait);
        },
        nextButton: true,
        closeButton: true,
        my: 'left center',
    }, {
        content: "<p>Flavors are t-shirt sized configurations that you can apply to your VM instances during creation. Flavors define how much resources your VM gets. Flavors are pre-defined and pre-populated by your Administrator. </p>",
        setup: function (tour, options, view) {
            $('#leftnav-flavors').click();
            var self = this;
            waitForSelector(".flavor-name", tour, self);
        },
        nextButton: true,
        closeButton: true,
        at: 'right center',
    }, {
        content: "<p>The Application Catalog is designed to help you design and deploy complex multi-tier Applications. The catalog may be pre-populated with Applications defined by your Administrator. You also have the ability to author new Applications and upload to your catalog, which then are available to all users within your Tenant to use. </p>",
        setup: function (tour, options, view) {
            $('#leftnav-applications').click();
            setTimeout(function () {
                $('a.inactive').click();
                waitForSelector("div.murano-application:first-child", tour, self);
            }, short_wait);
            var self = this;
        },
        nextButton: true,
        closeButton: true,
        at: 'right center',
        my: 'left center',
    }, {
        content: "<p>Volumes are block storage devices that you can attach to your Virtual Machines for persistent storage. You can attach a volume to a running VM or detach a volume and attach it to another VM at any time.</p>\
                <p>You can also create a snapshot from a volume, which is an exact capture of what a volume looked like at a particular moment in time, including all it's data. You can then use this snapshot to create a new volume.</p>",
        setup: function (tour, options, view) {
            $('#leftnav-storage').click();
            var self = this;
            setTimeout(function () {
                scroll_to('#new-volume-btn');
            }, short_wait);
            waitForSelector("#new-volume-btn", tour, self);
        },
        nextButton: true,
        closeButton: true,
        at: 'bottom center',
        my: 'top right',
    }, {
        content: '<p> Here you will find everything you need to connect directly to your VMs as well as access your Platform9 cloud via API or CLI.</p>',
        setup: function (tour, options, view) {
            window.location.hash = '#/security#api_access'
            var self = this;
            waitForSelector("#api-access-type", tour, self);
        },
        nextButton: true,
        closeButton: true,
        at: 'left center',
    }, {
        content: '<p>"Congratulations! You have finished the Platform9 Managed OpenStack tour. You can come back and take the tour anytime from here</p>',
        setup: function (tour, options, view) {
            var self = this;
            waitForSelector("#pf9-tour", tour, self);
        },
        my: 'top center',
        at: 'top center',
        closeButton: true,
        okButton: true
    }]

    var CANCEL = {
        content: '<p>You can come back and take the tour anytime from here</p>',
        setup: function (tour, options, view) {
            var self = this;
            waitForSelector("#pf9-tour", tour, self);
        },
        my: 'top center',
        at: 'top center',
        okButton: true,
    };

    var TOUR = new Tourist.Tour({
        steps: STEPS,
        cancelStep: CANCEL,
        tipOptions: {
            showEffect: 'slidein'
        }
    });
    TOUR.start();
}
