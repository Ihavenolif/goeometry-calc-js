function perspective(p){
    updateHelp(p);
    ggbApplet.setPerspective(p);
  }
  var parameters = {
    "id":"ggbApplet",
    "appName":"geometry",
    "width":1920,
    "height":1080,
    "showToolBar":true,
    "borderColor":null,
    "showMenuBar":true,
    "allowStyleBar":true,
    "showAlgebraInput":true,
    "enableLabelDrags":false,
    "enableShiftDragZoom":true,
    "capturingThreshold":null,
    "showToolBarHelp":false,
    "errorDialogsActive":true,
    "showTutorialLink":true,
    "showLogging":true,
    "useBrowserForJS":false
  };
  var applet = new GGBApplet(parameters, '5.0', 'ggb-element');
  //  when used with Math Apps Bundle, uncomment this:
  //  applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
  window.onload = function() { applet.inject('ggb-element'); }