!(function () {
  const a = []; a.push({
    familyName: 'proxima-nova', className: 'proxima-nova', weight: '600', style: 'normal',
  }), a.push({
    familyName: 'proxima-nova', className: 'proxima-nova', weight: 'normal', style: 'normal',
  }), a.push({
    familyName: 'proxima-nova', className: 'proxima-nova', weight: '300', style: 'normal',
  }), a.push({
    familyName: 'museo-slab', className: 'museo-slab', weight: '500', style: 'normal',
  }), a.push({
    familyName: 'proxima-nova-sc', className: 'proxima-nova-sc', weight: '300', style: 'normal',
  }), window.FortAwesomeConfig = {
    autoA11y: { enabled: !0 }, asyncLoading: { enabled: !0 }, reporting: { enabled: !1 }, useUrl: 'fonticons-free-fonticons.netdna-ssl.com/kits/ffe176a3/publications/72113', code: 'ffe176a3', familyName: 'FontAwesomeSite', prefix: 'fas', testString: '&', typefaces: a,
  };
}());
!(function () {
  function a(a) {
    let b,
      c = [],
      d = document,
      e = d.documentElement.doScroll,
      f = 'DOMContentLoaded',
      g = (e ? /^loaded|^c/ : /^loaded|^i|^c/).test(d.readyState); g || d.addEventListener(f, b = function () { for (d.removeEventListener(f, b), g = 1; b = c.shift();)b(); }), g ? setTimeout(a, 0) : c.push(a);
  } function b(a) { typeof MutationObserver !== 'undefined' && new MutationObserver(a).observe(document, { childList: !0, subtree: !0 }); } function c(a) {
    let b,
      c,
      d,
      e; a = a || 'fa', b = document.querySelectorAll(`.${a}`), Array.prototype.forEach.call(b, (a) => { c = a.getAttribute('title'), a.setAttribute('aria-hidden', 'true'), d = a.nextElementSibling ? !a.nextElementSibling.classList.contains('sr-only') : !0, c && d && (e = document.createElement('span'), e.innerHTML = c, e.classList.add('sr-only'), a.parentNode.insertBefore(e, a.nextSibling)); });
  }!(function () {
    function a(a) { l.push(a), l.length == 1 && k(); } function b() { for (;l.length;)l[0](), l.shift(); } function c(a) { this.a = m, this.b = void 0, this.f = []; const b = this; try { a((a) => { f(b, a); }, (a) => { g(b, a); }); } catch (c) { g(b, c); } } function d(a) { return new c(((b, c) => { c(a); })); } function e(a) { return new c(((b) => { b(a); })); } function f(a, b) { if (a.a == m) { if (b == a) throw new TypeError(); let c = !1; try { const d = b && b.then; if (b != null && typeof b === 'object' && typeof d === 'function') return void d.call(b, (b) => { c || f(a, b), c = !0; }, (b) => { c || g(a, b), c = !0; }); } catch (e) { return void (c || g(a, e)); }a.a = 0, a.b = b, h(a); } } function g(a, b) { if (a.a == m) { if (b == a) throw new TypeError(); a.a = 1, a.b = b, h(a); } } function h(b) {
      a(() => {
        if (b.a != m) {
          for (;b.f.length;) {
            var a = b.f.shift(),
              c = a[0],
              d = a[1],
              e = a[2],
              a = a[3]; try { b.a == 0 ? e(typeof c === 'function' ? c.call(void 0, b.b) : b.b) : b.a == 1 && (typeof d === 'function' ? e(d.call(void 0, b.b)) : a(b.b)); } catch (f) { a(f); }
          }
        }
      });
    } function i(a) {
      return new c(((b, c) => {
        function d(c) { return function (d) { g[c] = d, f += 1, f == a.length && b(g); }; } var f = 0,
          g = []; a.length == 0 && b(g); for (let h = 0; h < a.length; h += 1)e(a[h]).c(d(h), c);
      }));
    } function j(a) { return new c(((b, c) => { for (let d = 0; d < a.length; d += 1)e(a[d]).c(b, c); })); } var k,
      l = []; k = function () { setTimeout(b); }; var m = 2; c.prototype.g = function (a) { return this.c(void 0, a); }, c.prototype.c = function (a, b) { const d = this; return new c(((c, e) => { d.f.push([a, b, c, e]), h(d); })); }, window.Promise || (window.Promise = c, window.Promise.resolve = e, window.Promise.reject = d, window.Promise.race = j, window.Promise.all = i, window.Promise.prototype.then = c.prototype.c, window.Promise.prototype.catch = c.prototype.g);
  }()), (function () {
    function a(a) { this.el = a; for (let b = a.className.replace(/^\s+|\s+$/g, '').split(/\s+/), c = 0; c < b.length; c++)d.call(this, b[c]); } function b(a, b, c) { Object.defineProperty ? Object.defineProperty(a, b, { get: c }) : a.__defineGetter__(b, c); } if (!(typeof window.Element === 'undefined' || 'classList' in document.documentElement)) {
      var c = Array.prototype,
        d = c.push,
        e = c.splice,
        f = c.join; a.prototype = {
        add(a) { this.contains(a) || (d.call(this, a), this.el.className = this.toString()); }, contains(a) { return this.el.className.indexOf(a) != -1; }, item(a) { return this[a] || null; }, remove(a) { if (this.contains(a)) { for (var b = 0; b < this.length && this[b] != a; b++);e.call(this, b, 1), this.el.className = this.toString(); } }, toString() { return f.call(this, ' '); }, toggle(a) { return this.contains(a) ? this.remove(a) : this.add(a), this.contains(a); },
      }, window.DOMTokenList = a, b(Element.prototype, 'classList', function () { return new a(this); });
    }
  }()); let d = function (a, b, c) {
      function d(a) { return g.body ? a() : void setTimeout(() => { d(a); }); } function e() { h.addEventListener && h.removeEventListener('load', e), h.media = c || 'all'; } var f,
        g = window.document,
        h = g.createElement('link'); if (b)f = b; else { const i = (g.body || g.getElementsByTagName('head')[0]).childNodes; f = i[i.length - 1]; } const j = g.styleSheets; h.rel = 'stylesheet', h.href = a, h.media = 'only x', d(() => { f.parentNode.insertBefore(h, b ? f : f.nextSibling); }); var k = function (a) { for (let b = h.href, c = j.length; c--;) if (j[c].href === b) return a(); setTimeout(() => { k(a); }); }; return h.addEventListener && h.addEventListener('load', e), h.onloadcssdefined = k, k(e), h;
    },
    e = null; !(function () {
    function a(a, b) { document.addEventListener ? a.addEventListener('scroll', b, !1) : a.attachEvent('scroll', b); } function b(a) { document.body ? a() : document.addEventListener ? document.addEventListener('DOMContentLoaded', function b() { document.removeEventListener('DOMContentLoaded', b), a(); }) : document.attachEvent('onreadystatechange', function c() { document.readyState != 'interactive' && document.readyState != 'complete' || (document.detachEvent('onreadystatechange', c), a()); }); } function c(a) { this.a = document.createElement('div'), this.a.setAttribute('aria-hidden', 'true'), this.a.appendChild(document.createTextNode(a)), this.b = document.createElement('span'), this.c = document.createElement('span'), this.h = document.createElement('span'), this.f = document.createElement('span'), this.g = -1, this.b.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.c.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.f.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.h.style.cssText = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;', this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c); } function d(a, b) { a.a.style.cssText = `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:${b};`; } function f(a) {
      let b = a.a.offsetWidth,
        c = b + 100; return a.f.style.width = `${c}px`, a.c.scrollLeft = c, a.b.scrollLeft = a.b.scrollWidth + 100, a.g !== b ? (a.g = b, !0) : !1;
    } function g(b, c) { function d() { const a = e; f(a) && a.a.parentNode && c(a.g); } var e = b; a(b.b, d), a(b.c, d), f(b); } function h(a, b) { const c = b || {}; this.family = a, this.style = c.style || 'normal', this.weight = c.weight || 'normal', this.stretch = c.stretch || 'normal'; } function i() { if (l === null) { const a = document.createElement('div'); try { a.style.font = 'condensed 100px sans-serif'; } catch (b) {}l = a.style.font !== ''; } return l; } function j(a, b) { return [a.style, a.weight, i() ? a.stretch : '', '100px', b].join(' '); } var k = null,
      l = null,
      m = null; h.prototype.load = function (a, e) {
      let f = this,
        h = a || 'BESbswy',
        i = e || 3e3,
        l = (new Date()).getTime(); return new Promise(((a, e) => {
        if (m === null && (m = !!window.FontFace), m) {
          let n = new Promise(((a, b) => { function c() { (new Date()).getTime() - l >= i ? b() : document.fonts.load(j(f, f.family), h).then((b) => { b.length >= 1 ? a() : setTimeout(c, 25); }, () => { b(); }); }c(); })),
            o = new Promise(((a, b) => { setTimeout(b, i); })); Promise.race([o, n]).then(() => { a(f); }, () => { e(f); });
        } else {
          b(() => {
            function b() { let b; (b = q != -1 && r != -1 || q != -1 && s != -1 || r != -1 && s != -1) && ((b = q != r && q != s && r != s) || (k === null && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), k = !!b && (parseInt(b[1], 10) < 536 || parseInt(b[1], 10) === 536 && parseInt(b[2], 10) <= 11)), b = k && (q == t && r == t && s == t || q == u && r == u && s == u || q == v && r == v && s == v)), b = !b), b && (w.parentNode && w.parentNode.removeChild(w), clearTimeout(x), a(f)); } function m() { if ((new Date()).getTime() - l >= i)w.parentNode && w.parentNode.removeChild(w), e(f); else { const a = document.hidden; !0 !== a && void 0 !== a || (q = n.a.offsetWidth, r = o.a.offsetWidth, s = p.a.offsetWidth, b()), x = setTimeout(m, 50); } } var n = new c(h),
              o = new c(h),
              p = new c(h),
              q = -1,
              r = -1,
              s = -1,
              t = -1,
              u = -1,
              v = -1,
              w = document.createElement('div'),
              x = 0; w.dir = 'ltr', d(n, j(f, 'sans-serif')), d(o, j(f, 'serif')), d(p, j(f, 'monospace')), w.appendChild(n.a), w.appendChild(o.a), w.appendChild(p.a), document.body.appendChild(w), t = n.a.offsetWidth, u = o.a.offsetWidth, v = p.a.offsetWidth, m(), g(n, (a) => { q = a, b(); }), d(n, j(f, `"${f.family}",sans-serif`)), g(o, (a) => { r = a, b(); }), d(o, j(f, `"${f.family}",serif`)), g(p, (a) => { s = a, b(); }), d(p, j(f, `"${f.family}",monospace`));
          });
        }
      }));
    }, e = h;
  }()); let f = (function (a) { if (!('FontFace' in a)) return !1; const b = new FontFace('t', 'url( "data:application/font-woff2;base64,d09GMgABAAAAAADcAAoAAAAAAggAAACWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk4ALAoUNAE2AiQDCAsGAAQgBSAHIBtvAcieB3aD8wURQ+TZazbRE9HvF5vde4KCYGhiCgq/NKPF0i6UIsZynbP+Xi9Ng+XLbNlmNz/xIBBqq61FIQRJhC/+QA/08PJQJ3sK5TZFMlWzC/iK5GUN40psgqvxwBjBOg6JUSJ7ewyKE2AAaXZrfUB4v+hze37ugJ9d+DeYqiDwVgCawviwVFGnuttkLqIMGivmDg" ) format( "woff2" )', {}); return b.load().catch(() => {}), b.status == 'loading' || b.status == 'loaded'; }(this)),
    g = {
      isIE(a, b) {
        let c,
          d = 'IE',
          e = document.createElement('B'),
          f = document.documentElement; return a && (d += ` ${a}`, b && (d = `${b} ${d}`)), e.innerHTML = `<!--[if ${d}]><b id="fitest"></b><![endif]-->`, f.appendChild(e), c = !!document.getElementById('fitest'), f.removeChild(e), c;
      },
    },
    h = {
      observe(a, b) {
        for (var c = b.prefix, d = function (a) {
            let b = a.weight ? `-${a.weight}` : '',
              d = a.style ? `-${a.style}` : '',
              f = a.className ? `-${a.className}` : '',
              g = a.className ? `-${a.className}${b}${d}` : '',
              h = document.getElementsByTagName('html')[0].classList,
              i = function (a) { h.add(`${c + f}-${a}`), h.add(`${c + g}-${a}`); },
              j = function (a) { h.remove(`${c + f}-${a}`), h.remove(`${c + g}-${a}`); }; i('loading'), new e(a.familyName).load(a.testString).then(() => { i('ready'), j('loading'); }, () => { i('failed'), j('loading'); });
          }, f = 0; f < a.length; f++)d(a[f]);
      },
    },
    i = { load(a) { const b = document.createElement('link'); b.href = a, b.media = 'all', b.rel = 'stylesheet', document.getElementsByTagName('head')[0].appendChild(b); }, loadAsync(a) { d(a); } }; try {
    if (window.FortAwesomeConfig) {
      let j = window.FortAwesomeConfig,
        k = j.useUrl,
        l = (j.code, j.familyName),
        m = j.prefix,
        n = j.testString,
        o = j.typefaces,
        p = c.bind(c, m); j.autoA11y.enabled && (a(p), b(p)), woffCSSFilename = f ? 'woff2.css' : 'woff.css', cssFilename = g.isIE(8, 'lte') ? 'eot.css' : woffCSSFilename, cssUrl = `https://${k}/${cssFilename}`, j.asyncLoading.enabled ? i.loadAsync(cssUrl, n) : i.load(cssUrl), h.observe([{ familyName: l, testString: n }], { prefix: `${m}-events-icons` }), h.observe(o, { prefix: `${m}-events-typefaces` });
    }
  } catch (q) {}
}());
