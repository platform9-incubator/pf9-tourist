import {short_wait, long_wait, get_spot_position, add_spotlight_overlay } from './globals';

export function kube_overview() {
    $(".popover.tourist-popover").remove();
    var STEPS = [{
        content: "<p>If you're looking to run Managed Kubernetes on Amazon Web Services (AWS) public cloud,\
    the first step is to add your AWS endpoint as a cloud provider.</p>\
    <p> You can have multiple cloud providers of the same type. </p>",
        setup: function (tour, options, view) {
          window.location.hash = '#/infrastructureK8s#cps';
          var myInterval = setInterval(function() {
            if($("#new-cloud-provider-btn")[0].getBoundingClientRect().width === 0){
                if($("#new-cloudprovider-btn")[0].getBoundingClientRect().width === 0){
                      console.log("Bounding rectangle is non-existent, retrying...");
                  } else {
                      clearInterval(myInterval);
                      var self = this;
                      tour.view.setTarget($("#new-cloudprovider-btn"), self);
                      tour.view.show();
                      add_spotlight_overlay();
                  }
            } else {
                // console.log("OK");
                clearInterval(myInterval);
                var self = this;
                tour.view.setTarget($("#new-cloud-provider-btn"), self);
                tour.view.show();
                add_spotlight_overlay();
            }
          }, short_wait);
        },
        at: 'bottom center',
        my: 'top right',
        viewport: $("#main-content"),
        closeButton: true,
        nextButton: true
    }, {
        content: '<p>Once the cloud provider is added, you can directly go to cluster creation and select' +
        ' the cloud provider for cluster deployment. This option will then walk you through the steps' +
        ' for fully automated deployment of Kubernetes clusters. We handle every piece of configuration behind' +
        ' the scenes. </p> <p><a href="https://platform9.com/support/create-multi-master-highly-available-kubernetes-clusters/" target="_blank"> https://platform9.com/support/create-multi-master-highly-available-kubernetes-clusters/ </a></p>',
        setup: function (tour, options) {
            window.location.hash = '#/kubernetes/new/cluster';
            var myInterval = setInterval(function() {
              if($("#cluster-cloud-provider")[0].getBoundingClientRect().width === 0){
                  console.log("Bounding rectangle is non-existent, retrying...");
              } else {
                  // console.log("OK");
                  clearInterval(myInterval);
                  var self = this;
                  tour.view.setTarget($('#cluster-cloud-provider'), self);
                  tour.view.show();
                  add_spotlight_overlay();
              }
              if($("#new-cloud-provider-btn")[0].getBoundingClientRect().width === 0){
                  console.log("Bounding rectangle is non-existent, retrying...");
              } else {
                  // console.log("OK");
                  clearInterval(myInterval);
                  var self = this;
                  tour.view.setTarget($('#new-cloud-provider-btn'), self);
                  tour.view.show();
                  add_spotlight_overlay();
              }
            }, short_wait);
        },
        nextButton: true,
        closeButton: true,
    }, {
        content: "<p>If you're looking to run Managed Kubernetes on bare metal servers, then skip the cloud providers, and go straight" +
        " to Nodes -> Add Nodes menu.</p>",
        setup: function (tour, options, view) {
            window.location.hash = '#/infrastructureK8s#nodes';
            var myInterval = setInterval(function() {
              if($("#new-node-btn")[0].getBoundingClientRect().width === 0){
                  if($("a[href$='#/infrastructure/addnodes']")[0].getBoundingClientRect().width === 0) {
                    console.log("Bounding rectangle is non-existent, retrying...");
                  } else {
                    clearInterval(myInterval);
                    var self = this;
                    tour.view.setTarget($("a[href$='#/infrastructure/addnodes']"), self);
                    tour.view.show();
                    add_spotlight_overlay();
                  }
              } else {
                  // console.log("OK");
                  clearInterval(myInterval);
                  var self = this;
                  tour.view.setTarget($('#new-node-btn'), self);
                  tour.view.show();
                  add_spotlight_overlay();
              }
            }, short_wait);
        },
        nextButton: true,
        closeButton: true,
        at: 'bottom center',
        my: 'top right',
    }, {
        content: "<p>Simply download the agent for your Managed Kubernetes environment, deploy it on each physical server you'd like to use" +
        " for Kubernetes, then authorize the servers using the Platform9 web UI!</p>",
        setup: function (tour, options) {
            window.location.hash = '#/infrastructureK8s/addnodes';
            setTimeout(function() {
              $('.installer-button').click();
            }, short_wait)
            var myInterval = setInterval(function() {
              if($("#download-host-agent-dropdown")[0].getBoundingClientRect().width === 0){
                  console.log("Bounding rectangle is non-existent, retrying...");
              } else {
                  // console.log("OK");
                  clearInterval(myInterval);
                  var self = this;
                  tour.view.setTarget($('#download-host-agent-dropdown'), self);
                  tour.view.show();
                  add_spotlight_overlay();
              }
            }, short_wait);
        },
        nextButton: true,
        closeButton: true,
        my: 'left center',
    }, {
        content: '<p> Authorize the servers and assign the <b> Containervisor </b> role to make them part of managed Kubernetes.</p>',
        setup: function (tour, options, view) {
            window.location.hash = '#/kubernetes/users#tenants';
            var self = this;
            setTimeout(function () {
                tour.view.show();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background", "radial-gradient(circle 1px at " + spot.left + "px " + " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
                $(".tourist-overlay").append("<div > <img id='auth-hosts' src='images/auth-containervisor.png'  style='display: block; margin-left: auto; margin-right:auto'; width='85%'> </div>");
                tour.view.setTarget($('#auth-hosts'), self);
            }, short_wait);
        },
        nextButton: true,
        closeButton: true,
        my: 'top center',
        at: 'top center',
    }, {
        content: "<p> Finally, the built-in CLI lets you connect to any cluster you've created and run Kubernetes commands directly from the web browser.</p>",
        setup: function (tour, options, view) {
            $('#leftnav-cli').click();
            var myInterval = setInterval(function() {
              if($("#terminal-iframe-header")[0].getBoundingClientRect().width === 0){
                  console.log("Bounding rectangle is non-existent, retrying...");
              } else {
                  // console.log("OK");
                  clearInterval(myInterval);
                  var self = this;
                  tour.view.setTarget($('#terminal-iframe-header'), self);
                  tour.view.show();
                  add_spotlight_overlay();
              }
            }, short_wait);
        },
        teardown: function(tour, options, view) {
            $("#terminal-iframe-actions > i.fa.fa-times").click();
        },
        nextButton: true,
        closeButton: true,
        my: 'bottom center',
        at: 'top center',
    }, {
        content: '<p>Congratulations! You have now completed the tour of Platform9 Managed Kubernetes. You can come back and take the tour anytime from here.</p>',
        setup: function (tour, options, view) {
            var myInterval = setInterval(function() {
              if($("#pf9-tour")[0].getBoundingClientRect().width === 0){
                  console.log("Bounding rectangle is non-existent, retrying...");
              } else {
                  // console.log("OK");
                  clearInterval(myInterval);
                  var self = this;
                  tour.view.setTarget($('#pf9-tour'), self);
                  tour.view.show();
                  add_spotlight_overlay();
              }
            }, short_wait);
        },
        my: 'top center',
        at: 'top center',
        okButton: true,
        prevButton: true,
    }]

    var CANCEL = {
        content: '<p>You can come back and take the tour anytime from here</p>',
        setup: function (tour, options, view) {
            var myInterval = setInterval(function() {
              if($("#pf9-tour")[0].getBoundingClientRect().width === 0){
                  console.log("Bounding rectangle is non-existent, retrying...");
              } else {
                  // console.log("OK");
                  clearInterval(myInterval);
                  var self = this;
                  tour.view.setTarget($('#pf9-tour'), self);
                  tour.view.show();
                  add_spotlight_overlay();
              }
            }, short_wait);
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
