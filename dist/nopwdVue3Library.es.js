import { ref as nA, getCurrentInstance as jo, onMounted as dr, nextTick as pr, unref as _, getCurrentScope as Xo, onScopeDispose as zo, readonly as Lo, watch as Cr, shallowRef as Wo, inject as Ko, defineComponent as Er, useCssVars as Go, watchEffect as Br, openBlock as IA, createElementBlock as RA, normalizeClass as Fo, createElementVNode as vA, withModifiers as Ho, createBlock as fe, createCommentVNode as ZA, normalizeStyle as En, toDisplayString as Bn } from "vue";
const Yo = {
  "auth.appinstalled": "App installed locally? Click here",
  "auth.codedark": "Code not reading? Flip to light-mode.",
  "auth.codelight": "Scan the code with your mobile device.",
  "auth.codeerror": "Error requesting code, <br/>please refresh page.",
  "auth.loading": "Loading access code, please wait...",
  "auth.prepare": "Preparing interface...",
  "auth.login": "Click to Login"
}, _o = {
  en: Yo
};
function Qr(A = {}) {
  const t = nA({ ..._o, ...A }), e = nA("en");
  return { t: (r) => {
    const o = t.value[e.value][r];
    return o === void 0 ? (console.warn(`Translation not found for key: ${r}`), r) : o;
  } };
}
function $o(A) {
  return Xo() ? (zo(A), !0) : !1;
}
function je(A) {
  return typeof A == "function" ? A() : _(A);
}
const Ai = typeof window < "u", ti = () => {
};
function ei(A, t) {
  function e(...n) {
    return new Promise((r, o) => {
      Promise.resolve(A(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(r).catch(o);
    });
  }
  return e;
}
const yr = (A) => A();
function ni(A = yr) {
  const t = nA(!0);
  function e() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const r = (...o) => {
    t.value && A(...o);
  };
  return { isActive: Lo(t), pause: e, resume: n, eventFilter: r };
}
function ri(A, t = !0) {
  jo() ? dr(A) : t ? A() : pr(A);
}
var Qn = Object.getOwnPropertySymbols, oi = Object.prototype.hasOwnProperty, ii = Object.prototype.propertyIsEnumerable, si = (A, t) => {
  var e = {};
  for (var n in A)
    oi.call(A, n) && t.indexOf(n) < 0 && (e[n] = A[n]);
  if (A != null && Qn)
    for (var n of Qn(A))
      t.indexOf(n) < 0 && ii.call(A, n) && (e[n] = A[n]);
  return e;
};
function ai(A, t, e = {}) {
  const n = e, {
    eventFilter: r = yr
  } = n, o = si(n, [
    "eventFilter"
  ]);
  return Cr(
    A,
    ei(
      r,
      t
    ),
    o
  );
}
var ci = Object.defineProperty, ui = Object.defineProperties, li = Object.getOwnPropertyDescriptors, Xt = Object.getOwnPropertySymbols, Ir = Object.prototype.hasOwnProperty, vr = Object.prototype.propertyIsEnumerable, yn = (A, t, e) => t in A ? ci(A, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : A[t] = e, fi = (A, t) => {
  for (var e in t || (t = {}))
    Ir.call(t, e) && yn(A, e, t[e]);
  if (Xt)
    for (var e of Xt(t))
      vr.call(t, e) && yn(A, e, t[e]);
  return A;
}, gi = (A, t) => ui(A, li(t)), di = (A, t) => {
  var e = {};
  for (var n in A)
    Ir.call(A, n) && t.indexOf(n) < 0 && (e[n] = A[n]);
  if (A != null && Xt)
    for (var n of Xt(A))
      t.indexOf(n) < 0 && vr.call(A, n) && (e[n] = A[n]);
  return e;
};
function pi(A, t, e = {}) {
  const n = e, {
    eventFilter: r
  } = n, o = di(n, [
    "eventFilter"
  ]), { eventFilter: i, pause: s, resume: c, isActive: l } = ni(r);
  return { stop: ai(
    A,
    t,
    gi(fi({}, o), {
      eventFilter: i
    })
  ), pause: s, resume: c, isActive: l };
}
function Ci(A) {
  var t;
  const e = je(A);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const be = Ai ? window : void 0;
function In(...A) {
  let t, e, n, r;
  if (typeof A[0] == "string" || Array.isArray(A[0]) ? ([e, n, r] = A, t = be) : [t, e, n, r] = A, !t)
    return ti;
  Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
  const o = [], i = () => {
    o.forEach((d) => d()), o.length = 0;
  }, s = (d, a, y, k) => (d.addEventListener(a, y, k), () => d.removeEventListener(a, y, k)), c = Cr(
    () => [Ci(t), je(r)],
    ([d, a]) => {
      i(), d && o.push(
        ...e.flatMap((y) => n.map((k) => s(d, y, k, a)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    c(), i();
  };
  return $o(l), l;
}
const Dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wt = "__vueuse_ssr_handlers__", Ei = /* @__PURE__ */ Bi();
function Bi() {
  return wt in Dt || (Dt[wt] = Dt[wt] || {}), Dt[wt];
}
function Qi(A, t) {
  return Ei[A] || t;
}
function yi(A) {
  return A == null ? "any" : A instanceof Set ? "set" : A instanceof Map ? "map" : A instanceof Date ? "date" : typeof A == "boolean" ? "boolean" : typeof A == "string" ? "string" : typeof A == "object" ? "object" : Number.isNaN(A) ? "any" : "number";
}
var Ii = Object.defineProperty, vn = Object.getOwnPropertySymbols, vi = Object.prototype.hasOwnProperty, hi = Object.prototype.propertyIsEnumerable, hn = (A, t, e) => t in A ? Ii(A, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : A[t] = e, mn = (A, t) => {
  for (var e in t || (t = {}))
    vi.call(t, e) && hn(A, e, t[e]);
  if (vn)
    for (var e of vn(t))
      hi.call(t, e) && hn(A, e, t[e]);
  return A;
};
const mi = {
  boolean: {
    read: (A) => A === "true",
    write: (A) => String(A)
  },
  object: {
    read: (A) => JSON.parse(A),
    write: (A) => JSON.stringify(A)
  },
  number: {
    read: (A) => Number.parseFloat(A),
    write: (A) => String(A)
  },
  any: {
    read: (A) => A,
    write: (A) => String(A)
  },
  string: {
    read: (A) => A,
    write: (A) => String(A)
  },
  map: {
    read: (A) => new Map(JSON.parse(A)),
    write: (A) => JSON.stringify(Array.from(A.entries()))
  },
  set: {
    read: (A) => new Set(JSON.parse(A)),
    write: (A) => JSON.stringify(Array.from(A))
  },
  date: {
    read: (A) => new Date(A),
    write: (A) => A.toISOString()
  }
}, Dn = "vueuse-storage";
function oA(A, t, e, n = {}) {
  var r;
  const {
    flush: o = "pre",
    deep: i = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: c = !0,
    mergeDefaults: l = !1,
    shallow: d,
    window: a = be,
    eventFilter: y,
    onError: k = (p) => {
      console.error(p);
    }
  } = n, S = (d ? Wo : nA)(t);
  if (!e)
    try {
      e = Qi("getDefaultStorage", () => {
        var p;
        return (p = be) == null ? void 0 : p.localStorage;
      })();
    } catch (p) {
      k(p);
    }
  if (!e)
    return S;
  const N = je(t), z = yi(N), X = (r = n.serializer) != null ? r : mi[z], { pause: T, resume: U } = pi(
    S,
    () => V(S.value),
    { flush: o, deep: i, eventFilter: y }
  );
  return a && s && (In(a, "storage", v), In(a, Dn, M)), v(), S;
  function V(p) {
    try {
      if (p == null)
        e.removeItem(A);
      else {
        const g = X.write(p), B = e.getItem(A);
        B !== g && (e.setItem(A, g), a && a.dispatchEvent(new CustomEvent(Dn, {
          detail: {
            key: A,
            oldValue: B,
            newValue: g,
            storageArea: e
          }
        })));
      }
    } catch (g) {
      k(g);
    }
  }
  function I(p) {
    const g = p ? p.newValue : e.getItem(A);
    if (g == null)
      return c && N !== null && e.setItem(A, X.write(N)), N;
    if (!p && l) {
      const B = X.read(g);
      return typeof l == "function" ? l(B, N) : z === "object" && !Array.isArray(B) ? mn(mn({}, N), B) : B;
    } else
      return typeof g != "string" ? g : X.read(g);
  }
  function M(p) {
    v(p.detail);
  }
  function v(p) {
    if (!(p && p.storageArea !== e)) {
      if (p && p.key == null) {
        S.value = N;
        return;
      }
      if (!(p && p.key !== A)) {
        T();
        try {
          S.value = I(p);
        } catch (g) {
          k(g);
        } finally {
          p ? pr(U) : U();
        }
      }
    }
  }
}
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
var wn;
(function(A) {
  A.pop = "pop", A.push = "push";
})(wn || (wn = {}));
var bn;
(function(A) {
  A.back = "back", A.forward = "forward", A.unknown = "";
})(bn || (bn = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var kn;
(function(A) {
  A[A.aborted = 4] = "aborted", A[A.cancelled = 8] = "cancelled", A[A.duplicated = 16] = "duplicated";
})(kn || (kn = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Di = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function wi() {
  return Ko(Di);
}
var bi = (
  /** @class */
  function() {
    function A(t) {
      if (!t)
        throw new TypeError("Invalid argument; `value` has no value.");
      this.value = A.EMPTY, t && A.isGuid(t) && (this.value = t);
    }
    return A.isGuid = function(t) {
      var e = t.toString();
      return t && (t instanceof A || A.validator.test(e));
    }, A.create = function() {
      return new A([A.gen(2), A.gen(1), A.gen(1), A.gen(1), A.gen(3)].join("-"));
    }, A.createEmpty = function() {
      return new A("emptyguid");
    }, A.parse = function(t) {
      return new A(t);
    }, A.raw = function() {
      return [A.gen(2), A.gen(1), A.gen(1), A.gen(1), A.gen(3)].join("-");
    }, A.gen = function(t) {
      for (var e = "", n = 0; n < t; n++)
        e += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      return e;
    }, A.prototype.equals = function(t) {
      return A.isGuid(t) && this.value === t.toString();
    }, A.prototype.isEmpty = function() {
      return this.value === A.EMPTY;
    }, A.prototype.toString = function() {
      return this.value;
    }, A.prototype.toJSON = function() {
      return {
        value: this.value
      };
    }, A.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i"), A.EMPTY = "00000000-0000-0000-0000-000000000000", A;
  }()
), jA = bi;
function hr(A, t) {
  return function() {
    return A.apply(t, arguments);
  };
}
const { toString: ki } = Object.prototype, { getPrototypeOf: Xe } = Object, $t = ((A) => (t) => {
  const e = ki.call(t);
  return A[e] || (A[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), bA = (A) => (A = A.toLowerCase(), (t) => $t(t) === A), Ae = (A) => (t) => typeof t === A, { isArray: lt } = Array, Ct = Ae("undefined");
function Si(A) {
  return A !== null && !Ct(A) && A.constructor !== null && !Ct(A.constructor) && EA(A.constructor.isBuffer) && A.constructor.isBuffer(A);
}
const mr = bA("ArrayBuffer");
function Oi(A) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(A) : t = A && A.buffer && mr(A.buffer), t;
}
const Pi = Ae("string"), EA = Ae("function"), Dr = Ae("number"), te = (A) => A !== null && typeof A == "object", Mi = (A) => A === !0 || A === !1, qt = (A) => {
  if ($t(A) !== "object")
    return !1;
  const t = Xe(A);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
}, Ri = bA("Date"), Ni = bA("File"), Ji = bA("Blob"), qi = bA("FileList"), Vi = (A) => te(A) && EA(A.pipe), xi = (A) => {
  let t;
  return A && (typeof FormData == "function" && A instanceof FormData || EA(A.append) && ((t = $t(A)) === "formdata" || // detect form-data instance
  t === "object" && EA(A.toString) && A.toString() === "[object FormData]"));
}, Ui = bA("URLSearchParams"), Ti = (A) => A.trim ? A.trim() : A.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vt(A, t, { allOwnKeys: e = !1 } = {}) {
  if (A === null || typeof A > "u")
    return;
  let n, r;
  if (typeof A != "object" && (A = [A]), lt(A))
    for (n = 0, r = A.length; n < r; n++)
      t.call(null, A[n], n, A);
  else {
    const o = e ? Object.getOwnPropertyNames(A) : Object.keys(A), i = o.length;
    let s;
    for (n = 0; n < i; n++)
      s = o[n], t.call(null, A[s], s, A);
  }
}
function wr(A, t) {
  t = t.toLowerCase();
  const e = Object.keys(A);
  let n = e.length, r;
  for (; n-- > 0; )
    if (r = e[n], t === r.toLowerCase())
      return r;
  return null;
}
const br = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), kr = (A) => !Ct(A) && A !== br;
function ke() {
  const { caseless: A } = kr(this) && this || {}, t = {}, e = (n, r) => {
    const o = A && wr(t, r) || r;
    qt(t[o]) && qt(n) ? t[o] = ke(t[o], n) : qt(n) ? t[o] = ke({}, n) : lt(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && vt(arguments[n], e);
  return t;
}
const Zi = (A, t, e, { allOwnKeys: n } = {}) => (vt(t, (r, o) => {
  e && EA(r) ? A[o] = hr(r, e) : A[o] = r;
}, { allOwnKeys: n }), A), ji = (A) => (A.charCodeAt(0) === 65279 && (A = A.slice(1)), A), Xi = (A, t, e, n) => {
  A.prototype = Object.create(t.prototype, n), A.prototype.constructor = A, Object.defineProperty(A, "super", {
    value: t.prototype
  }), e && Object.assign(A.prototype, e);
}, zi = (A, t, e, n) => {
  let r, o, i;
  const s = {};
  if (t = t || {}, A == null)
    return t;
  do {
    for (r = Object.getOwnPropertyNames(A), o = r.length; o-- > 0; )
      i = r[o], (!n || n(i, A, t)) && !s[i] && (t[i] = A[i], s[i] = !0);
    A = e !== !1 && Xe(A);
  } while (A && (!e || e(A, t)) && A !== Object.prototype);
  return t;
}, Li = (A, t, e) => {
  A = String(A), (e === void 0 || e > A.length) && (e = A.length), e -= t.length;
  const n = A.indexOf(t, e);
  return n !== -1 && n === e;
}, Wi = (A) => {
  if (!A)
    return null;
  if (lt(A))
    return A;
  let t = A.length;
  if (!Dr(t))
    return null;
  const e = new Array(t);
  for (; t-- > 0; )
    e[t] = A[t];
  return e;
}, Ki = ((A) => (t) => A && t instanceof A)(typeof Uint8Array < "u" && Xe(Uint8Array)), Gi = (A, t) => {
  const n = (A && A[Symbol.iterator]).call(A);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const o = r.value;
    t.call(A, o[0], o[1]);
  }
}, Fi = (A, t) => {
  let e;
  const n = [];
  for (; (e = A.exec(t)) !== null; )
    n.push(e);
  return n;
}, Hi = bA("HTMLFormElement"), Yi = (A) => A.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, n, r) {
    return n.toUpperCase() + r;
  }
), Sn = (({ hasOwnProperty: A }) => (t, e) => A.call(t, e))(Object.prototype), _i = bA("RegExp"), Sr = (A, t) => {
  const e = Object.getOwnPropertyDescriptors(A), n = {};
  vt(e, (r, o) => {
    t(r, o, A) !== !1 && (n[o] = r);
  }), Object.defineProperties(A, n);
}, $i = (A) => {
  Sr(A, (t, e) => {
    if (EA(A) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const n = A[e];
    if (EA(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, As = (A, t) => {
  const e = {}, n = (r) => {
    r.forEach((o) => {
      e[o] = !0;
    });
  };
  return lt(A) ? n(A) : n(String(A).split(t)), e;
}, ts = () => {
}, es = (A, t) => (A = +A, Number.isFinite(A) ? A : t), ge = "abcdefghijklmnopqrstuvwxyz", On = "0123456789", Or = {
  DIGIT: On,
  ALPHA: ge,
  ALPHA_DIGIT: ge + ge.toUpperCase() + On
}, ns = (A = 16, t = Or.ALPHA_DIGIT) => {
  let e = "";
  const { length: n } = t;
  for (; A--; )
    e += t[Math.random() * n | 0];
  return e;
};
function rs(A) {
  return !!(A && EA(A.append) && A[Symbol.toStringTag] === "FormData" && A[Symbol.iterator]);
}
const os = (A) => {
  const t = new Array(10), e = (n, r) => {
    if (te(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[r] = n;
        const o = lt(n) ? [] : {};
        return vt(n, (i, s) => {
          const c = e(i, r + 1);
          !Ct(c) && (o[s] = c);
        }), t[r] = void 0, o;
      }
    }
    return n;
  };
  return e(A, 0);
}, is = bA("AsyncFunction"), ss = (A) => A && (te(A) || EA(A)) && EA(A.then) && EA(A.catch), Q = {
  isArray: lt,
  isArrayBuffer: mr,
  isBuffer: Si,
  isFormData: xi,
  isArrayBufferView: Oi,
  isString: Pi,
  isNumber: Dr,
  isBoolean: Mi,
  isObject: te,
  isPlainObject: qt,
  isUndefined: Ct,
  isDate: Ri,
  isFile: Ni,
  isBlob: Ji,
  isRegExp: _i,
  isFunction: EA,
  isStream: Vi,
  isURLSearchParams: Ui,
  isTypedArray: Ki,
  isFileList: qi,
  forEach: vt,
  merge: ke,
  extend: Zi,
  trim: Ti,
  stripBOM: ji,
  inherits: Xi,
  toFlatObject: zi,
  kindOf: $t,
  kindOfTest: bA,
  endsWith: Li,
  toArray: Wi,
  forEachEntry: Gi,
  matchAll: Fi,
  isHTMLForm: Hi,
  hasOwnProperty: Sn,
  hasOwnProp: Sn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Sr,
  freezeMethods: $i,
  toObjectSet: As,
  toCamelCase: Yi,
  noop: ts,
  toFiniteNumber: es,
  findKey: wr,
  global: br,
  isContextDefined: kr,
  ALPHABET: Or,
  generateString: ns,
  isSpecCompliantForm: rs,
  toJSONObject: os,
  isAsyncFn: is,
  isThenable: ss
};
function G(A, t, e, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = A, this.name = "AxiosError", t && (this.code = t), e && (this.config = e), n && (this.request = n), r && (this.response = r);
}
Q.inherits(G, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: Q.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Pr = G.prototype, Mr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((A) => {
  Mr[A] = { value: A };
});
Object.defineProperties(G, Mr);
Object.defineProperty(Pr, "isAxiosError", { value: !0 });
G.from = (A, t, e, n, r, o) => {
  const i = Object.create(Pr);
  return Q.toFlatObject(A, i, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), G.call(i, A.message, t, e, n, r), i.cause = A, i.name = A.name, o && Object.assign(i, o), i;
};
const as = null;
function Se(A) {
  return Q.isPlainObject(A) || Q.isArray(A);
}
function Rr(A) {
  return Q.endsWith(A, "[]") ? A.slice(0, -2) : A;
}
function Pn(A, t, e) {
  return A ? A.concat(t).map(function(r, o) {
    return r = Rr(r), !e && o ? "[" + r + "]" : r;
  }).join(e ? "." : "") : t;
}
function cs(A) {
  return Q.isArray(A) && !A.some(Se);
}
const us = Q.toFlatObject(Q, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ee(A, t, e) {
  if (!Q.isObject(A))
    throw new TypeError("target must be an object");
  t = t || new FormData(), e = Q.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(N, z) {
    return !Q.isUndefined(z[N]);
  });
  const n = e.metaTokens, r = e.visitor || d, o = e.dots, i = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && Q.isSpecCompliantForm(t);
  if (!Q.isFunction(r))
    throw new TypeError("visitor must be a function");
  function l(S) {
    if (S === null)
      return "";
    if (Q.isDate(S))
      return S.toISOString();
    if (!c && Q.isBlob(S))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return Q.isArrayBuffer(S) || Q.isTypedArray(S) ? c && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function d(S, N, z) {
    let X = S;
    if (S && !z && typeof S == "object") {
      if (Q.endsWith(N, "{}"))
        N = n ? N : N.slice(0, -2), S = JSON.stringify(S);
      else if (Q.isArray(S) && cs(S) || (Q.isFileList(S) || Q.endsWith(N, "[]")) && (X = Q.toArray(S)))
        return N = Rr(N), X.forEach(function(U, V) {
          !(Q.isUndefined(U) || U === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Pn([N], V, o) : i === null ? N : N + "[]",
            l(U)
          );
        }), !1;
    }
    return Se(S) ? !0 : (t.append(Pn(z, N, o), l(S)), !1);
  }
  const a = [], y = Object.assign(us, {
    defaultVisitor: d,
    convertValue: l,
    isVisitable: Se
  });
  function k(S, N) {
    if (!Q.isUndefined(S)) {
      if (a.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + N.join("."));
      a.push(S), Q.forEach(S, function(X, T) {
        (!(Q.isUndefined(X) || X === null) && r.call(
          t,
          X,
          Q.isString(T) ? T.trim() : T,
          N,
          y
        )) === !0 && k(X, N ? N.concat(T) : [T]);
      }), a.pop();
    }
  }
  if (!Q.isObject(A))
    throw new TypeError("data must be an object");
  return k(A), t;
}
function Mn(A) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(A).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function ze(A, t) {
  this._pairs = [], A && ee(A, this, t);
}
const Nr = ze.prototype;
Nr.append = function(t, e) {
  this._pairs.push([t, e]);
};
Nr.toString = function(t) {
  const e = t ? function(n) {
    return t.call(this, n, Mn);
  } : Mn;
  return this._pairs.map(function(r) {
    return e(r[0]) + "=" + e(r[1]);
  }, "").join("&");
};
function ls(A) {
  return encodeURIComponent(A).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Jr(A, t, e) {
  if (!t)
    return A;
  const n = e && e.encode || ls, r = e && e.serialize;
  let o;
  if (r ? o = r(t, e) : o = Q.isURLSearchParams(t) ? t.toString() : new ze(t, e).toString(n), o) {
    const i = A.indexOf("#");
    i !== -1 && (A = A.slice(0, i)), A += (A.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return A;
}
class fs {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, e, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: e,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    Q.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Rn = fs, qr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gs = typeof URLSearchParams < "u" ? URLSearchParams : ze, ds = typeof FormData < "u" ? FormData : null, ps = typeof Blob < "u" ? Blob : null, Cs = (() => {
  let A;
  return typeof navigator < "u" && ((A = navigator.product) === "ReactNative" || A === "NativeScript" || A === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Es = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), wA = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gs,
    FormData: ds,
    Blob: ps
  },
  isStandardBrowserEnv: Cs,
  isStandardBrowserWebWorkerEnv: Es,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Bs(A, t) {
  return ee(A, new wA.classes.URLSearchParams(), Object.assign({
    visitor: function(e, n, r, o) {
      return wA.isNode && Q.isBuffer(e) ? (this.append(n, e.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Qs(A) {
  return Q.matchAll(/\w+|\[(\w*)]/g, A).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ys(A) {
  const t = {}, e = Object.keys(A);
  let n;
  const r = e.length;
  let o;
  for (n = 0; n < r; n++)
    o = e[n], t[o] = A[o];
  return t;
}
function Vr(A) {
  function t(e, n, r, o) {
    let i = e[o++];
    const s = Number.isFinite(+i), c = o >= e.length;
    return i = !i && Q.isArray(r) ? r.length : i, c ? (Q.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !s) : ((!r[i] || !Q.isObject(r[i])) && (r[i] = []), t(e, n, r[i], o) && Q.isArray(r[i]) && (r[i] = ys(r[i])), !s);
  }
  if (Q.isFormData(A) && Q.isFunction(A.entries)) {
    const e = {};
    return Q.forEachEntry(A, (n, r) => {
      t(Qs(n), r, e, 0);
    }), e;
  }
  return null;
}
const Is = {
  "Content-Type": void 0
};
function vs(A, t, e) {
  if (Q.isString(A))
    try {
      return (t || JSON.parse)(A), Q.trim(A);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (e || JSON.stringify)(A);
}
const ne = {
  transitional: qr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, e) {
    const n = e.getContentType() || "", r = n.indexOf("application/json") > -1, o = Q.isObject(t);
    if (o && Q.isHTMLForm(t) && (t = new FormData(t)), Q.isFormData(t))
      return r && r ? JSON.stringify(Vr(t)) : t;
    if (Q.isArrayBuffer(t) || Q.isBuffer(t) || Q.isStream(t) || Q.isFile(t) || Q.isBlob(t))
      return t;
    if (Q.isArrayBufferView(t))
      return t.buffer;
    if (Q.isURLSearchParams(t))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Bs(t, this.formSerializer).toString();
      if ((s = Q.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ee(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || r ? (e.setContentType("application/json", !1), vs(t)) : t;
  }],
  transformResponse: [function(t) {
    const e = this.transitional || ne.transitional, n = e && e.forcedJSONParsing, r = this.responseType === "json";
    if (t && Q.isString(t) && (n && !this.responseType || r)) {
      const i = !(e && e.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? G.from(s, G.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: wA.classes.FormData,
    Blob: wA.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Q.forEach(["delete", "get", "head"], function(t) {
  ne.headers[t] = {};
});
Q.forEach(["post", "put", "patch"], function(t) {
  ne.headers[t] = Q.merge(Is);
});
const Le = ne, hs = Q.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ms = (A) => {
  const t = {};
  let e, n, r;
  return A && A.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), e = i.substring(0, r).trim().toLowerCase(), n = i.substring(r + 1).trim(), !(!e || t[e] && hs[e]) && (e === "set-cookie" ? t[e] ? t[e].push(n) : t[e] = [n] : t[e] = t[e] ? t[e] + ", " + n : n);
  }), t;
}, Nn = Symbol("internals");
function ft(A) {
  return A && String(A).trim().toLowerCase();
}
function Vt(A) {
  return A === !1 || A == null ? A : Q.isArray(A) ? A.map(Vt) : String(A);
}
function Ds(A) {
  const t = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = e.exec(A); )
    t[n[1]] = n[2];
  return t;
}
const ws = (A) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(A.trim());
function de(A, t, e, n, r) {
  if (Q.isFunction(n))
    return n.call(this, t, e);
  if (r && (t = e), !!Q.isString(t)) {
    if (Q.isString(n))
      return t.indexOf(n) !== -1;
    if (Q.isRegExp(n))
      return n.test(t);
  }
}
function bs(A) {
  return A.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, n) => e.toUpperCase() + n);
}
function ks(A, t) {
  const e = Q.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(A, n + e, {
      value: function(r, o, i) {
        return this[n].call(this, t, r, o, i);
      },
      configurable: !0
    });
  });
}
class re {
  constructor(t) {
    t && this.set(t);
  }
  set(t, e, n) {
    const r = this;
    function o(s, c, l) {
      const d = ft(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const a = Q.findKey(r, d);
      (!a || r[a] === void 0 || l === !0 || l === void 0 && r[a] !== !1) && (r[a || c] = Vt(s));
    }
    const i = (s, c) => Q.forEach(s, (l, d) => o(l, d, c));
    return Q.isPlainObject(t) || t instanceof this.constructor ? i(t, e) : Q.isString(t) && (t = t.trim()) && !ws(t) ? i(ms(t), e) : t != null && o(e, t, n), this;
  }
  get(t, e) {
    if (t = ft(t), t) {
      const n = Q.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!e)
          return r;
        if (e === !0)
          return Ds(r);
        if (Q.isFunction(e))
          return e.call(this, r, n);
        if (Q.isRegExp(e))
          return e.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, e) {
    if (t = ft(t), t) {
      const n = Q.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!e || de(this, this[n], n, e)));
    }
    return !1;
  }
  delete(t, e) {
    const n = this;
    let r = !1;
    function o(i) {
      if (i = ft(i), i) {
        const s = Q.findKey(n, i);
        s && (!e || de(n, n[s], s, e)) && (delete n[s], r = !0);
      }
    }
    return Q.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const e = Object.keys(this);
    let n = e.length, r = !1;
    for (; n--; ) {
      const o = e[n];
      (!t || de(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const e = this, n = {};
    return Q.forEach(this, (r, o) => {
      const i = Q.findKey(n, o);
      if (i) {
        e[i] = Vt(r), delete e[o];
        return;
      }
      const s = t ? bs(o) : String(o).trim();
      s !== o && delete e[o], e[s] = Vt(r), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const e = /* @__PURE__ */ Object.create(null);
    return Q.forEach(this, (n, r) => {
      n != null && n !== !1 && (e[r] = t && Q.isArray(n) ? n.join(", ") : n);
    }), e;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, e]) => t + ": " + e).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...e) {
    const n = new this(t);
    return e.forEach((r) => n.set(r)), n;
  }
  static accessor(t) {
    const n = (this[Nn] = this[Nn] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(i) {
      const s = ft(i);
      n[s] || (ks(r, i), n[s] = !0);
    }
    return Q.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
re.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
Q.freezeMethods(re.prototype);
Q.freezeMethods(re);
const SA = re;
function pe(A, t) {
  const e = this || Le, n = t || e, r = SA.from(n.headers);
  let o = n.data;
  return Q.forEach(A, function(s) {
    o = s.call(e, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function xr(A) {
  return !!(A && A.__CANCEL__);
}
function ht(A, t, e) {
  G.call(this, A ?? "canceled", G.ERR_CANCELED, t, e), this.name = "CanceledError";
}
Q.inherits(ht, G, {
  __CANCEL__: !0
});
function Ss(A, t, e) {
  const n = e.config.validateStatus;
  !e.status || !n || n(e.status) ? A(e) : t(new G(
    "Request failed with status code " + e.status,
    [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
const Os = wA.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(e, n, r, o, i, s) {
        const c = [];
        c.push(e + "=" + encodeURIComponent(n)), Q.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()), Q.isString(o) && c.push("path=" + o), Q.isString(i) && c.push("domain=" + i), s === !0 && c.push("secure"), document.cookie = c.join("; ");
      },
      read: function(e) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(e) {
        this.write(e, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Ps(A) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(A);
}
function Ms(A, t) {
  return t ? A.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : A;
}
function Ur(A, t) {
  return A && !Ps(t) ? Ms(A, t) : t;
}
const Rs = wA.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), e = document.createElement("a");
    let n;
    function r(o) {
      let i = o;
      return t && (e.setAttribute("href", i), i = e.href), e.setAttribute("href", i), {
        href: e.href,
        protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
        host: e.host,
        search: e.search ? e.search.replace(/^\?/, "") : "",
        hash: e.hash ? e.hash.replace(/^#/, "") : "",
        hostname: e.hostname,
        port: e.port,
        pathname: e.pathname.charAt(0) === "/" ? e.pathname : "/" + e.pathname
      };
    }
    return n = r(window.location.href), function(i) {
      const s = Q.isString(i) ? r(i) : i;
      return s.protocol === n.protocol && s.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Ns(A) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(A);
  return t && t[1] || "";
}
function Js(A, t) {
  A = A || 10;
  const e = new Array(A), n = new Array(A);
  let r = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), d = n[o];
    i || (i = l), e[r] = c, n[r] = l;
    let a = o, y = 0;
    for (; a !== r; )
      y += e[a++], a = a % A;
    if (r = (r + 1) % A, r === o && (o = (o + 1) % A), l - i < t)
      return;
    const k = d && l - d;
    return k ? Math.round(y * 1e3 / k) : void 0;
  };
}
function Jn(A, t) {
  let e = 0;
  const n = Js(50, 250);
  return (r) => {
    const o = r.loaded, i = r.lengthComputable ? r.total : void 0, s = o - e, c = n(s), l = o <= i;
    e = o;
    const d = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: s,
      rate: c || void 0,
      estimated: c && i && l ? (i - o) / c : void 0,
      event: r
    };
    d[t ? "download" : "upload"] = !0, A(d);
  };
}
const qs = typeof XMLHttpRequest < "u", Vs = qs && function(A) {
  return new Promise(function(e, n) {
    let r = A.data;
    const o = SA.from(A.headers).normalize(), i = A.responseType;
    let s;
    function c() {
      A.cancelToken && A.cancelToken.unsubscribe(s), A.signal && A.signal.removeEventListener("abort", s);
    }
    Q.isFormData(r) && (wA.isStandardBrowserEnv || wA.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let l = new XMLHttpRequest();
    if (A.auth) {
      const k = A.auth.username || "", S = A.auth.password ? unescape(encodeURIComponent(A.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(k + ":" + S));
    }
    const d = Ur(A.baseURL, A.url);
    l.open(A.method.toUpperCase(), Jr(d, A.params, A.paramsSerializer), !0), l.timeout = A.timeout;
    function a() {
      if (!l)
        return;
      const k = SA.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), N = {
        data: !i || i === "text" || i === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: k,
        config: A,
        request: l
      };
      Ss(function(X) {
        e(X), c();
      }, function(X) {
        n(X), c();
      }, N), l = null;
    }
    if ("onloadend" in l ? l.onloadend = a : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(a);
    }, l.onabort = function() {
      l && (n(new G("Request aborted", G.ECONNABORTED, A, l)), l = null);
    }, l.onerror = function() {
      n(new G("Network Error", G.ERR_NETWORK, A, l)), l = null;
    }, l.ontimeout = function() {
      let S = A.timeout ? "timeout of " + A.timeout + "ms exceeded" : "timeout exceeded";
      const N = A.transitional || qr;
      A.timeoutErrorMessage && (S = A.timeoutErrorMessage), n(new G(
        S,
        N.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
        A,
        l
      )), l = null;
    }, wA.isStandardBrowserEnv) {
      const k = (A.withCredentials || Rs(d)) && A.xsrfCookieName && Os.read(A.xsrfCookieName);
      k && o.set(A.xsrfHeaderName, k);
    }
    r === void 0 && o.setContentType(null), "setRequestHeader" in l && Q.forEach(o.toJSON(), function(S, N) {
      l.setRequestHeader(N, S);
    }), Q.isUndefined(A.withCredentials) || (l.withCredentials = !!A.withCredentials), i && i !== "json" && (l.responseType = A.responseType), typeof A.onDownloadProgress == "function" && l.addEventListener("progress", Jn(A.onDownloadProgress, !0)), typeof A.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", Jn(A.onUploadProgress)), (A.cancelToken || A.signal) && (s = (k) => {
      l && (n(!k || k.type ? new ht(null, A, l) : k), l.abort(), l = null);
    }, A.cancelToken && A.cancelToken.subscribe(s), A.signal && (A.signal.aborted ? s() : A.signal.addEventListener("abort", s)));
    const y = Ns(d);
    if (y && wA.protocols.indexOf(y) === -1) {
      n(new G("Unsupported protocol " + y + ":", G.ERR_BAD_REQUEST, A));
      return;
    }
    l.send(r || null);
  });
}, xt = {
  http: as,
  xhr: Vs
};
Q.forEach(xt, (A, t) => {
  if (A) {
    try {
      Object.defineProperty(A, "name", { value: t });
    } catch {
    }
    Object.defineProperty(A, "adapterName", { value: t });
  }
});
const xs = {
  getAdapter: (A) => {
    A = Q.isArray(A) ? A : [A];
    const { length: t } = A;
    let e, n;
    for (let r = 0; r < t && (e = A[r], !(n = Q.isString(e) ? xt[e.toLowerCase()] : e)); r++)
      ;
    if (!n)
      throw n === !1 ? new G(
        `Adapter ${e} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        Q.hasOwnProp(xt, e) ? `Adapter '${e}' is not available in the build` : `Unknown adapter '${e}'`
      );
    if (!Q.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: xt
};
function Ce(A) {
  if (A.cancelToken && A.cancelToken.throwIfRequested(), A.signal && A.signal.aborted)
    throw new ht(null, A);
}
function qn(A) {
  return Ce(A), A.headers = SA.from(A.headers), A.data = pe.call(
    A,
    A.transformRequest
  ), ["post", "put", "patch"].indexOf(A.method) !== -1 && A.headers.setContentType("application/x-www-form-urlencoded", !1), xs.getAdapter(A.adapter || Le.adapter)(A).then(function(n) {
    return Ce(A), n.data = pe.call(
      A,
      A.transformResponse,
      n
    ), n.headers = SA.from(n.headers), n;
  }, function(n) {
    return xr(n) || (Ce(A), n && n.response && (n.response.data = pe.call(
      A,
      A.transformResponse,
      n.response
    ), n.response.headers = SA.from(n.response.headers))), Promise.reject(n);
  });
}
const Vn = (A) => A instanceof SA ? A.toJSON() : A;
function at(A, t) {
  t = t || {};
  const e = {};
  function n(l, d, a) {
    return Q.isPlainObject(l) && Q.isPlainObject(d) ? Q.merge.call({ caseless: a }, l, d) : Q.isPlainObject(d) ? Q.merge({}, d) : Q.isArray(d) ? d.slice() : d;
  }
  function r(l, d, a) {
    if (Q.isUndefined(d)) {
      if (!Q.isUndefined(l))
        return n(void 0, l, a);
    } else
      return n(l, d, a);
  }
  function o(l, d) {
    if (!Q.isUndefined(d))
      return n(void 0, d);
  }
  function i(l, d) {
    if (Q.isUndefined(d)) {
      if (!Q.isUndefined(l))
        return n(void 0, l);
    } else
      return n(void 0, d);
  }
  function s(l, d, a) {
    if (a in t)
      return n(l, d);
    if (a in A)
      return n(void 0, l);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (l, d) => r(Vn(l), Vn(d), !0)
  };
  return Q.forEach(Object.keys(Object.assign({}, A, t)), function(d) {
    const a = c[d] || r, y = a(A[d], t[d], d);
    Q.isUndefined(y) && a !== s || (e[d] = y);
  }), e;
}
const Tr = "1.4.0", We = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((A, t) => {
  We[A] = function(n) {
    return typeof n === A || "a" + (t < 1 ? "n " : " ") + A;
  };
});
const xn = {};
We.transitional = function(t, e, n) {
  function r(o, i) {
    return "[Axios v" + Tr + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, s) => {
    if (t === !1)
      throw new G(
        r(i, " has been removed" + (e ? " in " + e : "")),
        G.ERR_DEPRECATED
      );
    return e && !xn[i] && (xn[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), t ? t(o, i, s) : !0;
  };
};
function Us(A, t, e) {
  if (typeof A != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(A);
  let r = n.length;
  for (; r-- > 0; ) {
    const o = n[r], i = t[o];
    if (i) {
      const s = A[o], c = s === void 0 || i(s, o, A);
      if (c !== !0)
        throw new G("option " + o + " must be " + c, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new G("Unknown option " + o, G.ERR_BAD_OPTION);
  }
}
const Oe = {
  assertOptions: Us,
  validators: We
}, PA = Oe.validators;
class zt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Rn(),
      response: new Rn()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, e) {
    typeof t == "string" ? (e = e || {}, e.url = t) : e = t || {}, e = at(this.defaults, e);
    const { transitional: n, paramsSerializer: r, headers: o } = e;
    n !== void 0 && Oe.assertOptions(n, {
      silentJSONParsing: PA.transitional(PA.boolean),
      forcedJSONParsing: PA.transitional(PA.boolean),
      clarifyTimeoutError: PA.transitional(PA.boolean)
    }, !1), r != null && (Q.isFunction(r) ? e.paramsSerializer = {
      serialize: r
    } : Oe.assertOptions(r, {
      encode: PA.function,
      serialize: PA.function
    }, !0)), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = o && Q.merge(
      o.common,
      o[e.method]
    ), i && Q.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (S) => {
        delete o[S];
      }
    ), e.headers = SA.concat(i, o);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(N) {
      typeof N.runWhen == "function" && N.runWhen(e) === !1 || (c = c && N.synchronous, s.unshift(N.fulfilled, N.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(N) {
      l.push(N.fulfilled, N.rejected);
    });
    let d, a = 0, y;
    if (!c) {
      const S = [qn.bind(this), void 0];
      for (S.unshift.apply(S, s), S.push.apply(S, l), y = S.length, d = Promise.resolve(e); a < y; )
        d = d.then(S[a++], S[a++]);
      return d;
    }
    y = s.length;
    let k = e;
    for (a = 0; a < y; ) {
      const S = s[a++], N = s[a++];
      try {
        k = S(k);
      } catch (z) {
        N.call(this, z);
        break;
      }
    }
    try {
      d = qn.call(this, k);
    } catch (S) {
      return Promise.reject(S);
    }
    for (a = 0, y = l.length; a < y; )
      d = d.then(l[a++], l[a++]);
    return d;
  }
  getUri(t) {
    t = at(this.defaults, t);
    const e = Ur(t.baseURL, t.url);
    return Jr(e, t.params, t.paramsSerializer);
  }
}
Q.forEach(["delete", "get", "head", "options"], function(t) {
  zt.prototype[t] = function(e, n) {
    return this.request(at(n || {}, {
      method: t,
      url: e,
      data: (n || {}).data
    }));
  };
});
Q.forEach(["post", "put", "patch"], function(t) {
  function e(n) {
    return function(o, i, s) {
      return this.request(at(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  zt.prototype[t] = e(), zt.prototype[t + "Form"] = e(!0);
});
const Ut = zt;
class Ke {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(o) {
      e = o;
    });
    const n = this;
    this.promise.then((r) => {
      if (!n._listeners)
        return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](r);
      n._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const i = new Promise((s) => {
        n.subscribe(s), o = s;
      }).then(r);
      return i.cancel = function() {
        n.unsubscribe(o);
      }, i;
    }, t(function(o, i, s) {
      n.reason || (n.reason = new ht(o, i, s), e(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const e = this._listeners.indexOf(t);
    e !== -1 && this._listeners.splice(e, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ke(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
const Ts = Ke;
function Zs(A) {
  return function(e) {
    return A.apply(null, e);
  };
}
function js(A) {
  return Q.isObject(A) && A.isAxiosError === !0;
}
const Pe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Pe).forEach(([A, t]) => {
  Pe[t] = A;
});
const Xs = Pe;
function Zr(A) {
  const t = new Ut(A), e = hr(Ut.prototype.request, t);
  return Q.extend(e, Ut.prototype, t, { allOwnKeys: !0 }), Q.extend(e, t, null, { allOwnKeys: !0 }), e.create = function(r) {
    return Zr(at(A, r));
  }, e;
}
const tA = Zr(Le);
tA.Axios = Ut;
tA.CanceledError = ht;
tA.CancelToken = Ts;
tA.isCancel = xr;
tA.VERSION = Tr;
tA.toFormData = ee;
tA.AxiosError = G;
tA.Cancel = tA.CanceledError;
tA.all = function(t) {
  return Promise.all(t);
};
tA.spread = Zs;
tA.isAxiosError = js;
tA.mergeConfig = at;
tA.AxiosHeaders = SA;
tA.formToJSON = (A) => Vr(Q.isHTMLForm(A) ? new FormData(A) : A);
tA.HttpStatusCode = Xs;
tA.default = tA;
const zs = tA, Ls = window.location.hostname === "localhost", Ws = zs.create({
  baseURL: "https://localhost:8080/",
  withCredentials: !1
});
let Un = "https://dev-url.com/", Tn = "";
const dA = {
  apiClient: Ws,
  setBaseURL: function(A, t) {
    Ls ? this.apiClient.defaults.baseURL = A || Un : this.apiClient.defaults.baseURL = t || Tn, Un = A, Tn = t;
  },
  getBaseURL: function() {
    return this.apiClient.defaults.baseURL;
  }
};
function Ks() {
  const A = oA("nopwd_request", "api/requestloginkey", sessionStorage), t = oA("nopwd_verify", "api/verifyaccess", sessionStorage), e = oA("nopwd_confirm", "api/confirmaccess", sessionStorage), n = oA("nopwd_logout", "api/logout", sessionStorage), r = oA("nopwd_dev", "http://localhost:3000/", sessionStorage), o = oA("nopwd_prod", "https://www.nopwd.com/", sessionStorage), i = oA("nopwd_app", "/app", sessionStorage), s = oA("nopwd_login", "/auth/login", sessionStorage), c = oA("nopwd_log", !1, sessionStorage), l = wi();
  function d(C, R) {
    C != null && C != null && C != "" && (r.value = C), R != null && R != null && R != "" && (o.value = R);
  }
  function a(C, R) {
    C != null && C != null && C != "" && (i.value = C), R != null && R != null && R != "" && (s.value = R);
  }
  function y(C, R, P, q) {
    C != null && C != null && C != "" && (A.value = C), R != null && R != null && R != "" && (t.value = R), P != null && P != null && P != "" && (e.value = P), q != null && q != null && q != "" && (n.value = q);
  }
  const k = nA(!1), S = nA(!1), N = nA(0), z = oA("nopwd_siteid", jA.EMPTY, sessionStorage), X = oA("nopwd_sitecallid", jA.EMPTY, sessionStorage), T = oA("nopwd_loginid", jA.EMPTY, sessionStorage), U = oA("nopwd_auth", 0, sessionStorage), V = oA("nopwd_session", "", sessionStorage), { t: I } = Qr();
  function M() {
    return {
      headers: {
        Accept: "application/json",
        "X-LoginId": T.value,
        "X-SiteCallId": X.value,
        "Content-Type": "application/json"
      }
    };
  }
  const v = nA(!1), p = nA(""), g = nA(I("auth.prepare")), B = nA({ id: T.value, code: null, value: null, subid: null, userid: null, count: null, page: null, fromdate: null });
  async function f() {
    if (T.value = jA.EMPTY, T.value === jA.EMPTY.toString()) {
      g.value = I("auth.loading"), T.value = jA.create().toString(), B.value.id = T.value, c.value && console.log("Login: " + T.value), dA.setBaseURL(r.value, o.value);
      let C = dA.getBaseURL() + A.value;
      return await dA.apiClient.get(C, M()).then((R) => {
        const P = R.data;
        return P.success ? (g.value = "", p.value = "https://www.nopwd.com?loginid=" + T.value, k.value = P.success, N.value = P.code, U.value = 1, setTimeout(u, 1e3), v ? g.value = I("auth.codedark") : g.value = I("auth.codelight"), 1) : (g.value = I("auth.codeerror"), -1);
      }).catch((R) => (console.log(R), S.value = !0, g.value = I("auth.codeerror"), -1));
    } else
      return v ? g.value = I("auth.codedark") : g.value = I("auth.codelight"), u(), 0;
  }
  async function u() {
    dA.setBaseURL(r.value, o.value);
    let C = dA.getBaseURL() + t.value;
    return c.value && console.log("Check: " + T.value), await dA.apiClient.get(C, M()).then(async (R) => {
      const P = R.data;
      if (P.success)
        return k.value = P.success, N.value = P.code, P.code > 0 ? (U.value = 2, X.value = P.data.sitecallid, V.value = JSON.stringify(P.data), setTimeout(D, 2e4), (i.value !== void 0 || i.value !== null || i.value !== "") && l.push(i.value), 1) : P.code < 0 ? (U.value = 0, D(), -1) : (setTimeout(u, 1e3), v ? g.value = I("auth.codedark") : g.value = I("auth.codelight"), 0);
      await f();
    }).catch((R) => (c.value && console.log(R), S.value = !0, g.value = I("auth.codeerror"), -1));
  }
  async function D() {
    if (U.value < 2) {
      w();
      return;
    }
    dA.setBaseURL(r.value, o.value), c.value && console.log("Check: " + T.value);
    let C = dA.getBaseURL() + e.value;
    await dA.apiClient.get(C, M()).then((R) => {
      const P = R.data;
      P.success && (k.value = P.success, N.value = P.code, P.code > 0 ? setTimeout(D, 2e4) : (U.value = 0, V.value = "", (s.value !== void 0 || s.value !== null || s.value !== "") && l.push(s.value)));
    }).catch((R) => {
      c.value && console.log(R), S.value = !0, g.value = I("auth.codeerror");
    });
  }
  async function w() {
    U.value = 0, dA.setBaseURL(r.value, o.value), c.value && console.log("Logout: " + T.value);
    let C = dA.getBaseURL() + n.value;
    await dA.apiClient.get(C, M()).then((R) => {
      const P = R.data;
      k.value = P.success, N.value = P.code, k.value && (U.value = 0, T.value = jA.EMPTY.toString()), (s.value !== void 0 || s.value !== null || s.value !== "") && l.push(s.value);
    });
  }
  return {
    auth: U,
    success: k,
    code: N,
    IDLogin: T,
    IDSiteCall: X,
    IDSite: z,
    QRCode: p,
    Message: g,
    is_error: S,
    loginQRCode: f,
    checkAccess: D,
    checkQRLogin: u,
    logout: w,
    config: M,
    setUrls: y,
    setRoutes: a,
    setBase: d
  };
}
var Gs = Object.defineProperty, Fs = (A, t, e) => t in A ? Gs(A, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : A[t] = e, aA = (A, t, e) => (Fs(A, typeof t != "symbol" ? t + "" : t, e), e);
function Hs(A, t) {
  const e = /* @__PURE__ */ Object.create(null), n = A.split(",");
  for (let r = 0; r < n.length; r++)
    e[n[r]] = !0;
  return t ? (r) => !!e[r.toLowerCase()] : (r) => !!e[r];
}
const Me = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ys = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], pA = () => {
}, _s = /^on[^a-z]/, $s = (A) => _s.test(A), lA = Object.assign, jr = (A, t) => {
  const e = A.indexOf(t);
  e > -1 && A.splice(e, 1);
}, Aa = Object.prototype.hasOwnProperty, oe = (A, t) => Aa.call(A, t), K = Array.isArray, LA = (A) => ie(A) === "[object Map]", Xr = (A) => ie(A) === "[object Set]", F = (A) => typeof A == "function", BA = (A) => typeof A == "string", Ge = (A) => typeof A == "symbol", $ = (A) => A !== null && typeof A == "object", Fe = (A) => $(A) && F(A.then) && F(A.catch), zr = Object.prototype.toString, ie = (A) => zr.call(A), Lr = (A) => ie(A).slice(8, -1), Wr = (A) => ie(A) === "[object Object]", He = (A) => BA(A) && A !== "NaN" && A[0] !== "-" && "" + parseInt(A, 10) === A, Kr = (A) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (e) => t[e] || (t[e] = A(e));
}, Gr = Kr(
  (A) => A.charAt(0).toUpperCase() + A.slice(1)
), ta = Kr(
  (A) => A ? `on${Gr(A)}` : ""
), Lt = (A, t) => !Object.is(A, t), ea = (A) => {
  const t = BA(A) ? Number(A) : NaN;
  return isNaN(t) ? A : t;
};
let Zn;
const Re = () => Zn || (Zn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ye(A) {
  if (K(A)) {
    const t = {};
    for (let e = 0; e < A.length; e++) {
      const n = A[e], r = BA(n) ? ia(n) : Ye(n);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (BA(A) || $(A))
    return A;
}
const na = /;(?![^(]*\))/g, ra = /:([^]+)/, oa = /\/\*[^]*?\*\//g;
function ia(A) {
  const t = {};
  return A.replace(oa, "").split(na).forEach((e) => {
    if (e) {
      const n = e.split(ra);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function rt(A) {
  let t = "";
  if (BA(A))
    t = A;
  else if (K(A))
    for (let e = 0; e < A.length; e++) {
      const n = rt(A[e]);
      n && (t += n + " ");
    }
  else if ($(A))
    for (const e in A)
      A[e] && (t += e + " ");
  return t.trim();
}
const sa = (A) => BA(A) ? A : A == null ? "" : K(A) || $(A) && (A.toString === zr || !F(A.toString)) ? JSON.stringify(A, Fr, 2) : String(A), Fr = (A, t) => t && t.__v_isRef ? Fr(A, t.value) : LA(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((e, [n, r]) => (e[`${n} =>`] = r, e), {})
} : Xr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : $(t) && !K(t) && !Wr(t) ? String(t) : t;
function jn(A, ...t) {
  console.warn(`[Vue warn] ${A}`, ...t);
}
let Hr;
function aa(A, t = Hr) {
  t && t.active && t.effects.push(A);
}
function ca() {
  return Hr;
}
const Et = (A) => {
  const t = new Set(A);
  return t.w = 0, t.n = 0, t;
}, Yr = (A) => (A.w & UA) > 0, _r = (A) => (A.n & UA) > 0, ua = ({ deps: A }) => {
  if (A.length)
    for (let t = 0; t < A.length; t++)
      A[t].w |= UA;
}, la = (A) => {
  const { deps: t } = A;
  if (t.length) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      Yr(r) && !_r(r) ? r.delete(A) : t[e++] = r, r.w &= ~UA, r.n &= ~UA;
    }
    t.length = e;
  }
}, Ne = /* @__PURE__ */ new WeakMap();
let gt = 0, UA = 1;
const Je = 30;
let sA;
const WA = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), qe = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class $r {
  constructor(t, e = null, n) {
    this.fn = t, this.scheduler = e, this.active = !0, this.deps = [], this.parent = void 0, aa(this, n);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = sA, e = VA;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = sA, sA = this, VA = !0, UA = 1 << ++gt, gt <= Je ? ua(this) : Xn(this), this.fn();
    } finally {
      gt <= Je && la(this), UA = 1 << --gt, sA = this.parent, VA = e, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    sA === this ? this.deferStop = !0 : this.active && (Xn(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Xn(A) {
  const { deps: t } = A;
  if (t.length) {
    for (let e = 0; e < t.length; e++)
      t[e].delete(A);
    t.length = 0;
  }
}
let VA = !0;
const Ao = [];
function se() {
  Ao.push(VA), VA = !1;
}
function ae() {
  const A = Ao.pop();
  VA = A === void 0 ? !0 : A;
}
function QA(A, t, e) {
  if (VA && sA) {
    let n = Ne.get(A);
    n || Ne.set(A, n = /* @__PURE__ */ new Map());
    let r = n.get(e);
    r || n.set(e, r = Et());
    const o = process.env.NODE_ENV !== "production" ? { effect: sA, target: A, type: t, key: e } : void 0;
    Ve(r, o);
  }
}
function Ve(A, t) {
  let e = !1;
  gt <= Je ? _r(A) || (A.n |= UA, e = !Yr(A)) : e = !A.has(sA), e && (A.add(sA), sA.deps.push(A), process.env.NODE_ENV !== "production" && sA.onTrack && sA.onTrack(
    lA(
      {
        effect: sA
      },
      t
    )
  ));
}
function TA(A, t, e, n, r, o) {
  const i = Ne.get(A);
  if (!i)
    return;
  let s = [];
  if (t === "clear")
    s = [...i.values()];
  else if (e === "length" && K(A)) {
    const l = Number(n);
    i.forEach((d, a) => {
      (a === "length" || a >= l) && s.push(d);
    });
  } else
    switch (e !== void 0 && s.push(i.get(e)), t) {
      case "add":
        K(A) ? He(e) && s.push(i.get("length")) : (s.push(i.get(WA)), LA(A) && s.push(i.get(qe)));
        break;
      case "delete":
        K(A) || (s.push(i.get(WA)), LA(A) && s.push(i.get(qe)));
        break;
      case "set":
        LA(A) && s.push(i.get(WA));
        break;
    }
  const c = process.env.NODE_ENV !== "production" ? { target: A, type: t, key: e, newValue: n, oldValue: r, oldTarget: o } : void 0;
  if (s.length === 1)
    s[0] && (process.env.NODE_ENV !== "production" ? et(s[0], c) : et(s[0]));
  else {
    const l = [];
    for (const d of s)
      d && l.push(...d);
    process.env.NODE_ENV !== "production" ? et(Et(l), c) : et(Et(l));
  }
}
function et(A, t) {
  const e = K(A) ? A : [...A];
  for (const n of e)
    n.computed && zn(n, t);
  for (const n of e)
    n.computed || zn(n, t);
}
function zn(A, t) {
  (A !== sA || A.allowRecurse) && (process.env.NODE_ENV !== "production" && A.onTrigger && A.onTrigger(lA({ effect: A }, t)), A.scheduler ? A.scheduler() : A.run());
}
const fa = /* @__PURE__ */ Hs("__proto__,__v_isRef,__isVue"), to = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((A) => A !== "arguments" && A !== "caller").map((A) => Symbol[A]).filter(Ge)
), ga = /* @__PURE__ */ eo(), da = /* @__PURE__ */ eo(!0), Ln = /* @__PURE__ */ pa();
function pa() {
  const A = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    A[t] = function(...e) {
      const n = L(this);
      for (let o = 0, i = this.length; o < i; o++)
        QA(n, "get", o + "");
      const r = n[t](...e);
      return r === -1 || r === !1 ? n[t](...e.map(L)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    A[t] = function(...e) {
      se();
      const n = L(this)[t].apply(this, e);
      return ae(), n;
    };
  }), A;
}
function Ca(A) {
  const t = L(this);
  return QA(t, "has", A), t.hasOwnProperty(A);
}
function eo(A = !1, t = !1) {
  return function(e, n, r) {
    if (n === "__v_isReactive")
      return !A;
    if (n === "__v_isReadonly")
      return A;
    if (n === "__v_isShallow")
      return t;
    if (n === "__v_raw" && r === (A ? t ? Ma : io : t ? Pa : oo).get(e))
      return e;
    const o = K(e);
    if (!A) {
      if (o && oe(Ln, n))
        return Reflect.get(Ln, n, r);
      if (n === "hasOwnProperty")
        return Ca;
    }
    const i = Reflect.get(e, n, r);
    return (Ge(n) ? to.has(n) : fa(n)) || (A || QA(e, "get", n), t) ? i : cA(i) ? o && He(n) ? i : i.value : $(i) ? A ? so(i) : $e(i) : i;
  };
}
const Ea = /* @__PURE__ */ Ba();
function Ba(A = !1) {
  return function(t, e, n, r) {
    let o = t[e];
    if (HA(o) && cA(o) && !cA(n))
      return !1;
    if (!A && (!xe(n) && !HA(n) && (o = L(o), n = L(n)), !K(t) && cA(o) && !cA(n)))
      return o.value = n, !0;
    const i = K(t) && He(e) ? Number(e) < t.length : oe(t, e), s = Reflect.set(t, e, n, r);
    return t === L(r) && (i ? Lt(n, o) && TA(t, "set", e, n, o) : TA(t, "add", e, n)), s;
  };
}
function Qa(A, t) {
  const e = oe(A, t), n = A[t], r = Reflect.deleteProperty(A, t);
  return r && e && TA(A, "delete", t, void 0, n), r;
}
function ya(A, t) {
  const e = Reflect.has(A, t);
  return (!Ge(t) || !to.has(t)) && QA(A, "has", t), e;
}
function Ia(A) {
  return QA(A, "iterate", K(A) ? "length" : WA), Reflect.ownKeys(A);
}
const va = {
  get: ga,
  set: Ea,
  deleteProperty: Qa,
  has: ya,
  ownKeys: Ia
}, ha = {
  get: da,
  set(A, t) {
    return process.env.NODE_ENV !== "production" && jn(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      A
    ), !0;
  },
  deleteProperty(A, t) {
    return process.env.NODE_ENV !== "production" && jn(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      A
    ), !0;
  }
}, _e = (A) => A, ce = (A) => Reflect.getPrototypeOf(A);
function bt(A, t, e = !1, n = !1) {
  A = A.__v_raw;
  const r = L(A), o = L(t);
  e || (t !== o && QA(r, "get", t), QA(r, "get", o));
  const { has: i } = ce(r), s = n ? _e : e ? tn : An;
  if (i.call(r, t))
    return s(A.get(t));
  if (i.call(r, o))
    return s(A.get(o));
  A !== r && A.get(t);
}
function kt(A, t = !1) {
  const e = this.__v_raw, n = L(e), r = L(A);
  return t || (A !== r && QA(n, "has", A), QA(n, "has", r)), A === r ? e.has(A) : e.has(A) || e.has(r);
}
function St(A, t = !1) {
  return A = A.__v_raw, !t && QA(L(A), "iterate", WA), Reflect.get(A, "size", A);
}
function Wn(A) {
  A = L(A);
  const t = L(this);
  return ce(t).has.call(t, A) || (t.add(A), TA(t, "add", A, A)), this;
}
function Kn(A, t) {
  t = L(t);
  const e = L(this), { has: n, get: r } = ce(e);
  let o = n.call(e, A);
  o ? process.env.NODE_ENV !== "production" && ro(e, n, A) : (A = L(A), o = n.call(e, A));
  const i = r.call(e, A);
  return e.set(A, t), o ? Lt(t, i) && TA(e, "set", A, t, i) : TA(e, "add", A, t), this;
}
function Gn(A) {
  const t = L(this), { has: e, get: n } = ce(t);
  let r = e.call(t, A);
  r ? process.env.NODE_ENV !== "production" && ro(t, e, A) : (A = L(A), r = e.call(t, A));
  const o = n ? n.call(t, A) : void 0, i = t.delete(A);
  return r && TA(t, "delete", A, void 0, o), i;
}
function Fn() {
  const A = L(this), t = A.size !== 0, e = process.env.NODE_ENV !== "production" ? LA(A) ? new Map(A) : new Set(A) : void 0, n = A.clear();
  return t && TA(A, "clear", void 0, void 0, e), n;
}
function Ot(A, t) {
  return function(e, n) {
    const r = this, o = r.__v_raw, i = L(o), s = t ? _e : A ? tn : An;
    return !A && QA(i, "iterate", WA), o.forEach((c, l) => e.call(n, s(c), s(l), r));
  };
}
function Pt(A, t, e) {
  return function(...n) {
    const r = this.__v_raw, o = L(r), i = LA(o), s = A === "entries" || A === Symbol.iterator && i, c = A === "keys" && i, l = r[A](...n), d = e ? _e : t ? tn : An;
    return !t && QA(
      o,
      "iterate",
      c ? qe : WA
    ), {
      // iterator protocol
      next() {
        const { value: a, done: y } = l.next();
        return y ? { value: a, done: y } : {
          value: s ? [d(a[0]), d(a[1])] : d(a),
          done: y
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function MA(A) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const e = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${Gr(A)} operation ${e}failed: target is readonly.`,
        L(this)
      );
    }
    return A === "delete" ? !1 : this;
  };
}
function ma() {
  const A = {
    get(r) {
      return bt(this, r);
    },
    get size() {
      return St(this);
    },
    has: kt,
    add: Wn,
    set: Kn,
    delete: Gn,
    clear: Fn,
    forEach: Ot(!1, !1)
  }, t = {
    get(r) {
      return bt(this, r, !1, !0);
    },
    get size() {
      return St(this);
    },
    has: kt,
    add: Wn,
    set: Kn,
    delete: Gn,
    clear: Fn,
    forEach: Ot(!1, !0)
  }, e = {
    get(r) {
      return bt(this, r, !0);
    },
    get size() {
      return St(this, !0);
    },
    has(r) {
      return kt.call(this, r, !0);
    },
    add: MA("add"),
    set: MA("set"),
    delete: MA("delete"),
    clear: MA("clear"),
    forEach: Ot(!0, !1)
  }, n = {
    get(r) {
      return bt(this, r, !0, !0);
    },
    get size() {
      return St(this, !0);
    },
    has(r) {
      return kt.call(this, r, !0);
    },
    add: MA("add"),
    set: MA("set"),
    delete: MA("delete"),
    clear: MA("clear"),
    forEach: Ot(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    A[r] = Pt(
      r,
      !1,
      !1
    ), e[r] = Pt(
      r,
      !0,
      !1
    ), t[r] = Pt(
      r,
      !1,
      !0
    ), n[r] = Pt(
      r,
      !0,
      !0
    );
  }), [
    A,
    e,
    t,
    n
  ];
}
const [
  Da,
  wa,
  ba,
  ka
] = /* @__PURE__ */ ma();
function no(A, t) {
  const e = t ? A ? ka : ba : A ? wa : Da;
  return (n, r, o) => r === "__v_isReactive" ? !A : r === "__v_isReadonly" ? A : r === "__v_raw" ? n : Reflect.get(
    oe(e, r) && r in n ? e : n,
    r,
    o
  );
}
const Sa = {
  get: /* @__PURE__ */ no(!1, !1)
}, Oa = {
  get: /* @__PURE__ */ no(!0, !1)
};
function ro(A, t, e) {
  const n = L(e);
  if (n !== e && t.call(A, n)) {
    const r = Lr(A);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const oo = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap();
function Ra(A) {
  switch (A) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Na(A) {
  return A.__v_skip || !Object.isExtensible(A) ? 0 : Ra(Lr(A));
}
function $e(A) {
  return HA(A) ? A : ao(
    A,
    !1,
    va,
    Sa,
    oo
  );
}
function so(A) {
  return ao(
    A,
    !0,
    ha,
    Oa,
    io
  );
}
function ao(A, t, e, n, r) {
  if (!$(A))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(A)}`), A;
  if (A.__v_raw && !(t && A.__v_isReactive))
    return A;
  const o = r.get(A);
  if (o)
    return o;
  const i = Na(A);
  if (i === 0)
    return A;
  const s = new Proxy(
    A,
    i === 2 ? n : e
  );
  return r.set(A, s), s;
}
function KA(A) {
  return HA(A) ? KA(A.__v_raw) : !!(A && A.__v_isReactive);
}
function HA(A) {
  return !!(A && A.__v_isReadonly);
}
function xe(A) {
  return !!(A && A.__v_isShallow);
}
function Ue(A) {
  return KA(A) || HA(A);
}
function L(A) {
  const t = A && A.__v_raw;
  return t ? L(t) : A;
}
const An = (A) => $(A) ? $e(A) : A, tn = (A) => $(A) ? so(A) : A;
function Ja(A) {
  VA && sA && (A = L(A), process.env.NODE_ENV !== "production" ? Ve(A.dep || (A.dep = Et()), {
    target: A,
    type: "get",
    key: "value"
  }) : Ve(A.dep || (A.dep = Et())));
}
function qa(A, t) {
  A = L(A);
  const e = A.dep;
  e && (process.env.NODE_ENV !== "production" ? et(e, {
    target: A,
    type: "set",
    key: "value",
    newValue: t
  }) : et(e));
}
function cA(A) {
  return !!(A && A.__v_isRef === !0);
}
function Tt(A) {
  return cA(A) ? A.value : A;
}
const Va = {
  get: (A, t, e) => Tt(Reflect.get(A, t, e)),
  set: (A, t, e, n) => {
    const r = A[t];
    return cA(r) && !cA(e) ? (r.value = e, !0) : Reflect.set(A, t, e, n);
  }
};
function xa(A) {
  return KA(A) ? A : new Proxy(A, Va);
}
class Ua {
  constructor(t, e, n, r) {
    this._setter = e, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new $r(t, () => {
      this._dirty || (this._dirty = !0, qa(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = n;
  }
  get value() {
    const t = L(this);
    return Ja(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Ta(A, t, e = !1) {
  let n, r;
  const o = F(A);
  o ? (n = A, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : pA) : (n = A.get, r = A.set);
  const i = new Ua(n, r, o || !r, e);
  return process.env.NODE_ENV !== "production" && t && !e && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const GA = [];
function co(A) {
  GA.push(A);
}
function uo() {
  GA.pop();
}
function W(A, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  se();
  const e = GA.length ? GA[GA.length - 1].component : null, n = e && e.appContext.config.warnHandler, r = Za();
  if (n)
    FA(
      n,
      e,
      11,
      [
        A + t.join(""),
        e && e.proxy,
        r.map(
          ({ vnode: o }) => `at <${fn(e, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${A}`, ...t];
    r.length && o.push(`
`, ...ja(r)), console.warn(...o);
  }
  ae();
}
function Za() {
  let A = GA[GA.length - 1];
  if (!A)
    return [];
  const t = [];
  for (; A; ) {
    const e = t[0];
    e && e.vnode === A ? e.recurseCount++ : t.push({
      vnode: A,
      recurseCount: 0
    });
    const n = A.component && A.component.parent;
    A = n && n.vnode;
  }
  return t;
}
function ja(A) {
  const t = [];
  return A.forEach((e, n) => {
    t.push(...n === 0 ? [] : [`
`], ...Xa(e));
  }), t;
}
function Xa({ vnode: A, recurseCount: t }) {
  const e = t > 0 ? `... (${t} recursive calls)` : "", n = A.component ? A.component.parent == null : !1, r = ` at <${fn(
    A.component,
    A.type,
    n
  )}`, o = ">" + e;
  return A.props ? [r, ...za(A.props), o] : [r + o];
}
function za(A) {
  const t = [], e = Object.keys(A);
  return e.slice(0, 3).forEach((n) => {
    t.push(...lo(n, A[n]));
  }), e.length > 3 && t.push(" ..."), t;
}
function lo(A, t, e) {
  return BA(t) ? (t = JSON.stringify(t), e ? t : [`${A}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? e ? t : [`${A}=${t}`] : cA(t) ? (t = lo(A, L(t.value), !0), e ? t : [`${A}=Ref<`, t, ">"]) : F(t) ? [`${A}=fn${t.name ? `<${t.name}>` : ""}`] : (t = L(t), e ? t : [`${A}=`, t]);
}
function La(A, t) {
  process.env.NODE_ENV !== "production" && A !== void 0 && (typeof A != "number" ? W(`${t} is not a valid number - got ${JSON.stringify(A)}.`) : isNaN(A) && W(`${t} is NaN - the duration expression might be incorrect.`));
}
const en = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function FA(A, t, e, n) {
  let r;
  try {
    r = n ? A(...n) : A();
  } catch (o) {
    nn(o, t, e);
  }
  return r;
}
function Bt(A, t, e, n) {
  if (F(A)) {
    const o = FA(A, t, e, n);
    return o && Fe(o) && o.catch((i) => {
      nn(i, t, e);
    }), o;
  }
  const r = [];
  for (let o = 0; o < A.length; o++)
    r.push(Bt(A[o], t, e, n));
  return r;
}
function nn(A, t, e, n = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, s = process.env.NODE_ENV !== "production" ? en[e] : e;
    for (; o; ) {
      const l = o.ec;
      if (l) {
        for (let d = 0; d < l.length; d++)
          if (l[d](A, i, s) === !1)
            return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      FA(
        c,
        null,
        10,
        [A, i, s]
      );
      return;
    }
  }
  Wa(A, e, r, n);
}
function Wa(A, t, e, n = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = en[t];
    if (e && co(e), W(`Unhandled error${r ? ` during execution of ${r}` : ""}`), e && uo(), n)
      throw A;
    console.error(A);
  } else
    console.error(A);
}
let Wt = !1, Te = !1;
const hA = [];
let JA = 0;
const ot = [];
let DA = null, NA = 0;
const Ka = /* @__PURE__ */ Promise.resolve(), Ga = 100;
function Fa(A) {
  let t = JA + 1, e = hA.length;
  for (; t < e; ) {
    const n = t + e >>> 1;
    Qt(hA[n]) < A ? t = n + 1 : e = n;
  }
  return t;
}
function fo(A) {
  (!hA.length || !hA.includes(
    A,
    Wt && A.allowRecurse ? JA + 1 : JA
  )) && (A.id == null ? hA.push(A) : hA.splice(Fa(A.id), 0, A), go());
}
function go() {
  !Wt && !Te && (Te = !0, Ka.then(po));
}
function rn(A) {
  K(A) ? ot.push(...A) : (!DA || !DA.includes(
    A,
    A.allowRecurse ? NA + 1 : NA
  )) && ot.push(A), go();
}
function Ha(A) {
  if (ot.length) {
    const t = [...new Set(ot)];
    if (ot.length = 0, DA) {
      DA.push(...t);
      return;
    }
    for (DA = t, process.env.NODE_ENV !== "production" && (A = A || /* @__PURE__ */ new Map()), DA.sort((e, n) => Qt(e) - Qt(n)), NA = 0; NA < DA.length; NA++)
      process.env.NODE_ENV !== "production" && Co(A, DA[NA]) || DA[NA]();
    DA = null, NA = 0;
  }
}
const Qt = (A) => A.id == null ? 1 / 0 : A.id, Ya = (A, t) => {
  const e = Qt(A) - Qt(t);
  if (e === 0) {
    if (A.pre && !t.pre)
      return -1;
    if (t.pre && !A.pre)
      return 1;
  }
  return e;
};
function po(A) {
  Te = !1, Wt = !0, process.env.NODE_ENV !== "production" && (A = A || /* @__PURE__ */ new Map()), hA.sort(Ya);
  const t = process.env.NODE_ENV !== "production" ? (e) => Co(A, e) : pA;
  try {
    for (JA = 0; JA < hA.length; JA++) {
      const e = hA[JA];
      if (e && e.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(e))
          continue;
        FA(e, null, 14);
      }
    }
  } finally {
    JA = 0, hA.length = 0, Ha(A), Wt = !1, (hA.length || ot.length) && po(A);
  }
}
function Co(A, t) {
  if (!A.has(t))
    A.set(t, 1);
  else {
    const e = A.get(t);
    if (e > Ga) {
      const n = t.ownerInstance, r = n && Jo(n.type);
      return W(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      A.set(t, e + 1);
  }
}
const tt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Re().__VUE_HMR_RUNTIME__ = {
  createRecord: Ee(_a),
  rerender: Ee($a),
  reload: Ee(Ac)
});
const Kt = /* @__PURE__ */ new Map();
function _a(A, t) {
  return Kt.has(A) ? !1 : (Kt.set(A, {
    initialDef: pt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function pt(A) {
  return qo(A) ? A.__vccOpts : A;
}
function $a(A, t) {
  const e = Kt.get(A);
  e && (e.initialDef.render = t, [...e.instances].forEach((n) => {
    t && (n.render = t, pt(n.type).render = t), n.renderCache = [], n.update();
  }));
}
function Ac(A, t) {
  const e = Kt.get(A);
  if (!e)
    return;
  t = pt(t), Hn(e.initialDef, t);
  const n = [...e.instances];
  for (const r of n) {
    const o = pt(r.type);
    tt.has(o) || (o !== e.initialDef && Hn(o, t), tt.add(o)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (tt.add(o), r.ceReload(t.styles), tt.delete(o)) : r.parent ? fo(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  rn(() => {
    for (const r of n)
      tt.delete(
        pt(r.type)
      );
  });
}
function Hn(A, t) {
  lA(A, t);
  for (const e in A)
    e !== "__file" && !(e in t) && delete A[e];
}
function Ee(A) {
  return (t, e) => {
    try {
      return A(t, e);
    } catch (n) {
      console.error(n), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
function Eo(A, ...t) {
}
const tc = /* @__PURE__ */ ec(
  "component:updated"
  /* COMPONENT_UPDATED */
);
function ec(A) {
  return (t) => {
    Eo(
      A,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const nc = /* @__PURE__ */ Bo(
  "perf:start"
  /* PERFORMANCE_START */
), rc = /* @__PURE__ */ Bo(
  "perf:end"
  /* PERFORMANCE_END */
);
function Bo(A) {
  return (t, e, n) => {
    Eo(A, t.appContext.app, t.uid, t, e, n);
  };
}
let mA = null, Qo = null;
function Yn(A) {
  const t = mA;
  return mA = A, Qo = A && A.type.__scopeId || null, t;
}
function oc(A, t = mA, e) {
  if (!t || A._n)
    return A;
  const n = (...r) => {
    n._d && ir(-1);
    const o = Yn(t);
    let i;
    try {
      i = A(...r);
    } finally {
      Yn(o), n._d && ir(1);
    }
    return process.env.NODE_ENV !== "production" && tc(t), i;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ic(A) {
  let t;
  for (let e = 0; e < A.length; e++) {
    const n = A[e];
    if (an(n)) {
      if (n.type !== ct || n.children === "v-if") {
        if (t)
          return;
        t = n;
      }
    } else
      return;
  }
  return t;
}
function yo({ vnode: A, parent: t }, e) {
  for (; t && t.subTree === A; )
    (A = t.vnode).el = e, t = t.parent;
}
const sc = (A) => A.__isSuspense, ac = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(A, t, e, n, r, o, i, s, c, l) {
    A == null ? uc(
      t,
      e,
      n,
      r,
      o,
      i,
      s,
      c,
      l
    ) : lc(
      A,
      t,
      e,
      n,
      r,
      i,
      s,
      c,
      l
    );
  },
  hydrate: fc,
  create: on,
  normalize: gc
}, cc = ac;
function yt(A, t) {
  const e = A.props && A.props[t];
  F(e) && e();
}
function uc(A, t, e, n, r, o, i, s, c) {
  const {
    p: l,
    o: { createElement: d }
  } = c, a = d("div"), y = A.suspense = on(
    A,
    r,
    n,
    t,
    a,
    e,
    o,
    i,
    s,
    c
  );
  l(
    null,
    y.pendingBranch = A.ssContent,
    a,
    null,
    n,
    y,
    o,
    i
  ), y.deps > 0 ? (yt(A, "onPending"), yt(A, "onFallback"), l(
    null,
    A.ssFallback,
    t,
    e,
    n,
    null,
    // fallback tree will not have suspense context
    o,
    i
  ), it(y, A.ssFallback)) : y.resolve(!1, !0);
}
function lc(A, t, e, n, r, o, i, s, { p: c, um: l, o: { createElement: d } }) {
  const a = t.suspense = A.suspense;
  a.vnode = t, t.el = A.el;
  const y = t.ssContent, k = t.ssFallback, { activeBranch: S, pendingBranch: N, isInFallback: z, isHydrating: X } = a;
  if (N)
    a.pendingBranch = y, Ie(y, N) ? (c(
      N,
      y,
      a.hiddenContainer,
      null,
      r,
      a,
      o,
      i,
      s
    ), a.deps <= 0 ? a.resolve() : z && (c(
      S,
      k,
      e,
      n,
      r,
      null,
      // fallback tree will not have suspense context
      o,
      i,
      s
    ), it(a, k))) : (a.pendingId++, X ? (a.isHydrating = !1, a.activeBranch = N) : l(N, r, a), a.deps = 0, a.effects.length = 0, a.hiddenContainer = d("div"), z ? (c(
      null,
      y,
      a.hiddenContainer,
      null,
      r,
      a,
      o,
      i,
      s
    ), a.deps <= 0 ? a.resolve() : (c(
      S,
      k,
      e,
      n,
      r,
      null,
      // fallback tree will not have suspense context
      o,
      i,
      s
    ), it(a, k))) : S && Ie(y, S) ? (c(
      S,
      y,
      e,
      n,
      r,
      a,
      o,
      i,
      s
    ), a.resolve(!0)) : (c(
      null,
      y,
      a.hiddenContainer,
      null,
      r,
      a,
      o,
      i,
      s
    ), a.deps <= 0 && a.resolve()));
  else if (S && Ie(y, S))
    c(
      S,
      y,
      e,
      n,
      r,
      a,
      o,
      i,
      s
    ), it(a, y);
  else if (yt(t, "onPending"), a.pendingBranch = y, a.pendingId++, c(
    null,
    y,
    a.hiddenContainer,
    null,
    r,
    a,
    o,
    i,
    s
  ), a.deps <= 0)
    a.resolve();
  else {
    const { timeout: T, pendingId: U } = a;
    T > 0 ? setTimeout(() => {
      a.pendingId === U && a.fallback(k);
    }, T) : T === 0 && a.fallback(k);
  }
}
let _n = !1;
function on(A, t, e, n, r, o, i, s, c, l, d = !1) {
  process.env.NODE_ENV !== "production" && !_n && (_n = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: a,
    m: y,
    um: k,
    n: S,
    o: { parentNode: N, remove: z }
  } = l;
  let X;
  const T = pc(A);
  T && t != null && t.pendingBranch && (X = t.pendingId, t.deps++);
  const U = A.props ? ea(A.props.timeout) : void 0;
  process.env.NODE_ENV !== "production" && La(U, "Suspense timeout");
  const V = {
    vnode: A,
    parent: t,
    parentComponent: e,
    isSVG: i,
    container: n,
    hiddenContainer: r,
    anchor: o,
    deps: 0,
    pendingId: 0,
    timeout: typeof U == "number" ? U : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !0,
    isHydrating: d,
    isUnmounted: !1,
    effects: [],
    resolve(I = !1, M = !1) {
      if (process.env.NODE_ENV !== "production") {
        if (!I && !V.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (V.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: v,
        activeBranch: p,
        pendingBranch: g,
        pendingId: B,
        effects: f,
        parentComponent: u,
        container: D
      } = V;
      if (V.isHydrating)
        V.isHydrating = !1;
      else if (!I) {
        const R = p && g.transition && g.transition.mode === "out-in";
        R && (p.transition.afterLeave = () => {
          B === V.pendingId && y(g, D, P, 0);
        });
        let { anchor: P } = V;
        p && (P = S(p), k(p, u, V, !0)), R || y(g, D, P, 0);
      }
      it(V, g), V.pendingBranch = null, V.isInFallback = !1;
      let w = V.parent, C = !1;
      for (; w; ) {
        if (w.pendingBranch) {
          w.effects.push(...f), C = !0;
          break;
        }
        w = w.parent;
      }
      C || rn(f), V.effects = [], T && t && t.pendingBranch && X === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()), yt(v, "onResolve");
    },
    fallback(I) {
      if (!V.pendingBranch)
        return;
      const { vnode: M, activeBranch: v, parentComponent: p, container: g, isSVG: B } = V;
      yt(M, "onFallback");
      const f = S(v), u = () => {
        V.isInFallback && (a(
          null,
          I,
          g,
          f,
          p,
          null,
          // fallback tree will not have suspense context
          B,
          s,
          c
        ), it(V, I));
      }, D = I.transition && I.transition.mode === "out-in";
      D && (v.transition.afterLeave = u), V.isInFallback = !0, k(
        v,
        p,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), D || u();
    },
    move(I, M, v) {
      V.activeBranch && y(V.activeBranch, I, M, v), V.container = I;
    },
    next() {
      return V.activeBranch && S(V.activeBranch);
    },
    registerDep(I, M) {
      const v = !!V.pendingBranch;
      v && V.deps++;
      const p = I.vnode.el;
      I.asyncDep.catch((g) => {
        nn(g, I, 0);
      }).then((g) => {
        if (I.isUnmounted || V.isUnmounted || V.pendingId !== I.suspenseId)
          return;
        I.asyncResolved = !0;
        const { vnode: B } = I;
        process.env.NODE_ENV !== "production" && co(B), _c(I, g, !1), p && (B.el = p);
        const f = !p && I.subTree.el;
        M(
          I,
          B,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          N(p || I.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          p ? null : S(I.subTree),
          V,
          i,
          c
        ), f && z(f), yo(I, B.el), process.env.NODE_ENV !== "production" && uo(), v && --V.deps === 0 && V.resolve();
      });
    },
    unmount(I, M) {
      V.isUnmounted = !0, V.activeBranch && k(
        V.activeBranch,
        e,
        I,
        M
      ), V.pendingBranch && k(
        V.pendingBranch,
        e,
        I,
        M
      );
    }
  };
  return V;
}
function fc(A, t, e, n, r, o, i, s, c) {
  const l = t.suspense = on(
    t,
    n,
    e,
    A.parentNode,
    document.createElement("div"),
    null,
    r,
    o,
    i,
    s,
    !0
    /* hydrating */
  ), d = c(
    A,
    l.pendingBranch = t.ssContent,
    e,
    l,
    o,
    i
  );
  return l.deps === 0 && l.resolve(!1, !0), d;
}
function gc(A) {
  const { shapeFlag: t, children: e } = A, n = t & 32;
  A.ssContent = $n(
    n ? e.default : e
  ), A.ssFallback = n ? $n(e.fallback) : xA(ct);
}
function $n(A) {
  let t;
  if (F(A)) {
    const e = ut && A._c;
    e && (A._d = !1, st()), A = A(), e && (A._d = !0, t = CA, ko());
  }
  if (K(A)) {
    const e = ic(A);
    process.env.NODE_ENV !== "production" && !e && W("<Suspense> slots expect a single root node."), A = e;
  }
  return A = Kc(A), t && !A.dynamicChildren && (A.dynamicChildren = t.filter((e) => e !== A)), A;
}
function dc(A, t) {
  t && t.pendingBranch ? K(A) ? t.effects.push(...A) : t.effects.push(A) : rn(A);
}
function it(A, t) {
  A.activeBranch = t;
  const { vnode: e, parentComponent: n } = A, r = e.el = t.el;
  n && n.subTree === e && (n.vnode.el = r, yo(n, r));
}
function pc(A) {
  var t;
  return ((t = A.props) == null ? void 0 : t.suspensible) != null && A.props.suspensible !== !1;
}
const Mt = {};
function Be(A, t, e) {
  return process.env.NODE_ENV !== "production" && !F(t) && W(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Cc(A, t, e);
}
function Cc(A, t, { immediate: e, deep: n, flush: r, onTrack: o, onTrigger: i } = Me) {
  var s;
  process.env.NODE_ENV !== "production" && !t && (e !== void 0 && W(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), n !== void 0 && W(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (U) => {
    W(
      "Invalid watch source: ",
      U,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, l = ca() === ((s = rA) == null ? void 0 : s.scope) ? rA : null;
  let d, a = !1, y = !1;
  if (cA(A) ? (d = () => A.value, a = xe(A)) : KA(A) ? (d = () => A, n = !0) : K(A) ? (y = !0, a = A.some((U) => KA(U) || xe(U)), d = () => A.map((U) => {
    if (cA(U))
      return U.value;
    if (KA(U))
      return nt(U);
    if (F(U))
      return FA(U, l, 2);
    process.env.NODE_ENV !== "production" && c(U);
  })) : F(A) ? t ? d = () => FA(A, l, 2) : d = () => {
    if (!(l && l.isUnmounted))
      return k && k(), Bt(
        A,
        l,
        3,
        [S]
      );
  } : (d = pA, process.env.NODE_ENV !== "production" && c(A)), t && n) {
    const U = d;
    d = () => nt(U());
  }
  let k, S = (U) => {
    k = T.onStop = () => {
      FA(U, l, 4);
    };
  }, N = y ? new Array(A.length).fill(Mt) : Mt;
  const z = () => {
    if (T.active)
      if (t) {
        const U = T.run();
        (n || a || (y ? U.some(
          (V, I) => Lt(V, N[I])
        ) : Lt(U, N))) && (k && k(), Bt(t, l, 3, [
          U,
          // pass undefined as the old value when it's changed for the first time
          N === Mt ? void 0 : y && N[0] === Mt ? [] : N,
          S
        ]), N = U);
      } else
        T.run();
  };
  z.allowRecurse = !!t;
  let X;
  r === "sync" ? X = z : r === "post" ? X = () => or(z, l && l.suspense) : (z.pre = !0, l && (z.id = l.uid), X = () => fo(z));
  const T = new $r(d, X);
  return process.env.NODE_ENV !== "production" && (T.onTrack = o, T.onTrigger = i), t ? e ? z() : N = T.run() : r === "post" ? or(
    T.run.bind(T),
    l && l.suspense
  ) : T.run(), () => {
    T.stop(), l && l.scope && jr(l.scope.effects, T);
  };
}
function Ec(A, t) {
  const e = t.split(".");
  return () => {
    let n = A;
    for (let r = 0; r < e.length && n; r++)
      n = n[e[r]];
    return n;
  };
}
function nt(A, t) {
  if (!$(A) || A.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(A)))
    return A;
  if (t.add(A), cA(A))
    nt(A.value, t);
  else if (K(A))
    for (let e = 0; e < A.length; e++)
      nt(A[e], t);
  else if (Xr(A) || LA(A))
    A.forEach((e) => {
      nt(e, t);
    });
  else if (Wr(A))
    for (const e in A)
      nt(A[e], t);
  return A;
}
function Io(A, t) {
  return F(A) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => lA({ name: A.name }, t, { setup: A }))()
  ) : A;
}
const Bc = (A) => A.type.__isKeepAlive;
function Qc(A, t) {
  vo(A, "a", t);
}
function yc(A, t) {
  vo(A, "da", t);
}
function vo(A, t, e = rA) {
  const n = A.__wdc || (A.__wdc = () => {
    let r = e;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return A();
  });
  if (ue(t, n, e), e) {
    let r = e.parent;
    for (; r && r.parent; )
      Bc(r.parent.vnode) && Ic(n, t, e, r), r = r.parent;
  }
}
function Ic(A, t, e, n) {
  const r = ue(
    t,
    A,
    n,
    !0
    /* prepend */
  );
  ho(() => {
    jr(n[t], r);
  }, e);
}
function ue(A, t, e = rA, n = !1) {
  if (e) {
    const r = e[A] || (e[A] = []), o = t.__weh || (t.__weh = (...i) => {
      if (e.isUnmounted)
        return;
      se(), Yt(e);
      const s = Bt(t, e, A, i);
      return ln(), ae(), s;
    });
    return n ? r.unshift(o) : r.push(o), o;
  } else if (process.env.NODE_ENV !== "production") {
    const r = ta(en[A].replace(/ hook$/, ""));
    W(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const OA = (A) => (t, e = rA) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  ue(A, (...n) => t(...n), e)
), vc = OA("bm"), hc = OA("m"), mc = OA("bu"), Dc = OA("u"), wc = OA("bum"), ho = OA("um"), bc = OA("sp"), kc = OA(
  "rtg"
), Sc = OA(
  "rtc"
);
function Oc(A, t = rA) {
  ue("ec", A, t);
}
const Pc = Symbol.for("v-ndc"), mo = (A) => A === "_" || A === "$";
process.env.NODE_ENV;
function Mc(A) {
  const { ctx: t, setupState: e } = A;
  Object.keys(L(e)).forEach((n) => {
    if (!e.__isScriptSetup) {
      if (mo(n[0])) {
        W(
          `setup() return property ${JSON.stringify(
            n
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, n, {
        enumerable: !0,
        configurable: !0,
        get: () => e[n],
        set: pA
      });
    }
  });
}
function Ar(A) {
  return K(A) ? A.reduce(
    (t, e) => (t[e] = null, t),
    {}
  ) : A;
}
function Rc(A) {
  const t = Hc();
  process.env.NODE_ENV !== "production" && !t && W(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let e = A();
  return ln(), Fe(e) && (e = e.catch((n) => {
    throw Yt(t), n;
  })), [e, () => Yt(t)];
}
function Nc() {
  const A = /* @__PURE__ */ Object.create(null);
  return (t, e) => {
    A[e] ? W(`${t} property "${e}" is already defined in ${A[e]}.`) : A[e] = t;
  };
}
function Jc(A) {
  const t = wo(A), e = A.proxy, n = A.ctx;
  t.beforeCreate && tr(t.beforeCreate, A, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: s,
    provide: c,
    inject: l,
    // lifecycle
    created: d,
    beforeMount: a,
    mounted: y,
    beforeUpdate: k,
    updated: S,
    activated: N,
    deactivated: z,
    beforeDestroy: X,
    beforeUnmount: T,
    destroyed: U,
    unmounted: V,
    render: I,
    renderTracked: M,
    renderTriggered: v,
    errorCaptured: p,
    serverPrefetch: g,
    // public API
    expose: B,
    inheritAttrs: f,
    // assets
    components: u,
    directives: D,
    filters: w
  } = t, C = process.env.NODE_ENV !== "production" ? Nc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [P] = A.propsOptions;
    if (P)
      for (const q in P)
        C("Props", q);
  }
  if (l && qc(l, n, C), i)
    for (const P in i) {
      const q = i[P];
      F(q) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(n, P, {
        value: q.bind(e),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[P] = q.bind(e), process.env.NODE_ENV !== "production" && C("Methods", P)) : process.env.NODE_ENV !== "production" && W(
        `Method "${P}" has type "${typeof q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !F(r) && W(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const P = r.call(e, e);
    if (process.env.NODE_ENV !== "production" && Fe(P) && W(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !$(P))
      process.env.NODE_ENV !== "production" && W("data() should return an object.");
    else if (A.data = $e(P), process.env.NODE_ENV !== "production")
      for (const q in P)
        C("Data", q), mo(q[0]) || Object.defineProperty(n, q, {
          configurable: !0,
          enumerable: !0,
          get: () => P[q],
          set: pA
        });
  }
  if (o)
    for (const P in o) {
      const q = o[P], H = F(q) ? q.bind(e, e) : F(q.get) ? q.get.bind(e, e) : pA;
      process.env.NODE_ENV !== "production" && H === pA && W(`Computed property "${P}" has no getter.`);
      const eA = !F(q) && F(q.set) ? q.set.bind(e) : process.env.NODE_ENV !== "production" ? () => {
        W(
          `Write operation failed: computed property "${P}" is readonly.`
        );
      } : pA, uA = eu({
        get: H,
        set: eA
      });
      Object.defineProperty(n, P, {
        enumerable: !0,
        configurable: !0,
        get: () => uA.value,
        set: (yA) => uA.value = yA
      }), process.env.NODE_ENV !== "production" && C("Computed", P);
    }
  if (s)
    for (const P in s)
      Do(s[P], n, e, P);
  if (c) {
    const P = F(c) ? c.call(e) : c;
    Reflect.ownKeys(P).forEach((q) => {
      Tc(q, P[q]);
    });
  }
  d && tr(d, A, "c");
  function R(P, q) {
    K(q) ? q.forEach((H) => P(H.bind(e))) : q && P(q.bind(e));
  }
  if (R(vc, a), R(hc, y), R(mc, k), R(Dc, S), R(Qc, N), R(yc, z), R(Oc, p), R(Sc, M), R(kc, v), R(wc, T), R(ho, V), R(bc, g), K(B))
    if (B.length) {
      const P = A.exposed || (A.exposed = {});
      B.forEach((q) => {
        Object.defineProperty(P, q, {
          get: () => e[q],
          set: (H) => e[q] = H
        });
      });
    } else
      A.exposed || (A.exposed = {});
  I && A.render === pA && (A.render = I), f != null && (A.inheritAttrs = f), u && (A.components = u), D && (A.directives = D);
}
function qc(A, t, e = pA) {
  K(A) && (A = Ze(A));
  for (const n in A) {
    const r = A[n];
    let o;
    $(r) ? "default" in r ? o = Qe(
      r.from || n,
      r.default,
      !0
      /* treat default function as factory */
    ) : o = Qe(r.from || n) : o = Qe(r), cA(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[n] = o, process.env.NODE_ENV !== "production" && e("Inject", n);
  }
}
function tr(A, t, e) {
  Bt(
    K(A) ? A.map((n) => n.bind(t.proxy)) : A.bind(t.proxy),
    t,
    e
  );
}
function Do(A, t, e, n) {
  const r = n.includes(".") ? Ec(e, n) : () => e[n];
  if (BA(A)) {
    const o = t[A];
    F(o) ? Be(r, o) : process.env.NODE_ENV !== "production" && W(`Invalid watch handler specified by key "${A}"`, o);
  } else if (F(A))
    Be(r, A.bind(e));
  else if ($(A))
    if (K(A))
      A.forEach((o) => Do(o, t, e, n));
    else {
      const o = F(A.handler) ? A.handler.bind(e) : t[A.handler];
      F(o) ? Be(r, o, A) : process.env.NODE_ENV !== "production" && W(`Invalid watch handler specified by key "${A.handler}"`, o);
    }
  else
    process.env.NODE_ENV !== "production" && W(`Invalid watch option: "${n}"`, A);
}
function wo(A) {
  const t = A.type, { mixins: e, extends: n } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = A.appContext, s = o.get(t);
  let c;
  return s ? c = s : !r.length && !e && !n ? c = t : (c = {}, r.length && r.forEach(
    (l) => Gt(c, l, i, !0)
  ), Gt(c, t, i)), $(t) && o.set(t, c), c;
}
function Gt(A, t, e, n = !1) {
  const { mixins: r, extends: o } = t;
  o && Gt(A, o, e, !0), r && r.forEach(
    (i) => Gt(A, i, e, !0)
  );
  for (const i in t)
    if (n && i === "expose")
      process.env.NODE_ENV !== "production" && W(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const s = Vc[i] || e && e[i];
      A[i] = s ? s(A[i], t[i]) : t[i];
    }
  return A;
}
const Vc = {
  data: er,
  props: nr,
  emits: nr,
  // objects
  methods: dt,
  computed: dt,
  // lifecycle
  beforeCreate: iA,
  created: iA,
  beforeMount: iA,
  mounted: iA,
  beforeUpdate: iA,
  updated: iA,
  beforeDestroy: iA,
  beforeUnmount: iA,
  destroyed: iA,
  unmounted: iA,
  activated: iA,
  deactivated: iA,
  errorCaptured: iA,
  serverPrefetch: iA,
  // assets
  components: dt,
  directives: dt,
  // watch
  watch: Uc,
  // provide / inject
  provide: er,
  inject: xc
};
function er(A, t) {
  return t ? A ? function() {
    return lA(
      F(A) ? A.call(this, this) : A,
      F(t) ? t.call(this, this) : t
    );
  } : t : A;
}
function xc(A, t) {
  return dt(Ze(A), Ze(t));
}
function Ze(A) {
  if (K(A)) {
    const t = {};
    for (let e = 0; e < A.length; e++)
      t[A[e]] = A[e];
    return t;
  }
  return A;
}
function iA(A, t) {
  return A ? [...new Set([].concat(A, t))] : t;
}
function dt(A, t) {
  return A ? lA(/* @__PURE__ */ Object.create(null), A, t) : t;
}
function nr(A, t) {
  return A ? K(A) && K(t) ? [.../* @__PURE__ */ new Set([...A, ...t])] : lA(
    /* @__PURE__ */ Object.create(null),
    Ar(A),
    Ar(t ?? {})
  ) : t;
}
function Uc(A, t) {
  if (!A)
    return t;
  if (!t)
    return A;
  const e = lA(/* @__PURE__ */ Object.create(null), A);
  for (const n in t)
    e[n] = iA(A[n], t[n]);
  return e;
}
let rr = null;
function Tc(A, t) {
  if (!rA)
    process.env.NODE_ENV !== "production" && W("provide() can only be used inside setup().");
  else {
    let e = rA.provides;
    const n = rA.parent && rA.parent.provides;
    n === e && (e = rA.provides = Object.create(n)), e[A] = t;
  }
}
function Qe(A, t, e = !1) {
  const n = rA || mA;
  if (n || rr) {
    const r = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : rr._context.provides;
    if (r && A in r)
      return r[A];
    if (arguments.length > 1)
      return e && F(t) ? t.call(n && n.proxy) : t;
    process.env.NODE_ENV !== "production" && W(`injection "${String(A)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && W("inject() can only be used inside setup() or functional components.");
}
let Rt, qA;
function Zc(A, t) {
  A.appContext.config.performance && Ft() && qA.mark(`vue-${t}-${A.uid}`), process.env.NODE_ENV !== "production" && nc(A, t, Ft() ? qA.now() : Date.now());
}
function jc(A, t) {
  if (A.appContext.config.performance && Ft()) {
    const e = `vue-${t}-${A.uid}`, n = e + ":end";
    qA.mark(n), qA.measure(
      `<${fn(A, A.type)}> ${t}`,
      e,
      n
    ), qA.clearMarks(e), qA.clearMarks(n);
  }
  process.env.NODE_ENV !== "production" && rc(A, t, Ft() ? qA.now() : Date.now());
}
function Ft() {
  return Rt !== void 0 || (typeof window < "u" && window.performance ? (Rt = !0, qA = window.performance) : Rt = !1), Rt;
}
const or = dc, Xc = (A) => A.__isTeleport, sn = Symbol.for("v-fgt"), bo = Symbol.for("v-txt"), ct = Symbol.for("v-cmt"), Zt = [];
let CA = null;
function st(A = !1) {
  Zt.push(CA = A ? null : []);
}
function ko() {
  Zt.pop(), CA = Zt[Zt.length - 1] || null;
}
let ut = 1;
function ir(A) {
  ut += A;
}
function So(A) {
  return A.dynamicChildren = ut > 0 ? CA || Ys : null, ko(), ut > 0 && CA && CA.push(A), A;
}
function ye(A, t, e, n, r, o) {
  return So(
    Ht(
      A,
      t,
      e,
      n,
      r,
      o,
      !0
      /* isBlock */
    )
  );
}
function Oo(A, t, e, n, r) {
  return So(
    xA(
      A,
      t,
      e,
      n,
      r,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function an(A) {
  return A ? A.__v_isVNode === !0 : !1;
}
function Ie(A, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && tt.has(t.type) ? (A.shapeFlag &= -257, t.shapeFlag &= -513, !1) : A.type === t.type && A.key === t.key;
}
const zc = (...A) => Ro(
  ...A
), Po = "__vInternal", Mo = ({ key: A }) => A ?? null, jt = ({
  ref: A,
  ref_key: t,
  ref_for: e
}) => (typeof A == "number" && (A = "" + A), A != null ? BA(A) || cA(A) || F(A) ? { i: mA, r: A, k: t, f: !!e } : A : null);
function Ht(A, t = null, e = null, n = 0, r = null, o = A === sn ? 0 : 1, i = !1, s = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A,
    props: t,
    key: t && Mo(t),
    ref: t && jt(t),
    scopeId: Qo,
    slotScopeIds: null,
    children: e,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: mA
  };
  return s ? (cn(c, e), o & 128 && A.normalize(c)) : e && (c.shapeFlag |= BA(e) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && W("VNode created with invalid key (NaN). VNode type:", c.type), ut > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  CA && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && CA.push(c), c;
}
const xA = process.env.NODE_ENV !== "production" ? zc : Ro;
function Ro(A, t = null, e = null, n = 0, r = null, o = !1) {
  if ((!A || A === Pc) && (process.env.NODE_ENV !== "production" && !A && W(`Invalid vnode type when creating vnode: ${A}.`), A = ct), an(A)) {
    const s = It(
      A,
      t,
      !0
      /* mergeRef: true */
    );
    return e && cn(s, e), ut > 0 && !o && CA && (s.shapeFlag & 6 ? CA[CA.indexOf(A)] = s : CA.push(s)), s.patchFlag |= -2, s;
  }
  if (qo(A) && (A = A.__vccOpts), t) {
    t = Lc(t);
    let { class: s, style: c } = t;
    s && !BA(s) && (t.class = rt(s)), $(c) && (Ue(c) && !K(c) && (c = lA({}, c)), t.style = Ye(c));
  }
  const i = BA(A) ? 1 : sc(A) ? 128 : Xc(A) ? 64 : $(A) ? 4 : F(A) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Ue(A) && (A = L(A), W(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    A
  )), Ht(
    A,
    t,
    e,
    n,
    r,
    i,
    o,
    !0
  );
}
function Lc(A) {
  return A ? Ue(A) || Po in A ? lA({}, A) : A : null;
}
function It(A, t, e = !1) {
  const { props: n, ref: r, patchFlag: o, children: i } = A, s = t ? Fc(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A.type,
    props: s,
    key: s && Mo(s),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      e && r ? K(r) ? r.concat(jt(t)) : [r, jt(t)] : jt(t)
    ) : r,
    scopeId: A.scopeId,
    slotScopeIds: A.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && K(i) ? i.map(No) : i,
    target: A.target,
    targetAnchor: A.targetAnchor,
    staticCount: A.staticCount,
    shapeFlag: A.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && A.type !== sn ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: A.dynamicProps,
    dynamicChildren: A.dynamicChildren,
    appContext: A.appContext,
    dirs: A.dirs,
    transition: A.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: A.component,
    suspense: A.suspense,
    ssContent: A.ssContent && It(A.ssContent),
    ssFallback: A.ssFallback && It(A.ssFallback),
    el: A.el,
    anchor: A.anchor,
    ctx: A.ctx,
    ce: A.ce
  };
}
function No(A) {
  const t = It(A);
  return K(A.children) && (t.children = A.children.map(No)), t;
}
function Wc(A = " ", t = 0) {
  return xA(bo, null, A, t);
}
function sr(A = "", t = !1) {
  return t ? (st(), Oo(ct, null, A)) : xA(ct, null, A);
}
function Kc(A) {
  return A == null || typeof A == "boolean" ? xA(ct) : K(A) ? xA(
    sn,
    null,
    // #3666, avoid reference pollution when reusing vnode
    A.slice()
  ) : typeof A == "object" ? Gc(A) : xA(bo, null, String(A));
}
function Gc(A) {
  return A.el === null && A.patchFlag !== -1 || A.memo ? A : It(A);
}
function cn(A, t) {
  let e = 0;
  const { shapeFlag: n } = A;
  if (t == null)
    t = null;
  else if (K(t))
    e = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), cn(A, r()), r._c && (r._d = !0));
      return;
    } else {
      e = 32;
      const r = t._;
      !r && !(Po in t) ? t._ctx = mA : r === 3 && mA && (mA.slots._ === 1 ? t._ = 1 : (t._ = 2, A.patchFlag |= 1024));
    }
  else
    F(t) ? (t = { default: t, _ctx: mA }, e = 32) : (t = String(t), n & 64 ? (e = 16, t = [Wc(t)]) : e = 8);
  A.children = t, A.shapeFlag |= e;
}
function Fc(...A) {
  const t = {};
  for (let e = 0; e < A.length; e++) {
    const n = A[e];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = rt([t.class, n.class]));
      else if (r === "style")
        t.style = Ye([t.style, n.style]);
      else if ($s(r)) {
        const o = t[r], i = n[r];
        i && o !== i && !(K(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = n[r]);
  }
  return t;
}
let rA = null;
const Hc = () => rA || mA;
let un, $A, ar = "__VUE_INSTANCE_SETTERS__";
($A = Re()[ar]) || ($A = Re()[ar] = []), $A.push((A) => rA = A), un = (A) => {
  $A.length > 1 ? $A.forEach((t) => t(A)) : $A[0](A);
};
const Yt = (A) => {
  un(A), A.scope.on();
}, ln = () => {
  rA && rA.scope.off(), un(null);
};
let Yc = !1;
function _c(A, t, e) {
  F(t) ? A.type.__ssrInlineRender ? A.ssrRender = t : A.render = t : $(t) ? (process.env.NODE_ENV !== "production" && an(t) && W(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (A.devtoolsRawSetupState = t), A.setupState = xa(t), process.env.NODE_ENV !== "production" && Mc(A)) : process.env.NODE_ENV !== "production" && t !== void 0 && W(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), $c(A, e);
}
let cr;
function $c(A, t, e) {
  const n = A.type;
  if (!A.render) {
    if (!t && cr && !n.render) {
      const r = n.template || wo(A).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Zc(A, "compile");
        const { isCustomElement: o, compilerOptions: i } = A.appContext.config, { delimiters: s, compilerOptions: c } = n, l = lA(
          lA(
            {
              isCustomElement: o,
              delimiters: s
            },
            i
          ),
          c
        );
        n.render = cr(r, l), process.env.NODE_ENV !== "production" && jc(A, "compile");
      }
    }
    A.render = n.render || pA;
  }
  Yt(A), se(), Jc(A), ae(), ln(), process.env.NODE_ENV !== "production" && !n.render && A.render === pA && !t && (n.template ? W(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : W("Component is missing template or render function."));
}
const Au = /(?:^|[-_])(\w)/g, tu = (A) => A.replace(Au, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Jo(A, t = !0) {
  return F(A) ? A.displayName || A.name : A.name || t && A.__name;
}
function fn(A, t, e = !1) {
  let n = Jo(t);
  if (!n && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (n = r[1]);
  }
  if (!n && A && A.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    n = r(
      A.components || A.parent.type.components
    ) || r(A.appContext.components);
  }
  return n ? tu(n) : e ? "App" : "Anonymous";
}
function qo(A) {
  return F(A) && "__vccOpts" in A;
}
const eu = (A, t) => Ta(A, t, Yc);
function ve(A) {
  return !!(A && A.__v_isShallow);
}
function nu() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const A = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, e = { style: "color:#b62e24" }, n = { style: "color:#9d288c" }, r = {
    header(a) {
      return $(a) ? a.__isVue ? ["div", A, "VueInstance"] : cA(a) ? [
        "div",
        {},
        ["span", A, d(a)],
        "<",
        s(a.value),
        ">"
      ] : KA(a) ? [
        "div",
        {},
        ["span", A, ve(a) ? "ShallowReactive" : "Reactive"],
        "<",
        s(a),
        `>${HA(a) ? " (readonly)" : ""}`
      ] : HA(a) ? [
        "div",
        {},
        ["span", A, ve(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        s(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...o(a.$)
        ];
    }
  };
  function o(a) {
    const y = [];
    a.type.props && a.props && y.push(i("props", L(a.props))), a.setupState !== Me && y.push(i("setup", a.setupState)), a.data !== Me && y.push(i("data", L(a.data)));
    const k = c(a, "computed");
    k && y.push(i("computed", k));
    const S = c(a, "inject");
    return S && y.push(i("injected", S)), y.push([
      "div",
      {},
      [
        "span",
        {
          style: n.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), y;
  }
  function i(a, y) {
    return y = lA({}, y), Object.keys(y).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(y).map((k) => [
          "div",
          {},
          ["span", n, k + ": "],
          s(y[k], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function s(a, y = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", e, JSON.stringify(a)] : typeof a == "boolean" ? ["span", n, a] : $(a) ? ["object", { object: y ? L(a) : a }] : ["span", e, String(a)];
  }
  function c(a, y) {
    const k = a.type;
    if (F(k))
      return;
    const S = {};
    for (const N in a.ctx)
      l(k, N, y) && (S[N] = a.ctx[N]);
    return S;
  }
  function l(a, y, k) {
    const S = a[k];
    if (K(S) && S.includes(y) || $(S) && y in S || a.extends && l(a.extends, y, k) || a.mixins && a.mixins.some((N) => l(N, y, k)))
      return !0;
  }
  function d(a) {
    return ve(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function ru() {
  nu();
}
process.env.NODE_ENV !== "production" && ru();
const he = {
  numeric: "Numeric",
  alphanumeric: "Alphanumeric",
  byte: "Byte",
  kanji: "Kanji"
};
function ou(A) {
  switch (!0) {
    case /^[0-9]*$/.test(A):
      return he.numeric;
    case /^[0-9A-Z $%*+\-./:]*$/.test(A):
      return he.alphanumeric;
    default:
      return he.byte;
  }
}
const Nt = (A) => !!A && typeof A == "object" && !Array.isArray(A);
function _t(A, ...t) {
  if (!t.length)
    return A;
  const e = t.shift();
  return e === void 0 || !Nt(A) || !Nt(e) ? A : (A = { ...A }, Object.keys(e).forEach((n) => {
    const r = A[n], o = e[n];
    Array.isArray(r) && Array.isArray(o) ? A[n] = o : Nt(r) && Nt(o) ? A[n] = _t(Object.assign({}, r), o) : A[n] = o;
  }), _t(A, ...t));
}
function iu(A, t) {
  const e = document.createElement("a");
  e.download = t, e.href = A, document.body.appendChild(e), e.click(), document.body.removeChild(e);
}
function su({
  originalHeight: A,
  originalWidth: t,
  maxHiddenDots: e,
  maxHiddenAxisDots: n,
  dotSize: r
}) {
  const o = { x: 0, y: 0 }, i = { x: 0, y: 0 };
  if (A <= 0 || t <= 0 || e <= 0 || r <= 0)
    return {
      height: 0,
      width: 0,
      hideYDots: 0,
      hideXDots: 0
    };
  const s = A / t;
  return o.x = Math.floor(Math.sqrt(e / s)), o.x <= 0 && (o.x = 1), n && n < o.x && (o.x = n), o.x % 2 === 0 && o.x--, i.x = o.x * r, o.y = 1 + 2 * Math.ceil((o.x * s - 1) / 2), i.y = Math.round(i.x * s), (o.y * o.x > e || n && n < o.y) && (n && n < o.y ? (o.y = n, o.y % 2 === 0 && o.x--) : o.y -= 2, i.y = o.y * r, o.x = 1 + 2 * Math.ceil((o.y / s - 1) / 2), i.x = Math.round(i.y / s)), {
    height: i.y,
    width: i.x,
    hideYDots: o.y,
    hideXDots: o.x
  };
}
const au = {
  L: 0.07,
  M: 0.15,
  Q: 0.25,
  H: 0.3
}, At = {
  dots: "dots",
  rounded: "rounded",
  classy: "classy",
  classyRounded: "classy-rounded",
  square: "square",
  extraRounded: "extra-rounded"
};
class me {
  constructor({ context: t, type: e }) {
    aA(this, "_context"), aA(this, "_type"), this._context = t, this._type = e;
  }
  draw(t, e, n, r) {
    const o = this._context, i = this._type;
    let s;
    switch (i) {
      case At.dots:
        s = this._drawDot;
        break;
      case At.classy:
        s = this._drawClassy;
        break;
      case At.classyRounded:
        s = this._drawClassyRounded;
        break;
      case At.rounded:
        s = this._drawRounded;
        break;
      case At.extraRounded:
        s = this._drawExtraRounded;
        break;
      case At.square:
      default:
        s = this._drawSquare;
    }
    s.call(this, { x: t, y: e, size: n, context: o, getNeighbor: r });
  }
  _rotateFigure({ x: t, y: e, size: n, context: r, rotation: o, draw: i }) {
    const s = t + n / 2, c = e + n / 2;
    r.translate(s, c), o && r.rotate(o), i(), r.closePath(), o && r.rotate(-o), r.translate(-s, -c);
  }
  _basicDot(t) {
    const { size: e, context: n } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.moveTo(0, 0), n.arc(0, 0, e / 2, 0, Math.PI * 2);
      }
    });
  }
  _basicSquare(t) {
    const { size: e, context: n } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.moveTo(0, 0), n.rect(-e / 2, -e / 2, e, e);
      }
    });
  }
  // if rotation === 0 - right side is rounded
  _basicSideRounded(t) {
    const { size: e, context: n } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.moveTo(0, 0), n.arc(0, 0, e / 2, -Math.PI / 2, Math.PI / 2), n.lineTo(-e / 2, e / 2), n.lineTo(-e / 2, -e / 2), n.lineTo(0, -e / 2);
      }
    });
  }
  // if rotation === 0 - top right corner is rounded
  _basicCornerRounded(t) {
    const { size: e, context: n } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.moveTo(0, 0), n.arc(0, 0, e / 2, -Math.PI / 2, 0), n.lineTo(e / 2, e / 2), n.lineTo(-e / 2, e / 2), n.lineTo(-e / 2, -e / 2), n.lineTo(0, -e / 2);
      }
    });
  }
  // if rotation === 0 - top right corner is rounded
  _basicCornerExtraRounded(t) {
    const { size: e, context: n } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.moveTo(0, 0), n.arc(-e / 2, e / 2, e, -Math.PI / 2, 0), n.lineTo(-e / 2, e / 2), n.lineTo(-e / 2, -e / 2);
      }
    });
  }
  _basicCornersRounded(t) {
    const { size: e, context: n } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.moveTo(0, 0), n.arc(0, 0, e / 2, -Math.PI / 2, 0), n.lineTo(e / 2, e / 2), n.lineTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, Math.PI), n.lineTo(-e / 2, -e / 2), n.lineTo(0, -e / 2);
      }
    });
  }
  _basicCornersExtraRounded(t) {
    const { size: e, context: n } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.moveTo(0, 0), n.arc(-e / 2, e / 2, e, -Math.PI / 2, 0), n.arc(e / 2, -e / 2, e, Math.PI / 2, Math.PI);
      }
    });
  }
  _drawDot({ x: t, y: e, size: n, context: r }) {
    this._basicDot({ x: t, y: e, size: n, context: r, rotation: 0 });
  }
  _drawSquare({ x: t, y: e, size: n, context: r }) {
    this._basicSquare({ x: t, y: e, size: n, context: r, rotation: 0 });
  }
  _drawRounded({ x: t, y: e, size: n, context: r, getNeighbor: o }) {
    const i = +o(-1, 0), s = +o(1, 0), c = +o(0, -1), l = +o(0, 1), d = i + s + c + l;
    if (d === 0) {
      this._basicDot({ x: t, y: e, size: n, context: r, rotation: 0 });
      return;
    }
    if (d > 2 || i && s || c && l) {
      this._basicSquare({ x: t, y: e, size: n, context: r, rotation: 0 });
      return;
    }
    if (d === 2) {
      let a = 0;
      i && c ? a = Math.PI / 2 : c && s ? a = Math.PI : s && l && (a = -Math.PI / 2), this._basicCornerRounded({ x: t, y: e, size: n, context: r, rotation: a });
      return;
    }
    if (d === 1) {
      let a = 0;
      c ? a = Math.PI / 2 : s ? a = Math.PI : l && (a = -Math.PI / 2), this._basicSideRounded({ x: t, y: e, size: n, context: r, rotation: a });
    }
  }
  _drawExtraRounded({ x: t, y: e, size: n, context: r, getNeighbor: o }) {
    const i = +o(-1, 0), s = +o(1, 0), c = +o(0, -1), l = +o(0, 1), d = i + s + c + l;
    if (d === 0) {
      this._basicDot({ x: t, y: e, size: n, context: r, rotation: 0 });
      return;
    }
    if (d > 2 || i && s || c && l) {
      this._basicSquare({ x: t, y: e, size: n, context: r, rotation: 0 });
      return;
    }
    if (d === 2) {
      let a = 0;
      i && c ? a = Math.PI / 2 : c && s ? a = Math.PI : s && l && (a = -Math.PI / 2), this._basicCornerExtraRounded({ x: t, y: e, size: n, context: r, rotation: a });
      return;
    }
    if (d === 1) {
      let a = 0;
      c ? a = Math.PI / 2 : s ? a = Math.PI : l && (a = -Math.PI / 2), this._basicSideRounded({ x: t, y: e, size: n, context: r, rotation: a });
    }
  }
  _drawClassy({ x: t, y: e, size: n, context: r, getNeighbor: o }) {
    const i = +o(-1, 0), s = +o(1, 0), c = +o(0, -1), l = +o(0, 1);
    if (i + s + c + l === 0) {
      this._basicCornersRounded({ x: t, y: e, size: n, context: r, rotation: Math.PI / 2 });
      return;
    }
    if (!i && !c) {
      this._basicCornerRounded({ x: t, y: e, size: n, context: r, rotation: -Math.PI / 2 });
      return;
    }
    if (!s && !l) {
      this._basicCornerRounded({ x: t, y: e, size: n, context: r, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: e, size: n, context: r, rotation: 0 });
  }
  _drawClassyRounded({ x: t, y: e, size: n, context: r, getNeighbor: o }) {
    const i = +o(-1, 0), s = +o(1, 0), c = +o(0, -1), l = +o(0, 1);
    if (i + s + c + l === 0) {
      this._basicCornersRounded({ x: t, y: e, size: n, context: r, rotation: Math.PI / 2 });
      return;
    }
    if (!i && !c) {
      this._basicCornerExtraRounded({ x: t, y: e, size: n, context: r, rotation: -Math.PI / 2 });
      return;
    }
    if (!s && !l) {
      this._basicCornerExtraRounded({ x: t, y: e, size: n, context: r, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: e, size: n, context: r, rotation: 0 });
  }
}
const De = {
  dot: "dot",
  square: "square",
  extraRounded: "extra-rounded"
};
class cu {
  constructor({ context: t, type: e }) {
    aA(this, "_context"), aA(this, "_type"), this._context = t, this._type = e;
  }
  draw(t, e, n, r) {
    const o = this._context, i = this._type;
    let s;
    switch (i) {
      case De.square:
        s = this._drawSquare;
        break;
      case De.extraRounded:
        s = this._drawExtraRounded;
        break;
      case De.dot:
      default:
        s = this._drawDot;
    }
    s.call(this, { x: t, y: e, size: n, context: o, rotation: r });
  }
  _rotateFigure({ x: t, y: e, size: n, context: r, rotation: o, draw: i }) {
    const s = t + n / 2, c = e + n / 2;
    r.translate(s, c), o && r.rotate(o), i(), r.closePath(), o && r.rotate(-o), r.translate(-s, -c);
  }
  _basicDot(t) {
    const { size: e, context: n } = t, r = e / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.arc(0, 0, e / 2, 0, Math.PI * 2), n.arc(0, 0, e / 2 - r, 0, Math.PI * 2);
      }
    });
  }
  _basicSquare(t) {
    const { size: e, context: n } = t, r = e / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.rect(-e / 2, -e / 2, e, e), n.rect(-e / 2 + r, -e / 2 + r, e - 2 * r, e - 2 * r);
      }
    });
  }
  _basicExtraRounded(t) {
    const { size: e, context: n } = t, r = e / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.arc(-r, -r, 2.5 * r, Math.PI, -Math.PI / 2), n.lineTo(r, -3.5 * r), n.arc(r, -r, 2.5 * r, -Math.PI / 2, 0), n.lineTo(3.5 * r, -r), n.arc(r, r, 2.5 * r, 0, Math.PI / 2), n.lineTo(-r, 3.5 * r), n.arc(-r, r, 2.5 * r, Math.PI / 2, Math.PI), n.lineTo(-3.5 * r, -r), n.arc(-r, -r, 1.5 * r, Math.PI, -Math.PI / 2), n.lineTo(r, -2.5 * r), n.arc(r, -r, 1.5 * r, -Math.PI / 2, 0), n.lineTo(2.5 * r, -r), n.arc(r, r, 1.5 * r, 0, Math.PI / 2), n.lineTo(-r, 2.5 * r), n.arc(-r, r, 1.5 * r, Math.PI / 2, Math.PI), n.lineTo(-2.5 * r, -r);
      }
    });
  }
  _drawDot({ x: t, y: e, size: n, context: r, rotation: o }) {
    this._basicDot({ x: t, y: e, size: n, context: r, rotation: o });
  }
  _drawSquare({ x: t, y: e, size: n, context: r, rotation: o }) {
    this._basicSquare({ x: t, y: e, size: n, context: r, rotation: o });
  }
  _drawExtraRounded({ x: t, y: e, size: n, context: r, rotation: o }) {
    this._basicExtraRounded({ x: t, y: e, size: n, context: r, rotation: o });
  }
}
const ur = {
  dot: "dot",
  square: "square"
};
class uu {
  constructor({ context: t, type: e }) {
    aA(this, "_context"), aA(this, "_type"), this._context = t, this._type = e;
  }
  draw(t, e, n, r) {
    const o = this._context;
    switch (this._type) {
      case ur.square:
        this._drawSquare({ x: t, y: e, size: n, context: o, rotation: r });
        break;
      case ur.dot:
      default:
        this._drawDot({ x: t, y: e, size: n, context: o, rotation: r });
    }
  }
  _rotateFigure({ x: t, y: e, size: n, context: r, rotation: o, draw: i }) {
    const s = t + n / 2, c = e + n / 2;
    r.moveTo(0, 0), r.translate(s, c), o && r.rotate(o), i(), r.closePath(), o && r.rotate(-o), r.translate(-s, -c);
  }
  _drawDot(t) {
    const { size: e, context: n } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.moveTo(0, 0), n.arc(0, 0, e / 2, 0, Math.PI * 2);
      }
    });
  }
  _drawSquare(t) {
    const { size: e, context: n } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        n.moveTo(0, 0), n.rect(-e / 2, -e / 2, e, e);
      }
    });
  }
}
const lu = {
  radial: "radial",
  linear: "linear"
}, XA = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
], zA = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
class fu {
  // TODO don't pass all options to this class
  constructor(t) {
    aA(this, "_canvas"), aA(this, "_options"), aA(this, "_qr"), aA(this, "_image"), this._canvas = document.createElement("canvas"), this._canvas.width = t.width, this._canvas.height = t.height, this._options = t;
  }
  get context() {
    return this._canvas.getContext("2d");
  }
  get width() {
    return this._canvas.width;
  }
  get height() {
    return this._canvas.height;
  }
  getCanvas() {
    return this._canvas;
  }
  clear() {
    const t = this.context;
    t && t.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  async drawQR(t) {
    const e = t.getModuleCount(), n = Math.min(this._options.width, this._options.height) - this._options.margin * 2, r = Math.floor(n / e);
    let o = {
      hideXDots: 0,
      hideYDots: 0,
      width: 0,
      height: 0
    };
    if (this._qr = t, this._options.image) {
      if (await this.loadImage(), !this._image)
        return;
      const { imageOptions: i, qrOptions: s } = this._options, c = i.imageSize * au[s.errorCorrectionLevel], l = Math.floor(c * e * e);
      o = su({
        originalWidth: this._image.width,
        originalHeight: this._image.height,
        maxHiddenDots: l,
        maxHiddenAxisDots: e - 14,
        dotSize: r
      });
    }
    this.clear(), this.drawBackground(), this.drawDots((i, s) => {
      var c, l, d, a, y, k;
      return !(this._options.imageOptions.hideBackgroundDots && i >= (e - o.hideXDots) / 2 && i < (e + o.hideXDots) / 2 && s >= (e - o.hideYDots) / 2 && s < (e + o.hideYDots) / 2 || (c = XA[i]) != null && c[s] || (l = XA[i - e + 7]) != null && l[s] || (d = XA[i]) != null && d[s - e + 7] || (a = zA[i]) != null && a[s] || (y = zA[i - e + 7]) != null && y[s] || (k = zA[i]) != null && k[s - e + 7]);
    }), this.drawCorners(), this._options.image && this.drawImage({ width: o.width, height: o.height, count: e, dotSize: r });
  }
  drawBackground() {
    const t = this.context, e = this._options;
    if (t) {
      if (e.backgroundOptions.gradient) {
        const n = e.backgroundOptions.gradient, r = this._createGradient({
          context: t,
          options: n,
          additionalRotation: 0,
          x: 0,
          y: 0,
          size: this._canvas.width > this._canvas.height ? this._canvas.width : this._canvas.height
        });
        n.colorStops.forEach(({ offset: o, color: i }) => {
          r.addColorStop(o, i);
        }), t.fillStyle = r;
      } else
        e.backgroundOptions.color && (t.fillStyle = e.backgroundOptions.color);
      t.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }
  drawDots(t) {
    if (!this._qr)
      throw "QR code is not defined";
    const e = this.context;
    if (!e)
      throw "QR code is not defined";
    const n = this._options, r = this._qr.getModuleCount();
    if (r > n.width || r > n.height)
      throw "The canvas is too small.";
    const o = Math.min(n.width, n.height) - n.margin * 2, i = Math.floor(o / r), s = Math.floor((n.width - r * i) / 2), c = Math.floor((n.height - r * i) / 2), l = new me({ context: e, type: n.dotsOptions.type });
    e.beginPath();
    for (let d = 0; d < r; d++)
      for (let a = 0; a < r; a++)
        t && !t(d, a) || this._qr.isDark(d, a) && l.draw(
          s + d * i,
          c + a * i,
          i,
          (y, k) => d + y < 0 || a + k < 0 || d + y >= r || a + k >= r || t && !t(d + y, a + k) ? !1 : !!this._qr && this._qr.isDark(d + y, a + k)
        );
    if (n.dotsOptions.gradient) {
      const d = n.dotsOptions.gradient, a = this._createGradient({
        context: e,
        options: d,
        additionalRotation: 0,
        x: s,
        y: c,
        size: r * i
      });
      d.colorStops.forEach(({ offset: y, color: k }) => {
        a.addColorStop(y, k);
      }), e.fillStyle = e.strokeStyle = a;
    } else
      n.dotsOptions.color && (e.fillStyle = e.strokeStyle = n.dotsOptions.color);
    e.fill("evenodd");
  }
  drawCorners(t) {
    if (!this._qr)
      throw "QR code is not defined";
    const e = this.context;
    if (!e)
      throw "QR code is not defined";
    const n = this._options, r = this._qr.getModuleCount(), o = Math.min(n.width, n.height) - n.margin * 2, i = Math.floor(o / r), s = i * 7, c = i * 3, l = Math.floor((n.width - r * i) / 2), d = Math.floor((n.height - r * i) / 2);
    [
      [0, 0, 0],
      [1, 0, Math.PI / 2],
      [0, 1, -Math.PI / 2]
    ].forEach(([a, y, k]) => {
      var S, N, z, X, T, U, V, I, M, v;
      if (t && !t(a, y))
        return;
      const p = l + a * i * (r - 7), g = d + y * i * (r - 7);
      if ((S = n.cornersSquareOptions) != null && S.type) {
        const B = new cu({ context: e, type: (N = n.cornersSquareOptions) == null ? void 0 : N.type });
        e.beginPath(), B.draw(p, g, s, k);
      } else {
        const B = new me({ context: e, type: n.dotsOptions.type });
        e.beginPath();
        for (let f = 0; f < XA.length; f++)
          for (let u = 0; u < XA[f].length; u++)
            (z = XA[f]) != null && z[u] && B.draw(
              p + f * i,
              g + u * i,
              i,
              (D, w) => {
                var C;
                return !!((C = XA[f + D]) != null && C[u + w]);
              }
            );
      }
      if ((X = n.cornersSquareOptions) != null && X.gradient) {
        const B = n.cornersSquareOptions.gradient, f = this._createGradient({
          context: e,
          options: B,
          additionalRotation: k,
          x: p,
          y: g,
          size: s
        });
        B.colorStops.forEach(({ offset: u, color: D }) => {
          f.addColorStop(u, D);
        }), e.fillStyle = e.strokeStyle = f;
      } else
        (T = n.cornersSquareOptions) != null && T.color && (e.fillStyle = e.strokeStyle = n.cornersSquareOptions.color);
      if (e.fill("evenodd"), (U = n.cornersDotOptions) != null && U.type) {
        const B = new uu({ context: e, type: (V = n.cornersDotOptions) == null ? void 0 : V.type });
        e.beginPath(), B.draw(p + i * 2, g + i * 2, c, k);
      } else {
        const B = new me({ context: e, type: n.dotsOptions.type });
        e.beginPath();
        for (let f = 0; f < zA.length; f++)
          for (let u = 0; u < zA[f].length; u++)
            (I = zA[f]) != null && I[u] && B.draw(
              p + f * i,
              g + u * i,
              i,
              (D, w) => {
                var C;
                return !!((C = zA[f + D]) != null && C[u + w]);
              }
            );
      }
      if ((M = n.cornersDotOptions) != null && M.gradient) {
        const B = n.cornersDotOptions.gradient, f = this._createGradient({
          context: e,
          options: B,
          additionalRotation: k,
          x: p + i * 2,
          y: g + i * 2,
          size: c
        });
        B.colorStops.forEach(({ offset: u, color: D }) => {
          f.addColorStop(u, D);
        }), e.fillStyle = e.strokeStyle = f;
      } else
        (v = n.cornersDotOptions) != null && v.color && (e.fillStyle = e.strokeStyle = n.cornersDotOptions.color);
      e.fill("evenodd");
    });
  }
  loadImage() {
    return new Promise((t, e) => {
      const n = this._options, r = new Image();
      if (!n.image)
        return e("Image is not defined");
      typeof n.imageOptions.crossOrigin == "string" && (r.crossOrigin = n.imageOptions.crossOrigin), this._image = r, r.onload = () => {
        t();
      }, r.src = n.image;
    });
  }
  drawImage({
    width: t,
    height: e,
    count: n,
    dotSize: r
  }) {
    const o = this.context;
    if (!o)
      throw "canvasContext is not defined";
    if (!this._image)
      throw "image is not defined";
    const i = this._options, s = Math.floor((i.width - n * r) / 2), c = Math.floor((i.height - n * r) / 2), l = s + i.imageOptions.margin + (n * r - t) / 2, d = c + i.imageOptions.margin + (n * r - e) / 2, a = t - i.imageOptions.margin * 2, y = e - i.imageOptions.margin * 2;
    o.drawImage(this._image, l, d, a < 0 ? 0 : a, y < 0 ? 0 : y);
  }
  _createGradient({
    context: t,
    options: e,
    additionalRotation: n,
    x: r,
    y: o,
    size: i
  }) {
    let s;
    if (e.type === lu.radial)
      s = t.createRadialGradient(r + i / 2, o + i / 2, 0, r + i / 2, o + i / 2, i / 2);
    else {
      const c = ((e.rotation || 0) + n) % (2 * Math.PI), l = (c + 2 * Math.PI) % (2 * Math.PI);
      let d = r + i / 2, a = o + i / 2, y = r + i / 2, k = o + i / 2;
      l >= 0 && l <= 0.25 * Math.PI || l > 1.75 * Math.PI && l <= 2 * Math.PI ? (d = d - i / 2, a = a - i / 2 * Math.tan(c), y = y + i / 2, k = k + i / 2 * Math.tan(c)) : l > 0.25 * Math.PI && l <= 0.75 * Math.PI ? (a = a - i / 2, d = d - i / 2 / Math.tan(c), k = k + i / 2, y = y + i / 2 / Math.tan(c)) : l > 0.75 * Math.PI && l <= 1.25 * Math.PI ? (d = d + i / 2, a = a + i / 2 * Math.tan(c), y = y - i / 2, k = k - i / 2 * Math.tan(c)) : l > 1.25 * Math.PI && l <= 1.75 * Math.PI && (a = a + i / 2, d = d + i / 2 / Math.tan(c), k = k - i / 2, y = y - i / 2 / Math.tan(c)), s = t.createLinearGradient(Math.round(d), Math.round(a), Math.round(y), Math.round(k));
    }
    return s;
  }
}
const Vo = {};
for (let A = 0; A <= 40; A++)
  Vo[A] = A;
const gu = {
  L: "L",
  M: "M",
  Q: "Q",
  H: "H"
}, lr = {
  width: 300,
  height: 300,
  data: "",
  margin: 0,
  qrOptions: {
    typeNumber: Vo[0],
    mode: void 0,
    errorCorrectionLevel: gu.Q
  },
  imageOptions: {
    hideBackgroundDots: !0,
    imageSize: 0.4,
    crossOrigin: void 0,
    margin: 0
  },
  dotsOptions: {
    type: "square",
    color: "#000"
  },
  backgroundOptions: {
    color: "#fff"
  }
};
function Jt(A) {
  const t = { ...A };
  if (!t.colorStops || !t.colorStops.length)
    throw "Field 'colorStops' is required in gradient";
  return t.rotation ? t.rotation = Number(t.rotation) : t.rotation = 0, t.colorStops = t.colorStops.map((e) => ({
    ...e,
    offset: Number(e.offset)
  })), t;
}
function fr(A) {
  const t = { ...A };
  return t.width = Number(t.width), t.height = Number(t.height), t.margin = Number(t.margin), t.imageOptions = {
    ...t.imageOptions,
    hideBackgroundDots: !!t.imageOptions.hideBackgroundDots,
    imageSize: Number(t.imageOptions.imageSize),
    margin: Number(t.imageOptions.margin)
  }, t.margin > Math.min(t.width, t.height) && (t.margin = Math.min(t.width, t.height)), t.dotsOptions = {
    ...t.dotsOptions
  }, t.dotsOptions.gradient && (t.dotsOptions.gradient = Jt(t.dotsOptions.gradient)), t.cornersSquareOptions && (t.cornersSquareOptions = {
    ...t.cornersSquareOptions
  }, t.cornersSquareOptions.gradient && (t.cornersSquareOptions.gradient = Jt(t.cornersSquareOptions.gradient))), t.cornersDotOptions && (t.cornersDotOptions = {
    ...t.cornersDotOptions
  }, t.cornersDotOptions.gradient && (t.cornersDotOptions.gradient = Jt(t.cornersDotOptions.gradient))), t.backgroundOptions && (t.backgroundOptions = {
    ...t.backgroundOptions
  }, t.backgroundOptions.gradient && (t.backgroundOptions.gradient = Jt(t.backgroundOptions.gradient))), t;
}
function du(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var xo = { exports: {} };
(function(A, t) {
  var e = function() {
    var n = function(I, M) {
      var v = 236, p = 17, g = I, B = o[M], f = null, u = 0, D = null, w = [], C = {}, R = function(h, m) {
        u = g * 4 + 17, f = function(E) {
          for (var b = new Array(E), O = 0; O < E; O += 1) {
            b[O] = new Array(E);
            for (var J = 0; J < E; J += 1)
              b[O][J] = null;
          }
          return b;
        }(u), P(0, 0), P(u - 7, 0), P(0, u - 7), eA(), H(), yA(h, m), g >= 7 && uA(h), D == null && (D = To(g, B, w)), kA(D, m);
      }, P = function(h, m) {
        for (var E = -1; E <= 7; E += 1)
          if (!(h + E <= -1 || u <= h + E))
            for (var b = -1; b <= 7; b += 1)
              m + b <= -1 || u <= m + b || (0 <= E && E <= 6 && (b == 0 || b == 6) || 0 <= b && b <= 6 && (E == 0 || E == 6) || 2 <= E && E <= 4 && 2 <= b && b <= 4 ? f[h + E][m + b] = !0 : f[h + E][m + b] = !1);
      }, q = function() {
        for (var h = 0, m = 0, E = 0; E < 8; E += 1) {
          R(!0, E);
          var b = s.getLostPoint(C);
          (E == 0 || h > b) && (h = b, m = E);
        }
        return m;
      }, H = function() {
        for (var h = 8; h < u - 8; h += 1)
          f[h][6] == null && (f[h][6] = h % 2 == 0);
        for (var m = 8; m < u - 8; m += 1)
          f[6][m] == null && (f[6][m] = m % 2 == 0);
      }, eA = function() {
        for (var h = s.getPatternPosition(g), m = 0; m < h.length; m += 1)
          for (var E = 0; E < h.length; E += 1) {
            var b = h[m], O = h[E];
            if (f[b][O] == null)
              for (var J = -2; J <= 2; J += 1)
                for (var Z = -2; Z <= 2; Z += 1)
                  J == -2 || J == 2 || Z == -2 || Z == 2 || J == 0 && Z == 0 ? f[b + J][O + Z] = !0 : f[b + J][O + Z] = !1;
          }
      }, uA = function(h) {
        for (var m = s.getBCHTypeNumber(g), E = 0; E < 18; E += 1) {
          var b = !h && (m >> E & 1) == 1;
          f[Math.floor(E / 3)][E % 3 + u - 8 - 3] = b;
        }
        for (var E = 0; E < 18; E += 1) {
          var b = !h && (m >> E & 1) == 1;
          f[E % 3 + u - 8 - 3][Math.floor(E / 3)] = b;
        }
      }, yA = function(h, m) {
        for (var E = B << 3 | m, b = s.getBCHTypeInfo(E), O = 0; O < 15; O += 1) {
          var J = !h && (b >> O & 1) == 1;
          O < 6 ? f[O][8] = J : O < 8 ? f[O + 1][8] = J : f[u - 15 + O][8] = J;
        }
        for (var O = 0; O < 15; O += 1) {
          var J = !h && (b >> O & 1) == 1;
          O < 8 ? f[8][u - O - 1] = J : O < 9 ? f[8][15 - O - 1 + 1] = J : f[8][15 - O - 1] = J;
        }
        f[u - 8][8] = !h;
      }, kA = function(h, m) {
        for (var E = -1, b = u - 1, O = 7, J = 0, Z = s.getMaskFunction(m), x = u - 1; x > 0; x -= 2)
          for (x == 6 && (x -= 1); ; ) {
            for (var Y = 0; Y < 2; Y += 1)
              if (f[b][x - Y] == null) {
                var AA = !1;
                J < h.length && (AA = (h[J] >>> O & 1) == 1);
                var j = Z(b, x - Y);
                j && (AA = !AA), f[b][x - Y] = AA, O -= 1, O == -1 && (J += 1, O = 7);
              }
            if (b += E, b < 0 || u <= b) {
              b -= E, E = -E;
              break;
            }
          }
      }, YA = function(h, m) {
        for (var E = 0, b = 0, O = 0, J = new Array(m.length), Z = new Array(m.length), x = 0; x < m.length; x += 1) {
          var Y = m[x].dataCount, AA = m[x].totalCount - Y;
          b = Math.max(b, Y), O = Math.max(O, AA), J[x] = new Array(Y);
          for (var j = 0; j < J[x].length; j += 1)
            J[x][j] = 255 & h.getBuffer()[j + E];
          E += Y;
          var fA = s.getErrorCorrectPolynomial(AA), gA = l(J[x], fA.getLength() - 1), dn = gA.mod(fA);
          Z[x] = new Array(fA.getLength() - 1);
          for (var j = 0; j < Z[x].length; j += 1) {
            var pn = j + dn.getLength() - Z[x].length;
            Z[x][j] = pn >= 0 ? dn.getAt(pn) : 0;
          }
        }
        for (var Cn = 0, j = 0; j < m.length; j += 1)
          Cn += m[j].totalCount;
        for (var le = new Array(Cn), mt = 0, j = 0; j < b; j += 1)
          for (var x = 0; x < m.length; x += 1)
            j < J[x].length && (le[mt] = J[x][j], mt += 1);
        for (var j = 0; j < O; j += 1)
          for (var x = 0; x < m.length; x += 1)
            j < Z[x].length && (le[mt] = Z[x][j], mt += 1);
        return le;
      }, To = function(h, m, E) {
        for (var b = d.getRSBlocks(h, m), O = a(), J = 0; J < E.length; J += 1) {
          var Z = E[J];
          O.put(Z.getMode(), 4), O.put(Z.getLength(), s.getLengthInBits(Z.getMode(), h)), Z.write(O);
        }
        for (var x = 0, J = 0; J < b.length; J += 1)
          x += b[J].dataCount;
        if (O.getLengthInBits() > x * 8)
          throw "code length overflow. (" + O.getLengthInBits() + ">" + x * 8 + ")";
        for (O.getLengthInBits() + 4 <= x * 8 && O.put(0, 4); O.getLengthInBits() % 8 != 0; )
          O.putBit(!1);
        for (; !(O.getLengthInBits() >= x * 8 || (O.put(v, 8), O.getLengthInBits() >= x * 8)); )
          O.put(p, 8);
        return YA(O, b);
      };
      C.addData = function(h, m) {
        m = m || "Byte";
        var E = null;
        switch (m) {
          case "Numeric":
            E = y(h);
            break;
          case "Alphanumeric":
            E = k(h);
            break;
          case "Byte":
            E = S(h);
            break;
          case "Kanji":
            E = N(h);
            break;
          default:
            throw "mode:" + m;
        }
        w.push(E), D = null;
      }, C.isDark = function(h, m) {
        if (h < 0 || u <= h || m < 0 || u <= m)
          throw h + "," + m;
        return f[h][m];
      }, C.getModuleCount = function() {
        return u;
      }, C.make = function() {
        if (g < 1) {
          for (var h = 1; h < 40; h++) {
            for (var m = d.getRSBlocks(h, B), E = a(), b = 0; b < w.length; b++) {
              var O = w[b];
              E.put(O.getMode(), 4), E.put(O.getLength(), s.getLengthInBits(O.getMode(), h)), O.write(E);
            }
            for (var J = 0, b = 0; b < m.length; b++)
              J += m[b].dataCount;
            if (E.getLengthInBits() <= J * 8)
              break;
          }
          g = h;
        }
        R(!1, q());
      }, C.createTableTag = function(h, m) {
        h = h || 2, m = typeof m > "u" ? h * 4 : m;
        var E = "";
        E += '<table style="', E += " border-width: 0px; border-style: none;", E += " border-collapse: collapse;", E += " padding: 0px; margin: " + m + "px;", E += '">', E += "<tbody>";
        for (var b = 0; b < C.getModuleCount(); b += 1) {
          E += "<tr>";
          for (var O = 0; O < C.getModuleCount(); O += 1)
            E += '<td style="', E += " border-width: 0px; border-style: none;", E += " border-collapse: collapse;", E += " padding: 0px; margin: 0px;", E += " width: " + h + "px;", E += " height: " + h + "px;", E += " background-color: ", E += C.isDark(b, O) ? "#000000" : "#ffffff", E += ";", E += '"/>';
          E += "</tr>";
        }
        return E += "</tbody>", E += "</table>", E;
      }, C.createSvgTag = function(h, m, E, b) {
        var O = {};
        typeof arguments[0] == "object" && (O = arguments[0], h = O.cellSize, m = O.margin, E = O.alt, b = O.title), h = h || 2, m = typeof m > "u" ? h * 4 : m, E = typeof E == "string" ? { text: E } : E || {}, E.text = E.text || null, E.id = E.text ? E.id || "qrcode-description" : null, b = typeof b == "string" ? { text: b } : b || {}, b.text = b.text || null, b.id = b.text ? b.id || "qrcode-title" : null;
        var J = C.getModuleCount() * h + m * 2, Z, x, Y, AA, j = "", fA;
        for (fA = "l" + h + ",0 0," + h + " -" + h + ",0 0,-" + h + "z ", j += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', j += O.scalable ? "" : ' width="' + J + 'px" height="' + J + 'px"', j += ' viewBox="0 0 ' + J + " " + J + '" ', j += ' preserveAspectRatio="xMinYMin meet"', j += b.text || E.text ? ' role="img" aria-labelledby="' + _A([b.id, E.id].join(" ").trim()) + '"' : "", j += ">", j += b.text ? '<title id="' + _A(b.id) + '">' + _A(b.text) + "</title>" : "", j += E.text ? '<description id="' + _A(E.id) + '">' + _A(E.text) + "</description>" : "", j += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', j += '<path d="', Y = 0; Y < C.getModuleCount(); Y += 1)
          for (AA = Y * h + m, Z = 0; Z < C.getModuleCount(); Z += 1)
            C.isDark(Y, Z) && (x = Z * h + m, j += "M" + x + "," + AA + fA);
        return j += '" stroke="transparent" fill="black"/>', j += "</svg>", j;
      }, C.createDataURL = function(h, m) {
        h = h || 2, m = typeof m > "u" ? h * 4 : m;
        var E = C.getModuleCount() * h + m * 2, b = m, O = E - m;
        return V(E, E, function(J, Z) {
          if (b <= J && J < O && b <= Z && Z < O) {
            var x = Math.floor((J - b) / h), Y = Math.floor((Z - b) / h);
            return C.isDark(Y, x) ? 0 : 1;
          } else
            return 1;
        });
      }, C.createImgTag = function(h, m, E) {
        h = h || 2, m = typeof m > "u" ? h * 4 : m;
        var b = C.getModuleCount() * h + m * 2, O = "";
        return O += "<img", O += ' src="', O += C.createDataURL(h, m), O += '"', O += ' width="', O += b, O += '"', O += ' height="', O += b, O += '"', E && (O += ' alt="', O += _A(E), O += '"'), O += "/>", O;
      };
      var _A = function(h) {
        for (var m = "", E = 0; E < h.length; E += 1) {
          var b = h.charAt(E);
          switch (b) {
            case "<":
              m += "&lt;";
              break;
            case ">":
              m += "&gt;";
              break;
            case "&":
              m += "&amp;";
              break;
            case '"':
              m += "&quot;";
              break;
            default:
              m += b;
              break;
          }
        }
        return m;
      }, Zo = function(h) {
        var m = 1;
        h = typeof h > "u" ? m * 2 : h;
        var E = C.getModuleCount() * m + h * 2, b = h, O = E - h, J, Z, x, Y, AA, j = {
          "██": "█",
          "█ ": "▀",
          " █": "▄",
          "  ": " "
        }, fA = {
          "██": "▀",
          "█ ": "▀",
          " █": " ",
          "  ": " "
        }, gA = "";
        for (J = 0; J < E; J += 2) {
          for (x = Math.floor((J - b) / m), Y = Math.floor((J + 1 - b) / m), Z = 0; Z < E; Z += 1)
            AA = "█", b <= Z && Z < O && b <= J && J < O && C.isDark(x, Math.floor((Z - b) / m)) && (AA = " "), b <= Z && Z < O && b <= J + 1 && J + 1 < O && C.isDark(Y, Math.floor((Z - b) / m)) ? AA += " " : AA += "█", gA += h < 1 && J + 1 >= O ? fA[AA] : j[AA];
          gA += `
`;
        }
        return E % 2 && h > 0 ? gA.substring(0, gA.length - E - 1) + Array(E + 1).join("▀") : gA.substring(0, gA.length - 1);
      };
      return C.createASCII = function(h, m) {
        if (h = h || 1, h < 2)
          return Zo(m);
        h -= 1, m = typeof m > "u" ? h * 2 : m;
        var E = C.getModuleCount() * h + m * 2, b = m, O = E - m, J, Z, x, Y, AA = Array(h + 1).join("██"), j = Array(h + 1).join("  "), fA = "", gA = "";
        for (J = 0; J < E; J += 1) {
          for (x = Math.floor((J - b) / h), gA = "", Z = 0; Z < E; Z += 1)
            Y = 1, b <= Z && Z < O && b <= J && J < O && C.isDark(x, Math.floor((Z - b) / h)) && (Y = 0), gA += Y ? AA : j;
          for (x = 0; x < h; x += 1)
            fA += gA + `
`;
        }
        return fA.substring(0, fA.length - 1);
      }, C.renderTo2dContext = function(h, m) {
        m = m || 2;
        for (var E = C.getModuleCount(), b = 0; b < E; b++)
          for (var O = 0; O < E; O++)
            h.fillStyle = C.isDark(b, O) ? "black" : "white", h.fillRect(b * m, O * m, m, m);
      }, C;
    };
    n.stringToBytesFuncs = {
      default: function(I) {
        for (var M = [], v = 0; v < I.length; v += 1) {
          var p = I.charCodeAt(v);
          M.push(p & 255);
        }
        return M;
      }
    }, n.stringToBytes = n.stringToBytesFuncs.default, n.createStringToBytes = function(I, M) {
      var v = function() {
        for (var g = T(I), B = function() {
          var H = g.read();
          if (H == -1)
            throw "eof";
          return H;
        }, f = 0, u = {}; ; ) {
          var D = g.read();
          if (D == -1)
            break;
          var w = B(), C = B(), R = B(), P = String.fromCharCode(D << 8 | w), q = C << 8 | R;
          u[P] = q, f += 1;
        }
        if (f != M)
          throw f + " != " + M;
        return u;
      }(), p = "?".charCodeAt(0);
      return function(g) {
        for (var B = [], f = 0; f < g.length; f += 1) {
          var u = g.charCodeAt(f);
          if (u < 128)
            B.push(u);
          else {
            var D = v[g.charAt(f)];
            typeof D == "number" ? (D & 255) == D ? B.push(D) : (B.push(D >>> 8), B.push(D & 255)) : B.push(p);
          }
        }
        return B;
      };
    };
    var r = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    }, o = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, i = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    }, s = function() {
      var I = [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
      ], M = 1335, v = 7973, p = 21522, g = {}, B = function(f) {
        for (var u = 0; f != 0; )
          u += 1, f >>>= 1;
        return u;
      };
      return g.getBCHTypeInfo = function(f) {
        for (var u = f << 10; B(u) - B(M) >= 0; )
          u ^= M << B(u) - B(M);
        return (f << 10 | u) ^ p;
      }, g.getBCHTypeNumber = function(f) {
        for (var u = f << 12; B(u) - B(v) >= 0; )
          u ^= v << B(u) - B(v);
        return f << 12 | u;
      }, g.getPatternPosition = function(f) {
        return I[f - 1];
      }, g.getMaskFunction = function(f) {
        switch (f) {
          case i.PATTERN000:
            return function(u, D) {
              return (u + D) % 2 == 0;
            };
          case i.PATTERN001:
            return function(u, D) {
              return u % 2 == 0;
            };
          case i.PATTERN010:
            return function(u, D) {
              return D % 3 == 0;
            };
          case i.PATTERN011:
            return function(u, D) {
              return (u + D) % 3 == 0;
            };
          case i.PATTERN100:
            return function(u, D) {
              return (Math.floor(u / 2) + Math.floor(D / 3)) % 2 == 0;
            };
          case i.PATTERN101:
            return function(u, D) {
              return u * D % 2 + u * D % 3 == 0;
            };
          case i.PATTERN110:
            return function(u, D) {
              return (u * D % 2 + u * D % 3) % 2 == 0;
            };
          case i.PATTERN111:
            return function(u, D) {
              return (u * D % 3 + (u + D) % 2) % 2 == 0;
            };
          default:
            throw "bad maskPattern:" + f;
        }
      }, g.getErrorCorrectPolynomial = function(f) {
        for (var u = l([1], 0), D = 0; D < f; D += 1)
          u = u.multiply(l([1, c.gexp(D)], 0));
        return u;
      }, g.getLengthInBits = function(f, u) {
        if (1 <= u && u < 10)
          switch (f) {
            case r.MODE_NUMBER:
              return 10;
            case r.MODE_ALPHA_NUM:
              return 9;
            case r.MODE_8BIT_BYTE:
              return 8;
            case r.MODE_KANJI:
              return 8;
            default:
              throw "mode:" + f;
          }
        else if (u < 27)
          switch (f) {
            case r.MODE_NUMBER:
              return 12;
            case r.MODE_ALPHA_NUM:
              return 11;
            case r.MODE_8BIT_BYTE:
              return 16;
            case r.MODE_KANJI:
              return 10;
            default:
              throw "mode:" + f;
          }
        else if (u < 41)
          switch (f) {
            case r.MODE_NUMBER:
              return 14;
            case r.MODE_ALPHA_NUM:
              return 13;
            case r.MODE_8BIT_BYTE:
              return 16;
            case r.MODE_KANJI:
              return 12;
            default:
              throw "mode:" + f;
          }
        else
          throw "type:" + u;
      }, g.getLostPoint = function(f) {
        for (var u = f.getModuleCount(), D = 0, w = 0; w < u; w += 1)
          for (var C = 0; C < u; C += 1) {
            for (var R = 0, P = f.isDark(w, C), q = -1; q <= 1; q += 1)
              if (!(w + q < 0 || u <= w + q))
                for (var H = -1; H <= 1; H += 1)
                  C + H < 0 || u <= C + H || q == 0 && H == 0 || P == f.isDark(w + q, C + H) && (R += 1);
            R > 5 && (D += 3 + R - 5);
          }
        for (var w = 0; w < u - 1; w += 1)
          for (var C = 0; C < u - 1; C += 1) {
            var eA = 0;
            f.isDark(w, C) && (eA += 1), f.isDark(w + 1, C) && (eA += 1), f.isDark(w, C + 1) && (eA += 1), f.isDark(w + 1, C + 1) && (eA += 1), (eA == 0 || eA == 4) && (D += 3);
          }
        for (var w = 0; w < u; w += 1)
          for (var C = 0; C < u - 6; C += 1)
            f.isDark(w, C) && !f.isDark(w, C + 1) && f.isDark(w, C + 2) && f.isDark(w, C + 3) && f.isDark(w, C + 4) && !f.isDark(w, C + 5) && f.isDark(w, C + 6) && (D += 40);
        for (var C = 0; C < u; C += 1)
          for (var w = 0; w < u - 6; w += 1)
            f.isDark(w, C) && !f.isDark(w + 1, C) && f.isDark(w + 2, C) && f.isDark(w + 3, C) && f.isDark(w + 4, C) && !f.isDark(w + 5, C) && f.isDark(w + 6, C) && (D += 40);
        for (var uA = 0, C = 0; C < u; C += 1)
          for (var w = 0; w < u; w += 1)
            f.isDark(w, C) && (uA += 1);
        var yA = Math.abs(100 * uA / u / u - 50) / 5;
        return D += yA * 10, D;
      }, g;
    }(), c = function() {
      for (var I = new Array(256), M = new Array(256), v = 0; v < 8; v += 1)
        I[v] = 1 << v;
      for (var v = 8; v < 256; v += 1)
        I[v] = I[v - 4] ^ I[v - 5] ^ I[v - 6] ^ I[v - 8];
      for (var v = 0; v < 255; v += 1)
        M[I[v]] = v;
      var p = {};
      return p.glog = function(g) {
        if (g < 1)
          throw "glog(" + g + ")";
        return M[g];
      }, p.gexp = function(g) {
        for (; g < 0; )
          g += 255;
        for (; g >= 256; )
          g -= 255;
        return I[g];
      }, p;
    }();
    function l(I, M) {
      if (typeof I.length > "u")
        throw I.length + "/" + M;
      var v = function() {
        for (var g = 0; g < I.length && I[g] == 0; )
          g += 1;
        for (var B = new Array(I.length - g + M), f = 0; f < I.length - g; f += 1)
          B[f] = I[f + g];
        return B;
      }(), p = {};
      return p.getAt = function(g) {
        return v[g];
      }, p.getLength = function() {
        return v.length;
      }, p.multiply = function(g) {
        for (var B = new Array(p.getLength() + g.getLength() - 1), f = 0; f < p.getLength(); f += 1)
          for (var u = 0; u < g.getLength(); u += 1)
            B[f + u] ^= c.gexp(c.glog(p.getAt(f)) + c.glog(g.getAt(u)));
        return l(B, 0);
      }, p.mod = function(g) {
        if (p.getLength() - g.getLength() < 0)
          return p;
        for (var B = c.glog(p.getAt(0)) - c.glog(g.getAt(0)), f = new Array(p.getLength()), u = 0; u < p.getLength(); u += 1)
          f[u] = p.getAt(u);
        for (var u = 0; u < g.getLength(); u += 1)
          f[u] ^= c.gexp(c.glog(g.getAt(u)) + B);
        return l(f, 0).mod(g);
      }, p;
    }
    var d = function() {
      var I = [
        // L
        // M
        // Q
        // H
        // 1
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        // 2
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        // 3
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        // 4
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        // 5
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        // 6
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        // 7
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        // 8
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        // 9
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        // 10
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        // 11
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        // 12
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        // 13
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        // 14
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        // 15
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12, 7, 37, 13],
        // 16
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        // 17
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        // 18
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        // 19
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        // 20
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        // 21
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        // 22
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        // 23
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        // 24
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        // 25
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        // 26
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        // 27
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        // 28
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        // 29
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        // 30
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        // 31
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        // 32
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        // 33
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        // 34
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        // 35
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        // 36
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        // 37
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        // 38
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        // 39
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        // 40
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
      ], M = function(g, B) {
        var f = {};
        return f.totalCount = g, f.dataCount = B, f;
      }, v = {}, p = function(g, B) {
        switch (B) {
          case o.L:
            return I[(g - 1) * 4 + 0];
          case o.M:
            return I[(g - 1) * 4 + 1];
          case o.Q:
            return I[(g - 1) * 4 + 2];
          case o.H:
            return I[(g - 1) * 4 + 3];
          default:
            return;
        }
      };
      return v.getRSBlocks = function(g, B) {
        var f = p(g, B);
        if (typeof f > "u")
          throw "bad rs block @ typeNumber:" + g + "/errorCorrectionLevel:" + B;
        for (var u = f.length / 3, D = [], w = 0; w < u; w += 1)
          for (var C = f[w * 3 + 0], R = f[w * 3 + 1], P = f[w * 3 + 2], q = 0; q < C; q += 1)
            D.push(M(R, P));
        return D;
      }, v;
    }(), a = function() {
      var I = [], M = 0, v = {};
      return v.getBuffer = function() {
        return I;
      }, v.getAt = function(p) {
        var g = Math.floor(p / 8);
        return (I[g] >>> 7 - p % 8 & 1) == 1;
      }, v.put = function(p, g) {
        for (var B = 0; B < g; B += 1)
          v.putBit((p >>> g - B - 1 & 1) == 1);
      }, v.getLengthInBits = function() {
        return M;
      }, v.putBit = function(p) {
        var g = Math.floor(M / 8);
        I.length <= g && I.push(0), p && (I[g] |= 128 >>> M % 8), M += 1;
      }, v;
    }, y = function(I) {
      var M = r.MODE_NUMBER, v = I, p = {};
      p.getMode = function() {
        return M;
      }, p.getLength = function(f) {
        return v.length;
      }, p.write = function(f) {
        for (var u = v, D = 0; D + 2 < u.length; )
          f.put(g(u.substring(D, D + 3)), 10), D += 3;
        D < u.length && (u.length - D == 1 ? f.put(g(u.substring(D, D + 1)), 4) : u.length - D == 2 && f.put(g(u.substring(D, D + 2)), 7));
      };
      var g = function(f) {
        for (var u = 0, D = 0; D < f.length; D += 1)
          u = u * 10 + B(f.charAt(D));
        return u;
      }, B = function(f) {
        if ("0" <= f && f <= "9")
          return f.charCodeAt(0) - "0".charCodeAt(0);
        throw "illegal char :" + f;
      };
      return p;
    }, k = function(I) {
      var M = r.MODE_ALPHA_NUM, v = I, p = {};
      p.getMode = function() {
        return M;
      }, p.getLength = function(B) {
        return v.length;
      }, p.write = function(B) {
        for (var f = v, u = 0; u + 1 < f.length; )
          B.put(
            g(f.charAt(u)) * 45 + g(f.charAt(u + 1)),
            11
          ), u += 2;
        u < f.length && B.put(g(f.charAt(u)), 6);
      };
      var g = function(B) {
        if ("0" <= B && B <= "9")
          return B.charCodeAt(0) - "0".charCodeAt(0);
        if ("A" <= B && B <= "Z")
          return B.charCodeAt(0) - "A".charCodeAt(0) + 10;
        switch (B) {
          case " ":
            return 36;
          case "$":
            return 37;
          case "%":
            return 38;
          case "*":
            return 39;
          case "+":
            return 40;
          case "-":
            return 41;
          case ".":
            return 42;
          case "/":
            return 43;
          case ":":
            return 44;
          default:
            throw "illegal char :" + B;
        }
      };
      return p;
    }, S = function(I) {
      var M = r.MODE_8BIT_BYTE, v = n.stringToBytes(I), p = {};
      return p.getMode = function() {
        return M;
      }, p.getLength = function(g) {
        return v.length;
      }, p.write = function(g) {
        for (var B = 0; B < v.length; B += 1)
          g.put(v[B], 8);
      }, p;
    }, N = function(I) {
      var M = r.MODE_KANJI, v = n.stringToBytesFuncs.SJIS;
      if (!v)
        throw "sjis not supported.";
      (function(B, f) {
        var u = v(B);
        if (u.length != 2 || (u[0] << 8 | u[1]) != f)
          throw "sjis not supported.";
      })("友", 38726);
      var p = v(I), g = {};
      return g.getMode = function() {
        return M;
      }, g.getLength = function(B) {
        return ~~(p.length / 2);
      }, g.write = function(B) {
        for (var f = p, u = 0; u + 1 < f.length; ) {
          var D = (255 & f[u]) << 8 | 255 & f[u + 1];
          if (33088 <= D && D <= 40956)
            D -= 33088;
          else if (57408 <= D && D <= 60351)
            D -= 49472;
          else
            throw "illegal char at " + (u + 1) + "/" + D;
          D = (D >>> 8 & 255) * 192 + (D & 255), B.put(D, 13), u += 2;
        }
        if (u < f.length)
          throw "illegal char at " + (u + 1);
      }, g;
    }, z = function() {
      var I = [], M = {};
      return M.writeByte = function(v) {
        I.push(v & 255);
      }, M.writeShort = function(v) {
        M.writeByte(v), M.writeByte(v >>> 8);
      }, M.writeBytes = function(v, p, g) {
        p = p || 0, g = g || v.length;
        for (var B = 0; B < g; B += 1)
          M.writeByte(v[B + p]);
      }, M.writeString = function(v) {
        for (var p = 0; p < v.length; p += 1)
          M.writeByte(v.charCodeAt(p));
      }, M.toByteArray = function() {
        return I;
      }, M.toString = function() {
        var v = "";
        v += "[";
        for (var p = 0; p < I.length; p += 1)
          p > 0 && (v += ","), v += I[p];
        return v += "]", v;
      }, M;
    }, X = function() {
      var I = 0, M = 0, v = 0, p = "", g = {}, B = function(u) {
        p += String.fromCharCode(f(u & 63));
      }, f = function(u) {
        if (!(u < 0)) {
          if (u < 26)
            return 65 + u;
          if (u < 52)
            return 97 + (u - 26);
          if (u < 62)
            return 48 + (u - 52);
          if (u == 62)
            return 43;
          if (u == 63)
            return 47;
        }
        throw "n:" + u;
      };
      return g.writeByte = function(u) {
        for (I = I << 8 | u & 255, M += 8, v += 1; M >= 6; )
          B(I >>> M - 6), M -= 6;
      }, g.flush = function() {
        if (M > 0 && (B(I << 6 - M), I = 0, M = 0), v % 3 != 0)
          for (var u = 3 - v % 3, D = 0; D < u; D += 1)
            p += "=";
      }, g.toString = function() {
        return p;
      }, g;
    }, T = function(I) {
      var M = I, v = 0, p = 0, g = 0, B = {};
      B.read = function() {
        for (; g < 8; ) {
          if (v >= M.length) {
            if (g == 0)
              return -1;
            throw "unexpected end of file./" + g;
          }
          var u = M.charAt(v);
          if (v += 1, u == "=")
            return g = 0, -1;
          u.match(/^\s$/) || (p = p << 6 | f(u.charCodeAt(0)), g += 6);
        }
        var D = p >>> g - 8 & 255;
        return g -= 8, D;
      };
      var f = function(u) {
        if (65 <= u && u <= 90)
          return u - 65;
        if (97 <= u && u <= 122)
          return u - 97 + 26;
        if (48 <= u && u <= 57)
          return u - 48 + 52;
        if (u == 43)
          return 62;
        if (u == 47)
          return 63;
        throw "c:" + u;
      };
      return B;
    }, U = function(I, M) {
      var v = I, p = M, g = new Array(I * M), B = {};
      B.setPixel = function(w, C, R) {
        g[C * v + w] = R;
      }, B.write = function(w) {
        w.writeString("GIF87a"), w.writeShort(v), w.writeShort(p), w.writeByte(128), w.writeByte(0), w.writeByte(0), w.writeByte(0), w.writeByte(0), w.writeByte(0), w.writeByte(255), w.writeByte(255), w.writeByte(255), w.writeString(","), w.writeShort(0), w.writeShort(0), w.writeShort(v), w.writeShort(p), w.writeByte(0);
        var C = 2, R = u(C);
        w.writeByte(C);
        for (var P = 0; R.length - P > 255; )
          w.writeByte(255), w.writeBytes(R, P, 255), P += 255;
        w.writeByte(R.length - P), w.writeBytes(R, P, R.length - P), w.writeByte(0), w.writeString(";");
      };
      var f = function(w) {
        var C = w, R = 0, P = 0, q = {};
        return q.write = function(H, eA) {
          if (H >>> eA)
            throw "length over";
          for (; R + eA >= 8; )
            C.writeByte(255 & (H << R | P)), eA -= 8 - R, H >>>= 8 - R, P = 0, R = 0;
          P = H << R | P, R = R + eA;
        }, q.flush = function() {
          R > 0 && C.writeByte(P);
        }, q;
      }, u = function(w) {
        for (var C = 1 << w, R = (1 << w) + 1, P = w + 1, q = D(), H = 0; H < C; H += 1)
          q.add(String.fromCharCode(H));
        q.add(String.fromCharCode(C)), q.add(String.fromCharCode(R));
        var eA = z(), uA = f(eA);
        uA.write(C, P);
        var yA = 0, kA = String.fromCharCode(g[yA]);
        for (yA += 1; yA < g.length; ) {
          var YA = String.fromCharCode(g[yA]);
          yA += 1, q.contains(kA + YA) ? kA = kA + YA : (uA.write(q.indexOf(kA), P), q.size() < 4095 && (q.size() == 1 << P && (P += 1), q.add(kA + YA)), kA = YA);
        }
        return uA.write(q.indexOf(kA), P), uA.write(R, P), uA.flush(), eA.toByteArray();
      }, D = function() {
        var w = {}, C = 0, R = {};
        return R.add = function(P) {
          if (R.contains(P))
            throw "dup key:" + P;
          w[P] = C, C += 1;
        }, R.size = function() {
          return C;
        }, R.indexOf = function(P) {
          return w[P];
        }, R.contains = function(P) {
          return typeof w[P] < "u";
        }, R;
      };
      return B;
    }, V = function(I, M, v) {
      for (var p = U(I, M), g = 0; g < M; g += 1)
        for (var B = 0; B < I; B += 1)
          p.setPixel(B, g, v(B, g));
      var f = z();
      p.write(f);
      for (var u = X(), D = f.toByteArray(), w = 0; w < D.length; w += 1)
        u.writeByte(D[w]);
      return u.flush(), "data:image/gif;base64," + u;
    };
    return n;
  }();
  (function() {
    e.stringToBytesFuncs["UTF-8"] = function(n) {
      function r(o) {
        for (var i = [], s = 0; s < o.length; s++) {
          var c = o.charCodeAt(s);
          c < 128 ? i.push(c) : c < 2048 ? i.push(
            192 | c >> 6,
            128 | c & 63
          ) : c < 55296 || c >= 57344 ? i.push(
            224 | c >> 12,
            128 | c >> 6 & 63,
            128 | c & 63
          ) : (s++, c = 65536 + ((c & 1023) << 10 | o.charCodeAt(s) & 1023), i.push(
            240 | c >> 18,
            128 | c >> 12 & 63,
            128 | c >> 6 & 63,
            128 | c & 63
          ));
        }
        return i;
      }
      return r(n);
    };
  })(), function(n) {
    A.exports = n();
  }(function() {
    return e;
  });
})(xo);
var pu = xo.exports;
const Cu = /* @__PURE__ */ du(pu);
class gn {
  constructor(t) {
    aA(this, "_options"), aA(this, "_container"), aA(this, "_canvas"), aA(this, "_qr"), aA(this, "_drawingPromise"), this._options = t ? fr(_t(lr, t)) : lr, this.update();
  }
  static _clearContainer(t) {
    t && (t.innerHTML = "");
  }
  update(t) {
    gn._clearContainer(this._container), this._options = t ? fr(_t(this._options, t)) : this._options, this._options.data && (this._qr = Cu(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || ou(this._options.data)), this._qr.make(), this._canvas = new fu(this._options), this._drawingPromise = this._canvas.drawQR(this._qr), this.append(this._container));
  }
  append(t) {
    if (t) {
      if (typeof t.appendChild != "function")
        throw "Container should be a single DOM node";
      this._canvas && t.appendChild(this._canvas.getCanvas()), this._container = t;
    }
  }
  async getImageUrl(t) {
    return this._drawingPromise && await this._drawingPromise === void 0 && this._canvas ? this._canvas.getCanvas().toDataURL(`image/${t}`) : "";
  }
  download(t) {
    this._drawingPromise && this._drawingPromise.then(() => {
      if (!this._canvas)
        return;
      const e = t, n = e.extension || "png", r = e.name || "qr", o = this._canvas.getCanvas().toDataURL(`image/${n}`);
      iu(o, `${r}.${n}`);
    });
  }
}
const Eu = ["src"], Bu = { key: 1 }, Qu = /* @__PURE__ */ Io({
  __name: "QRCodeVue3Async",
  props: {
    value: { default: "" },
    width: { default: 300 },
    height: { default: 300 },
    margin: { default: 0 },
    imgclass: { default: "" },
    myclass: { default: "" },
    downloadButton: { default: "" },
    ButtonName: { default: "Download" },
    qrOptions: { default: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q"
    } },
    imageOptions: { default: { hideBackgroundDots: !0, imageSize: 0.4, margin: 0 } },
    dotsOptions: { default: {
      type: "dots",
      color: "#6a1a4c",
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#6a1a4c" },
          { offset: 1, color: "#6a1a4c" }
        ]
      }
    } },
    backgroundOptions: { default: { color: "#ffffff" } },
    cornersSquareOptions: { default: { type: "dot", color: "#000000" } },
    cornersDotOptions: { default: { type: void 0, color: "#000000" } },
    fileExt: { default: "png" },
    image: { default: "" },
    download: { type: Boolean, default: !1 },
    downloadOptions: { default: { name: "vqr", extension: "png" } }
  },
  async setup(A) {
    let t, e;
    const n = A, r = new gn({
      data: n.value,
      width: n.width,
      height: n.height,
      margin: n.margin,
      qrOptions: n.qrOptions,
      imageOptions: n.imageOptions,
      dotsOptions: n.dotsOptions,
      backgroundOptions: n.backgroundOptions,
      image: n.image,
      cornersSquareOptions: n.cornersSquareOptions,
      cornersDotOptions: n.cornersDotOptions
    });
    let o = ([t, e] = Rc(() => r.getImageUrl(n.fileExt)), t = await t, e(), t);
    function i() {
      r.download(n.downloadOptions);
    }
    return (s, c) => (st(), ye("div", null, [
      Tt(o) ? (st(), ye("div", {
        key: 0,
        class: rt(s.myclass)
      }, [
        Ht("img", {
          src: Tt(o),
          class: rt(s.imgclass),
          crossorigin: "anonymous"
        }, null, 10, Eu)
      ], 2)) : sr("", !0),
      Tt(o) && s.download ? (st(), ye("div", Bu, [
        Ht("button", {
          onClick: i,
          class: rt(s.downloadButton)
        }, sa(s.ButtonName), 3)
      ])) : sr("", !0)
    ]));
  }
}), gr = /* @__PURE__ */ Io({
  __name: "QRCodeVue3",
  props: {
    value: { default: "" },
    width: { default: 300 },
    height: { default: 300 },
    margin: { default: 0 },
    imgclass: { default: "" },
    myclass: { default: "" },
    downloadButton: { default: "" },
    ButtonName: { default: "Download" },
    qrOptions: { default: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q"
    } },
    imageOptions: { default: { hideBackgroundDots: !0, imageSize: 0.4, margin: 0 } },
    dotsOptions: { default: {
      type: "dots",
      color: "#6a1a4c",
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#6a1a4c" },
          { offset: 1, color: "#6a1a4c" }
        ]
      }
    } },
    backgroundOptions: { default: { color: "#ffffff" } },
    cornersSquareOptions: { default: { type: "dot", color: "#000000" } },
    cornersDotOptions: { default: { type: void 0, color: "#000000" } },
    fileExt: { default: "png" },
    image: { default: "" },
    download: { type: Boolean, default: !1 },
    downloadOptions: { default: { name: "vqr", extension: "png" } }
  },
  setup(A) {
    const t = A;
    return (e, n) => (st(), Oo(cc, null, {
      default: oc(() => [
        xA(Qu, {
          "background-options": t.backgroundOptions,
          "button-name": t.ButtonName,
          "corners-dot-options": t.cornersDotOptions,
          "corners-square-options": t.cornersSquareOptions,
          "dots-options": t.dotsOptions,
          download: t.download,
          "download-button": t.downloadButton,
          "download-options": t.downloadOptions,
          "file-ext": t.fileExt,
          height: t.height,
          image: t.image,
          "image-options": t.imageOptions,
          imgclass: t.imgclass,
          margin: t.margin,
          value: t.value,
          myclass: t.myclass,
          "qr-options": t.qrOptions,
          width: t.width
        }, null, 8, ["background-options", "button-name", "corners-dot-options", "corners-square-options", "dots-options", "download", "download-button", "download-options", "file-ext", "height", "image", "image-options", "imgclass", "margin", "value", "myclass", "qr-options", "width"])
      ]),
      _: 1
    }));
  }
}), yu = /* @__PURE__ */ Er({
  __name: "Preloader",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "10px"
    },
    mobileWidth: String,
    mobileHeight: String,
    disabled: Boolean,
    dark: Boolean
  },
  setup(A) {
    const t = A;
    Go((i) => ({
      "5fc7d666": t.width,
      "19978b00": t.height,
      "19f800b0": n.value,
      97304866: r.value
    }));
    const e = nA(t.dark ?? !1), n = nA(t.mobileWidth ?? t.width), r = nA(t.mobileHeight ?? t.height), o = nA(null);
    return dr(() => {
      Br(() => {
        if (!t.disabled && o.value !== null) {
          let i = 1.5, s = setInterval(function() {
            i -= 0.1, o.value !== null && (o.value.style.animationDuration = i + "s", i <= 0.8 && clearInterval(s));
          }, 1e4);
        }
      });
    }), (i, s) => (IA(), RA("div", {
      ref_key: "loader",
      ref: o,
      class: Fo([e.value && "skeleton-loader_dark", !e.value && "skeleton-loader"])
    }, null, 2));
  }
});
const Iu = (A, t) => {
  const e = A.__vccOpts || A;
  for (const [n, r] of t)
    e[n] = r;
  return e;
}, Uo = /* @__PURE__ */ Iu(yu, [["__scopeId", "data-v-f907348b"]]), vu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACSAAAAkgCAYAAACdrwGiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAABvtRJREFUeNrs3buKU2EYRuFk72SmGNRKBEFjaWFtpzDgVXgqxMtQm8HLsFK8DcHSThA81IqnesBMMomNaJ1VyvM0H3/71gv+6aePH7ZPj45uXrt69faXHz/fjOPsYL1aHY/TyWy2t7e/3WzW28k/2+3f1+mfO04AAAAAAAAAAID/0jiOs5Plr+PtZLrem88P1qeny4sXzl9/9/7Dy0ePn7yePrh75/DZ8xevTAUAAAAAAAAAAOzi4f17t4bLi8UNUwAAAAAAAAAAALtaLBaHw9cfP9+aAgAAAAAAAAAA2NXnb9/fDOfOnL1iCgAAAAAAAAAAYFfnzpy9NMzH6cwUAAAAAAAAAADArubjsD+sNpulKQAAAAAAAAAAgF2tN5vlsDo5OTYFAAAAAAAAAACwq/V6vRyGcfQFGwAAAAAAAAAAsLPpMJ0MZgAAAAAAAAAAACoBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAA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AAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQISAAAAAAAAAADQmQIS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AAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSAAAAAAAAAAAwGACSMD/397d4kYVBWAYbu/cmRHVpUBYQAUJrpKFsBbANGyFbZCAqyahoBgIBlTbNKHMz8UQgp1XkucxJ0cc8+k3OQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgG3bb7cYMAAAAAAAAAADAvqbddDDMF4sjUwAAAAAAAAAAAPsax3E5zIdhaQoAAAAAAAAAAGBf4zAsh/V28gUbAAAAAAAAAACwt/V2dzdc3Vx/NgUAAAAAAAAAALCvq5vrr8ODe8dPTAEAAAAAAAAAAOzr0f2Ts+HLavXOFAAAAAAAAAAAwL5Wq9Wbw08fL6dX5+dPH5+ePvv2/cfFbDYebdbr29nhwTguFstpt9tM/zyapr+37Z9zZkoAAAAAAAAAAPg/zWaz8dfdz9vp4HCzmM+PNtvt3cOT47P3Hy5fP3/x8u1vLxMI1REyj8QAAAAASUVORK5CYII=", we = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACSAAAAkgCAYAAACdrwGiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAA9C5JREFUeNrs3buKU2EYRuFk72SmGNRKBEFjaWFtpzDgVXgqxMtQm8HLsFK8DcHSThA81IqnesBMMomNaJ1VyvM0H3/71gv+6aePH7ZPj45uXrt69faXHz/fjOPsYL1aHY/TyWy2t7e/3WzW28k/2+3f1+mfO04AAAAAAAAAAID/0jiOs5Plr+PtZLrem88P1qeny4sXzl9/9/7Dy0ePn7yePrh75/DZ8xevTAUAAAAAAAAAAOzi4f17t4bLi8UNUwAAAAAAAAAAALtaLBaHw9cfP9+aAgAAAAAAAAAA2NXnb9/fDOfOnL1iCgAAAAAAAAAAYFfnzpy9NMzH6cwUAAAAAAAAAADArubjsD+sNpulKQAAAAAAAAAAgF2tN5vlsDo5OTYFAAAAAAAAAACwq/V6vRyGcfQFGwAAAAAAAAAAsLPpMJ0MZgAAAAAAAAAAACoBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAA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AAQTIAEAAAAAAAAAAMEESAAAAAAAAAAAQDABEgAAAAAAAAAAEEyABAAAAAAAAAAABBMgAQAAAAAAAAAAwQRIAAAAAAAAAABAMAESAAAAAAAAAAAQTIAEAAAAAAAAAAAEEyABAAAAAAAAAADBBEgAAAAAAAAAAEAwARIAAAAAAAAAABBMgAQAAAAAAAAAAAQTIAEAAAAAAAAAAMEESAAAAAAAAAAAQDABEgAAAAAAAAAAEEyABAAAAAAAAAAABBMgAQAAAAAAAAAAwQRIAAAAAAAAAABAMAESAAAAAAAAAAAQTIAEAAAAAAAAAAAEEyABAAAAAAAAAADBBEgAAAAAAAAAAEAwARIAAAAAAAAAABBMgAQAAAAAAAAAAAQTIAEAAAAAAAAAAMEESAAAAAAAAAAAQDABEgAAAAAAAAAAEEyABAAAAAAAAAAABBMgAQAAAAAAAAAAwQRIAAAAAAAAAABAMAESAAAAAAAAAAAQTIAEAAAAAAAAAAAEEyABAAAAAAAAAADBBEgAAAAAAAAAAEAwARIAAAAAAAAAABBMgAQAAAAAAAAAAAQTIAEAAAAAAAAAAMEESAAAAAAAAAAAQDABEgAAAAAAAAAAEEyABAAAAAAAAAAABBMgAQAAAAAAAAAAwQRIAAAAAAAAAABAMAESAAAAAAAAAAAQTIAEAAAAAAAAAAAEEyABAAAAAAAAAADBBEgAAAAAAAAAAEAwARIAAAAAAAAAABBMgAQAAAAAAAAAAAQTIAEAAAAAAAAAAMEESAAAAAAAAAAAQDABEgAAAAAAAAAAEEyABAAAAAAAAAAABBMgAQAAAAAAAAAAwQRIAAAAAAAAAABAMAESAAAAAAAAAAAQTIAEAAAAAAAAAAAEEyABAAAAAAAAAADBBEgAAAAAAAAAAEAwARIAAAAAAAAAABBMgAQAAAAAAAAAAAQTIAEAAAAAAAAAAMEESAAAAAAAAAAAQDABEgAAAAAAAAAAEEyABAAAAAAAAAAABBMgAQAAAAAAAAAAwQRIAAAAAAAAAABAMAESAAAAAAAAAAAQTIAEAAAAAAAAAAAEEyABAAAAAAAAAADBBEgAAAAAAAAAAEAwARIAAAAAAAAAABBMgAQAAAAAAAAAAAQTIAEAAAAAAAAAAMEESAAAAAAAAAAAQDABEgAAAAAAAAAAEEyABAAAAAAAAAAABBMgAQAA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kAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAAAAAAAAAABAmAAJAAAAAAAAAAAIEyABAAAAAAAAAABhAiQAAAAAAAAAACBMgAQAAAAAAAAAAIQJkAAAAAAAAAAAgDABEgAAAAAAAAAAECZAAgAAAAAAAAAAwgRIAPC/7d0tblRRAIbh9s6dGVFdCoQFVJDgKlkIawFMw1bYBgm4ahIKioFgQLVNE8r8XAwh2HkleR5zcsQxn36TAwAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACATIAEAAAAAAAAAABkAiQAAAAAAAAAACATIAEAAAAAAAAAAJkACQAAAAAAAAAAyARIAAAAAAAAAABAJkACAAAAAAAAAAAyARIAAAAAAAAAAJAJkAAAAAAAAAAAgEyABAAAAAAAAAAAZAIkAAAAAAAAAAAgEyABAAAAAAAAAACZAAkAAAAAAAAAAMgESAAAAAAAAAAAQCZAAgAAAAAAAAAAMgESAAAAAAAAAACQCZAAAAAAAAAAAIBMgAQAAAAAAAAAAGQCJAAAAAAAAAAAIBMgAQAAAAAAAAAAmQAJAAAAAAAAAADIBEgAAAAAAAAAAEAmQAIAAAAAAAAAADIBEgAAAAAAAAAAkAmQAAAAAAAAAACAbNhttxszAAAAAAAAAAAA+5p208EwXyyOTAEAAAAAAAAAAOxrHMflMB+GpSkAAAAAAAAAAIB9jcOwHNbbyRdsAAAAAAAAAADA3tbb3d1wdXP92RQAAAAAAAAAAMC+rm6uvw4P7h0/MQUAAAAAAAAAALCvR/dPzoYvq9U7UwAAAAAAAAAAAPtarVZvDj99vJxenZ8/fXx6+uzb9x8Xs9l4tFmvb2eHB+O4WCyn3W4z/fNomv7etn/OmSkBAAAAAAAAAOD/NJvNxl93P2+ng8PNYj4/2my3dw9Pjs/ef7h8/fzFy7e/AWW9TFCDa2ANAAAAAElFTkSuQmCC", hu = { style: { "text-align": "center" } }, mu = ["onClick"], Du = {
  key: 1,
  style: { "text-align": "center" }
}, wu = ["href"], bu = ["src"], ku = /* @__PURE__ */ vA("br", null, null, -1), Su = /* @__PURE__ */ vA("br", null, null, -1), Ou = {
  key: 2,
  style: { "text-align": "center" }
}, Pu = ["innerHTML"], Mu = {
  key: 0,
  style: { "text-align": "center" }
}, Ru = /* @__PURE__ */ vA("br", null, null, -1), Nu = ["href"], Ju = ["src"], qu = /* @__PURE__ */ vA("br", null, null, -1), Vu = /* @__PURE__ */ Er({
  __name: "Login",
  props: {
    isMobileScreen: {
      type: Boolean,
      default: !1
    },
    showButton: {
      type: Boolean,
      default: !1
    },
    primaryDark: {
      type: String,
      default: "#c48a56"
    },
    primaryLight: {
      type: String,
      default: "#606C38"
    },
    secondaryDark: {
      type: String,
      default: "#18181b"
    },
    secondaryLight: {
      type: String,
      default: "#ffffff"
    },
    isDark: {
      type: Boolean,
      default: !1
    },
    positionLight: {
      type: String,
      default: "#000000"
    },
    positionDark: {
      type: String,
      default: "#ffffff"
    },
    accentColor: {
      type: String,
      default: "#ffffff"
    },
    logoDark: {
      type: String,
      default: ""
    },
    logoLight: {
      type: String,
      default: ""
    },
    configDev: {
      type: String,
      default: ""
    },
    configProduction: {
      type: String,
      default: ""
    },
    configApp: {
      type: String,
      default: ""
    },
    configLogin: {
      type: String,
      default: ""
    },
    configRequest: {
      type: String,
      default: ""
    },
    configVerify: {
      type: String,
      default: ""
    },
    configConfirm: {
      type: String,
      default: ""
    },
    configLogout: {
      type: String,
      default: ""
    },
    SiteId: {
      type: String,
      default: ""
    }
  },
  setup(A) {
    const t = A, { t: e } = Qr(), { auth: n, loginQRCode: r, checkQRLogin: o, success: i, QRCode: s, is_error: c, Message: l, setBase: d, setUrls: a, setRoutes: y, IDSite: k } = Ks(), S = nA(!1);
    oA("locale", "en"), ri(() => {
      k.value = t.SiteId, d(t.configDev, t.configProduction), y(t.configApp, t.configLogin), a(t.configRequest, t.configVerify, t.configConfirm, t.configLogout), n.value < 2 ? r() : o(), Br(() => {
        i.value === !0 ? S.value = !0 : S.value = !1;
      });
    });
    function N() {
      s.value == null || s.value == null || s.value == "" || window.open(s.value, "new_window");
    }
    return (z, X) => (IA(), RA("div", null, [
      vA("div", null, [
        vA("div", hu, [
          _(i) && !t.isMobileScreen ? (IA(), RA("div", {
            key: 0,
            onClick: [
              N,
              Ho(N, ["prevent"])
            ],
            target: "_blank",
            style: { "text-align": "center", cursor: "pointer" }
          }, [
            t.isDark ? (IA(), fe(_(gr), {
              key: _(s),
              width: 300,
              height: 300,
              value: _(s),
              image: A.logoDark.length == 0 ? _(we) : "",
              "qr-options": {
                typeNumber: 0,
                mode: "Byte",
                errorCorrectionLevel: "H"
              },
              "image-options": {
                hideBackgroundDots: !0,
                imageSize: 0.3,
                margin: 10
              },
              "dots-options": {
                type: "dots",
                color: t.primaryDark,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: t.primaryDark },
                    { offset: 1, color: t.primaryDark }
                  ]
                }
              },
              "background-options": { color: t.secondaryDark },
              "corners-square-options": { type: "dot", color: t.positionDark },
              "corners-dot-options": { type: void 0, color: t.positionDark },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"])) : ZA("", !0),
            t.isDark ? ZA("", !0) : (IA(), fe(_(gr), {
              key: _(s),
              width: 300,
              height: 300,
              value: _(s),
              image: A.logoDark.length == 0 ? _(vu) : "",
              "qr-options": {
                typeNumber: 0,
                mode: "Byte",
                errorCorrectionLevel: "H"
              },
              "image-options": {
                hideBackgroundDots: !0,
                imageSize: 0.3,
                margin: 10
              },
              "dots-options": {
                type: "dots",
                color: t.primaryLight,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: t.primaryLight },
                    { offset: 1, color: t.primaryLight }
                  ]
                }
              },
              "background-options": { color: t.secondaryLight },
              "corners-square-options": { type: "dot", color: t.positionLight },
              "corners-dot-options": { type: void 0, color: t.positionLight },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"]))
          ], 8, mu)) : _(i) && t.isMobileScreen ? (IA(), RA("div", Du, [
            S.value ? (IA(), RA("button", {
              key: 0,
              style: En([{ width: "300px", height: "300px" }, [t.isDark ? { backgroundColor: t.primaryDark, color: t.accentColor } : { backgroundColor: t.primaryLight, color: t.accentColor }]]),
              href: _(s)
            }, [
              vA("img", {
                width: "150",
                src: A.logoDark.length == 0 ? _(we) : ""
              }, null, 8, bu),
              ku,
              Su,
              vA("span", null, Bn(_(e)("auth.login")), 1)
            ], 12, wu)) : ZA("", !0)
          ])) : _(i) ? ZA("", !0) : (IA(), RA("div", Ou, [
            _(c) ? ZA("", !0) : (IA(), fe(Uo, {
              key: 0,
              width: "300px",
              disabled: !1,
              dark: t.isDark,
              height: "300px"
            }, null, 8, ["dark"]))
          ])),
          vA("div", {
            innerHTML: _(l),
            style: { "text-align": "center" }
          }, null, 8, Pu)
        ])
      ]),
      _(i) && !t.isMobileScreen && t.showButton ? (IA(), RA("div", Mu, [
        Ru,
        S.value ? (IA(), RA("button", {
          key: 0,
          style: En([{ width: "300px", height: "120px" }, [t.isDark ? { backgroundColor: t.primaryDark, color: t.accentColor } : { backgroundColor: t.primaryLight, color: t.accentColor }]]),
          href: _(s)
        }, [
          vA("img", {
            width: "80",
            src: A.logoDark.length == 0 ? _(we) : ""
          }, null, 8, Ju),
          qu,
          vA("span", null, Bn(_(e)("auth.appinstalled")), 1)
        ], 12, Nu)) : ZA("", !0)
      ])) : ZA("", !0)
    ]));
  }
}), Uu = {
  install: (A) => {
    A.component("Login", Vu), A.component("Preloader", Uo);
  }
};
export {
  Vu as Login,
  Uo as Preloader,
  Uu as default,
  Ks as useNoPWD
};
