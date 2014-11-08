(function(){
  var Info_Class = function() {
    this.settings = {
      width: 400,
      backgroundColor: '#000',
      colors: {
        default: '#fff',
        string: '#e85248', // Red
        object: '#666', // Grey
        boolean: '#8dbf67', // Green
        number: '#5CBDD0', // Light Blue
        function: '#FCCB56' // Yellow Green
      },
      opacity: 0.7
    };
  }
  Info_Class.prototype = {
    init: function() {
      this.renderContainer();
      this.addStyle();
    },
    renderContainer: function() {
      //render
      var style = 'position:fixed;top:0;left:0;padding:15px;';
      $('body').append('<div id="debug-info" style="' + style + '"><ul style="list-style:none;padding:0;margin:0;"></ul></div>');
      this.container = $('#debug-info');
    },
    addStyle: function() {
      this.container.css('width', this.settings.width);
      this.container.css('color', this.settings.colors.default);
      this.container.css('background-color', this.settings.backgroundColor);
      this.container.css('opacity', this.settings.opacity);
    },
    setInfo: function(data) {
      // maybe just change the color
      var str = typeof data + ' ' + data;
      this.addLine(data);
    },
    addLine: function(data) {
      var color = this.settings.colors[typeof data];
      var typeBlock = '<div style="color:#333;width:60px;text-align:right;display:inline-block;">' + typeof data + '</div>';
      var str = '<li style="color: ' + color + ';">' + typeBlock + ' ' + data + '</li>';
      this.container.find('ul').prepend(str);
    }
  }
  
  $.fn.killInfo = false;
  $.fn.info = function(str) {
    var info = new Info_Class();
    if (!$.killInfo) {
      info.init();
      info.setInfo(str);
    }
    return this;
  }  
}());
