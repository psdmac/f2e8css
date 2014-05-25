var myApp;

myApp = angular.module('myApp', ['ngSanitize']);

myApp.controller('MainCtrl', [
  '$scope', '$timeout', '$sce', function($scope, $timeout, $sce) {
    var editor_1_css, editor_1_html, editor_2_css, editor_2_html, editor_3_css, editor_3_html, editor_4_css, editor_4_html, editor_5_css, editor_5_html, editor_6_css, editor_6_html, mySwiper;

    mySwiper = new Swiper('.swiper-container', {
      pagination: '.pagination',
      paginationClickable: true
    });
    editor_1_html = ace.edit('editor-slide-1-html');
    editor_1_html.setTheme("ace/theme/monokai");
    editor_1_html.getSession().setMode("ace/mode/html");
    editor_1_html.setValue('<div id="wrap">\n\
  <div id="img">\n\
    <span class="id">#img</span>\n\
    <img src="https://www.google.com.tw/images/srpr/logo3w.png" alt="Googlelogo" />\n\
  </div>\n\
  <div id="content">\n\
    <span class="id">#content</span>\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
    31212312132132 132131123121\n\
  </div>\n\
  <span class="id">#wrap</span>\n\
</div>\n\
20130122, R+');
    $scope.bindHtml1 = $sce.trustAsHtml(editor_1_html.getValue());
    editor_1_html.getSession().on('change', function(e) {
      $scope.bindHtml1 = $sce.trustAsHtml(editor_1_html.getValue());
      return $scope.$apply();
    });
    editor_1_css = ace.edit('editor-slide-1-css');
    editor_1_css.setTheme("ace/theme/monokai");
    editor_1_css.getSession().setMode("ace/mode/css");
    editor_1_css.setValue('#wrap{\n\
  background-color:rgba(255,0,0,.3);\n\
  width:700px;\n\
  overflow:hidden; /* for clear inner-element(s) float */\n\
  _zomm:1;         /* IE6 sucks */\n\
}\n\
#img{\n\
  background-color:rgba(0,0,255,.3);\n\
  float:left;\n\
}\n\
#content{\n\
  background-color:rgba(255,255,0,.3);\n\
  overflow:hidden; /* ref: Facebook */\n\
}\n\
\n\
/* just for demo layout */\n\
.id{\n\
  display:block;\n\
  position:absolute;\n\
  left:0;\n\
  background-color:red;\n\
}\n\
div{\n\
  position:relative;\n\
}\n\
#wrap>span.id{\n\
  bottom:0;\n\
}\n\n');
    $scope.bindCss1 = $sce.trustAsHtml(editor_1_css.getValue());
    editor_1_css.getSession().on('change', function(e) {
      $scope.bindCss1 = $sce.trustAsHtml(editor_1_css.getValue());
      return $scope.$apply();
    });
    editor_2_html = ace.edit('editor-slide-2-html');
    editor_2_html.setTheme("ace/theme/monokai");
    editor_2_html.getSession().setMode("ace/mode/html");
    editor_2_html.setValue('<header>\n\
  CSS tooltip by data-*<br />\n\
  <a href="http://blog.mukispace.com/pure-css-tooltip-data-tag‎/" target="_blank">(http://blog.mukispace.com/pure-css-tooltip-data-tag/)‎</a>\n\
</header>\n\
<section>\n\
  <h2>single line</h2>\n\
  <div class="tip"><span data-tooltip="hello world">Hover Me!!!</span></div>\n\
  <h2>mutliple line</h2>\n\
  <div class="tip"><span data-tooltip="this is line 1 &#xa;this is line 2">push you mouse here!!!</span></div>\n\
</section>');
    $scope.bindHtml2 = $sce.trustAsHtml(editor_2_html.getValue());
    editor_2_html.getSession().on('change', function(e) {
      $scope.bindHtml2 = $sce.trustAsHtml(editor_2_html.getValue());
      return $scope.$apply();
    });
    editor_2_css = ace.edit('editor-slide-2-css');
    editor_2_css.setTheme("ace/theme/monokai");
    editor_2_css.getSession().setMode("ace/mode/css");
    editor_2_css.setValue('.slide2 {\n\
  background: #333;\n\
  font-size: 1em;\n\
  color: #f0f0f0;\n\
  line-height: 1.1em;\n\
}\n\
a {\n\
  text-decoration: none;\n\
}\n\
a:hover {\n\
  position: relative;\n\
  top: 1px;\n\
  left: 1px;\n\
}\n\
section {\n\
  width: 500px;\n\
  margin: 0 auto;\n\
  background: #555;\n\
  padding: 1em;\n\
}\n\
section div {\n\
  margin: 0 0 2em 0;\n\
}\n\
header {\n\
  background: #d9444a;\n\
  text-align: center;\n\
  color: #fff;\n\
  font-size: .5em;\n\
  padding: .7em 0;\n\
}\n\
header a {\n\
  color: rgba(255, 255, 255, 0.6);\n\
  text-shadow: 1px 1px 1px #973735;\n\
}\n\
header:after {\n\
  content: " ";\n\
  position: absolute;\n\
  width: 0;\n\
  height: 0;\n\
  border-width: 10px;\n\
  border-style: solid;\n\
  border-color: #d9444a transparent transparent transparent;\n\
  top: 53px;\n\
  left: 50%;\n\
}\n\
h2 {\n\
  font-size: 1em;\n\
  margin: 0 0 .5em 0;\n\
  background: #444;\n\
  display: inline-block;\n\
  padding: .5em 1.2em;\n\
  position: relative;\n\
  left: -1em;\n\
}\n\
\
/* tooltip settings start */\
\
.tip span {\n\
  position: relative;\n\
  display: inline-block;\n\
}\n\
\
.tip span:hover {\n\
  cursor: pointer;\n\
}\n\
\
.tip span:hover:before, .tip span:hover:after {\n\
  opacity: 1;\n\
}\n\
\
.tip span:before {\n\
  content: attr(data-tooltip);\n\
  background: #d9444a;\n\
  color: #fff;\n\
  padding: .8em 1em;\n\
  position: absolute;\n\
  left: 100%;\n\
  top: -90%;\n\
  margin-left: 14px;\n\
  white-space: pre;\n\
}\n\
\
.tip span:after {\n\
  content: "";\n\
  position: absolute;\n\
  width: 0;\n\
  height: 0;\n\
  border-width: 8px;\n\
  border-style: solid;\n\
  border-color: transparent #d9444a transparent transparent;\n\
}\n\
\
.tip span:before, .tip span:after {\n\
  opacity: 0;\n\
  -webkit-transition: opacity 0.3s ease-out;\n\
  -moz-transition: opacity 0.3s ease-out;\n\
  -o-transition: opacity 0.3s ease-out;\n\
  transition: opacity 0.3s ease-out;\n\
}\n\n');
    $scope.bindCss2 = $sce.trustAsHtml(editor_2_css.getValue());
    editor_2_css.getSession().on('change', function(e) {
      $scope.bindCss2 = $sce.trustAsHtml(editor_2_css.getValue());
      return $scope.$apply();
    });
    editor_3_html = ace.edit('editor-slide-3-html');
    editor_3_html.setTheme("ace/theme/monokai");
    editor_3_html.getSession().setMode("ace/mode/html");
    editor_3_html.setValue('<div class="filter-menu-block filter-center option-set" data-group="color">\n\
    \n\
    <div class="check-circle red">\n\
      <input type="checkbox" id="color-1" value=".red">\n\
      <label for="color-1">\n\
      RED\n\
      </label>\n\
    </div>\n\
    \n\
    <div class="check-circle pink">\n\
      <input type="checkbox" id="color-2" value=".pink">\n\
      <label for="color-2">\n\
      PINK\n\
      </label>\n\
    </div>\n\
    \n\
    <div class="check-circle blue">\n\
      <input type="checkbox" id="color-3" value=".blue">\n\
      <label for="color-3">\n\
      BLUE\n\
      </label>\n\
    </div>\n\
    \n\
    <div class="check-circle purple">\n\
      <input type="checkbox" id="color-4" value=".purple">\n\
      <label for="color-4">\n\
      PURPLE\n\
      </label>\n\
    </div>\n\
    \n\
    <div class="check-circle green">\n\
      <input type="checkbox" id="color-5" value=".green">\n\
      <label for="color-5">\n\
      GREEN\n\
      </label>\n\
    </div>\n\
    \n\
    <div class="check-circle yellow">\n\
      <input type="checkbox" id="color-6" value=".yellow">\n\
      <label for="color-6">\n\
      YELLOW\n\
      </label>\n\
    </div>\n\
    \n\
    <div class="check-circle orange">\n\
      <input type="checkbox" id="color-7" value=".orange">\n\
      <label for="color-7">\n\
      ORANGE\n\
      </label>\n\
    </div>\n\
    \n\
    <div class="check-circle brown">\n\
      <input type="checkbox" id="color-8" value=".brown">\n\
      <label for="color-8">\n\
      BROWN\n\
      </label>\n\
    </div>\n\
    \n\
    <div class="check-circle gray">\n\
      <input type="checkbox" id="color-9" value=".gray">\n\
      <label for="color-9">\n\
      GRAY\n\
      </label>\n\
    </div>\n\
    \n\
    <div class="check-circle white">\n\
      <input type="checkbox" id="color-10" value=".white">\n\
      <label for="color-10">\n\
      WHITE\n\
      </label>\n\
    </div>\n\
    \n\
    <div class="check-circle black">\n\
      <input type="checkbox" id="color-11" value=".black">\n\
      <label for="color-11">\n\
      BLACK\n\
      </label>\n\
    </div>\n\
  \n\
  </div>\n');
    $scope.bindHtml3 = $sce.trustAsHtml(editor_3_html.getValue());
    editor_3_html.getSession().on('change', function(e) {
      $scope.bindHtml3 = $sce.trustAsHtml(editor_3_html.getValue());
      return $scope.$apply();
    });
    editor_3_css = ace.edit('editor-slide-3-css');
    editor_3_css.setTheme("ace/theme/monokai");
    editor_3_css.getSession().setMode("ace/mode/css");
    editor_3_css.setValue('.check-circle {\n\
  width: 34px;\n\
  height: 34px;\n\
  background: #ddd;\n\
  margin: 6px;\n\
  border-radius: 100%;\n\
  box-shadow: inset 0 1px 5px -1px #333;\n\
  display: inline-block;\n\
  position: relative;\n\
}\n\
\
.check-circle label {\n\
  display: block;\n\
  width: 48px;\n\
  height: 48px;\n\
  top: -7px;\n\
  left: -7px;\n\
  color: transparent;\n\
  font-size: 0;\n\
  -webkit-transition: all .5s ease;\n\
  -moz-transition: all .5s ease;\n\
  -o-transition: all .5s ease;\n\
  -ms-transition: all .5s ease;\n\
  transition: all .5s ease;\n\
  cursor: pointer;\n\
  position: absolute;\n\
  z-index: 1;\n\
  background: none;\n\
}\n\
\
.check-circle input[type="checkbox"] {\n\
  visibility: hidden;\n\
}\n\
\
.check-circle input[type="checkbox"]:checked + label {\n\
  width: 40px;\n\
  height: 40px;\n\
  top: -3px;\n\
  left: -3px;\n\
  border: 2px solid #e0e0e0;\n\
}\n\
\
.check-circle.red {\n\
  background: #ed1c24;\n\
}\n\
\
.check-circle.pink {\n\
  background: #ff9293;\n\
}\n\
\
.check-circle.blue {\n\
  background: #0054a6;\n\
}\n\
\
.check-circle.purple {\n\
  background: #662d91;\n\
}\n\
\
.check-circle.green {\n\
  background: #197b30;\n\
}\n\
\
.check-circle.yellow {\n\
  background: #fff568;\n\
}\n\
\
.check-circle.orange {\n\
  background: #f26522;\n\
}\n\
\
.check-circle.brown {\n\
  background: #8c6239;\n\
}\n\
\
.check-circle.gray {\n\
  background: #b7b7b7;\n\
}\n\
\
.check-circle.white {\n\
  background: #ffffff;\n\
}\n\
\
.check-circle.black {\n\
  background: #000000;\n\
}\n\n');
    $scope.bindCss3 = $sce.trustAsHtml(editor_3_css.getValue());
    editor_3_css.getSession().on('change', function(e) {
      $scope.bindCss3 = $sce.trustAsHtml(editor_3_css.getValue());
      return $scope.$apply();
    });
    editor_4_html = ace.edit('editor-slide-4-html');
    editor_4_html.setTheme("ace/theme/monokai");
    editor_4_html.getSession().setMode("ace/mode/html");
    editor_4_html.setValue('<div class="wrap-dotted">dotted\n\
    <div class="box1"></div>\n\
    <div class="box2"></div>\n\
    <div class="box3"></div>\n\
  </div>\n\
  <div class="wrap-dashed">dashed\n\
    <div class="box1"></div>\n\
    <div class="box2"></div>\n\
    <div class="box3"></div>\n\
  </div>\n');
    $scope.bindHtml4 = $sce.trustAsHtml(editor_4_html.getValue());
    editor_4_html.getSession().on('change', function(e) {
      $scope.bindHtml4 = $sce.trustAsHtml(editor_4_html.getValue());
      return $scope.$apply();
    });
    editor_4_css = ace.edit('editor-slide-4-css');
    editor_4_css.setTheme("ace/theme/monokai");
    editor_4_css.getSession().setMode("ace/mode/css");
    editor_4_css.setValue('\
.wrap-dotted {\n\
  display: inline-block;\n\
  text-align: center;\n\
  margin-left: 50px;\n\
}\n\
\n\
.wrap-dotted div {\n\
  border-style: dotted;\n\
}\n\
\n\
.wrap-dashed {\n\
  display: inline-block;\n\
  text-align: center;\n\
  margin-left: 50px;\n\
}\n\
\n\
.wrap-dashed div {\n\
  border-style: dashed;\n\
}\n\
\n\
.box1 {\n\
  border-width: 3px;\n\
  border-color: #999;\n\
  width: 100px;\n\
  height: 100px;\n\
  margin: 20px;\n\
}\n\
\n\
.box2 {\n\
  border-width: 3px;\n\
  border-color: #999;\n\
  width: 100px;\n\
  height: 100px;\n\
  margin: 20px;\n\
  border-radius: 50%;\n\
}\n\
\n\
.box3 {\n\
  border-width: 3px;\n\
  border-color: #999;\n\
  width: 100px;\n\
  height: 100px;\n\
  margin: 20px;\n\
  border-radius: 20%;\n\
}\n\n');
    $scope.bindCss4 = $sce.trustAsHtml(editor_4_css.getValue());
    editor_4_css.getSession().on('change', function(e) {
      $scope.bindCss4 = $sce.trustAsHtml(editor_4_css.getValue());
      return $scope.$apply();
    });
    editor_5_html = ace.edit('editor-slide-5-html');
    editor_5_html.setTheme("ace/theme/monokai");
    editor_5_html.getSession().setMode("ace/mode/html");
    editor_5_html.setValue('<div class="dialog effect">\n\
  this is a dialog .\n\
</div>\n');
    $scope.bindHtml5 = $sce.trustAsHtml(editor_5_html.getValue());
    editor_5_html.getSession().on('change', function(e) {
      $scope.bindHtml5 = $sce.trustAsHtml(editor_5_html.getValue());
      return $scope.$apply();
    });
    editor_5_css = ace.edit('editor-slide-5-css');
    editor_5_css.setTheme("ace/theme/monokai");
    editor_5_css.getSession().setMode("ace/mode/css");
    editor_5_css.setValue('.dialog{\n\
  width: 200px;\n\
  height: 200px;\n\
  position: absolute;\n\
  margin: auto;\n\
  left: 0;\n\
  right: 0;\n\
  bottom: 0;\n\
  top: 0;\n\
  background: #CCC;\n\
}\n\
.effect{\n\
  text-align: center;\n\
  line-height: 200px;\n\
  box-shadow: 3px 2px 3px rgba(0,0,0,0.5);\n\
  border-radius:10px;\n\
}\n\n');
    $scope.bindCss5 = $sce.trustAsHtml(editor_5_css.getValue());
    editor_5_css.getSession().on('change', function(e) {
      $scope.bindCss5 = $sce.trustAsHtml(editor_5_css.getValue());
      return $scope.$apply();
    });
    editor_6_html = ace.edit('editor-slide-6-html');
    editor_6_html.setTheme("ace/theme/monokai");
    editor_6_html.getSession().setMode("ace/mode/html");
    editor_6_html.setValue('<form action="" method="post" enctype="multipart/form-data">/n\
  For IE9 up\n\
  <br>\n\
  <br>\n\
    <label for="file-style" class="btn">\n\
      <span>Select file to upload</span>\n\
    </label>\n\
    <input type="file" name="file_2" id="file-style">\n\
    <br>\n\
    <br>\n\
    Checkbox: <input type="checkbox" name="check" value="1">\n\
    <span class="check"></span>\n\
    <br>\n\
    <br>\n\
    <input type="radio" name="sex" value="male">\n\
    <span class="check"></span>Male\n\
    <br>\n\
    <input type="radio" name="sex" value="female">\n\
    <span class="check"></span>Female\n\
    <br>\n\
    <br>\n\
    <input type="submit" class="">\n\
</form>\n');
    $scope.bindHtml6 = $sce.trustAsHtml(editor_6_html.getValue());
    editor_6_html.getSession().on('change', function(e) {
      $scope.bindHtml6 = $sce.trustAsHtml(editor_6_html.getValue());
      return $scope.$apply();
    });
    editor_6_css = ace.edit('editor-slide-6-css');
    editor_6_css.setTheme("ace/theme/monokai");
    editor_6_css.getSession().setMode("ace/mode/css");
    editor_6_css.setValue('#file-style {\n\
  opacity: 0;\n\
  width: 0;\n\
  height: 0;\n\
  display: none;\n\
}\n\
.btn {\n\
  background: #00aaff;\n\
  padding: 10px;\n\
  border: solid #0088ff;\n\
}\n\
.btn:hover {\n\
  background: #ff8800;\n\
}\n\
.btn:active {\n\
  background: #0088ff;\n\
  padding: 10px;\n\
  border: solid #00aaff;\n\
}\n\
input[type="checkbox"] {\n\
  position: absolute;\n\
  z-index: 1;\n\
  opacity: 0;\n\
  width: 40px;\n\
  height: 20px;\n\
}\n\
.check {\n\
  position: relative;\n\
  z-index: 0;\n\
  text-align: center;\n\
}\n\
input[type="checkbox"]+.check:after {\n\
  content: "OFF";\n\
  display: inline-block;\n\
  background: #ddd;\n\
  width: 40px;\n\
  height: 20px;\n\
}\n\
input[type="checkbox"]:checked+.check:after {\n\
  content: "ON";\n\
  display: inline-block;\n\
  background: #df002f;\n\
  width: 40px;\n\
  height: 20px;\n\
}\n\
input[type="radio"] {\n\
  position: absolute;\n\
  z-index: 1;\n\
  opacity: 0;\n\
  width: 40px;\n\
  height: 20px;\n\
}\n\
input[type="radio"]+.check:after {\n\
  content: "";\n\
  display: inline-block;\n\
  background: #ddd;\n\
  width: 20px;\n\
  height: 20px;\n\
  border-radius: 10px;\n\
}\n\
input[type="radio"]:checked+.check:after {\n\
  content: "";\n\
  display: inline-block;\n\
  background: #df002f;\n\
  width: 20px;\n\
  height: 20px;\n\
  border-radius: 10px;\n\
}\n\n');
    $scope.bindCss6 = $sce.trustAsHtml(editor_6_css.getValue());
    return editor_6_css.getSession().on('change', function(e) {
      $scope.bindCss6 = $sce.trustAsHtml(editor_6_css.getValue());
      return $scope.$apply();
    });
  }
]);

$(document).ready(function() {
  var resize, titleHeight;

  titleHeight = 45 + 80 + 16;
  resize = function() {
    var editorHeight;

    editorHeight = $(window).height() - titleHeight;
    $('.editor-wrapper').css('height', editorHeight + 'px');
    $('.view-wrapper').css('height', editorHeight + 'px');
    return $('.editor').css('height', editorHeight / 2 + 'px');
  };
  resize();
  return $(window).on('resize', function() {
    console.log('resize...');
    return resize();
  });
});
