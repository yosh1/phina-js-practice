 /*
 * runstant
 */

phina.globalize();

phina.define('MainScene', {
  superClass: 'CanvasScene',
  
  init: function() {
    this.superInit();
    
    // TODO: ここにコードを書いていく
    
  },
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
  });
  
  app.run();
});
     