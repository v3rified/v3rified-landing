!function(e) {
	var t = {};

	function n(r) {
		if (t[r]) return t[r].exports;
		var o = t[r] = { i: r, l: !1, exports: {} };
		return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
	}

	n.m = e, n.c = t, n.d = function(e, t, r) {
		n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
	}, n.r = function(e) {
		'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, 'default', {
			enumerable: !0,
			value: e
		}), 2 & t && 'string' != typeof e) for (var o in e) n.d(r, o, function(t) {
			return e[t];
		}.bind(null, o));
		return r;
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default;
		} : function() {
			return e;
		};
		return n.d(t, 'a', t), t;
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}, n.p = '/', n(n.s = 4);
}({
	4: function(e, t, n) {
		e.exports = n('CotT');
	}, CotT: function(e, t, n) {
		'use strict';
		n.r(t);
		var r, o = n('o0o1'), i = n.n(o), a = n('EVdn'), s = n.n(a);

		function u(e) {
			return (u = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
				return typeof e;
			} : function(e) {
				return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
			})(e);
		}

		function c(e) {
			if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (e = function(e, t) {
					if (!e) return;
					if ('string' == typeof e) return l(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					'Object' === n && e.constructor && (n = e.constructor.name);
					if ('Map' === n || 'Set' === n) return Array.from(n);
					if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
				}(e))) {
					var t = 0, n = function() {
					};
					return {
						s: n, n: function() {
							return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
						}, e: function(e) {
							throw e;
						}, f: n
					};
				}
				throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
			}
			var r, o, i = !0, a = !1;
			return {
				s: function() {
					r = e[Symbol.iterator]();
				}, n: function() {
					var e = r.next();
					return i = e.done, e;
				}, e: function(e) {
					a = !0, o = e;
				}, f: function() {
					try {
						i || null == r.return || r.return();
					} finally {
						if (a) throw o;
					}
				}
			};
		}

		function l(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r;
		}

		function f(e, t, n, r, o, i, a) {
			try {
				var s = e[i](a), u = s.value;
			} catch (e) {
				return void n(e);
			}
			s.done ? t(u) : Promise.resolve(u).then(r, o);
		}

		function p(e) {
			return function() {
				var t = this, n = arguments;
				return new Promise((function(r, o) {
					var i = e.apply(t, n);

					function a(e) {
						f(i, r, o, a, s, 'next', e);
					}

					function s(e) {
						f(i, r, o, a, s, 'throw', e);
					}

					a(void 0);
				}));
			};
		}

		window.$ = window.jQuery = s.a;
		try {
			var d, h;
			r = new URLSearchParams(null === (d = new URL(null === (h = document.currentScript) || void 0 === h ? void 0 : h.src)) || void 0 === d ? void 0 : d.search).get('country');
		} catch (e) {
			console.error(e);
		}
		'Philippines' !== r && 'philippines' !== r || (r = 'Philippine');
		var v = 'https://beautyplus.store', g = [v, 'https://azagroup.asia'],
			y = s()('[name=description] option[value]').map((function(e, t) {
				return s()(t).val();
			})).get().concat(s()('input[name=description]').map((function(e, t) {
				return s()(t).val();
			})).get());

		function m(e) {
			return x.apply(this, arguments);
		}

		function x() {
			return (x = p(i.a.mark((function e(t) {
				return i.a.wrap((function(e) {
					for (; ;) switch (e.prev = e.next) {
						case 0:
							return t || (t = v), e.next = 3, s.a.ajax({
								url: ''.concat(t, '/api/get-promotion-name'), method: 'post', data: { codes: y }, success: function(e) {
									if (!e.promotions || !Array.isArray(e.promotions)) throw'Server Error!';
									var t = e.promotions;
									s()('select[name=description]').each((function() {
										var e = s()(this);
										t.forEach((function(t) {
											t.hasOwnProperty('active') && !t.active && e.find('option[value=\''.concat(t.code, '\']')).remove();
										}));
										var n = s()('<select name=\'promotion_code\' style=\'display: none\'></select>');
										e.after(n), e.find('option').each((function() {
											var e = this, r = !1;
											t.some((function(t) {
												if (t && 'object' === u(t) && s()(e).val() === t.code) return s()(e).val(t.name).text(t.name), r = !0, n.append(s()('<option></option>').val(t.code).text(t.name)), !0;
											})), r || n.append(s()('<option></option>'));
										})), e.on('change', (function() {
											n.val(n.find('option:nth-child('.concat(s()(this).find('option:selected').index() + 1, ')')).val()).trigger('change');
										}));
									})), s()('form:has(input[name=description][type=radio])').each((function() {
										var e = this;
										t.forEach((function(t) {
											t.hasOwnProperty('active') && !t.active && s()(e).find('input[name=description][type=radio][value=\''.concat(t.code, '\']')).remove();
										}));
										var n = s()(this).find('[name=promotion_code]');
										n.length || (n = s()('<select name=\'promotion_code\' style=\'display: none\'><option></option></select>'), s()(this).find('input[name=description][type=radio]').first().after(n)), s()(this).find('input[name=description][type=radio]').each((function() {
											var e = this, r = !1;
											t.some((function(t) {
												if (t && 'object' === u(t) && s()(e).val() === t.code) return s()(e).val(t.name).data('code', t.code).siblings('span').first().text(t.name), r = !0, n.append(s()('<option></option>').val(t.code).text(t.name)), !0;
											})), r || n.append(s()('<option></option>'));
										})), s()(this).find('input[name=description][type=radio]').on('change', (function() {
											n.val(s()(this).data('code')).trigger('change');
										}));
									}));
								}, error: function() {
									throw'Server Error!';
								}
							});
						case 3:
							if (!r) {
								e.next = 6;
								break;
							}
							return e.next = 6, s.a.getJSON({
								url: ''.concat(t, '/api/get-address?country=').concat(r), success: function(e) {
									var t = JSON.parse(e), n = s()('.aza-province select'), r = s()('.aza-district select'),
										o = s()('.aza-commune select'), i = {}, a = {}, u = t.states.map((function(e) {
											var t = e.name;
											return i[t] = [], e.cities.sort((function(e, t) {
												return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
											})), e.cities.forEach((function(n) {
												i[t].push(new Option(n.name, n.name, !1, !1));
												var r = [e.name, n.name].join('-');
												a[r] = [], n.towns.sort((function(e, t) {
													return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
												})), n.towns.forEach((function(e) {
													a[r].push(new Option(e.name, e.name, !1, !1));
												}));
											})), new Option(e.name, e.name, !1, !1);
										}));
									u.sort((function(e, t) {
										return e.text < t.text ? -1 : e.text > t.text ? 1 : 0;
									})), n.append(u), n.change((function() {
										var e = s()(this).closest('form').find('.aza-district select');
										s()(this).closest('form').find('.aza-commune select');
										e.find('option[value!=\'\']').remove();
										var t = s()(this).val();
										t && Array.isArray(i[t]) && i[t].length && e.append(i[t]), e.trigger('change');
									})), r.change((function() {
										var e = s()(this).closest('form').find('.aza-province select');
										s()(this).closest('form').find('.aza-commune select').find('option[value!=\'\']').remove();
										var t = e.val(), n = s()(this).val(), r = [t, n].join('-');
										t && n && Array.isArray(a[r]) && a[r].length && o.append(a[r]);
									}));
								}, error: function(e) {
									throw console.error(e), 'Server Error!';
								}
							});
						case 6:
							return e.abrupt('return', !0);
						case 7:
						case'end':
							return e.stop();
					}
				}), e);
			})))).apply(this, arguments);
		}

		p(i.a.mark((function e() {
			var t, n, r;
			return i.a.wrap((function(e) {
				for (; ;) switch (e.prev = e.next) {
					case 0:
						t = c(g), e.prev = 1, t.s();
					case 3:
						if ((n = t.n()).done) {
							e.next = 16;
							break;
						}
						return r = n.value, e.prev = 5, e.next = 8, m(r);
					case 8:
						if (!e.sent) {
							e.next = 10;
							break;
						}
						return e.abrupt('break', 16);
					case 10:
						e.next = 14;
						break;
					case 12:
						e.prev = 12, e.t0 = e.catch(5);
					case 14:
						e.next = 3;
						break;
					case 16:
						e.next = 21;
						break;
					case 18:
						e.prev = 18, e.t1 = e.catch(1), t.e(e.t1);
					case 21:
						return e.prev = 21, t.f(), e.finish(21);
					case 24:
					case'end':
						return e.stop();
				}
			}), e, null, [[1, 18, 21, 24], [5, 12]]);
		})))();
	}, EVdn: function(e, t, n) {
		var r;
		!function(t, n) {
			'use strict';
			'object' == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
				if (!e.document) throw new Error('jQuery requires a window with a document');
				return n(e);
			} : n(t);
		}('undefined' != typeof window ? window : this, (function(n, o) {
			'use strict';
			var i = [], a = Object.getPrototypeOf, s = i.slice, u = i.flat ? function(e) {
					return i.flat.call(e);
				} : function(e) {
					return i.concat.apply([], e);
				}, c = i.push, l = i.indexOf, f = {}, p = f.toString, d = f.hasOwnProperty, h = d.toString, v = h.call(Object),
				g = {}, y = function(e) {
					return 'function' == typeof e && 'number' != typeof e.nodeType;
				}, m = function(e) {
					return null != e && e === e.window;
				}, x = n.document, b = { type: !0, src: !0, nonce: !0, noModule: !0 };

			function w(e, t, n) {
				var r, o, i = (n = n || x).createElement('script');
				if (i.text = e, t) for (r in b) (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
				n.head.appendChild(i).parentNode.removeChild(i);
			}

			function T(e) {
				return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? f[p.call(e)] || 'object' : typeof e;
			}

			var C = function(e, t) {
				return new C.fn.init(e, t);
			};

			function E(e) {
				var t = !!e && 'length' in e && e.length, n = T(e);
				return !y(e) && !m(e) && ('array' === n || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
			}

			C.fn = C.prototype = {
				jquery: '3.5.1', constructor: C, length: 0, toArray: function() {
					return s.call(this);
				}, get: function(e) {
					return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
				}, pushStack: function(e) {
					var t = C.merge(this.constructor(), e);
					return t.prevObject = this, t;
				}, each: function(e) {
					return C.each(this, e);
				}, map: function(e) {
					return this.pushStack(C.map(this, (function(t, n) {
						return e.call(t, n, t);
					})));
				}, slice: function() {
					return this.pushStack(s.apply(this, arguments));
				}, first: function() {
					return this.eq(0);
				}, last: function() {
					return this.eq(-1);
				}, even: function() {
					return this.pushStack(C.grep(this, (function(e, t) {
						return (t + 1) % 2;
					})));
				}, odd: function() {
					return this.pushStack(C.grep(this, (function(e, t) {
						return t % 2;
					})));
				}, eq: function(e) {
					var t = this.length, n = +e + (e < 0 ? t : 0);
					return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
				}, end: function() {
					return this.prevObject || this.constructor();
				}, push: c, sort: i.sort, splice: i.splice
			}, C.extend = C.fn.extend = function() {
				var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
				for ('boolean' == typeof a && (c = a, a = arguments[s] || {}, s++), 'object' == typeof a || y(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], '__proto__' !== t && a !== r && (c && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}, o = !1, a[t] = C.extend(c, i, r)) : void 0 !== r && (a[t] = r));
				return a;
			}, C.extend({
				expando: 'jQuery' + ('3.5.1' + Math.random()).replace(/\D/g, ''), isReady: !0, error: function(e) {
					throw new Error(e);
				}, noop: function() {
				}, isPlainObject: function(e) {
					var t, n;
					return !(!e || '[object Object]' !== p.call(e)) && (!(t = a(e)) || 'function' == typeof (n = d.call(t, 'constructor') && t.constructor) && h.call(n) === v);
				}, isEmptyObject: function(e) {
					var t;
					for (t in e) return !1;
					return !0;
				}, globalEval: function(e, t, n) {
					w(e, { nonce: t && t.nonce }, n);
				}, each: function(e, t) {
					var n, r = 0;
					if (E(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
					return e;
				}, makeArray: function(e, t) {
					var n = t || [];
					return null != e && (E(Object(e)) ? C.merge(n, 'string' == typeof e ? [e] : e) : c.call(n, e)), n;
				}, inArray: function(e, t, n) {
					return null == t ? -1 : l.call(t, e, n);
				}, merge: function(e, t) {
					for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
					return e.length = o, e;
				}, grep: function(e, t, n) {
					for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
					return r;
				}, map: function(e, t, n) {
					var r, o, i = 0, a = [];
					if (E(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o); else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
					return u(a);
				}, guid: 1, support: g
			}), 'function' == typeof Symbol && (C.fn[Symbol.iterator] = i[Symbol.iterator]), C.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), (function(e, t) {
				f['[object ' + t + ']'] = t.toLowerCase();
			}));
			var S = function(e) {
				var t, n, r, o, i, a, s, u, c, l, f, p, d, h, v, g, y, m, x, b = 'sizzle' + 1 * new Date, w = e.document, T = 0,
					C = 0, E = ue(), S = ue(), k = ue(), A = ue(), j = function(e, t) {
						return e === t && (f = !0), 0;
					}, N = {}.hasOwnProperty, D = [], L = D.pop, q = D.push, O = D.push, H = D.slice, P = function(e, t) {
						for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
						return -1;
					},
					R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
					M = '[\\x20\\t\\r\\n\\f]', I = '(?:\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
					_ = '\\[' + M + '*(' + I + ')(?:' + M + '*([*^$|!~]?=)' + M + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + I + '))|)' + M + '*\\]',
					F = ':(' + I + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + _ + ')*)|.*)\\)|)',
					W = new RegExp(M + '+', 'g'), $ = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
					B = new RegExp('^' + M + '*,' + M + '*'), z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
					U = new RegExp(M + '|>'), X = new RegExp(F), G = new RegExp('^' + I + '$'), V = {
						ID: new RegExp('^#(' + I + ')'),
						CLASS: new RegExp('^\\.(' + I + ')'),
						TAG: new RegExp('^(' + I + '|[*])'),
						ATTR: new RegExp('^' + _),
						PSEUDO: new RegExp('^' + F),
						CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
						bool: new RegExp('^(?:' + R + ')$', 'i'),
						needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
					}, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
					Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
					te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'), ne = function(e, t) {
						var n = '0x' + e.slice(1) - 65536;
						return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
					}, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
						return t ? '\0' === e ? '�' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e;
					}, ie = function() {
						p();
					}, ae = be((function(e) {
						return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
					}), { dir: 'parentNode', next: 'legend' });
				try {
					O.apply(D = H.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType;
				} catch (e) {
					O = {
						apply: D.length ? function(e, t) {
							q.apply(e, H.call(t));
						} : function(e, t) {
							for (var n = e.length, r = 0; e[n++] = t[r++];) ;
							e.length = n - 1;
						}
					};
				}

				function se(e, t, r, o) {
					var i, s, c, l, f, h, y, m = t && t.ownerDocument, w = t ? t.nodeType : 9;
					if (r = r || [], 'string' != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
					if (!o && (p(t), t = t || d, v)) {
						if (11 !== w && (f = Z.exec(e))) if (i = f[1]) {
							if (9 === w) {
								if (!(c = t.getElementById(i))) return r;
								if (c.id === i) return r.push(c), r;
							} else if (m && (c = m.getElementById(i)) && x(t, c) && c.id === i) return r.push(c), r;
						} else {
							if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
							if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(i)), r;
						}
						if (n.qsa && !A[e + ' '] && (!g || !g.test(e)) && (1 !== w || 'object' !== t.nodeName.toLowerCase())) {
							if (y = e, m = t, 1 === w && (U.test(e) || z.test(e))) {
								for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((l = t.getAttribute('id')) ? l = l.replace(re, oe) : t.setAttribute('id', l = b)), s = (h = a(e)).length; s--;) h[s] = (l ? '#' + l : ':scope') + ' ' + xe(h[s]);
								y = h.join(',');
							}
							try {
								return O.apply(r, m.querySelectorAll(y)), r;
							} catch (t) {
								A(e, !0);
							} finally {
								l === b && t.removeAttribute('id');
							}
						}
					}
					return u(e.replace($, '$1'), t, r, o);
				}

				function ue() {
					var e = [];
					return function t(n, o) {
						return e.push(n + ' ') > r.cacheLength && delete t[e.shift()], t[n + ' '] = o;
					};
				}

				function ce(e) {
					return e[b] = !0, e;
				}

				function le(e) {
					var t = d.createElement('fieldset');
					try {
						return !!e(t);
					} catch (e) {
						return !1;
					} finally {
						t.parentNode && t.parentNode.removeChild(t), t = null;
					}
				}

				function fe(e, t) {
					for (var n = e.split('|'), o = n.length; o--;) r.attrHandle[n[o]] = t;
				}

				function pe(e, t) {
					var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
					if (r) return r;
					if (n) for (; n = n.nextSibling;) if (n === t) return -1;
					return e ? 1 : -1;
				}

				function de(e) {
					return function(t) {
						return 'input' === t.nodeName.toLowerCase() && t.type === e;
					};
				}

				function he(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return ('input' === n || 'button' === n) && t.type === e;
					};
				}

				function ve(e) {
					return function(t) {
						return 'form' in t ? t.parentNode && !1 === t.disabled ? 'label' in t ? 'label' in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : 'label' in t && t.disabled === e;
					};
				}

				function ge(e) {
					return ce((function(t) {
						return t = +t, ce((function(n, r) {
							for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]));
						}));
					}));
				}

				function ye(e) {
					return e && void 0 !== e.getElementsByTagName && e;
				}

				for (t in n = se.support = {}, i = se.isXML = function(e) {
					var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
					return !Y.test(t || n && n.nodeName || 'HTML');
				}, p = se.setDocument = function(e) {
					var t, o, a = e ? e.ownerDocument || e : w;
					return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, v = !i(d), w != d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener('unload', ie, !1) : o.attachEvent && o.attachEvent('onunload', ie)), n.scope = le((function(e) {
						return h.appendChild(e).appendChild(d.createElement('div')), void 0 !== e.querySelectorAll && !e.querySelectorAll(':scope fieldset div').length;
					})), n.attributes = le((function(e) {
						return e.className = 'i', !e.getAttribute('className');
					})), n.getElementsByTagName = le((function(e) {
						return e.appendChild(d.createComment('')), !e.getElementsByTagName('*').length;
					})), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = le((function(e) {
						return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
					})), n.getById ? (r.filter.ID = function(e) {
						var t = e.replace(te, ne);
						return function(e) {
							return e.getAttribute('id') === t;
						};
					}, r.find.ID = function(e, t) {
						if (void 0 !== t.getElementById && v) {
							var n = t.getElementById(e);
							return n ? [n] : [];
						}
					}) : (r.filter.ID = function(e) {
						var t = e.replace(te, ne);
						return function(e) {
							var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
							return n && n.value === t;
						};
					}, r.find.ID = function(e, t) {
						if (void 0 !== t.getElementById && v) {
							var n, r, o, i = t.getElementById(e);
							if (i) {
								if ((n = i.getAttributeNode('id')) && n.value === e) return [i];
								for (o = t.getElementsByName(e), r = 0; i = o[r++];) if ((n = i.getAttributeNode('id')) && n.value === e) return [i];
							}
							return [];
						}
					}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
						return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
					} : function(e, t) {
						var n, r = [], o = 0, i = t.getElementsByTagName(e);
						if ('*' === e) {
							for (; n = i[o++];) 1 === n.nodeType && r.push(n);
							return r;
						}
						return i;
					}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
						if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e);
					}, y = [], g = [], (n.qsa = K.test(d.querySelectorAll)) && (le((function(e) {
						var t;
						h.appendChild(e).innerHTML = '<a id=\'' + b + '\'></a><select id=\'' + b + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && g.push('[*^$]=' + M + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || g.push('\\[' + M + '*(?:value|' + R + ')'), e.querySelectorAll('[id~=' + b + '-]').length || g.push('~='), (t = d.createElement('input')).setAttribute('name', ''), e.appendChild(t), e.querySelectorAll('[name=\'\']').length || g.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'), e.querySelectorAll(':checked').length || g.push(':checked'), e.querySelectorAll('a#' + b + '+*').length || g.push('.#.+[+~]'), e.querySelectorAll('\\\f'), g.push('[\\r\\n\\f]');
					})), le((function(e) {
						e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
						var t = d.createElement('input');
						t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && g.push('name' + M + '*[*^$|!~]?='), 2 !== e.querySelectorAll(':enabled').length && g.push(':enabled', ':disabled'), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(':disabled').length && g.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), g.push(',.*:');
					}))), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le((function(e) {
						n.disconnectedMatch = m.call(e, '*'), m.call(e, '[s!=\'\']:x'), y.push('!=', F);
					})), g = g.length && new RegExp(g.join('|')), y = y.length && new RegExp(y.join('|')), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
					} : function(e, t) {
						if (t) for (; t = t.parentNode;) if (t === e) return !0;
						return !1;
					}, j = t ? function(e, t) {
						if (e === t) return f = !0, 0;
						var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : 4 & r ? -1 : 1);
					} : function(e, t) {
						if (e === t) return f = !0, 0;
						var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], s = [t];
						if (!o || !i) return e == d ? -1 : t == d ? 1 : o ? -1 : i ? 1 : l ? P(l, e) - P(l, t) : 0;
						if (o === i) return pe(e, t);
						for (n = e; n = n.parentNode;) a.unshift(n);
						for (n = t; n = n.parentNode;) s.unshift(n);
						for (; a[r] === s[r];) r++;
						return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0;
					}, d) : d;
				}, se.matches = function(e, t) {
					return se(e, null, null, t);
				}, se.matchesSelector = function(e, t) {
					if (p(e), n.matchesSelector && v && !A[t + ' '] && (!y || !y.test(t)) && (!g || !g.test(t))) try {
						var r = m.call(e, t);
						if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
					} catch (e) {
						A(t, !0);
					}
					return se(t, d, null, [e]).length > 0;
				}, se.contains = function(e, t) {
					return (e.ownerDocument || e) != d && p(e), x(e, t);
				}, se.attr = function(e, t) {
					(e.ownerDocument || e) != d && p(e);
					var o = r.attrHandle[t.toLowerCase()], i = o && N.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !v) : void 0;
					return void 0 !== i ? i : n.attributes || !v ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
				}, se.escape = function(e) {
					return (e + '').replace(re, oe);
				}, se.error = function(e) {
					throw new Error('Syntax error, unrecognized expression: ' + e);
				}, se.uniqueSort = function(e) {
					var t, r = [], o = 0, i = 0;
					if (f = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(j), f) {
						for (; t = e[i++];) t === e[i] && (o = r.push(i));
						for (; o--;) e.splice(r[o], 1);
					}
					return l = null, e;
				}, o = se.getText = function(e) {
					var t, n = '', r = 0, i = e.nodeType;
					if (i) {
						if (1 === i || 9 === i || 11 === i) {
							if ('string' == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
						} else if (3 === i || 4 === i) return e.nodeValue;
					} else for (; t = e[r++];) n += o(t);
					return n;
				}, (r = se.selectors = {
					cacheLength: 50,
					createPseudo: ce,
					match: V,
					attrHandle: {},
					find: {},
					relative: {
						'>': { dir: 'parentNode', first: !0 },
						' ': { dir: 'parentNode' },
						'+': { dir: 'previousSibling', first: !0 },
						'~': { dir: 'previousSibling' }
					},
					preFilter: {
						ATTR: function(e) {
							return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
						}, CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && se.error(e[0]), e;
						}, PSEUDO: function(e) {
							var t, n = !e[6] && e[2];
							return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(te, ne).toLowerCase();
							return '*' === e ? function() {
								return !0;
							} : function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t;
							};
						}, CLASS: function(e) {
							var t = E[e + ' '];
							return t || (t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) && E(e, (function(e) {
								return t.test('string' == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute('class') || '');
							}));
						}, ATTR: function(e, t, n) {
							return function(r) {
								var o = se.attr(r, e);
								return null == o ? '!=' === t : !t || (o += '', '=' === t ? o === n : '!=' === t ? o !== n : '^=' === t ? n && 0 === o.indexOf(n) : '*=' === t ? n && o.indexOf(n) > -1 : '$=' === t ? n && o.slice(-n.length) === n : '~=' === t ? (' ' + o.replace(W, ' ') + ' ').indexOf(n) > -1 : '|=' === t && (o === n || o.slice(0, n.length + 1) === n + '-'));
							};
						}, CHILD: function(e, t, n, r, o) {
							var i = 'nth' !== e.slice(0, 3), a = 'last' !== e.slice(-4), s = 'of-type' === t;
							return 1 === r && 0 === o ? function(e) {
								return !!e.parentNode;
							} : function(t, n, u) {
								var c, l, f, p, d, h, v = i !== a ? 'nextSibling' : 'previousSibling', g = t.parentNode,
									y = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
								if (g) {
									if (i) {
										for (; v;) {
											for (p = t; p = p[v];) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
											h = v = 'only' === e && !h && 'nextSibling';
										}
										return !0;
									}
									if (h = [a ? g.firstChild : g.lastChild], a && m) {
										for (x = (d = (c = (l = (f = (p = g)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = d && g.childNodes[d]; p = ++d && p && p[v] || (x = d = 0) || h.pop();) if (1 === p.nodeType && ++x && p === t) {
											l[e] = [T, d, x];
											break;
										}
									} else if (m && (x = d = (c = (l = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === x) for (; (p = ++d && p && p[v] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((l = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t));) ;
									return (x -= o) === r || x % r == 0 && x / r >= 0;
								}
							};
						}, PSEUDO: function(e, t) {
							var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error('unsupported pseudo: ' + e);
							return o[b] ? o(t) : o.length > 1 ? (n = [e, e, '', t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
								for (var r, i = o(e, t), a = i.length; a--;) e[r = P(e, i[a])] = !(n[r] = i[a]);
							})) : function(e) {
								return o(e, 0, n);
							}) : o;
						}
					},
					pseudos: {
						not: ce((function(e) {
							var t = [], n = [], r = s(e.replace($, '$1'));
							return r[b] ? ce((function(e, t, n, o) {
								for (var i, a = r(e, null, o, []), s = e.length; s--;) (i = a[s]) && (e[s] = !(t[s] = i));
							})) : function(e, o, i) {
								return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop();
							};
						})), has: ce((function(e) {
							return function(t) {
								return se(e, t).length > 0;
							};
						})), contains: ce((function(e) {
							return e = e.replace(te, ne), function(t) {
								return (t.textContent || o(t)).indexOf(e) > -1;
							};
						})), lang: ce((function(e) {
							return G.test(e || '') || se.error('unsupported lang: ' + e), e = e.replace(te, ne).toLowerCase(), function(t) {
								var n;
								do {
									if (n = v ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1;
							};
						})), target: function(t) {
							var n = e.location && e.location.hash;
							return n && n.slice(1) === t.id;
						}, root: function(e) {
							return e === h;
						}, focus: function(e) {
							return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
						}, enabled: ve(!1), disabled: ve(!0), checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
						}, selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
						}, empty: function(e) {
							for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
							return !0;
						}, parent: function(e) {
							return !r.pseudos.empty(e);
						}, header: function(e) {
							return J.test(e.nodeName);
						}, input: function(e) {
							return Q.test(e.nodeName);
						}, button: function(e) {
							var t = e.nodeName.toLowerCase();
							return 'input' === t && 'button' === e.type || 'button' === t;
						}, text: function(e) {
							var t;
							return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
						}, first: ge((function() {
							return [0];
						})), last: ge((function(e, t) {
							return [t - 1];
						})), eq: ge((function(e, t, n) {
							return [n < 0 ? n + t : n];
						})), even: ge((function(e, t) {
							for (var n = 0; n < t; n += 2) e.push(n);
							return e;
						})), odd: ge((function(e, t) {
							for (var n = 1; n < t; n += 2) e.push(n);
							return e;
						})), lt: ge((function(e, t, n) {
							for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
							return e;
						})), gt: ge((function(e, t, n) {
							for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
							return e;
						}))
					}
				}).pseudos.nth = r.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) r.pseudos[t] = de(t);
				for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);

				function me() {
				}

				function xe(e) {
					for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
					return r;
				}

				function be(e, t, n) {
					var r = t.dir, o = t.next, i = o || r, a = n && 'parentNode' === i, s = C++;
					return t.first ? function(t, n, o) {
						for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, o);
						return !1;
					} : function(t, n, u) {
						var c, l, f, p = [T, s];
						if (u) {
							for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
						} else for (; t = t[r];) if (1 === t.nodeType || a) if (l = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t; else {
							if ((c = l[i]) && c[0] === T && c[1] === s) return p[2] = c[2];
							if (l[i] = p, p[2] = e(t, n, u)) return !0;
						}
						return !1;
					};
				}

				function we(e) {
					return e.length > 1 ? function(t, n, r) {
						for (var o = e.length; o--;) if (!e[o](t, n, r)) return !1;
						return !0;
					} : e[0];
				}

				function Te(e, t, n, r, o) {
					for (var i, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (i = e[s]) && (n && !n(i, r, o) || (a.push(i), c && t.push(s)));
					return a;
				}

				function Ce(e, t, n, r, o, i) {
					return r && !r[b] && (r = Ce(r)), o && !o[b] && (o = Ce(o, i)), ce((function(i, a, s, u) {
						var c, l, f, p = [], d = [], h = a.length, v = i || function(e, t, n) {
								for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
								return n;
							}(t || '*', s.nodeType ? [s] : s, []), g = !e || !i && t ? v : Te(v, p, e, s, u),
							y = n ? o || (i ? e : h || r) ? [] : a : g;
						if (n && n(g, y, s, u), r) for (c = Te(y, d), r(c, [], s, u), l = c.length; l--;) (f = c[l]) && (y[d[l]] = !(g[d[l]] = f));
						if (i) {
							if (o || e) {
								if (o) {
									for (c = [], l = y.length; l--;) (f = y[l]) && c.push(g[l] = f);
									o(null, y = [], c, u);
								}
								for (l = y.length; l--;) (f = y[l]) && (c = o ? P(i, f) : p[l]) > -1 && (i[c] = !(a[c] = f));
							}
						} else y = Te(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : O.apply(a, y);
					}));
				}

				function Ee(e) {
					for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[' '], u = a ? 1 : 0, l = be((function(e) {
						return e === t;
					}), s, !0), f = be((function(e) {
						return P(t, e) > -1;
					}), s, !0), p = [function(e, n, r) {
						var o = !a && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
						return t = null, o;
					}]; u < i; u++) if (n = r.relative[e[u].type]) p = [be(we(p), n)]; else {
						if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
							for (o = ++u; o < i && !r.relative[e[o].type]; o++) ;
							return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({ value: ' ' === e[u - 2].type ? '*' : '' })).replace($, '$1'), n, u < o && Ee(e.slice(u, o)), o < i && Ee(e = e.slice(o)), o < i && xe(e));
						}
						p.push(n);
					}
					return we(p);
				}

				return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function(e, t) {
					var n, o, i, a, s, u, c, l = S[e + ' '];
					if (l) return t ? 0 : l.slice(0);
					for (s = e, u = [], c = r.preFilter; s;) {
						for (a in n && !(o = B.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = z.exec(s)) && (n = o.shift(), i.push({
							value: n,
							type: o[0].replace($, ' ')
						}), s = s.slice(n.length)), r.filter) !(o = V[a].exec(s)) || c[a] && !(o = c[a](o)) || (n = o.shift(), i.push({
							value: n,
							type: a,
							matches: o
						}), s = s.slice(n.length));
						if (!n) break;
					}
					return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
				}, s = se.compile = function(e, t) {
					var n, o = [], i = [], s = k[e + ' '];
					if (!s) {
						for (t || (t = a(e)), n = t.length; n--;) (s = Ee(t[n]))[b] ? o.push(s) : i.push(s);
						(s = k(e, function(e, t) {
							var n = t.length > 0, o = e.length > 0, i = function(i, a, s, u, l) {
								var f, h, g, y = 0, m = '0', x = i && [], b = [], w = c, C = i || o && r.find.TAG('*', l),
									E = T += null == w ? 1 : Math.random() || .1, S = C.length;
								for (l && (c = a == d || a || l); m !== S && null != (f = C[m]); m++) {
									if (o && f) {
										for (h = 0, a || f.ownerDocument == d || (p(f), s = !v); g = e[h++];) if (g(f, a || d, s)) {
											u.push(f);
											break;
										}
										l && (T = E);
									}
									n && ((f = !g && f) && y--, i && x.push(f));
								}
								if (y += m, n && m !== y) {
									for (h = 0; g = t[h++];) g(x, b, a, s);
									if (i) {
										if (y > 0) for (; m--;) x[m] || b[m] || (b[m] = L.call(u));
										b = Te(b);
									}
									O.apply(u, b), l && !i && b.length > 0 && y + t.length > 1 && se.uniqueSort(u);
								}
								return l && (T = E, c = w), x;
							};
							return n ? ce(i) : i;
						}(i, o))).selector = e;
					}
					return s;
				}, u = se.select = function(e, t, n, o) {
					var i, u, c, l, f, p = 'function' == typeof e && e, d = !o && a(e = p.selector || e);
					if (n = n || [], 1 === d.length) {
						if ((u = d[0] = d[0].slice(0)).length > 2 && 'ID' === (c = u[0]).type && 9 === t.nodeType && v && r.relative[u[1].type]) {
							if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
							p && (t = t.parentNode), e = e.slice(u.shift().value.length);
						}
						for (i = V.needsContext.test(e) ? 0 : u.length; i-- && (c = u[i], !r.relative[l = c.type]);) if ((f = r.find[l]) && (o = f(c.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
							if (u.splice(i, 1), !(e = o.length && xe(u))) return O.apply(n, o), n;
							break;
						}
					}
					return (p || s(e, d))(o, t, !v, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
				}, n.sortStable = b.split('').sort(j).join('') === b, n.detectDuplicates = !!f, p(), n.sortDetached = le((function(e) {
					return 1 & e.compareDocumentPosition(d.createElement('fieldset'));
				})), le((function(e) {
					return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
				})) || fe('type|href|height|width', (function(e, t, n) {
					if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
				})), n.attributes && le((function(e) {
					return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
				})) || fe('value', (function(e, t, n) {
					if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
				})), le((function(e) {
					return null == e.getAttribute('disabled');
				})) || fe(R, (function(e, t, n) {
					var r;
					if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
				})), se;
			}(n);
			C.find = S, C.expr = S.selectors, C.expr[':'] = C.expr.pseudos, C.uniqueSort = C.unique = S.uniqueSort, C.text = S.getText, C.isXMLDoc = S.isXML, C.contains = S.contains, C.escapeSelector = S.escape;
			var k = function(e, t, n) {
				for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
					if (o && C(e).is(n)) break;
					r.push(e);
				}
				return r;
			}, A = function(e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n;
			}, j = C.expr.match.needsContext;

			function N(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
			}

			var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

			function L(e, t, n) {
				return y(t) ? C.grep(e, (function(e, r) {
					return !!t.call(e, r, e) !== n;
				})) : t.nodeType ? C.grep(e, (function(e) {
					return e === t !== n;
				})) : 'string' != typeof t ? C.grep(e, (function(e) {
					return l.call(t, e) > -1 !== n;
				})) : C.filter(t, e, n);
			}

			C.filter = function(e, t, n) {
				var r = t[0];
				return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, (function(e) {
					return 1 === e.nodeType;
				})));
			}, C.fn.extend({
				find: function(e) {
					var t, n, r = this.length, o = this;
					if ('string' != typeof e) return this.pushStack(C(e).filter((function() {
						for (t = 0; t < r; t++) if (C.contains(o[t], this)) return !0;
					})));
					for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
					return r > 1 ? C.uniqueSort(n) : n;
				}, filter: function(e) {
					return this.pushStack(L(this, e || [], !1));
				}, not: function(e) {
					return this.pushStack(L(this, e || [], !0));
				}, is: function(e) {
					return !!L(this, 'string' == typeof e && j.test(e) ? C(e) : e || [], !1).length;
				}
			});
			var q, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
			(C.fn.init = function(e, t, n) {
				var r, o;
				if (!e) return this;
				if (n = n || q, 'string' == typeof e) {
					if (!(r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
					if (r[1]) {
						if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), D.test(r[1]) && C.isPlainObject(t)) for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
						return this;
					}
					return (o = x.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
				}
				return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
			}).prototype = C.fn, q = C(x);
			var H = /^(?:parents|prev(?:Until|All))/, P = { children: !0, contents: !0, next: !0, prev: !0 };

			function R(e, t) {
				for (; (e = e[t]) && 1 !== e.nodeType;) ;
				return e;
			}

			C.fn.extend({
				has: function(e) {
					var t = C(e, this), n = t.length;
					return this.filter((function() {
						for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
					}));
				}, closest: function(e, t) {
					var n, r = 0, o = this.length, i = [], a = 'string' != typeof e && C(e);
					if (!j.test(e)) for (; r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
						i.push(n);
						break;
					}
					return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i);
				}, index: function(e) {
					return e ? 'string' == typeof e ? l.call(C(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}, add: function(e, t) {
					return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
				}, addBack: function(e) {
					return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
				}
			}), C.each({
				parent: function(e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null;
				}, parents: function(e) {
					return k(e, 'parentNode');
				}, parentsUntil: function(e, t, n) {
					return k(e, 'parentNode', n);
				}, next: function(e) {
					return R(e, 'nextSibling');
				}, prev: function(e) {
					return R(e, 'previousSibling');
				}, nextAll: function(e) {
					return k(e, 'nextSibling');
				}, prevAll: function(e) {
					return k(e, 'previousSibling');
				}, nextUntil: function(e, t, n) {
					return k(e, 'nextSibling', n);
				}, prevUntil: function(e, t, n) {
					return k(e, 'previousSibling', n);
				}, siblings: function(e) {
					return A((e.parentNode || {}).firstChild, e);
				}, children: function(e) {
					return A(e.firstChild);
				}, contents: function(e) {
					return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (N(e, 'template') && (e = e.content || e), C.merge([], e.childNodes));
				}
			}, (function(e, t) {
				C.fn[e] = function(n, r) {
					var o = C.map(this, t, n);
					return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r && (o = C.filter(r, o)), this.length > 1 && (P[e] || C.uniqueSort(o), H.test(e) && o.reverse()), this.pushStack(o);
				};
			}));
			var M = /[^\x20\t\r\n\f]+/g;

			function I(e) {
				return e;
			}

			function _(e) {
				throw e;
			}

			function F(e, t, n, r) {
				var o;
				try {
					e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
				} catch (e) {
					n.apply(void 0, [e]);
				}
			}

			C.Callbacks = function(e) {
				e = 'string' == typeof e ? function(e) {
					var t = {};
					return C.each(e.match(M) || [], (function(e, n) {
						t[n] = !0;
					})), t;
				}(e) : C.extend({}, e);
				var t, n, r, o, i = [], a = [], s = -1, u = function() {
					for (o = o || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
					e.memory || (n = !1), t = !1, o && (i = n ? [] : '');
				}, c = {
					add: function() {
						return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
							C.each(n, (function(n, r) {
								y(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && 'string' !== T(r) && t(r);
							}));
						}(arguments), n && !t && u()), this;
					}, remove: function() {
						return C.each(arguments, (function(e, t) {
							for (var n; (n = C.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--;
						})), this;
					}, has: function(e) {
						return e ? C.inArray(e, i) > -1 : i.length > 0;
					}, empty: function() {
						return i && (i = []), this;
					}, disable: function() {
						return o = a = [], i = n = '', this;
					}, disabled: function() {
						return !i;
					}, lock: function() {
						return o = a = [], n || t || (i = n = ''), this;
					}, locked: function() {
						return !!o;
					}, fireWith: function(e, n) {
						return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
					}, fire: function() {
						return c.fireWith(this, arguments), this;
					}, fired: function() {
						return !!r;
					}
				};
				return c;
			}, C.extend({
				Deferred: function(e) {
					var t = [['notify', 'progress', C.Callbacks('memory'), C.Callbacks('memory'), 2], ['resolve', 'done', C.Callbacks('once memory'), C.Callbacks('once memory'), 0, 'resolved'], ['reject', 'fail', C.Callbacks('once memory'), C.Callbacks('once memory'), 1, 'rejected']],
						r = 'pending', o = {
							state: function() {
								return r;
							}, always: function() {
								return i.done(arguments).fail(arguments), this;
							}, catch: function(e) {
								return o.then(null, e);
							}, pipe: function() {
								var e = arguments;
								return C.Deferred((function(n) {
									C.each(t, (function(t, r) {
										var o = y(e[r[4]]) && e[r[4]];
										i[r[1]]((function() {
											var e = o && o.apply(this, arguments);
											e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + 'With'](this, o ? [e] : arguments);
										}));
									})), e = null;
								})).promise();
							}, then: function(e, r, o) {
								var i = 0;

								function a(e, t, r, o) {
									return function() {
										var s = this, u = arguments, c = function() {
											var n, c;
											if (!(e < i)) {
												if ((n = r.apply(s, u)) === t.promise()) throw new TypeError('Thenable self-resolution');
												c = n && ('object' == typeof n || 'function' == typeof n) && n.then, y(c) ? o ? c.call(n, a(i, t, I, o), a(i, t, _, o)) : (i++, c.call(n, a(i, t, I, o), a(i, t, _, o), a(i, t, I, t.notifyWith))) : (r !== I && (s = void 0, u = [n]), (o || t.resolveWith)(s, u));
											}
										}, l = o ? c : function() {
											try {
												c();
											} catch (n) {
												C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= i && (r !== _ && (s = void 0, u = [n]), t.rejectWith(s, u));
											}
										};
										e ? l() : (C.Deferred.getStackHook && (l.stackTrace = C.Deferred.getStackHook()), n.setTimeout(l));
									};
								}

								return C.Deferred((function(n) {
									t[0][3].add(a(0, n, y(o) ? o : I, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : I)), t[2][3].add(a(0, n, y(r) ? r : _));
								})).promise();
							}, promise: function(e) {
								return null != e ? C.extend(e, o) : o;
							}
						}, i = {};
					return C.each(t, (function(e, n) {
						var a = n[2], s = n[5];
						o[n[1]] = a.add, s && a.add((function() {
							r = s;
						}), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), i[n[0]] = function() {
							return i[n[0] + 'With'](this === i ? void 0 : this, arguments), this;
						}, i[n[0] + 'With'] = a.fireWith;
					})), o.promise(i), e && e.call(i, i), i;
				}, when: function(e) {
					var t = arguments.length, n = t, r = Array(n), o = s.call(arguments), i = C.Deferred(), a = function(e) {
						return function(n) {
							r[e] = this, o[e] = arguments.length > 1 ? s.call(arguments) : n, --t || i.resolveWith(r, o);
						};
					};
					if (t <= 1 && (F(e, i.done(a(n)).resolve, i.reject, !t), 'pending' === i.state() || y(o[n] && o[n].then))) return i.then();
					for (; n--;) F(o[n], a(n), i.reject);
					return i.promise();
				}
			});
			var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
			C.Deferred.exceptionHook = function(e, t) {
				n.console && n.console.warn && e && W.test(e.name) && n.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
			}, C.readyException = function(e) {
				n.setTimeout((function() {
					throw e;
				}));
			};
			var $ = C.Deferred();

			function B() {
				x.removeEventListener('DOMContentLoaded', B), n.removeEventListener('load', B), C.ready();
			}

			C.fn.ready = function(e) {
				return $.then(e).catch((function(e) {
					C.readyException(e);
				})), this;
			}, C.extend({
				isReady: !1, readyWait: 1, ready: function(e) {
					(!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || $.resolveWith(x, [C]));
				}
			}), C.ready.then = $.then, 'complete' === x.readyState || 'loading' !== x.readyState && !x.documentElement.doScroll ? n.setTimeout(C.ready) : (x.addEventListener('DOMContentLoaded', B), n.addEventListener('load', B));
			var z = function(e, t, n, r, o, i, a) {
				var s = 0, u = e.length, c = null == n;
				if ('object' === T(n)) for (s in o = !0, n) z(e, t, s, n[s], !0, i, a); else if (void 0 !== r && (o = !0, y(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
					return c.call(C(e), n);
				})), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
				return o ? e : c ? t.call(e) : u ? t(e[0], n) : i;
			}, U = /^-ms-/, X = /-([a-z])/g;

			function G(e, t) {
				return t.toUpperCase();
			}

			function V(e) {
				return e.replace(U, 'ms-').replace(X, G);
			}

			var Y = function(e) {
				return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
			};

			function Q() {
				this.expando = C.expando + Q.uid++;
			}

			Q.uid = 1, Q.prototype = {
				cache: function(e) {
					var t = e[this.expando];
					return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
						value: t,
						configurable: !0
					}))), t;
				}, set: function(e, t, n) {
					var r, o = this.cache(e);
					if ('string' == typeof t) o[V(t)] = n; else for (r in t) o[V(r)] = t[r];
					return o;
				}, get: function(e, t) {
					return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
				}, access: function(e, t, n) {
					return void 0 === t || t && 'string' == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
				}, remove: function(e, t) {
					var n, r = e[this.expando];
					if (void 0 !== r) {
						if (void 0 !== t) {
							n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(M) || []).length;
							for (; n--;) delete r[t[n]];
						}
						(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
					}
				}, hasData: function(e) {
					var t = e[this.expando];
					return void 0 !== t && !C.isEmptyObject(t);
				}
			};
			var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;

			function te(e, t, n) {
				var r;
				if (void 0 === n && 1 === e.nodeType) if (r = 'data-' + t.replace(ee, '-$&').toLowerCase(), 'string' == typeof (n = e.getAttribute(r))) {
					try {
						n = function(e) {
							return 'true' === e || 'false' !== e && ('null' === e ? null : e === +e + '' ? +e : Z.test(e) ? JSON.parse(e) : e);
						}(n);
					} catch (e) {
					}
					K.set(e, t, n);
				} else n = void 0;
				return n;
			}

			C.extend({
				hasData: function(e) {
					return K.hasData(e) || J.hasData(e);
				}, data: function(e, t, n) {
					return K.access(e, t, n);
				}, removeData: function(e, t) {
					K.remove(e, t);
				}, _data: function(e, t, n) {
					return J.access(e, t, n);
				}, _removeData: function(e, t) {
					J.remove(e, t);
				}
			}), C.fn.extend({
				data: function(e, t) {
					var n, r, o, i = this[0], a = i && i.attributes;
					if (void 0 === e) {
						if (this.length && (o = K.get(i), 1 === i.nodeType && !J.get(i, 'hasDataAttrs'))) {
							for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf('data-') && (r = V(r.slice(5)), te(i, r, o[r]));
							J.set(i, 'hasDataAttrs', !0);
						}
						return o;
					}
					return 'object' == typeof e ? this.each((function() {
						K.set(this, e);
					})) : z(this, (function(t) {
						var n;
						if (i && void 0 === t) return void 0 !== (n = K.get(i, e)) || void 0 !== (n = te(i, e)) ? n : void 0;
						this.each((function() {
							K.set(this, e, t);
						}));
					}), null, t, arguments.length > 1, null, !0);
				}, removeData: function(e) {
					return this.each((function() {
						K.remove(this, e);
					}));
				}
			}), C.extend({
				queue: function(e, t, n) {
					var r;
					if (e) return t = (t || 'fx') + 'queue', r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, C.makeArray(n)) : r.push(n)), r || [];
				}, dequeue: function(e, t) {
					t = t || 'fx';
					var n = C.queue(e, t), r = n.length, o = n.shift(), i = C._queueHooks(e, t);
					'inprogress' === o && (o = n.shift(), r--), o && ('fx' === t && n.unshift('inprogress'), delete i.stop, o.call(e, (function() {
						C.dequeue(e, t);
					}), i)), !r && i && i.empty.fire();
				}, _queueHooks: function(e, t) {
					var n = t + 'queueHooks';
					return J.get(e, n) || J.access(e, n, {
						empty: C.Callbacks('once memory').add((function() {
							J.remove(e, [t + 'queue', n]);
						}))
					});
				}
			}), C.fn.extend({
				queue: function(e, t) {
					var n = 2;
					return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
						var n = C.queue(this, e, t);
						C._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && C.dequeue(this, e);
					}));
				}, dequeue: function(e) {
					return this.each((function() {
						C.dequeue(this, e);
					}));
				}, clearQueue: function(e) {
					return this.queue(e || 'fx', []);
				}, promise: function(e, t) {
					var n, r = 1, o = C.Deferred(), i = this, a = this.length, s = function() {
						--r || o.resolveWith(i, [i]);
					};
					for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; a--;) (n = J.get(i[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
					return s(), o.promise(t);
				}
			});
			var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				re = new RegExp('^(?:([+-])=|)(' + ne + ')([a-z%]*)$', 'i'), oe = ['Top', 'Right', 'Bottom', 'Left'],
				ie = x.documentElement, ae = function(e) {
					return C.contains(e.ownerDocument, e);
				}, se = { composed: !0 };
			ie.getRootNode && (ae = function(e) {
				return C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
			});
			var ue = function(e, t) {
				return 'none' === (e = t || e).style.display || '' === e.style.display && ae(e) && 'none' === C.css(e, 'display');
			};

			function ce(e, t, n, r) {
				var o, i, a = 20, s = r ? function() {
						return r.cur();
					} : function() {
						return C.css(e, t, '');
					}, u = s(), c = n && n[3] || (C.cssNumber[t] ? '' : 'px'),
					l = e.nodeType && (C.cssNumber[t] || 'px' !== c && +u) && re.exec(C.css(e, t));
				if (l && l[3] !== c) {
					for (u /= 2, c = c || l[3], l = +u || 1; a--;) C.style(e, t, l + c), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), l /= i;
					l *= 2, C.style(e, t, l + c), n = n || [];
				}
				return n && (l = +l || +u || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = o)), o;
			}

			var le = {};

			function fe(e) {
				var t, n = e.ownerDocument, r = e.nodeName, o = le[r];
				return o || (t = n.body.appendChild(n.createElement(r)), o = C.css(t, 'display'), t.parentNode.removeChild(t), 'none' === o && (o = 'block'), le[r] = o, o);
			}

			function pe(e, t) {
				for (var n, r, o = [], i = 0, a = e.length; i < a; i++) (r = e[i]).style && (n = r.style.display, t ? ('none' === n && (o[i] = J.get(r, 'display') || null, o[i] || (r.style.display = '')), '' === r.style.display && ue(r) && (o[i] = fe(r))) : 'none' !== n && (o[i] = 'none', J.set(r, 'display', n)));
				for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
				return e;
			}

			C.fn.extend({
				show: function() {
					return pe(this, !0);
				}, hide: function() {
					return pe(this);
				}, toggle: function(e) {
					return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each((function() {
						ue(this) ? C(this).show() : C(this).hide();
					}));
				}
			});
			var de, he, ve = /^(?:checkbox|radio)$/i, ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
				ye = /^$|^module$|\/(?:java|ecma)script/i;
			de = x.createDocumentFragment().appendChild(x.createElement('div')), (he = x.createElement('input')).setAttribute('type', 'radio'), he.setAttribute('checked', 'checked'), he.setAttribute('name', 't'), de.appendChild(he), g.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = '<textarea>x</textarea>', g.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue, de.innerHTML = '<option></option>', g.option = !!de.lastChild;
			var me = {
				thead: [1, '<table>', '</table>'],
				col: [2, '<table><colgroup>', '</colgroup></table>'],
				tr: [2, '<table><tbody>', '</tbody></table>'],
				td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
				_default: [0, '', '']
			};

			function xe(e, t) {
				var n;
				return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || '*') : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || '*') : [], void 0 === t || t && N(e, t) ? C.merge([e], n) : n;
			}

			function be(e, t) {
				for (var n = 0, r = e.length; n < r; n++) J.set(e[n], 'globalEval', !t || J.get(t[n], 'globalEval'));
			}

			me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, g.option || (me.optgroup = me.option = [1, '<select multiple=\'multiple\'>', '</select>']);
			var we = /<|&#?\w+;/;

			function Te(e, t, n, r, o) {
				for (var i, a, s, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((i = e[d]) || 0 === i) if ('object' === T(i)) C.merge(p, i.nodeType ? [i] : i); else if (we.test(i)) {
					for (a = a || f.appendChild(t.createElement('div')), s = (ge.exec(i) || ['', ''])[1].toLowerCase(), u = me[s] || me._default, a.innerHTML = u[1] + C.htmlPrefilter(i) + u[2], l = u[0]; l--;) a = a.lastChild;
					C.merge(p, a.childNodes), (a = f.firstChild).textContent = '';
				} else p.push(t.createTextNode(i));
				for (f.textContent = '', d = 0; i = p[d++];) if (r && C.inArray(i, r) > -1) o && o.push(i); else if (c = ae(i), a = xe(f.appendChild(i), 'script'), c && be(a), n) for (l = 0; i = a[l++];) ye.test(i.type || '') && n.push(i);
				return f;
			}

			var Ce = /^key/, Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Se = /^([^.]*)(?:\.(.+)|)/;

			function ke() {
				return !0;
			}

			function Ae() {
				return !1;
			}

			function je(e, t) {
				return e === function() {
					try {
						return x.activeElement;
					} catch (e) {
					}
				}() == ('focus' === t);
			}

			function Ne(e, t, n, r, o, i) {
				var a, s;
				if ('object' == typeof t) {
					for (s in 'string' != typeof n && (r = r || n, n = void 0), t) Ne(e, s, n, r, t[s], i);
					return e;
				}
				if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ('string' == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ae; else if (!o) return e;
				return 1 === i && (a = o, (o = function(e) {
					return C().off(e), a.apply(this, arguments);
				}).guid = a.guid || (a.guid = C.guid++)), e.each((function() {
					C.event.add(this, t, o, r, n);
				}));
			}

			function De(e, t, n) {
				n ? (J.set(e, t, !1), C.event.add(e, t, {
					namespace: !1, handler: function(e) {
						var r, o, i = J.get(this, t);
						if (1 & e.isTrigger && this[t]) {
							if (i.length) (C.event.special[t] || {}).delegateType && e.stopPropagation(); else if (i = s.call(arguments), J.set(this, t, i), r = n(this, t), this[t](), i !== (o = J.get(this, t)) || r ? J.set(this, t, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value;
						} else i.length && (J.set(this, t, { value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this) }), e.stopImmediatePropagation());
					}
				})) : void 0 === J.get(e, t) && C.event.add(e, t, ke);
			}

			C.event = {
				global: {}, add: function(e, t, n, r, o) {
					var i, a, s, u, c, l, f, p, d, h, v, g = J.get(e);
					if (Y(e)) for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(ie, o), n.guid || (n.guid = C.guid++), (u = g.events) || (u = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function(t) {
						return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0;
					}), c = (t = (t || '').match(M) || ['']).length; c--;) d = v = (s = Se.exec(t[c]) || [])[1], h = (s[2] || '').split('.').sort(), d && (f = C.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = C.event.special[d] || {}, l = C.extend({
						type: d,
						origType: v,
						data: r,
						handler: n,
						guid: n.guid,
						selector: o,
						needsContext: o && C.expr.match.needsContext.test(o),
						namespace: h.join('.')
					}, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, l) : p.push(l), C.event.global[d] = !0);
				}, remove: function(e, t, n, r, o) {
					var i, a, s, u, c, l, f, p, d, h, v, g = J.hasData(e) && J.get(e);
					if (g && (u = g.events)) {
						for (c = (t = (t || '').match(M) || ['']).length; c--;) if (d = v = (s = Se.exec(t[c]) || [])[1], h = (s[2] || '').split('.').sort(), d) {
							for (f = C.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), a = i = p.length; i--;) l = p[i], !o && v !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ('**' !== r || !l.selector) || (p.splice(i, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
							a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || C.removeEvent(e, d, g.handle), delete u[d]);
						} else for (d in u) C.event.remove(e, d + t[c], n, r, !0);
						C.isEmptyObject(u) && J.remove(e, 'handle events');
					}
				}, dispatch: function(e) {
					var t, n, r, o, i, a, s = new Array(arguments.length), u = C.event.fix(e),
						c = (J.get(this, 'events') || Object.create(null))[u.type] || [], l = C.event.special[u.type] || {};
					for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
					if (u.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
						for (a = C.event.handlers.call(this, u, c), t = 0; (o = a[t++]) && !u.isPropagationStopped();) for (u.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i, u.data = i.data, void 0 !== (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
						return l.postDispatch && l.postDispatch.call(this, u), u.result;
					}
				}, handlers: function(e, t) {
					var n, r, o, i, a, s = [], u = t.delegateCount, c = e.target;
					if (u && c.nodeType && !('click' === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ('click' !== e.type || !0 !== c.disabled)) {
						for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + ' '] && (a[o] = r.needsContext ? C(o, this).index(c) > -1 : C.find(o, this, null, [c]).length), a[o] && i.push(r);
						i.length && s.push({ elem: c, handlers: i });
					}
					return c = this, u < t.length && s.push({ elem: c, handlers: t.slice(u) }), s;
				}, addProp: function(e, t) {
					Object.defineProperty(C.Event.prototype, e, {
						enumerable: !0, configurable: !0, get: y(t) ? function() {
							if (this.originalEvent) return t(this.originalEvent);
						} : function() {
							if (this.originalEvent) return this.originalEvent[e];
						}, set: function(t) {
							Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
						}
					});
				}, fix: function(e) {
					return e[C.expando] ? e : new C.Event(e);
				}, special: {
					load: { noBubble: !0 }, click: {
						setup: function(e) {
							var t = this || e;
							return ve.test(t.type) && t.click && N(t, 'input') && De(t, 'click', ke), !1;
						}, trigger: function(e) {
							var t = this || e;
							return ve.test(t.type) && t.click && N(t, 'input') && De(t, 'click'), !0;
						}, _default: function(e) {
							var t = e.target;
							return ve.test(t.type) && t.click && N(t, 'input') && J.get(t, 'click') || N(t, 'a');
						}
					}, beforeunload: {
						postDispatch: function(e) {
							void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
						}
					}
				}
			}, C.removeEvent = function(e, t, n) {
				e.removeEventListener && e.removeEventListener(t, n);
			}, C.Event = function(e, t) {
				if (!(this instanceof C.Event)) return new C.Event(e, t);
				e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0;
			}, C.Event.prototype = {
				constructor: C.Event,
				isDefaultPrevented: Ae,
				isPropagationStopped: Ae,
				isImmediatePropagationStopped: Ae,
				isSimulated: !1,
				preventDefault: function() {
					var e = this.originalEvent;
					this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
				},
				stopPropagation: function() {
					var e = this.originalEvent;
					this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
				},
				stopImmediatePropagation: function() {
					var e = this.originalEvent;
					this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
				}
			}, C.each({
				altKey: !0,
				bubbles: !0,
				cancelable: !0,
				changedTouches: !0,
				ctrlKey: !0,
				detail: !0,
				eventPhase: !0,
				metaKey: !0,
				pageX: !0,
				pageY: !0,
				shiftKey: !0,
				view: !0,
				char: !0,
				code: !0,
				charCode: !0,
				key: !0,
				keyCode: !0,
				button: !0,
				buttons: !0,
				clientX: !0,
				clientY: !0,
				offsetX: !0,
				offsetY: !0,
				pointerId: !0,
				pointerType: !0,
				screenX: !0,
				screenY: !0,
				targetTouches: !0,
				toElement: !0,
				touches: !0,
				which: function(e) {
					var t = e.button;
					return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
				}
			}, C.event.addProp), C.each({ focus: 'focusin', blur: 'focusout' }, (function(e, t) {
				C.event.special[e] = {
					setup: function() {
						return De(this, e, je), !1;
					}, trigger: function() {
						return De(this, e), !0;
					}, delegateType: t
				};
			})), C.each({
				mouseenter: 'mouseover',
				mouseleave: 'mouseout',
				pointerenter: 'pointerover',
				pointerleave: 'pointerout'
			}, (function(e, t) {
				C.event.special[e] = {
					delegateType: t, bindType: t, handle: function(e) {
						var n, r = this, o = e.relatedTarget, i = e.handleObj;
						return o && (o === r || C.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
					}
				};
			})), C.fn.extend({
				on: function(e, t, n, r) {
					return Ne(this, e, t, n, r);
				}, one: function(e, t, n, r) {
					return Ne(this, e, t, n, r, 1);
				}, off: function(e, t, n) {
					var r, o;
					if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
					if ('object' == typeof e) {
						for (o in e) this.off(o, t, e[o]);
						return this;
					}
					return !1 !== t && 'function' != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each((function() {
						C.event.remove(this, e, n, t);
					}));
				}
			});
			var Le = /<script|<style|<link/i, qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
				Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

			function He(e, t) {
				return N(e, 'table') && N(11 !== t.nodeType ? t : t.firstChild, 'tr') && C(e).children('tbody')[0] || e;
			}

			function Pe(e) {
				return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
			}

			function Re(e) {
				return 'true/' === (e.type || '').slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute('type'), e;
			}

			function Me(e, t) {
				var n, r, o, i, a, s;
				if (1 === t.nodeType) {
					if (J.hasData(e) && (s = J.get(e).events)) for (o in J.remove(t, 'handle events'), s) for (n = 0, r = s[o].length; n < r; n++) C.event.add(t, o, s[o][n]);
					K.hasData(e) && (i = K.access(e), a = C.extend({}, i), K.set(t, a));
				}
			}

			function Ie(e, t) {
				var n = t.nodeName.toLowerCase();
				'input' === n && ve.test(e.type) ? t.checked = e.checked : 'input' !== n && 'textarea' !== n || (t.defaultValue = e.defaultValue);
			}

			function _e(e, t, n, r) {
				t = u(t);
				var o, i, a, s, c, l, f = 0, p = e.length, d = p - 1, h = t[0], v = y(h);
				if (v || p > 1 && 'string' == typeof h && !g.checkClone && qe.test(h)) return e.each((function(o) {
					var i = e.eq(o);
					v && (t[0] = h.call(this, o, i.html())), _e(i, t, n, r);
				}));
				if (p && (i = (o = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
					for (s = (a = C.map(xe(o, 'script'), Pe)).length; f < p; f++) c = o, f !== d && (c = C.clone(c, !0, !0), s && C.merge(a, xe(c, 'script'))), n.call(e[f], c, f);
					if (s) for (l = a[a.length - 1].ownerDocument, C.map(a, Re), f = 0; f < s; f++) c = a[f], ye.test(c.type || '') && !J.access(c, 'globalEval') && C.contains(l, c) && (c.src && 'module' !== (c.type || '').toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, { nonce: c.nonce || c.getAttribute('nonce') }, l) : w(c.textContent.replace(Oe, ''), c, l));
				}
				return e;
			}

			function Fe(e, t, n) {
				for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(xe(r)), r.parentNode && (n && ae(r) && be(xe(r, 'script')), r.parentNode.removeChild(r));
				return e;
			}

			C.extend({
				htmlPrefilter: function(e) {
					return e;
				}, clone: function(e, t, n) {
					var r, o, i, a, s = e.cloneNode(!0), u = ae(e);
					if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (a = xe(s), r = 0, o = (i = xe(e)).length; r < o; r++) Ie(i[r], a[r]);
					if (t) if (n) for (i = i || xe(e), a = a || xe(s), r = 0, o = i.length; r < o; r++) Me(i[r], a[r]); else Me(e, s);
					return (a = xe(s, 'script')).length > 0 && be(a, !u && xe(e, 'script')), s;
				}, cleanData: function(e) {
					for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++) if (Y(n)) {
						if (t = n[J.expando]) {
							if (t.events) for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
							n[J.expando] = void 0;
						}
						n[K.expando] && (n[K.expando] = void 0);
					}
				}
			}), C.fn.extend({
				detach: function(e) {
					return Fe(this, e, !0);
				}, remove: function(e) {
					return Fe(this, e);
				}, text: function(e) {
					return z(this, (function(e) {
						return void 0 === e ? C.text(this) : this.empty().each((function() {
							1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
						}));
					}), null, e, arguments.length);
				}, append: function() {
					return _e(this, arguments, (function(e) {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || He(this, e).appendChild(e);
					}));
				}, prepend: function() {
					return _e(this, arguments, (function(e) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var t = He(this, e);
							t.insertBefore(e, t.firstChild);
						}
					}));
				}, before: function() {
					return _e(this, arguments, (function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this);
					}));
				}, after: function() {
					return _e(this, arguments, (function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
					}));
				}, empty: function() {
					for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(xe(e, !1)), e.textContent = '');
					return this;
				}, clone: function(e, t) {
					return e = null != e && e, t = null == t ? e : t, this.map((function() {
						return C.clone(this, e, t);
					}));
				}, html: function(e) {
					return z(this, (function(e) {
						var t = this[0] || {}, n = 0, r = this.length;
						if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
						if ('string' == typeof e && !Le.test(e) && !me[(ge.exec(e) || ['', ''])[1].toLowerCase()]) {
							e = C.htmlPrefilter(e);
							try {
								for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(xe(t, !1)), t.innerHTML = e);
								t = 0;
							} catch (e) {
							}
						}
						t && this.empty().append(e);
					}), null, e, arguments.length);
				}, replaceWith: function() {
					var e = [];
					return _e(this, arguments, (function(t) {
						var n = this.parentNode;
						C.inArray(this, e) < 0 && (C.cleanData(xe(this)), n && n.replaceChild(t, this));
					}), e);
				}
			}), C.each({
				appendTo: 'append',
				prependTo: 'prepend',
				insertBefore: 'before',
				insertAfter: 'after',
				replaceAll: 'replaceWith'
			}, (function(e, t) {
				C.fn[e] = function(e) {
					for (var n, r = [], o = C(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), C(o[a])[t](n), c.apply(r, n.get());
					return this.pushStack(r);
				};
			}));
			var We = new RegExp('^(' + ne + ')(?!px)[a-z%]+$', 'i'), $e = function(e) {
				var t = e.ownerDocument.defaultView;
				return t && t.opener || (t = n), t.getComputedStyle(e);
			}, Be = function(e, t, n) {
				var r, o, i = {};
				for (o in t) i[o] = e.style[o], e.style[o] = t[o];
				for (o in r = n.call(e), t) e.style[o] = i[o];
				return r;
			}, ze = new RegExp(oe.join('|'), 'i');

			function Ue(e, t, n) {
				var r, o, i, a, s = e.style;
				return (n = n || $e(e)) && ('' !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = C.style(e, t)), !g.pixelBoxStyles() && We.test(a) && ze.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + '' : a;
			}

			function Xe(e, t) {
				return {
					get: function() {
						if (!e()) return (this.get = t).apply(this, arguments);
						delete this.get;
					}
				};
			}

			!function() {
				function e() {
					if (l) {
						c.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0', l.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%', ie.appendChild(c).appendChild(l);
						var e = n.getComputedStyle(l);
						r = '1%' !== e.top, u = 12 === t(e.marginLeft), l.style.right = '60%', a = 36 === t(e.right), o = 36 === t(e.width), l.style.position = 'absolute', i = 12 === t(l.offsetWidth / 3), ie.removeChild(c), l = null;
					}
				}

				function t(e) {
					return Math.round(parseFloat(e));
				}

				var r, o, i, a, s, u, c = x.createElement('div'), l = x.createElement('div');
				l.style && (l.style.backgroundClip = 'content-box', l.cloneNode(!0).style.backgroundClip = '', g.clearCloneStyle = 'content-box' === l.style.backgroundClip, C.extend(g, {
					boxSizingReliable: function() {
						return e(), o;
					}, pixelBoxStyles: function() {
						return e(), a;
					}, pixelPosition: function() {
						return e(), r;
					}, reliableMarginLeft: function() {
						return e(), u;
					}, scrollboxSize: function() {
						return e(), i;
					}, reliableTrDimensions: function() {
						var e, t, r, o;
						return null == s && (e = x.createElement('table'), t = x.createElement('tr'), r = x.createElement('div'), e.style.cssText = 'position:absolute;left:-11111px', t.style.height = '1px', r.style.height = '9px', ie.appendChild(e).appendChild(t).appendChild(r), o = n.getComputedStyle(t), s = parseInt(o.height) > 3, ie.removeChild(e)), s;
					}
				}));
			}();
			var Ge = ['Webkit', 'Moz', 'ms'], Ve = x.createElement('div').style, Ye = {};

			function Qe(e) {
				var t = C.cssProps[e] || Ye[e];
				return t || (e in Ve ? e : Ye[e] = function(e) {
					for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;) if ((e = Ge[n] + t) in Ve) return e;
				}(e) || e);
			}

			var Je = /^(none|table(?!-c[ea]).+)/, Ke = /^--/,
				Ze = { position: 'absolute', visibility: 'hidden', display: 'block' },
				et = { letterSpacing: '0', fontWeight: '400' };

			function tt(e, t, n) {
				var r = re.exec(t);
				return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
			}

			function nt(e, t, n, r, o, i) {
				var a = 'width' === t ? 1 : 0, s = 0, u = 0;
				if (n === (r ? 'border' : 'content')) return 0;
				for (; a < 4; a += 2) 'margin' === n && (u += C.css(e, n + oe[a], !0, o)), r ? ('content' === n && (u -= C.css(e, 'padding' + oe[a], !0, o)), 'margin' !== n && (u -= C.css(e, 'border' + oe[a] + 'Width', !0, o))) : (u += C.css(e, 'padding' + oe[a], !0, o), 'padding' !== n ? u += C.css(e, 'border' + oe[a] + 'Width', !0, o) : s += C.css(e, 'border' + oe[a] + 'Width', !0, o));
				return !r && i >= 0 && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u;
			}

			function rt(e, t, n) {
				var r = $e(e), o = (!g.boxSizingReliable() || n) && 'border-box' === C.css(e, 'boxSizing', !1, r), i = o,
					a = Ue(e, t, r), s = 'offset' + t[0].toUpperCase() + t.slice(1);
				if (We.test(a)) {
					if (!n) return a;
					a = 'auto';
				}
				return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && N(e, 'tr') || 'auto' === a || !parseFloat(a) && 'inline' === C.css(e, 'display', !1, r)) && e.getClientRects().length && (o = 'border-box' === C.css(e, 'boxSizing', !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + nt(e, t, n || (o ? 'border' : 'content'), i, r, a) + 'px';
			}

			function ot(e, t, n, r, o) {
				return new ot.prototype.init(e, t, n, r, o);
			}

			C.extend({
				cssHooks: {
					opacity: {
						get: function(e, t) {
							if (t) {
								var n = Ue(e, 'opacity');
								return '' === n ? '1' : n;
							}
						}
					}
				},
				cssNumber: {
					animationIterationCount: !0,
					columnCount: !0,
					fillOpacity: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					gridArea: !0,
					gridColumn: !0,
					gridColumnEnd: !0,
					gridColumnStart: !0,
					gridRow: !0,
					gridRowEnd: !0,
					gridRowStart: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0
				},
				cssProps: {},
				style: function(e, t, n, r) {
					if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
						var o, i, a, s = V(t), u = Ke.test(t), c = e.style;
						if (u || (t = Qe(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && 'get' in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
						'string' === (i = typeof n) && (o = re.exec(n)) && o[1] && (n = ce(e, t, o), i = 'number'), null != n && n == n && ('number' !== i || u || (n += o && o[3] || (C.cssNumber[s] ? '' : 'px')), g.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (c[t] = 'inherit'), a && 'set' in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n));
					}
				},
				css: function(e, t, n, r) {
					var o, i, a, s = V(t);
					return Ke.test(t) || (t = Qe(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && 'get' in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ue(e, t, r)), 'normal' === o && t in et && (o = et[t]), '' === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o;
				}
			}), C.each(['height', 'width'], (function(e, t) {
				C.cssHooks[t] = {
					get: function(e, n, r) {
						if (n) return !Je.test(C.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, r) : Be(e, Ze, (function() {
							return rt(e, t, r);
						}));
					}, set: function(e, n, r) {
						var o, i = $e(e), a = !g.scrollboxSize() && 'absolute' === i.position,
							s = (a || r) && 'border-box' === C.css(e, 'boxSizing', !1, i), u = r ? nt(e, t, r, s, i) : 0;
						return s && a && (u -= Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - nt(e, t, 'border', !1, i) - .5)), u && (o = re.exec(n)) && 'px' !== (o[3] || 'px') && (e.style[t] = n, n = C.css(e, t)), tt(0, n, u);
					}
				};
			})), C.cssHooks.marginLeft = Xe(g.reliableMarginLeft, (function(e, t) {
				if (t) return (parseFloat(Ue(e, 'marginLeft')) || e.getBoundingClientRect().left - Be(e, { marginLeft: 0 }, (function() {
					return e.getBoundingClientRect().left;
				}))) + 'px';
			})), C.each({ margin: '', padding: '', border: 'Width' }, (function(e, t) {
				C.cssHooks[e + t] = {
					expand: function(n) {
						for (var r = 0, o = {}, i = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++) o[e + oe[r] + t] = i[r] || i[r - 2] || i[0];
						return o;
					}
				}, 'margin' !== e && (C.cssHooks[e + t].set = tt);
			})), C.fn.extend({
				css: function(e, t) {
					return z(this, (function(e, t, n) {
						var r, o, i = {}, a = 0;
						if (Array.isArray(t)) {
							for (r = $e(e), o = t.length; a < o; a++) i[t[a]] = C.css(e, t[a], !1, r);
							return i;
						}
						return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
					}), e, t, arguments.length > 1);
				}
			}), C.Tween = ot, ot.prototype = {
				constructor: ot, init: function(e, t, n, r, o, i) {
					this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? '' : 'px');
				}, cur: function() {
					var e = ot.propHooks[this.prop];
					return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
				}, run: function(e) {
					var t, n = ot.propHooks[this.prop];
					return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this;
				}
			}, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
				_default: {
					get: function(e) {
						var t;
						return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, '')) && 'auto' !== t ? t : 0;
					}, set: function(e) {
						C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
					}
				}
			}, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
				set: function(e) {
					e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
				}
			}, C.easing = {
				linear: function(e) {
					return e;
				}, swing: function(e) {
					return .5 - Math.cos(e * Math.PI) / 2;
				}, _default: 'swing'
			}, C.fx = ot.prototype.init, C.fx.step = {};
			var it, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;

			function ct() {
				at && (!1 === x.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, C.fx.interval), C.fx.tick());
			}

			function lt() {
				return n.setTimeout((function() {
					it = void 0;
				})), it = Date.now();
			}

			function ft(e, t) {
				var n, r = 0, o = { height: e };
				for (t = t ? 1 : 0; r < 4; r += 2 - t) o['margin' + (n = oe[r])] = o['padding' + n] = e;
				return t && (o.opacity = o.width = e), o;
			}

			function pt(e, t, n) {
				for (var r, o = (dt.tweeners[t] || []).concat(dt.tweeners['*']), i = 0, a = o.length; i < a; i++) if (r = o[i].call(n, t, e)) return r;
			}

			function dt(e, t, n) {
				var r, o, i = 0, a = dt.prefilters.length, s = C.Deferred().always((function() {
					delete u.elem;
				})), u = function() {
					if (o) return !1;
					for (var t = it || lt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, a = c.tweens.length; i < a; i++) c.tweens[i].run(r);
					return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1);
				}, c = s.promise({
					elem: e,
					props: C.extend({}, t),
					opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, n),
					originalProperties: t,
					originalOptions: n,
					startTime: it || lt(),
					duration: n.duration,
					tweens: [],
					createTween: function(t, n) {
						var r = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
						return c.tweens.push(r), r;
					},
					stop: function(t) {
						var n = 0, r = t ? c.tweens.length : 0;
						if (o) return this;
						for (o = !0; n < r; n++) c.tweens[n].run(1);
						return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this;
					}
				}), l = c.props;
				for (!function(e, t) {
					var n, r, o, i, a;
					for (n in e) if (o = t[r = V(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = C.cssHooks[r]) && 'expand' in a) for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o); else t[r] = o;
				}(l, c.opts.specialEasing); i < a; i++) if (r = dt.prefilters[i].call(c, e, l, c.opts)) return y(r.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
				return C.map(l, pt, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(u, {
					elem: e,
					anim: c,
					queue: c.opts.queue
				})), c;
			}

			C.Animation = C.extend(dt, {
				tweeners: {
					'*': [function(e, t) {
						var n = this.createTween(e, t);
						return ce(n.elem, e, re.exec(t), n), n;
					}]
				}, tweener: function(e, t) {
					y(e) ? (t = e, e = ['*']) : e = e.match(M);
					for (var n, r = 0, o = e.length; r < o; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
				}, prefilters: [function(e, t, n) {
					var r, o, i, a, s, u, c, l, f = 'width' in t || 'height' in t, p = this, d = {}, h = e.style,
						v = e.nodeType && ue(e), g = J.get(e, 'fxshow');
					for (r in n.queue || (null == (a = C._queueHooks(e, 'fx')).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
						a.unqueued || s();
					}), a.unqueued++, p.always((function() {
						p.always((function() {
							a.unqueued--, C.queue(e, 'fx').length || a.empty.fire();
						}));
					}))), t) if (o = t[r], st.test(o)) {
						if (delete t[r], i = i || 'toggle' === o, o === (v ? 'hide' : 'show')) {
							if ('show' !== o || !g || void 0 === g[r]) continue;
							v = !0;
						}
						d[r] = g && g[r] || C.style(e, r);
					}
					if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = J.get(e, 'display')), 'none' === (l = C.css(e, 'display')) && (c ? l = c : (pe([e], !0), c = e.style.display || c, l = C.css(e, 'display'), pe([e]))), ('inline' === l || 'inline-block' === l && null != c) && 'none' === C.css(e, 'float') && (u || (p.done((function() {
						h.display = c;
					})), null == c && (l = h.display, c = 'none' === l ? '' : l)), h.display = 'inline-block')), n.overflow && (h.overflow = 'hidden', p.always((function() {
						h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
					}))), u = !1, d) u || (g ? 'hidden' in g && (v = g.hidden) : g = J.access(e, 'fxshow', { display: c }), i && (g.hidden = !v), v && pe([e], !0), p.done((function() {
						for (r in v || pe([e]), J.remove(e, 'fxshow'), d) C.style(e, r, d[r]);
					}))), u = pt(v ? g[r] : 0, r, p), r in g || (g[r] = u.start, v && (u.end = u.start, u.start = 0));
				}], prefilter: function(e, t) {
					t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
				}
			}), C.speed = function(e, t, n) {
				var r = e && 'object' == typeof e ? C.extend({}, e) : {
					complete: n || !n && t || y(e) && e,
					duration: e,
					easing: n && t || t && !y(t) && t
				};
				return C.fx.off ? r.duration = 0 : 'number' != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = 'fx'), r.old = r.complete, r.complete = function() {
					y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
				}, r;
			}, C.fn.extend({
				fadeTo: function(e, t, n, r) {
					return this.filter(ue).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
				}, animate: function(e, t, n, r) {
					var o = C.isEmptyObject(e), i = C.speed(t, n, r), a = function() {
						var t = dt(this, C.extend({}, e), i);
						(o || J.get(this, 'finish')) && t.stop(!0);
					};
					return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
				}, stop: function(e, t, n) {
					var r = function(e) {
						var t = e.stop;
						delete e.stop, t(n);
					};
					return 'string' != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || 'fx', []), this.each((function() {
						var t = !0, o = null != e && e + 'queueHooks', i = C.timers, a = J.get(this);
						if (o) a[o] && a[o].stop && r(a[o]); else for (o in a) a[o] && a[o].stop && ut.test(o) && r(a[o]);
						for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
						!t && n || C.dequeue(this, e);
					}));
				}, finish: function(e) {
					return !1 !== e && (e = e || 'fx'), this.each((function() {
						var t, n = J.get(this), r = n[e + 'queue'], o = n[e + 'queueHooks'], i = C.timers, a = r ? r.length : 0;
						for (n.finish = !0, C.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
						for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
						delete n.finish;
					}));
				}
			}), C.each(['toggle', 'show', 'hide'], (function(e, t) {
				var n = C.fn[t];
				C.fn[t] = function(e, r, o) {
					return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, r, o);
				};
			})), C.each({
				slideDown: ft('show'),
				slideUp: ft('hide'),
				slideToggle: ft('toggle'),
				fadeIn: { opacity: 'show' },
				fadeOut: { opacity: 'hide' },
				fadeToggle: { opacity: 'toggle' }
			}, (function(e, t) {
				C.fn[e] = function(e, n, r) {
					return this.animate(t, e, n, r);
				};
			})), C.timers = [], C.fx.tick = function() {
				var e, t = 0, n = C.timers;
				for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
				n.length || C.fx.stop(), it = void 0;
			}, C.fx.timer = function(e) {
				C.timers.push(e), C.fx.start();
			}, C.fx.interval = 13, C.fx.start = function() {
				at || (at = !0, ct());
			}, C.fx.stop = function() {
				at = null;
			}, C.fx.speeds = { slow: 600, fast: 200, _default: 400 }, C.fn.delay = function(e, t) {
				return e = C.fx && C.fx.speeds[e] || e, t = t || 'fx', this.queue(t, (function(t, r) {
					var o = n.setTimeout(t, e);
					r.stop = function() {
						n.clearTimeout(o);
					};
				}));
			}, function() {
				var e = x.createElement('input'), t = x.createElement('select').appendChild(x.createElement('option'));
				e.type = 'checkbox', g.checkOn = '' !== e.value, g.optSelected = t.selected, (e = x.createElement('input')).value = 't', e.type = 'radio', g.radioValue = 't' === e.value;
			}();
			var ht, vt = C.expr.attrHandle;
			C.fn.extend({
				attr: function(e, t) {
					return z(this, C.attr, e, t, arguments.length > 1);
				}, removeAttr: function(e) {
					return this.each((function() {
						C.removeAttr(this, e);
					}));
				}
			}), C.extend({
				attr: function(e, t, n) {
					var r, o, i = e.nodeType;
					if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && 'set' in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ''), n) : o && 'get' in o && null !== (r = o.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r);
				}, attrHooks: {
					type: {
						set: function(e, t) {
							if (!g.radioValue && 'radio' === t && N(e, 'input')) {
								var n = e.value;
								return e.setAttribute('type', t), n && (e.value = n), t;
							}
						}
					}
				}, removeAttr: function(e, t) {
					var n, r = 0, o = t && t.match(M);
					if (o && 1 === e.nodeType) for (; n = o[r++];) e.removeAttribute(n);
				}
			}), ht = {
				set: function(e, t, n) {
					return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
				}
			}, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
				var n = vt[t] || C.find.attr;
				vt[t] = function(e, t, r) {
					var o, i, a = t.toLowerCase();
					return r || (i = vt[a], vt[a] = o, o = null != n(e, t, r) ? a : null, vt[a] = i), o;
				};
			}));
			var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;

			function mt(e) {
				return (e.match(M) || []).join(' ');
			}

			function xt(e) {
				return e.getAttribute && e.getAttribute('class') || '';
			}

			function bt(e) {
				return Array.isArray(e) ? e : 'string' == typeof e && e.match(M) || [];
			}

			C.fn.extend({
				prop: function(e, t) {
					return z(this, C.prop, e, t, arguments.length > 1);
				}, removeProp: function(e) {
					return this.each((function() {
						delete this[C.propFix[e] || e];
					}));
				}
			}), C.extend({
				prop: function(e, t, n) {
					var r, o, i = e.nodeType;
					if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && 'set' in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && 'get' in o && null !== (r = o.get(e, t)) ? r : e[t];
				}, propHooks: {
					tabIndex: {
						get: function(e) {
							var t = C.find.attr(e, 'tabindex');
							return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
						}
					}
				}, propFix: { for: 'htmlFor', class: 'className' }
			}), g.optSelected || (C.propHooks.selected = {
				get: function(e) {
					var t = e.parentNode;
					return t && t.parentNode && t.parentNode.selectedIndex, null;
				}, set: function(e) {
					var t = e.parentNode;
					t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
				}
			}), C.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], (function() {
				C.propFix[this.toLowerCase()] = this;
			})), C.fn.extend({
				addClass: function(e) {
					var t, n, r, o, i, a, s, u = 0;
					if (y(e)) return this.each((function(t) {
						C(this).addClass(e.call(this, t, xt(this)));
					}));
					if ((t = bt(e)).length) for (; n = this[u++];) if (o = xt(n), r = 1 === n.nodeType && ' ' + mt(o) + ' ') {
						for (a = 0; i = t[a++];) r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ');
						o !== (s = mt(r)) && n.setAttribute('class', s);
					}
					return this;
				}, removeClass: function(e) {
					var t, n, r, o, i, a, s, u = 0;
					if (y(e)) return this.each((function(t) {
						C(this).removeClass(e.call(this, t, xt(this)));
					}));
					if (!arguments.length) return this.attr('class', '');
					if ((t = bt(e)).length) for (; n = this[u++];) if (o = xt(n), r = 1 === n.nodeType && ' ' + mt(o) + ' ') {
						for (a = 0; i = t[a++];) for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(' ' + i + ' ', ' ');
						o !== (s = mt(r)) && n.setAttribute('class', s);
					}
					return this;
				}, toggleClass: function(e, t) {
					var n = typeof e, r = 'string' === n || Array.isArray(e);
					return 'boolean' == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each((function(n) {
						C(this).toggleClass(e.call(this, n, xt(this), t), t);
					})) : this.each((function() {
						var t, o, i, a;
						if (r) for (o = 0, i = C(this), a = bt(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && 'boolean' !== n || ((t = xt(this)) && J.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : J.get(this, '__className__') || ''));
					}));
				}, hasClass: function(e) {
					var t, n, r = 0;
					for (t = ' ' + e + ' '; n = this[r++];) if (1 === n.nodeType && (' ' + mt(xt(n)) + ' ').indexOf(t) > -1) return !0;
					return !1;
				}
			});
			var wt = /\r/g;
			C.fn.extend({
				val: function(e) {
					var t, n, r, o = this[0];
					return arguments.length ? (r = y(e), this.each((function(n) {
						var o;
						1 === this.nodeType && (null == (o = r ? e.call(this, n, C(this).val()) : e) ? o = '' : 'number' == typeof o ? o += '' : Array.isArray(o) && (o = C.map(o, (function(e) {
							return null == e ? '' : e + '';
						}))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && 'set' in t && void 0 !== t.set(this, o, 'value') || (this.value = o));
					}))) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && 'get' in t && void 0 !== (n = t.get(o, 'value')) ? n : 'string' == typeof (n = o.value) ? n.replace(wt, '') : null == n ? '' : n : void 0;
				}
			}), C.extend({
				valHooks: {
					option: {
						get: function(e) {
							var t = C.find.attr(e, 'value');
							return null != t ? t : mt(C.text(e));
						}
					}, select: {
						get: function(e) {
							var t, n, r, o = e.options, i = e.selectedIndex, a = 'select-one' === e.type, s = a ? null : [],
								u = a ? i + 1 : o.length;
							for (r = i < 0 ? u : a ? i : 0; r < u; r++) if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, 'optgroup'))) {
								if (t = C(n).val(), a) return t;
								s.push(t);
							}
							return s;
						}, set: function(e, t) {
							for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--;) ((r = o[a]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0);
							return n || (e.selectedIndex = -1), i;
						}
					}
				}
			}), C.each(['radio', 'checkbox'], (function() {
				C.valHooks[this] = {
					set: function(e, t) {
						if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1;
					}
				}, g.checkOn || (C.valHooks[this].get = function(e) {
					return null === e.getAttribute('value') ? 'on' : e.value;
				});
			})), g.focusin = 'onfocusin' in n;
			var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function(e) {
				e.stopPropagation();
			};
			C.extend(C.event, {
				trigger: function(e, t, r, o) {
					var i, a, s, u, c, l, f, p, h = [r || x], v = d.call(e, 'type') ? e.type : e,
						g = d.call(e, 'namespace') ? e.namespace.split('.') : [];
					if (a = p = s = r = r || x, 3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(v + C.event.triggered) && (v.indexOf('.') > -1 && (g = v.split('.'), v = g.shift(), g.sort()), c = v.indexOf(':') < 0 && 'on' + v, (e = e[C.expando] ? e : new C.Event(v, 'object' == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = g.join('.'), e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), f = C.event.special[v] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, t))) {
						if (!o && !f.noBubble && !m(r)) {
							for (u = f.delegateType || v, Tt.test(u + v) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
							s === (r.ownerDocument || x) && h.push(s.defaultView || s.parentWindow || n);
						}
						for (i = 0; (a = h[i++]) && !e.isPropagationStopped();) p = a, e.type = i > 1 ? u : f.bindType || v, (l = (J.get(a, 'events') || Object.create(null))[e.type] && J.get(a, 'handle')) && l.apply(a, t), (l = c && a[c]) && l.apply && Y(a) && (e.result = l.apply(a, t), !1 === e.result && e.preventDefault());
						return e.type = v, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !Y(r) || c && y(r[v]) && !m(r) && ((s = r[c]) && (r[c] = null), C.event.triggered = v, e.isPropagationStopped() && p.addEventListener(v, Ct), r[v](), e.isPropagationStopped() && p.removeEventListener(v, Ct), C.event.triggered = void 0, s && (r[c] = s)), e.result;
					}
				}, simulate: function(e, t, n) {
					var r = C.extend(new C.Event, n, { type: e, isSimulated: !0 });
					C.event.trigger(r, null, t);
				}
			}), C.fn.extend({
				trigger: function(e, t) {
					return this.each((function() {
						C.event.trigger(e, t, this);
					}));
				}, triggerHandler: function(e, t) {
					var n = this[0];
					if (n) return C.event.trigger(e, t, n, !0);
				}
			}), g.focusin || C.each({ focus: 'focusin', blur: 'focusout' }, (function(e, t) {
				var n = function(e) {
					C.event.simulate(t, e.target, C.event.fix(e));
				};
				C.event.special[t] = {
					setup: function() {
						var r = this.ownerDocument || this.document || this, o = J.access(r, t);
						o || r.addEventListener(e, n, !0), J.access(r, t, (o || 0) + 1);
					}, teardown: function() {
						var r = this.ownerDocument || this.document || this, o = J.access(r, t) - 1;
						o ? J.access(r, t, o) : (r.removeEventListener(e, n, !0), J.remove(r, t));
					}
				};
			}));
			var Et = n.location, St = { guid: Date.now() }, kt = /\?/;
			C.parseXML = function(e) {
				var t;
				if (!e || 'string' != typeof e) return null;
				try {
					t = (new n.DOMParser).parseFromString(e, 'text/xml');
				} catch (e) {
					t = void 0;
				}
				return t && !t.getElementsByTagName('parsererror').length || C.error('Invalid XML: ' + e), t;
			};
			var At = /\[\]$/, jt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i,
				Dt = /^(?:input|select|textarea|keygen)/i;

			function Lt(e, t, n, r) {
				var o;
				if (Array.isArray(t)) C.each(t, (function(t, o) {
					n || At.test(e) ? r(e, o) : Lt(e + '[' + ('object' == typeof o && null != o ? t : '') + ']', o, n, r);
				})); else if (n || 'object' !== T(t)) r(e, t); else for (o in t) Lt(e + '[' + o + ']', t[o], n, r);
			}

			C.param = function(e, t) {
				var n, r = [], o = function(e, t) {
					var n = y(t) ? t() : t;
					r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
				};
				if (null == e) return '';
				if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() {
					o(this.name, this.value);
				})); else for (n in e) Lt(n, e[n], t, o);
				return r.join('&');
			}, C.fn.extend({
				serialize: function() {
					return C.param(this.serializeArray());
				}, serializeArray: function() {
					return this.map((function() {
						var e = C.prop(this, 'elements');
						return e ? C.makeArray(e) : this;
					})).filter((function() {
						var e = this.type;
						return this.name && !C(this).is(':disabled') && Dt.test(this.nodeName) && !Nt.test(e) && (this.checked || !ve.test(e));
					})).map((function(e, t) {
						var n = C(this).val();
						return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
							return { name: t.name, value: e.replace(jt, '\r\n') };
						})) : { name: t.name, value: n.replace(jt, '\r\n') };
					})).get();
				}
			});
			var qt = /%20/g, Ot = /#.*$/, Ht = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Rt = /^(?:GET|HEAD)$/,
				Mt = /^\/\//, It = {}, _t = {}, Ft = '*/'.concat('*'), Wt = x.createElement('a');

			function $t(e) {
				return function(t, n) {
					'string' != typeof t && (n = t, t = '*');
					var r, o = 0, i = t.toLowerCase().match(M) || [];
					if (y(n)) for (; r = i[o++];) '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
				};
			}

			function Bt(e, t, n, r) {
				var o = {}, i = e === _t;

				function a(s) {
					var u;
					return o[s] = !0, C.each(e[s] || [], (function(e, s) {
						var c = s(t, n, r);
						return 'string' != typeof c || i || o[c] ? i ? !(u = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1);
					})), u;
				}

				return a(t.dataTypes[0]) || !o['*'] && a('*');
			}

			function zt(e, t) {
				var n, r, o = C.ajaxSettings.flatOptions || {};
				for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
				return r && C.extend(!0, e, r), e;
			}

			Wt.href = Et.href, C.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: Et.href,
					type: 'GET',
					isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
					global: !0,
					processData: !0,
					async: !0,
					contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
					accepts: {
						'*': Ft,
						text: 'text/plain',
						html: 'text/html',
						xml: 'application/xml, text/xml',
						json: 'application/json, text/javascript'
					},
					contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
					responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
					converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': C.parseXML },
					flatOptions: { url: !0, context: !0 }
				},
				ajaxSetup: function(e, t) {
					return t ? zt(zt(e, C.ajaxSettings), t) : zt(C.ajaxSettings, e);
				},
				ajaxPrefilter: $t(It),
				ajaxTransport: $t(_t),
				ajax: function(e, t) {
					'object' == typeof e && (t = e, e = void 0), t = t || {};
					var r, o, i, a, s, u, c, l, f, p, d = C.ajaxSetup({}, t), h = d.context || d,
						v = d.context && (h.nodeType || h.jquery) ? C(h) : C.event, g = C.Deferred(),
						y = C.Callbacks('once memory'), m = d.statusCode || {}, b = {}, w = {}, T = 'canceled', E = {
							readyState: 0, getResponseHeader: function(e) {
								var t;
								if (c) {
									if (!a) for (a = {}; t = Pt.exec(i);) a[t[1].toLowerCase() + ' '] = (a[t[1].toLowerCase() + ' '] || []).concat(t[2]);
									t = a[e.toLowerCase() + ' '];
								}
								return null == t ? null : t.join(', ');
							}, getAllResponseHeaders: function() {
								return c ? i : null;
							}, setRequestHeader: function(e, t) {
								return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this;
							}, overrideMimeType: function(e) {
								return null == c && (d.mimeType = e), this;
							}, statusCode: function(e) {
								var t;
								if (e) if (c) E.always(e[E.status]); else for (t in e) m[t] = [m[t], e[t]];
								return this;
							}, abort: function(e) {
								var t = e || T;
								return r && r.abort(t), S(0, t), this;
							}
						};
					if (g.promise(E), d.url = ((e || d.url || Et.href) + '').replace(Mt, Et.protocol + '//'), d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || '*').toLowerCase().match(M) || [''], null == d.crossDomain) {
						u = x.createElement('a');
						try {
							u.href = d.url, u.href = u.href, d.crossDomain = Wt.protocol + '//' + Wt.host != u.protocol + '//' + u.host;
						} catch (e) {
							d.crossDomain = !0;
						}
					}
					if (d.data && d.processData && 'string' != typeof d.data && (d.data = C.param(d.data, d.traditional)), Bt(It, d, t, E), c) return E;
					for (f in (l = C.event && d.global) && 0 == C.active++ && C.event.trigger('ajaxStart'), d.type = d.type.toUpperCase(), d.hasContent = !Rt.test(d.type), o = d.url.replace(Ot, ''), d.hasContent ? d.data && d.processData && 0 === (d.contentType || '').indexOf('application/x-www-form-urlencoded') && (d.data = d.data.replace(qt, '+')) : (p = d.url.slice(o.length), d.data && (d.processData || 'string' == typeof d.data) && (o += (kt.test(o) ? '&' : '?') + d.data, delete d.data), !1 === d.cache && (o = o.replace(Ht, '$1'), p = (kt.test(o) ? '&' : '?') + '_=' + St.guid++ + p), d.url = o + p), d.ifModified && (C.lastModified[o] && E.setRequestHeader('If-Modified-Since', C.lastModified[o]), C.etag[o] && E.setRequestHeader('If-None-Match', C.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && E.setRequestHeader('Content-Type', d.contentType), E.setRequestHeader('Accept', d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ('*' !== d.dataTypes[0] ? ', ' + Ft + '; q=0.01' : '') : d.accepts['*']), d.headers) E.setRequestHeader(f, d.headers[f]);
					if (d.beforeSend && (!1 === d.beforeSend.call(h, E, d) || c)) return E.abort();
					if (T = 'abort', y.add(d.complete), E.done(d.success), E.fail(d.error), r = Bt(_t, d, t, E)) {
						if (E.readyState = 1, l && v.trigger('ajaxSend', [E, d]), c) return E;
						d.async && d.timeout > 0 && (s = n.setTimeout((function() {
							E.abort('timeout');
						}), d.timeout));
						try {
							c = !1, r.send(b, S);
						} catch (e) {
							if (c) throw e;
							S(-1, e);
						}
					} else S(-1, 'No Transport');

					function S(e, t, a, u) {
						var f, p, x, b, w, T = t;
						c || (c = !0, s && n.clearTimeout(s), r = void 0, i = u || '', E.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, a && (b = function(e, t, n) {
							for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
							if (r) for (o in s) if (s[o] && s[o].test(r)) {
								u.unshift(o);
								break;
							}
							if (u[0] in n) i = u[0]; else {
								for (o in n) {
									if (!u[0] || e.converters[o + ' ' + u[0]]) {
										i = o;
										break;
									}
									a || (a = o);
								}
								i = i || a;
							}
							if (i) return i !== u[0] && u.unshift(i), n[i];
						}(d, E, a)), !f && C.inArray('script', d.dataTypes) > -1 && (d.converters['text script'] = function() {
						}), b = function(e, t, n, r) {
							var o, i, a, s, u, c = {}, l = e.dataTypes.slice();
							if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
							for (i = l.shift(); i;) if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = l.shift()) if ('*' === i) i = u; else if ('*' !== u && u !== i) {
								if (!(a = c[u + ' ' + i] || c['* ' + i])) for (o in c) if ((s = o.split(' '))[1] === i && (a = c[u + ' ' + s[0]] || c['* ' + s[0]])) {
									!0 === a ? a = c[o] : !0 !== c[o] && (i = s[0], l.unshift(s[1]));
									break;
								}
								if (!0 !== a) if (a && e.throws) t = a(t); else try {
									t = a(t);
								} catch (e) {
									return { state: 'parsererror', error: a ? e : 'No conversion from ' + u + ' to ' + i };
								}
							}
							return { state: 'success', data: t };
						}(d, b, E, f), f ? (d.ifModified && ((w = E.getResponseHeader('Last-Modified')) && (C.lastModified[o] = w), (w = E.getResponseHeader('etag')) && (C.etag[o] = w)), 204 === e || 'HEAD' === d.type ? T = 'nocontent' : 304 === e ? T = 'notmodified' : (T = b.state, p = b.data, f = !(x = b.error))) : (x = T, !e && T || (T = 'error', e < 0 && (e = 0))), E.status = e, E.statusText = (t || T) + '', f ? g.resolveWith(h, [p, T, E]) : g.rejectWith(h, [E, T, x]), E.statusCode(m), m = void 0, l && v.trigger(f ? 'ajaxSuccess' : 'ajaxError', [E, d, f ? p : x]), y.fireWith(h, [E, T]), l && (v.trigger('ajaxComplete', [E, d]), --C.active || C.event.trigger('ajaxStop')));
					}

					return E;
				},
				getJSON: function(e, t, n) {
					return C.get(e, t, n, 'json');
				},
				getScript: function(e, t) {
					return C.get(e, void 0, t, 'script');
				}
			}), C.each(['get', 'post'], (function(e, t) {
				C[t] = function(e, n, r, o) {
					return y(n) && (o = o || r, r = n, n = void 0), C.ajax(C.extend({
						url: e,
						type: t,
						dataType: o,
						data: n,
						success: r
					}, C.isPlainObject(e) && e));
				};
			})), C.ajaxPrefilter((function(e) {
				var t;
				for (t in e.headers) 'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '');
			})), C._evalUrl = function(e, t, n) {
				return C.ajax({
					url: e,
					type: 'GET',
					dataType: 'script',
					cache: !0,
					async: !1,
					global: !1,
					converters: {
						'text script': function() {
						}
					},
					dataFilter: function(e) {
						C.globalEval(e, t, n);
					}
				});
			}, C.fn.extend({
				wrapAll: function(e) {
					var t;
					return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
						for (var e = this; e.firstElementChild;) e = e.firstElementChild;
						return e;
					})).append(this)), this;
				}, wrapInner: function(e) {
					return y(e) ? this.each((function(t) {
						C(this).wrapInner(e.call(this, t));
					})) : this.each((function() {
						var t = C(this), n = t.contents();
						n.length ? n.wrapAll(e) : t.append(e);
					}));
				}, wrap: function(e) {
					var t = y(e);
					return this.each((function(n) {
						C(this).wrapAll(t ? e.call(this, n) : e);
					}));
				}, unwrap: function(e) {
					return this.parent(e).not('body').each((function() {
						C(this).replaceWith(this.childNodes);
					})), this;
				}
			}), C.expr.pseudos.hidden = function(e) {
				return !C.expr.pseudos.visible(e);
			}, C.expr.pseudos.visible = function(e) {
				return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
			}, C.ajaxSettings.xhr = function() {
				try {
					return new n.XMLHttpRequest;
				} catch (e) {
				}
			};
			var Ut = { 0: 200, 1223: 204 }, Xt = C.ajaxSettings.xhr();
			g.cors = !!Xt && 'withCredentials' in Xt, g.ajax = Xt = !!Xt, C.ajaxTransport((function(e) {
				var t, r;
				if (g.cors || Xt && !e.crossDomain) return {
					send: function(o, i) {
						var a, s = e.xhr();
						if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
						for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o['X-Requested-With'] || (o['X-Requested-With'] = 'XMLHttpRequest'), o) s.setRequestHeader(a, o[a]);
						t = function(e) {
							return function() {
								t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 'abort' === e ? s.abort() : 'error' === e ? 'number' != typeof s.status ? i(0, 'error') : i(s.status, s.statusText) : i(Ut[s.status] || s.status, s.statusText, 'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
							};
						}, s.onload = t(), r = s.onerror = s.ontimeout = t('error'), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
							4 === s.readyState && n.setTimeout((function() {
								t && r();
							}));
						}, t = t('abort');
						try {
							s.send(e.hasContent && e.data || null);
						} catch (e) {
							if (t) throw e;
						}
					}, abort: function() {
						t && t();
					}
				};
			})), C.ajaxPrefilter((function(e) {
				e.crossDomain && (e.contents.script = !1);
			})), C.ajaxSetup({
				accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
				contents: { script: /\b(?:java|ecma)script\b/ },
				converters: {
					'text script': function(e) {
						return C.globalEval(e), e;
					}
				}
			}), C.ajaxPrefilter('script', (function(e) {
				void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
			})), C.ajaxTransport('script', (function(e) {
				var t, n;
				if (e.crossDomain || e.scriptAttrs) return {
					send: function(r, o) {
						t = C('<script>').attr(e.scriptAttrs || {}).prop({
							charset: e.scriptCharset,
							src: e.url
						}).on('load error', n = function(e) {
							t.remove(), n = null, e && o('error' === e.type ? 404 : 200, e.type);
						}), x.head.appendChild(t[0]);
					}, abort: function() {
						n && n();
					}
				};
			}));
			var Gt, Vt = [], Yt = /(=)\?(?=&|$)|\?\?/;
			C.ajaxSetup({
				jsonp: 'callback', jsonpCallback: function() {
					var e = Vt.pop() || C.expando + '_' + St.guid++;
					return this[e] = !0, e;
				}
			}), C.ajaxPrefilter('json jsonp', (function(e, t, r) {
				var o, i, a,
					s = !1 !== e.jsonp && (Yt.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && Yt.test(e.data) && 'data');
				if (s || 'jsonp' === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Yt, '$1' + o) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? '&' : '?') + e.jsonp + '=' + o), e.converters['script json'] = function() {
					return a || C.error(o + ' was not called'), a[0];
				}, e.dataTypes[0] = 'json', i = n[o], n[o] = function() {
					a = arguments;
				}, r.always((function() {
					void 0 === i ? C(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Vt.push(o)), a && y(i) && i(a[0]), a = i = void 0;
				})), 'script';
			})), g.createHTMLDocument = ((Gt = x.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>', 2 === Gt.childNodes.length), C.parseHTML = function(e, t, n) {
				return 'string' != typeof e ? [] : ('boolean' == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = x.implementation.createHTMLDocument('')).createElement('base')).href = x.location.href, t.head.appendChild(r)) : t = x), i = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, i), i && i.length && C(i).remove(), C.merge([], o.childNodes)));
				var r, o, i;
			}, C.fn.load = function(e, t, n) {
				var r, o, i, a = this, s = e.indexOf(' ');
				return s > -1 && (r = mt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && 'object' == typeof t && (o = 'POST'), a.length > 0 && C.ajax({
					url: e,
					type: o || 'GET',
					dataType: 'html',
					data: t
				}).done((function(e) {
					i = arguments, a.html(r ? C('<div>').append(C.parseHTML(e)).find(r) : e);
				})).always(n && function(e, t) {
					a.each((function() {
						n.apply(this, i || [e.responseText, t, e]);
					}));
				}), this;
			}, C.expr.pseudos.animated = function(e) {
				return C.grep(C.timers, (function(t) {
					return e === t.elem;
				})).length;
			}, C.offset = {
				setOffset: function(e, t, n) {
					var r, o, i, a, s, u, c = C.css(e, 'position'), l = C(e), f = {};
					'static' === c && (e.style.position = 'relative'), s = l.offset(), i = C.css(e, 'top'), u = C.css(e, 'left'), ('absolute' === c || 'fixed' === c) && (i + u).indexOf('auto') > -1 ? (a = (r = l.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), y(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), 'using' in t ? t.using.call(e, f) : ('number' == typeof f.top && (f.top += 'px'), 'number' == typeof f.left && (f.left += 'px'), l.css(f));
				}
			}, C.fn.extend({
				offset: function(e) {
					if (arguments.length) return void 0 === e ? this : this.each((function(t) {
						C.offset.setOffset(this, e, t);
					}));
					var t, n, r = this[0];
					return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
						top: t.top + n.pageYOffset,
						left: t.left + n.pageXOffset
					}) : { top: 0, left: 0 } : void 0;
				}, position: function() {
					if (this[0]) {
						var e, t, n, r = this[0], o = { top: 0, left: 0 };
						if ('fixed' === C.css(r, 'position')) t = r.getBoundingClientRect(); else {
							for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
							e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, 'borderTopWidth', !0), o.left += C.css(e, 'borderLeftWidth', !0));
						}
						return {
							top: t.top - o.top - C.css(r, 'marginTop', !0),
							left: t.left - o.left - C.css(r, 'marginLeft', !0)
						};
					}
				}, offsetParent: function() {
					return this.map((function() {
						for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
						return e || ie;
					}));
				}
			}), C.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, (function(e, t) {
				var n = 'pageYOffset' === t;
				C.fn[e] = function(r) {
					return z(this, (function(e, r, o) {
						var i;
						if (m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
						i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o;
					}), e, r, arguments.length);
				};
			})), C.each(['top', 'left'], (function(e, t) {
				C.cssHooks[t] = Xe(g.pixelPosition, (function(e, n) {
					if (n) return n = Ue(e, t), We.test(n) ? C(e).position()[t] + 'px' : n;
				}));
			})), C.each({ Height: 'height', Width: 'width' }, (function(e, t) {
				C.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, (function(n, r) {
					C.fn[r] = function(o, i) {
						var a = arguments.length && (n || 'boolean' != typeof o),
							s = n || (!0 === o || !0 === i ? 'margin' : 'border');
						return z(this, (function(t, n, o) {
							var i;
							return m(t) ? 0 === r.indexOf('outer') ? t['inner' + e] : t.document.documentElement['client' + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body['scroll' + e], i['scroll' + e], t.body['offset' + e], i['offset' + e], i['client' + e])) : void 0 === o ? C.css(t, n, s) : C.style(t, n, o, s);
						}), t, a ? o : void 0, a);
					};
				}));
			})), C.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], (function(e, t) {
				C.fn[t] = function(e) {
					return this.on(t, e);
				};
			})), C.fn.extend({
				bind: function(e, t, n) {
					return this.on(e, null, t, n);
				}, unbind: function(e, t) {
					return this.off(e, null, t);
				}, delegate: function(e, t, n, r) {
					return this.on(t, e, n, r);
				}, undelegate: function(e, t, n) {
					return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
				}, hover: function(e, t) {
					return this.mouseenter(e).mouseleave(t || e);
				}
			}), C.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), (function(e, t) {
				C.fn[t] = function(e, n) {
					return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
				};
			}));
			var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			C.proxy = function(e, t) {
				var n, r, o;
				if ('string' == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (o = function() {
					return e.apply(t || this, r.concat(s.call(arguments)));
				}).guid = e.guid = e.guid || C.guid++, o;
			}, C.holdReady = function(e) {
				e ? C.readyWait++ : C.ready(!0);
			}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = N, C.isFunction = y, C.isWindow = m, C.camelCase = V, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
				var t = C.type(e);
				return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
			}, C.trim = function(e) {
				return null == e ? '' : (e + '').replace(Qt, '');
			}, void 0 === (r = function() {
				return C;
			}.apply(t, [])) || (e.exports = r);
			var Jt = n.jQuery, Kt = n.$;
			return C.noConflict = function(e) {
				return n.$ === C && (n.$ = Kt), e && n.jQuery === C && (n.jQuery = Jt), C;
			}, void 0 === o && (n.jQuery = n.$ = C), C;
		}));
	}, ls82: function(e, t, n) {
		var r = function(e) {
			'use strict';
			var t = Object.prototype, n = t.hasOwnProperty, r = 'function' == typeof Symbol ? Symbol : {},
				o = r.iterator || '@@iterator', i = r.asyncIterator || '@@asyncIterator', a = r.toStringTag || '@@toStringTag';

			function s(e, t, n, r) {
				var o = t && t.prototype instanceof l ? t : l, i = Object.create(o.prototype), a = new T(r || []);
				return i._invoke = function(e, t, n) {
					var r = 'suspendedStart';
					return function(o, i) {
						if ('executing' === r) throw new Error('Generator is already running');
						if ('completed' === r) {
							if ('throw' === o) throw i;
							return E();
						}
						for (n.method = o, n.arg = i; ;) {
							var a = n.delegate;
							if (a) {
								var s = x(a, n);
								if (s) {
									if (s === c) continue;
									return s;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg; else if ('throw' === n.method) {
								if ('suspendedStart' === r) throw r = 'completed', n.arg;
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							r = 'executing';
							var l = u(e, t, n);
							if ('normal' === l.type) {
								if (r = n.done ? 'completed' : 'suspendedYield', l.arg === c) continue;
								return { value: l.arg, done: n.done };
							}
							'throw' === l.type && (r = 'completed', n.method = 'throw', n.arg = l.arg);
						}
					};
				}(e, n, a), i;
			}

			function u(e, t, n) {
				try {
					return { type: 'normal', arg: e.call(t, n) };
				} catch (e) {
					return { type: 'throw', arg: e };
				}
			}

			e.wrap = s;
			var c = {};

			function l() {
			}

			function f() {
			}

			function p() {
			}

			var d = {};
			d[o] = function() {
				return this;
			};
			var h = Object.getPrototypeOf, v = h && h(h(C([])));
			v && v !== t && n.call(v, o) && (d = v);
			var g = p.prototype = l.prototype = Object.create(d);

			function y(e) {
				['next', 'throw', 'return'].forEach((function(t) {
					e[t] = function(e) {
						return this._invoke(t, e);
					};
				}));
			}

			function m(e, t) {
				var r;
				this._invoke = function(o, i) {
					function a() {
						return new t((function(r, a) {
							!function r(o, i, a, s) {
								var c = u(e[o], e, i);
								if ('throw' !== c.type) {
									var l = c.arg, f = l.value;
									return f && 'object' == typeof f && n.call(f, '__await') ? t.resolve(f.__await).then((function(e) {
										r('next', e, a, s);
									}), (function(e) {
										r('throw', e, a, s);
									})) : t.resolve(f).then((function(e) {
										l.value = e, a(l);
									}), (function(e) {
										return r('throw', e, a, s);
									}));
								}
								s(c.arg);
							}(o, i, r, a);
						}));
					}

					return r = r ? r.then(a, a) : a();
				};
			}

			function x(e, t) {
				var n = e.iterator[t.method];
				if (void 0 === n) {
					if (t.delegate = null, 'throw' === t.method) {
						if (e.iterator.return && (t.method = 'return', t.arg = void 0, x(e, t), 'throw' === t.method)) return c;
						t.method = 'throw', t.arg = new TypeError('The iterator does not provide a \'throw\' method');
					}
					return c;
				}
				var r = u(n, e.iterator, t.arg);
				if ('throw' === r.type) return t.method = 'throw', t.arg = r.arg, t.delegate = null, c;
				var o = r.arg;
				return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, 'return' !== t.method && (t.method = 'next', t.arg = void 0), t.delegate = null, c) : o : (t.method = 'throw', t.arg = new TypeError('iterator result is not an object'), t.delegate = null, c);
			}

			function b(e) {
				var t = { tryLoc: e[0] };
				1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
			}

			function w(e) {
				var t = e.completion || {};
				t.type = 'normal', delete t.arg, e.completion = t;
			}

			function T(e) {
				this.tryEntries = [{ tryLoc: 'root' }], e.forEach(b, this), this.reset(!0);
			}

			function C(e) {
				if (e) {
					var t = e[o];
					if (t) return t.call(e);
					if ('function' == typeof e.next) return e;
					if (!isNaN(e.length)) {
						var r = -1, i = function t() {
							for (; ++r < e.length;) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
							return t.value = void 0, t.done = !0, t;
						};
						return i.next = i;
					}
				}
				return { next: E };
			}

			function E() {
				return { value: void 0, done: !0 };
			}

			return f.prototype = g.constructor = p, p.constructor = f, p[a] = f.displayName = 'GeneratorFunction', e.isGeneratorFunction = function(e) {
				var t = 'function' == typeof e && e.constructor;
				return !!t && (t === f || 'GeneratorFunction' === (t.displayName || t.name));
			}, e.mark = function(e) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, a in e || (e[a] = 'GeneratorFunction')), e.prototype = Object.create(g), e;
			}, e.awrap = function(e) {
				return { __await: e };
			}, y(m.prototype), m.prototype[i] = function() {
				return this;
			}, e.AsyncIterator = m, e.async = function(t, n, r, o, i) {
				void 0 === i && (i = Promise);
				var a = new m(s(t, n, r, o), i);
				return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
					return e.done ? e.value : a.next();
				}));
			}, y(g), g[a] = 'Generator', g[o] = function() {
				return this;
			}, g.toString = function() {
				return '[object Generator]';
			}, e.keys = function(e) {
				var t = [];
				for (var n in e) t.push(n);
				return t.reverse(), function n() {
					for (; t.length;) {
						var r = t.pop();
						if (r in e) return n.value = r, n.done = !1, n;
					}
					return n.done = !0, n;
				};
			}, e.values = C, T.prototype = {
				constructor: T, reset: function(e) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = 'next', this.arg = void 0, this.tryEntries.forEach(w), !e) for (var t in this) 't' === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
				}, stop: function() {
					this.done = !0;
					var e = this.tryEntries[0].completion;
					if ('throw' === e.type) throw e.arg;
					return this.rval;
				}, dispatchException: function(e) {
					if (this.done) throw e;
					var t = this;

					function r(n, r) {
						return a.type = 'throw', a.arg = e, t.next = n, r && (t.method = 'next', t.arg = void 0), !!r;
					}

					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o], a = i.completion;
						if ('root' === i.tryLoc) return r('end');
						if (i.tryLoc <= this.prev) {
							var s = n.call(i, 'catchLoc'), u = n.call(i, 'finallyLoc');
							if (s && u) {
								if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return r(i.finallyLoc);
							} else if (s) {
								if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
							} else {
								if (!u) throw new Error('try statement without catch or finally');
								if (this.prev < i.finallyLoc) return r(i.finallyLoc);
							}
						}
					}
				}, abrupt: function(e, t) {
					for (var r = this.tryEntries.length - 1; r >= 0; --r) {
						var o = this.tryEntries[r];
						if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
							var i = o;
							break;
						}
					}
					i && ('break' === e || 'continue' === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = e, a.arg = t, i ? (this.method = 'next', this.next = i.finallyLoc, c) : this.complete(a);
				}, complete: function(e, t) {
					if ('throw' === e.type) throw e.arg;
					return 'break' === e.type || 'continue' === e.type ? this.next = e.arg : 'return' === e.type ? (this.rval = this.arg = e.arg, this.method = 'return', this.next = 'end') : 'normal' === e.type && t && (this.next = t), c;
				}, finish: function(e) {
					for (var t = this.tryEntries.length - 1; t >= 0; --t) {
						var n = this.tryEntries[t];
						if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), w(n), c;
					}
				}, catch: function(e) {
					for (var t = this.tryEntries.length - 1; t >= 0; --t) {
						var n = this.tryEntries[t];
						if (n.tryLoc === e) {
							var r = n.completion;
							if ('throw' === r.type) {
								var o = r.arg;
								w(n);
							}
							return o;
						}
					}
					throw new Error('illegal catch attempt');
				}, delegateYield: function(e, t, n) {
					return this.delegate = {
						iterator: C(e),
						resultName: t,
						nextLoc: n
					}, 'next' === this.method && (this.arg = void 0), c;
				}
			}, e;
		}(e.exports);
		try {
			regeneratorRuntime = r;
		} catch (e) {
			Function('r', 'regeneratorRuntime = r')(r);
		}
	}, o0o1: function(e, t, n) {
		e.exports = n('ls82');
	}
});