function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet> </router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat-dialog/chat-dialog.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat-dialog/chat-dialog.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatChatDialogChatDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container col-4 float-right\">\r\n  <div class=\"card\" id=\"card\">\r\n    <div class=\"card-header\">\r\n      <h2>Chat</h2>\r\n    </div>\r\n    <div class=\"card-body\" id=\"card-body\">\r\n      <ng-container *ngFor=\"let message of messages | async\">\r\n        <div *ngIf=\"message.sentBy === 'bot' && message.content.length === 18; else elseBlock\" class=\"alert\">\r\n        <span>\r\n        <button class=\"btn-outline-success\" ng-click=\"showVideo\">Videos</button>\r\n        <button class=\"btn-outline-success\" ng-click=\"showLink\">Links</button>\r\n          </span>\r\n          <div ng-show=\"showVideo\">\r\n            <div class=\"media position-relative border-dark\">\r\n              <img src='../../../assets/image.png' class=\"col-4\">\r\n              <div class=\"media-body border-dark\">\r\n                <h4 class=\"mt-0\">{{message.content[1]}}</h4>\r\n                <p>{{message.content[2]}}</p>\r\n                <a href={{message.content[0]}} target=\"_blank\" class=\"stretched-link\">{{message.content[0]}}</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"media position-relative border-info\">\r\n              <img src='../../../assets/image.png' class=\"col-4\">\r\n              <div class=\"media-body border-info\">\r\n                <h4 class=\"mt-0\">{{message.content[4]}}</h4>\r\n                <p>{{message.content[5]}}</p>\r\n                <a href={{message.content[3]}} target=\"_blank\" class=\"stretched-link\">{{message.content[3]}}</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"media position-relative border-secondary\">\r\n              <img src='../../../assets/image.png' class=\"col-4\">\r\n              <div class=\"media-body border-secondary\">\r\n                <h4 class=\"mt-0\">{{message.content[7]}}</h4>\r\n                <p>{{message.content[8]}}</p>\r\n                <a href={{message.content[6]}} target=\"_blank\" class=\"stretched-link\">{{message.content[6]}}</a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div ng-show=\"showVideo\">\r\n            <div class=\"card card2\"  style=\"width: 343px;\">\r\n              <iframe width=\"343\" height=\"190\" [src]=\"sanitizeVideo(message.content[9])\" allowfullscreen></iframe>\r\n              <div class=\"card-body card-body2\">\r\n                <h5 class=\"card-title\">{{message.content[12]}}</h5>\r\n                <p class=\"card-text\">{{message.content[15]}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"card card2\"  style=\"width: 343px;\">\r\n              <iframe width=\"343\" height=\"190\" [src]=\"sanitizeVideo(message.content[10])\" allowfullscreen></iframe>\r\n              <div class=\"card-body card-body2\">\r\n                <h5 class=\"card-title\">{{message.content[13]}}</h5>\r\n                <p class=\"card-text\">{{message.content[16]}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"card card2\" style=\"width: 343px;\">\r\n              <iframe width=\"343\" height=\"190\" [src]=\"sanitizeVideo(message.content[11])\" allowfullscreen></iframe>\r\n              <div class=\"card-body card-body2\">\r\n                <h5 class=\"card-title\">{{message.content[14]}}</h5>\r\n                <p class=\"card-text\">{{message.content[17]}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #elseBlock>\r\n          <div class=\"alert\" id=\"element\" [ngClass]=\"{ 'from': message.sentBy === 'bot',\r\n                                      'to': message.sentBy === 'user' }\">\r\n            {{message.content}}\r\n          </div>\r\n        </ng-template>\r\n      </ng-container>\r\n    </div>\r\n    <input type=\"text\" placeholder=\"your message here\" [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\">\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"wrapper\">\r\n        <!-- Sidebar  -->\r\n        <nav id=\"sidebar\" [class.menu-close]=\"isCollapsed\" [class.menu-close]=\"!isCollapsed\" >\r\n        \r\n            <div class=\"sidebar-header\"  >\r\n                Knowledgebot\r\n            </div>\r\n\r\n            <ul class=\"list-unstyled components\">\r\n                <li>\r\n                    <a href=\"/knowledgebot\">\r\n                        <i class=\"material-icons\">home</i>  \r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/tutorials\">\r\n                        <i class=\"material-icons\">school</i>                   \r\n                        Tutorials\r\n                    </a>\r\n                </li>\r\n                <li>                 \r\n                    <a href=\"/installations\">\r\n                        <i class=\"material-icons\">file_download</i>\r\n                         Installations\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/playground\">\r\n                        <i class=\"material-icons\">desktop_mac</i> \r\n                        PlayGround\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/ide\">\r\n                        <i class=\"material-icons\">library_add</i>\r\n                        IDE Installations\r\n                    </a>\r\n                </li>                \r\n            </ul>\r\n        </nav>\r\n\r\n        <!-- Page Content  -->\r\n        <div id=\"content\">\r\n        <div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" >\r\n                <div class=\"container-fluid\">\r\n\r\n        <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\"  (click)=toggle()>\r\n          <i class=\"material-icons\">menu</i>\r\n        </button>\r\n      </div>\r\n    </nav>\r\n    <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"card card-flip h-100\">\r\n          <div class=\"card-front\" class=\"img\" style=\"background-image: url(assets/images/lightening.jpg)\">\r\n            <div class=\"card-body\">\r\n              <i class=\"fa fa-search fa-5x float-right\"></i>\r\n              <h1 class=\"card-title\"> <b>Knowledge Bot</b></h1>\r\n              <h1 class=\"card-text\">Exciting to know about me ???</h1>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-back bg-white\">\r\n            <div class=\"card-body\">\r\n              <h2 class=\"card-title\">Knowledge Bot</h2>\r\n              <h3 class=\"card-text\">Knowledge Bot is a texting application which helps to explore knowledge. Ask the bot anything, anytime, it gives the response based on your interest. \r\n                This application is feasible to all and accessible everywhere. It is smarter, more responsive, and more useful :)\r\n              </h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"card card-flip h-100\">\r\n          <div class=\"card-front\" class=\"img\" style=\"background-image: url(assets/images/installations.jpg)\">\r\n            <div class=\"card-body\">\r\n              <i class=\"fa fa-search fa-5x float-right\"></i>\r\n              <h1 class=\"card-title\">Tutorials</h1>\r\n              <h1 class=\"card-text\"> Excited to know about me??? </h1>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-back bg-white\">\r\n            <div class=\"card-body\">\r\n              <h2 class=\"card-title\">Back</h2>\r\n              <h3>If you start learning to code, start with a tutorial. It’s a quick way to get up-to-speed with a new concept where you will get theoritical knowledge.\r\n                each tutorial is a solved problem, First learn than implement :)   </h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"card card-flip h-100\">\r\n          <div class=\"card-front\" class=\"img\" style=\"background-image: url(assets/images/software.jpg)\">\r\n            <div class=\"card-body\">\r\n              <i class=\"fa fa-search fa-5x float-right\"></i>\r\n              <h1 class=\"card-title\">Software & IDE Installations</h1>\r\n              <h1 class=\"card-text\">Exciting to know about me ???</h1>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-back bg-white\">\r\n            <div class=\"card-body\">\r\n              <br>\r\n              <br>\r\n              <h2 class=\"card-title\">Software & IDE Installations</h2>\r\n              <h3 class=\"card-text\">Here you can find the best way to install software. View Software Installations and IDE installations for step by step procedur :)</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n        <div class=\"card card-flip h-100\">\r\n          <div class=\"card-front\" class=\"img\" style=\"background-image: url(assets/images/tutorials.jpg)\">\r\n            <div class=\"card-body\">\r\n              <i class=\"fa fa-search fa-5x float-right\"></i>\r\n              <h1 class=\"card-title\">PlayGrounds</h1>\r\n              <h1 class=\"card-text\">Exciting to know about me ???</h1>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-back bg-white\">\r\n            <div class=\"card-body\">\r\n              <br>\r\n              \r\n              <h2 class=\"card-title\">Playgrounds</h2>\r\n              <h3 class=\"card-text\"> Playgrounds are a great way to learn coding, these helps you to implement your theoritical knowledge practically. Start applying what you’ve learned:)  </h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n                \r\n\r\n      \r\n                </div>                \r\n         </div> \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<!--Main Navigation-->\r\n<header class=\"intro-header\">\r\n <div class=\"view jarallax\" data-jarallax='{\"speed\": 0.2}' style=\"background-image: url(https://www.elsetge.cat/myimg/f/205-2059093_white-petaled-flower-book-tulips-coffee-hd-wallpaper.jpg);\">\r\n    <div class=\"full-bg-img mask rgba-black-light\">\r\n      <div class=title>\r\n      <h1 class=\"pink-text\"><i class=\"fas fa-chalkboard-teacher\"></i> <b> Knowledge Bot </b></h1>\r\n      </div>\r\n  <!--Intro Section-->\r\n  <section class=\"view intro-2\">\r\n    <div class=\"full-bg-img mask rgba-gradient\">\r\n      <div class=\"container flex-center\">\r\n        <div class=\"d-flex align-items-center content-height w-100\">\r\n          <div class=\"row flex-center pt-5 mt-3 w-100\">\r\n            <div class=\"col-md-6 text-center text-md-left mb-5\">\r\n              <div class=\"white-text\">\r\n                <h2 class=\"h2\" data-wow-delay=\"0.3s\"> Sign in right\r\n                  now! <br> <br>\r\n              \r\n                  Ask me anything, anytime. I'm here to help you :)  </h2>\r\n               \r\n                   \r\n              </div>\r\n            </div>\r\n            <div class=\"container col-6\">\r\n              <!--Form-->\r\n              <mdb-card class=\"wow fadeInRight\" data-wow-delay=\"0.3s\">\r\n                <mdb-card-body>\r\n                  <!--Header-->\r\n                  <div class=\"text-center\">\r\n                    <h2 class=\"white-text\">\r\n                      <mdb-icon fas icon=\"user\" class=\"text-white\"></mdb-icon> Login</h2>\r\n                    <hr class=\"hr-light\">\r\n                  </div>\r\n                  <!--Body-->\r\n                  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                  <div class=\"md-form\">\r\n                    \r\n                    <i class=\"fas fa-envelope prefix white-text active\"></i>\r\n                    <input type=\"text\"  id=\"form3\" formControlName=\"email\" class=\"form-control\" [(ngModel)]=\"emailid\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" class=\"text-white form-control\" mdbInput>\r\n                    <label for=\"form3\" class=\"text-white\">Email</label>\r\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                      <div *ngIf=\"f.email.errors.email\"> Email must be a valid email address </div>\r\n                  </div>\r\n                  </div>\r\n\r\n                \r\n                  <div class=\"md-form\">\r\n                    <i class=\"fas fa-lock prefix white-text active\"></i>\r\n                    <input type=\"password\"  id=\"form2\" formControlName=\"password\" [(ngModel)]=\"password\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" class=\"text-white form-control\" mdbInput>\r\n                    <label for=\"form2\" class=\"text-white\">Password</label>\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                      <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                  </div>\r\n                  </div>\r\n                      <div class=\"text-center mt-4\">\r\n                      <button mdbBtn color=\"blue\" (click)=\"login()\" mdbWavesEffect>Login</button>\r\n                    </div>\r\n\r\n\r\n                  <div class=\"text-center mt-4 white-text\">\r\n                  <h3>Don't have an account?<a routerLink='/register'>Create an account</a></h3>\r\n                 <h3>Click <a routerLink='/main'>here</a> to go back to the main menu </h3>\r\n                 <div *ngIf=\"loginattempted && showerrmsg\" style=\"color: red\"> Invalid Email or Password!</div>\r\n               </div>\r\n                </form>\r\n                </mdb-card-body>\r\n              </mdb-card>\r\n              <!--/.Form-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n  </div>\r\n</header>\r\n<!--Main Navigation-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Main Navigation-->\r\n<header class=\"intro-header\">\r\n  <!-- Intro Section -->\r\n <div class=\"view jarallax\" data-jarallax='{\"speed\": 0.2}' style=\"background-image: url(https://www.elsetge.cat/myimg/f/205-2059093_white-petaled-flower-book-tulips-coffee-hd-wallpaper.jpg);\">\r\n     <div class=\"full-bg-img mask rgba-black-light\">\r\n      <div class=\"container flex-center\">\r\n        <div class=\"row pt-5 mt-3 w-100\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"text-center\"> \r\n              <h2 class=\"pink-text\"><i class=\"fab fa-robot\"></i> <b> Knowledge Bot </b></h2>\r\n              <hr class=\"hr-light mt-4 wow fadeInDown\" data-wow-delay=\"0.4s\">\r\n              <h5 class=\"font-up mb-5 white-text wow fadeInDown\" data-wow-delay=\"0.4s\"><strong>\r\n                A platform to seamlessly seek Knowledge.<br> \r\n                <br>Unleash your growth with a conversation </strong></h5>\r\n                <button mdbBtn  type=\"button\" color=\"pink\" rounded=\"true\" [routerLink]=\"['/login']\" mdbWavesEffect>Sign in</button>\r\n                <button mdbBtn  type=\"button\" color=\"blue\" rounded=\"true\" [routerLink]=\"['/register']\" mdbWavesEffect>Sign up</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<!--Main Navigation-->\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/ide/ide.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/ide/ide.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavcomponentsIdeIdeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"wrapper\">\r\n        <!-- Sidebar  -->\r\n        <nav id=\"sidebar\" [class.menu-close]=\"isCollapsed\" [class.menu-close]=\"!isCollapsed\" >\r\n        \r\n            <div class=\"sidebar-header\"  >\r\n                Knowledgebot\r\n            </div>\r\n\r\n            <ul class=\"list-unstyled components\">\r\n                <li>\r\n                    <a href=\"/knowledgebot\">\r\n                        <i class=\"material-icons\">home</i>  \r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/tutorials\">\r\n                        <i class=\"material-icons\">school</i>                   \r\n                        Tutorials\r\n                    </a>\r\n                </li>\r\n                <li>                 \r\n                    <a href=\"/installations\">\r\n                        <i class=\"material-icons\">file_download</i>\r\n                         Installations\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/playground\">\r\n                        <i class=\"material-icons\">desktop_mac</i> \r\n                        PlayGround\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/ide\">\r\n                        <i class=\"material-icons\">library_add</i>\r\n                        IDE Installations\r\n                    </a>\r\n                </li>                \r\n            </ul>\r\n        </nav>\r\n\r\n        <!-- Page Content  -->\r\n        <div id=\"content\">\r\n        <div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" >\r\n                <div class=\"container-fluid\">\r\n\r\n                    <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\"  (click)=toggle()>\r\n                        <i class=\"material-icons\">menu</i>\r\n                    </button>\r\n                </div>\r\n            </nav>  \r\n        </div>\r\n        <div>\r\n <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\">\r\n                  <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.jetbrains.com/idea/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"IntelliJ IDEA\" src=\"assets/images/ij.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">IntelliJ IDEA</h4>\r\n                                    <div class=\"card-text\">\r\n                                    IntelliJ IDEA is an integrated development environment written in Java for developing computer software. It is developed by JetBrains, and is available as an Apache 2 Licensed community edition, and in a proprietary commercial edition. Both can be used for commercial development. \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.anaconda.com/products/individual\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Anaconda\" src=\"assets/images/anaconda.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Anaconda</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Anaconda is a Python distribution that is particularly popular for data analysis\r\nand scientific computing.Open source project developed by Continuum Analytics, Inc..Available for Windows, Mac OS X and LinuxIncludes many popular packages: NumPy, SciPy, Matplotlib, Pandas,\r\nIPython, Cython\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.jetbrains.com/webstorm/download/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"webstrom\" src=\"assets/images/ws.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">webstrom</h4>\r\n                                    <div class=\"card-text\">\r\n                                    WebStorm is a powerful IDE for modern JavaScript development. WebStorm provides full support for JavaScript, TypeScript, HTML, CSS as well as for frameworks such as React, Angular, and Vue.js right out of the box, no additional plugins are required.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://code.visualstudio.com/ \" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Visual studio code\" src=\"assets/images/vs.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Visual Studio Code</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes embedded Git and support for debugging, syntax highlighting, intelligent code completion, snippets, and code refactoring\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n          <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.eclipse.org/downloads/packages/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Eclipse\" src=\"assets/images/eclipse.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Eclipse</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Eclipse is an integrated development environment used in computer programming. It contains a base workspace and an extensible plug-in system for customizing the environment.\r\nEclipse is written mostly in Java and its primary use is for developing Java applications, but it may also be used to develop applications in other programming languages via plug-ins, including Ada, ABAP, C, C++, C#, Clojure, COBOL etc\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.jetbrains.com/pycharm/download/#section=windows\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"PyCharm\" src=\"assets/images/pycharm.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">PyCharm</h4>\r\n                                    <div class=\"card-text\">\r\n                                    PyCharm is an integrated development environment used in computer programming, specifically for the Python language. It provides code analysis, a graphical debugger, an integrated unit tester, integration with version control systems (VCSes), and supports web development with Django as well as Data Science with Anaconda\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n    </div>\r\n\r\n   <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n</div>\r\n \r\n    \r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/installations/installations.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/installations/installations.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavcomponentsInstallationsInstallationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"wrapper\">\r\n        <!-- Sidebar  -->\r\n        <nav id=\"sidebar\" [class.menu-close]=\"isCollapsed\" [class.menu-close]=\"!isCollapsed\" >\r\n            \r\n            <div class=\"sidebar-header\"  >\r\n                Knowledgebot\r\n            </div>\r\n\r\n            <ul class=\"list-unstyled components\">\r\n                <li>\r\n                    <a href=\"/knowledgebot\">\r\n                        <i class=\"material-icons\">home</i>  \r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/tutorials\">\r\n                        <i class=\"material-icons\">school</i>                   \r\n                        Tutorials\r\n                    </a>\r\n                </li>\r\n                <li>                 \r\n                    <a href=\"/installations\">\r\n                        <i class=\"material-icons\">file_download</i>\r\n                         Installations\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/playground\">\r\n                        <i class=\"material-icons\">desktop_mac</i> \r\n                        PlayGround\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/ide\">\r\n                        <i class=\"material-icons\">library_add</i>\r\n                        IDE Installations\r\n                    </a>\r\n                </li>                \r\n            </ul>\r\n        </nav>\r\n\r\n        <!-- Page Content  -->\r\n        <div id=\"content\">\r\n        <div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" >\r\n                <div class=\"container-fluid\">\r\n\r\n                    <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\"  (click)=toggle()>\r\n                        <i class=\"material-icons\">menu</i>\r\n                    </button>\r\n                </div>\r\n            </nav>  \r\n        </div>\r\n        <div>\r\n <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\">\r\n              <div>\r\n           <h2>Software Installations for Windows</h2>\r\n           </div>\r\n        <br>\r\n            <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://swiftforwindows.github.io/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Swift\" src=\"assets/images/Swift.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Swift</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.journaldev.com/7456/download-install-scala-linux-unix-windows#download-and-install-scala-on-windows\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Scala\" src=\"assets/images/Scala.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Scala</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Scala combines object-oriented and functional programming in one concise, high-level language. Scala's static types help avoid bugs in complex applications, and its JVM and JavaScript runtimes let you build high-performance systems with easy access to huge ecosystems of libraries\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://golang.org/dl/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Go\" src=\"assets/images/go.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Go</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Go language is a programming language initially developed at Google in the year 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It is a statically-typed language having syntax similar to that of C. It provides garbage collection, type safety, dynamic-typing capability, many advanced built-in types such as variable length arrays and key-value maps. \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.python.org/downloads/windows/ \" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Python\" src=\"assets/images/python.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Python</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Python is a cross-platform programming language, which means that it can run on multiple platforms like Windows, macOS, Linux, and has even been ported to the Java and .NET virtual machines. It is free and open-source.\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n                 <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://guide.elm-lang.org/install/elm.html\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Elm\" src=\"assets/images/elm.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Elm</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Elm is a functional language that compiles to JavaScript. It helps you make websites and web apps. It has a strong emphasis on simplicity and quality tooling.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://rubyinstaller.org/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Ruby\" src=\"assets/images/ruby.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Ruby</h4>\r\n                                    <div class=\"card-text\">\r\n                                    A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://medium.com/@randerson112358/how-to-install-the-c-programming-language-on-windows-c9813f1c5abb\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"C\" src=\"assets/images/c.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">C</h4>\r\n                                    <div class=\"card-text\">\r\n                                    C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div> \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://unity3d.com/get-unity/download\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Unity\" src=\"assets/images/unity.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Unity</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Unity is programmed using c#. All development is done using your choice of C#, Boo, or a dialect of JavaScript. Boo is a CLI language with very similar syntax to Python; it is, however, statically typed and has a few other differences\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div> \r\n            </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.shadercat.com/setting-up-a-rust-development-environment-on-windows-10/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Rust\" src=\"assets/images/rust.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Rust</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Rust is a new open-source systems programming language created by Mozilla and a community of volunteers, designed to help developers create fast, secure applications which take full advantage of the powerful features of modern multi-core processors. It prevents segmentation faults and guarantees thread safety, all with an easy-to-learn syntax.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://java.com/en/download/help/windows_manual_download.xml\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Java\" src=\"assets/images/java.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Java</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Java is a powerful general-purpose programming language. It is used to develop desktop and mobile applications, big data processing, embedded systems, and so on. According to Oracle, the company that owns Java, Java runs on 3 billion devices worldwide, which makes Java one of the most popular programming languages.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n                <div>\r\n           <h2>Software Installations for Mac</h2>\r\n           </div>\r\n           <br>\r\n            <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://swift.org/download/#using-downloads\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Swift\" src=\"assets/images/Swift.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Swift</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.scala-lang.org/download/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Scala\" src=\"assets/images/Scala.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Scala</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Scala combines object-oriented and functional programming in one concise, high-level language. Scala's static types help avoid bugs in complex applications, and its JVM and JavaScript runtimes let you build high-performance systems with easy access to huge ecosystems of libraries\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://golang.org/dl/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Go\" src=\"assets/images/go.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Go</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Go language is a programming language initially developed at Google in the year 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It is a statically-typed language having syntax similar to that of C. It provides garbage collection, type safety, dynamic-typing capability, many advanced built-in types such as variable length arrays and key-value maps. \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.python.org/downloads/mac-osx/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Python\" src=\"assets/images/python.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Python</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Python is a cross-platform programming language, which means that it can run on multiple platforms like Windows, macOS, Linux, and has even been ported to the Java and .NET virtual machines. It is free and open-source.\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n                  <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://guide.elm-lang.org/install/elm.html\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Elm\" src=\"assets/images/elm.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Elm</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Elm is a functional language that compiles to JavaScript. It helps you make websites and web apps. It has a strong emphasis on simplicity and quality tooling.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://stackify.com/install-ruby-on-your-mac-everything-you-need-to-get-going/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Ruby\" src=\"assets/images/ruby.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Ruby</h4>\r\n                                    <div class=\"card-text\">\r\n                                    A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://unity3d.com/get-unity/download\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Unity\" src=\"assets/images/unity.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Unity</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Unity is programmed using c#. All development is done using your choice of C#, Boo, or a dialect of JavaScript. Boo is a CLI language with very similar syntax to Python; it is, however, statically typed and has a few other differences\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.cs.auckland.ac.nz/~paul/C/Mac/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"C\" src=\"assets/images/c.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">C</h4>\r\n                                    <div class=\"card-text\">\r\n                                    C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n            <br>\r\n            <br>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n      <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://sourabhbajaj.com/mac-setup/Rust/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Rust\" src=\"assets/images/rust.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Rust</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Rust is a new open-source systems programming language created by Mozilla and a community of volunteers, designed to help developers create fast, secure applications which take full advantage of the powerful features of modern multi-core processors. It prevents segmentation faults and guarantees thread safety, all with an easy-to-learn syntax.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://java.com/en/download/help/mac_install.xml\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Java\" src=\"assets/images/java.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Java</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Java is a powerful general-purpose programming language. It is used to develop desktop and mobile applications, big data processing, embedded systems, and so on. According to Oracle, the company that owns Java, Java runs on 3 billion devices worldwide, which makes Java one of the most popular programming languages.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n                   <div>\r\n           <h2>Software Installations for Linux</h2>\r\n           </div>\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://itsfoss.com/use-swift-linux/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Swift\" src=\"assets/images/Swift.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Swift</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.journaldev.com/7456/download-install-scala-linux-unix-windows#download-and-install-scala-on-linux-systems\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Scala\" src=\"assets/images/Scala.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Scala</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Scala combines object-oriented and functional programming in one concise, high-level language. Scala's static types help avoid bugs in complex applications, and its JVM and JavaScript runtimes let you build high-performance systems with easy access to huge ecosystems of libraries\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://golang.org/dl/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Go\" src=\"assets/images/go.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Go</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Go language is a programming language initially developed at Google in the year 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It is a statically-typed language having syntax similar to that of C. It provides garbage collection, type safety, dynamic-typing capability, many advanced built-in types such as variable length arrays and key-value maps. \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.python.org/downloads/source/ \" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Python\" src=\"assets/images/python.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Python</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Python is a cross-platform programming language, which means that it can run on multiple platforms like Windows, macOS, Linux, and has even been ported to the Java and .NET virtual machines. It is free and open-source.\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n      <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://guide.elm-lang.org/install/elm.html\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Elm\" src=\"assets/images/elm.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Elm</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Elm is a functional language that compiles to JavaScript. It helps you make websites and web apps. It has a strong emphasis on simplicity and quality tooling.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.thoughtco.com/instal-ruby-on-linux-2908370\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Ruby\" src=\"assets/images/ruby.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Ruby</h4>\r\n                                    <div class=\"card-text\">\r\n                                    A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://unity3d.com/get-unity/download\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Unity\" src=\"assets/images/unity.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Unity</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Unity is programmed using c#. All development is done using your choice of C#, Boo, or a dialect of JavaScript. Boo is a CLI language with very similar syntax to Python; it is, however, statically typed and has a few other differences\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://data-flair.training/blogs/install-c-on-linux/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"C\" src=\"assets/images/c.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">C</h4>\r\n                                    <div class=\"card-text\">\r\n                                    C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n      <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.techrepublic.com/article/how-to-install-rust-on-linux/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Rust\" src=\"assets/images/rust.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Rust</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Rust is a new open-source systems programming language created by Mozilla and a community of volunteers, designed to help developers create fast, secure applications which take full advantage of the powerful features of modern multi-core processors. It prevents segmentation faults and guarantees thread safety, all with an easy-to-learn syntax.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://java.com/en/download/help/linux_install.xml\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Java\" src=\"assets/images/java.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Java</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Java is a powerful general-purpose programming language. It is used to develop desktop and mobile applications, big data processing, embedded systems, and so on. According to Oracle, the company that owns Java, Java runs on 3 billion devices worldwide, which makes Java one of the most popular programming languages.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n</div>\r\n \r\n    \r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/playground/playground.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/playground/playground.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavcomponentsPlaygroundPlaygroundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"wrapper\">\r\n        <!-- Sidebar  -->\r\n        <nav id=\"sidebar\" [class.menu-close]=\"isCollapsed\" [class.menu-close]=\"!isCollapsed\" >\r\n        \r\n            <div class=\"sidebar-header\"  >\r\n                Knowledgebot\r\n            </div>\r\n\r\n            <ul class=\"list-unstyled components\">\r\n                <li>\r\n                    <a href=\"/knowledgebot\">\r\n                        <i class=\"material-icons\">home</i>  \r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/tutorials\">\r\n                        <i class=\"material-icons\">school</i>                   \r\n                        Tutorials\r\n                    </a>\r\n                </li>\r\n                <li>                 \r\n                    <a href=\"/installations\">\r\n                        <i class=\"material-icons\">file_download</i>\r\n                         Installations\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/playground\">\r\n                        <i class=\"material-icons\">desktop_mac</i> \r\n                        PlayGround\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/ide\">\r\n                        <i class=\"material-icons\">library_add</i>\r\n                        IDE Installations\r\n                    </a>\r\n                </li>                \r\n            </ul>\r\n        </nav>\r\n\r\n        <!-- Page Content  -->\r\n        <div id=\"content\">\r\n        <div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" >\r\n                <div class=\"container-fluid\">\r\n\r\n                    <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\"  (click)=toggle()>\r\n                        <i class=\"material-icons\">menu</i>\r\n                    </button>\r\n                </div>\r\n            </nav>  \r\n        </div>\r\n        <div>\r\n <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n\r\n    <div class=\"carousel-item active\">\r\n                  <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('http://online.swiftplayground.run/','swift',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Swift\" src=\"assets/images/Swift.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Swift</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://www.tutorialspoint.com/compile_scala_online.php','scala',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Scala\" src=\"assets/images/Scala.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Scala</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Scala combines object-oriented and functional programming in one concise, high-level language. Scala's static types help avoid bugs in complex applications, and its JVM and JavaScript runtimes let you build high-performance systems with easy access to huge ecosystems of libraries\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://play.golang.org/','go',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Go\" src=\"assets/images/go.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Go</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Go language is a programming language initially developed at Google in the year 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It is a statically-typed language having syntax similar to that of C. It provides garbage collection, type safety, dynamic-typing capability, many advanced built-in types such as variable length arrays and key-value maps. \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://www.katacoda.com/courses/python/playground','python',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Python\" src=\"assets/images/python.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Python</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Python is a cross-platform programming language, which means that it can run on multiple platforms like Windows, macOS, Linux, and has even been ported to the Java and .NET virtual machines. It is free and open-source.\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n                  <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://elm-lang.org/try','Elm',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Elm\" src=\"assets/images/elm.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Elm</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Elm is a functional language that compiles to JavaScript. It helps you make websites and web apps. It has a strong emphasis on simplicity and quality tooling.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://repl.it/languages/ruby','Ruby',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Ruby\" src=\"assets/images/ruby.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Ruby</h4>\r\n                                    <div class=\"card-text\">\r\n                                    A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://www.onlinegdb.com/online_c_compiler','C',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"C\" src=\"assets/images/c.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">C</h4>\r\n                                    <div class=\"card-text\">\r\n                                    C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://www.tutorialspoint.com/compile_java_online.php','Java',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Java\" src=\"assets/images/java.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Java</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Java is a powerful general-purpose programming language. It is used to develop desktop and mobile applications, big data processing, embedded systems, and so on. According to Oracle, the company that owns Java, Java runs on 3 billion devices worldwide, which makes Java one of the most popular programming languages.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n            <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('http://www.writephponline.com/','PHP',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"PHP\" src=\"assets/images/php.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">PHP</h4>\r\n                                    <div class=\"card-text\">\r\n                                    PHP is a popular general-purpose scripting language that is especially suited to web development.Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://dotnetfiddle.net/Xds08j','Asp',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"ASP.NET\" src=\"assets/images/asp.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">ASP.NET</h4>\r\n                                    <div class=\"card-text\">\r\n                                    ASP.NET is a web application framework developed and marketed by Microsoft to allow programmers to build dynamic web sites. It allows you to use a full featured programming language such as C# or VB.NET to build web applications easily.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://repl.it/languages/nodejs','Node.js',500,700,500,500)\">\r\n                                            <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"NodeJS\" src=\"assets/images/node-js.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Node JS</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming. Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license. It is proficient with internet fundamentals such as HTTP, DNS, TCP.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://js.do/','Java Script',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"JavaScript\" src=\"assets/images/js.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Java Script</h4>\r\n                                    <div class=\"card-text\">\r\n                                    JavaScript was initially created to “make web pages alive”.The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n                  <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://codesandbox.io/s/new','ReactJs',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"React JS\" src=\"assets/images/reactjs.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">React JS</h4>\r\n                                    <div class=\"card-text\">\r\n                                    React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applicationsReact is a declarative, efficient, and flexible JavaScript library for building user interfaces. \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://codesandbox.io/s/angular','AngularJs',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"AnGular JS\" src=\"assets/images/angular.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Angular JS</h4>\r\n                                    <div class=\"card-text\">\r\n                                    AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://vuejs.org/v2/examples/','vuejs',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Vue JS\" src=\"assets/images/vue.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Vue JS</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Vue is a JavaScript framework for building user interfaces. Its core part is focused mainly on the view layer and it is very easy to understand. \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://code.sololearn.com/WoNr8gIeKYDr/#html','HTML',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"HTML\" src=\"assets/images/html.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">HTML</h4>\r\n                                    <div class=\"card-text\">\r\n                                    HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n            <br>\r\n            <br>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n                  <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://jsfiddle.net/','CSS',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"CSS\" src=\"assets/images/ccs.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">CSS</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://www.codeply.com/','Bootstrap',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Bootstrap\" src=\"assets/images/bootstrap.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Bootstrap</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://paiza.io/en/projects/new?language=mysql','MYSQL',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"MY SQL\" src=\"assets/images/mysql.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">MY SQL</h4>\r\n                                    <div class=\"card-text\">\r\n                                    MySQL is the most popular Open Source Relational SQL Database Management System.MySQL is one of the best RDBMS being used for developing various web-based softwareapplications. MySQL is developed, marketed and supported by MySQL AB, which is a Swedish company.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"/playground\" (click)=\"playground('https://pgexercises.com/questions/basic/selectall.html','POSTGRESQL',500,700,500,500)\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"PostgreSQL\" src=\"assets/images/post.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">PostgreSQL</h4>\r\n                                    <div class=\"card-text\">\r\n                                    PostgreSQL is an enterprise-class open source database management system. It supports both SQL for relational and JSON for non-relational queries. It is backed by an experienced community of developers who have made tremendous contribution to make it highly reliable DBMS system\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n \r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n</div>\r\n \r\n    \r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/tutorials/tutorials.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/tutorials/tutorials.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavcomponentsTutorialsTutorialsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"wrapper\">\r\n        <!-- Sidebar  -->\r\n        <nav id=\"sidebar\" [class.menu-close]=\"isCollapsed\" [class.menu-close]=\"!isCollapsed\" >\r\n        \r\n            <div class=\"sidebar-header\"  >\r\n                Knowledgebot\r\n            </div>\r\n            \r\n            <ul class=\"list-unstyled components\">\r\n                <li>\r\n                    <a href=\"/knowledgebot\">\r\n                        <i class=\"material-icons\">home</i>  \r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/tutorials\">\r\n                        <i class=\"material-icons\">school</i>                   \r\n                        Tutorials\r\n                    </a>\r\n                </li>\r\n                <li>                 \r\n                    <a href=\"/installations\">\r\n                        <i class=\"material-icons\">file_download</i>\r\n                         Installations\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/playground\">\r\n                        <i class=\"material-icons\">desktop_mac</i> \r\n                        PlayGround\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"/ide\">\r\n                        <i class=\"material-icons\">library_add</i>\r\n                        IDE Installations\r\n                    </a>\r\n                </li>                \r\n            </ul>\r\n        </nav>\r\n\r\n        <!-- Page Content  -->\r\n        <div id=\"content\">\r\n        <div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" >\r\n                <div class=\"container-fluid\">\r\n\r\n                    <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\"  (click)=toggle()>\r\n                        <i class=\"material-icons\">menu</i>\r\n                    </button>\r\n                </div>\r\n            </nav>  \r\n        </div>\r\n        <div>\r\n <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\">\r\n                  <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://developer.apple.com/swift\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Swift\" src=\"assets/images/Swift.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Swift</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.scala-lang.org/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Scala\" src=\"assets/images/Scala.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Scala</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Scala combines object-oriented and functional programming in one concise, high-level language. Scala's static types help avoid bugs in complex applications, and its JVM and JavaScript runtimes let you build high-performance systems with easy access to huge ecosystems of libraries\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://golang.org/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Go\" src=\"assets/images/go.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Go</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Go language is a programming language initially developed at Google in the year 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It is a statically-typed language having syntax similar to that of C. It provides garbage collection, type safety, dynamic-typing capability, many advanced built-in types such as variable length arrays and key-value maps. \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.python.org \" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Python\" src=\"assets/images/python.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Python</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Python is a cross-platform programming language, which means that it can run on multiple platforms like Windows, macOS, Linux, and has even been ported to the Java and .NET virtual machines. It is free and open-source.\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n                  <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://elm-lang.org/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Elm\" src=\"assets/images/elm.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Elm</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Elm is a functional language that compiles to JavaScript. It helps you make websites and web apps. It has a strong emphasis on simplicity and quality tooling.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.ruby-lang.org/en/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Ruby\" src=\"assets/images/ruby.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Ruby</h4>\r\n                                    <div class=\"card-text\">\r\n                                    A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.geeksforgeeks.org/c-plus-plus/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"C++\" src=\"assets/images/cplus.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">C++</h4>\r\n                                    <div class=\"card-text\">\r\n                                    C++ is a general purpose programming language and widely used now a days for competitive programming. It has imperative, object-oriented and generic programming features. C++ runs on lots of platform like Windows, Linux, Unix, Mac etc.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.cprogramming.com/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"C\" src=\"assets/images/c.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">C</h4>\r\n                                    <div class=\"card-text\">\r\n                                    C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n                  <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.rust-lang.org/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Rust\" src=\"assets/images/rust.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Rust</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Rust is a new open-source systems programming language created by Mozilla and a community of volunteers, designed to help developers create fast, secure applications which take full advantage of the powerful features of modern multi-core processors. It prevents segmentation faults and guarantees thread safety, all with an easy-to-learn syntax.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.lynda.com/learning-paths/Developer/become-a-java-programmer\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Java\" src=\"assets/images/java.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Java</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Java is a powerful general-purpose programming language. It is used to develop desktop and mobile applications, big data processing, embedded systems, and so on. According to Oracle, the company that owns Java, Java runs on 3 billion devices worldwide, which makes Java one of the most popular programming languages.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://learn.unity.com/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Unity\" src=\"assets/images/unity.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Unity</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Unity is programmed using c#. All development is done using your choice of C#, Boo, or a dialect of JavaScript. Boo is a CLI language with very similar syntax to Python; it is, however, statically typed and has a few other differences\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://scikit-learn.org/stable/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Machine Learning\" src=\"assets/images/ml.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Machine Learning</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n                 <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.php.net/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"PHP\" src=\"assets/images/php.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">PHP</h4>\r\n                                    <div class=\"card-text\">\r\n                                    PHP is a popular general-purpose scripting language that is especially suited to web development.Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://dotnet.microsoft.com/apps/aspnet\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"ASP.NET\" src=\"assets/images/asp.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">ASP.NET</h4>\r\n                                    <div class=\"card-text\">\r\n                                    ASP.NET is a web application framework developed and marketed by Microsoft to allow programmers to build dynamic web sites. It allows you to use a full featured programming language such as C# or VB.NET to build web applications easily.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.w3schools.com/nodejs/default.asp\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"NodeJS\" src=\"assets/images/node-js.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Node JS</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming. Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license. It is proficient with internet fundamentals such as HTTP, DNS, TCP.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"JavaScript\" src=\"assets/images/js.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Java Script</h4>\r\n                                    <div class=\"card-text\">\r\n                                    JavaScript was initially created to “make web pages alive”.The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n                  <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://reactjs.org/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"React JS\" src=\"assets/images/reactjs.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">React JS</h4>\r\n                                    <div class=\"card-text\">\r\n                                    React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applicationsReact is a declarative, efficient, and flexible JavaScript library for building user interfaces. \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://angular.io/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"AnGular JS\" src=\"assets/images/angular.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Angular JS</h4>\r\n                                    <div class=\"card-text\">\r\n                                    AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://vuejs.org/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Vue JS\" src=\"assets/images/vue.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Vue JS</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Vue is a JavaScript framework for building user interfaces. Its core part is focused mainly on the view layer and it is very easy to understand. \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.w3schools.com/html/default.asp\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"HTML\" src=\"assets/images/html.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">HTML</h4>\r\n                                    <div class=\"card-text\">\r\n                                    HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n                  <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.w3schools.com/css/default.asp\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"CSS\" src=\"assets/images/ccs.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">CSS</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://getbootstrap.com\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Bootstrap\" src=\"assets/images/bootstrap.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Bootstrap</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">    \r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.mysql.com/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"MY SQL\" src=\"assets/images/mysql.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">MY SQL</h4>\r\n                                    <div class=\"card-text\">\r\n                                    MySQL is the most popular Open Source Relational SQL Database Management System.MySQL is one of the best RDBMS being used for developing various web-based softwareapplications. MySQL is developed, marketed and supported by MySQL AB, which is a Swedish company.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                    <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.postgresql.org\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"PostgreSQL\" src=\"assets/images/post.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">PostgreSQL</h4>\r\n                                    <div class=\"card-text\">\r\n                                    PostgreSQL is an enterprise-class open source database management system. It supports both SQL for relational and JSON for non-relational queries. It is backed by an experienced community of developers who have made tremendous contribution to make it highly reliable DBMS system\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>  \r\n            </div>\r\n    </div>\r\n       <div class=\"carousel-item\">\r\n            <div class=\"row\">\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.oracle.com/index.html\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"ORACLE\" src=\"assets/images/oracle.png\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">ORACLE</h4>\r\n                                    <div class=\"card-text\">\r\n                                    Oracle Database Architecture. An Oracle database is a collection of data treated as a unit. ... A database server is the key to solving the problems of information management. In general, a server reliably manages a large amount of data in a multiuser environment so that many users can concurrently access the same data.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class =\"col-md-6 col-sm-12\">\r\n                    <a href=\"https://www.mongodb.com/\" target=\"_new\">\r\n                        <div class=\"card card-shadow\"> \r\n                            <div class=\"card-body media\">\r\n                                <div class=\"imgg\">     \r\n                                    <img alt=\"Mongo DB\" src=\"assets/images/mongo.jpg\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Mongo DB</h4>\r\n                                    <div class=\"card-text\">\r\n                                    MongoDB : An introduction. MongoDB, the most popular NoSQL database, is an open-source document-oriented database. The term 'NoSQL' means 'non-relational'. It means that MongoDB isn't based on the table-like relational database structure but provides an altogether different mechanism for storage and retrieval of data.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <br>\r\n    </div>\r\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n</div>\r\n \r\n    \r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<!--Main Navigation-->\r\n<header class=\"intro-header\">\r\n\r\n\r\n  <div class=\"view jarallax\" data-jarallax='{\"speed\": 0.2}' style=\"background-image: url(https://www.elsetge.cat/myimg/f/205-2059093_white-petaled-flower-book-tulips-coffee-hd-wallpaper.jpg);\">\r\n    <div class=\"full-bg-img mask rgba-black-light\">\r\n\r\n      <div class=title>\r\n        <h1 class=\"pink-text\"><i class=\"fas fa-chalkboard-teacher\"></i> <b> Knowledge Bot </b></h1>\r\n        </div>\r\n\r\n  <!--Intro Section-->\r\n  <section class=\"view intro-2\">\r\n    <div class=\"full-bg-img mask rgba-gradient\">\r\n      <div class=\"container flex-center\">\r\n        <div class=\"d-flex align-items-center content-height w-100\">\r\n          <div class=\"row flex-center pt-8 mt-8 w-100\">\r\n            <div class=\"col-md-6 text-center text-md-left mb-40\">\r\n              <div class=\"white-text\">\r\n                <h4 class=\"h1\" data-wow-delay=\"0.3s\"> \"Everything is theoretically impossible until it is done\". \r\n                  <br>\r\n                Sign up quickly to gain the knowledge in a better way :)  </h4>\r\n               \r\n                   \r\n              </div>\r\n            </div>\r\n            <div class=\"container col-6\">\r\n              <!--Form-->\r\n              <mdb-card class=\"wow fadeInRight\" data-wow-delay=\"0.3s\">\r\n                <mdb-card-body>\r\n                  <!--Header-->\r\n                  <div class=\"text-center\">\r\n                    <h2 class=\"white-text\">\r\n                      <mdb-icon fas icon=\"user\" class=\"text-white\"></mdb-icon> Regiter</h2>\r\n                    <hr class=\"hr-light\">\r\n                  </div>\r\n                  <!--Body-->\r\n                  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                  <div class=\"md-form\">\r\n                    \r\n                    <i class=\"fas fa-envelope prefix white-text active\"></i>\r\n                    <input type=\"text\"  id=\"form3\" formControlName=\"email\" class=\"form-control\" [(ngModel)]=\"emailId\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" class=\"text-white form-control\" mdbInput>\r\n                    <label for=\"form3\" class=\"text-white\">Email</label>\r\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                      <div *ngIf=\"f.email.errors.email\"> Email must be a valid email address </div>\r\n                  </div>\r\n                  </div>\r\n               \r\n                  \r\n                \r\n                  <div class=\"md-form\">\r\n                    <i class=\"fas fa-lock prefix white-text active\"></i>\r\n                    <input type=\"password\"  id=\"form2\" formControlName=\"password\" [(ngModel)]=\"password\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" class=\"text-white form-control\" mdbInput>\r\n                    <label for=\"form2\" class=\"text-white\">Password</label>\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                      <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                  </div>\r\n                  </div>\r\n\r\n                  \r\n<div class=\"md-form\">\r\n  <i class=\"fas fa-lock prefix white-text active\"></i>\r\n  <input type=\"password\" id=\"form4\" formControlName=\"confirmPassword\" [(ngModel)]=\"repeatpassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" class=\"text-white form-control\" mdbInput>\r\n  <label for=\"form4\" class=\"text-white\">Confrim password</label>\r\n  <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n    <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n</div>\r\n</div>\r\n\r\n                  <div class=\"text-center mt-4\">\r\n                    <button mdbBtn color=\"blue\" mdbWavesEffect>Sign Up</button>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"text-center mt-4 white-text\">\r\n                    <h3>Click <a routerLink='/main'>here</a> to go back to the main menu </h3>\r\n                 </div>\r\n\r\n                </form>\r\n                </mdb-card-body>\r\n              </mdb-card>\r\n              <!--/.Form-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n  </div>\r\n</header>\r\n<!--Main Navigation-->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _navcomponents_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navcomponents/tutorials/tutorials.component */
    "./src/app/navcomponents/tutorials/tutorials.component.ts");
    /* harmony import */


    var _navcomponents_installations_installations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./navcomponents/installations/installations.component */
    "./src/app/navcomponents/installations/installations.component.ts");
    /* harmony import */


    var _navcomponents_playground_playground_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navcomponents/playground/playground.component */
    "./src/app/navcomponents/playground/playground.component.ts");
    /* harmony import */


    var _navcomponents_ide_ide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./navcomponents/ide/ide.component */
    "./src/app/navcomponents/ide/ide.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    }, {
      path: 'main',
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'knowledgebot',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: 'tutorials',
      component: _navcomponents_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_7__["TutorialsComponent"]
    }, {
      path: 'installations',
      component: _navcomponents_installations_installations_component__WEBPACK_IMPORTED_MODULE_8__["InstallationsComponent"]
    }, {
      path: 'playground',
      component: _navcomponents_playground_playground_component__WEBPACK_IMPORTED_MODULE_9__["PlaygroundComponent"]
    }, {
      path: 'ide',
      component: _navcomponents_ide_ide_component__WEBPACK_IMPORTED_MODULE_10__["IdeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // @ts-ignore


    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'KnowledgeBot';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _chat_chat_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chat/chat.module */
    "./src/app/chat/chat.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _angular_material_extensions_link_preview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular-material-extensions/link-preview */
    "./node_modules/@angular-material-extensions/link-preview/esm2015/link-preview.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_link_preview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-link-preview */
    "./node_modules/ngx-link-preview/fesm2015/ngx-link-preview.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ngx_wow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-wow */
    "./node_modules/ngx-wow/esm2015/ngx-wow.js");
    /* harmony import */


    var _navcomponents_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./navcomponents/tutorials/tutorials.component */
    "./src/app/navcomponents/tutorials/tutorials.component.ts");
    /* harmony import */


    var _navcomponents_installations_installations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./navcomponents/installations/installations.component */
    "./src/app/navcomponents/installations/installations.component.ts");
    /* harmony import */


    var _navcomponents_playground_playground_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./navcomponents/playground/playground.component */
    "./src/app/navcomponents/playground/playground.component.ts");
    /* harmony import */


    var _navcomponents_ide_ide_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./navcomponents/ide/ide.component */
    "./src/app/navcomponents/ide/ide.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"], _navcomponents_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_17__["TutorialsComponent"], _navcomponents_installations_installations_component__WEBPACK_IMPORTED_MODULE_18__["InstallationsComponent"], _navcomponents_playground_playground_component__WEBPACK_IMPORTED_MODULE_19__["PlaygroundComponent"], _navcomponents_ide_ide_component__WEBPACK_IMPORTED_MODULE_20__["IdeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _chat_chat_module__WEBPACK_IMPORTED_MODULE_8__["ChatModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_extensions_link_preview__WEBPACK_IMPORTED_MODULE_12__["MatLinkPreviewModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], ngx_link_preview__WEBPACK_IMPORTED_MODULE_14__["NgxLinkPreviewModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_16__["NgwWowModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"].forRoot()],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chat/chat-dialog/chat-dialog.component.css":
  /*!************************************************************!*\
    !*** ./src/app/chat/chat-dialog/chat-dialog.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatChatDialogChatDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".from{\r\n  background-color: #c7eafc;\r\n  border-radius: 5px;\r\n  padding-top: 2%;\r\n  font-style: italic;\r\n  font-size: 16px;\r\n  margin-right: 16%;\r\n  -webkit-animation: fade 1s linear;\r\n          animation: fade 1s linear;\r\n}\r\n\r\n.to{\r\n  padding-top: 2%;\r\n  background-color: #ffe6cb;\r\n  text-align: right;\r\n  margin-left: 16%;\r\n  border-radius: 5px;\r\n  font-style: italic;\r\n  font-size: 16px;\r\n  opacity: 1;\r\n  -webkit-animation: fade 1s linear;\r\n          animation: fade 1s linear;\r\n}\r\n\r\n@-webkit-keyframes fade {\r\n  0%, 50% { opacity: 0; }\r\n}\r\n\r\n@keyframes fade {\r\n  0%, 50% { opacity: 0; }\r\n}\r\n\r\n.card-header{\r\n  background-color: skyblue;\r\n  font-weight: bold;\r\n  font-size: larger;\r\n}\r\n\r\n#card-body{\r\n  /*background-image: linear-gradient(skyblue, white);*/\r\n  height: 490px;\r\n  overflow: auto;\r\n}\r\n\r\n#card{\r\n  border: 2px solid #888;\r\n  position: fixed;\r\n  bottom: 0%;\r\n  width: 49%;\r\n  right: 2%;\r\n}\r\n\r\ninput {\r\n  padding: 1em;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\nbutton{\r\n  border-radius: 3px;\r\n  margin: 10px;\r\n}\r\n\r\nimg{\r\n  width: 300px;\r\n  height: 109px;\r\n}\r\n\r\n.media-body{\r\n}\r\n\r\n.card2{\r\n  background-color: tomato;\r\n}\r\n\r\n.card-body2{\r\n  background-color: #c7eafc;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LWRpYWxvZy9jaGF0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVUsVUFBVSxFQUFFO0FBQ3hCOztBQUZBO0VBQ0UsVUFBVSxVQUFVLEVBQUU7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBR0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQtZGlhbG9nL2NoYXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJvbXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdlYWZjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE2JTtcclxuICBhbmltYXRpb246IGZhZGUgMXMgbGluZWFyO1xyXG59XHJcblxyXG4udG97XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU2Y2I7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2JTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGFuaW1hdGlvbjogZmFkZSAxcyBsaW5lYXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgMCUsIDUwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5cclxuLmNhcmQtaGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbiNjYXJkLWJvZHl7XHJcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoc2t5Ymx1ZSwgd2hpdGUpOyovXHJcbiAgaGVpZ2h0OiA0OTBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI2NhcmR7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzg4ODtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwJTtcclxuICB3aWR0aDogNDklO1xyXG4gIHJpZ2h0OiAyJTtcclxufVxyXG5cclxuXHJcbmlucHV0IHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMTA5cHg7XHJcbn1cclxuXHJcbi5tZWRpYS1ib2R5e1xyXG59XHJcblxyXG4uY2FyZDJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5MntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdlYWZjO1xyXG59XHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/chat/chat-dialog/chat-dialog.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/chat/chat-dialog/chat-dialog.component.ts ***!
    \***********************************************************/

  /*! exports provided: ChatDialogComponent */

  /***/
  function srcAppChatChatDialogChatDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatDialogComponent", function () {
      return ChatDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../chat.service */
    "./src/app/chat/chat.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ChatDialogComponent =
    /*#__PURE__*/
    function () {
      function ChatDialogComponent(chat, sanitizer) {
        _classCallCheck(this, ChatDialogComponent);

        this.chat = chat;
        this.sanitizer = sanitizer;
        this.showVideos = false;
        this.showLinks = false;
      }

      _createClass(ChatDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.messages = this.chat.conversation.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc, val) {
            return acc.concat(val);
          }));
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          this.chat.converse(this.formValue);
          var topPos = document.querySelector('#card-body').scrollHeight;
          this.formValue = '';
          document.getElementById('card-body').scrollTop = topPos;
        }
      }, {
        key: "sanitizeVideo",
        value: function sanitizeVideo(val) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(val);
        }
      }, {
        key: "showVideo",
        value: function showVideo() {
          this.showVideos = true;
        }
      }, {
        key: "showLink",
        value: function showLink() {
          this.showLinks = true;
        }
      }]);

      return ChatDialogComponent;
    }();

    ChatDialogComponent.ctorParameters = function () {
      return [{
        type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    ChatDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat-dialog/chat-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-dialog.component.css */
      "./src/app/chat/chat-dialog/chat-dialog.component.css")).default]
    })], ChatDialogComponent);
    /***/
  },

  /***/
  "./src/app/chat/chat.module.ts":
  /*!*************************************!*\
    !*** ./src/app/chat/chat.module.ts ***!
    \*************************************/

  /*! exports provided: ChatModule */

  /***/
  function srcAppChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatModule", function () {
      return ChatModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chat.service */
    "./src/app/chat/chat.service.ts");
    /* harmony import */


    var _chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-dialog/chat-dialog.component */
    "./src/app/chat/chat-dialog/chat-dialog.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_link_preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-link-preview */
    "./node_modules/ngx-link-preview/fesm2015/ngx-link-preview.js");

    var ChatModule = function ChatModule() {
      _classCallCheck(this, ChatModule);
    };

    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ChatDialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], ngx_link_preview__WEBPACK_IMPORTED_MODULE_7__["NgxLinkPreviewModule"]],
      exports: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ChatDialogComponent"]],
      providers: [_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]]
    })], ChatModule);
    /***/
  },

  /***/
  "./src/app/chat/chat.service.ts":
  /*!**************************************!*\
    !*** ./src/app/chat/chat.service.ts ***!
    \**************************************/

  /*! exports provided: Message, ChatService */

  /***/
  function srcAppChatChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! api-ai-javascript/es6/ApiAiClient */
    "./node_modules/api-ai-javascript/es6/ApiAiClient.js");

    var Message = function Message(content, sentBy) {
      _classCallCheck(this, Message);

      this.content = content;
      this.sentBy = sentBy;
    };

    Message.ctorParameters = function () {
      return [{
        type: String
      }, {
        type: String
      }];
    };

    Message = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], Message);

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService() {
        _classCallCheck(this, ChatService);

        this.token = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dialogflow.knowledgeBot;
        this.client = new api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_4__["ApiAiClient"]({
          accessToken: this.token
        });
        this.conversation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
      }

      _createClass(ChatService, [{
        key: "update",
        value: function update(msg) {
          this.conversation.next([msg]);
        }
      }, {
        key: "converse",
        value: function converse(msg) {
          var _this = this;

          var userMessage = new Message(msg, 'user');
          this.update(userMessage);
          return this.client.textRequest(msg).then(function (res) {
            var speech = res.result.fulfillment.speech;
            var links = res.result.fulfillment;

            if (speech.includes('https')) {
              speech = speech.split('^'); // speech = res.result.fulfillment.messages;
              // for (let i = 0; i < 12; i++) {
              //   const val = speech[i];
              //   if (speech[i].includes('youtube')) {
              //     speech[i] = this.sanitizeVideo(val);
              //   }
              // }
            }

            var botMessage = new Message(speech, 'bot');
            console.log(botMessage);

            _this.update(botMessage);
          });
        }
      }, {
        key: "sanitizeVideo",
        value: function sanitizeVideo(val) {
          console.log(val); // return this.sanitizer.bypassSecurityTrustResourceUrl(val);
        }
      }]);

      return ChatService;
    }();
    /***/

  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white);\r\n}\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: white;\r\n}\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n.wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n}\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    background-color: rgb(77, 15, 51);\r\n    color: white;\r\n    font-size: 2;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n}\r\n#sidebar.menu-close {\r\n    min-width: 70px;\r\n    max-width: 70px;\r\n    text-align: center;\r\n    font-size: .8em;\r\n}\r\n#sidebar.menu-open {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    text-align: center;\r\n    font-size: x-large;\r\n}\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n}\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n}\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n#sidebar ul li a:hover {\r\n    color: white;\r\n    background-color: black;\r\n}\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #df4b5f;\r\n}\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white)\r\n}\r\n.navbar {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white)\r\n}\r\n/* --------------------------------------------------------------------------------------------\r\n    CARD style\r\n-------------------------------------------------------------------------------------------- */\r\n.card-flip>div {\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-transition: -webkit-transform 300ms;\r\n  transition: -webkit-transform 300ms;\r\n  transition: transform 300ms;\r\n  transition: transform 300ms, -webkit-transform 300ms;\r\n  -webkit-transition-timing-function: linear;\r\n          transition-timing-function: linear;\r\n  height: 200px;\r\n  width: fixed;\r\n  margin: 0;\r\n  width: 400px;\r\n padding: 2px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n.card-front {\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n  max-width: 400px;\r\n  width: fixed;\r\n}\r\n.card-back {\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  position: absolute;\r\n  width: 400px;\r\n  width: fixed;\r\n  \r\n  top: 0;\r\n}\r\n.card-flip:hover .card-front {\r\n  -webkit-transform: rotateY(-180deg);\r\n          transform: rotateY(-180deg);\r\n\r\n}\r\n.card-flip:hover .card-back {\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n\r\n}\r\n.sidebar-header{\r\n    font-size: 30px;\r\n    font-family:  Akzidenz;\r\n    color: white;\r\n}\r\nh1{\r\n  font-family: Akzidenz;\r\n  font-size: 20px;\r\n  color:white;\r\n  font-style: italic;\r\n}\r\nh2{\r\n  font-family: Akzidenz;\r\n  font-size: 25px;\r\n  color: #6d7fcc;\r\n  font-style: italic;\r\n}\r\nh3{\r\n  font-family: Akzidenz;\r\n  font-size: 20px;\r\n  color: palevioletred;\r\n  font-style: italic;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFO0FBQzdFO0lBQ0ksa0NBQWtDO0lBQ2xDLGtGQUF3QztJQUF4Qyx3Q0FBd0M7QUFDNUM7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBRUE7OztJQUdJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsNEJBQW9CO0lBQXBCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7QUFDOUM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjtBQUVBOztJQUVJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsMEJBQW9CO1lBQXBCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixrRkFBdUM7SUFBdkM7QUFDSjtBQUVBO0lBQ0ksa0ZBQXVDO0lBQXZDO0FBQ0o7QUFHQTs7OEZBRThGO0FBRTlGO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiwyQ0FBMkI7RUFBM0IsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUEzQixvREFBMkI7RUFDM0IsMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxZQUFZO0NBQ2IsWUFBWTtFQUNYLG9CQUFhO0VBQWIsYUFBYTtBQUNmO0FBRUE7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFHQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZOztFQUVaLE1BQU07QUFDUjtBQUVBO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjs7QUFFN0I7QUFFQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7O0FBRTFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChwaW5rLCB3aGl0ZSk7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ubmF2YmFyLWJ0biB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbmksXHJcbnNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCAxNSwgNTEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4jc2lkZWJhci5tZW51LWNsb3NlIHtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgIG1heC13aWR0aDogNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxufVxyXG5cclxuI3NpZGViYXIubWVudS1vcGVuIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYSBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXHJcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGY0YjVmO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnVsLkNUQXMgYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChwaW5rLCB3aGl0ZSlcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocGluaywgd2hpdGUpXHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgQ0FSRCBzdHlsZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLmNhcmQtZmxpcD5kaXYge1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiBmaXhlZDtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gcGFkZGluZzogMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkLWZyb250IHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogZml4ZWQ7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1iYWNrIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiBmaXhlZDtcclxuICBcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5jYXJkLWZsaXA6aG92ZXIgLmNhcmQtZnJvbnQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuXHJcbn1cclxuXHJcbi5jYXJkLWZsaXA6aG92ZXIgLmNhcmQtYmFjayB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG5cclxufVxyXG4uc2lkZWJhci1oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogIEFremlkZW56O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMXtcclxuICBmb250LWZhbWlseTogQWt6aWRlbno7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuaDJ7XHJcbiAgZm9udC1mYW1pbHk6IEFremlkZW56O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzZkN2ZjYztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuaDN7XHJcbiAgZm9udC1mYW1pbHk6IEFremlkZW56O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogcGFsZXZpb2xldHJlZDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _chat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../chat/chat.service */
    "./src/app/chat/chat.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router, chat, sanitizer) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.chat = chat;
        this.sanitizer = sanitizer;
        this.loadComponent = false;
        this.isCollapsed = true;
      }

      _createClass(HomeComponent, [{
        key: "openChatBot",
        value: function openChatBot() {
          this.loadComponent = true; // this.router.navigate(['/chat'])
          //   .then(success => console.log('navigation success?' , success))
          //   .catch(console.error);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.messages = this.chat.conversation.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(function (acc, val) {
            return acc.concat(val);
          }));
          console.log("messages", this.messages);

          (function (d, m) {
            var kommunicateSettings = {
              appId: "a03a89bc14545341201d4fa72fab7eca",
              popupWidget: true,
              automaticChatOpenOnNavigation: true
            };
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://api.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
        }
      }, {
        key: "sanitizeVideo",
        value: function sanitizeVideo(value) {
          console.log("value", value);
          return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isCollapsed = !this.isCollapsed;
          console.log(this.isCollapsed);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".intro-header {\r\n  height: unset !important;\r\n}\r\n\r\n\r\n.view {\r\n  height: 750px;\r\n  width: 1550px;\r\n  background-position: top;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n\r\n.title{\r\n  font-family: Akzidenz;\r\n  font-size: 20px;\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\r\n  margin-top: 50px;\r\nmargin-left: 20px;\r\n}\r\n\r\n\r\n.container{\r\n  margin-bottom: 250px;\r\n}\r\n\r\n\r\n.h2{\r\n\r\n  font-size: 25px;\r\n  color: white;\r\n  margin-bottom: 250px;\r\n}\r\n\r\n\r\nh1{\r\n\r\nletter-spacing: 1px;\r\nfont-size: 40px;\r\nfont-family: Akzidenz;\r\n-webkit-animation: text 3s linear;\r\n        animation: text 3s linear;\r\n\r\n}\r\n\r\n\r\n@-webkit-keyframes text {\r\n  0%{\r\n    color: blueviolet;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n  }\r\n}\r\n\r\n\r\n@keyframes text {\r\n  0%{\r\n    color: blueviolet;\r\n  }\r\n  30%{\r\n    letter-spacing: 25px;\r\n  }\r\n  85%{\r\n    letter-spacing: 8px;\r\n  }\r\n}\r\n\r\n\r\n.navbar:not(.top-nav-collapse) {\r\n  background: transparent !important;\r\n}\r\n\r\n\r\n.rgba-gradient .full-bg-img {\r\n  background: linear-gradient(45deg, rgba(83, 125, 210, 0.4), rgba(178, 30, 123, 0.4) 100%);\r\n}\r\n\r\n\r\n.card {\r\n  background-color: rgba(235, 220, 154, 0.068);\r\n  text-align: left;\r\n\r\n  \r\n}\r\n\r\n\r\n.text-center{\r\n   font-size: 15px;\r\n  font-family: Akzidenz;\r\n}\r\n\r\n\r\nbutton{\r\n  border-radius: 12px;\r\n  font-size: 12px;\r\n  font-family: Akzidenz;\r\n  \r\n}\r\n\r\n\r\n.md-form {\r\n  font-size: 20px;\r\n  font-family: Akzidenz;\r\n  \r\n}\r\n\r\n\r\n.md-form label {\r\n\r\n  font-size: 19px;\r\n  font-family: Akzidenz;\r\n  color: rgb(135, 151, 222);\r\n \r\n}\r\n\r\n\r\n.md-form i {\r\n  margin-top: 18px;\r\n color: blue;\r\n\r\n}\r\n\r\n\r\n.md-form input {\r\n\r\n  font-size: 17px;\r\n  font-family: Akzidenz;\r\n}\r\n\r\n\r\nh6 {\r\n  line-height: 1.7;\r\n}\r\n\r\n\r\n@media (max-width: 740px) {\r\n  .full-height,\r\n  .full-height body,\r\n  .full-height header,\r\n  .full-height header .view {\r\n    height: 1040px;\r\n  }\r\n}\r\n\r\n\r\n.hr-light {\r\n  width: 500px;\r\n  margin-left: 20;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEIsaUJBQWlCO0FBQ2pCOzs7QUFHQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBR0E7O0VBRUUsZUFBZTtFQUNmLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7OztBQUVBOztBQUVBLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YscUJBQXFCO0FBQ3JCLGlDQUF5QjtRQUF6Qix5QkFBeUI7O0FBRXpCOzs7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOzs7QUFWQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7O0FBR0E7RUFDRSx5RkFBeUY7QUFDM0Y7OztBQUdBO0VBQ0UsNENBQTRDO0VBQzVDLGdCQUFnQjs7O0FBR2xCOzs7QUFFQTtHQUNHLGVBQWU7RUFDaEIscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCOztBQUV2Qjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCOztBQUV2Qjs7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix5QkFBeUI7O0FBRTNCOzs7QUFFQTtFQUNFLGdCQUFnQjtDQUNqQixXQUFXOztBQUVaOzs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRTs7OztJQUlFLGNBQWM7RUFDaEI7QUFDRjs7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8taGVhZGVyIHtcclxuICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4udmlldyB7XHJcbiAgaGVpZ2h0OiA3NTBweDtcclxuICB3aWR0aDogMTU1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBmb250LWZhbWlseTogQWt6aWRlbno7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5tYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjUwcHg7XHJcbn0gXHJcblxyXG5cclxuLmgye1xyXG5cclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xyXG59XHJcblxyXG5oMXtcclxuXHJcbmxldHRlci1zcGFjaW5nOiAxcHg7XHJcbmZvbnQtc2l6ZTogNDBweDtcclxuZm9udC1mYW1pbHk6IEFremlkZW56O1xyXG5hbmltYXRpb246IHRleHQgM3MgbGluZWFyO1xyXG5cclxufVxyXG5Aa2V5ZnJhbWVzIHRleHQge1xyXG4gIDAle1xyXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgfVxyXG4gIDMwJXtcclxuICAgIGxldHRlci1zcGFjaW5nOiAyNXB4O1xyXG4gIH1cclxuICA4NSV7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnJnYmEtZ3JhZGllbnQgLmZ1bGwtYmctaW1nIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoODMsIDEyNSwgMjEwLCAwLjQpLCByZ2JhKDE3OCwgMzAsIDEyMywgMC40KSAxMDAlKTtcclxufVxyXG5cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgMjIwLCAxNTQsIDAuMDY4KTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICBcclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IEFremlkZW56O1xyXG59IFxyXG5cclxuYnV0dG9ue1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBa3ppZGVuejtcclxuICBcclxufSBcclxuXHJcbi5tZC1mb3JtIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFremlkZW56O1xyXG4gIFxyXG59XHJcblxyXG4ubWQtZm9ybSBsYWJlbCB7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBmb250LWZhbWlseTogQWt6aWRlbno7XHJcbiAgY29sb3I6IHJnYigxMzUsIDE1MSwgMjIyKTtcclxuIFxyXG59XHJcblxyXG4ubWQtZm9ybSBpIHtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gY29sb3I6IGJsdWU7XHJcblxyXG59XHJcblxyXG4ubWQtZm9ybSBpbnB1dCB7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LWZhbWlseTogQWt6aWRlbno7XHJcbn1cclxuXHJcbmg2IHtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gIC5mdWxsLWhlaWdodCxcclxuICAuZnVsbC1oZWlnaHQgYm9keSxcclxuICAuZnVsbC1oZWlnaHQgaGVhZGVyLFxyXG4gIC5mdWxsLWhlaWdodCBoZWFkZXIgLnZpZXcge1xyXG4gICAgaGVpZ2h0OiAxMDQwcHg7XHJcbiAgfVxyXG59XHJcbi5oci1saWdodCB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var apiUrl = '/api';

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, http, router) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.submitted = false;
        this.password = '';
        this.showerrmsg = false;
        this.loginattempted = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // stop here if form is invalid

          if (this.registerForm.invalid) {
            return;
          } // display form values on success


          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.submitted = false;
          this.registerForm.reset();
        }
      }, {
        key: "login",
        value: function login() {
          this.loginattempted = true;
          var userInfo = {
            emailId: this.emailid,
            password: this.password
          };
          this.getUser(userInfo);
        }
      }, {
        key: "getUser",
        value: function getUser(userInfo) {
          var _this2 = this;

          this.http.post('/api/login', userInfo).subscribe(function (data) {
            console.log('login data : ', data);

            _this2.router.navigateByUrl('/knowledgebot');
          }, function (err) {
            console.log(err);
            console.log(err.status);

            if (err.status !== 201) {
              _this2.showerrmsg = true;
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/main/main.component.css":
  /*!*****************************************!*\
    !*** ./src/app/main/main.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button{\r\n  border-radius: 12px;\r\n  font-size: 15px;\r\n  font-family: Akzidenz;\r\n}\r\n\r\n.view {\r\n  height: 750px;\r\n  width: 1550px;\r\n  background-position: top;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.h1\r\n{\r\n  color: blanchedalmond;\r\n}\r\n\r\n.navbar:not(.top-nav-collapse) {\r\n  background: transparent !important;\r\n}\r\n\r\n.carousel-item {\r\n  background-image: url(\"http://mdbootstrap.com/images/regular/people/img%20(83).jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\nh2 {\r\n  letter-spacing: 1px;\r\n  font-size: 40px;\r\n  font-family: Akzidenz;\r\n  \r\n}\r\n\r\nh5 {\r\n  letter-spacing: 1px;\r\n  font-size: 25px;\r\n  font-family: Akzidenz;\r\n  \r\n}\r\n\r\n.hr-light {\r\n  width: 400px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0ZBQW9GO0VBQ3BGLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUdBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7O0FBRXZCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7O0FBRXZCOztBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IEFremlkZW56O1xyXG59XHJcblxyXG4udmlldyB7XHJcbiAgaGVpZ2h0OiA3NTBweDtcclxuICB3aWR0aDogMTU1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5oMVxyXG57XHJcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG59XHJcbi5uYXZiYXI6bm90KC50b3AtbmF2LWNvbGxhcHNlKSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly9tZGJvb3RzdHJhcC5jb20vaW1hZ2VzL3JlZ3VsYXIvcGVvcGxlL2ltZyUyMCg4MykuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5oMiB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFremlkZW56O1xyXG4gIFxyXG59XHJcbmg1IHtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LWZhbWlseTogQWt6aWRlbno7XHJcbiAgXHJcbn1cclxuLmhyLWxpZ2h0IHtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);

        this.name = '';
        this.timeInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.subjectInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.locationInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.descriptionInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"], {
      static: false
    })], MainComponent.prototype, "modal", void 0);
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.css */
      "./src/app/main/main.component.css")).default]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/navcomponents/ide/ide.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/navcomponents/ide/ide.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavcomponentsIdeIdeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white);\r\n}\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: white;\r\n}\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    background-color: rgb(77, 15, 51);\r\n    color: white;\r\n    font-size: 2;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n}\r\n.sidebar-header{\r\n    font-size: 30px;\r\n    font-family:  Akzidenz;\r\n    color: white;\r\n}\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n.wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n}\r\n#sidebar.menu-close {\r\n    min-width: 70px;\r\n    max-width: 70px;\r\n    text-align: center;\r\n    font-size: .8em;\r\n}\r\n#sidebar.menu-open {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    text-align: center;\r\n    font-size: x-large;\r\n}\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n}\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n}\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n#sidebar ul li a:hover {\r\n    color: white;\r\n    background-color: black;\r\n}\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #df4b5f;\r\n}\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white)\r\n}\r\n.navbar {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white)\r\n}\r\n.imgg {\r\n    height: 90px;\r\n    width: 90px;\r\n    padding-top: 10px;\r\n    padding-right: 5px;\r\n}\r\n.card {\r\n    height: 200px;\r\n    width: 450px;\r\n    border-radius: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: small;\r\n}\r\n.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n    height: 20px;\r\n    width: 20px;\r\n    outline: black;\r\n    background-color: black;\r\n    background-size: 100%, 100%;\r\n    border-radius: 50%;\r\n    border: 1px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2Y29tcG9uZW50cy9pZGUvaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFO0FBQzdFO0lBQ0ksa0NBQWtDO0lBQ2xDLGtGQUF3QztJQUF4Qyx3Q0FBd0M7QUFDNUM7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5QztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCO0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiwwQkFBb0I7WUFBcEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7O0lBRUksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGtGQUF1QztJQUF2QztBQUNKO0FBRUE7SUFDSSxrRkFBdUM7SUFBdkM7QUFDSjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsZ0JBQWdCO0FBQ3BCO0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbmF2Y29tcG9uZW50cy9pZGUvaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMFwiO1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocGluaywgd2hpdGUpO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3NpZGViYXIge1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDE1LCA1MSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuLnNpZGViYXItaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICBBa3ppZGVuejtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYSxcclxuYTpob3ZlcixcclxuYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm5hdmJhci1idG4ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG59XHJcblxyXG5pLFxyXG5zcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4jc2lkZWJhci5tZW51LWNsb3NlIHtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgIG1heC13aWR0aDogNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxufVxyXG5cclxuI3NpZGViYXIubWVudS1vcGVuIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYSBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXHJcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGY0YjVmO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnVsLkNUQXMgYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChwaW5rLCB3aGl0ZSlcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocGluaywgd2hpdGUpXHJcbn1cclxuXHJcbi5pbWdnIHtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG91dGxpbmU6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUsIDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/navcomponents/ide/ide.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navcomponents/ide/ide.component.ts ***!
    \****************************************************/

  /*! exports provided: IdeComponent */

  /***/
  function srcAppNavcomponentsIdeIdeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdeComponent", function () {
      return IdeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../chat/chat.service */
    "./src/app/chat/chat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var IdeComponent =
    /*#__PURE__*/
    function () {
      function IdeComponent(router, chat, sanitizer) {
        _classCallCheck(this, IdeComponent);

        this.router = router;
        this.chat = chat;
        this.sanitizer = sanitizer;
        this.loadComponent = false;
        this.isCollapsed = true;
      }

      _createClass(IdeComponent, [{
        key: "openChatBot",
        value: function openChatBot() {
          this.loadComponent = true; // this.router.navigate(['/chat'])
          //   .then(success => console.log('navigation success?' , success))
          //   .catch(console.error);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.messages = this.chat.conversation.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (acc, val) {
            return acc.concat(val);
          }));
          console.log("messages", this.messages);

          (function (d, m) {
            var kommunicateSettings = {
              appId: "a03a89bc14545341201d4fa72fab7eca",
              popupWidget: true,
              automaticChatOpenOnNavigation: true
            };
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://api.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
        }
      }, {
        key: "sanitizeVideo",
        value: function sanitizeVideo(value) {
          console.log("value", value);
          return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isCollapsed = !this.isCollapsed;
          console.log(this.isCollapsed);
        }
      }]);

      return IdeComponent;
    }();

    IdeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    IdeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ide',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ide.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/ide/ide.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ide.component.css */
      "./src/app/navcomponents/ide/ide.component.css")).default]
    })], IdeComponent);
    /***/
  },

  /***/
  "./src/app/navcomponents/installations/installations.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/navcomponents/installations/installations.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavcomponentsInstallationsInstallationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white);\r\n}\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: white;\r\n}\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n.wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n}\r\n#sidebar.menu-close {\r\n    min-width: 70px;\r\n    max-width: 70px;\r\n    text-align: center;\r\n    font-size: .8em;\r\n}\r\n#sidebar.menu-open {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    text-align: center;\r\n    font-size: x-large;\r\n}\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n}\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n}\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n#sidebar ul li a:hover {\r\n    color: white;\r\n    background-color: black;\r\n}\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #df4b5f;\r\n}\r\n.sidebar-header{\r\n    font-size: 30px;\r\n    font-family:  Akzidenz;\r\n    color: white;\r\n}\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    background-color: rgb(77, 15, 51);\r\n    color: white;\r\n    font-size: 2;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n}\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white)\r\n}\r\n.navbar {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white)\r\n}\r\n.imgg {\r\n    height: 90px;\r\n    width: 90px;\r\n    padding-top: 10px;\r\n    padding-right: 5px;\r\n}\r\n.card {\r\n    height: 200px;\r\n    width: 450px;\r\n    border-radius: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: small;\r\n}\r\n.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n    height: 20px;\r\n    width: 20px;\r\n    outline: black;\r\n    background-color: black;\r\n    background-size: 100%, 100%;\r\n    border-radius: 50%;\r\n    border: 1px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2Y29tcG9uZW50cy9pbnN0YWxsYXRpb25zL2luc3RhbGxhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBNkU7QUFDN0U7SUFDSSxrQ0FBa0M7SUFDbEMsa0ZBQXdDO0lBQXhDLHdDQUF3QztBQUM1QztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5QztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCO0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiwwQkFBb0I7WUFBcEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7O0lBRUksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBR0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDRCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsa0ZBQXVDO0lBQXZDO0FBQ0o7QUFFQTtJQUNJLGtGQUF1QztJQUF2QztBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9uYXZjb21wb25lbnRzL2luc3RhbGxhdGlvbnMvaW5zdGFsbGF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDBcIjtcclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHBpbmssIHdoaXRlKTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmEsXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxufVxyXG5cclxuaSxcclxuc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuI3NpZGViYXIubWVudS1jbG9zZSB7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbn1cclxuXHJcbiNzaWRlYmFyLm1lbnUtb3BlbiB7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2RmNGI1ZjtcclxufVxyXG4uc2lkZWJhci1oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogIEFremlkZW56O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG51bCB1bCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYztcclxufVxyXG5cclxudWwuQ1RBcyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCAxNSwgNTEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHBpbmssIHdoaXRlKVxyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChwaW5rLCB3aGl0ZSlcclxufVxyXG5cclxuLmltZ2cge1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgb3V0bGluZTogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSwgMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navcomponents/installations/installations.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/navcomponents/installations/installations.component.ts ***!
    \************************************************************************/

  /*! exports provided: InstallationsComponent */

  /***/
  function srcAppNavcomponentsInstallationsInstallationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstallationsComponent", function () {
      return InstallationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../chat/chat.service */
    "./src/app/chat/chat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var InstallationsComponent =
    /*#__PURE__*/
    function () {
      function InstallationsComponent(router, chat, sanitizer) {
        _classCallCheck(this, InstallationsComponent);

        this.router = router;
        this.chat = chat;
        this.sanitizer = sanitizer;
        this.loadComponent = false;
        this.isCollapsed = true;
      }

      _createClass(InstallationsComponent, [{
        key: "openChatBot",
        value: function openChatBot() {
          this.loadComponent = true; // this.router.navigate(['/chat'])
          //   .then(success => console.log('navigation success?' , success))
          //   .catch(console.error);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.messages = this.chat.conversation.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (acc, val) {
            return acc.concat(val);
          }));
          console.log("messages", this.messages);

          (function (d, m) {
            var kommunicateSettings = {
              appId: "a03a89bc14545341201d4fa72fab7eca",
              popupWidget: true,
              automaticChatOpenOnNavigation: true
            };
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://api.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
        }
      }, {
        key: "sanitizeVideo",
        value: function sanitizeVideo(value) {
          console.log("value", value);
          return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isCollapsed = !this.isCollapsed;
          console.log(this.isCollapsed);
        }
      }]);

      return InstallationsComponent;
    }();

    InstallationsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    InstallationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-installations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./installations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/installations/installations.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./installations.component.css */
      "./src/app/navcomponents/installations/installations.component.css")).default]
    })], InstallationsComponent);
    /***/
  },

  /***/
  "./src/app/navcomponents/playground/playground.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/navcomponents/playground/playground.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavcomponentsPlaygroundPlaygroundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white);\r\n}\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: white;\r\n}\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n.wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n}\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    background-color: rgb(77, 15, 51);\r\n    color: white;\r\n    font-size: 2;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n}\r\n.sidebar-header{\r\n    font-size: 30px;\r\n    font-family:  Akzidenz;\r\n    color: white;\r\n}\r\n#sidebar.menu-close {\r\n    min-width: 70px;\r\n    max-width: 70px;\r\n    text-align: center;\r\n    font-size: .8em;\r\n}\r\n#sidebar.menu-open {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    text-align: center;\r\n    font-size: x-large;\r\n}\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n}\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n}\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n#sidebar ul li a:hover {\r\n    color: white;\r\n    background-color: black;\r\n}\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #df4b5f;\r\n}\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white)\r\n}\r\n.navbar {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white)\r\n}\r\n.imgg {\r\n    height: 90px;\r\n    width: 90px;\r\n    padding-top: 10px;\r\n    padding-right: 5px;\r\n}\r\n.card {\r\n    height: 200px;\r\n    width: 450px;\r\n    border-radius: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: small;\r\n}\r\n.container {\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    padding-top: 56.25%;\r\n    /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\r\n}\r\n/* Then style the iframe to fit in the container div with full height and width */\r\n.responsive-iframe {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 80%;\r\n}\r\n.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n    height: 20px;\r\n    width: 20px;\r\n    outline: black;\r\n    background-color: black;\r\n    background-size: 100%, 100%;\r\n    border-radius: 50%;\r\n    border: 1px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2Y29tcG9uZW50cy9wbGF5Z3JvdW5kL3BsYXlncm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBNkU7QUFDN0U7SUFDSSxrQ0FBa0M7SUFDbEMsa0ZBQXdDO0lBQXhDLHdDQUF3QztBQUM1QztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5QztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCO0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiwwQkFBb0I7WUFBcEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDRCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsa0ZBQXVDO0lBQXZDO0FBQ0o7QUFFQTtJQUNJLGtGQUF1QztJQUF2QztBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnREFBZ0Q7QUFDcEQ7QUFHQSxpRkFBaUY7QUFFakY7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9uYXZjb21wb25lbnRzL3BsYXlncm91bmQvcGxheWdyb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDBcIjtcclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHBpbmssIHdoaXRlKTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmEsXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxufVxyXG5cclxuaSxcclxuc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuI3NpZGViYXIge1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDE1LCA1MSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuLnNpZGViYXItaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICBBa3ppZGVuejtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3NpZGViYXIubWVudS1jbG9zZSB7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbn1cclxuXHJcbiNzaWRlYmFyLm1lbnUtb3BlbiB7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2RmNGI1ZjtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG51bCB1bCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYztcclxufVxyXG5cclxudWwuQ1RBcyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocGluaywgd2hpdGUpXHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHBpbmssIHdoaXRlKVxyXG59XHJcblxyXG4uaW1nZyB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNTYuMjUlO1xyXG4gICAgLyogMTY6OSBBc3BlY3QgUmF0aW8gKGRpdmlkZSA5IGJ5IDE2ID0gMC41NjI1KSAqL1xyXG59XHJcblxyXG5cclxuLyogVGhlbiBzdHlsZSB0aGUgaWZyYW1lIHRvIGZpdCBpbiB0aGUgY29udGFpbmVyIGRpdiB3aXRoIGZ1bGwgaGVpZ2h0IGFuZCB3aWR0aCAqL1xyXG5cclxuLnJlc3BvbnNpdmUtaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgb3V0bGluZTogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSwgMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navcomponents/playground/playground.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/navcomponents/playground/playground.component.ts ***!
    \******************************************************************/

  /*! exports provided: PlaygroundComponent */

  /***/
  function srcAppNavcomponentsPlaygroundPlaygroundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function () {
      return PlaygroundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../chat/chat.service */
    "./src/app/chat/chat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PlaygroundComponent =
    /*#__PURE__*/
    function () {
      function PlaygroundComponent(router, chat, sanitizer) {
        _classCallCheck(this, PlaygroundComponent);

        this.router = router;
        this.chat = chat;
        this.sanitizer = sanitizer;
        this.loadComponent = false;
        this.isCollapsed = true;
      }

      _createClass(PlaygroundComponent, [{
        key: "openChatBot",
        value: function openChatBot() {
          this.loadComponent = true; // this.router.navigate(['/chat'])
          //   .then(success => console.log('navigation success?' , success))
          //   .catch(console.error);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.messages = this.chat.conversation.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (acc, val) {
            return acc.concat(val);
          }));
          console.log("messages", this.messages);

          (function (d, m) {
            var kommunicateSettings = {
              appId: "a03a89bc14545341201d4fa72fab7eca",
              popupWidget: true,
              automaticChatOpenOnNavigation: true
            };
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://api.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
        }
      }, {
        key: "sanitizeVideo",
        value: function sanitizeVideo(value) {
          console.log("value", value);
          return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isCollapsed = !this.isCollapsed;
          console.log(this.isCollapsed);
        }
      }, {
        key: "playground",
        value: function playground(pageURL, pageTitle, popupWinWidth, popupWinHeight) {
          console.log('in play ground');
          var left = screen.width;
          var top = screen.height;
          var myWindow = window.open(pageURL, pageTitle, 'resizable=yes, width=' + popupWinWidth + ', height=' + popupWinHeight + ', top=' + top + ', left=' + left);
        }
      }]);

      return PlaygroundComponent;
    }();

    PlaygroundComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    PlaygroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-playground',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./playground.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/playground/playground.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./playground.component.css */
      "./src/app/navcomponents/playground/playground.component.css")).default]
    })], PlaygroundComponent);
    /***/
  },

  /***/
  "./src/app/navcomponents/tutorials/tutorials.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/navcomponents/tutorials/tutorials.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavcomponentsTutorialsTutorialsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white);\r\n}\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: white;\r\n}\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n.wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n}\r\n#sidebar.menu-close {\r\n    min-width: 70px;\r\n    max-width: 70px;\r\n    text-align: center;\r\n    font-size: .8em;\r\n}\r\n#sidebar.menu-open {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    text-align: center;\r\n    font-size: x-large;\r\n}\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n}\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n}\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n#sidebar ul li a:hover {\r\n    color: white;\r\n    background-color: black;\r\n}\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #df4b5f;\r\n}\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    background-color: rgb(77, 15, 51);\r\n    color: white;\r\n    font-size: 2;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n}\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white)\r\n}\r\n.navbar {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(pink), to(white));\r\n    background: linear-gradient(pink, white)\r\n}\r\n.imgg {\r\n    height: 90px;\r\n    width: 90px;\r\n    padding-top: 10px;\r\n    padding-right: 5px;\r\n}\r\n.sidebar-header{\r\n    font-size: 30px;\r\n    font-family:  Akzidenz;\r\n    color: white;\r\n}\r\n.card {\r\n    height: 200px;\r\n    width: 450px;\r\n    border-radius: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: small;\r\n}\r\n.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n    height: 20px;\r\n    width: 20px;\r\n    outline: black;\r\n    background-color: black;\r\n    background-size: 100%, 100%;\r\n    border-radius: 50%;\r\n    border: 1px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2Y29tcG9uZW50cy90dXRvcmlhbHMvdHV0b3JpYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFO0FBQzdFO0lBQ0ksa0NBQWtDO0lBQ2xDLGtGQUF3QztJQUF4Qyx3Q0FBd0M7QUFDNUM7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBRUE7OztJQUdJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsNEJBQW9CO0lBQXBCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7QUFDOUM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjtBQUVBOztJQUVJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsMEJBQW9CO1lBQXBCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixrRkFBdUM7SUFBdkM7QUFDSjtBQUVBO0lBQ0ksa0ZBQXVDO0lBQXZDO0FBQ0o7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsZ0JBQWdCO0FBQ3BCO0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbmF2Y29tcG9uZW50cy90dXRvcmlhbHMvdHV0b3JpYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMFwiO1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocGluaywgd2hpdGUpO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYSxcclxuYTpob3ZlcixcclxuYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm5hdmJhci1idG4ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG59XHJcblxyXG5pLFxyXG5zcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4jc2lkZWJhci5tZW51LWNsb3NlIHtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgIG1heC13aWR0aDogNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxufVxyXG5cclxuI3NpZGViYXIubWVudS1vcGVuIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG5cclxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYSBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXHJcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGY0YjVmO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbnVsIHVsIGEge1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG51bC5DVEFzIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnVsLkNUQXMgYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuI3NpZGViYXIge1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDE1LCA1MSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocGluaywgd2hpdGUpXHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHBpbmssIHdoaXRlKVxyXG59XHJcblxyXG4uaW1nZyB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbi5zaWRlYmFyLWhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAgQWt6aWRlbno7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLFxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBvdXRsaW5lOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlLCAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navcomponents/tutorials/tutorials.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/navcomponents/tutorials/tutorials.component.ts ***!
    \****************************************************************/

  /*! exports provided: TutorialsComponent */

  /***/
  function srcAppNavcomponentsTutorialsTutorialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialsComponent", function () {
      return TutorialsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../chat/chat.service */
    "./src/app/chat/chat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TutorialsComponent =
    /*#__PURE__*/
    function () {
      function TutorialsComponent(router, chat, sanitizer) {
        _classCallCheck(this, TutorialsComponent);

        this.router = router;
        this.chat = chat;
        this.sanitizer = sanitizer;
        this.loadComponent = false;
        this.isCollapsed = true;
      }

      _createClass(TutorialsComponent, [{
        key: "openChatBot",
        value: function openChatBot() {
          this.loadComponent = true; // this.router.navigate(['/chat'])
          //   .then(success => console.log('navigation success?' , success))
          //   .catch(console.error);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.messages = this.chat.conversation.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (acc, val) {
            return acc.concat(val);
          }));
          console.log("messages", this.messages);

          (function (d, m) {
            var kommunicateSettings = {
              appId: "a03a89bc14545341201d4fa72fab7eca",
              popupWidget: true,
              automaticChatOpenOnNavigation: true
            };
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://api.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
        }
      }, {
        key: "sanitizeVideo",
        value: function sanitizeVideo(value) {
          console.log("value", value);
          return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isCollapsed = !this.isCollapsed;
          console.log(this.isCollapsed);
        }
      }]);

      return TutorialsComponent;
    }();

    TutorialsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    TutorialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorials',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorials.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navcomponents/tutorials/tutorials.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorials.component.css */
      "./src/app/navcomponents/tutorials/tutorials.component.css")).default]
    })], TutorialsComponent);
    /***/
  },

  /***/
  "./src/app/register/helpers.ts":
  /*!*************************************!*\
    !*** ./src/app/register/helpers.ts ***!
    \*************************************/

  /*! exports provided: MustMatch */

  /***/
  function srcAppRegisterHelpersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".intro-header {\r\n  height: unset !important;\r\n}\r\n\r\n\r\n.view {\r\n  height: 750px;\r\n  width: 1550px;\r\n  background-position: top;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n\r\nh4{\r\n\r\n  font-size: 25px;\r\n  margin-bottom: 250px;\r\n\r\n}\r\n\r\n\r\n.title{\r\n  font-family: Akzidenz;\r\n  font-size: 20px;\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\r\n  margin-top: 50px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.container{\r\n  margin-bottom: 250px;\r\n}\r\n\r\n\r\nh1{\r\n\r\n  letter-spacing: 1px;\r\n  font-size: 40px;\r\n  font-family: Akzidenz;\r\n  -webkit-animation: text 3s linear;\r\n          animation: text 3s linear;\r\n  \r\n  }\r\n\r\n\r\n@-webkit-keyframes text {\r\n    0%{\r\n      color: blueviolet;\r\n    }\r\n    30%{\r\n      letter-spacing: 25px;\r\n    }\r\n    85%{\r\n      letter-spacing: 8px;\r\n    }\r\n  }\r\n\r\n\r\n@keyframes text {\r\n    0%{\r\n      color: blueviolet;\r\n    }\r\n    30%{\r\n      letter-spacing: 25px;\r\n    }\r\n    85%{\r\n      letter-spacing: 8px;\r\n    }\r\n  }\r\n\r\n\r\n.navbar:not(.top-nav-collapse) {\r\n  background: transparent !important;\r\n}\r\n\r\n\r\n.rgba-gradient .full-bg-img {\r\n  background: linear-gradient(45deg, rgba(83, 125, 210, 0.4), rgba(178, 30, 123, 0.4) 100%);\r\n}\r\n\r\n\r\n.card {\r\n  background-color: rgba(235, 220, 154, 0.068);\r\n  text-align: left;\r\n \r\n  \r\n}\r\n\r\n\r\n.text-center{\r\n   font-size: 15px;\r\n  font-family: Akzidenz;\r\n}\r\n\r\n\r\nbutton{\r\n  border-radius: 15px;\r\n  font-size: 12px;\r\n  font-family: Akzidenz;\r\n\r\n}\r\n\r\n\r\n.md-form {\r\n  font-size: 20px;\r\n  font-family: Akzidenz;\r\n  \r\n}\r\n\r\n\r\n.md-form label {\r\n\r\n  font-size: 19px;\r\n  font-family: Akzidenz;\r\n  color: rgb(135, 151, 222);\r\n \r\n}\r\n\r\n\r\n.md-form i {\r\n  margin-top: 18px;\r\n color: blue;\r\n\r\n}\r\n\r\n\r\n.md-form input {\r\n\r\n  font-size: 17px;\r\n  font-family: Akzidenz;\r\n}\r\n\r\n\r\nh6 {\r\n  line-height: 1.7;\r\n}\r\n\r\n\r\n@media (max-width: 740px) {\r\n  .full-height,\r\n  .full-height body,\r\n  .full-height header,\r\n  .full-height header .view {\r\n    height: 1040px;\r\n  }\r\n}\r\n\r\n\r\n.hr-light {\r\n  width: 500px;\r\n  margin-left: 20;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOzs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysb0JBQW9COztBQUV0Qjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7OztBQUdBOztFQUVFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlDQUF5QjtVQUF6Qix5QkFBeUI7O0VBRXpCOzs7QUFDQTtJQUNFO01BQ0UsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGOzs7QUFWQTtJQUNFO01BQ0UsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGOzs7QUFDRjtFQUNFLGtDQUFrQztBQUNwQzs7O0FBR0E7RUFDRSx5RkFBeUY7QUFDM0Y7OztBQUdBO0VBQ0UsNENBQTRDO0VBQzVDLGdCQUFnQjs7O0FBR2xCOzs7QUFFQTtHQUNHLGVBQWU7RUFDaEIscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCOztBQUV2Qjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCOztBQUV2Qjs7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix5QkFBeUI7O0FBRTNCOzs7QUFFQTtFQUNFLGdCQUFnQjtDQUNqQixXQUFXOztBQUVaOzs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRTs7OztJQUlFLGNBQWM7RUFDaEI7QUFDRjs7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8taGVhZGVyIHtcclxuICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4udmlldyB7XHJcbiAgaGVpZ2h0OiA3NTBweDtcclxuICB3aWR0aDogMTU1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbmg0e1xyXG5cclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjUwcHg7XHJcblxyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IEFremlkZW56O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tYm90dG9tOiAyNTBweDtcclxufSBcclxuXHJcblxyXG5oMXtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFremlkZW56O1xyXG4gIGFuaW1hdGlvbjogdGV4dCAzcyBsaW5lYXI7XHJcbiAgXHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgdGV4dCB7XHJcbiAgICAwJXtcclxuICAgICAgY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICB9XHJcbiAgICAzMCV7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgODUle1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnJnYmEtZ3JhZGllbnQgLmZ1bGwtYmctaW1nIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoODMsIDEyNSwgMjEwLCAwLjQpLCByZ2JhKDE3OCwgMzAsIDEyMywgMC40KSAxMDAlKTtcclxufVxyXG5cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgMjIwLCAxNTQsIDAuMDY4KTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gXHJcbiAgXHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBa3ppZGVuejtcclxufSBcclxuXHJcbmJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogQWt6aWRlbno7XHJcblxyXG59IFxyXG5cclxuLm1kLWZvcm0ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogQWt6aWRlbno7XHJcbiAgXHJcbn1cclxuXHJcbi5tZC1mb3JtIGxhYmVsIHtcclxuXHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBa3ppZGVuejtcclxuICBjb2xvcjogcmdiKDEzNSwgMTUxLCAyMjIpO1xyXG4gXHJcbn1cclxuXHJcbi5tZC1mb3JtIGkge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiBjb2xvcjogYmx1ZTtcclxuXHJcbn1cclxuXHJcbi5tZC1mb3JtIGlucHV0IHtcclxuXHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBBa3ppZGVuejtcclxufVxyXG5cclxuaDYge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgLmZ1bGwtaGVpZ2h0LFxyXG4gIC5mdWxsLWhlaWdodCBib2R5LFxyXG4gIC5mdWxsLWhlaWdodCBoZWFkZXIsXHJcbiAgLmZ1bGwtaGVpZ2h0IGhlYWRlciAudmlldyB7XHJcbiAgICBoZWlnaHQ6IDEwNDBweDtcclxuICB9XHJcbn1cclxuLmhyLWxpZ2h0IHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./helpers */
    "./src/app/register/helpers.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(formBuilder, router, http) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.submitted = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          }, {
            validator: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'confirmPassword')
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;

          if (this.registerForm.invalid) {
            return;
          }

          var userInfo = {
            emailId: this.registerForm.value.email,
            password: this.registerForm.value.password
          };
          console.log(this.emailId);
          console.log(this.password);
          this.addUser(userInfo);
        }
      }, {
        key: "addUser",
        value: function addUser(userInfo) {
          console.log(userInfo);
          this.http.post('/api/register', userInfo).subscribe(function (data) {
            console.log('register data : ', data);
          });
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Registered Successfully',
            text: 'click on ok button to login',
            icon: 'success',
            confirmButtonText: 'ok'
          });
          this.router.navigate(['/login']);
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      dialogflow: {
        knowledgeBot: 'a02c8c7fcb1f452a90d53a6871982540'
      },
      youtube: {
        api_key: 'AIzaSyDhGASYUnmjszNIjzQ2Pr58YNc7xekWxWg'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Jai N Reddy Gayam\Documents\kb\KnowledgeBot\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map