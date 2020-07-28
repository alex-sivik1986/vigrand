(function() {
    //------------------- Portfolio -------------------------------------------------------------------  
    tinymce.create('tinymce.plugins.portfolio', {
        init : function(ed, url) {
          
          ed.addCommand('mcethemedelta', function() {
                ed.windowManager.open({
                    // call content via admin-ajax, no need to know the full plugin path
                    file: ajaxurl + '?action=webdevia_tinymce&shortcode=portfolio',
                    width: 500 + ed.getLang('wd-shortcode.delta_width', 0),
                    height: 210 + ed.getLang('wd-shortcode.delta_height', 0),
                    inline: 1
                }, {
                    plugin_url: url // Plugin absolute URL
                });
            });

            // Register example button
            ed.addButton('wd-shortcode', {
                title: 'Add Portfolio',
                cmd: 'mcethemedelta',
                image: url + '/icon/portfolio.png'
            });

            // Add a node change handler, selects the button in the UI when a image is selected
            ed.onNodeChange.add(function(ed, cm, n) {
                cm.setActive('wd-shortcode', n.nodeName == 'IMG');
            });
            
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('portfolio', tinymce.plugins.portfolio);
    //------------------- maps -------------------------------------------------------------------
    tinymce.create('tinymce.plugins.doors_google_map', {
        init : function(ed, url) {
          ed.addButton('doors_google_map', {
              title : 'Add a Map',
              image : url+'/map.png',
              onclick : 
                function() {
                  ed.windowManager.open({
                    // call content via admin-ajax, no need to know the full plugin path
                    file: ajaxurl + '?action=webdevia_tinymce&shortcode=doors_google_map',
                    width: 500 + ed.getLang('wd-shortcode.delta_width', 0),
                    height: 500 + ed.getLang('wd-shortcode.delta_height', 0),
                    inline: 1
                }, {
                    plugin_url: url // Plugin absolute URL
                });
              }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('doors_google_map', tinymce.plugins.doors_google_map);
      //------------------- team -------------------------------------------------------------------
    tinymce.create('tinymce.plugins.doors_team', {
        init : function(ed, url) {
          ed.addButton('doors_team', {
              title : 'Add Team List',
              image : url+'/icon/team.png',
              onclick : 
                function() {
                  ed.windowManager.open({
                    // call content via admin-ajax, no need to know the full plugin path
                    file: ajaxurl + '?action=webdevia_tinymce&shortcode=doors_team',
                    width: 500 + ed.getLang('wd-shortcode.delta_width', 0),
                    height: 500 + ed.getLang('wd-shortcode.delta_height', 0),
                    inline: 1
                }, {
                    plugin_url: url // Plugin absolute URL
                });
              }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('doors_team', tinymce.plugins.doors_team);
      //------------------- testimonail -------------------------------------------------------------------
    tinymce.create('tinymce.plugins.doors_testimonial', {
        init : function(ed, url) {
          ed.addButton('doors_testimonial', {
              title : 'Add testimonial List',
              image : url+'/icon/testimonial.png',
              onclick : 
                function() {
                  ed.windowManager.open({
                    // call content via admin-ajax, no need to know the full plugin path
                    file: ajaxurl + '?action=webdevia_tinymce&shortcode=doors_testimonial',
                    width: 500 + ed.getLang('wd-shortcode.delta_width', 0),
                    height: 500 + ed.getLang('wd-shortcode.delta_height', 0),
                    inline: 1
                }, {
                    plugin_url: url // Plugin absolute URL
                });
              }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('doors_testimonial', tinymce.plugins.doors_testimonial);
  
    
     //------------------- Testimonial -------------------------------------------------------------------
  /*  tinymce.create('tinymce.plugins.testimonial', {
        init : function(ed, url) {
          ed.addButton('testimonial', {
              title : 'Add testimonial',
              image : url+'/icon/testimonial.png',
              onclick : 
                function() {
                  ed.selection.setContent('[doors_testimonial]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('testimonial', tinymce.plugins.testimonial);
   */
    //------------------- Pricing table -------------------------------------------------------------------
    tinymce.create('tinymce.plugins.pricingtable', {
        init : function(ed, url) {
          ed.addButton('pricingtable', {
              title : 'Add a Pricing Table',
              image : url+'/icon/pricingtable.png',
              onclick : 
                function() {
                  ed.selection.setContent('<ul class="pricing-table">\
                          <li class="title">Standard</li>\
                          <li class="price">$99.99</li>\
                          <li class="description">An awesome description</li>\
                          <li class="bullet-item">1 Database</li>\
                          <li class="bullet-item">5GB Storage</li>\
                          <li class="bullet-item">20 Users</li>\
                          <li class="cta-button"><a class="button" href="#">Buy Now</a></li>\
                        </ul>');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('pricingtable', tinymce.plugins.pricingtable);
    
   
    
   
    
   
  
    
      
    
})();