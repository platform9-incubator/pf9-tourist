window.pf9_modules = {}
window.pf9_modules['overview_tour'] = function(){
  $(".popover.tourist-popover").remove();
  short_wait = 300;
  long_wait = 600;
  var get_spot_position  = function() {
      var pos = $(".tourist-popover").position();
      var arrow = $(".arrow").position();
      return { "left": pos.left + arrow.left, "top": pos.top + arrow.top};
  };

  STEPS = [{
    content: '<p>The sandbox environment is pre-populated with authorized servers. But when you start with Platform9, the\
      "Dashboard" shows this step-by-step wizard to guide you through getting started. </p>',
    setup: function(tour, options, view) {
      window.location.hash = "#/tour/addhosts";
      var self = this;
      $('#tour-add-host').waitUntilExists(function() {
                tour.view.setTarget($('#tour-add-host'), self);
                tour.view.show()
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    my: 'left top',
    at: 'right center',
    nextButton: true
  },{
    content: '<p>Platform9 Managed OpenStack delivers an as-a-Service experience, which means that you do not deal with OpenStack configuration nitty gritty.</p> <p>You simply start by adding your physical servers and making them compute, storage, or networking nodes.</p>',
    setup: function(tour, options) {
      $('#leftnav-infrastructure').click();
      var self = this;
      $('#new-host-btn').waitUntilExists(function() {
                tour.view.setTarget($('#new-host-btn'), self);
                tour.view.show()
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    at: 'bottom center',
    my: 'top right',
  },{
    content: '<p>Platform9 supports all popular Linux distros. You simply download the agent specific to your operating system, and deploy it on your Linux servers.</p>',
    setup: function(tour, options, view) {
      $('#new-host-btn').click();
      var self = this;
      $('#download-host-agent-dropdown').waitUntilExists(function() {
                $('#installer-download').click();
                tour.view.setTarget($('#download-host-agent-dropdown'), self);
                tour.view.show()
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    at: 'right center',
  },{
    content: '<p>Once you install the agent on your Linux servers, the agent makes outbound call to the cloud hosted controller, which then can deploy OpenStack software components in your infrastructure in minutes!</p>',
    setup: function(tour, options) {
      var self = this;
      $("code#installer-invocation").click();
      $('#hostagent-gif').waitUntilExists(function() {
          tour.view.show()
          var spot = get_spot_position();
          $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
          $(".tourist-overlay").append("<div> <img id='hostagent-gif' src='images/hostagent-install.gif'  style='display: block; margin-left: auto; margin-right:auto'> </div>");
          tour.view.setTarget($('#hostagent-gif'), self);
      });
    },
    nextButton: true,
    my: 'top center',
    at: 'bottom center',
  },{
    content: '<p> The servers report for duty on your Platform9 portal awaiting authorization. Once you authorize them to be part of your OpenStack cloud, you can configure various compute, storage, and networking options to finish your OpenStack deployment.</p>',
    setup: function(tour, options, view) {
      $('#leftnav-infrastructure').click();
      var self = this;
      $('#auth-hosts').waitUntilExists(function() {
          tour.view.show()
          var spot = get_spot_position();
          $(".tourist-overlay").css("background","radial-gradient(circle 1px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
          $(".tourist-overlay").append("<div > <img id='auth-hosts' src='images/auth-hosts.png'  style='display: block; margin-left: auto; margin-right:auto'; width='85%'> </div>");
          tour.view.setTarget($('#auth-hosts'), self);
      });
    },
    nextButton: true,
    my: 'top center',
    at: 'bottom center',
  },{
    content: '<p> Did you know that Platform9 supports a fully functional Software-Defined Networking out of the box?\
    This is how you configure options for your Neutron SDN. By simply specifying a few options in our user interface,\
    your Neutron networking is fully configured on your servers behind the scene.</p> <p> <a href=""> Watch Video of Platform9 Neutron Configuration</a></p>',
    setup: function(tour, options, view) {
      var self = this;
      $('#leftnav-networks').click();
      $('#networking-config-tab a').waitUntilExists(function() {
              $('#networking-config-tab a').click();
      });
      $('#dhcp-dns').waitUntilExists(function() {
                tour.view.show();
                tour.view.setTarget($('#dhcp-dns'), self);
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    my: 'bottom center',
    at: 'right center',
  },{
    content: "<p> Once you've defined your networking options, you configure remaining options for your server, storage, and networking nodes to make them part of Platform9 Managed OpenStack.</p>",
    setup: function(tour, options, view) {
      $('#leftnav-infrastructure').click();
      var self = this;
      $('div.online').waitUntilExists(function() {
                tour.view.setTarget($('div.online'), self);
                tour.view.show();
                $('input:radio').filter(':first').click();
                $('td').filter(':first').click();
                $('button.edit-host').click();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    my: 'left center',
    at: 'right center',
  },{
    content: '<p> And just like that, in minutes your OpenStack environment is setup.</p> <p> By the way, Platform9 supports Linux KVM and VMware vSphere as hypervisors. </p>\
    <p> As of November 2016, we now also support making OpenStack hybrid by adding Amazon AWS as an endpoint to OpenStack.</p>\
    <p> <a href="">Watch Video of Platform9 on VMware vSphere</a></p>\
    <p> <a href="">Watch Video of Platform9 OpenStack hybrid cloud deployment on Amazon AWS</p>',
    setup: function(tour, options, view) {
      $('#leftnav-infrastructure').click();
      var self = this;
      $('div.online').waitUntilExists(function() {
                tour.view.setTarget($('div.online'), self);
                tour.view.show();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    my: 'left center',
    at: 'right center',
  },{
    content: "<p> Next we will do a quick tour of various components and features. </p>\
    <p> The infrastructure view provides global visibility into your datacenter infrastructure. </p>\
    <p> You can create one or more Host Aggregates and Availibility Zones to form tiers of infrastructure.</p>\
    <p> Platform9 also supports VM and Application High Availibility via Availibility Zones. </p>\
    <p> <a href=''>Watch Video of VM and App HA</p>",
    setup: function(tour, options, view) {
      $('#leftnav-infrastructure').click();
      var self = this;
      $('div.online').waitUntilExists(function() {
                tour.view.setTarget($('div.online'), self);
                tour.view.show();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    my: 'left center',
    at: 'right center',
  },{
    content: "<p> The Glance image catalog allows you to build a repository of images that VMs will be deployed from. </p>\
    <p> The status field that you see for each image reflects the fact that Platform9 creates a highly available Glance image catalog deployment, that is fault tolerant and can do lazy backup of data. </p>\
    <p> <a href=''>Read more about building a highly available image catalog</p>",
    setup: function(tour, options, view) {
      $('#leftnav-images').click();
      var self = this;
      $('.fa-question-circle').waitUntilExists(function() {
                tour.view.setTarget($('.fa-question-circle'), self);
                tour.view.show();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    my: 'left center',
    at: 'right center',
  },{
    content: "<p> The Instances menu lets you deploy and manage individual VM instances. You can log into VM instance console, as well as take various actions on the VMs here. </p>",
    setup: function(tour, options, view) {
      $('#leftnav-instances').click();
      var self = this;
      $('.fa-ellipsis-h').waitUntilExists(function() {
                tour.view.setTarget($('.fa-ellipsis-h'), self);
                tour.view.show();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    my: 'left center',
  },{
    content: "<p> The Murano application catalog lets your deploy simple single VM applications, or complex multi-tier applications via single click. </p>\
    <p> Application developers define new applications by specifying app definition in json or yaml format.</p>\
    <p> Environments are your test playground. You can deploy one or more applications within one environment, test them and then easily destroy when done.</p>",
    setup: function(tour, options, view) {
      $('#leftnav-applications').click();
      var self = this;
      $('div.murano-application:last-child').waitUntilExists(function() {
                tour.view.setTarget($('div.murano-application:last-child'), self);
                tour.view.show();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    my: 'top right',
    at: 'bottom center',
  },{
    content: "<p> The Cinder Block Storage management lets you integrate and manage your local storage or iSCSI/NFS shared storage (such as NetApp, Pure, Tintri, and various other off-the-shelf solutions) as a datastore.</p>\
    <p> You can integrate with multiple storage endpoints, create volume types of each, and hence manage them as different tiers of storage. </p>",
    setup: function(tour, options, view) {
      $('#leftnav-storage').click();
      var self = this;
      $('#new-volume-btn').waitUntilExists(function() {
                tour.view.setTarget($('#new-volume-btn'), self);
                tour.view.show();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    at: 'bottom center',
    my: 'top right',
  },{
    content: "<p> The Networking page does everything related to Neutron Software-Defined Networking (SDN).</p>\
    <p> You can create internal networks, map them to external networks via routers, create security groups, and allocate floating (public) IPs for your VMs. </p>",
    setup: function(tour, options, view) {
      $('#leftnav-networks').click();
      var self = this;
      $('.network-tenant').waitUntilExists(function() {
                tour.view.setTarget($('.network-tenant'), self);
                tour.view.show();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    at: 'right center',
  },{
    content: "<p> This is the multi-tenancy view via Keystone. Platform9 creates a federated keystone deployment so your various OpenStack regions spread across multiple datacenters\
    are still managed via a single pane UI, unified multi-tenancy, and APIs.</p>\
    <p> You can create tenants, allocate quota to them across different regions, assign leases, assign per-user quotas, and more using this menu. </p>",
    setup: function(tour, options, view) {
      $('#leftnav-users').click();
      var self = this;
      $('#tenant-description').waitUntilExists(function() {
                tour.view.setTarget($('#tenant-description'), self);
                tour.view.show();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    at: 'right center',
  },{
    content: "<p> Events and Alarms menu exposes you to ceilometer events and alarms management. We predefine a set of events and alarms that we consider important, mainly around hosts and VMs.</p>\
    <p> You can always customize and define events and alarms of importance to your environment.</p>\
    <p> For example, you can manage full audit trail of all activity within your cloud environment using ceilometer events and alarms. </p>",
    setup: function(tour, options, view) {
      $('#leftnav-events-alarms').click();
      var self = this;
      $('#alarm-state').waitUntilExists(function() {
                tour.view.setTarget($('#alarm-state'), self);
                tour.view.show();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    at: 'right center',
  },{
    content: '<p> Finally, API Access provides you details of all the OpenStack endpoints that you can connect to and use for your API and CLI automation.</p>\
    <p> OpenStack offers a powerful set of REST APIs and CLIs which are fully supported by Platform9.</p>\
    <p> <a href=""> Read Tutorial - Installing OpenStack CLI clients </a> </p>',
    setup: function(tour, options, view) {
      window.location.hash = '#/security#api_access'
      var self = this;
      $('#api-access-type').waitUntilExists(function() {
                tour.view.setTarget($('#api-access-type'), self);
                tour.view.show();
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      });
    },
    nextButton: true,
    at: 'right center',
  }]

  TOUR = new Tourist.Tour({
    steps: STEPS,
    tipOptions:{
      showEffect: 'slidein'
    }
  });
  TOUR.start();
}

window.pf9_modules['skip_tour'] = function(){
  $(".popover.tourist-popover").remove();

  var get_spot_position  = function() {
      var pos = $(".tourist-popover").position();
      var arrow = $(".arrow").position();
      return { "left": pos.left + arrow.left, "top": pos.top + arrow.top};
  };

  short_wait = 300;
  long_wait = 600;

  STEPS = [{
    content: '<p>You can come back and take the tour anytime from here</p>',
    target: $('#pf9-tour'),
    setup: function(tour, options, view) {
      var self = this;
      setTimeout(function(){
                var spot = get_spot_position();
                $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
      }, short_wait);
    },
    my: 'top center',
    at: 'top center',
    okButton: true,
  }]

  TOUR = new Tourist.Tour({
    steps: STEPS,
    tipOptions:{
      showEffect: 'slidein'
    }
  });
  TOUR.start();
}
