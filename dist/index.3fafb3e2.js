// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3Imd1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "0fa2489aa94c8731ee2aee9f3fafb3e2";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5rkFb":[function(require,module,exports) {
var _componentsHeaderHeader = require('./components/Header/Header');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _componentsHeaderHeaderDefault = _parcelHelpers.interopDefault(_componentsHeaderHeader);
var _componentsFooterFooter = require('./components/Footer/Footer');
var _componentsFooterFooterDefault = _parcelHelpers.interopDefault(_componentsFooterFooter);
var _componentsEncryptEncrypt = require('./components/Encrypt/Encrypt');
var _componentsEncryptEncryptDefault = _parcelHelpers.interopDefault(_componentsEncryptEncrypt);
require('./styles/styles.css');
const app = document.querySelector('body');
const promise = new Promise(resolve => {
  resolve(app.innerHTML = `
        ${_componentsHeaderHeaderDefault.default}
        <main>
            <div class='encryptorWrapper'>
                <div class=formWrapper>
                    <textarea class='stringToEncrypt' name='stringToEncrypt' placeholder=" "></textarea>
                    <label for='stringToEncrypt'>
                        Message to encrypt
                    </label>
                    <div class='buttonWrapper'>
                        <button class='sendButton'>Encrypt!</button>
                        <button class='resetButton'>Reset</button>
                    </div>
                </div>
                <p class='encrypted'>    
                
                </p>
            </div>
        </main>
        ${_componentsFooterFooterDefault.default}
    `);
});
promise.then(result => {
  const input = document.querySelector('.stringToEncrypt');
  const encryptedContent = document.querySelector('.encrypted');
  const sendButton = document.querySelector('.sendButton');
  const resetButton = document.querySelector('.resetButton');
  const encryptContent = () => {
    encryptedContent.classList.remove('isError');
    encryptedContent.innerHTML = _componentsEncryptEncryptDefault.default(input.value);
    if (encryptedContent.innerHTML === 'Sorry, your message must be a text' || encryptedContent.innerHTML === `Sorry, your message can't be empty`) {
      encryptedContent.classList.add('isError');
    }
  };
  const resetForm = () => {
    encryptedContent.classList.remove('isError');
    input.value = '';
    encryptedContent.innerHTML = '';
  };
  sendButton.onclick = encryptContent;
  resetButton.onclick = resetForm;
});

},{"./components/Header/Header":"5RL9x","./components/Footer/Footer":"66OBm","./components/Encrypt/Encrypt":"7krV9","./styles/styles.css":"4lcUo","@parcel/transformer-js/lib/esmodule-helpers.js":"3fLqS"}],"5RL9x":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _EliotEliot = require('../Eliot/Eliot');
var _EliotEliotDefault = _parcelHelpers.interopDefault(_EliotEliot);
const Header = () => {
  return `
        <header>
            <svg width="1078" height="1078" viewBox="0 0 1078 1078" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g class="wall">
                    <circle cx="539" cy="539" r="539" fill="#C4C4C4"/>
                    <path d="M480 134C517.5 134 568 133.5 601.5 133.5C610.5 149.5 613.843 160.932 620.5 179C680 189 722 218 740.5 228.5C755.5 220 766.5 213.5 784 210.5C790 210.5 867 290 869.5 296C868.214 314.376 858.5 326 852.5 340C874 368.5 895.5 427 901.5 461C916.5 465 931.5 470 946 480C947 511.5 946.5 575 945 601.5C945 606 918 614.5 902.5 619C889.5 675 871 718 851 741C859.5 754.5 865.5 767.5 868.5 783C869.855 790 784 870.809 781.5 870.5C764.5 866.5 753.5 859 740.5 852.5C700 882 641 900 619 902C613 927 611 931 600.5 945C598.5 947.667 479 948.5 479 945C469 929.5 467.5 916.5 462 901.5C413.5 896 355 862.5 340.5 852C323.5 861.5 312.5 865.5 296.5 870C292.5 871.125 257 833 257 833V827L252.5 828C252.5 828 225 801.5 210 784.5C206.5 783.5 222 756.5 229 739.5C204.5 710 189 658 180 619.5C161 615.5 147.5 611.5 132 599.5C130 597.952 132 512 133 479.5C133.138 475 163 468 179.5 460C179.5 435.5 214 365 214 365L219.5 366.5V356L228 342C228 342 211.5 314 208.5 296.5C207.471 290.5 284 221 294.5 210C300.5 206.5 323.5 223.5 342 229C383.5 199 419.5 189 461.5 178C467 161 472.5 139.5 480 134Z" fill="white"/>
                </g>
                <g class="door">
                    <path class="door__frame" d="M480 134C517.5 134 568 133.5 601.5 133.5C610.5 149.5 613.843 160.932 620.5 179C680 189 722 218 740.5 228.5C755.5 220 766.5 213.5 784 210.5C790 210.5 867 290 869.5 296C868.214 314.376 858.5 326 852.5 340C874 368.5 895.5 427 901.5 461C916.5 465 931.5 470 946 480C947 511.5 946.5 575 945 601.5C945 606 918 614.5 902.5 619C889.5 675 871 718 851 741C859.5 754.5 865.5 767.5 868.5 783C869.855 790 784 870.809 781.5 870.5C764.5 866.5 753.5 859 740.5 852.5C700 882 641 900 619 902C613 927 611 931 600.5 945C598.5 947.667 479 948.5 479 945C469 929.5 467.5 916.5 462 901.5C413.5 896 355 862.5 340.5 852C323.5 861.5 312.5 865.5 296.5 870C292.5 871.125 257 833 257 833V827L252.5 828C252.5 828 225 801.5 210 784.5C206.5 783.5 222 756.5 229 739.5C204.5 710 189 658 180 619.5C161 615.5 147.5 611.5 132 599.5C130 597.952 132 512 133 479.5C133.138 475 163 468 179.5 460C179.5 435.5 214 365 214 365L219.5 366.5V356L228 342C228 342 211.5 314 208.5 296.5C207.471 290.5 284 221 294.5 210C300.5 206.5 323.5 223.5 342 229C383.5 199 419.5 189 461.5 178C467 161 472.5 139.5 480 134Z" fill="black" stroke="black" stroke-width="10"/>
                    <circle class="door__bg" cx="540" cy="540" r="301" fill="white" stroke="black" stroke-width="6"/>
                    <path class="door__number--one" d="M332 513.5V443.5L445 358V717H371.5V494L332 513.5Z" fill="black"/>
                    <path class="door__number--three" d="M467 440.5V358L728 359.5C728 359.5 677.5 424.5 646 462C779 513.5 771.5 625 697.5 686.5C695.915 684.763 693.5 682 693.5 682L690 680.5L689 683C689 683 692.698 685.999 695 688C643 724.5 543 752.5 467 675C466.488 671.697 466 666.5 466 666.5L461.5 667L459 661C459 661 480.5 615 498.5 594.5C550 683 658 632 663.5 594.5H671V590L664 582.5L665 569.5L661 569L661.5 550.5C661.5 550.5 659.5 562.5 655.5 558C640.5 533.5 584.5 512 527.5 540C524.5 528.5 521.5 510 521.5 510L573 440.5H467Z" fill="black"/>
                </g>
            </svg>
            <div>    
                <h1>Simple encryptor by Gacek</h1>
                <h2>${_EliotEliotDefault.default('Encrypt your message')}<h2>
            </div>
            
        </header>
    `;
};
exports.default = Header();

},{"../Eliot/Eliot":"7c2zi","@parcel/transformer-js/lib/esmodule-helpers.js":"3fLqS"}],"7c2zi":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
const Eliot = message => {
  const messageArray = message.split('');
  function staticChanges(letter) {
    switch (letter.toLowerCase()) {
      case 'a':
        return '4';
      case 'i':
        return '1';
      case 'o':
        return '0';
      case 'e':
        return '3';
      case 's':
        return '5';
      default:
        return letter;
    }
  }
  let toLower = false;
  function convertLetterToEliot(letter, index) {
    if (staticChanges(letter) !== letter) {
      return staticChanges(letter);
    }
    function newLetter() {
      return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }
    return newLetter();
  }
  return messageArray.reduce((total, letter, letterIndex) => total + convertLetterToEliot(letter, letterIndex), '');
};
exports.default = Eliot;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3fLqS"}],"3fLqS":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"66OBm":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
const Footer = () => {
  const currentYear = `© ${new Date().getFullYear()}, Darek Mazur`;
  return `
        <footer>
            <h3>${currentYear}</h3>
        </footer>
    `;
};
exports.default = Footer();

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3fLqS"}],"7krV9":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _ROT13ROT = require('../ROT13/ROT13');
var _ROT13ROTDefault = _parcelHelpers.interopDefault(_ROT13ROT);
var _utilsFunctions = require('../../utils/functions');
const Encrypt = input => {
  if (typeof input !== 'string' || !isNaN(Number(input))) {
    try {
      throw new Error('Sorry, your message must be a text');
    } catch (e) {
      return e.message;
    }
  } else if (input === '' || input === ' ') {
    try {
      throw new Error(`Sorry, your message can't be empty`);
    } catch (e) {
      return e.message;
    }
  }
  const plainTextArray = input.split('');
  const plainTextUniversalChars = [];
  plainTextArray.forEach(letter => {
    plainTextUniversalChars.push(_utilsFunctions.polishToUniversalLetter(letter));
  });
  return _ROT13ROTDefault.default(plainTextUniversalChars);
};
exports.default = Encrypt;

},{"../ROT13/ROT13":"7iZXf","../../utils/functions":"6iMha","@parcel/transformer-js/lib/esmodule-helpers.js":"3fLqS"}],"7iZXf":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _utilsAllLettersArray = require('../../utils/allLettersArray');
var _utilsAllLettersArrayDefault = _parcelHelpers.interopDefault(_utilsAllLettersArray);
var _utilsVariables = require('../../utils/variables');
var _utilsVariablesDefault = _parcelHelpers.interopDefault(_utilsVariables);
const ROT13 = plainText => {
  const encryption = [];
  plainText.forEach(letter => {
    if (_utilsAllLettersArrayDefault.default.some(el => letter.toLowerCase() === el)) {
      const letterPosition = _utilsAllLettersArrayDefault.default.indexOf(letter.toLowerCase());
      letter === letter.toUpperCase() ? encryption.push(_utilsAllLettersArrayDefault.default[(letterPosition + _utilsVariablesDefault.default.encryption) % _utilsAllLettersArrayDefault.default.length].toUpperCase()) : encryption.push(_utilsAllLettersArrayDefault.default[(letterPosition + _utilsVariablesDefault.default.encryption) % _utilsAllLettersArrayDefault.default.length]);
    } else {
      encryption.push(letter);
    }
  });
  return encryption.join('');
};
exports.default = ROT13;

},{"../../utils/allLettersArray":"3Yc6Z","../../utils/variables":"2jDx0","@parcel/transformer-js/lib/esmodule-helpers.js":"3fLqS"}],"3Yc6Z":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
exports.default = allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3fLqS"}],"2jDx0":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
exports.default = variables = {
  encryption: 13
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3fLqS"}],"6iMha":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "polishToUniversalLetter", function () {
  return polishToUniversalLetter;
});
function polishToUniversalLetter(letter) {
  switch (letter) {
    case 'ą':
      return 'a';
    case 'ć':
      return 'c';
    case 'ę':
      return 'e';
    case 'ł':
      return 'l';
    case 'ń':
      return 'n';
    case 'ó':
      return 'o';
    case 'ś':
      return 's';
    case 'ż':
    case 'ź':
      return 'z';
    case 'Ą':
      return 'A';
    case 'Ć':
      return 'C';
    case 'Ę':
      return 'E';
    case 'Ł':
      return 'L';
    case 'Ń':
      return 'N';
    case 'Ó':
      return 'O';
    case 'Ś':
      return 'S';
    case 'Ż':
    case 'Ź':
      return 'Z';
    default:
      return letter;
  }
  ;
}
;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3fLqS"}],"4lcUo":[function() {},{}]},["3Imd1","5rkFb"], "5rkFb", "parcelRequireee2d")

//# sourceMappingURL=index.3fafb3e2.js.map
