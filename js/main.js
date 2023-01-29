/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/appControl.js":
/*!**************************!*\
  !*** ./js/appControl.js ***!
  \**************************/
/***/ (() => {

const appGrid = document.querySelectorAll('.grid__contetn .grid');
const appSpan = document.querySelectorAll('.grid__contetn .title');
appGrid.forEach(item => {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('app-control');
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains('active')) {
      appGrid.forEach(function (item) {
        item.classList.remove('active');
      });
      appSpan.forEach(function (item) {
        item.classList.remove('active');
      });
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
});

/***/ }),

/***/ "./js/btnSegwayBuy.js":
/*!****************************!*\
  !*** ./js/btnSegwayBuy.js ***!
  \****************************/
/***/ (() => {

const btn = document.querySelectorAll('.section:nth-child(1) .title__segway .container .block__left .block__warranty .block__btn .btn:nth-child(2)');
const btnDelete = document.querySelector('.modal__segway .modal .back');
const modalSegwayOverlay = document.querySelector('.modal__segway');
const modalSegway = (img, title) => {
  return `
        <img id='imgDelete' src="${img}" alt="">
        <h2 id='hTwoDelete'>${title}</h2>
    `;
};
btn.forEach(el => {
  el.addEventListener('click', () => {
    let img = document.querySelector('.block__right.active .img__delete ').getAttribute('src');
    let title = document.querySelector('.block__left.active .h.product__card-delete').textContent;
    modalSegwayOverlay.querySelector('.modal__segway-overlay .modal').insertAdjacentHTML('afterbegin', modalSegway(img, title));
  });
});
btnDelete.addEventListener('click', () => {
  const imgDelete = document.getElementById('imgDelete');
  const titleDelete = document.getElementById('hTwoDelete');
  titleDelete.parentNode.removeChild(titleDelete);
  imgDelete.parentNode.removeChild(imgDelete);
});

/***/ }),

/***/ "./js/burger.js":
/*!**********************!*\
  !*** ./js/burger.js ***!
  \**********************/
/***/ (() => {

const burger = document.querySelector('.header .top__header .container .burger');
const nav = document.querySelector('.header .top__header .container .list');
const body = document.body;
const listItem = document.querySelectorAll('.header .top__header .container .list .list__item');
burger.addEventListener('click', () => {
  body.classList.toggle('stop__scroll');
  burger.classList.toggle('in--visible');
  nav.classList.toggle('in--visible');
});
listItem.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop__scroll');
    burger.classList.remove('in--visible');
    nav.classList.remove('in--visible');
  });
});

/***/ }),

/***/ "./js/buttonSegway.js":
/*!****************************!*\
  !*** ./js/buttonSegway.js ***!
  \****************************/
/***/ (() => {

function initButton() {
  const buttonSegway = document.querySelectorAll('.header .bottom__header .container .slider .slider__wrapper .segway');
  const segway = document.querySelectorAll('.section:nth-child(1) .title__segway .container .block__left');
  const segwayImg = document.querySelectorAll('.section:nth-child(1) .title__segway .container .block__right');
  if (window.matchMedia("(max-width: 2560px)").matches) {
    buttonSegway.forEach(item => {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let tabImgId = currentBtn.getAttribute('data-img');
        let currentTab = document.querySelector(tabId);
        let currentImgTab = document.querySelector(tabImgId);
        if (!currentBtn.classList.contains('active')) {
          buttonSegway.forEach(function (item) {
            item.classList.remove('active');
          });
          segway.forEach(function (item) {
            item.classList.remove('active');
          });
          segwayImg.forEach(function (item) {
            item.classList.remove('active');
          });
          currentImgTab.classList.add('active');
          currentBtn.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    });
    document.querySelector('.header .bottom__header .container .slider .slider__wrapper .segway').click();
    document.querySelector('.section:nth-child(1) .title__segway .container .block__right').click();
  }
}
initButton();
window.addEventListener('resize', initButton);

/***/ }),

/***/ "./js/buyModalSegway.js":
/*!******************************!*\
  !*** ./js/buyModalSegway.js ***!
  \******************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  const btnBuy = document.querySelectorAll('.section:nth-child(1) .title__segway .container .block__left .block__warranty .block__btn .btn:nth-child(2)');
  const btnButPhone = document.querySelectorAll('.title__segway-phone .block__warranty .block__btn-2 .btn:nth-child(2)');
  const btnButContainer = document.querySelectorAll('.section:nth-child(16) .container .container__segway .slider .slider__line .slider__segway .btn');
  const modalVisible = document.querySelector('.section:nth-child(1) .modal__segway-overlay');
  const modal = document.querySelector('.section:nth-child(1) .modal__segway-overlay .modal');
  const btn = document.querySelector('.modal__segway .modal .back');
  const body = document.body;
  const formEmail = document.querySelectorAll('.modal__segway .modal__segway-overlay .modal .form .form__item .input');
  let formReq = this.documentElement.querySelectorAll('.req');
  let error = 0;
  //Отвечает за  модальное окно за самоката
  btnBuy.forEach(el => {
    el.addEventListener('click', function () {
      modalVisible.classList.add('modal--visible-overlay');
      modal.classList.add('modal--visible-window');
      btn.classList.add('active');
      body.classList.add('stop__scroll');
    });
  });
  btnButPhone.forEach(el => {
    el.addEventListener('click', function () {
      modalVisible.classList.add('modal--visible-overlay');
      modal.classList.add('modal--visible-window');
      btn.classList.add('active');
      body.classList.add('stop__scroll');
    });
  });
  btnButContainer.forEach(el => {
    el.addEventListener('click', function () {
      modalVisible.classList.add('modal--visible-overlay');
      modal.classList.add('modal--visible-window');
      btn.classList.add('active');
      body.classList.add('stop__scroll');
    });
  });
  btn.addEventListener('click', function () {
    modalVisible.classList.remove('modal--visible-overlay');
    modal.classList.remove('modal--visible-window');
    btn.classList.remove('active');
    body.classList.remove('stop__scroll');
  });

  // form в модальное окно
  formEmail.forEach(item => {
    item.addEventListener('click', function () {
      item.classList.add('active');
    });
  });
  const form = document.forms["form"]; // считываем форму
  const formArr = Array.from(form); // формируем массив из элементов формы
  const validFormArr = []; // в этом массиве хранятся поля, которые нужно проверить
  const button = form.elements["button"]; // считываем кнопку

  formArr.forEach(el => {
    if (el.hasAttribute("data-reg")) {
      el.setAttribute("is-valid", "0");
      validFormArr.push(el);
    }
  });
  form.addEventListener("input", inputHandler);
  function inputHandler({
    target
  }) {
    if (target.hasAttribute("data-reg")) {
      inputCheck(target);
    }
  }
  function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
      el.setAttribute("is-valid", "1");
      el.style.borderBottom = "2px solid #009EFF";
    } else {
      el.setAttribute("is-valid", "0");
      el.style.borderBottom = "2px solid rgb(255, 0, 0)";
    }
  }
  function buttonHandler(e) {
    const allValid = [];
    validFormArr.forEach(el => {
      allValid.push(el.getAttribute("is-valid"));
    });
    const isAllValid = allValid.reduce((acc, current) => {
      return acc && current;
    });
    if (!Boolean(Number(isAllValid))) {
      e.preventDefault();
    }
  }
});

/***/ }),

/***/ "./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/***/ (() => {

const productsBtn = document.querySelectorAll('.btn__cart.product__card-delete');
const cartProductsList = document.querySelector('.content__cart .content__cart-list');
const cart = document.querySelector('.img__cart');
const cartQuantity = cart.querySelector('.header .top__header .container .menu__header .img__cart .cart__quantity');
const fullPrice = document.querySelector('.header .top__header .container .content__cart .cart__content-bottom .cart__content-fullprice .fullprice');
let price = 0;
const randomId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
const priceWithoutSpaces = str => {
  return str.replace(/\s/g, '');
};
const normalPrice = str => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
const plusFullPrice = currentPrice => {
  return price += currentPrice;
};
const minusFullPrice = currentPrice => {
  return price -= currentPrice;
};
const printQuantity = () => {
  let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
  cartQuantity.textContent = productsListLength;
  productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
};
const printFullPrice = () => {
  fullPrice.textContent = `${normalPrice(price)}.99 $`;
};
const generateCartProduct = (img, title, price, id) => {
  return `
    <li class="content__cart-item">
            <article class="cart__content-product cart__product" data-id="${id}">
				<img src="${img}" class="cart__product-img">
				<div class="cart__product-text">
				<h3>${title}</h3>
				<span class="cart-product__price">${normalPrice(price)}.99 $</span>
				</div>
				<button class="cart__content-delete" aria-label="Удалить товар"> 
				</button>
            </article>
        </li>       
	`;
};
const deleteProducts = productParent => {
  let id = productParent.querySelector('.header .top__header .container .content__cart .content__cart-list .content__cart-item .cart__product').dataset.id;
  document.querySelector(`.product__container .product[data-id="${id}"]`).querySelector('.btn__cart').disabled = false;
  let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.header .top__header .container .content__cart .content__cart-list .content__cart-item .cart__content-product .cart__product-text .cart-product__price').textContent));
  minusFullPrice(currentPrice);
  printFullPrice();
  productParent.remove();
  printQuantity();
};
productsBtn.forEach(el => {
  el.closest('.product__container .product').setAttribute('data-id', randomId());
  el.addEventListener('click', e => {
    let self = e.currentTarget;
    let parent = self.closest('.product__container .product');
    let id = parent.dataset.id;
    let img = parent.querySelector('.img__segway-one.product__card-delete').getAttribute('src');
    let title = parent.querySelector('.h.product__card-delete').textContent;
    // let priceString = priceWithoutSpaces(parent.querySelector('.product-price__current').textContent);
    let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.p.product__card-delete').textContent));
    plusFullPrice(priceNumber);
    printFullPrice();
    cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
    printQuantity();
    self.disabled = true;
  });
});
cartProductsList.addEventListener('click', e => {
  if (e.target.classList.contains('cart__content-delete')) {
    deleteProducts(e.target.closest('.header .top__header .container .content__cart .content__cart-list .content__cart-item'));
  }
});

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _node_modules_simplebar_src_simplebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/simplebar/src/simplebar.js */ "../node_modules/simplebar/src/simplebar.js");
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./burger.js */ "./js/burger.js");
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yacor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./yacor.js */ "./js/yacor.js");
/* harmony import */ var _yacor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_yacor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart.js */ "./js/cart.js");
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_cart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _buyModalSegway_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buyModalSegway.js */ "./js/buyModalSegway.js");
/* harmony import */ var _buyModalSegway_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_buyModalSegway_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _btnSegwayBuy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./btnSegwayBuy */ "./js/btnSegwayBuy.js");
/* harmony import */ var _btnSegwayBuy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_btnSegwayBuy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _simplebar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./simplebar.js */ "./js/simplebar.js");
/* harmony import */ var _simplebar_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_simplebar_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sliderHeaderSegway_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sliderHeaderSegway.js */ "./js/sliderHeaderSegway.js");
/* harmony import */ var _sliderHeaderSegway_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sliderHeaderSegway_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _buttonSegway_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buttonSegway.js */ "./js/buttonSegway.js");
/* harmony import */ var _buttonSegway_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_buttonSegway_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tabsBenefit_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tabsBenefit.js */ "./js/tabsBenefit.js");
/* harmony import */ var _tabsBenefit_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_tabsBenefit_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _svgSegway_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svgSegway.js */ "./js/svgSegway.js");
/* harmony import */ var _svgSegway_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_svgSegway_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sliderSegway_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sliderSegway.js */ "./js/sliderSegway.js");
/* harmony import */ var _sliderSegway_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sliderSegway_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sliderDrag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sliderDrag.js */ "./js/sliderDrag.js");
/* harmony import */ var _sliderDrag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sliderDrag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _sliderReviews_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sliderReviews.js */ "./js/sliderReviews.js");
/* harmony import */ var _sliderReviews_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sliderReviews_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _appControl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./appControl.js */ "./js/appControl.js");
/* harmony import */ var _appControl_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_appControl_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./slider */ "./js/slider.js");



















/***/ }),

/***/ "./js/simplebar.js":
/*!*************************!*\
  !*** ./js/simplebar.js ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : {};
  function e(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }
  var r,
    n,
    i = function (t) {
      return t && t.Math == Math && t;
    },
    o = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof t && t) || function () {
      return this;
    }() || Function("return this")(),
    s = Object.defineProperty,
    a = function (t, e) {
      try {
        s(o, t, {
          value: e,
          configurable: !0,
          writable: !0
        });
      } catch (r) {
        o[t] = e;
      }
      return e;
    },
    c = o["__core-js_shared__"] || a("__core-js_shared__", {}),
    l = e(function (t) {
      (t.exports = function (t, e) {
        return c[t] || (c[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.22.6",
        mode: "global",
        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.22.6/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    }),
    u = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    f = !u(function () {
      var t = function () {}.bind();
      return "function" != typeof t || t.hasOwnProperty("prototype");
    }),
    h = Function.prototype,
    d = h.bind,
    p = h.call,
    v = f && d.bind(p, p),
    g = f ? function (t) {
      return t && v(t);
    } : function (t) {
      return t && function () {
        return p.apply(t, arguments);
      };
    },
    b = o.TypeError,
    y = function (t) {
      if (null == t) throw b("Can't call method on " + t);
      return t;
    },
    m = o.Object,
    x = function (t) {
      return m(y(t));
    },
    E = g({}.hasOwnProperty),
    w = Object.hasOwn || function (t, e) {
      return E(x(t), e);
    },
    O = 0,
    S = Math.random(),
    A = g(1..toString),
    k = function (t) {
      return "Symbol(" + (void 0 === t ? "" : t) + ")_" + A(++O + S, 36);
    },
    T = function (t) {
      return "function" == typeof t;
    },
    L = function (t) {
      return T(t) ? t : void 0;
    },
    R = function (t, e) {
      return arguments.length < 2 ? L(o[t]) : o[t] && o[t][e];
    },
    _ = R("navigator", "userAgent") || "",
    j = o.process,
    z = o.Deno,
    M = j && j.versions || z && z.version,
    C = M && M.v8;
  C && (n = (r = C.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !n && _ && (!(r = _.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = _.match(/Chrome\/(\d+)/)) && (n = +r[1]);
  var N = n,
    W = !!Object.getOwnPropertySymbols && !u(function () {
      var t = Symbol();
      return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && N && N < 41;
    }),
    I = W && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    P = l("wks"),
    B = o.Symbol,
    D = B && B.for,
    F = I ? B : B && B.withoutSetter || k,
    V = function (t) {
      if (!w(P, t) || !W && "string" != typeof P[t]) {
        var e = "Symbol." + t;
        W && w(B, t) ? P[t] = B[t] : P[t] = I && D ? D(e) : F(e);
      }
      return P[t];
    },
    $ = {};
  $[V("toStringTag")] = "z";
  var X = "[object z]" === String($),
    H = !u(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        }
      })[1];
    }),
    q = function (t) {
      return "object" == typeof t ? null !== t : T(t);
    },
    Y = o.document,
    G = q(Y) && q(Y.createElement),
    U = function (t) {
      return G ? Y.createElement(t) : {};
    },
    K = !H && !u(function () {
      return 7 != Object.defineProperty(U("div"), "a", {
        get: function () {
          return 7;
        }
      }).a;
    }),
    J = H && u(function () {
      return 42 != Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: !1
      }).prototype;
    }),
    Q = o.String,
    Z = o.TypeError,
    tt = function (t) {
      if (q(t)) return t;
      throw Z(Q(t) + " is not an object");
    },
    et = Function.prototype.call,
    rt = f ? et.bind(et) : function () {
      return et.apply(et, arguments);
    },
    nt = g({}.isPrototypeOf),
    it = o.Object,
    ot = I ? function (t) {
      return "symbol" == typeof t;
    } : function (t) {
      var e = R("Symbol");
      return T(e) && nt(e.prototype, it(t));
    },
    st = o.String,
    at = function (t) {
      try {
        return st(t);
      } catch (t) {
        return "Object";
      }
    },
    ct = o.TypeError,
    lt = function (t) {
      if (T(t)) return t;
      throw ct(at(t) + " is not a function");
    },
    ut = function (t, e) {
      var r = t[e];
      return null == r ? void 0 : lt(r);
    },
    ft = o.TypeError,
    ht = o.TypeError,
    dt = V("toPrimitive"),
    pt = function (t, e) {
      if (!q(t) || ot(t)) return t;
      var r,
        n = ut(t, dt);
      if (n) {
        if (void 0 === e && (e = "default"), r = rt(n, t, e), !q(r) || ot(r)) return r;
        throw ht("Can't convert object to primitive value");
      }
      return void 0 === e && (e = "number"), function (t, e) {
        var r, n;
        if ("string" === e && T(r = t.toString) && !q(n = rt(r, t))) return n;
        if (T(r = t.valueOf) && !q(n = rt(r, t))) return n;
        if ("string" !== e && T(r = t.toString) && !q(n = rt(r, t))) return n;
        throw ft("Can't convert object to primitive value");
      }(t, e);
    },
    vt = function (t) {
      var e = pt(t, "string");
      return ot(e) ? e : e + "";
    },
    gt = o.TypeError,
    bt = Object.defineProperty,
    yt = Object.getOwnPropertyDescriptor,
    mt = {
      f: H ? J ? function (t, e, r) {
        if (tt(t), e = vt(e), tt(r), "function" == typeof t && "prototype" === e && "value" in r && "writable" in r && !r.writable) {
          var n = yt(t, e);
          n && n.writable && (t[e] = r.value, r = {
            configurable: "configurable" in r ? r.configurable : n.configurable,
            enumerable: "enumerable" in r ? r.enumerable : n.enumerable,
            writable: !1
          });
        }
        return bt(t, e, r);
      } : bt : function (t, e, r) {
        if (tt(t), e = vt(e), tt(r), K) try {
          return bt(t, e, r);
        } catch (t) {}
        if ("get" in r || "set" in r) throw gt("Accessors not supported");
        return "value" in r && (t[e] = r.value), t;
      }
    },
    xt = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    },
    Et = H ? function (t, e, r) {
      return mt.f(t, e, xt(1, r));
    } : function (t, e, r) {
      return t[e] = r, t;
    },
    wt = Function.prototype,
    Ot = H && Object.getOwnPropertyDescriptor,
    St = w(wt, "name"),
    At = {
      EXISTS: St,
      PROPER: St && "something" === function () {}.name,
      CONFIGURABLE: St && (!H || H && Ot(wt, "name").configurable)
    },
    kt = g(Function.toString);
  T(c.inspectSource) || (c.inspectSource = function (t) {
    return kt(t);
  });
  var Tt,
    Lt,
    Rt,
    _t = c.inspectSource,
    jt = o.WeakMap,
    zt = T(jt) && /native code/.test(_t(jt)),
    Mt = l("keys"),
    Ct = function (t) {
      return Mt[t] || (Mt[t] = k(t));
    },
    Nt = {},
    Wt = o.TypeError,
    It = o.WeakMap;
  if (zt || c.state) {
    var Pt = c.state || (c.state = new It()),
      Bt = g(Pt.get),
      Dt = g(Pt.has),
      Ft = g(Pt.set);
    Tt = function (t, e) {
      if (Dt(Pt, t)) throw new Wt("Object already initialized");
      return e.facade = t, Ft(Pt, t, e), e;
    }, Lt = function (t) {
      return Bt(Pt, t) || {};
    }, Rt = function (t) {
      return Dt(Pt, t);
    };
  } else {
    var Vt = Ct("state");
    Nt[Vt] = !0, Tt = function (t, e) {
      if (w(t, Vt)) throw new Wt("Object already initialized");
      return e.facade = t, Et(t, Vt, e), e;
    }, Lt = function (t) {
      return w(t, Vt) ? t[Vt] : {};
    }, Rt = function (t) {
      return w(t, Vt);
    };
  }
  var $t = {
      set: Tt,
      get: Lt,
      has: Rt,
      enforce: function (t) {
        return Rt(t) ? Lt(t) : Tt(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!q(e) || (r = Lt(e)).type !== t) throw Wt("Incompatible receiver, " + t + " required");
          return r;
        };
      }
    },
    Xt = e(function (t) {
      var e = At.CONFIGURABLE,
        r = $t.enforce,
        n = $t.get,
        i = Object.defineProperty,
        o = H && !u(function () {
          return 8 !== i(function () {}, "length", {
            value: 8
          }).length;
        }),
        s = String(String).split("String"),
        a = t.exports = function (t, n, a) {
          if ("Symbol(" === String(n).slice(0, 7) && (n = "[" + String(n).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), a && a.getter && (n = "get " + n), a && a.setter && (n = "set " + n), (!w(t, "name") || e && t.name !== n) && i(t, "name", {
            value: n,
            configurable: !0
          }), o && a && w(a, "arity") && t.length !== a.arity && i(t, "length", {
            value: a.arity
          }), a && w(a, "constructor") && a.constructor) {
            if (H) try {
              i(t, "prototype", {
                writable: !1
              });
            } catch (t) {}
          } else t.prototype = void 0;
          var c = r(t);
          return w(c, "source") || (c.source = s.join("string" == typeof n ? n : "")), t;
        };
      Function.prototype.toString = a(function () {
        return T(this) && n(this).source || _t(this);
      }, "toString");
    }),
    Ht = function (t, e, r, n) {
      n || (n = {});
      var i = n.enumerable,
        o = void 0 !== n.name ? n.name : e;
      return T(r) && Xt(r, o, n), n.global ? i ? t[e] = r : a(e, r) : (n.unsafe ? t[e] && (i = !0) : delete t[e], i ? t[e] = r : Et(t, e, r)), t;
    },
    qt = g({}.toString),
    Yt = g("".slice),
    Gt = function (t) {
      return Yt(qt(t), 8, -1);
    },
    Ut = V("toStringTag"),
    Kt = o.Object,
    Jt = "Arguments" == Gt(function () {
      return arguments;
    }()),
    Qt = X ? Gt : function (t) {
      var e, r, n;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Kt(t), Ut)) ? r : Jt ? Gt(e) : "Object" == (n = Gt(e)) && T(e.callee) ? "Arguments" : n;
    },
    Zt = X ? {}.toString : function () {
      return "[object " + Qt(this) + "]";
    };
  X || Ht(Object.prototype, "toString", Zt, {
    unsafe: !0
  });
  var te = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    },
    ee = U("span").classList,
    re = ee && ee.constructor && ee.constructor.prototype,
    ne = re === Object.prototype ? void 0 : re,
    ie = g(g.bind),
    oe = function (t, e) {
      return lt(t), void 0 === e ? t : f ? ie(t, e) : function () {
        return t.apply(e, arguments);
      };
    },
    se = o.Object,
    ae = g("".split),
    ce = u(function () {
      return !se("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == Gt(t) ? ae(t, "") : se(t);
    } : se,
    le = Math.ceil,
    ue = Math.floor,
    fe = Math.trunc || function (t) {
      var e = +t;
      return (e > 0 ? ue : le)(e);
    },
    he = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : fe(e);
    },
    de = Math.min,
    pe = function (t) {
      return t > 0 ? de(he(t), 9007199254740991) : 0;
    },
    ve = function (t) {
      return pe(t.length);
    },
    ge = Array.isArray || function (t) {
      return "Array" == Gt(t);
    },
    be = function () {},
    ye = [],
    me = R("Reflect", "construct"),
    xe = /^\s*(?:class|function)\b/,
    Ee = g(xe.exec),
    we = !xe.exec(be),
    Oe = function (t) {
      if (!T(t)) return !1;
      try {
        return me(be, ye, t), !0;
      } catch (t) {
        return !1;
      }
    },
    Se = function (t) {
      if (!T(t)) return !1;
      switch (Qt(t)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return we || !!Ee(xe, _t(t));
      } catch (t) {
        return !0;
      }
    };
  Se.sham = !0;
  var Ae = !me || u(function () {
      var t;
      return Oe(Oe.call) || !Oe(Object) || !Oe(function () {
        t = !0;
      }) || t;
    }) ? Se : Oe,
    ke = V("species"),
    Te = o.Array,
    Le = function (t, e) {
      return new (function (t) {
        var e;
        return ge(t) && (e = t.constructor, (Ae(e) && (e === Te || ge(e.prototype)) || q(e) && null === (e = e[ke])) && (e = void 0)), void 0 === e ? Te : e;
      }(t))(0 === e ? 0 : e);
    },
    Re = g([].push),
    _e = function (t) {
      var e = 1 == t,
        r = 2 == t,
        n = 3 == t,
        i = 4 == t,
        o = 6 == t,
        s = 7 == t,
        a = 5 == t || o;
      return function (c, l, u, f) {
        for (var h, d, p = x(c), v = ce(p), g = oe(l, u), b = ve(v), y = 0, m = f || Le, E = e ? m(c, b) : r || s ? m(c, 0) : void 0; b > y; y++) if ((a || y in v) && (d = g(h = v[y], y, p), t)) if (e) E[y] = d;else if (d) switch (t) {
          case 3:
            return !0;
          case 5:
            return h;
          case 6:
            return y;
          case 2:
            Re(E, h);
        } else switch (t) {
          case 4:
            return !1;
          case 7:
            Re(E, h);
        }
        return o ? -1 : n || i ? i : E;
      };
    },
    je = {
      forEach: _e(0),
      map: _e(1),
      filter: _e(2),
      some: _e(3),
      every: _e(4),
      find: _e(5),
      findIndex: _e(6),
      filterReject: _e(7)
    },
    ze = function (t, e) {
      var r = [][t];
      return !!r && u(function () {
        r.call(null, e || function () {
          return 1;
        }, 1);
      });
    },
    Me = je.forEach,
    Ce = ze("forEach") ? [].forEach : function (t) {
      return Me(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
    Ne = function (t) {
      if (t && t.forEach !== Ce) try {
        Et(t, "forEach", Ce);
      } catch (e) {
        t.forEach = Ce;
      }
    };
  for (var We in te) te[We] && Ne(o[We] && o[We].prototype);
  Ne(ne);
  var Ie = !("undefined" == typeof window || !window.document || !window.document.createElement),
    Pe = {}.propertyIsEnumerable,
    Be = Object.getOwnPropertyDescriptor,
    De = {
      f: Be && !Pe.call({
        1: 2
      }, 1) ? function (t) {
        var e = Be(this, t);
        return !!e && e.enumerable;
      } : Pe
    },
    Fe = function (t) {
      return ce(y(t));
    },
    Ve = Object.getOwnPropertyDescriptor,
    $e = {
      f: H ? Ve : function (t, e) {
        if (t = Fe(t), e = vt(e), K) try {
          return Ve(t, e);
        } catch (t) {}
        if (w(t, e)) return xt(!rt(De.f, t, e), t[e]);
      }
    },
    Xe = Math.max,
    He = Math.min,
    qe = function (t, e) {
      var r = he(t);
      return r < 0 ? Xe(r + e, 0) : He(r, e);
    },
    Ye = function (t) {
      return function (e, r, n) {
        var i,
          o = Fe(e),
          s = ve(o),
          a = qe(n, s);
        if (t && r != r) {
          for (; s > a;) if ((i = o[a++]) != i) return !0;
        } else for (; s > a; a++) if ((t || a in o) && o[a] === r) return t || a || 0;
        return !t && -1;
      };
    },
    Ge = {
      includes: Ye(!0),
      indexOf: Ye(!1)
    }.indexOf,
    Ue = g([].push),
    Ke = function (t, e) {
      var r,
        n = Fe(t),
        i = 0,
        o = [];
      for (r in n) !w(Nt, r) && w(n, r) && Ue(o, r);
      for (; e.length > i;) w(n, r = e[i++]) && (~Ge(o, r) || Ue(o, r));
      return o;
    },
    Je = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    Qe = Je.concat("length", "prototype"),
    Ze = {
      f: Object.getOwnPropertyNames || function (t) {
        return Ke(t, Qe);
      }
    },
    tr = {
      f: Object.getOwnPropertySymbols
    },
    er = g([].concat),
    rr = R("Reflect", "ownKeys") || function (t) {
      var e = Ze.f(tt(t)),
        r = tr.f;
      return r ? er(e, r(t)) : e;
    },
    nr = function (t, e, r) {
      for (var n = rr(e), i = mt.f, o = $e.f, s = 0; s < n.length; s++) {
        var a = n[s];
        w(t, a) || r && w(r, a) || i(t, a, o(e, a));
      }
    },
    ir = /#|\.prototype\./,
    or = function (t, e) {
      var r = ar[sr(t)];
      return r == lr || r != cr && (T(e) ? u(e) : !!e);
    },
    sr = or.normalize = function (t) {
      return String(t).replace(ir, ".").toLowerCase();
    },
    ar = or.data = {},
    cr = or.NATIVE = "N",
    lr = or.POLYFILL = "P",
    ur = or,
    fr = $e.f,
    hr = function (t, e) {
      var r,
        n,
        i,
        s,
        c,
        l = t.target,
        u = t.global,
        f = t.stat;
      if (r = u ? o : f ? o[l] || a(l, {}) : (o[l] || {}).prototype) for (n in e) {
        if (s = e[n], i = t.dontCallGetSet ? (c = fr(r, n)) && c.value : r[n], !ur(u ? n : l + (f ? "." : "#") + n, t.forced) && void 0 !== i) {
          if (typeof s == typeof i) continue;
          nr(s, i);
        }
        (t.sham || i && i.sham) && Et(s, "sham", !0), Ht(r, n, s, t);
      }
    },
    dr = o.String,
    pr = function (t) {
      if ("Symbol" === Qt(t)) throw TypeError("Cannot convert a Symbol value to a string");
      return dr(t);
    },
    vr = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    gr = g("".replace),
    br = "[" + vr + "]",
    yr = RegExp("^" + br + br + "*"),
    mr = RegExp(br + br + "*$"),
    xr = function (t) {
      return function (e) {
        var r = pr(y(e));
        return 1 & t && (r = gr(r, yr, "")), 2 & t && (r = gr(r, mr, "")), r;
      };
    },
    Er = {
      start: xr(1),
      end: xr(2),
      trim: xr(3)
    }.trim,
    wr = o.parseInt,
    Or = o.Symbol,
    Sr = Or && Or.iterator,
    Ar = /^[+-]?0x/i,
    kr = g(Ar.exec),
    Tr = 8 !== wr(vr + "08") || 22 !== wr(vr + "0x16") || Sr && !u(function () {
      wr(Object(Sr));
    }) ? function (t, e) {
      var r = Er(pr(t));
      return wr(r, e >>> 0 || (kr(Ar, r) ? 16 : 10));
    } : wr;
  hr({
    global: !0,
    forced: parseInt != Tr
  }, {
    parseInt: Tr
  });
  var Lr = Object.keys || function (t) {
      return Ke(t, Je);
    },
    Rr = Object.assign,
    _r = Object.defineProperty,
    jr = g([].concat),
    zr = !Rr || u(function () {
      if (H && 1 !== Rr({
        b: 1
      }, Rr(_r({}, "a", {
        enumerable: !0,
        get: function () {
          _r(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b) return !0;
      var t = {},
        e = {},
        r = Symbol();
      return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t) {
        e[t] = t;
      }), 7 != Rr({}, t)[r] || "abcdefghijklmnopqrst" != Lr(Rr({}, e)).join("");
    }) ? function (t, e) {
      for (var r = x(t), n = arguments.length, i = 1, o = tr.f, s = De.f; n > i;) for (var a, c = ce(arguments[i++]), l = o ? jr(Lr(c), o(c)) : Lr(c), u = l.length, f = 0; u > f;) a = l[f++], H && !rt(s, c, a) || (r[a] = c[a]);
      return r;
    } : Rr;
  hr({
    target: "Object",
    stat: !0,
    arity: 2,
    forced: Object.assign !== zr
  }, {
    assign: zr
  });
  var Mr,
    Cr = V("species"),
    Nr = je.filter,
    Wr = (Mr = "filter", N >= 51 || !u(function () {
      var t = [];
      return (t.constructor = {})[Cr] = function () {
        return {
          foo: 1
        };
      }, 1 !== t[Mr](Boolean).foo;
    }));
  hr({
    target: "Array",
    proto: !0,
    forced: !Wr
  }, {
    filter: function (t) {
      return Nr(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var Ir,
    Pr = {
      f: H && !J ? Object.defineProperties : function (t, e) {
        tt(t);
        for (var r, n = Fe(e), i = Lr(e), o = i.length, s = 0; o > s;) mt.f(t, r = i[s++], n[r]);
        return t;
      }
    },
    Br = R("document", "documentElement"),
    Dr = Ct("IE_PROTO"),
    Fr = function () {},
    Vr = function (t) {
      return "<script>" + t + "<\/script>";
    },
    $r = function (t) {
      t.write(Vr("")), t.close();
      var e = t.parentWindow.Object;
      return t = null, e;
    },
    Xr = function () {
      try {
        Ir = new ActiveXObject("htmlfile");
      } catch (t) {}
      var t, e;
      Xr = "undefined" != typeof document ? document.domain && Ir ? $r(Ir) : ((e = U("iframe")).style.display = "none", Br.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Vr("document.F=Object")), t.close(), t.F) : $r(Ir);
      for (var r = Je.length; r--;) delete Xr.prototype[Je[r]];
      return Xr();
    };
  Nt[Dr] = !0;
  var Hr = Object.create || function (t, e) {
      var r;
      return null !== t ? (Fr.prototype = tt(t), r = new Fr(), Fr.prototype = null, r[Dr] = t) : r = Xr(), void 0 === e ? r : Pr.f(r, e);
    },
    qr = mt.f,
    Yr = V("unscopables"),
    Gr = Array.prototype;
  null == Gr[Yr] && qr(Gr, Yr, {
    configurable: !0,
    value: Hr(null)
  });
  var Ur,
    Kr,
    Jr,
    Qr = function (t) {
      Gr[Yr][t] = !0;
    },
    Zr = {},
    tn = !u(function () {
      function t() {}
      return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
    }),
    en = Ct("IE_PROTO"),
    rn = o.Object,
    nn = rn.prototype,
    on = tn ? rn.getPrototypeOf : function (t) {
      var e = x(t);
      if (w(e, en)) return e[en];
      var r = e.constructor;
      return T(r) && e instanceof r ? r.prototype : e instanceof rn ? nn : null;
    },
    sn = V("iterator"),
    an = !1;
  [].keys && ("next" in (Jr = [].keys()) ? (Kr = on(on(Jr))) !== Object.prototype && (Ur = Kr) : an = !0), (null == Ur || u(function () {
    var t = {};
    return Ur[sn].call(t) !== t;
  })) && (Ur = {}), T(Ur[sn]) || Ht(Ur, sn, function () {
    return this;
  });
  var cn = {
      IteratorPrototype: Ur,
      BUGGY_SAFARI_ITERATORS: an
    },
    ln = mt.f,
    un = V("toStringTag"),
    fn = function (t, e, r) {
      t && !r && (t = t.prototype), t && !w(t, un) && ln(t, un, {
        configurable: !0,
        value: e
      });
    },
    hn = cn.IteratorPrototype,
    dn = function () {
      return this;
    },
    pn = o.String,
    vn = o.TypeError,
    gn = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var t,
        e = !1,
        r = {};
      try {
        (t = g(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), e = r instanceof Array;
      } catch (t) {}
      return function (r, n) {
        return tt(r), function (t) {
          if ("object" == typeof t || T(t)) return t;
          throw vn("Can't set " + pn(t) + " as a prototype");
        }(n), e ? t(r, n) : r.__proto__ = n, r;
      };
    }() : void 0),
    bn = At.PROPER,
    yn = At.CONFIGURABLE,
    mn = cn.IteratorPrototype,
    xn = cn.BUGGY_SAFARI_ITERATORS,
    En = V("iterator"),
    wn = function () {
      return this;
    },
    On = function (t, e, r, n, i, o, s) {
      !function (t, e, r, n) {
        var i = e + " Iterator";
        t.prototype = Hr(hn, {
          next: xt(+!n, r)
        }), fn(t, i, !1), Zr[i] = dn;
      }(r, e, n);
      var a,
        c,
        l,
        u = function (t) {
          if (t === i && v) return v;
          if (!xn && t in d) return d[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        f = e + " Iterator",
        h = !1,
        d = t.prototype,
        p = d[En] || d["@@iterator"] || i && d[i],
        v = !xn && p || u(i),
        g = "Array" == e && d.entries || p;
      if (g && (a = on(g.call(new t()))) !== Object.prototype && a.next && (on(a) !== mn && (gn ? gn(a, mn) : T(a[En]) || Ht(a, En, wn)), fn(a, f, !0)), bn && "values" == i && p && "values" !== p.name && (yn ? Et(d, "name", "values") : (h = !0, v = function () {
        return rt(p, this);
      })), i) if (c = {
        values: u("values"),
        keys: o ? v : u("keys"),
        entries: u("entries")
      }, s) for (l in c) (xn || h || !(l in d)) && Ht(d, l, c[l]);else hr({
        target: e,
        proto: !0,
        forced: xn || h
      }, c);
      return d[En] !== v && Ht(d, En, v, {
        name: i
      }), Zr[e] = v, c;
    },
    Sn = mt.f,
    An = $t.set,
    kn = $t.getterFor("Array Iterator"),
    Tn = On(Array, "Array", function (t, e) {
      An(this, {
        type: "Array Iterator",
        target: Fe(t),
        index: 0,
        kind: e
      });
    }, function () {
      var t = kn(this),
        e = t.target,
        r = t.kind,
        n = t.index++;
      return !e || n >= e.length ? (t.target = void 0, {
        value: void 0,
        done: !0
      }) : "keys" == r ? {
        value: n,
        done: !1
      } : "values" == r ? {
        value: e[n],
        done: !1
      } : {
        value: [n, e[n]],
        done: !1
      };
    }, "values"),
    Ln = Zr.Arguments = Zr.Array;
  if (Qr("keys"), Qr("values"), Qr("entries"), H && "values" !== Ln.name) try {
    Sn(Ln, "name", {
      value: "values"
    });
  } catch (t) {}
  var Rn = g("".charAt),
    _n = g("".charCodeAt),
    jn = g("".slice),
    zn = function (t) {
      return function (e, r) {
        var n,
          i,
          o = pr(y(e)),
          s = he(r),
          a = o.length;
        return s < 0 || s >= a ? t ? "" : void 0 : (n = _n(o, s)) < 55296 || n > 56319 || s + 1 === a || (i = _n(o, s + 1)) < 56320 || i > 57343 ? t ? Rn(o, s) : n : t ? jn(o, s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536;
      };
    },
    Mn = {
      codeAt: zn(!1),
      charAt: zn(!0)
    },
    Cn = Mn.charAt,
    Nn = $t.set,
    Wn = $t.getterFor("String Iterator");
  On(String, "String", function (t) {
    Nn(this, {
      type: "String Iterator",
      string: pr(t),
      index: 0
    });
  }, function () {
    var t,
      e = Wn(this),
      r = e.string,
      n = e.index;
    return n >= r.length ? {
      value: void 0,
      done: !0
    } : (t = Cn(r, n), e.index += t.length, {
      value: t,
      done: !1
    });
  });
  var In = function (t, e, r) {
      for (var n in e) Ht(t, n, e[n], r);
      return t;
    },
    Pn = o.Array,
    Bn = Math.max,
    Dn = Ze.f,
    Fn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    Vn = function (t) {
      try {
        return Dn(t);
      } catch (t) {
        return function (t, e, r) {
          for (var n, i, o, s, a = ve(t), c = qe(e, a), l = qe(void 0 === r ? a : r, a), u = Pn(Bn(l - c, 0)), f = 0; c < l; c++, f++) n = u, i = f, o = t[c], s = void 0, (s = vt(i)) in n ? mt.f(n, s, xt(0, o)) : n[s] = o;
          return u.length = f, u;
        }(Fn);
      }
    },
    $n = {
      f: function (t) {
        return Fn && "Window" == Gt(t) ? Vn(t) : Dn(Fe(t));
      }
    },
    Xn = u(function () {
      if ("function" == typeof ArrayBuffer) {
        var t = new ArrayBuffer(8);
        Object.isExtensible(t) && Object.defineProperty(t, "a", {
          value: 8
        });
      }
    }),
    Hn = Object.isExtensible,
    qn = u(function () {
      Hn(1);
    }) || Xn ? function (t) {
      return !!q(t) && (!Xn || "ArrayBuffer" != Gt(t)) && (!Hn || Hn(t));
    } : Hn,
    Yn = !u(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    Gn = e(function (t) {
      var e = mt.f,
        r = !1,
        n = k("meta"),
        i = 0,
        o = function (t) {
          e(t, n, {
            value: {
              objectID: "O" + i++,
              weakData: {}
            }
          });
        },
        s = t.exports = {
          enable: function () {
            s.enable = function () {}, r = !0;
            var t = Ze.f,
              e = g([].splice),
              i = {};
            i[n] = 1, t(i).length && (Ze.f = function (r) {
              for (var i = t(r), o = 0, s = i.length; o < s; o++) if (i[o] === n) {
                e(i, o, 1);
                break;
              }
              return i;
            }, hr({
              target: "Object",
              stat: !0,
              forced: !0
            }, {
              getOwnPropertyNames: $n.f
            }));
          },
          fastKey: function (t, e) {
            if (!q(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!w(t, n)) {
              if (!qn(t)) return "F";
              if (!e) return "E";
              o(t);
            }
            return t[n].objectID;
          },
          getWeakData: function (t, e) {
            if (!w(t, n)) {
              if (!qn(t)) return !0;
              if (!e) return !1;
              o(t);
            }
            return t[n].weakData;
          },
          onFreeze: function (t) {
            return Yn && r && qn(t) && !w(t, n) && o(t), t;
          }
        };
      Nt[n] = !0;
    }),
    Un = (Gn.enable, Gn.fastKey, Gn.getWeakData, Gn.onFreeze, V("iterator")),
    Kn = Array.prototype,
    Jn = V("iterator"),
    Qn = function (t) {
      if (null != t) return ut(t, Jn) || ut(t, "@@iterator") || Zr[Qt(t)];
    },
    Zn = o.TypeError,
    ti = function (t, e, r) {
      var n, i;
      tt(t);
      try {
        if (!(n = ut(t, "return"))) {
          if ("throw" === e) throw r;
          return r;
        }
        n = rt(n, t);
      } catch (t) {
        i = !0, n = t;
      }
      if ("throw" === e) throw r;
      if (i) throw n;
      return tt(n), r;
    },
    ei = o.TypeError,
    ri = function (t, e) {
      this.stopped = t, this.result = e;
    },
    ni = ri.prototype,
    ii = function (t, e, r) {
      var n,
        i,
        o,
        s,
        a,
        c,
        l,
        u,
        f = r && r.that,
        h = !(!r || !r.AS_ENTRIES),
        d = !(!r || !r.IS_ITERATOR),
        p = !(!r || !r.INTERRUPTED),
        v = oe(e, f),
        g = function (t) {
          return n && ti(n, "normal", t), new ri(!0, t);
        },
        b = function (t) {
          return h ? (tt(t), p ? v(t[0], t[1], g) : v(t[0], t[1])) : p ? v(t, g) : v(t);
        };
      if (d) n = t;else {
        if (!(i = Qn(t))) throw ei(at(t) + " is not iterable");
        if (void 0 !== (u = i) && (Zr.Array === u || Kn[Un] === u)) {
          for (o = 0, s = ve(t); s > o; o++) if ((a = b(t[o])) && nt(ni, a)) return a;
          return new ri(!1);
        }
        n = function (t, e) {
          var r = arguments.length < 2 ? Qn(t) : e;
          if (lt(r)) return tt(rt(r, t));
          throw Zn(at(t) + " is not iterable");
        }(t, i);
      }
      for (c = n.next; !(l = rt(c, n)).done;) {
        try {
          a = b(l.value);
        } catch (t) {
          ti(n, "throw", t);
        }
        if ("object" == typeof a && a && nt(ni, a)) return a;
      }
      return new ri(!1);
    },
    oi = o.TypeError,
    si = function (t, e) {
      if (nt(e, t)) return t;
      throw oi("Incorrect invocation");
    },
    ai = V("iterator"),
    ci = !1;
  try {
    var li = 0,
      ui = {
        next: function () {
          return {
            done: !!li++
          };
        },
        return: function () {
          ci = !0;
        }
      };
    ui[ai] = function () {
      return this;
    }, Array.from(ui, function () {
      throw 2;
    });
  } catch (t) {}
  var fi = Gn.getWeakData,
    hi = $t.set,
    di = $t.getterFor,
    pi = je.find,
    vi = je.findIndex,
    gi = g([].splice),
    bi = 0,
    yi = function (t) {
      return t.frozen || (t.frozen = new mi());
    },
    mi = function () {
      this.entries = [];
    },
    xi = function (t, e) {
      return pi(t.entries, function (t) {
        return t[0] === e;
      });
    };
  mi.prototype = {
    get: function (t) {
      var e = xi(this, t);
      if (e) return e[1];
    },
    has: function (t) {
      return !!xi(this, t);
    },
    set: function (t, e) {
      var r = xi(this, t);
      r ? r[1] = e : this.entries.push([t, e]);
    },
    delete: function (t) {
      var e = vi(this.entries, function (e) {
        return e[0] === t;
      });
      return ~e && gi(this.entries, e, 1), !!~e;
    }
  };
  var Ei,
    wi = {
      getConstructor: function (t, e, r, n) {
        var i = t(function (t, i) {
            si(t, o), hi(t, {
              type: e,
              id: bi++,
              frozen: void 0
            }), null != i && ii(i, t[n], {
              that: t,
              AS_ENTRIES: r
            });
          }),
          o = i.prototype,
          s = di(e),
          a = function (t, e, r) {
            var n = s(t),
              i = fi(tt(e), !0);
            return !0 === i ? yi(n).set(e, r) : i[n.id] = r, t;
          };
        return In(o, {
          delete: function (t) {
            var e = s(this);
            if (!q(t)) return !1;
            var r = fi(t);
            return !0 === r ? yi(e).delete(t) : r && w(r, e.id) && delete r[e.id];
          },
          has: function (t) {
            var e = s(this);
            if (!q(t)) return !1;
            var r = fi(t);
            return !0 === r ? yi(e).has(t) : r && w(r, e.id);
          }
        }), In(o, r ? {
          get: function (t) {
            var e = s(this);
            if (q(t)) {
              var r = fi(t);
              return !0 === r ? yi(e).get(t) : r ? r[e.id] : void 0;
            }
          },
          set: function (t, e) {
            return a(this, t, e);
          }
        } : {
          add: function (t) {
            return a(this, t, !0);
          }
        }), i;
      }
    },
    Oi = $t.enforce,
    Si = !o.ActiveXObject && "ActiveXObject" in o,
    Ai = function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    },
    ki = function (t, e, r) {
      var n = -1 !== t.indexOf("Map"),
        i = -1 !== t.indexOf("Weak"),
        s = n ? "set" : "add",
        a = o[t],
        c = a && a.prototype,
        l = a,
        f = {},
        h = function (t) {
          var e = g(c[t]);
          Ht(c, t, "add" == t ? function (t) {
            return e(this, 0 === t ? 0 : t), this;
          } : "delete" == t ? function (t) {
            return !(i && !q(t)) && e(this, 0 === t ? 0 : t);
          } : "get" == t ? function (t) {
            return i && !q(t) ? void 0 : e(this, 0 === t ? 0 : t);
          } : "has" == t ? function (t) {
            return !(i && !q(t)) && e(this, 0 === t ? 0 : t);
          } : function (t, r) {
            return e(this, 0 === t ? 0 : t, r), this;
          });
        };
      if (ur(t, !T(a) || !(i || c.forEach && !u(function () {
        new a().entries().next();
      })))) l = r.getConstructor(e, t, n, s), Gn.enable();else if (ur(t, !0)) {
        var d = new l(),
          p = d[s](i ? {} : -0, 1) != d,
          v = u(function () {
            d.has(1);
          }),
          b = function (t, e) {
            if (!e && !ci) return !1;
            var r = !1;
            try {
              var n = {};
              n[ai] = function () {
                return {
                  next: function () {
                    return {
                      done: r = !0
                    };
                  }
                };
              }, t(n);
            } catch (t) {}
            return r;
          }(function (t) {
            new a(t);
          }),
          y = !i && u(function () {
            for (var t = new a(), e = 5; e--;) t[s](e, e);
            return !t.has(-0);
          });
        b || ((l = e(function (t, e) {
          si(t, c);
          var r = function (t, e, r) {
            var n, i;
            return gn && T(n = e.constructor) && n !== r && q(i = n.prototype) && i !== r.prototype && gn(t, i), t;
          }(new a(), t, l);
          return null != e && ii(e, r[s], {
            that: r,
            AS_ENTRIES: n
          }), r;
        })).prototype = c, c.constructor = l), (v || y) && (h("delete"), h("has"), n && h("get")), (y || p) && h(s), i && c.clear && delete c.clear;
      }
      return f[t] = l, hr({
        global: !0,
        constructor: !0,
        forced: l != a
      }, f), fn(l, t), i || r.setStrong(l, t, n), l;
    }("WeakMap", Ai, wi);
  if (zt && Si) {
    Ei = wi.getConstructor(Ai, "WeakMap", !0), Gn.enable();
    var Ti = ki.prototype,
      Li = g(Ti.delete),
      Ri = g(Ti.has),
      _i = g(Ti.get),
      ji = g(Ti.set);
    In(Ti, {
      delete: function (t) {
        if (q(t) && !qn(t)) {
          var e = Oi(this);
          return e.frozen || (e.frozen = new Ei()), Li(this, t) || e.frozen.delete(t);
        }
        return Li(this, t);
      },
      has: function (t) {
        if (q(t) && !qn(t)) {
          var e = Oi(this);
          return e.frozen || (e.frozen = new Ei()), Ri(this, t) || e.frozen.has(t);
        }
        return Ri(this, t);
      },
      get: function (t) {
        if (q(t) && !qn(t)) {
          var e = Oi(this);
          return e.frozen || (e.frozen = new Ei()), Ri(this, t) ? _i(this, t) : e.frozen.get(t);
        }
        return _i(this, t);
      },
      set: function (t, e) {
        if (q(t) && !qn(t)) {
          var r = Oi(this);
          r.frozen || (r.frozen = new Ei()), Ri(this, t) ? ji(this, t, e) : r.frozen.set(t, e);
        } else ji(this, t, e);
        return this;
      }
    });
  }
  var zi = V("iterator"),
    Mi = V("toStringTag"),
    Ci = Tn.values,
    Ni = function (t, e) {
      if (t) {
        if (t[zi] !== Ci) try {
          Et(t, zi, Ci);
        } catch (e) {
          t[zi] = Ci;
        }
        if (t[Mi] || Et(t, Mi, e), te[e]) for (var r in Tn) if (t[r] !== Tn[r]) try {
          Et(t, r, Tn[r]);
        } catch (e) {
          t[r] = Tn[r];
        }
      }
    };
  for (var Wi in te) Ni(o[Wi] && o[Wi].prototype, Wi);
  Ni(ne, "DOMTokenList");
  var Ii = /^\s+|\s+$/g,
    Pi = /^[-+]0x[0-9a-f]+$/i,
    Bi = /^0b[01]+$/i,
    Di = /^0o[0-7]+$/i,
    Fi = parseInt,
    Vi = "object" == typeof t && t && t.Object === Object && t,
    $i = "object" == typeof self && self && self.Object === Object && self,
    Xi = Vi || $i || Function("return this")(),
    Hi = Object.prototype.toString,
    qi = Math.max,
    Yi = Math.min,
    Gi = function () {
      return Xi.Date.now();
    };
  function Ui(t, e, r) {
    var n,
      i,
      o,
      s,
      a,
      c,
      l = 0,
      u = !1,
      f = !1,
      h = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function d(e) {
      var r = n,
        o = i;
      return n = i = void 0, l = e, s = t.apply(o, r);
    }
    function p(t) {
      return l = t, a = setTimeout(g, e), u ? d(t) : s;
    }
    function v(t) {
      var r = t - c;
      return void 0 === c || r >= e || r < 0 || f && t - l >= o;
    }
    function g() {
      var t = Gi();
      if (v(t)) return b(t);
      a = setTimeout(g, function (t) {
        var r = e - (t - c);
        return f ? Yi(r, o - (t - l)) : r;
      }(t));
    }
    function b(t) {
      return a = void 0, h && n ? d(t) : (n = i = void 0, s);
    }
    function y() {
      var t = Gi(),
        r = v(t);
      if (n = arguments, i = this, c = t, r) {
        if (void 0 === a) return p(c);
        if (f) return a = setTimeout(g, e), d(c);
      }
      return void 0 === a && (a = setTimeout(g, e)), s;
    }
    return e = Ji(e) || 0, Ki(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? qi(Ji(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function () {
      void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0;
    }, y.flush = function () {
      return void 0 === a ? s : b(Gi());
    }, y;
  }
  function Ki(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  function Ji(t) {
    if ("number" == typeof t) return t;
    if (function (t) {
      return "symbol" == typeof t || function (t) {
        return !!t && "object" == typeof t;
      }(t) && "[object Symbol]" == Hi.call(t);
    }(t)) return NaN;
    if (Ki(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = Ki(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Ii, "");
    var r = Bi.test(t);
    return r || Di.test(t) ? Fi(t.slice(2), r ? 2 : 8) : Pi.test(t) ? NaN : +t;
  }
  var Qi = function (t, e, r) {
      var n = !0,
        i = !0;
      if ("function" != typeof t) throw new TypeError("Expected a function");
      return Ki(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Ui(t, e, {
        leading: n,
        maxWait: e,
        trailing: i
      });
    },
    Zi = /^\s+|\s+$/g,
    to = /^[-+]0x[0-9a-f]+$/i,
    eo = /^0b[01]+$/i,
    ro = /^0o[0-7]+$/i,
    no = parseInt,
    io = "object" == typeof t && t && t.Object === Object && t,
    oo = "object" == typeof self && self && self.Object === Object && self,
    so = io || oo || Function("return this")(),
    ao = Object.prototype.toString,
    co = Math.max,
    lo = Math.min,
    uo = function () {
      return so.Date.now();
    };
  function fo(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  function ho(t) {
    if ("number" == typeof t) return t;
    if (function (t) {
      return "symbol" == typeof t || function (t) {
        return !!t && "object" == typeof t;
      }(t) && "[object Symbol]" == ao.call(t);
    }(t)) return NaN;
    if (fo(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = fo(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Zi, "");
    var r = eo.test(t);
    return r || ro.test(t) ? no(t.slice(2), r ? 2 : 8) : to.test(t) ? NaN : +t;
  }
  var po = function (t, e, r) {
      var n,
        i,
        o,
        s,
        a,
        c,
        l = 0,
        u = !1,
        f = !1,
        h = !0;
      if ("function" != typeof t) throw new TypeError("Expected a function");
      function d(e) {
        var r = n,
          o = i;
        return n = i = void 0, l = e, s = t.apply(o, r);
      }
      function p(t) {
        return l = t, a = setTimeout(g, e), u ? d(t) : s;
      }
      function v(t) {
        var r = t - c;
        return void 0 === c || r >= e || r < 0 || f && t - l >= o;
      }
      function g() {
        var t = uo();
        if (v(t)) return b(t);
        a = setTimeout(g, function (t) {
          var r = e - (t - c);
          return f ? lo(r, o - (t - l)) : r;
        }(t));
      }
      function b(t) {
        return a = void 0, h && n ? d(t) : (n = i = void 0, s);
      }
      function y() {
        var t = uo(),
          r = v(t);
        if (n = arguments, i = this, c = t, r) {
          if (void 0 === a) return p(c);
          if (f) return a = setTimeout(g, e), d(c);
        }
        return void 0 === a && (a = setTimeout(g, e)), s;
      }
      return e = ho(e) || 0, fo(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? co(ho(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function () {
        void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0;
      }, y.flush = function () {
        return void 0 === a ? s : b(uo());
      }, y;
    },
    vo = /^\[object .+?Constructor\]$/,
    go = "object" == typeof t && t && t.Object === Object && t,
    bo = "object" == typeof self && self && self.Object === Object && self,
    yo = go || bo || Function("return this")();
  var mo = Array.prototype,
    xo = Function.prototype,
    Eo = Object.prototype,
    wo = yo["__core-js_shared__"],
    Oo = function () {
      var t = /[^.]+$/.exec(wo && wo.keys && wo.keys.IE_PROTO || "");
      return t ? "Symbol(src)_1." + t : "";
    }(),
    So = xo.toString,
    Ao = Eo.hasOwnProperty,
    ko = Eo.toString,
    To = RegExp("^" + So.call(Ao).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    Lo = mo.splice,
    Ro = Io(yo, "Map"),
    _o = Io(Object, "create");
  function jo(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function zo(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Mo(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Co(t, e) {
    for (var r, n, i = t.length; i--;) if ((r = t[i][0]) === (n = e) || r != r && n != n) return i;
    return -1;
  }
  function No(t) {
    return !(!Bo(t) || (e = t, Oo && Oo in e)) && (function (t) {
      var e = Bo(t) ? ko.call(t) : "";
      return "[object Function]" == e || "[object GeneratorFunction]" == e;
    }(t) || function (t) {
      var e = !1;
      if (null != t && "function" != typeof t.toString) try {
        e = !!(t + "");
      } catch (t) {}
      return e;
    }(t) ? To : vo).test(function (t) {
      if (null != t) {
        try {
          return So.call(t);
        } catch (t) {}
        try {
          return t + "";
        } catch (t) {}
      }
      return "";
    }(t));
    var e;
  }
  function Wo(t, e) {
    var r,
      n,
      i = t.__data__;
    return ("string" == (n = typeof (r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map;
  }
  function Io(t, e) {
    var r = function (t, e) {
      return null == t ? void 0 : t[e];
    }(t, e);
    return No(r) ? r : void 0;
  }
  function Po(t, e) {
    if ("function" != typeof t || e && "function" != typeof e) throw new TypeError("Expected a function");
    var r = function () {
      var n = arguments,
        i = e ? e.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(i)) return o.get(i);
      var s = t.apply(this, n);
      return r.cache = o.set(i, s), s;
    };
    return r.cache = new (Po.Cache || Mo)(), r;
  }
  function Bo(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  jo.prototype.clear = function () {
    this.__data__ = _o ? _o(null) : {};
  }, jo.prototype.delete = function (t) {
    return this.has(t) && delete this.__data__[t];
  }, jo.prototype.get = function (t) {
    var e = this.__data__;
    if (_o) {
      var r = e[t];
      return "__lodash_hash_undefined__" === r ? void 0 : r;
    }
    return Ao.call(e, t) ? e[t] : void 0;
  }, jo.prototype.has = function (t) {
    var e = this.__data__;
    return _o ? void 0 !== e[t] : Ao.call(e, t);
  }, jo.prototype.set = function (t, e) {
    return this.__data__[t] = _o && void 0 === e ? "__lodash_hash_undefined__" : e, this;
  }, zo.prototype.clear = function () {
    this.__data__ = [];
  }, zo.prototype.delete = function (t) {
    var e = this.__data__,
      r = Co(e, t);
    return !(r < 0) && (r == e.length - 1 ? e.pop() : Lo.call(e, r, 1), !0);
  }, zo.prototype.get = function (t) {
    var e = this.__data__,
      r = Co(e, t);
    return r < 0 ? void 0 : e[r][1];
  }, zo.prototype.has = function (t) {
    return Co(this.__data__, t) > -1;
  }, zo.prototype.set = function (t, e) {
    var r = this.__data__,
      n = Co(r, t);
    return n < 0 ? r.push([t, e]) : r[n][1] = e, this;
  }, Mo.prototype.clear = function () {
    this.__data__ = {
      hash: new jo(),
      map: new (Ro || zo)(),
      string: new jo()
    };
  }, Mo.prototype.delete = function (t) {
    return Wo(this, t).delete(t);
  }, Mo.prototype.get = function (t) {
    return Wo(this, t).get(t);
  }, Mo.prototype.has = function (t) {
    return Wo(this, t).has(t);
  }, Mo.prototype.set = function (t, e) {
    return Wo(this, t).set(t, e), this;
  }, Po.Cache = Mo;
  var Do,
    Fo = Po,
    Vo = [],
    $o = "ResizeObserver loop completed with undelivered notifications.";
  !function (t) {
    t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
  }(Do || (Do = {}));
  var Xo,
    Ho = function (t) {
      return Object.freeze(t);
    },
    qo = function (t, e) {
      this.inlineSize = t, this.blockSize = e, Ho(this);
    },
    Yo = function () {
      function t(t, e, r, n) {
        return this.x = t, this.y = e, this.width = r, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ho(this);
      }
      return t.prototype.toJSON = function () {
        var t = this;
        return {
          x: t.x,
          y: t.y,
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          width: t.width,
          height: t.height
        };
      }, t.fromRect = function (e) {
        return new t(e.x, e.y, e.width, e.height);
      }, t;
    }(),
    Go = function (t) {
      return t instanceof SVGElement && "getBBox" in t;
    },
    Uo = function (t) {
      if (Go(t)) {
        var e = t.getBBox(),
          r = e.width,
          n = e.height;
        return !r && !n;
      }
      var i = t,
        o = i.offsetWidth,
        s = i.offsetHeight;
      return !(o || s || t.getClientRects().length);
    },
    Ko = function (t) {
      var e, r;
      if (t instanceof Element) return !0;
      var n = null === (r = null === (e = t) || void 0 === e ? void 0 : e.ownerDocument) || void 0 === r ? void 0 : r.defaultView;
      return !!(n && t instanceof n.Element);
    },
    Jo = "undefined" != typeof window ? window : {},
    Qo = new WeakMap(),
    Zo = /auto|scroll/,
    ts = /^tb|vertical/,
    es = /msie|trident/i.test(Jo.navigator && Jo.navigator.userAgent),
    rs = function (t) {
      return parseFloat(t || "0");
    },
    ns = function (t, e, r) {
      return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = !1), new qo((r ? e : t) || 0, (r ? t : e) || 0);
    },
    is = Ho({
      devicePixelContentBoxSize: ns(),
      borderBoxSize: ns(),
      contentBoxSize: ns(),
      contentRect: new Yo(0, 0, 0, 0)
    }),
    os = function (t, e) {
      if (void 0 === e && (e = !1), Qo.has(t) && !e) return Qo.get(t);
      if (Uo(t)) return Qo.set(t, is), is;
      var r = getComputedStyle(t),
        n = Go(t) && t.ownerSVGElement && t.getBBox(),
        i = !es && "border-box" === r.boxSizing,
        o = ts.test(r.writingMode || ""),
        s = !n && Zo.test(r.overflowY || ""),
        a = !n && Zo.test(r.overflowX || ""),
        c = n ? 0 : rs(r.paddingTop),
        l = n ? 0 : rs(r.paddingRight),
        u = n ? 0 : rs(r.paddingBottom),
        f = n ? 0 : rs(r.paddingLeft),
        h = n ? 0 : rs(r.borderTopWidth),
        d = n ? 0 : rs(r.borderRightWidth),
        p = n ? 0 : rs(r.borderBottomWidth),
        v = f + l,
        g = c + u,
        b = (n ? 0 : rs(r.borderLeftWidth)) + d,
        y = h + p,
        m = a ? t.offsetHeight - y - t.clientHeight : 0,
        x = s ? t.offsetWidth - b - t.clientWidth : 0,
        E = i ? v + b : 0,
        w = i ? g + y : 0,
        O = n ? n.width : rs(r.width) - E - x,
        S = n ? n.height : rs(r.height) - w - m,
        A = O + v + x + b,
        k = S + g + m + y,
        T = Ho({
          devicePixelContentBoxSize: ns(Math.round(O * devicePixelRatio), Math.round(S * devicePixelRatio), o),
          borderBoxSize: ns(A, k, o),
          contentBoxSize: ns(O, S, o),
          contentRect: new Yo(f, c, O, S)
        });
      return Qo.set(t, T), T;
    },
    ss = function (t, e, r) {
      var n = os(t, r),
        i = n.borderBoxSize,
        o = n.contentBoxSize,
        s = n.devicePixelContentBoxSize;
      switch (e) {
        case Do.DEVICE_PIXEL_CONTENT_BOX:
          return s;
        case Do.BORDER_BOX:
          return i;
        default:
          return o;
      }
    },
    as = function (t) {
      var e = os(t);
      this.target = t, this.contentRect = e.contentRect, this.borderBoxSize = Ho([e.borderBoxSize]), this.contentBoxSize = Ho([e.contentBoxSize]), this.devicePixelContentBoxSize = Ho([e.devicePixelContentBoxSize]);
    },
    cs = function (t) {
      if (Uo(t)) return 1 / 0;
      for (var e = 0, r = t.parentNode; r;) e += 1, r = r.parentNode;
      return e;
    },
    ls = function () {
      var t = 1 / 0,
        e = [];
      Vo.forEach(function (r) {
        if (0 !== r.activeTargets.length) {
          var n = [];
          r.activeTargets.forEach(function (e) {
            var r = new as(e.target),
              i = cs(e.target);
            n.push(r), e.lastReportedSize = ss(e.target, e.observedBox), i < t && (t = i);
          }), e.push(function () {
            r.callback.call(r.observer, n, r.observer);
          }), r.activeTargets.splice(0, r.activeTargets.length);
        }
      });
      for (var r = 0, n = e; r < n.length; r++) {
        (0, n[r])();
      }
      return t;
    },
    us = function (t) {
      Vo.forEach(function (e) {
        e.activeTargets.splice(0, e.activeTargets.length), e.skippedTargets.splice(0, e.skippedTargets.length), e.observationTargets.forEach(function (r) {
          r.isActive() && (cs(r.target) > t ? e.activeTargets.push(r) : e.skippedTargets.push(r));
        });
      });
    },
    fs = function () {
      var t,
        e = 0;
      for (us(e); Vo.some(function (t) {
        return t.activeTargets.length > 0;
      });) e = ls(), us(e);
      return Vo.some(function (t) {
        return t.skippedTargets.length > 0;
      }) && ("function" == typeof ErrorEvent ? t = new ErrorEvent("error", {
        message: $o
      }) : ((t = document.createEvent("Event")).initEvent("error", !1, !1), t.message = $o), window.dispatchEvent(t)), e > 0;
    },
    hs = [],
    ds = function (t) {
      if (!Xo) {
        var e = 0,
          r = document.createTextNode("");
        new MutationObserver(function () {
          return hs.splice(0).forEach(function (t) {
            return t();
          });
        }).observe(r, {
          characterData: !0
        }), Xo = function () {
          r.textContent = "" + (e ? e-- : e++);
        };
      }
      hs.push(t), Xo();
    },
    ps = 0,
    vs = {
      attributes: !0,
      characterData: !0,
      childList: !0,
      subtree: !0
    },
    gs = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
    bs = function (t) {
      return void 0 === t && (t = 0), Date.now() + t;
    },
    ys = !1,
    ms = new (function () {
      function t() {
        var t = this;
        this.stopped = !0, this.listener = function () {
          return t.schedule();
        };
      }
      return t.prototype.run = function (t) {
        var e = this;
        if (void 0 === t && (t = 250), !ys) {
          ys = !0;
          var r,
            n = bs(t);
          r = function () {
            var r = !1;
            try {
              r = fs();
            } finally {
              if (ys = !1, t = n - bs(), !ps) return;
              r ? e.run(1e3) : t > 0 ? e.run(t) : e.start();
            }
          }, ds(function () {
            requestAnimationFrame(r);
          });
        }
      }, t.prototype.schedule = function () {
        this.stop(), this.run();
      }, t.prototype.observe = function () {
        var t = this,
          e = function () {
            return t.observer && t.observer.observe(document.body, vs);
          };
        document.body ? e() : Jo.addEventListener("DOMContentLoaded", e);
      }, t.prototype.start = function () {
        var t = this;
        this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), gs.forEach(function (e) {
          return Jo.addEventListener(e, t.listener, !0);
        }));
      }, t.prototype.stop = function () {
        var t = this;
        this.stopped || (this.observer && this.observer.disconnect(), gs.forEach(function (e) {
          return Jo.removeEventListener(e, t.listener, !0);
        }), this.stopped = !0);
      }, t;
    }())(),
    xs = function (t) {
      !ps && t > 0 && ms.start(), !(ps += t) && ms.stop();
    },
    Es = function () {
      function t(t, e) {
        this.target = t, this.observedBox = e || Do.CONTENT_BOX, this.lastReportedSize = {
          inlineSize: 0,
          blockSize: 0
        };
      }
      return t.prototype.isActive = function () {
        var t,
          e = ss(this.target, this.observedBox, !0);
        return t = this.target, Go(t) || function (t) {
          switch (t.tagName) {
            case "INPUT":
              if ("image" !== t.type) break;
            case "VIDEO":
            case "AUDIO":
            case "EMBED":
            case "OBJECT":
            case "CANVAS":
            case "IFRAME":
            case "IMG":
              return !0;
          }
          return !1;
        }(t) || "inline" !== getComputedStyle(t).display || (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
      }, t;
    }(),
    ws = function (t, e) {
      this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = e;
    },
    Os = new WeakMap(),
    Ss = function (t, e) {
      for (var r = 0; r < t.length; r += 1) if (t[r].target === e) return r;
      return -1;
    },
    As = function () {
      function t() {}
      return t.connect = function (t, e) {
        var r = new ws(t, e);
        Os.set(t, r);
      }, t.observe = function (t, e, r) {
        var n = Os.get(t),
          i = 0 === n.observationTargets.length;
        Ss(n.observationTargets, e) < 0 && (i && Vo.push(n), n.observationTargets.push(new Es(e, r && r.box)), xs(1), ms.schedule());
      }, t.unobserve = function (t, e) {
        var r = Os.get(t),
          n = Ss(r.observationTargets, e),
          i = 1 === r.observationTargets.length;
        n >= 0 && (i && Vo.splice(Vo.indexOf(r), 1), r.observationTargets.splice(n, 1), xs(-1));
      }, t.disconnect = function (t) {
        var e = this,
          r = Os.get(t);
        r.observationTargets.slice().forEach(function (r) {
          return e.unobserve(t, r.target);
        }), r.activeTargets.splice(0, r.activeTargets.length);
      }, t;
    }(),
    ks = function () {
      function t(t) {
        if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        if ("function" != typeof t) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        As.connect(this, t);
      }
      return t.prototype.observe = function (t, e) {
        if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!Ko(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        As.observe(this, t, e);
      }, t.prototype.unobserve = function (t) {
        if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!Ko(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        As.unobserve(this, t);
      }, t.prototype.disconnect = function () {
        As.disconnect(this);
      }, t.toString = function () {
        return "function ResizeObserver () { [polyfill code] }";
      }, t;
    }(),
    Ts = o.TypeError,
    Ls = function (t) {
      return function (e, r, n, i) {
        lt(r);
        var o = x(e),
          s = ce(o),
          a = ve(o),
          c = t ? a - 1 : 0,
          l = t ? -1 : 1;
        if (n < 2) for (;;) {
          if (c in s) {
            i = s[c], c += l;
            break;
          }
          if (c += l, t ? c < 0 : a <= c) throw Ts("Reduce of empty array with no initial value");
        }
        for (; t ? c >= 0 : a > c; c += l) c in s && (i = r(i, s[c], c, o));
        return i;
      };
    },
    Rs = {
      left: Ls(!1),
      right: Ls(!0)
    },
    _s = "process" == Gt(o.process),
    js = Rs.left,
    zs = ze("reduce");
  hr({
    target: "Array",
    proto: !0,
    forced: !zs || !_s && N > 79 && N < 83
  }, {
    reduce: function (t) {
      var e = arguments.length;
      return js(this, t, e, e > 1 ? arguments[1] : void 0);
    }
  });
  var Ms,
    Cs,
    Ns = function () {
      var t = tt(this),
        e = "";
      return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
    },
    Ws = o.RegExp,
    Is = u(function () {
      var t = Ws("a", "y");
      return t.lastIndex = 2, null != t.exec("abcd");
    }),
    Ps = Is || u(function () {
      return !Ws("a", "y").sticky;
    }),
    Bs = {
      BROKEN_CARET: Is || u(function () {
        var t = Ws("^r", "gy");
        return t.lastIndex = 2, null != t.exec("str");
      }),
      MISSED_STICKY: Ps,
      UNSUPPORTED_Y: Is
    },
    Ds = o.RegExp,
    Fs = u(function () {
      var t = Ds(".", "s");
      return !(t.dotAll && t.exec("\n") && "s" === t.flags);
    }),
    Vs = o.RegExp,
    $s = u(function () {
      var t = Vs("(?<a>b)", "g");
      return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
    }),
    Xs = $t.get,
    Hs = l("native-string-replace", String.prototype.replace),
    qs = RegExp.prototype.exec,
    Ys = qs,
    Gs = g("".charAt),
    Us = g("".indexOf),
    Ks = g("".replace),
    Js = g("".slice),
    Qs = (Cs = /b*/g, rt(qs, Ms = /a/, "a"), rt(qs, Cs, "a"), 0 !== Ms.lastIndex || 0 !== Cs.lastIndex),
    Zs = Bs.BROKEN_CARET,
    ta = void 0 !== /()??/.exec("")[1];
  (Qs || ta || Zs || Fs || $s) && (Ys = function (t) {
    var e,
      r,
      n,
      i,
      o,
      s,
      a,
      c = this,
      l = Xs(c),
      u = pr(t),
      f = l.raw;
    if (f) return f.lastIndex = c.lastIndex, e = rt(Ys, f, u), c.lastIndex = f.lastIndex, e;
    var h = l.groups,
      d = Zs && c.sticky,
      p = rt(Ns, c),
      v = c.source,
      g = 0,
      b = u;
    if (d && (p = Ks(p, "y", ""), -1 === Us(p, "g") && (p += "g"), b = Js(u, c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== Gs(u, c.lastIndex - 1)) && (v = "(?: " + v + ")", b = " " + b, g++), r = new RegExp("^(?:" + v + ")", p)), ta && (r = new RegExp("^" + v + "$(?!\\s)", p)), Qs && (n = c.lastIndex), i = rt(qs, d ? r : c, b), d ? i ? (i.input = Js(i.input, g), i[0] = Js(i[0], g), i.index = c.lastIndex, c.lastIndex += i[0].length) : c.lastIndex = 0 : Qs && i && (c.lastIndex = c.global ? i.index + i[0].length : n), ta && i && i.length > 1 && rt(Hs, i[0], r, function () {
      for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (i[o] = void 0);
    }), i && h) for (i.groups = s = Hr(null), o = 0; o < h.length; o++) s[(a = h[o])[0]] = i[a[1]];
    return i;
  });
  var ea = Ys;
  hr({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== ea
  }, {
    exec: ea
  });
  var ra = V("species"),
    na = RegExp.prototype,
    ia = function (t, e, r, n) {
      var i = V(t),
        o = !u(function () {
          var e = {};
          return e[i] = function () {
            return 7;
          }, 7 != ""[t](e);
        }),
        s = o && !u(function () {
          var e = !1,
            r = /a/;
          return "split" === t && ((r = {}).constructor = {}, r.constructor[ra] = function () {
            return r;
          }, r.flags = "", r[i] = /./[i]), r.exec = function () {
            return e = !0, null;
          }, r[i](""), !e;
        });
      if (!o || !s || r) {
        var a = g(/./[i]),
          c = e(i, ""[t], function (t, e, r, n, i) {
            var s = g(t),
              c = e.exec;
            return c === ea || c === na.exec ? o && !i ? {
              done: !0,
              value: a(e, r, n)
            } : {
              done: !0,
              value: s(r, e, n)
            } : {
              done: !1
            };
          });
        Ht(String.prototype, t, c[0]), Ht(na, i, c[1]);
      }
      n && Et(na[i], "sham", !0);
    },
    oa = Mn.charAt,
    sa = function (t, e, r) {
      return e + (r ? oa(t, e).length : 1);
    },
    aa = o.TypeError,
    ca = function (t, e) {
      var r = t.exec;
      if (T(r)) {
        var n = rt(r, t, e);
        return null !== n && tt(n), n;
      }
      if ("RegExp" === Gt(t)) return rt(ea, t, e);
      throw aa("RegExp#exec called on incompatible receiver");
    };
  ia("match", function (t, e, r) {
    return [function (e) {
      var r = y(this),
        n = null == e ? void 0 : ut(e, t);
      return n ? rt(n, e, r) : new RegExp(e)[t](pr(r));
    }, function (t) {
      var n = tt(this),
        i = pr(t),
        o = r(e, n, i);
      if (o.done) return o.value;
      if (!n.global) return ca(n, i);
      var s = n.unicode;
      n.lastIndex = 0;
      for (var a, c = [], l = 0; null !== (a = ca(n, i));) {
        var u = pr(a[0]);
        c[l] = u, "" === u && (n.lastIndex = sa(i, pe(n.lastIndex), s)), l++;
      }
      return 0 === l ? null : c;
    }];
  });
  var la = At.EXISTS,
    ua = mt.f,
    fa = Function.prototype,
    ha = g(fa.toString),
    da = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
    pa = g(da.exec);
  H && !la && ua(fa, "name", {
    configurable: !0,
    get: function () {
      try {
        return pa(da, ha(this))[1];
      } catch (t) {
        return "";
      }
    }
  });
  var va = Function.prototype,
    ga = va.apply,
    ba = va.call,
    ya = "object" == typeof Reflect && Reflect.apply || (f ? ba.bind(ga) : function () {
      return ba.apply(ga, arguments);
    }),
    ma = Math.floor,
    xa = g("".charAt),
    Ea = g("".replace),
    wa = g("".slice),
    Oa = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    Sa = /\$([$&'`]|\d{1,2})/g,
    Aa = function (t, e, r, n, i, o) {
      var s = r + t.length,
        a = n.length,
        c = Sa;
      return void 0 !== i && (i = x(i), c = Oa), Ea(o, c, function (o, c) {
        var l;
        switch (xa(c, 0)) {
          case "$":
            return "$";
          case "&":
            return t;
          case "`":
            return wa(e, 0, r);
          case "'":
            return wa(e, s);
          case "<":
            l = i[wa(c, 1, -1)];
            break;
          default:
            var u = +c;
            if (0 === u) return o;
            if (u > a) {
              var f = ma(u / 10);
              return 0 === f ? o : f <= a ? void 0 === n[f - 1] ? xa(c, 1) : n[f - 1] + xa(c, 1) : o;
            }
            l = n[u - 1];
        }
        return void 0 === l ? "" : l;
      });
    },
    ka = V("replace"),
    Ta = Math.max,
    La = Math.min,
    Ra = g([].concat),
    _a = g([].push),
    ja = g("".indexOf),
    za = g("".slice),
    Ma = "$0" === "a".replace(/./, "$0"),
    Ca = !!/./[ka] && "" === /./[ka]("a", "$0");
  ia("replace", function (t, e, r) {
    var n = Ca ? "$" : "$0";
    return [function (t, r) {
      var n = y(this),
        i = null == t ? void 0 : ut(t, ka);
      return i ? rt(i, t, n, r) : rt(e, pr(n), t, r);
    }, function (t, i) {
      var o = tt(this),
        s = pr(t);
      if ("string" == typeof i && -1 === ja(i, n) && -1 === ja(i, "$<")) {
        var a = r(e, o, s, i);
        if (a.done) return a.value;
      }
      var c = T(i);
      c || (i = pr(i));
      var l = o.global;
      if (l) {
        var u = o.unicode;
        o.lastIndex = 0;
      }
      for (var f = [];;) {
        var h = ca(o, s);
        if (null === h) break;
        if (_a(f, h), !l) break;
        "" === pr(h[0]) && (o.lastIndex = sa(s, pe(o.lastIndex), u));
      }
      for (var d, p = "", v = 0, g = 0; g < f.length; g++) {
        for (var b = pr((h = f[g])[0]), y = Ta(La(he(h.index), s.length), 0), m = [], x = 1; x < h.length; x++) _a(m, void 0 === (d = h[x]) ? d : String(d));
        var E = h.groups;
        if (c) {
          var w = Ra([b], m, y, s);
          void 0 !== E && _a(w, E);
          var O = pr(ya(i, void 0, w));
        } else O = Aa(b, s, y, m, E, i);
        y >= v && (p += za(s, v, y) + O, v = y + b.length);
      }
      return p + za(s, v);
    }];
  }, !!u(function () {
    var t = /./;
    return t.exec = function () {
      var t = [];
      return t.groups = {
        a: "7"
      }, t;
    }, "7" !== "".replace(t, "$<a>");
  }) || !Ma || Ca);
  var Na = function (t) {
    return Array.prototype.reduce.call(t, function (t, e) {
      var r = e.name.match(/data-simplebar-(.+)/);
      if (r) {
        var n = r[1].replace(/\W+(.)/g, function (t, e) {
          return e.toUpperCase();
        });
        switch (e.value) {
          case "true":
            t[n] = !0;
            break;
          case "false":
            t[n] = !1;
            break;
          case void 0:
            t[n] = !0;
            break;
          default:
            t[n] = e.value;
        }
      }
      return t;
    }, {});
  };
  function Wa(t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window;
  }
  function Ia(t) {
    return t && t.ownerDocument ? t.ownerDocument : document;
  }
  var Pa = null,
    Ba = null;
  function Da(t) {
    if (null === Pa) {
      var e = Ia(t);
      if (void 0 === e) return Pa = 0;
      var r = e.body,
        n = e.createElement("div");
      n.classList.add("simplebar-hide-scrollbar"), r.appendChild(n);
      var i = n.getBoundingClientRect().right;
      r.removeChild(n), Pa = i;
    }
    return Pa;
  }
  Ie && window.addEventListener("resize", function () {
    Ba !== window.devicePixelRatio && (Ba = window.devicePixelRatio, Pa = null);
  });
  var Fa = function () {
    function t(e, r) {
      var n = this;
      this.onScroll = function () {
        var t = Wa(n.el);
        n.scrollXTicking || (t.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (t.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0);
      }, this.scrollX = function () {
        n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), n.scrollXTicking = !1;
      }, this.scrollY = function () {
        n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), n.scrollYTicking = !1;
      }, this.onMouseEnter = function () {
        n.showScrollbar("x"), n.showScrollbar("y");
      }, this.onMouseMove = function (t) {
        n.mouseX = t.clientX, n.mouseY = t.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y");
      }, this.onMouseLeave = function () {
        n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1;
      }, this.onWindowResize = function () {
        n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar();
      }, this.hideScrollbars = function () {
        n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), n.axis.y.isVisible = !1), n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), n.axis.x.isVisible = !1);
      }, this.onPointerEvent = function (t) {
        var e, r;
        n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (e = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (r = n.isWithinBounds(n.axis.y.track.rect)), (e || r) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(t, "x") : n.onTrackClick(t, "x")), r && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(t, "y") : n.onTrackClick(t, "y"))));
      }, this.drag = function (e) {
        var r = n.axis[n.draggedAxis].track,
          i = r.rect[n.axis[n.draggedAxis].sizeAttr],
          o = n.axis[n.draggedAxis].scrollbar,
          s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
          a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
        e.preventDefault(), e.stopPropagation();
        var c = (("y" === n.draggedAxis ? e.pageY : e.pageX) - r.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / (i - o.size) * (s - a);
        "x" === n.draggedAxis && (c = n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c - (i + o.size) : c, c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c;
      }, this.onEndDrag = function (t) {
        var e = Ia(n.el),
          r = Wa(n.el);
        t.preventDefault(), t.stopPropagation(), n.el.classList.remove(n.classNames.dragging), e.removeEventListener("mousemove", n.drag, !0), e.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = r.setTimeout(function () {
          e.removeEventListener("click", n.preventClick, !0), e.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null;
        });
      }, this.preventClick = function (t) {
        t.preventDefault(), t.stopPropagation();
      }, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, r), this.classNames = Object.assign({}, t.defaultOptions.classNames, this.options.classNames), this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetSizeAttr: "offsetWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: !0,
          isVisible: !1,
          forceVisible: !1,
          track: {},
          scrollbar: {}
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetSizeAttr: "offsetHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: !0,
          isVisible: !1,
          forceVisible: !1,
          track: {},
          scrollbar: {}
        }
      }, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = Qi(this.recalculate.bind(this), 64), this.onMouseMove = Qi(this.onMouseMove.bind(this), 64), this.hideScrollbars = po(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = po(this.onWindowResize.bind(this), 64, {
        leading: !0
      }), t.getRtlHelpers = Fo(t.getRtlHelpers), this.init());
    }
    t.getRtlHelpers = function () {
      var e = document.createElement("div");
      e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
      var r = e.firstElementChild;
      document.body.appendChild(r);
      var n = r.firstElementChild;
      r.scrollLeft = 0;
      var i = t.getOffset(r),
        o = t.getOffset(n);
      r.scrollLeft = 999;
      var s = t.getOffset(n);
      return {
        isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
        isRtlScrollbarInverted: i.left !== o.left
      };
    }, t.getOffset = function (t) {
      var e = t.getBoundingClientRect(),
        r = Ia(t),
        n = Wa(t);
      return {
        top: e.top + (n.pageYOffset || r.documentElement.scrollTop),
        left: e.left + (n.pageXOffset || r.documentElement.scrollLeft)
      };
    };
    var e = t.prototype;
    return e.init = function () {
      t.instances.set(this.el, this), Ie && (this.initDOM(), this.setAccessibilityAttributes(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners());
    }, e.initDOM = function () {
      var t = this;
      if (Array.prototype.filter.call(this.el.children, function (e) {
        return e.classList.contains(t.classNames.wrapper);
      }).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);else {
        for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
        this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl);
      }
      if (!this.axis.x.track.el || !this.axis.y.track.el) {
        var e = document.createElement("div"),
          r = document.createElement("div");
        e.classList.add(this.classNames.track), r.classList.add(this.classNames.scrollbar), e.appendChild(r), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el);
      }
      this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init");
    }, e.setAccessibilityAttributes = function () {
      var t = this.options.ariaLabel || "scrollable content";
      this.contentWrapperEl.setAttribute("tabindex", "0"), this.contentWrapperEl.setAttribute("role", "region"), this.contentWrapperEl.setAttribute("aria-label", t);
    }, e.initListeners = function () {
      var t = this,
        e = Wa(this.el);
      this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function (e) {
        t.el.addEventListener(e, t.onPointerEvent, !0);
      }), ["touchstart", "touchend", "touchmove"].forEach(function (e) {
        t.el.addEventListener(e, t.onPointerEvent, {
          capture: !0,
          passive: !0
        });
      }), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onWindowResize);
      var r = !1,
        n = null,
        i = e.ResizeObserver || ks;
      this.resizeObserver = new i(function () {
        r && null === n && (n = e.requestAnimationFrame(function () {
          t.recalculate(), n = null;
        }));
      }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e.requestAnimationFrame(function () {
        r = !0;
      }), this.mutationObserver = new e.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    }, e.recalculate = function () {
      var t = Wa(this.el);
      this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
      var e = this.heightAutoObserverEl.offsetHeight <= 1,
        r = this.heightAutoObserverEl.offsetWidth <= 1,
        n = this.contentEl.offsetWidth,
        i = this.contentWrapperEl.offsetWidth,
        o = this.elStyles.overflowX,
        s = this.elStyles.overflowY;
      this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
      var a = this.contentEl.scrollHeight,
        c = this.contentEl.scrollWidth;
      this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = r ? n + "px" : "auto", this.placeholderEl.style.height = a + "px";
      var l = this.contentWrapperEl.offsetHeight;
      this.axis.x.isOverflowing = c > n, this.axis.y.isOverflowing = a > l, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
      var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
        f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
      this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y");
    }, e.getScrollbarSize = function (t) {
      if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0;
      var e,
        r = this.contentEl[this.axis[t].scrollSizeAttr],
        n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
        i = n / r;
      return e = Math.max(~~(i * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e;
    }, e.positionScrollbar = function (e) {
      if (void 0 === e && (e = "y"), this.axis[e].isOverflowing) {
        var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
          n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
          i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
          o = this.axis[e].scrollbar,
          s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
          a = (s = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -s : s) / (r - i),
          c = ~~((n - o.size) * a);
        c = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c + (n - o.size) : c, o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)";
      }
    }, e.toggleTrackVisibility = function (t) {
      void 0 === t && (t = "y");
      var e = this.axis[t].track.el,
        r = this.axis[t].scrollbar.el;
      this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? r.style.display = "block" : r.style.display = "none";
    }, e.hideNativeScrollbar = function () {
      this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
    }, e.onMouseMoveForAxis = function (t) {
      void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover);
    }, e.onMouseLeaveForAxis = function (t) {
      void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover);
    }, e.showScrollbar = function (t) {
      void 0 === t && (t = "y");
      var e = this.axis[t].scrollbar.el;
      this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars();
    }, e.onDragStart = function (t, e) {
      void 0 === e && (e = "y");
      var r = Ia(this.el),
        n = Wa(this.el),
        i = this.axis[e].scrollbar,
        o = "y" === e ? t.pageY : t.pageX;
      this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), r.addEventListener("mousemove", this.drag, !0), r.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (r.addEventListener("click", this.preventClick, !0), r.addEventListener("dblclick", this.preventClick, !0)) : (n.clearTimeout(this.removePreventClickId), this.removePreventClickId = null);
    }, e.onTrackClick = function (t, e) {
      var r = this;
      if (void 0 === e && (e = "y"), this.options.clickOnTrack) {
        var n = Wa(this.el);
        this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
        var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
          o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
          s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
          a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
          c = -1 === a ? s - o : s + o;
        !function t() {
          var i, o;
          -1 === a ? s > c && (s -= r.options.clickOnTrackSpeed, r.contentWrapperEl.scrollTo(((i = {})[r.axis[e].offsetAttr] = s, i)), n.requestAnimationFrame(t)) : s < c && (s += r.options.clickOnTrackSpeed, r.contentWrapperEl.scrollTo(((o = {})[r.axis[e].offsetAttr] = s, o)), n.requestAnimationFrame(t));
        }();
      }
    }, e.getContentElement = function () {
      return this.contentEl;
    }, e.getScrollElement = function () {
      return this.contentWrapperEl;
    }, e.getScrollbarWidth = function () {
      try {
        return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : Da(this.el);
      } catch (t) {
        return Da(this.el);
      }
    }, e.removeListeners = function () {
      var t = this,
        e = Wa(this.el);
      this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function (e) {
        t.el.removeEventListener(e, t.onPointerEvent, !0);
      }), ["touchstart", "touchend", "touchmove"].forEach(function (e) {
        t.el.removeEventListener(e, t.onPointerEvent, {
          capture: !0,
          passive: !0
        });
      }), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel();
    }, e.unMount = function () {
      this.removeListeners(), t.instances.delete(this.el);
    }, e.isWithinBounds = function (t) {
      return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height;
    }, e.findChild = function (t, e) {
      var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      return Array.prototype.filter.call(t.children, function (t) {
        return r.call(t, e);
      })[0];
    }, t;
  }();
  return Fa.defaultOptions = {
    autoHide: !0,
    forceVisible: !1,
    clickOnTrack: !0,
    clickOnTrackSpeed: 40,
    classNames: {
      contentEl: "simplebar-content",
      contentWrapper: "simplebar-content-wrapper",
      offset: "simplebar-offset",
      mask: "simplebar-mask",
      wrapper: "simplebar-wrapper",
      placeholder: "simplebar-placeholder",
      scrollbar: "simplebar-scrollbar",
      track: "simplebar-track",
      heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
      heightAutoObserverEl: "simplebar-height-auto-observer",
      visible: "simplebar-visible",
      horizontal: "simplebar-horizontal",
      vertical: "simplebar-vertical",
      hover: "simplebar-hover",
      dragging: "simplebar-dragging"
    },
    scrollbarMinSize: 25,
    scrollbarMaxSize: 0,
    timeout: 1e3
  }, Fa.instances = new WeakMap(), Fa.initDOMLoadedElements = function () {
    document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function (t) {
      "init" === t.getAttribute("data-simplebar") || Fa.instances.has(t) || new Fa(t, Na(t.attributes));
    });
  }, Fa.removeObserver = function () {
    this.globalObserver.disconnect();
  }, Fa.initHtmlApi = function () {
    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Fa.handleMutations), this.globalObserver.observe(document, {
      childList: !0,
      subtree: !0
    })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements));
  }, Fa.handleMutations = function (t) {
    t.forEach(function (t) {
      Array.prototype.forEach.call(t.addedNodes, function (t) {
        1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !Fa.instances.has(t) && document.documentElement.contains(t) && new Fa(t, Na(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), function (t) {
          "init" !== t.getAttribute("data-simplebar") && !Fa.instances.has(t) && document.documentElement.contains(t) && new Fa(t, Na(t.attributes));
        }));
      }), Array.prototype.forEach.call(t.removedNodes, function (t) {
        1 === t.nodeType && ("init" === t.getAttribute("data-simplebar") ? Fa.instances.has(t) && !document.documentElement.contains(t) && Fa.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), function (t) {
          Fa.instances.has(t) && !document.documentElement.contains(t) && Fa.instances.get(t).unMount();
        }));
      });
    });
  }, Fa.getOptions = Na, Ie && Fa.initHtmlApi(), Fa;
});

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);
const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});

/***/ }),

/***/ "./js/sliderDrag.js":
/*!**************************!*\
  !*** ./js/sliderDrag.js ***!
  \**************************/
/***/ (() => {

//Галерея самокатов 

function init() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    const SegwayClassName = 'slider';
    const SegwayLineClassName = 'slider__line';
    const SegwaySlideClassName = 'slider__segway';
    const SegwayDraggableClassName = 'slider__draggable';
    class Gallery {
      constructor(element, options = {}) {
        this.containerNode = element;
        this.size = element.childElementCount;
        this.currentSlide = 0;
        this.currentSlideWasChanget = false;
        this.manageHTML = this.manageHTML.bind(this);
        this.setParameters = this.setParameters.bind(this);
        this.setEvents = this.setEvents.bind(this);
        this.resizeGallery = this.resizeGallery.bind(this);
        this.startDrag = this.startDrag.bind(this);
        this.stopDrag = this.stopDrag.bind(this);
        this.dragging = this.dragging.bind(this);
        this.setStylePosition = this.setStylePosition.bind(this);
        this.settings = {
          margin: options.margin || 0
        };
        this.manageHTML();
        this.setParameters();
        this.setEvents();
      }
      manageHTML() {
        this.containerNode.classList.add(SegwayClassName);
        this.containerNode.innerHTML = `
                    <div class="${SegwayLineClassName}">
                        ${this.containerNode.innerHTML}
                    </div>
                `;
        this.lineNode = this.containerNode.querySelector(`.${SegwayLineClassName}`);
        this.slideNodes = Array.from(this.lineNode.children).map(childNode => wrapElementByDiv({
          element: childNode,
          className: SegwaySlideClassName
        }));
      }
      setParameters() {
        const coordsContainer = this.containerNode.getBoundingClientRect();
        this.width = coordsContainer.width;
        this.x = -this.currentSlide * (this.width + this.settings.margin);
        this.maximumX = -this.size * (this.width + this.settings.margin);
        this.resetStyleTransition();
        this.lineNode.style.width = `${this.size * (this.width + this.settings.margin)}px`;
        this.setStylePosition();
        Array.from(this.slideNodes).forEach(slideNode => {
          slideNode.style.width = `${this.width}px`;
          slideNode.style.marginRight = `${this.settings.margin}px`;
        });
      }
      setEvents() {
        this.debouncedResizeGallery = debounce(this.resizeGallery);
        window.addEventListener('resize', this.debouncedResizeGallery);
        this.lineNode.addEventListener('pointerdown', this.startDrag);
        window.addEventListener('pointerup', this.stopDrag);
        window.addEventListener('pointercancel', this.stopDrag);
      }
      destroyEvents() {
        window.removeEventListener('resize', this.debouncedResizeGallery);
        this.lineNode.removeEventListener('pointerdown', this.startDrag);
        window.removeEventListener('pointerup', this.stopDrag);
        window.removeEventListener('pointercancel', this.stopDrag);
      }
      resizeGallery() {
        this.setParameters();
      }
      startDrag(evt) {
        this.currentSlideWasChanget = false;
        this.clickX = evt.pageX;
        this.startX = this.x;
        window.addEventListener('pointermove', this.dragging);
        this.resetStyleTransition();
        this.containerNode.classList.add(SegwayDraggableClassName);
      }
      stopDrag() {
        window.removeEventListener('pointermove', this.dragging);
        this.x = -this.currentSlide * (this.width + this.settings.margin);
        this.containerNode.classList.remove(SegwayDraggableClassName);
        this.setStylePosition();
        this.setStyleTransition();
      }
      dragging(evt) {
        this.dragX = evt.pageX;
        const dragShift = this.dragX - this.clickX;
        const easing = dragShift / 5;
        this.x = Math.max(Math.min(this.startX + dragShift, easing), this.maximumX + easing);
        this.setStylePosition();
        if (dragShift > 20 && dragShift > 0 && !this.currentSlideWasChanget && this.currentSlide > 0) {
          this.currentSlideWasChanget = true;
          this.currentSlide = this.currentSlide - 1;
        }
        if (dragShift < -20 && dragShift < 0 && !this.currentSlideWasChanget && this.currentSlide < this.size - 1) {
          this.currentSlideWasChanget = true;
          this.currentSlide = this.currentSlide + 1;
        }
      }
      setStylePosition() {
        this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)`;
      }
      setStyleTransition() {
        this.lineNode.style.transition = `all 0.4s ease 0s`;
      }
      resetStyleTransition() {
        this.lineNode.style.transition = `all 0s ease 0s`;
      }
    }
    function wrapElementByDiv({
      element,
      className
    }) {
      const wrapperNode = document.createElement('div');
      wrapperNode.classList.add(className);
      element.parentNode.insertBefore(wrapperNode, element);
      wrapperNode.appendChild(element);
      return wrapperNode;
    }
    function debounce(func, time = 100) {
      let timer;
      return function (event) {
        clearTimeout(time);
        time = setTimeout(func, time, event);
      };
    }
    new Gallery(document.getElementById('slider-2'), {
      margin: 10
    });
  }
  if (window.matchMedia("(max-width: 420px)").matches) {
    const SegwayClassName = 'slider';
    const SegwayLineClassName = 'slider__line';
    const SegwaySlideClassName = 'slider__segway';
    const SegwayDraggableClassName = 'slider__draggable';
    class Gallery {
      constructor(element, options = {}) {
        this.containerNode = element;
        this.size = element.childElementCount;
        this.currentSlide = 0;
        this.currentSlideWasChanget = false;
        this.manageHTML = this.manageHTML.bind(this);
        this.setParameters = this.setParameters.bind(this);
        this.setEvents = this.setEvents.bind(this);
        this.resizeGallery = this.resizeGallery.bind(this);
        this.startDrag = this.startDrag.bind(this);
        this.stopDrag = this.stopDrag.bind(this);
        this.dragging = this.dragging.bind(this);
        this.setStylePosition = this.setStylePosition.bind(this);
        this.settings = {
          margin: options.margin || 0
        };
        this.manageHTML();
        this.setParameters();
        this.setEvents();
      }
      manageHTML() {
        this.containerNode.classList.add(SegwayClassName);
        this.containerNode.innerHTML = `
                    <div class="${SegwayLineClassName}">
                        ${this.containerNode.innerHTML}
                    </div>
                `;
        this.lineNode = this.containerNode.querySelector(`.${SegwayLineClassName}`);
        this.slideNodes = Array.from(this.lineNode.children).map(childNode => wrapElementByDiv({
          element: childNode,
          className: SegwaySlideClassName
        }));
      }
      setParameters() {
        const coordsContainer = this.containerNode.getBoundingClientRect();
        this.width = coordsContainer.width;
        this.x = -this.currentSlide * (this.width + this.settings.margin);
        this.maximumX = -this.size * (this.width + this.settings.margin);
        this.resetStyleTransition();
        this.lineNode.style.width = `${this.size * (this.width + this.settings.margin)}px`;
        this.setStylePosition();
        Array.from(this.slideNodes).forEach(slideNode => {
          slideNode.style.width = `${this.width}px`;
          slideNode.style.marginRight = `${this.settings.margin}px`;
        });
      }
      setEvents() {
        this.debouncedResizeGallery = debounce(this.resizeGallery);
        window.addEventListener('resize', this.debouncedResizeGallery);
        this.lineNode.addEventListener('pointerdown', this.startDrag);
        window.addEventListener('pointerup', this.stopDrag);
        window.addEventListener('pointercancel', this.stopDrag);
      }
      destroyEvents() {
        window.removeEventListener('resize', this.debouncedResizeGallery);
        this.lineNode.removeEventListener('pointerdown', this.startDrag);
        window.removeEventListener('pointerup', this.stopDrag);
        window.removeEventListener('pointercancel', this.stopDrag);
      }
      resizeGallery() {
        this.setParameters();
      }
      startDrag(evt) {
        this.currentSlideWasChanget = false;
        this.clickX = evt.pageX;
        this.startX = this.x;
        window.addEventListener('pointermove', this.dragging);
        this.resetStyleTransition();
        this.containerNode.classList.add(SegwayDraggableClassName);
      }
      stopDrag() {
        window.removeEventListener('pointermove', this.dragging);
        this.x = -this.currentSlide * (this.width + this.settings.margin);
        this.containerNode.classList.remove(SegwayDraggableClassName);
        this.setStylePosition();
        this.setStyleTransition();
      }
      dragging(evt) {
        this.dragX = evt.pageX;
        const dragShift = this.dragX - this.clickX;
        const easing = dragShift / 5;
        this.x = Math.max(Math.min(this.startX + dragShift, easing), this.maximumX + easing);
        this.setStylePosition();
        if (dragShift > 20 && dragShift > 0 && !this.currentSlideWasChanget && this.currentSlide > 0) {
          this.currentSlideWasChanget = true;
          this.currentSlide = this.currentSlide - 1;
        }
        if (dragShift < -20 && dragShift < 0 && !this.currentSlideWasChanget && this.currentSlide < this.size - 1) {
          this.currentSlideWasChanget = true;
          this.currentSlide = this.currentSlide + 1;
        }
      }
      setStylePosition() {
        this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)`;
      }
      setStyleTransition() {
        this.lineNode.style.transition = `all 0.4s ease 0s`;
      }
      resetStyleTransition() {
        this.lineNode.style.transition = `all 0s ease 0s`;
      }
    }
    function wrapElementByDiv({
      element,
      className
    }) {
      const wrapperNode = document.createElement('div');
      wrapperNode.classList.add(className);
      element.parentNode.insertBefore(wrapperNode, element);
      wrapperNode.appendChild(element);
      return wrapperNode;
    }
    function debounce(func, time = 100) {
      let timer;
      return function (event) {
        clearTimeout(time);
        time = setTimeout(func, time, event);
      };
    }
    new Gallery(document.getElementById('slider-3'), {
      margin: 10
    });
  }
}
init();
document.addEventListener('resize', init);

/***/ }),

/***/ "./js/sliderHeaderSegway.js":
/*!**********************************!*\
  !*** ./js/sliderHeaderSegway.js ***!
  \**********************************/
/***/ (() => {

function init() {
  if (window.matchMedia("(max-width: 992px)").matches) {
    const images = document.querySelectorAll('.header .bottom__header .slider .slider__wrapper .segway');
    const sliderLineSegway = document.querySelector('.header .slider__wrapper');
    let count = 0;
    let width;
    function init() {
      width = document.querySelector('.header .slider').offsetWidth;
      sliderLineSegway.style.width = width * images.length / 6 + 'px';
      images.forEach(item => {
        item.style.width = width + 'px';
      });
      rollSlider();
    }
    init();
    window.addEventListener('resize', init);
    document.querySelector('.header .arrow__slider .button__right').addEventListener('click', function () {
      count++;
      if (count >= images.length - 5) {
        count = 0;
      }
      rollSlider();
    });
    document.querySelector('header .arrow__slider .button__left').addEventListener('click', function () {
      count--;
      if (count < 0) {
        count = images.length - 6;
      }
      rollSlider();
    });
    function rollSlider() {
      sliderLineSegway.style.transform = 'translate(-' + count * width / 6 + 'px)';
    }
  }
  if (window.matchMedia("(max-width: 420px)").matches) {
    const images = document.querySelectorAll('.header .bottom__header .slider .slider__wrapper .segway');
    const sliderLineSegway = document.querySelector('.header .slider__wrapper');
    let count = 0;
    let width;
    function init() {
      width = document.querySelector('.header .slider').offsetWidth;
      sliderLineSegway.style.width = width * images.length / 4 + 'px';
      images.forEach(item => {
        item.style.width = width + 'px';
      });
      rollSlider();
    }
    init();
    window.addEventListener('resize', init);
    document.querySelector('.header .arrow__slider .button__right').addEventListener('click', function () {
      count++;
      if (count >= images.length - 4) {
        count = 0;
      }
      rollSlider();
    });
    document.querySelector('header .arrow__slider .button__left').addEventListener('click', function () {
      count--;
      if (count < 0) {
        count = images.length - 5;
      }
      rollSlider();
    });
    function rollSlider() {
      sliderLineSegway.style.transform = 'translate(-' + count * width / 4 + 'px)';
    }
  }
}
init();
window.addEventListener('resize', init);

/***/ }),

/***/ "./js/sliderReviews.js":
/*!*****************************!*\
  !*** ./js/sliderReviews.js ***!
  \*****************************/
/***/ (() => {

function initReviews() {
  if (window.matchMedia("(max-width: 4000px)").matches) {
    let offset = 0;
    let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function () {
      offset -= 840;
      if (offset < 0) {
        offset = 2520;
      }
      sliderLine.style.left = -offset + 'px';
    });
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function () {
      offset += 840;
      if (offset > 2520) {
        offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
    });
  }
  if (window.matchMedia("(max-width: 1400px)").matches) {
    let offset = 0;
    let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function () {
      offset -= 780;
      if (offset < 0) {
        offset = 2340;
      }
      sliderLine.style.left = -offset + 'px';
    });
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function () {
      offset += 780;
      if (offset > 2340) {
        offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
    });
  }
  if (window.matchMedia("(max-width: 1200px)").matches) {
    let offset = 0;
    let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function () {
      offset -= 680;
      if (offset < 0) {
        offset = 3400;
      }
      sliderLine.style.left = -offset + 'px';
    });
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function () {
      offset += 680;
      if (offset > 3400) {
        offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
    });
  }
  if (window.matchMedia("(max-width: 992px)").matches) {
    let offset = 0;
    let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function () {
      offset -= 510;
      if (offset < 0) {
        offset = 2550;
      }
      sliderLine.style.left = -offset + 'px';
    });
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function () {
      offset += 510;
      if (offset > 2550) {
        offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
    });
  }
  if (window.matchMedia("(max-width: 768px)").matches) {
    let offset = 0;
    let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function () {
      offset -= 380;
      if (offset < 0) {
        offset = 1900;
      }
      sliderLine.style.left = -offset + 'px';
    });
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function () {
      offset += 380;
      if (offset > 1900) {
        offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
    });
  }
  if (window.matchMedia("(max-width: 576px)").matches) {
    let offset = 0;
    let sliderLine = document.querySelector('.section:nth-child(17) .slider__reviews');
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__next').addEventListener('click', function () {
      offset -= 380;
      if (offset < 0) {
        offset = 1900;
      }
      sliderLine.style.left = -offset + 'px';
    });
    document.querySelector('.section:nth-child(17) .section__arrow .arrow__prev').addEventListener('click', function () {
      offset += 380;
      if (offset > 1900) {
        offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
    });
  }
}
initReviews();
window.addEventListener('resize', initReviews);

/***/ }),

/***/ "./js/sliderSegway.js":
/*!****************************!*\
  !*** ./js/sliderSegway.js ***!
  \****************************/
/***/ (() => {

function sliderInit() {
  if (true) {
    let sliderSegway = document.querySelector('.section:nth-child(16) .container__segway .slider:nth-child(1) .slider__line');
    let offsetSegway = 0;
    document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__next').addEventListener('click', function () {
      offsetSegway -= 300;
      if (offsetSegway < 0) {
        offsetSegway = 2400;
      }
      sliderSegway.style.left = -offsetSegway + 'px';
    });
    document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__prev').addEventListener('click', function () {
      offsetSegway += 300;
      if (offsetSegway > 2400) {
        offsetSegway = 0;
      }
      sliderSegway.style.left = -offsetSegway + 'px';
    });
  }
  if (window.matchMedia("(max-width: 1400px)").matches) {
    let sliderSegway = document.querySelector('.section:nth-child(16) .container__segway .slider:nth-child(1) .slider__line');
    let offsetSegway = 0;
    document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__next').addEventListener('click', function () {
      offsetSegway -= 225;
      if (offsetSegway < 0) {
        offsetSegway = 2025;
      }
      sliderSegway.style.left = -offsetSegway + 'px';
    });
    document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__prev').addEventListener('click', function () {
      offsetSegway += 225;
      if (offsetSegway > 2025) {
        offsetSegway = 0;
      }
      sliderSegway.style.left = -offsetSegway + 'px';
    });
  }
  if (window.matchMedia("(max-width: 1200px)").matches) {
    let sliderSegway = document.querySelector('.section:nth-child(16) .container__segway .slider:nth-child(1) .slider__line');
    let offsetSegway = 0;
    document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__next').addEventListener('click', function () {
      offsetSegway -= 200;
      if (offsetSegway < 0) {
        offsetSegway = 1800;
      }
      sliderSegway.style.left = -offsetSegway + 'px';
    });
    document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__prev').addEventListener('click', function () {
      offsetSegway += 200;
      if (offsetSegway > 1800) {
        offsetSegway = 0;
      }
      sliderSegway.style.left = -offsetSegway + 'px';
    });
  }
  if (window.matchMedia("(max-width: 1200px)").matches) {
    let sliderSegway = document.querySelector('.section:nth-child(16) .container__segway .slider:nth-child(1) .slider__line');
    let offsetSegway = 0;
    document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__next').addEventListener('click', function () {
      offsetSegway -= 200;
      if (offsetSegway < 0) {
        offsetSegway = 1800;
      }
      sliderSegway.style.left = -offsetSegway + 'px';
    });
    document.querySelector('.section:nth-child(16) .container .container__segway .section__arrow  .arrow__prev').addEventListener('click', function () {
      offsetSegway += 200;
      if (offsetSegway > 1800) {
        offsetSegway = 0;
      }
      sliderSegway.style.left = -offsetSegway + 'px';
    });
  }
}
sliderInit();
window.addEventListener('resize', sliderInit);

/***/ }),

/***/ "./js/svgSegway.js":
/*!*************************!*\
  !*** ./js/svgSegway.js ***!
  \*************************/
/***/ (() => {

const dotSegway = document.querySelectorAll('.section:nth-child(7) .container .block__segway .block__position .buttom__line .dot');
const lineSegway = document.querySelectorAll('.section:nth-child(7) .container .block__segway .block__position .buttom__line .lines');
const spanSegway = document.querySelectorAll('.section:nth-child(7) .container .block__segway .block__position .buttom__line .span-h');
dotSegway.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentItem = item;
    let tabIdLines = currentItem.getAttribute('data-lines');
    let tabIdSpan = currentItem.getAttribute('data-span');
    let currentLines = document.querySelector(tabIdLines);
    let currentSpan = document.querySelector(tabIdSpan);
    if (!currentItem.classList.contains('active')) {
      dotSegway.forEach(function (item) {
        item.classList.remove('active');
      });
      lineSegway.forEach(function (item) {
        item.classList.remove('active');
      });
      spanSegway.forEach(function (item) {
        item.classList.remove('active');
      });
      currentSpan.classList.add('active');
      currentItem.classList.add('active');
      currentLines.classList.add('active');
    }
  });
});

// let i = 0;

// for(i = 0; i < dotSegway.length; i++) {
//     dotSegway[i].addEventListener('click', function() {
//         if (this.classList.contains('active')) {
//             this.classList.remove('active')
//         } else {
//             for(i = 0; i < dotSegway.length; i++) {
//                 dotSegway[i].classList.remove('active')
//             }
//             this.classList.add('active')
//         }
//     })
// }

/***/ }),

/***/ "./js/tabsBenefit.js":
/*!***************************!*\
  !*** ./js/tabsBenefit.js ***!
  \***************************/
/***/ (() => {

const benefitBtn = document.querySelectorAll('.benefits__btn .benefit');
const containerBenefit = document.querySelectorAll('.benefits__segway .container__benefit');
benefitBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabIb = currentBtn.getAttribute('data-segway');
    let currentTab = document.querySelector(tabIb);
    if (!currentBtn.classList.contains('active')) {
      benefitBtn.forEach(function (item) {
        item.classList.remove('active');
      });
      containerBenefit.forEach(function (item) {
        item.classList.remove('active');
      });
      currentTab.classList.add('active');
      currentBtn.classList.add('active');
    }
  });
});
document.querySelector('.benefits__btn .benefit').click();

/***/ }),

/***/ "./js/yacor.js":
/*!*********************!*\
  !*** ./js/yacor.js ***!
  \*********************/
/***/ (() => {

function init() {
  if (window.matchMedia("(max-width: 4000px)").matches) {
    document.querySelectorAll('.header .top__header .list .list__item').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
  }
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.querySelectorAll('.header .header__phone .list .list__item').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
  }
}
init();
document.addEventListener('resize', init);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/tel.png */ "./img/icon/tel.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/Vector.png */ "./img/icon/Vector.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/basket.png */ "./img/icon/basket.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/insta.png */ "./img/icon/insta.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/icon.svg */ "./img/icon/icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon/author.png */ "./img/icon/author.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/1.png */ "./img/segwai(14)/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/2.png */ "./img/segwai(14)/2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/3.png */ "./img/segwai(14)/3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/4.png */ "./img/segwai(14)/4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/5.png */ "./img/segwai(14)/5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/6.png */ "./img/segwai(14)/6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/7.png */ "./img/segwai(14)/7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/8.png */ "./img/segwai(14)/8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/9.png */ "./img/segwai(14)/9.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/10.png */ "./img/segwai(14)/10.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/11.png */ "./img/segwai(14)/11.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/12.png */ "./img/segwai(14)/12.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/13.png */ "./img/segwai(14)/13.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/segwai(14)/14.png */ "./img/segwai(14)/14.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/защита.png */ "./img/png/защита.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/1_segway/1.webp */ "./img/section1/1_segway/1.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/1_segway/2.webp */ "./img/section1/1_segway/2.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/1_segway/3.webp */ "./img/section1/1_segway/3.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/1_segway/4.webp */ "./img/section1/1_segway/4.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/1_segway/6.webp */ "./img/section1/1_segway/6.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/1_segway/7.webp */ "./img/section1/1_segway/7.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/1_segway/8.webp */ "./img/section1/1_segway/8.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/2_segway/1.png */ "./img/section1/2_segway/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/2_segway/2.png */ "./img/section1/2_segway/2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/2_segway/3.png */ "./img/section1/2_segway/3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/2_segway/4.png */ "./img/section1/2_segway/4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/2_segway/5.png */ "./img/section1/2_segway/5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/3_segway/1.webp */ "./img/section1/3_segway/1.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/3_segway/2.webp */ "./img/section1/3_segway/2.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/3_segway/3.webp */ "./img/section1/3_segway/3.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/3_segway/4.webp */ "./img/section1/3_segway/4.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/3_segway/5.webp */ "./img/section1/3_segway/5.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/3_segway/6.webp */ "./img/section1/3_segway/6.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/4_segway/1.webp */ "./img/section1/4_segway/1.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/4_segway/2.webp */ "./img/section1/4_segway/2.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/4_segway/3.webp */ "./img/section1/4_segway/3.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/4_segway/4.webp */ "./img/section1/4_segway/4.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_44___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/4_segway/5.webp */ "./img/section1/4_segway/5.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_45___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/4_segway/6.webp */ "./img/section1/4_segway/6.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_46___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/5_segway/1.webp */ "./img/section1/5_segway/1.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_47___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/5_segway/2.webp */ "./img/section1/5_segway/2.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_48___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/5_segway/3.webp */ "./img/section1/5_segway/3.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_49___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/5_segway/4.webp */ "./img/section1/5_segway/4.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_50___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/5_segway/5.webp */ "./img/section1/5_segway/5.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_51___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/6_segway/1.webp */ "./img/section1/6_segway/1.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_52___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/6_segway/2.webp */ "./img/section1/6_segway/2.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_53___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/6_segway/3.webp */ "./img/section1/6_segway/3.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_54___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/6_segway/4.webp */ "./img/section1/6_segway/4.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_55___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/6_segway/5.webp */ "./img/section1/6_segway/5.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_56___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/6_segway/6.webp */ "./img/section1/6_segway/6.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_57___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/6_segway/7.webp */ "./img/section1/6_segway/7.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_58___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/7_segway/1.webp */ "./img/section1/7_segway/1.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_59___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/7_segway/2.webp */ "./img/section1/7_segway/2.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_60___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/7_segway/3.webp */ "./img/section1/7_segway/3.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_61___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/7_segway/4.webp */ "./img/section1/7_segway/4.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_62___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/7_segway/5.webp */ "./img/section1/7_segway/5.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_63___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/7_segway/6.webp */ "./img/section1/7_segway/6.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_64___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/8_segway/1.webp */ "./img/section1/8_segway/1.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_65___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/8_segway/2.webp */ "./img/section1/8_segway/2.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_66___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/8_segway/3.webp */ "./img/section1/8_segway/3.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_67___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/8_segway/4.webp */ "./img/section1/8_segway/4.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_68___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/8_segway/5.webp */ "./img/section1/8_segway/5.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_69___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/8_segway/6.webp */ "./img/section1/8_segway/6.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_70___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/8_segway/7.webp */ "./img/section1/8_segway/7.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_71___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/9_segway/1.webp */ "./img/section1/9_segway/1.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_72___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/9_segway/2.webp */ "./img/section1/9_segway/2.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_73___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/9_segway/3.webp */ "./img/section1/9_segway/3.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_74___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/9_segway/4.webp */ "./img/section1/9_segway/4.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_75___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/9_segway/5.webp */ "./img/section1/9_segway/5.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_76___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/9_segway/6.webp */ "./img/section1/9_segway/6.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_77___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/10_segway/1.webp */ "./img/section1/10_segway/1.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_78___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/10_segway/2.webp */ "./img/section1/10_segway/2.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_79___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/10_segway/3.webp */ "./img/section1/10_segway/3.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_80___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/10_segway/4.webp */ "./img/section1/10_segway/4.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_81___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/10_segway/5.webp */ "./img/section1/10_segway/5.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_82___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/10_segway/6.webp */ "./img/section1/10_segway/6.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_83___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/11_segway/1.png */ "./img/section1/11_segway/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_84___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/11_segway/2.png */ "./img/section1/11_segway/2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_85___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/11_segway/3.png */ "./img/section1/11_segway/3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_86___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/11_segway/4.png */ "./img/section1/11_segway/4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_87___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/11_segway/5.png */ "./img/section1/11_segway/5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_88___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/12_segway/1.png */ "./img/section1/12_segway/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_89___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/12_segway/2.png */ "./img/section1/12_segway/2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_90___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/13_segway/1.png */ "./img/section1/13_segway/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_91___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/13_segway/2.png */ "./img/section1/13_segway/2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_92___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/13_segway/3.png */ "./img/section1/13_segway/3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_93___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/13_segway/4.png */ "./img/section1/13_segway/4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_94___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/13_segway/5.png */ "./img/section1/13_segway/5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_95___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/13_segway/6.png */ "./img/section1/13_segway/6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_96___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/14_segway/1.png */ "./img/section1/14_segway/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_97___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/14_segway/2.png */ "./img/section1/14_segway/2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_98___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section1/14_segway/3.png */ "./img/section1/14_segway/3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_99___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/box.svg */ "./img/svg/box.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_100___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/documentation.svg */ "./img/svg/documentation.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_101___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/setting.svg */ "./img/svg/setting.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_102___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/змейка.svg */ "./img/svg/змейка.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_103___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/map.png */ "./img/png/map.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_104___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/setting.png */ "./img/png/setting.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_105___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/setting2.png */ "./img/png/setting2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_106___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/1.png */ "./img/section4/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_107___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/Frame 1.png */ "./img/section4/Frame 1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_108___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/2.png */ "./img/section4/2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_109___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/Frame 2.png */ "./img/section4/Frame 2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_110___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/3.png */ "./img/section4/3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_111___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/Frame 3.png */ "./img/section4/Frame 3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_112___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/4.png */ "./img/section4/4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_113___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/Frame 4.png */ "./img/section4/Frame 4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_114___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/5.png */ "./img/section4/5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_115___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/Frame 5.png */ "./img/section4/Frame 5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_116___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/6.png */ "./img/section4/6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_117___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/Frame 6.png */ "./img/section4/Frame 6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_118___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/7.png */ "./img/section4/7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_119___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/Frame 7.png */ "./img/section4/Frame 7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_120___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/8.png */ "./img/section4/8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_121___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/Frame 8.png */ "./img/section4/Frame 8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_122___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section4/9.png */ "./img/section4/9.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_123___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section5/1.jpg */ "./img/section5/1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_124___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section6/(1.png */ "./img/section6/(1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_125___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section6/(2.png */ "./img/section6/(2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_126___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section6/(3.png */ "./img/section6/(3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_127___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section6/(4.png */ "./img/section6/(4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_128___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section6/(5.png */ "./img/section6/(5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_129___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section6/(6.png */ "./img/section6/(6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_130___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section6/(7.png */ "./img/section6/(7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_131___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section6/(8.png */ "./img/section6/(8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_132___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section7/segway.png */ "./img/section7/segway.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_133___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/ellipse(blue).png */ "./img/png/ellipse(blue).png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_134___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section8/Батареи.png */ "./img/section8/Батареи.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_135___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section8/Батареи1.png */ "./img/section8/Батареи1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_136___ = new URL(/* asset import */ __webpack_require__(/*! ./img/setting9/segway.png */ "./img/setting9/segway.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_137___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section10/Батареи.png */ "./img/section10/Батареи.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_138___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section10/Батареи (1).png */ "./img/section10/Батареи (1).png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_139___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section10/Батареи2.png */ "./img/section10/Батареи2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_140___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section11/1.png */ "./img/section11/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_141___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section12/Батареи.png */ "./img/section12/Батареи.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_142___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section12/batareus.png */ "./img/section12/batareus.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_143___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section13/1156431_middle 1.png */ "./img/section13/1156431_middle 1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_144___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section13/Батареи.png */ "./img/section13/Батареи.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_145___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section14/1.png */ "./img/section14/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_146___ = new URL(/* asset import */ __webpack_require__(/*! ./img/png/ellipse-big(blue).png */ "./img/png/ellipse-big(blue).png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_147___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section15/1.png */ "./img/section15/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_148___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section15/setting.png */ "./img/section15/setting.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_149___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section15/зарядка.png */ "./img/section15/зарядка.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_150___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section15/шина.png */ "./img/section15/шина.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_151___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section15/pdf.png */ "./img/section15/pdf.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_152___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/ellipse.png */ "./img/section16/ellipse.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_153___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/segway__1.png */ "./img/section16/segway__1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_154___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/segway__2.png */ "./img/section16/segway__2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_155___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/segway__3.png */ "./img/section16/segway__3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_156___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/image5.png */ "./img/section16/image5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_157___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/image6.png */ "./img/section16/image6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_158___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/image7.png */ "./img/section16/image7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_159___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/image8.png */ "./img/section16/image8.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_160___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/image9.png */ "./img/section16/image9.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_161___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/image10.png */ "./img/section16/image10.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_162___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/image11.png */ "./img/section16/image11.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_163___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/image12.png */ "./img/section16/image12.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_164___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/image13.png */ "./img/section16/image13.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_165___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/line.png */ "./img/section16/line.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_166___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section16/Слой 0 2.png */ "./img/section16/Слой 0 2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_167___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section17/sms.png */ "./img/section17/sms.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_168___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section18/app.png */ "./img/section18/app.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_169___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section18/app2.png */ "./img/section18/app2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_170___ = new URL(/* asset import */ __webpack_require__(/*! ./img/section20/segway1.png */ "./img/section20/segway1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_171___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header/insta.svg */ "./img/header/insta.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_172___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header/whatsapp.svg */ "./img/header/whatsapp.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_173___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header/telegram.svg */ "./img/header/telegram.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_174___ = new URL(/* asset import */ __webpack_require__(/*! ./img/footer/logo.svg */ "./img/footer/logo.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);
var ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);
var ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);
var ___HTML_LOADER_REPLACEMENT_35___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_35___);
var ___HTML_LOADER_REPLACEMENT_36___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_36___);
var ___HTML_LOADER_REPLACEMENT_37___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_37___);
var ___HTML_LOADER_REPLACEMENT_38___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_38___);
var ___HTML_LOADER_REPLACEMENT_39___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_39___);
var ___HTML_LOADER_REPLACEMENT_40___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_40___);
var ___HTML_LOADER_REPLACEMENT_41___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_41___);
var ___HTML_LOADER_REPLACEMENT_42___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_42___);
var ___HTML_LOADER_REPLACEMENT_43___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_43___);
var ___HTML_LOADER_REPLACEMENT_44___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_44___);
var ___HTML_LOADER_REPLACEMENT_45___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_45___);
var ___HTML_LOADER_REPLACEMENT_46___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_46___);
var ___HTML_LOADER_REPLACEMENT_47___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_47___);
var ___HTML_LOADER_REPLACEMENT_48___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_48___);
var ___HTML_LOADER_REPLACEMENT_49___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_49___);
var ___HTML_LOADER_REPLACEMENT_50___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_50___);
var ___HTML_LOADER_REPLACEMENT_51___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_51___);
var ___HTML_LOADER_REPLACEMENT_52___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_52___);
var ___HTML_LOADER_REPLACEMENT_53___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_53___);
var ___HTML_LOADER_REPLACEMENT_54___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_54___);
var ___HTML_LOADER_REPLACEMENT_55___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_55___);
var ___HTML_LOADER_REPLACEMENT_56___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_56___);
var ___HTML_LOADER_REPLACEMENT_57___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_57___);
var ___HTML_LOADER_REPLACEMENT_58___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_58___);
var ___HTML_LOADER_REPLACEMENT_59___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_59___);
var ___HTML_LOADER_REPLACEMENT_60___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_60___);
var ___HTML_LOADER_REPLACEMENT_61___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_61___);
var ___HTML_LOADER_REPLACEMENT_62___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_62___);
var ___HTML_LOADER_REPLACEMENT_63___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_63___);
var ___HTML_LOADER_REPLACEMENT_64___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_64___);
var ___HTML_LOADER_REPLACEMENT_65___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_65___);
var ___HTML_LOADER_REPLACEMENT_66___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_66___);
var ___HTML_LOADER_REPLACEMENT_67___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_67___);
var ___HTML_LOADER_REPLACEMENT_68___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_68___);
var ___HTML_LOADER_REPLACEMENT_69___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_69___);
var ___HTML_LOADER_REPLACEMENT_70___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_70___);
var ___HTML_LOADER_REPLACEMENT_71___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_71___);
var ___HTML_LOADER_REPLACEMENT_72___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_72___);
var ___HTML_LOADER_REPLACEMENT_73___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_73___);
var ___HTML_LOADER_REPLACEMENT_74___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_74___);
var ___HTML_LOADER_REPLACEMENT_75___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_75___);
var ___HTML_LOADER_REPLACEMENT_76___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_76___);
var ___HTML_LOADER_REPLACEMENT_77___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_77___);
var ___HTML_LOADER_REPLACEMENT_78___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_78___);
var ___HTML_LOADER_REPLACEMENT_79___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_79___);
var ___HTML_LOADER_REPLACEMENT_80___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_80___);
var ___HTML_LOADER_REPLACEMENT_81___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_81___);
var ___HTML_LOADER_REPLACEMENT_82___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_82___);
var ___HTML_LOADER_REPLACEMENT_83___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_83___);
var ___HTML_LOADER_REPLACEMENT_84___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_84___);
var ___HTML_LOADER_REPLACEMENT_85___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_85___);
var ___HTML_LOADER_REPLACEMENT_86___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_86___);
var ___HTML_LOADER_REPLACEMENT_87___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_87___);
var ___HTML_LOADER_REPLACEMENT_88___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_88___);
var ___HTML_LOADER_REPLACEMENT_89___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_89___);
var ___HTML_LOADER_REPLACEMENT_90___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_90___);
var ___HTML_LOADER_REPLACEMENT_91___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_91___);
var ___HTML_LOADER_REPLACEMENT_92___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_92___);
var ___HTML_LOADER_REPLACEMENT_93___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_93___);
var ___HTML_LOADER_REPLACEMENT_94___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_94___);
var ___HTML_LOADER_REPLACEMENT_95___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_95___);
var ___HTML_LOADER_REPLACEMENT_96___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_96___);
var ___HTML_LOADER_REPLACEMENT_97___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_97___);
var ___HTML_LOADER_REPLACEMENT_98___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_98___);
var ___HTML_LOADER_REPLACEMENT_99___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_99___);
var ___HTML_LOADER_REPLACEMENT_100___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_100___);
var ___HTML_LOADER_REPLACEMENT_101___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_101___);
var ___HTML_LOADER_REPLACEMENT_102___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_102___);
var ___HTML_LOADER_REPLACEMENT_103___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_103___);
var ___HTML_LOADER_REPLACEMENT_104___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_104___);
var ___HTML_LOADER_REPLACEMENT_105___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_105___);
var ___HTML_LOADER_REPLACEMENT_106___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_106___);
var ___HTML_LOADER_REPLACEMENT_107___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_107___);
var ___HTML_LOADER_REPLACEMENT_108___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_108___);
var ___HTML_LOADER_REPLACEMENT_109___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_109___);
var ___HTML_LOADER_REPLACEMENT_110___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_110___);
var ___HTML_LOADER_REPLACEMENT_111___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_111___);
var ___HTML_LOADER_REPLACEMENT_112___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_112___);
var ___HTML_LOADER_REPLACEMENT_113___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_113___);
var ___HTML_LOADER_REPLACEMENT_114___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_114___);
var ___HTML_LOADER_REPLACEMENT_115___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_115___);
var ___HTML_LOADER_REPLACEMENT_116___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_116___);
var ___HTML_LOADER_REPLACEMENT_117___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_117___);
var ___HTML_LOADER_REPLACEMENT_118___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_118___);
var ___HTML_LOADER_REPLACEMENT_119___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_119___);
var ___HTML_LOADER_REPLACEMENT_120___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_120___);
var ___HTML_LOADER_REPLACEMENT_121___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_121___);
var ___HTML_LOADER_REPLACEMENT_122___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_122___);
var ___HTML_LOADER_REPLACEMENT_123___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_123___);
var ___HTML_LOADER_REPLACEMENT_124___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_124___);
var ___HTML_LOADER_REPLACEMENT_125___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_125___);
var ___HTML_LOADER_REPLACEMENT_126___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_126___);
var ___HTML_LOADER_REPLACEMENT_127___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_127___);
var ___HTML_LOADER_REPLACEMENT_128___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_128___);
var ___HTML_LOADER_REPLACEMENT_129___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_129___);
var ___HTML_LOADER_REPLACEMENT_130___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_130___);
var ___HTML_LOADER_REPLACEMENT_131___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_131___);
var ___HTML_LOADER_REPLACEMENT_132___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_132___);
var ___HTML_LOADER_REPLACEMENT_133___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_133___);
var ___HTML_LOADER_REPLACEMENT_134___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_134___);
var ___HTML_LOADER_REPLACEMENT_135___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_135___);
var ___HTML_LOADER_REPLACEMENT_136___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_136___);
var ___HTML_LOADER_REPLACEMENT_137___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_137___);
var ___HTML_LOADER_REPLACEMENT_138___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_138___);
var ___HTML_LOADER_REPLACEMENT_139___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_139___);
var ___HTML_LOADER_REPLACEMENT_140___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_140___);
var ___HTML_LOADER_REPLACEMENT_141___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_141___);
var ___HTML_LOADER_REPLACEMENT_142___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_142___);
var ___HTML_LOADER_REPLACEMENT_143___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_143___);
var ___HTML_LOADER_REPLACEMENT_144___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_144___);
var ___HTML_LOADER_REPLACEMENT_145___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_145___);
var ___HTML_LOADER_REPLACEMENT_146___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_146___);
var ___HTML_LOADER_REPLACEMENT_147___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_147___);
var ___HTML_LOADER_REPLACEMENT_148___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_148___);
var ___HTML_LOADER_REPLACEMENT_149___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_149___);
var ___HTML_LOADER_REPLACEMENT_150___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_150___);
var ___HTML_LOADER_REPLACEMENT_151___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_151___);
var ___HTML_LOADER_REPLACEMENT_152___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_152___);
var ___HTML_LOADER_REPLACEMENT_153___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_153___);
var ___HTML_LOADER_REPLACEMENT_154___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_154___);
var ___HTML_LOADER_REPLACEMENT_155___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_155___);
var ___HTML_LOADER_REPLACEMENT_156___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_156___);
var ___HTML_LOADER_REPLACEMENT_157___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_157___);
var ___HTML_LOADER_REPLACEMENT_158___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_158___);
var ___HTML_LOADER_REPLACEMENT_159___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_159___);
var ___HTML_LOADER_REPLACEMENT_160___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_160___);
var ___HTML_LOADER_REPLACEMENT_161___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_161___);
var ___HTML_LOADER_REPLACEMENT_162___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_162___);
var ___HTML_LOADER_REPLACEMENT_163___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_163___);
var ___HTML_LOADER_REPLACEMENT_164___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_164___);
var ___HTML_LOADER_REPLACEMENT_165___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_165___);
var ___HTML_LOADER_REPLACEMENT_166___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_166___);
var ___HTML_LOADER_REPLACEMENT_167___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_167___);
var ___HTML_LOADER_REPLACEMENT_168___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_168___);
var ___HTML_LOADER_REPLACEMENT_169___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_169___);
var ___HTML_LOADER_REPLACEMENT_170___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_170___);
var ___HTML_LOADER_REPLACEMENT_171___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_171___);
var ___HTML_LOADER_REPLACEMENT_172___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_172___);
var ___HTML_LOADER_REPLACEMENT_173___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_173___);
var ___HTML_LOADER_REPLACEMENT_174___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_174___);
var code = "<!DOCTYPE html>\n<html lang=\"ru\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\" />\n    <!-- <link rel=\"stylesheet\" href=\"\"> -->\n    <title>new site</title>\n    <noscript>\n      <style>\n        /**\n        * Reinstate scrolling for non-JS clients\n        */\n        .simplebar-content-wrapper {\n          overflow: auto;\n        }\n      </style>\n    </noscript>\n  </head>\n  \n  <body>\n    <div class=\"wrapper\">\n      <header class=\"header\">\n        <div class=\"top__header\">\n          <div class=\"container\">\n            <div class=\"burger\" aria-expanded=\"false\" aria-label=\"Открыть меню\">\n              <div class=\"line\"></div>\n              <div class=\"line\"></div>\n              <div class=\"line\"></div>\n            </div>\n            <nav class=\"list\">\n              <a class=\"list__item\" href=\"#reviews\">REVIEWS</a>\n              <a class=\"list__item\" href=\"#shipping\">SHIPPING AND PAYMENT</a>\n              <a class=\"list__item\" href=\"#feature\">FEATURE</a>\n              <a class=\"list__item\" href=\"#blog\">BLOG</a>\n              <a class=\"list__item\" href=\"#contacts\">CONTACTS</a>\n            </nav>  \n            <svg\n              class=\"logo\"\n              width=\"94\"\n              height=\"28\"\n              viewBox=\"0 0 94 28\"\n              fill=\"none\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n            >\n              <g clip-path=\"url(#clip0_405_6433)\">\n                <path\n                  d=\"M17.943 0C16.1252 0 14.6361 1.48096 14.6361 3.2888C14.6361 5.09663 16.1252 6.54424 17.943 6.54424C19.7607 6.54424 21.2163 5.09663 21.2163 3.2888C21.2163 1.48096 19.7607 0 17.943 0ZM4.41363 7.29139C3.86361 7.29139 3.4209 7.73167 3.4209 8.27869C3.4209 8.82572 3.86361 9.266 4.41363 9.266H15.1995C15.5685 9.24599 16.6417 9.33271 17.1246 9.95311C17.6344 10.6135 17.3996 11.7676 17.1246 12.6148C17.1246 12.6148 13.9922 22.6013 13.7574 23.3485C13.261 24.9428 11.7049 25.9435 10.209 25.2897C8.97484 24.7494 8.89434 23.5819 9.31022 22.4479C9.36388 22.3078 9.43096 22.2077 9.49133 22.0876C9.49133 22.0876 12.1744 17.0644 12.7647 15.6635C13.2007 14.6361 12.6372 13.929 11.289 13.929H5.15818C4.60816 13.929 4.16545 14.3693 4.16545 14.9163C4.16545 15.4633 4.60816 15.9036 5.15818 15.9036H6.90217C7.27109 15.8836 8.37115 15.9303 8.79373 16.5907C9.58523 17.8182 9.04191 18.2185 7.86137 22.3011C7.78758 22.5146 7.72051 22.7347 7.68026 22.9615C7.68026 22.9615 6.86863 25.8167 9.45108 26.9975C11.839 28.0849 14.6093 26.9241 15.4343 24.3358C16.0112 22.5146 19.0095 13.2152 19.0095 13.2152C19.6199 11.3207 19.5193 9.80635 18.6808 8.73232C17.5204 7.25136 15.4477 7.28472 15.1325 7.29806H4.41363V7.29139ZM0.992732 10.5535C0.442704 10.5535 0 10.9938 0 11.5408C0 12.0878 0.442704 12.5548 0.992732 12.5548H13.6769C14.2269 12.5548 14.6696 12.0878 14.6696 11.5408C14.6696 10.9938 14.2269 10.5535 13.6769 10.5535H0.992732Z\"\n                  fill=\"#323941\"\n                />\n                <path\n                  d=\"M32.675 6.48924C31.1337 6.48924 28.39 6.67733 28.39 8.14307C28.39 10.2768 33.0071 10.2963 33.0071 11.5156C33.0071 11.8852 32.6218 12.216 31.7582 12.216C30.5491 12.216 29.8648 12.1447 28.7487 11.9566C28.2771 11.8788 28.1176 12.7867 28.5096 12.884C29.2403 13.0721 30.383 13.2342 32.4425 13.2342C33.9837 13.2342 36.6676 12.9619 36.6676 11.4896C36.6676 9.35587 32.0837 9.3429 32.0837 8.20792C32.0837 7.83824 32.469 7.50748 33.3327 7.50748H36.2491C36.8404 7.50748 36.8404 6.48924 36.2491 6.48924H32.675ZM43.6033 6.48924C41.9292 6.48924 39.1058 6.58653 39.1058 8.84351V10.9059C39.1058 13.1694 41.9292 13.2602 43.6033 13.2602C45.3771 13.2602 46.3271 13.0981 47.0579 12.91C47.4565 12.8127 47.2904 11.8982 46.8187 11.9825C45.7026 12.1706 45.025 12.242 43.8093 12.242C42.6799 12.242 42.3809 11.989 42.3809 11.3145V10.5298C42.3809 10.2639 42.4474 10.212 42.7397 10.212H45.0317C45.4768 10.212 45.4768 9.3429 45.0317 9.3429H42.7397C42.4474 9.3429 42.3809 9.29101 42.3809 9.0251V8.4414C42.3809 7.76042 42.6799 7.51396 43.8093 7.51396H46.6991C47.2904 7.51396 47.2904 6.49573 46.6991 6.49573H43.6033V6.48924ZM53.9338 6.48924C52.2596 6.48924 49.4362 6.58653 49.4362 8.84351V10.9967C49.4362 13.0981 52.1401 13.2083 53.8142 13.2083C55.2359 13.2083 58.3383 13.137 58.3383 11.1718V10.5298C58.3383 9.72555 57.8002 9.51152 56.7306 9.51152H54.3789C54.06 9.51152 54.06 10.3806 54.3789 10.3806H55.0964C55.3887 10.3806 55.4219 10.439 55.4219 10.6984V11.2497C55.4219 11.9306 54.7775 12.2938 53.8142 12.2938C52.8509 12.2938 52.5055 11.9242 52.5055 11.2497V8.42843C52.5055 7.74745 53.0103 7.50099 54.1397 7.50099H57.0296C57.6209 7.50099 57.6209 6.48276 57.0296 6.48276H53.9338V6.48924ZM60.152 6.48924C59.7467 6.48924 59.7534 6.65138 59.853 6.98215L61.5803 12.0993C61.8128 12.7284 62.3177 13.1434 63.3076 13.1434C64.2974 13.1434 64.7691 12.7219 65.0016 12.1576C65.0016 12.1576 65.6859 10.1601 65.8055 9.80337C65.8852 9.55692 66.0845 9.55692 66.1642 9.80337C66.2639 10.1082 66.9415 12.0993 66.9415 12.0993C67.2737 12.7608 67.6258 13.1434 68.6356 13.1434C69.8247 13.1434 70.3429 12.67 70.5422 12.0993C70.6684 11.7426 71.5852 8.68785 72.1499 6.92378C72.2629 6.58004 72.2296 6.48924 71.9108 6.48924H70.8677C70.5422 7.56585 69.5391 10.8022 69.4992 10.9384C69.4261 11.1848 69.2401 11.1783 69.1405 10.9384C69.074 10.7697 67.9513 7.77339 67.7719 7.30643C67.5859 6.83946 67.0744 6.49573 66.4898 6.49573C65.9649 6.49573 65.4733 6.77461 65.3006 7.30643C65.1279 7.83824 64.1845 10.7957 64.138 10.9384C64.0649 11.1848 63.859 11.1848 63.7793 10.9384C63.7261 10.7892 62.703 7.52045 62.3775 6.48924H60.152ZM78.4611 6.48924C76.8401 6.48924 74.2625 6.47627 74.2625 8.43492V12.5014C74.2625 12.91 74.5748 13.1434 75.6311 13.1434C76.6873 13.1434 76.9996 12.8581 76.9996 12.5014V10.64C76.9996 10.3741 77.066 10.3222 77.3583 10.3222H79.5041C79.7964 10.3222 79.8629 10.3806 79.8629 10.64V12.5014C79.8629 12.8581 80.1751 13.1434 81.2314 13.1434C82.2877 13.1434 82.6 12.9165 82.6 12.5014V8.43492C82.6 6.47627 80.0821 6.48924 78.4611 6.48924ZM84.387 6.48924C84.1213 6.48924 84.0084 6.68381 84.2076 6.92378C84.8786 7.74096 86.4531 9.66718 86.5594 9.80337C86.6923 9.96551 86.8849 10.1925 86.8849 10.4454V12.5079C86.8849 12.8646 87.2304 13.1499 88.2867 13.1499C89.343 13.1499 89.715 12.9229 89.715 12.5079V10.2703C89.715 10.0044 89.8944 9.86174 90.0405 9.68663C90.1468 9.55044 91.6349 7.7669 92.3325 6.92378C92.5318 6.67732 92.4255 6.48924 92.1531 6.48924H90.9042C90.9042 6.48924 89.3031 8.53869 89.1769 8.70082C89.0507 8.86296 88.7982 8.85648 88.672 8.70082C88.5458 8.54517 87.0045 6.48924 87.0045 6.48924H84.387ZM93.3755 6.48924C93.0301 6.48924 92.751 6.76812 92.751 7.09889C92.751 7.42965 93.0301 7.70853 93.3755 7.70853C93.7143 7.70853 94 7.42965 94 7.09889C94 6.76164 93.721 6.48924 93.3755 6.48924ZM93.3755 6.63193C93.628 6.63193 93.8538 6.85244 93.8538 7.09889C93.8538 7.34534 93.628 7.53342 93.3755 7.53342C93.1231 7.53342 92.9304 7.34534 92.9304 7.09889C92.9304 6.85244 93.1231 6.63193 93.3755 6.63193ZM93.1098 6.86541C93.0898 6.86541 93.0832 6.87189 93.0832 6.89135V7.26751C93.0832 7.29346 93.1031 7.29346 93.1696 7.29346C93.2426 7.29346 93.2559 7.28697 93.2559 7.26751V6.94972C93.2559 6.93026 93.2626 6.92378 93.2825 6.92378H93.3689C93.4287 6.92378 93.4552 6.9562 93.4552 6.98215C93.4552 7.02755 93.3822 7.04052 93.3091 7.04052H93.2825C93.2493 7.04052 93.2559 7.1378 93.2825 7.15726C93.3556 7.21563 93.422 7.274 93.4619 7.29994C93.4752 7.31291 93.5017 7.29994 93.5217 7.29994H93.701C93.721 7.29994 93.721 7.28697 93.701 7.274L93.4619 7.09889C93.5217 7.09889 93.701 7.10537 93.701 6.98215C93.701 6.89783 93.5881 6.86541 93.4353 6.86541H93.1098ZM78.4611 7.35831C79.5573 7.35831 79.8629 7.64368 79.8629 8.31818V9.12887C79.8629 9.41424 79.8031 9.44667 79.5374 9.44667H77.365C77.0727 9.44667 77.0062 9.3883 77.0062 9.12887V8.31818C77.0062 7.64368 77.365 7.35831 78.4611 7.35831Z\"\n                  fill=\"#323941\"\n                />\n                <path\n                  d=\"M31.5946 16.3483C31.1408 16.3483 30.7931 16.4868 30.5514 16.7638C30.3098 17.0408 30.189 17.4327 30.189 17.9395C30.189 18.4523 30.3216 18.8471 30.5868 19.1241C30.8579 19.4011 31.2203 19.5396 31.6741 19.5396C31.9158 19.5396 32.1191 19.5072 32.2841 19.4424C32.455 19.3775 32.6171 19.3039 32.7703 19.2214C32.8705 19.3039 32.9471 19.4041 33.0002 19.5219C33.0591 19.6339 33.0886 19.7665 33.0886 19.9197C33.0886 20.1614 32.953 20.3676 32.6819 20.5385C32.4167 20.7036 32.0101 20.7861 31.462 20.7861C31.0671 20.7861 30.6958 20.7301 30.3481 20.6181C30.0004 20.5061 29.6969 20.3352 29.4376 20.1054C29.1783 19.8696 28.972 19.575 28.8188 19.2214C28.6714 18.8619 28.5978 18.4346 28.5978 17.9395C28.5978 17.4799 28.6685 17.0762 28.8099 16.7285C28.9573 16.3748 29.1547 16.0772 29.4022 15.8356C29.6556 15.594 29.9503 15.4113 30.2862 15.2875C30.6222 15.1637 30.9817 15.1019 31.3647 15.1019C31.9069 15.1019 32.3254 15.1903 32.62 15.3671C32.9206 15.5439 33.0709 15.7708 33.0709 16.0478C33.0709 16.201 33.0326 16.3336 32.956 16.4456C32.8793 16.5575 32.7909 16.6459 32.6908 16.7108C32.5375 16.6106 32.3725 16.5251 32.1957 16.4544C32.0248 16.3837 31.8244 16.3483 31.5946 16.3483Z\"\n                  fill=\"#323941\"\n                />\n                <path\n                  d=\"M35.1831 15.429C35.2833 15.37 35.4336 15.314 35.634 15.261C35.8402 15.2079 36.0465 15.1814 36.2528 15.1814C36.5474 15.1814 36.8068 15.2256 37.0307 15.314C37.2605 15.3965 37.4079 15.5291 37.4727 15.7118C37.5788 16.0183 37.6937 16.3748 37.8175 16.7815C37.9412 17.1881 38.065 17.6095 38.1888 18.0456C38.3125 18.4758 38.4333 18.9031 38.5512 19.3274C38.6691 19.7459 38.7722 20.1172 38.8606 20.4413C38.7899 20.5238 38.6838 20.5886 38.5424 20.6358C38.4009 20.6888 38.233 20.7153 38.0385 20.7153C37.897 20.7153 37.7762 20.7036 37.676 20.68C37.5817 20.6564 37.5022 20.6211 37.4374 20.5739C37.3784 20.5268 37.3283 20.4649 37.2871 20.3883C37.2517 20.3116 37.2193 20.2232 37.1898 20.1231L37.0307 19.5131H35.4306C35.3835 19.6899 35.3363 19.8726 35.2892 20.0612C35.2421 20.2498 35.1949 20.4325 35.1478 20.6093C35.0653 20.6387 34.9768 20.6623 34.8826 20.68C34.7942 20.7036 34.6851 20.7153 34.5555 20.7153C34.2549 20.7153 34.031 20.6653 33.8836 20.5651C33.7422 20.459 33.6715 20.3146 33.6715 20.1319C33.6715 20.0494 33.6832 19.9669 33.7068 19.8844C33.7304 19.8019 33.7569 19.7046 33.7864 19.5927C33.8276 19.4335 33.8836 19.2361 33.9543 19.0004C34.031 18.7646 34.1135 18.5112 34.2019 18.2401C34.2903 17.9631 34.3846 17.6802 34.4847 17.3915C34.5849 17.1027 34.6792 16.8316 34.7676 16.5782C34.856 16.3189 34.9356 16.089 35.0063 15.8886C35.0829 15.6883 35.1419 15.535 35.1831 15.429ZM36.2439 16.5693C36.1614 16.8169 36.0671 17.0938 35.9611 17.4003C35.8609 17.7009 35.7695 18.0073 35.687 18.3197H36.7832C36.7007 18.0014 36.6152 17.692 36.5268 17.3915C36.4443 17.085 36.3677 16.811 36.297 16.5693H36.2439Z\"\n                  fill=\"#323941\"\n                />\n                <path\n                  d=\"M40.4072 20.6535C40.1538 20.6535 39.9534 20.5798 39.8061 20.4325C39.6588 20.2851 39.5851 20.0848 39.5851 19.8313V15.261C39.6499 15.2492 39.753 15.2345 39.8945 15.2168C40.0359 15.1932 40.1715 15.1814 40.3011 15.1814C40.4367 15.1814 40.5546 15.1932 40.6547 15.2168C40.7608 15.2345 40.8492 15.2698 40.9199 15.3229C40.9907 15.3759 41.0437 15.4496 41.0791 15.5439C41.1144 15.6382 41.1321 15.7619 41.1321 15.9152V19.407H43.1565C43.1978 19.4718 43.2361 19.5602 43.2714 19.6722C43.3068 19.7783 43.3245 19.8903 43.3245 20.0081C43.3245 20.2439 43.2744 20.4118 43.1742 20.512C43.074 20.6063 42.9414 20.6535 42.7764 20.6535H40.4072Z\"\n                  fill=\"#323941\"\n                />\n                <path\n                  d=\"M45.6644 20.5916C45.5996 20.6093 45.4964 20.6269 45.355 20.6446C45.2194 20.6623 45.0839 20.6711 44.9484 20.6711C44.8128 20.6711 44.692 20.6594 44.5859 20.6358C44.4857 20.6181 44.4003 20.5827 44.3295 20.5297C44.2588 20.4767 44.2058 20.403 44.1704 20.3087C44.1351 20.2144 44.1174 20.0906 44.1174 19.9374V15.2698C44.1822 15.258 44.2853 15.2433 44.4268 15.2256C44.5682 15.2021 44.7038 15.1903 44.8334 15.1903C44.969 15.1903 45.0868 15.2021 45.187 15.2256C45.2931 15.2433 45.3815 15.2787 45.4522 15.3317C45.523 15.3848 45.576 15.4584 45.6114 15.5527C45.6467 15.647 45.6644 15.7708 45.6644 15.924V20.5916Z\"\n                  fill=\"#323941\"\n                />\n                <path\n                  d=\"M50.5767 15.2698C50.618 15.3347 50.6534 15.4231 50.6828 15.535C50.7182 15.6411 50.7359 15.7531 50.7359 15.871C50.7359 16.1008 50.6858 16.2658 50.5856 16.366C50.4913 16.4603 50.3616 16.5074 50.1966 16.5074H48.3402V17.5064H50.2762C50.3233 17.5712 50.3616 17.6567 50.3911 17.7627C50.4265 17.8688 50.4441 17.9808 50.4441 18.0987C50.4441 18.3226 50.3941 18.4847 50.2939 18.5849C50.1996 18.6792 50.0699 18.7263 49.9049 18.7263H48.3579V20.5916C48.293 20.6093 48.1899 20.6269 48.0485 20.6446C47.9129 20.6623 47.7774 20.6711 47.6418 20.6711C47.5063 20.6711 47.3855 20.6594 47.2794 20.6358C47.1792 20.6181 47.0937 20.5827 47.023 20.5297C46.9523 20.4767 46.8993 20.403 46.8639 20.3087C46.8285 20.2144 46.8109 20.0906 46.8109 19.9374V16.092C46.8109 15.8385 46.8845 15.6382 47.0319 15.4908C47.1792 15.3435 47.3796 15.2698 47.633 15.2698H50.5767Z\"\n                  fill=\"#323941\"\n                />\n                <path\n                  d=\"M51.1988 17.9395C51.1988 17.4799 51.2695 17.0732 51.411 16.7196C51.5583 16.366 51.7557 16.0713 52.0033 15.8356C52.2567 15.594 52.5513 15.4113 52.8873 15.2875C53.2291 15.1637 53.5974 15.1019 53.9923 15.1019C54.3871 15.1019 54.7525 15.1637 55.0885 15.2875C55.4303 15.4113 55.7279 15.594 55.9813 15.8356C56.2347 16.0713 56.4322 16.366 56.5736 16.7196C56.7209 17.0732 56.7946 17.4799 56.7946 17.9395C56.7946 18.3992 56.7239 18.8088 56.5824 19.1683C56.441 19.5219 56.2436 19.8195 55.9902 20.0612C55.7426 20.2969 55.448 20.4767 55.1061 20.6004C54.7643 20.7242 54.393 20.7861 53.9923 20.7861C53.5915 20.7861 53.2202 20.7242 52.8784 20.6004C52.5366 20.4708 52.2419 20.2851 51.9944 20.0435C51.7469 19.8019 51.5524 19.5043 51.411 19.1506C51.2695 18.797 51.1988 18.3933 51.1988 17.9395ZM52.79 17.9395C52.79 18.4758 52.8991 18.8766 53.1171 19.1418C53.3352 19.407 53.6269 19.5396 53.9923 19.5396C54.3636 19.5396 54.6582 19.407 54.8763 19.1418C55.0944 18.8766 55.2034 18.4758 55.2034 17.9395C55.2034 17.4091 55.0944 17.0113 54.8763 16.7461C54.6641 16.4809 54.3724 16.3483 54.0011 16.3483C53.6357 16.3483 53.3411 16.4809 53.1171 16.7461C52.8991 17.0054 52.79 17.4032 52.79 17.9395Z\"\n                  fill=\"#323941\"\n                />\n                <path\n                  d=\"M59.2179 18.8943V20.5916C59.1531 20.6093 59.0499 20.6269 58.9085 20.6446C58.7729 20.6623 58.6374 20.6711 58.5019 20.6711C58.3663 20.6711 58.2455 20.6594 58.1394 20.6358C58.0392 20.6181 57.9538 20.5827 57.883 20.5297C57.8182 20.4767 57.7681 20.403 57.7328 20.3087C57.6974 20.2144 57.6797 20.0906 57.6797 19.9374V15.7737C57.6797 15.65 57.7121 15.5557 57.777 15.4908C57.8477 15.4201 57.942 15.3641 58.0598 15.3229C58.2602 15.2521 58.493 15.2021 58.7582 15.1726C59.0234 15.1372 59.3063 15.1195 59.6069 15.1195C60.4202 15.1195 61.0331 15.2905 61.4456 15.6323C61.8582 15.9741 62.0644 16.4367 62.0644 17.0202C62.0644 17.3856 61.9701 17.6979 61.7815 17.9572C61.5929 18.2165 61.369 18.4169 61.1097 18.5584C61.3218 18.8471 61.5311 19.1182 61.7373 19.3716C61.9436 19.6251 62.1057 19.8549 62.2235 20.0612C62.1646 20.2674 62.0556 20.4266 61.8965 20.5385C61.7432 20.6446 61.5694 20.6977 61.3749 20.6977C61.2452 20.6977 61.1333 20.6829 61.039 20.6535C60.9447 20.624 60.8622 20.5827 60.7914 20.5297C60.7207 20.4767 60.6559 20.4118 60.597 20.3352C60.538 20.2586 60.482 20.1761 60.429 20.0877L59.6864 18.8943H59.2179ZM59.7748 17.7185C59.9988 17.7185 60.1756 17.6626 60.3052 17.5506C60.4349 17.4327 60.4997 17.2618 60.4997 17.0379C60.4997 16.8139 60.4261 16.6459 60.2787 16.534C60.1373 16.4161 59.9104 16.3572 59.598 16.3572C59.5096 16.3572 59.4389 16.3601 59.3859 16.366C59.3328 16.3719 59.2739 16.3807 59.2091 16.3925V17.7185H59.7748Z\"\n                  fill=\"#323941\"\n                />\n                <path\n                  d=\"M67.9199 20.4413C67.8374 20.5238 67.7166 20.5857 67.5575 20.6269C67.4042 20.6741 67.2186 20.6977 67.0005 20.6977C66.7825 20.6977 66.5762 20.6653 66.3817 20.6004C66.1872 20.5356 66.0281 20.3794 65.9044 20.1319L65.0292 18.3462C64.9408 18.1635 64.8612 17.9926 64.7905 17.8335C64.7198 17.6685 64.6432 17.4799 64.5607 17.2677L64.5076 17.2765C64.5312 17.5948 64.543 17.9189 64.543 18.249C64.5489 18.579 64.5518 18.9031 64.5518 19.2214V20.5916C64.487 20.6093 64.3868 20.6269 64.2512 20.6446C64.1216 20.6623 63.9919 20.6711 63.8623 20.6711C63.7326 20.6711 63.6177 20.6623 63.5175 20.6446C63.4173 20.6269 63.3348 20.5916 63.27 20.5385C63.2052 20.4855 63.1551 20.4148 63.1197 20.3264C63.0844 20.2321 63.0667 20.1113 63.0667 19.9639V15.5439C63.1492 15.426 63.2759 15.3376 63.4468 15.2787C63.6177 15.2197 63.8004 15.1903 63.9949 15.1903C64.2129 15.1903 64.4192 15.2256 64.6137 15.2964C64.8141 15.3612 64.9732 15.5144 65.0911 15.756L65.9751 17.5417C66.0635 17.7244 66.143 17.8983 66.2138 18.0633C66.2845 18.2224 66.3611 18.4081 66.4436 18.6202L66.4878 18.6114C66.4642 18.2932 66.4495 17.9749 66.4436 17.6567C66.4377 17.3384 66.4348 17.0202 66.4348 16.7019V15.2698C66.4996 15.2521 66.5968 15.2345 66.7265 15.2168C66.862 15.1991 66.9946 15.1903 67.1243 15.1903C67.3836 15.1903 67.581 15.2374 67.7166 15.3317C67.8521 15.4201 67.9199 15.6087 67.9199 15.8975V20.4413Z\"\n                  fill=\"#323941\"\n                />\n                <path\n                  d=\"M70.6136 20.5916C70.5488 20.6093 70.4456 20.6269 70.3042 20.6446C70.1686 20.6623 70.0331 20.6711 69.8975 20.6711C69.762 20.6711 69.6412 20.6594 69.5351 20.6358C69.4349 20.6181 69.3494 20.5827 69.2787 20.5297C69.208 20.4767 69.155 20.403 69.1196 20.3087C69.0842 20.2144 69.0666 20.0906 69.0666 19.9374V15.2698C69.1314 15.258 69.2345 15.2433 69.376 15.2256C69.5174 15.2021 69.653 15.1903 69.7826 15.1903C69.9182 15.1903 70.036 15.2021 70.1362 15.2256C70.2423 15.2433 70.3307 15.2787 70.4014 15.3317C70.4721 15.3848 70.5252 15.4584 70.5605 15.5527C70.5959 15.647 70.6136 15.7708 70.6136 15.924V20.5916Z\"\n                  fill=\"#323941\"\n                />\n                <path\n                  d=\"M72.9004 15.429C73.0006 15.37 73.1509 15.314 73.3513 15.261C73.5575 15.2079 73.7638 15.1814 73.9701 15.1814C74.2647 15.1814 74.524 15.2256 74.748 15.314C74.9778 15.3965 75.1252 15.5291 75.19 15.7118C75.2961 16.0183 75.411 16.3748 75.5348 16.7815C75.6585 17.1881 75.7823 17.6095 75.9061 18.0456C76.0298 18.4758 76.1506 18.9031 76.2685 19.3274C76.3864 19.7459 76.4895 20.1172 76.5779 20.4413C76.5072 20.5238 76.4011 20.5886 76.2597 20.6358C76.1182 20.6888 75.9503 20.7153 75.7558 20.7153C75.6143 20.7153 75.4935 20.7036 75.3933 20.68C75.299 20.6564 75.2195 20.6211 75.1546 20.5739C75.0957 20.5268 75.0456 20.4649 75.0044 20.3883C74.969 20.3116 74.9366 20.2232 74.9071 20.1231L74.748 19.5131H73.1479C73.1008 19.6899 73.0536 19.8726 73.0065 20.0612C72.9593 20.2498 72.9122 20.4325 72.8651 20.6093C72.7825 20.6387 72.6941 20.6623 72.5998 20.68C72.5114 20.7036 72.4024 20.7153 72.2728 20.7153C71.9722 20.7153 71.7482 20.6653 71.6009 20.5651C71.4595 20.459 71.3888 20.3146 71.3888 20.1319C71.3888 20.0494 71.4005 19.9669 71.4241 19.8844C71.4477 19.8019 71.4742 19.7046 71.5037 19.5927C71.5449 19.4335 71.6009 19.2361 71.6716 19.0004C71.7483 18.7646 71.8308 18.5112 71.9192 18.2401C72.0076 17.9631 72.1019 17.6802 72.202 17.3915C72.3022 17.1027 72.3965 16.8316 72.4849 16.5782C72.5733 16.3189 72.6529 16.089 72.7236 15.8886C72.8002 15.6883 72.8592 15.535 72.9004 15.429ZM73.9612 16.5693C73.8787 16.8169 73.7844 17.0938 73.6783 17.4003C73.5782 17.7009 73.4868 18.0073 73.4043 18.3197H74.5005C74.418 18.0014 74.3325 17.692 74.2441 17.3915C74.1616 17.085 74.085 16.811 74.0143 16.5693H73.9612Z\"\n                  fill=\"#323941\"\n                />\n              </g>\n              <defs>\n                <clipPath id=\"clip0_405_6433\">\n                  <rect width=\"94\" height=\"27.4044\" fill=\"white\" />\n                </clipPath>\n              </defs>\n            </svg>\n            <div class=\"menu__header\">\n              <img class=\"img__phone\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n              <img class=\"img__phone\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\n              <div class=\"img__cart\">\n                <img class=\"cart\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" />\n                <svg class=\"cart\" width=\"21\" height=\"21\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <g clip-path=\"url(#clip0_405_6428)\">\n                  <path d=\"M6.54554 19.1818C7.44928 19.1818 8.18191 18.4492 8.18191 17.5455C8.18191 16.6417 7.44928 15.9091 6.54554 15.9091C5.6418 15.9091 4.90918 16.6417 4.90918 17.5455C4.90918 18.4492 5.6418 19.1818 6.54554 19.1818Z\" stroke=\"#323941\" stroke-width=\"1.27585\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                  <path d=\"M16.3637 19.1818C17.2674 19.1818 18 18.4492 18 17.5455C18 16.6417 17.2674 15.9091 16.3637 15.9091C15.4599 15.9091 14.7273 16.6417 14.7273 17.5455C14.7273 18.4492 15.4599 19.1818 16.3637 19.1818Z\" stroke=\"#323941\" stroke-width=\"1.27585\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                  <path d=\"M4.63915 5.27273H18.8182L17.4437 12.1373C17.3689 12.514 17.164 12.8523 16.8648 13.0932C16.5656 13.334 16.1913 13.4619 15.8073 13.4546H7.15915C6.75962 13.4579 6.37265 13.315 6.07122 13.0528C5.76978 12.7905 5.57471 12.4271 5.52278 12.0309L4.27915 2.60546C4.22757 2.21211 4.03486 1.85089 3.73686 1.58901C3.43886 1.32713 3.05586 1.18242 2.65915 1.18182H0.818237\" stroke=\"#323941\" stroke-width=\"1.27585\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                  </g>\n                  <defs>\n                  <clipPath id=\"clip0_405_6428\">\n                  <rect width=\"19.6364\" height=\"19.6364\" fill=\"white\" transform=\"translate(0 0.363647)\"/>\n                  </clipPath>\n                  </defs>\n                  </svg>\n                  \n                <div class=\"cart__quantity\">0</div>\n                <div class=\"content__cart\">\n                  <ul class=\"content__cart-list\" data-simplebar>\n                  </ul>\n                  <div class=\"cart__content-bottom\">\n                    <div class=\"cart__content-fullprice\">\n                      <p>Итого:</p>\n                      <span class=\"fullprice\">$0</span>\n                    </div>\n                    <button type=\"submit\" class=\"cart__content-button btn\">Оформить заказ</button>\n                  </div>\n                </div>\n              </div>\n              <img class=\"img__insta\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" />\n              <span class=\"tel\">+1 (888) 888-88-88</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"center__header\">\n          <div class=\"container\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" />\n            <div class=\"block__author\">\n              <img class=\"author\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" />\n              <div class=\"block__text\">\n                <p>jOHN SMITH</p>\n                <span>Ask a question to the director</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bottom__header\">\n          <div class=\"container\">\n            <div class=\"slider\" id=\"slider\">\n              <div class=\"slider__wrapper\">\n                <button class=\"segway\" data-tab=\"#segway_1\" data-img=\"#segway_img-1\" data-tab-phone=\"#segway-phone-1\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                  <h4>KS E22</h4>\n                </button>\n                <button class=\"segway\" data-tab=\"#segway_2\" data-img=\"#segway_img-2\" data-tab-phone=\"#segway-phone-2\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" />\n                  <h4>KS ES1l</h4>\n                </button>\n                <button class=\"segway\" data-tab=\"#segway_3\" data-img=\"#segway_img-3\" data-tab-phone=\"#segway-phone-3\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" />\n                  <h4>KS Air t15</h4>\n                </button>\n                <button class=\"segway\" data-tab=\"#segway_4\" data-img=\"#segway_img-4\" data-tab-phone=\"#segway-phone-4\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" />\n                  <h4>KS F30</h4>\n                </button>\n                <button class=\"segway\" data-tab=\"#segway_5\" data-img=\"#segway_img-5\" data-tab-phone=\"#segway-phone-5\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" />\n                  <h4>KS E45</h4>\n                </button>\n                <button class=\"segway\" data-tab=\"#segway_6\" data-img=\"#segway_img-6\" data-tab-phone=\"#segway-phone-6\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" />\n                  <h4>KS MAX</h4>\n                </button>\n                <button class=\"segway\" data-tab=\"#segway_7\" data-img=\"#segway_img-7\" data-tab-phone=\"#segway-phone-7\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" />\n                  <h4>KS MAX</h4>\n                </button>\n                <button class=\"segway\" data-tab=\"#segway_8\" data-img=\"#segway_img-8\" data-tab-phone=\"#segway-phone-8\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  <h4>KS ES2</h4>\n                </button>\n                <button class=\"segway\" data-tab=\"#segway_9\" data-img=\"#segway_img-9\" data-tab-phone=\"#segway-phone-9\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\" />\n                  <h4>KS ES 3</h4>\n                </button>\n                <button class=\"segway\" data-tab=\"#segway_10\" data-img=\"#segway_img-10\" data-tab-phone=\"#segway-phone-10\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\" />\n                  <h4>EKS ZING E8</h4>\n                </button>\n                <button class=\"segway segway__11\" data-tab=\"#segway_11\" data-img=\"#segway_img-11\" data-tab-phone=\"#segway-phone-11\"> \n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\" />\n                  <h4>EKS ZING E10</h4>\n                  <h4 class=\"h4-2\">EKSZ E10</h4>\n                </button>\n                <button class=\"segway segway__12\" data-tab=\"#segway_12\" data-img=\"#segway_img-12\" data-tab-phone=\"#segway-phone-12\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\" />\n                  <h4>EKS ZING E12</h4>\n                  <h4 class=\"h4-2\">EKSZ E12</h4>\n                </button>\n                <button class=\"segway\" data-tab=\"#segway_13\" data-img=\"#segway_img-13\" data-tab-phone=\"#segway-phone-13\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\n                  <h4>KS ES 4</h4>\n                </button>\n                <button class=\"segway segway__14\" data-tab=\"#segway_14\" data-img=\"#segway_img-14\" data-tab-phone=\"#segway-phone-14\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\" />\n                  <h4>Accessories</h4>\n                  <h4 class=\"h4-2\">Acces</h4>\n                </button>\n              </div>\n            </div>\n            <div class=\"arrow__slider\">\n              <svg\n                class=\"button__left\"\n                viewBox=\"0 0 15 56\"\n                fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n              >\n                <path\n                  d=\"M14 55L3.24138 30.8667L2 28.0667L3.24138 25.2667L14 1\"\n                  stroke=\"#fff\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                />\n              </svg>\n              <svg\n                class=\"button__right\"\n                viewBox=\"0 0 15 56\"\n                fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n              >\n                <path\n                  d=\"M1 1L11.7586 25.1333L13 27.9333L11.7586 30.7333L1 55\"\n                  stroke=\"#fff\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                />\n              </svg>\n            </div>\n          </div>\n        </div>\n      </header>\n      <main class=\"main\">\n        <section class=\"section\" id=\"reviews\">\n          <div class=\"free__shipping\">\n            <p>Free 1 day shipping within California.</p>\n          </div>\n\n          <div class=\"modal__segway\">\n            <div class=\"modal__segway-overlay\">\n              <div class=\"modal\">\n\n                <span>Delivery 3 days</span>\n                <form class=\"form\" id=\"form\" action=\"#\">\n                    <div class=\"form__item _name\">\n                        <input class=\"name input\" type=\"text\" placeholder=\"Ваше имя\" name=\"name\" id=\"name\" data-reg=\"^[A-Z][a-z]*$\">\n                        <label for=\"label\" class=\"name__label label\">Name</label>\n                    </div>\n                    <div class=\"form__item _email\">\n                        <input class=\"email input\" name=\"email\"  id=\"email\" data-reg=\"^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$\">\n                        <label for=\"label\" class=\"email__label label\">Email</label>\n                    </div>\n                    <div class=\"form__item _tel\">\n                        <input type=\"text\" placeholder=\"+7\" class=\"input\" id=\"phone\"  data-reg=\"^((\\+7|7|8)+([0-9]){10})$\" >\n                        <label for=\"label\" class=\"tel__label label\">Phone</label>\n                    </div>\n                    <div class=\"form__item _botton\">\n                        <button type=\"submit\" class=\"btn\">send</button>\n                    </div>\n                </form>\n                <div class=\"back\">\n                    <div class=\"line\"></div>\n                    <div class=\"line\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"title__segway\">\n            <div class=\"container\">\n              <ul class=\"product__container\">\n                <li>\n                  <article class=\"product\">\n                    <!-- <div class=\"block__top\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1\">Ninebot KickScooter E22</h1>\n                    </div> -->\n                    <div class=\"block__left\" id=\"segway_1\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">Ninebot KickScooter E22</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>939.99 $</span>\n                            <p class=\"p product__card-delete\">599.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-1\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide segway__one-img\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          \n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\">\n                      <img class=\"img__delete\" style=\"transition: all 0.5s ease;\" src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_2\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">NiNinebot\n                        Kickscooter ES1l</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>659.99 $</span>\n                            <p class=\"p product__card-delete\">389.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-2\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide segway__one-img\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\n                      <img class=\"img__delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_3\">\n                    <div class=\"btn\">In stock</div>\n                    <h1 class=\"h1 h product__card-delete\">NiNinebot\n                      Kickscooter Air T15</h1>\n                    <div class=\"block__warranty\">\n                      <p class=\"title__warranty\">\n                        Add an extended warranty from Extend\n                      </p>\n                      <div class=\"block__segway\">\n                        <div class=\"block__money\">\n                          <span>1049.99 $</span>\n                          <p class=\"p product__card-delete\">819.99 $</p>\n                        </div>\n                        <h4>Segway Protective Gear Set as a gift</h4>\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                      </div>\n                      <div class=\"block__btn\">\n                        <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                        <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"block__right\" id=\"segway_img-3\">\n                    <div class=\"swiper\">\n                      <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                        <div class=\"swiper-slide\">\n                          <img\n                            class=\"img__segway\"\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\"\n                            alt=\"\"\n                          />\n                        </div>\n                        <div class=\"swiper-slide active\">\n                          <img\n                            class=\"img__segway\"\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_35___ + "\"\n                            alt=\"\"\n                          />\n                        </div>\n                        <div class=\"swiper-slide active\">\n                          <img\n                            class=\"img__segway\"\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_36___ + "\"\n                            alt=\"\"\n                          />\n                        </div>\n                        <div class=\"swiper-slide active\">\n                          <img\n                            class=\"img__segway\"\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_37___ + "\"\n                            alt=\"\"\n                          />\n                        </div>\n                        <div class=\"swiper-slide active\">\n                          <img\n                            class=\"img__segway\"\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_38___ + "\"\n                            alt=\"\"\n                          />\n                        </div>\n                        <div class=\"swiper-slide active\">\n                          <img\n                            class=\"img__segway\"\n                            src=\"" + ___HTML_LOADER_REPLACEMENT_39___ + "\"\n                            alt=\"\"\n                          />\n                        </div>\n                      </div>\n    \n                      <div class=\"swiper-pagination active\"></div>\n                    </div>\n                    <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\n                    <img class=\"img__delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\" alt=\"\">\n                  </div>\n                </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_4\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">NiNinebot Kickscooter f30</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>749.99 $</span>\n                            <p class=\"p product__card-delete\">649.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-4\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_40___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_41___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_42___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_43___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_44___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_45___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\n                      <img class=\"img__delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_40___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_5\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">NiNinebot Kickscooter e45</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>749.99 $</span>\n                            <p class=\"p product__card-delete\">649.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-5\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_46___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_47___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_48___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_49___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_50___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\">\n                      <img class=\"img__delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_46___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_6\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">NiNinebot Kickscooter MAX</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>609.99 $</span>\n                            <p class=\"p product__card-delete\">549.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-6\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_51___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_52___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_53___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_54___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_55___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_56___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_57___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\">\n                      <img class=\"img__delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_51___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_7\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">NiNinebot Kickscooter MAX</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>709.99 $</span>\n                            <p class=\"p product__card-delete\">629.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-7\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_58___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_59___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_60___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_61___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_62___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_63___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\n                      <img class=\"img__delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_58___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_8\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">NiNinebot Kickscooter es2</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>809.99 $</span>\n                            <p class=\"p product__card-delete\">649.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-8\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_64___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_65___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_66___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_67___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_68___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_69___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_70___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\">\n                      <img class=\"img__delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_64___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_9\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">NiNinebot Kickscooter es3</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>849.99 $</span>\n                            <p class=\"p product__card-delete\">709.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-9\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_71___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_72___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_73___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_74___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_75___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_76___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\">\n                      <img class=\"img__delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_71___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_10\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">NINEBOT EKICKSCOOTER ZING E8</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>509.99 $</span>\n                            <p class=\"p product__card-delete\">409.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-10\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_77___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_78___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_79___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_80___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_81___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_82___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\">\n                      <img class=\"img__delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_77___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_11\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">Ninebot eKickScooter Zing E10</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>509.99 $</span>\n                            <p class=\"p product__card-delete\">449.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-11\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_83___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_84___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_85___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_86___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_87___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\">\n                      <img class=\"img__delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_83___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_12\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">Ninebot KickScooter Zing E12</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>609.99 $</span>\n                            <p class=\"p product__card-delete\">549.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-12\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_88___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_89___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          \n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\">\n                      <img class=\"img__delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_88___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_13\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">NINEBOT KICKSCOOTER ES4</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>949.99 $</span>\n                            <p class=\"p product__card-delete\">849.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-13\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_90___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_91___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_92___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_93___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_94___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_95___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                        </div>\n      \n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\">\n                      <img class=\"img__delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_90___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n                <li>\n                  <article class=\"product\">\n                    <div class=\"block__left\" id=\"segway_14\">\n                      <div class=\"btn\">In stock</div>\n                      <h1 class=\"h1 h product__card-delete\">Accessories</h1>\n                      <div class=\"block__warranty\">\n                        <p class=\"title__warranty\">\n                          Add an extended warranty from Extend\n                        </p>\n                        <div class=\"block__segway\">\n                          <div class=\"block__money\">\n                            <span>209.99 $</span>\n                            <p class=\"p product__card-delete\">109.99 $</p>\n                          </div>\n                          <h4>Segway Protective Gear Set as a gift</h4>\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                        </div>\n                        <div class=\"block__btn\">\n                          <button type=\"submit\" class=\"btn btn__cart product__card-delete\">BUY IT Now</button>\n                          <button type=\"submit\" class=\"btn\">ADD TO CART</button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"block__right\" id=\"segway_img-14\">\n                      <div class=\"swiper\">\n                        <div class=\"swiper-wrapper active\" id=\"segway_1\">\n                          <div class=\"swiper-slide\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_96___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_97___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          <div class=\"swiper-slide active\">\n                            <img\n                              class=\"img__segway\"\n                              src=\"" + ___HTML_LOADER_REPLACEMENT_98___ + "\"\n                              alt=\"\"\n                            />\n                          </div>\n                          </div>\n                        <div class=\"swiper-pagination active\"></div>\n                      </div>\n                      <img class=\"img__segway-one product__card-delete\" style=\"display: none;\" src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n                      <img class=\"img__delete\" style=\"display: none; transition: all 0.5s ease;\" src=\"" + ___HTML_LOADER_REPLACEMENT_96___ + "\" alt=\"\">\n                    </div>\n                  </article>\n                </li>\n              </ul>  \n            </div>\n          </div>\n          \n        </section>\n        <section class=\"section\" id=\"shipping\">\n          <div class=\"container\" id=\"shipping__phone\">\n            <div class=\"benefits__btn\">\n              <div class=\"benefit\" data-segway=\"#tab-benefit-1\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_99___ + "\" alt=\"\" />\n                <p>Delivery within 1 business day</p>\n              </div>\n              <div class=\"benefit\" data-segway=\"#tab-benefit-2\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_100___ + "\" alt=\"\" />\n                <p>Basic 1 year warranty</p>\n              </div>\n              <div class=\"benefit\" data-segway=\"#tab-benefit-3\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_101___ + "\" alt=\"\" />\n                <p>After Sales Support</p>\n              </div>\n              <div class=\"benefit\" data-segway=\"#tab-benefit-4\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_102___ + "\" alt=\"\" />\n                <p>Up to 40 miles per charge</p>\n              </div>\n            </div>\n            <div class=\"benefits__segway\">\n              <div class=\"container__benefit\" id=\"tab-benefit-1\">\n                <div class=\"left\">\n                  <h3>\n                    WE ARE IN <br />\n                    LOS ANGELES, CA\n                  </h3>\n                  <p class=\"p\">\n                    Free California 1 day shipping.<br />\n                    US Free Shipping 3-5 Days\n                  </p>\n                </div>\n                <img class=\"map\" src=\"" + ___HTML_LOADER_REPLACEMENT_103___ + "\" alt=\"\" />\n              </div>\n              <div class=\"container__benefit\" id=\"tab-benefit-2\">\n                <div class=\"left\">\n                  <h3>\n                    One year<br />\n                    manunfacturer`s warranty\n                  </h3>\n                  <p class=\"p\">\n                    The basec warranty is 1 year.<br />\n                    You can also extend the warranty up to 4 years\n                  </p>\n                </div>\n                <div class=\"right\">\n                  <span>1</span>\n                </div>\n              </div>\n              <div class=\"container__benefit\" id=\"tab-benefit-3\">\n                <div class=\"left\">\n                  <h3>After Sales<br />Support</h3>\n                  <p class=\"p\">\n                    If you have any difficulties with your kickscooter, our\n                    specialists will<br />\n                    contact you within 15 minutes\n                  </p>\n                </div>\n                <div class=\"right\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_104___ + "\" alt=\"\" />\n                </div>\n              </div>\n              <div class=\"container__benefit\" id=\"tab-benefit-4\">\n                <div class=\"left\">\n                  <h3>Up to 40 miles of range <br />on a single charge</h3>\n                  <p class=\"p\">\n                    With a range of up to 40 miles, the longest range on the\n                    market, and a 20˚uphill climbing angle, the KickScooter MAX\n                    allows you to ride from San Francisco Bay Area to Palo Alto\n                    on a single charge.\n                  </p>\n                </div>\n                <div class=\"right\">\n                  <span>40</span>\n                  <p class=\"span-p\">MILES</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"section\" id=\"blog\">\n          <div class=\"container\" id=\"blog__phone\">\n            <div class=\"section__container\">\n              <div class=\"left\">\n                <h2>Packing List</h2>\n                <iframe\n                  width=\"560\"\n                  height=\"315\"\n                  src=\"https://www.youtube.com/embed/jNERlp5frhw\"\n                  title=\"YouTube video player\"\n                  frameborder=\"0\"\n                  allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n                  allowfullscreen\n                ></iframe>\n              </div>\n              <div class=\"img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_105___ + "\" alt=\"\" />\n              </div>\n            </div>\n            <div class=\"section__container-phone\">\n              <h2>Packing List</h2>\n              <div class=\"img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_105___ + "\" alt=\"\" />\n              </div>\n              <iframe\n                width=\"560\"\n                height=\"315\"\n                src=\"https://www.youtube.com/embed/jNERlp5frhw\"\n                title=\"YouTube video player\"\n                frameborder=\"0\"\n                allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n                allowfullscreen\n              ></iframe>\n            </div>\n          </div>\n        </section>\n        <section class=\"section\">\n          <div class=\"container\">\n            <h2>Accessories</h2>\n            <div id=\"slider-1\" class=\"container__accessories\">\n              <div class=\"accessories__line product__container\">\n                <div class=\"accessories product\">\n                  <div class=\"ellipse\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_106___ + "\" alt=\"\" />\n                    <img class=\"img__segway-one product__card-delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_107___ + "\" alt=\"\" />\n                  </div>\n                  <h4 class=\"h product__card-delete\">\n                    NineboT<br />\n                    Engine Speaker\n                  </h4>\n                  <p>\n                    The built-in engine sound simulation system can simulate the\n                    realistic engine roar based on the vehicle's accelerator,\n                    brake, speed, and other signals\n                  </p>\n                  <span class=\"p product__card-delete\">129.99 $</span>\n                  <button type=\"submit\" class=\"btn btn__cart product__card-delete\">ADD TO CART</button>\n                </div>\n                <div class=\"accessories product\">\n                  <div class=\"ellipse\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_108___ + "\" alt=\"\" />\n                    <img class=\"img__cart img__segway-one product__card-delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_109___ + "\" alt=\"\" />\n                  </div>\n                  <h4 class=\"h product__card-delete\">\n                    Extension<br />\n                    Rod\n                  </h4>\n                  <p>\n                    The Extension Rod helps you to easily maneuver your scooter,\n                    so you no longer need to bend over and push it, making it\n                    easier to take with you anywhere.\n                  </p>\n                  <span class=\"p product__card-delete\">29.99 $</span>\n                  <button type=\"submit\" class=\"btn btn__cart product__card-delete\">ADD TO CART</button>\n                </div>\n                <div class=\"accessories product\">\n                  <div class=\"ellipse\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_110___ + "\" alt=\"\" />\n                    <img class=\"img__cart img__segway-one product__card-delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_111___ + "\" alt=\"\" />\n                  </div>\n                  <h4 class=\"h product__card-delete\">\n                    Segway Protective<br />\n                    Gear Set\n                  </h4>\n                  <p>\n                    The curved, streamlined design of the helmet shell, coupled\n                    with the thick, high-quality fabrics create a helmet that is\n                    stylish, protective and comfortable to wear.\n                  </p>\n                  <span class=\"p product__card-delete\">29.99 $</span>\n                  <button type=\"submit\" class=\"btn btn__cart product__card-delete\">ADD TO CART</button>\n                </div>\n                <div class=\"accessories product\">\n                  <div class=\"ellipse\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_112___ + "\" alt=\"\" />\n                    <img class=\"img__cart img__segway-one product__card-delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_113___ + "\" alt=\"\" />\n                  </div>\n                  <h4 class=\"h product__card-delete\">\n                    Ninebot Leisure<br />\n                    Backpack\n                  </h4>\n                  <p>\n                    The Ninebot leisure backpack adopts a stylish gray-yellow\n                    color contrast, adding a trendy accessory to your wardrobe.\n                  </p>\n                  <span class=\"p product__card-delete\">69.99 $</span>\n                  <button type=\"submit\" class=\"btn btn__cart product__card-delete\">ADD TO CART</button>\n                </div>\n                <div class=\"accessories product\">\n                  <div class=\"ellipse\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_114___ + "\" alt=\"\" />\n                    <img class=\"img__cart img__segway-one product__card-delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_115___ + "\" alt=\"\" />\n                  </div>\n                  <h4 class=\"h product__card-delete\">Segway External<br />Battery</h4>\n                  <p>\n                    It is easy to install and increases the range of the ES1, ES2\n                    & E22 to 27.9, 28 and 27 miles respectively and It also\n                    increases the speed\n                  </p>\n                  <span class=\"p product__card-delete\">249.99 $</span>\n                  <button type=\"submit\" class=\"btn btn__cart product__card-delete\">ADD TO CART</button>\n                </div>\n                <div class=\"accessories product\">\n                  <div class=\"ellipse\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_116___ + "\" alt=\"\" />\n                    <img class=\"img__cart img__segway-one product__card-delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_117___ + "\" alt=\"\" />\n                  </div>\n                  <h4 class=\"h product__card-delete\">\n                    Segway<br />\n                    Charger\n                  </h4>\n                  <p>\n                    Whether at home, the office, or on your KickScooter journey,\n                    this Ninebot KickScooter by Segway Charger is designed to\n                    provide a safe and stable charge anytime, anywhere.\n                  </p>\n                  <span class=\"p product__card-delete\">79.99 $</span>\n                  <button type=\"submit\" class=\"btn btn__cart product__card-delete\">ADD TO CART</button>\n                </div>\n                <div class=\"accessories product\">\n                  <div class=\"ellipse\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_118___ + "\" alt=\"\" />\n                    <img class=\"img__cart img__segway-one product__card-delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_119___ + "\" alt=\"\" />\n                  </div>\n                  <h4 class=\"h product__card-delete\">\n                    Segway<br />\n                    Scooter Bag\n                  </h4>\n                  <p>\n                    Tough EVA material, suitable for the entire Ninebot\n                    KickScooter by Segway line. 3L capacity gives you plenty of\n                    room to carry your phone, charger, bottled water, and other\n                    personal items.\n                  </p>\n                  <span class=\"p product__card-delete\">49.99 $</span>\n                  <button type=\"submit\" class=\"btn btn__cart product__card-delete\">ADD TO CART</button>\n                </div>\n                <div class=\"accessories product\">\n                  <div class=\"ellipse\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_120___ + "\" alt=\"\" />\n                    <img class=\"img__cart img__segway-one product__card-delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_121___ + "\" alt=\"\" />\n                  </div>\n                  <h4 class=\"h product__card-delete\">\n                    Segway<br />\n                    Phone Holder\n                  </h4>\n                  <p>\n                    The dual screw, non-slip design offers ultimate security and\n                    versatility. The phone holder is applicable to multiple\n                    vehicle series.\n                  </p>\n                  <span class=\"p product__card-delete\">29.99 $</span>\n                  <button type=\"submit\" class=\"btn btn__cart product__card-delete\">ADD TO CART</button>\n                </div>\n                <div class=\"accessories product\">\n                  <div class=\"ellipse\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_122___ + "\" alt=\"\" />\n                    <img class=\"img__cart img__segway-one product__card-delete\" src=\"" + ___HTML_LOADER_REPLACEMENT_107___ + "\" alt=\"\" />\n                  </div>\n                  <h4 class=\"h product__card-delete\">\n                    Segway<br />\n                    Phone Holder\n                  </h4>\n                  <p>\n                    This scooter seat is designed to work with the MAX. It offers\n                    high quality, comfort and safety that is in line with the MAX\n                    KickScooter.\n                  </p>\n                  <span class=\"p product__card-delete\">119.99 $</span>\n                  <button type=\"submit\" class=\"btn btn__cart product__card-delete\">ADD TO CART</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"section\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_123___ + "\" alt=\"\" />\n        </section>\n        <section class=\"section\">\n          <div class=\"container\">\n            <h2>IMPRESSIVE FEATURES</h2>\n            <div class=\"features__segway\">\n              <div class=\"feature__segway\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_124___ + "\" alt=\"\" />\n                <h5>10</h5>\n                <p>Pneumatic Tires</p>\n              </div>\n              <div class=\"feature__segway\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_125___ + "\" alt=\"\" />\n                <h5>LED</h5>\n                <p>Front LED Lights</p>\n              </div>\n              <div class=\"feature__segway\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_126___ + "\" alt=\"\" />\n                <h5>18.6 mph</h5>\n                <p>Max Speed</p>\n              </div>\n              <div class=\"feature__segway\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_127___ + "\" alt=\"\" />\n                <h5>40.4 Miles</h5>\n                <p>Max Range</p>\n              </div>\n\n              <div class=\"feature__segway\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_128___ + "\" alt=\"\" />\n                <h5>20%</h5>\n                <p>Hill Grade</p>\n              </div>\n              <div class=\"feature__segway\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_129___ + "\" alt=\"\" />\n                <h5>IPX5</h5>\n                <p>Water-Resistant</p>\n              </div>\n              <div class=\"feature__segway\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_130___ + "\" alt=\"\" />\n                <h5>6H</h5>\n                <p>Fast Charging</p>\n              </div>\n              <div class=\"feature__segway\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_131___ + "\" alt=\"\" />\n                <h5>551Wh</h5>\n                <p>Battery</p>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"section\">\n          <div class=\"container\">\n            <h2>KickScooter overview SEGWAY Ninebot Kickscooter MAX</h2>\n            <div class=\"block__segway\">\n              <img class=\"img__segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_132___ + "\" alt=\"\" />\n              <div class=\"block__position\">\n                <div class=\"buttom__line\">\n                  <span class=\"span-h active\" id=\"span-1\">Electronic Throttle •</span>\n                  <div class=\"lines active\" id=\"lines-1\">\n                    <svg\n                      width=\"252\"\n                      height=\"110\"\n                      viewBox=\"0 0 252 110\"\n                      fill=\"none\"\n                      stroke=\"#000\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M251 1H139L1 109\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n\n                  <div class=\"dot active\" data-lines=\"#lines-1\" data-span=\"#span-1\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                </div>\n                <div class=\"buttom__line\">\n                  <span class=\"span-h\" id=\"span-2\">Bell •</span>\n                  <div class=\"lines\" id=\"lines-2\">\n                    <svg\n                      width=\"320\"\n                      height=\"119\"\n                      viewBox=\"0 0 320 119\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M318.5 1H250.5L106 117.5H1\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"dot\" data-lines=\"#lines-2\" data-span=\"#span-2\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                </div>\n                <div class=\"buttom__line\">\n                  <span class=\"span-h\" id=\"span-3\">Brake Lewer •</span>\n                  <div class=\"lines\" id=\"lines-3\">\n                    <svg\n                      width=\"224\"\n                      height=\"131\"\n                      viewBox=\"0 0 207 131\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M206 1L41.5 129.5H1\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"dot\" data-lines=\"#lines-3\" data-span=\"#span-3\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                </div>\n                <div class=\"buttom__line\">\n                  <span class=\"span-h\" id=\"span-4\">Headlight •</span>\n                  <div class=\"lines\" id=\"lines-4\">\n                    <svg\n                      width=\"310\"\n                      height=\"161\"\n                      viewBox=\"0 0 298 161\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M296.5 1.5L96 159.5H1\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"dot\" data-lines=\"#lines-4\" data-span=\"#span-4\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                </div>\n                <div class=\"buttom__line\">\n                  <span class=\"span-h\" id=\"span-5\">Quick Release Lever • </span>\n                  <div class=\"lines\" id=\"lines-5\">\n                    <svg\n                      width=\"190\"\n                      height=\"19\"\n                      viewBox=\"0 0 180 19\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M178.5 1L142.5 17.5H1\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"dot\" data-lines=\"#lines-5\" data-span=\"#span-5\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                </div>\n                <div class=\"buttom__line\">\n                  <span class=\"span-h\" id=\"span-6\">Folding Mechanism • </span>\n                  <div class=\"lines\" id=\"lines-6\">\n                    <svg\n                      width=\"211\"\n                      height=\"30\"\n                      viewBox=\"0 0 211 30\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M209.5 1.5L161 28.5621H1\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"dot\" data-lines=\"#lines-6\" data-span=\"#span-6\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                </div>\n                <div class=\"buttom__line\">\n                  <span class=\"span-h\" id=\"span-7\">Front Fork • </span>\n                  <div class=\"lines\" id=\"lines-7\">\n                    <svg\n                      width=\"249\"\n                      height=\"14\"\n                      viewBox=\"0 0 249 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M248 13L194 1.5H1.5\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"dot\" data-lines=\"#lines-7\" data-span=\"#span-7\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                </div>\n                <div class=\"buttom__line\">\n                  <span class=\"span-h\" id=\"span-8\">Drum Brake • </span>\n                  <div class=\"lines\" id=\"lines-8\">\n                    <svg\n                      width=\"244\"\n                      height=\"25\"\n                      viewBox=\"0 0 244 25\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M242.5 23.5H189L161.5 1.5H1.5\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"dot\" data-lines=\"#lines-8\" data-span=\"#span-8\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                </div>\n\n                <div class=\"buttom__line\">\n                  <div class=\"dot\" data-lines=\"#lines-9\" data-span=\"#span-9\" data-dots=\"#dots-9\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"lines\" id=\"lines-9\">\n                    <svg\n                      width=\"332\"\n                      height=\"60\"\n                      viewBox=\"0 0 332 60\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M330.5 58.5H134L75 1.5H1\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"span-h\" id=\"span-9\">• Dashboard & Power Button</span>\n                </div>\n                <div class=\"buttom__line\">\n                  <div class=\"dot\" data-lines=\"#lines-10\" data-span=\"#span-10\" data-dots=\"#dots-10\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"lines\" id=\"lines-10\">\n                    <svg\n                      width=\"528\"\n                      height=\"28\"\n                      viewBox=\"0 0 528 28\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M526.5 1.5H46L1 26.4997\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"span-h\" id=\"span-10\">• Stem</span>\n                </div>\n                <div class=\"buttom__line\">\n                  <div class=\"dot\" data-lines=\"#lines-11\" data-span=\"#span-11\" data-dots=\"#dots-11\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"lines\" id=\"lines-11\">\n                    <svg\n                      width=\"314\"\n                      height=\"240\"\n                      viewBox=\"0 0 314 240\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M312.5 1.5H228.5L1.5 239\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"span-h\" id=\"span-11\">•  Battery Compartment</span>\n                </div>\n                <div class=\"buttom__line\">\n                  <div class=\"dot\" data-lines=\"#lines-12\" data-span=\"#span-12\" data-dots=\"#dots-12\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"lines\" id=\"lines-12\">\n                    <svg\n                      width=\"270\"\n                      height=\"172\"\n                      viewBox=\"0 0 270 172\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M268.5 1.5H170.5L1.5 171\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"span-h\" id=\"span-12\">• Порт для зарядки</span>\n                </div>\n                <div class=\"buttom__line\">\n                  <div class=\"dot\" data-lines=\"#lines-13\" data-span=\"#span-13\" data-dots=\"#dots-13\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"lines\" id=\"lines-13\">\n                    <svg\n                      width=\"310\"\n                      height=\"187\"\n                      viewBox=\"0 0 310 187\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M308.5 1.5H186L1.5 186\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"span-h\" id=\"span-13\">• Charge Port</span>\n                </div>\n                <div class=\"buttom__line\">\n                  <div class=\"dot\" data-lines=\"#lines-14\" data-span=\"#span-14\" data-dots=\"#dots-14\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"lines\" id=\"lines-14\">\n                    <svg\n                      width=\"250\"\n                      height=\"96\"\n                      viewBox=\"0 0 250 96\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M248.5 1.5H145.5L109.5 1L1 94.5\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"span-h\" id=\"span-14\">• Kickstand</span>\n                </div>\n                <div class=\"buttom__line\">\n                  <div class=\"dot\" data-lines=\"#lines-15\" data-span=\"#span-15\" data-dots=\"#dots-15\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"lines\" id=\"lines-15\">\n                    <svg\n                      width=\"204\"\n                      height=\"66\"\n                      viewBox=\"0 0 204 66\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M1.5 65L81 1.5H202.5\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"span-h\" id=\"span-15\">• Rear Fender</span>\n                </div>\n                <div class=\"buttom__line\">\n                  <div class=\"dot\" data-lines=\"#lines-16\" data-span=\"#span-16\" data-dots=\"#dots-16\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"lines\" id=\"lines-16\">\n                    <svg\n                      width=\"181\"\n                      height=\"50\"\n                      viewBox=\"0 0 181 50\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M180 1.5H68.5L1.5 48.4999\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"span-h\" id=\"span-16\">• Brake Light</span>\n                </div>\n                <div class=\"buttom__line\">\n                  <div class=\"dot\" data-lines=\"#lines-17\" data-span=\"#span-17\" data-dots=\"#dots-17\">\n                    <svg\n                      class=\"svg-1\"\n                      width=\"15\"\n                      height=\"15\"\n                      viewBox=\"0 0 15 14\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"7.5\"\n                        cy=\"7\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                    </svg>\n\n                    <svg\n                      class=\"svg-2\"\n                      width=\"27\"\n                      height=\"26\"\n                      viewBox=\"0 0 27 26\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <circle\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"6\"\n                        fill=\"white\"\n                        stroke=\"#009EFF\"\n                        stroke-width=\"2\"\n                      />\n                      <circle\n                        opacity=\"0.1\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"13\"\n                        fill=\"url(#paint0_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.2\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"11\"\n                        fill=\"url(#paint1_radial_135_3661)\"\n                      />\n                      <circle\n                        opacity=\"0.3\"\n                        cx=\"13.5\"\n                        cy=\"13\"\n                        r=\"9\"\n                        fill=\"url(#paint2_radial_135_3661)\"\n                      />\n                    </svg>\n                  </div>\n                  <div class=\"lines\" id=\"lines-17\">\n                    <svg\n                      width=\"214\"\n                      height=\"46\"\n                      viewBox=\"0 0 214 46\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        opacity=\"0.5\"\n                        d=\"M212.5 1.5L62 1.5L1.5 44.9998\"\n                        stroke=\"#none\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"span-h\" id=\"span-17\">• Hub Motor</span>\n                </div>\n              </div>\n              <div class=\"block__position-phone\">\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>1</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>2</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>3</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>4</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>5</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>6</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>7</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>8</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>9</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>10</span>\n                </div>\n\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>11</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>12</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>13</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>14</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>15</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>16</span>\n                </div>\n                <div class=\"button__dot\">\n                  <svg\n                    viewBox=\"0 0 15 14\"\n                    fill=\"#009EFF\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <circle\n                      cx=\"7.5\"\n                      cy=\"7\"\n                      r=\"6\"\n                      fill=\"#009EFF\"\n                      stroke=\"white\"\n                      stroke-width=\"1\"\n                    />\n                  </svg>\n                  <span>17</span>\n                </div>\n\n                <ol class=\"block__title\">\n                  <li>Electronic Throttle</li>\n                  <li>Bell</li>\n                  <li>Brake Lewer</li>\n                  <li>Headlight</li>\n                  <li>Quick Release Lever</li>\n                  <li>Folding Mechanism</li>\n                  <li>Front Fork</li>\n                  <li>Drum Brake</li>\n                  <li>Dashboard & Power Button</li>\n                  <li>Stem</li>\n                  <li>Battery Compartment</li>\n                  <li>Charge Port</li>\n                  <li>Kickstand</li>\n                  <li>Buckle</li>\n                  <li>Rear Fender</li>\n                  <li>Brake Light</li>\n                  <li>Hub Motor</li>\n                </ol>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"section\">\n          <div class=\"decstop\">\n            <img class=\"ellipse\" src=\"" + ___HTML_LOADER_REPLACEMENT_133___ + "\" alt=\"\" />\n            <div class=\"section__container\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_134___ + "\" alt=\"\" />\n              <div class=\"container\">\n                <div class=\"block__title\">\n                  <h2>Smart battery Management system (Smart-BMS)</h2>\n                  <p>\n                    The Smart-BMS closely monitors the battery status with\n                    multiple protection mechanisms to ensure the battery\n                    durability\n                  </p>\n                </div>\n              </div>\n            </div>\n            <img class=\"battery\" src=\"" + ___HTML_LOADER_REPLACEMENT_134___ + "\" alt=\"\" />\n          </div>\n          <div class=\"phone\">\n            <div class=\"container\">\n              <img class=\"battery-1\" src=\"" + ___HTML_LOADER_REPLACEMENT_135___ + "\" alt=\"\" />\n              <div class=\"block__title\">\n                <h2>\n                  Smart battery Management<br />\n                  system (Smart-BMS)\n                </h2>\n                <p>\n                  The Smart-BMS closely monitors the battery<br />\n                  status with multiple protection mechanisms to<br />\n                  ensure the battery durability\n                </p>\n              </div>\n            </div>\n            <img class=\"battery\" src=\"" + ___HTML_LOADER_REPLACEMENT_135___ + "\" alt=\"\" />\n          </div>\n        </section>\n        <section class=\"section\">\n          <img class=\"img\" src=\"" + ___HTML_LOADER_REPLACEMENT_136___ + "\" alt=\"\" />\n          <div class=\"section__container\">\n            <div class=\"container\">\n              <div class=\"block__title\">\n                <h2>Dual Braking System</h2>\n                <div class=\"text\">\n                  <p>\n                    Simultaneous mechanical front drum brake and regenerative\n                    electric back brake provide both stability and steerability.\n                  </p>\n                  <span>*IPX5 water resistance</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"section\">\n          <img class=\"img\" src=\"" + ___HTML_LOADER_REPLACEMENT_137___ + "\" alt=\"\" />\n          <img class=\"img-1\" src=\"" + ___HTML_LOADER_REPLACEMENT_138___ + "\" alt=\"\" />\n          <img class=\"img-2\" src=\"" + ___HTML_LOADER_REPLACEMENT_139___ + "\" alt=\"\" />\n          <div class=\"section__container\">\n            <div class=\"container\">\n              <h2>Built-In Front LED Light</h2>\n              <div class=\"text\">\n                <p>\n                  Front-facing lights are designed with 2.5w high-brightness LED\n                  light to illuminate the path ahead of you and increase your\n                  visibility to others around you.\n                </p>\n                <span\n                  >*Disclaimer: for your safety, please try not to ride at\n                  night</span\n                >\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"section\">\n          <div class=\"section__container\">\n            <div class=\"container\">\n              <h2>One-step Folding Mechanism</h2>\n              <p>\n                Ninebot KickScooter MAX can be easily folded and carried around\n                in 3 seconds.\n              </p>\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_140___ + "\" alt=\"\" />\n            </div>\n          </div>\n        </section>\n        <section class=\"section\">\n          <img class=\"img-1\" src=\"" + ___HTML_LOADER_REPLACEMENT_141___ + "\" alt=\"\" />\n          <img class=\"img-2\" src=\"" + ___HTML_LOADER_REPLACEMENT_142___ + "\" alt=\"\" />\n          <img class=\"ellipse\" src=\"" + ___HTML_LOADER_REPLACEMENT_133___ + "\" alt=\"\" />\n          <div class=\"section__container\">\n            <div class=\"container\">\n              <h2>Regenerative Brake for Power Recycle</h2>\n              <p>\n                The innovative regenerative brake system turns Ninebot\n                KickScooter MAX into an electric vehicle powered by electricity\n                and recycled energy from riding. Energy will be collected from\n                regenerative braking and distributed when you need a boost.\n              </p>\n            </div>\n          </div>\n        </section>\n        <section class=\"section\">\n          <img class=\"img\" src=\"" + ___HTML_LOADER_REPLACEMENT_143___ + "\" alt=\"\" />\n          <div class=\"section__container\">\n            <div class=\"container\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_144___ + "\" alt=\"\" />\n              <div class=\"text\">\n                <h2>Easy One Cord Fast Charging</h2>\n                <p>\n                  The built-in charger lets riders recharge it easily when on\n                  the go without having to carry along a bulky charging adapter.\n                  3A fast charge will give Ninebot KickScooter MAX a full charge\n                  in 6 hours.\n                </p>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"section\">\n          <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_145___ + "\" alt=\"\" />\n          <img class=\"ellipse\" src=\"" + ___HTML_LOADER_REPLACEMENT_133___ + "\" alt=\"\" />\n          <img\n            class=\"big__ellipse\"\n            src=\"" + ___HTML_LOADER_REPLACEMENT_146___ + "\"\n            alt=\"\"\n          />\n          <div class=\"section__container\">\n            <div class=\"container\">\n              <div class=\"text\">\n                <h2>3 Riding Modes</h2>\n                <p>\n                  Eco, Standard, and Sports modes can be directly accessed by\n                  the intuitive LED dashboard, which also displays maintenance\n                  signals, power levels, Bluetooth connectivity and more.\n                </p>\n              </div>\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_145___ + "\" alt=\"\" />\n            </div>\n          </div>\n        </section>\n        <section class=\"section\">\n          <div class=\"section__container\">\n            <div class=\"container__manual\">\n              <img class=\"img\" src=\"" + ___HTML_LOADER_REPLACEMENT_147___ + "\" alt=\"\" />\n              <div class=\"title__manual\">\n                <h2>DOWNLOAD manual</h2>\n                <div class=\"benefits\">\n                  <div class=\"benefit\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_148___ + "\" alt=\"\" />\n                    <p>\n                      Assembly and<br />\n                      preparation for the trip\n                    </p>\n                  </div>\n                  <div class=\"benefit\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_149___ + "\" alt=\"\" />\n                    <p>\n                      How to charge<br />\n                      a scooter\n                    </p>\n                  </div>\n                  <div class=\"benefit\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_150___ + "\" alt=\"\" />\n                    <p>\n                      How to ride<br />\n                      properly\n                    </p>\n                  </div>\n                </div>\n                <a class=\"btn\" href=\"assets/pdf/inctruction/ninebot-max.pdf\"\n                  >Download manual\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_151___ + "\" alt=\"\" />\n                </a>\n              </div>\n            </div>\n          </div>\n        </section>\n\n        <section class=\"section\" id=\"feature\">\n          <img class=\"ellipse\" src=\"" + ___HTML_LOADER_REPLACEMENT_152___ + "\" alt=\"\" />\n          <div class=\"container\" id=\"feature__phone\">\n            <h2>compare specifications</h2>\n            <p>Add model to compare</p>\n            <div class=\"container__segway\">\n              <div class=\"slider\">\n                <div class=\"slider__line\">\n                  <div class=\"slider__segway-1 slider__segway in-visible\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_153___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter E22\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>20 км/ч</span>\n                      <span>22 км</span>\n                      <span>5100 mAh</span>\n                      <span>13.5 кг</span>\n                      <span>25 кг - 100 кг</span>\n                      <span>3.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.071kW)</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$599.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\"slider__segway-2 slider__segway\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_154___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter ES1l\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>20 км/ч</span>\n                      <span>22 км</span>\n                      <span>184 wAh</span>\n                      <span>10.3 кг</span>\n                      <span>25 кг - 100 кг</span>\n                      <span>6 часов</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 250W</span>\n                      <span>42W (0.042kW)</span>\n                      <span>7%</span>\n                      <span>Пережняя</span>\n                      <span>----</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$389.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\"slider__segway-3 slider__segway\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_155___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter E22\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>20 км/ч</span>\n                      <span>12 км</span>\n                      <span>4000 mAh</span>\n                      <span>10.5 кг</span>\n                      <span>30 кг - 100 кг</span>\n                      <span>6 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.071kW)</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$819.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\"slider__segway-4 slider__segway\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_153___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter E22\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>25 км/ч</span>\n                      <span>30 км</span>\n                      <span>7650 mAh</span>\n                      <span>15.1 кг</span>\n                      <span>30 кг - 120 кг</span>\n                      <span>5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.070kW)</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\"slider__segway-5 slider__segway\">\n                    <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_156___ + "\" alt=\"\" />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter e45\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>30 км/ч</span>\n                      <span>45 км</span>\n                      <span>10200 mAh</span>\n                      <span>16.4 кг</span>\n                      <span>25 кг - 120 кг</span>\n                      <span>7.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.070kW)</span>\n                      <span>20%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\"slider__segway-6 slider__segway\">\n                    <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_157___ + "\" alt=\"\" />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter MAX\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>30 км/ч</span>\n                      <span>65 км</span>\n                      <span>551 Wh</span>\n                      <span>18.7 кг</span>\n                      <span>30 кг - 120 кг</span>\n                      <span>6 часов</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 350W</span>\n                      <span>121 W</span>\n                      <span>20%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\"slider__segway-7 slider__segway\">\n                    <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_158___ + "\" alt=\"\" />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter MAX\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>30 км/ч</span>\n                      <span>40 км</span>\n                      <span>10200 mAh</span>\n                      <span>17.5 кг</span>\n                      <span>30 кг - 120 кг</span>\n                      <span>6.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 350W</span>\n                      <span>121 W</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\"slider__segway-8 slider__segway\">\n                    <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_159___ + "\" alt=\"\" />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter es2\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>25 км/ч</span>\n                      <span>25 км</span>\n                      <span>187 Wh</span>\n                      <span>12.5 кг</span>\n                      <span>25 кг - 120 кг</span>\n                      <span>3.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n\n                  <div class=\"slider__segway-9 slider__segway\">\n                    <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_160___ + "\" alt=\"\" />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter es3\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>25 км/ч</span>\n                      <span>45 км</span>\n                      <span>374 Wh</span>\n                      <span>13.6 кг</span>\n                      <span>25 кг - 120 кг</span>\n                      <span>7 часа</span>\n                      <span>1</span>\n                      <span>Номинальная 250W</span>\n                      <span>71W</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\"slider__segway-10 slider__segway\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_161___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter es4\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>30 км/ч</span>\n                      <span>45 км</span>\n                      <span>374 Wh</span>\n                      <span>14 кг</span>\n                      <span>25 кг - 120 кг</span>\n                      <span>3.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\"slider__segway-11 slider__segway\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_162___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      Kickscooter<br />\n                      ZING E10\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>15 км/ч</span>\n                      <span>20 км</span>\n                      <span>300 Wh</span>\n                      <span>11 кг</span>\n                      <span>15 кг - 60 кг</span>\n                      <span>3.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\"slider__segway-12 slider__segway\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_163___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      Kickscooter<br />\n                      ZING E12\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>30 км/ч</span>\n                      <span>45 км</span>\n                      <span>374 Wh</span>\n                      <span>14 кг</span>\n                      <span>25 кг - 120 кг</span>\n                      <span>3.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\"slider__segway-13 slider__segway\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_164___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter es4\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>30 км/ч</span>\n                      <span>45 км</span>\n                      <span>374 Wh</span>\n                      <span>14 кг</span>\n                      <span>25 кг - 120 кг</span>\n                      <span>3.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                </div>\n              </div>\n              <div id=\"slider-2\">\n                <div class=\"slide slide__big-phone\">\n                  <div class=\" slider__segway-1\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_153___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter E22\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>20 км/ч</span>\n                      <span>22 км</span>\n                      <span>5100 mAh</span>\n                      <span>13.5 кг</span>\n                      <span>25 кг - 100 кг</span>\n                      <span>3.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.071kW)</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$599.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\" slider__segway-2\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_154___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter ES1l\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>20 км/ч</span>\n                      <span>22 км</span>\n                      <span>184 wAh</span>\n                      <span>10.3 кг</span>\n                      <span>25 кг - 100 кг</span>\n                      <span>6 часов</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 250W</span>\n                      <span>42W (0.042kW)</span>\n                      <span>7%</span>\n                      <span>Пережняя</span>\n                      <span>----</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$389.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\" slider__segway-3\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_155___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter E22\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>20 км/ч</span>\n                      <span>12 км</span>\n                      <span>4000 mAh</span>\n                      <span>10.5 кг</span>\n                      <span>30 кг - 100 кг</span>\n                      <span>6 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.071kW)</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$819.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                </div>\n                <div class=\"slide slide__big-phone\">\n                  <div class=\" slider__segway-4\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_153___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter E22\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>25 км/ч</span>\n                      <span>30 км</span>\n                      <span>7650 mAh</span>\n                      <span>15.1 кг</span>\n                      <span>30 кг - 120 кг</span>\n                      <span>5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.070kW)</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\" slider__segway-5\">\n                    <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_156___ + "\" alt=\"\" />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter e45\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>30 км/ч</span>\n                      <span>45 км</span>\n                      <span>10200 mAh</span>\n                      <span>16.4 кг</span>\n                      <span>25 кг - 120 кг</span>\n                      <span>7.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.070kW)</span>\n                      <span>20%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\" slider__segway-6\">\n                    <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_157___ + "\" alt=\"\" />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter MAX\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>30 км/ч</span>\n                      <span>65 км</span>\n                      <span>551 Wh</span>\n                      <span>18.7 кг</span>\n                      <span>30 кг - 120 кг</span>\n                      <span>6 часов</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 350W</span>\n                      <span>121 W</span>\n                      <span>20%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                </div>\n                <div class=\"slide slide__big-phone\">\n                    <div class=\" slider__segway-7\">\n                      <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_159___ + "\" alt=\"\" />\n                      <h6>\n                        NiNinebot<br />\n                        Kickscooter es2\n                      </h6>\n                      <div class=\"feature__segway\">\n                        <span>25 км/ч</span>\n                        <span>25 км</span>\n                        <span>187 Wh</span>\n                        <span>12.5 кг</span>\n                        <span>25 кг - 120 кг</span>\n                        <span>3.5 часа</span>\n                        <span>1 встроенная</span>\n                        <span>Номинальная 300W</span>\n                        <span>71W</span>\n                        <span>15%</span>\n                        <span>----</span>\n                        <span>Задний LED-фонарь</span>\n                        <span>----</span>\n                      </div>\n                      <span class=\"money\">$649.99</span>\n                      <button class=\"btn\">BUY IT NOW</button>\n                    </div>\n                    <div class=\" slider__segway-8\">\n                      <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_160___ + "\" alt=\"\" />\n                      <h6>\n                        NiNinebot<br />\n                        Kickscooter es3\n                      </h6>\n                      <div class=\"feature__segway\">\n                        <span>25 км/ч</span>\n                        <span>45 км</span>\n                        <span>374 Wh</span>\n                        <span>13.6 кг</span>\n                        <span>25 кг - 120 кг</span>\n                        <span>7 часа</span>\n                        <span>1</span>\n                        <span>Номинальная 250W</span>\n                        <span>71W</span>\n                        <span>15%</span>\n                        <span>----</span>\n                        <span>Задний LED-фонарь</span>\n                        <span>----</span>\n                      </div>\n                      <span class=\"money\">$649.99</span>\n                      <button class=\"btn\">BUY IT NOW</button>\n                    </div>\n                    <div class=\" slider__segway-9\">\n                      <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_161___ + "\" alt=\"\" />\n                      <h6>\n                        NiNinebot<br />\n                        Kickscooter es4\n                      </h6>\n                      <div class=\"feature__segway\">\n                        <span>30 км/ч</span>\n                        <span>45 км</span>\n                        <span>374 Wh</span>\n                        <span>14 кг</span>\n                        <span>25 кг - 120 кг</span>\n                        <span>3.5 часа</span>\n                        <span>1 встроенная</span>\n                        <span>Номинальная 300W</span>\n                        <span>71W</span>\n                        <span>15%</span>\n                        <span>----</span>\n                        <span>Задний LED-фонарь</span>\n                        <span>----</span>\n                      </div>\n                      <span class=\"money\">$649.99</span>\n                      <button class=\"btn\">BUY IT NOW</button>\n                    </div>\n                </div>\n                <div class=\"slide slide__big-phone\">\n                    <div class=\" slider__segway-10\">\n                      <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_162___ + "\" alt=\"\" />\n                      <h6>\n                        Kickscooter<br />\n                        ZING E10\n                      </h6>\n                      <div class=\"feature__segway\">\n                        <span>15 км/ч</span>\n                        <span>20 км</span>\n                        <span>300 Wh</span>\n                        <span>11 кг</span>\n                        <span>15 кг - 60 кг</span>\n                        <span>3.5 часа</span>\n                        <span>1 встроенная</span>\n                        <span>Номинальная 300W</span>\n                        <span>71W</span>\n                        <span>15%</span>\n                        <span>----</span>\n                        <span>Задний LED-фонарь</span>\n                        <span>----</span>\n                      </div>\n                      <span class=\"money\">$649.99</span>\n                      <button class=\"btn\">BUY IT NOW</button>\n                    </div>\n                    <div class=\" slider__segway-11\">\n                      <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_163___ + "\" alt=\"\" />\n                      <h6>\n                        Kickscooter<br />\n                        ZING E12\n                      </h6>\n                      <div class=\"feature__segway\">\n                        <span>30 км/ч</span>\n                        <span>45 км</span>\n                        <span>374 Wh</span>\n                        <span>14 кг</span>\n                        <span>25 кг - 120 кг</span>\n                        <span>3.5 часа</span>\n                        <span>1 встроенная</span>\n                        <span>Номинальная 300W</span>\n                        <span>71W</span>\n                        <span>15%</span>\n                        <span>----</span>\n                        <span>Задний LED-фонарь</span>\n                        <span>----</span>\n                      </div>\n                      <span class=\"money\">$649.99</span>\n                      <button class=\"btn\">BUY IT NOW</button>\n                    </div>\n                    <div class=\" slider__segway-12\">\n                      <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_164___ + "\" alt=\"\" />\n                      <h6>\n                        NiNinebot<br />\n                        Kickscooter es4\n                      </h6>\n                      <div class=\"feature__segway\">\n                        <span>30 км/ч</span>\n                        <span>45 км</span>\n                        <span>374 Wh</span>\n                        <span>14 кг</span>\n                        <span>25 кг - 120 кг</span>\n                        <span>3.5 часа</span>\n                        <span>1 встроенная</span>\n                        <span>Номинальная 300W</span>\n                        <span>71W</span>\n                        <span>15%</span>\n                        <span>----</span>\n                        <span>Задний LED-фонарь</span>\n                        <span>----</span>\n                      </div>\n                      <span class=\"money\">$649.99</span>\n                      <button class=\"btn\">BUY IT NOW</button>\n                    </div>\n                </div>\n              </div>\n              <div id=\"slider-3\">\n                <div class=\"slide slide__phone\">\n                  <div class=\" slider__segway-1\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_153___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter E22\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>20 км/ч</span>\n                      <span>22 км</span>\n                      <span>5100 mAh</span>\n                      <span>13.5 кг</span>\n                      <span>25 кг - 100 кг</span>\n                      <span>3.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.071kW)</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$599.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\" slider__segway-2\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_154___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter ES1l\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>20 км/ч</span>\n                      <span>22 км</span>\n                      <span>184 wAh</span>\n                      <span>10.3 кг</span>\n                      <span>25 кг - 100 кг</span>\n                      <span>6 часов</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 250W</span>\n                      <span>42W (0.042kW)</span>\n                      <span>7%</span>\n                      <span>Пережняя</span>\n                      <span>----</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$389.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                </div>\n                <div class=\"slide slide__phone\">\n                  <div class=\" slider__segway-3\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_155___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter E22\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>20 км/ч</span>\n                      <span>12 км</span>\n                      <span>4000 mAh</span>\n                      <span>10.5 кг</span>\n                      <span>30 кг - 100 кг</span>\n                      <span>6 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.071kW)</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$819.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\" slider__segway-4\">\n                    <img\n                      class=\"segway\"\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_153___ + "\"\n                      alt=\"\"\n                    />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter E22\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>25 км/ч</span>\n                      <span>30 км</span>\n                      <span>7650 mAh</span>\n                      <span>15.1 кг</span>\n                      <span>30 кг - 120 кг</span>\n                      <span>5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.070kW)</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                </div>\n                <div class=\"slide slide__phone\">\n                  <div class=\" slider__segway-5\">\n                    <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_156___ + "\" alt=\"\" />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter e45\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>30 км/ч</span>\n                      <span>45 км</span>\n                      <span>10200 mAh</span>\n                      <span>16.4 кг</span>\n                      <span>25 кг - 120 кг</span>\n                      <span>7.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W (0.070kW)</span>\n                      <span>20%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\" slider__segway-6\">\n                    <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_157___ + "\" alt=\"\" />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter MAX\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>30 км/ч</span>\n                      <span>65 км</span>\n                      <span>551 Wh</span>\n                      <span>18.7 кг</span>\n                      <span>30 кг - 120 кг</span>\n                      <span>6 часов</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 350W</span>\n                      <span>121 W</span>\n                      <span>20%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                </div>\n                <div class=\"slide slide__phone\">\n                    <div class=\" slider__segway-7\">\n                      <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_159___ + "\" alt=\"\" />\n                      <h6>\n                        NiNinebot<br />\n                        Kickscooter es2\n                      </h6>\n                      <div class=\"feature__segway\">\n                        <span>25 км/ч</span>\n                        <span>25 км</span>\n                        <span>187 Wh</span>\n                        <span>12.5 кг</span>\n                        <span>25 кг - 120 кг</span>\n                        <span>3.5 часа</span>\n                        <span>1 встроенная</span>\n                        <span>Номинальная 300W</span>\n                        <span>71W</span>\n                        <span>15%</span>\n                        <span>----</span>\n                        <span>Задний LED-фонарь</span>\n                        <span>----</span>\n                      </div>\n                      <span class=\"money\">$649.99</span>\n                      <button class=\"btn\">BUY IT NOW</button>\n                    </div>\n                    <div class=\" slider__segway-8\">\n                      <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_160___ + "\" alt=\"\" />\n                      <h6>\n                        NiNinebot<br />\n                        Kickscooter es3\n                      </h6>\n                      <div class=\"feature__segway\">\n                        <span>25 км/ч</span>\n                        <span>45 км</span>\n                        <span>374 Wh</span>\n                        <span>13.6 кг</span>\n                        <span>25 кг - 120 кг</span>\n                        <span>7 часа</span>\n                        <span>1</span>\n                        <span>Номинальная 250W</span>\n                        <span>71W</span>\n                        <span>15%</span>\n                        <span>----</span>\n                        <span>Задний LED-фонарь</span>\n                        <span>----</span>\n                      </div>\n                      <span class=\"money\">$649.99</span>\n                      <button class=\"btn\">BUY IT NOW</button>\n                    </div>\n                </div>\n                <div class=\"slide slide__phone\">\n                  <div class=\" slider__segway-9\">\n                    <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_161___ + "\" alt=\"\" />\n                    <h6>\n                      NiNinebot<br />\n                      Kickscooter es4\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>30 км/ч</span>\n                      <span>45 км</span>\n                      <span>374 Wh</span>\n                      <span>14 кг</span>\n                      <span>25 кг - 120 кг</span>\n                      <span>3.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                  <div class=\" slider__segway-10\">\n                    <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_162___ + "\" alt=\"\" />\n                    <h6>\n                      Kickscooter<br />\n                      ZING E10\n                    </h6>\n                    <div class=\"feature__segway\">\n                      <span>15 км/ч</span>\n                      <span>20 км</span>\n                      <span>300 Wh</span>\n                      <span>11 кг</span>\n                      <span>15 кг - 60 кг</span>\n                      <span>3.5 часа</span>\n                      <span>1 встроенная</span>\n                      <span>Номинальная 300W</span>\n                      <span>71W</span>\n                      <span>15%</span>\n                      <span>----</span>\n                      <span>Задний LED-фонарь</span>\n                      <span>----</span>\n                    </div>\n                    <span class=\"money\">$649.99</span>\n                    <button class=\"btn\">BUY IT NOW</button>\n                  </div>\n                </div>\n                <div class=\"slide slide__phone\">\n                    <div class=\" slider__segway-11\">\n                      <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_163___ + "\" alt=\"\" />\n                      <h6>\n                        Kickscooter<br />\n                        ZING E12\n                      </h6>\n                      <div class=\"feature__segway\">\n                        <span>30 км/ч</span>\n                        <span>45 км</span>\n                        <span>374 Wh</span>\n                        <span>14 кг</span>\n                        <span>25 кг - 120 кг</span>\n                        <span>3.5 часа</span>\n                        <span>1 встроенная</span>\n                        <span>Номинальная 300W</span>\n                        <span>71W</span>\n                        <span>15%</span>\n                        <span>----</span>\n                        <span>Задний LED-фонарь</span>\n                        <span>----</span>\n                      </div>\n                      <span class=\"money\">$649.99</span>\n                      <button class=\"btn\">BUY IT NOW</button>\n                    </div>\n                    <div class=\" slider__segway-12\">\n                      <img class=\"segway\" src=\"" + ___HTML_LOADER_REPLACEMENT_164___ + "\" alt=\"\" />\n                      <h6>\n                        NiNinebot<br />\n                        Kickscooter es4\n                      </h6>\n                      <div class=\"feature__segway\">\n                        <span>30 км/ч</span>\n                        <span>45 км</span>\n                        <span>374 Wh</span>\n                        <span>14 кг</span>\n                        <span>25 кг - 120 кг</span>\n                        <span>3.5 часа</span>\n                        <span>1 встроенная</span>\n                        <span>Номинальная 300W</span>\n                        <span>71W</span>\n                        <span>15%</span>\n                        <span>----</span>\n                        <span>Задний LED-фонарь</span>\n                        <span>----</span>\n                      </div>\n                      <span class=\"money\">$649.99</span>\n                      <button class=\"btn\">BUY IT NOW</button>\n                    </div>\n                </div>\n              </div>\n              <div class=\"section__arrow\">\n                <div class=\"arrow__next arrow\">\n                  <svg\n                    width=\"24\"\n                    height=\"42\"\n                    viewBox=\"0 0 24 42\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M2.9002 23.1002L21.1002 41.2002L23.2002 39.1002L5.10019 21.0002L23.2002 2.80019L21.1002 0.700195L2.9002 18.9002L0.800196 21.0002L2.9002 23.1002Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                </div>\n                <div class=\"arrow__prev arrow\">\n                  <svg\n                    width=\"24\"\n                    height=\"42\"\n                    viewBox=\"0 0 24 42\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M21.0998 18.8998L2.89981 0.799805L0.799805 2.8998L18.8998 20.9998L0.799805 39.1998L2.89981 41.2998L21.0998 23.0998L23.1998 20.9998L21.0998 18.8998Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                </div>\n              </div>\n              <div class=\"position__slider\">\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"13\"\n                    height=\"13\"\n                    viewBox=\"0 0 13 13\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M2.84375 7.3125H10.1562C11.7244 7.3125 13 6.03687 13 4.46875C13 2.90062 11.7244 1.625 10.1562 1.625H3.25C3.25 0.727188 2.52281 0 1.625 0C0.727188 0 0 0.727188 0 1.625C0 2.52281 0.727188 3.25 1.625 3.25C2.22462 3.25 2.743 2.92094 3.02494 2.4375H10.1562C11.2759 2.4375 12.1875 3.34912 12.1875 4.46875C12.1875 5.58838 11.2759 6.5 10.1562 6.5H2.84375C1.27562 6.5 0 7.77563 0 9.34375C0 10.9119 1.27562 12.1875 2.84375 12.1875H9.97506C10.2562 12.6709 10.7746 13 11.375 13C12.2728 13 13 12.2728 13 11.375C13 10.4772 12.2728 9.75 11.375 9.75C10.4772 9.75 9.75 10.4772 9.75 11.375H2.84375C1.72413 11.375 0.8125 10.4634 0.8125 9.34375C0.8125 8.22412 1.72413 7.3125 2.84375 7.3125Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Range (miles)</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n                <div class=\"feature__segway\">\n                  <svg\n                    width=\"20\"\n                    height=\"16\"\n                    viewBox=\"0 0 20 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M9.5 8C8.67088 8 8 8.672 8 9.5C8 10.328 8.67088 11 9.5 11C10.3291 11 11 10.328 11 9.5C11 8.67162 10.3291 8 9.5 8Z\"\n                      fill=\"#009EFF\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M17.4846 15C17.9933 14.2396 18.3894 13.3976 18.6489 12.4976C18.8775 11.7044 19 10.8662 19 9.99888C19 9.78882 18.9928 9.58046 18.9787 9.37401C18.9345 8.72789 18.8221 8.1006 18.6489 7.49925C18.5566 7.17907 18.4471 6.86626 18.3213 6.56187C18.2558 6.4033 18.1859 6.24702 18.1117 6.09317C17.9878 5.83616 17.8521 5.58596 17.7052 5.34327C16.129 2.73905 13.2693 1 10 1C5.026 1 1 5.0255 1 9.99888C1 11.8496 1.558 13.5688 2.51388 14.9978\"\n                      stroke=\"#009EFF\"\n                      stroke-miterlimit=\"10\"\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                    />\n                    <path\n                      d=\"M14.3123 6.39043C14.528 6.21793 14.5629 5.90328 14.3904 5.68765C14.2179 5.47202 13.9033 5.43706 13.6877 5.60957L14.3123 6.39043ZM9.31235 10.3904L14.3123 6.39043L13.6877 5.60957L8.68765 9.60957L9.31235 10.3904Z\"\n                      fill=\"#009EFF\"\n                    />\n                  </svg>\n                  <span>Max. speed</span>\n                </div>\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_165___ + "\" alt=\"\" />\n              </div>\n            </div>\n            <div class=\"defent\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_166___ + "\" alt=\"\" />\n              <div class=\"block__defent\">\n                <h2>Segway Protective Gear Set as a gift</h2>\n                <p>\n                  The cost of a protection kit when buying a scooter is $ 0\n                  instead of $ $29.99\n                </p>\n              </div>\n            </div>\n          </div>\n        </section>\n\n        <section class=\"section\">\n          <div class=\"container\">\n            <h2>Reviews</h2>\n            <div class=\"slider__r\">\n              <div class=\"slider__reviews\">\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n                <div class=\"reviews\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_167___ + "\" alt=\"\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"section__arrow\">\n              <div class=\"arrow__next arrow\">\n                <svg\n                  width=\"24\"\n                  height=\"42\"\n                  viewBox=\"0 0 24 42\"\n                  fill=\"none\"\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                >\n                  <path\n                    d=\"M2.9002 23.1002L21.1002 41.2002L23.2002 39.1002L5.10019 21.0002L23.2002 2.80019L21.1002 0.700195L2.9002 18.9002L0.800196 21.0002L2.9002 23.1002Z\"\n                    fill=\"#009EFF\"\n                  />\n                </svg>\n              </div>\n              <div class=\"arrow__prev arrow\">\n                <svg\n                  width=\"24\"\n                  height=\"42\"\n                  viewBox=\"0 0 24 42\"\n                  fill=\"none\"\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                >\n                  <path\n                    d=\"M21.0998 18.8998L2.89981 0.799805L0.799805 2.8998L18.8998 20.9998L0.799805 39.1998L2.89981 41.2998L21.0998 23.0998L23.1998 20.9998L21.0998 18.8998Z\"\n                    fill=\"#009EFF\"\n                  />\n                </svg>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"section\">\n          <div class=\"container\">\n            <h2>Control from your smartphone</h2>\n            <p>\n              You can easily control your Segway electric scooter with your\n              smartphone via Bluetooth. Not being the key to the kickscooter, it\n              will give a signal in case of an attempt to steal. Check the\n              current speed, data on the status of the device's systems or set\n              the speed limit with a few touches. And the skating training\n              program is indispensable for beginners.\n            </p>\n            <div class=\"app__container\">\n              <div class=\"grid__container\">\n                <div class=\"grid__contetn\">\n                  <div class=\"grid\" app-control=\"#appTab1\">\n                    <svg\n                      width=\"49\"\n                      height=\"35\"\n                      viewBox=\"0 0 49 35\"\n                      fill=\"#none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <g clip-path=\"url(#clip0_125_1280)\">\n                        <path\n                          d=\"M16.2476 12.9984H17.748C17.748 9.27539 20.7769 6.24652 24.4999 6.24652V4.74609C19.9498 4.74609 16.2476 8.44832 16.2476 12.9984Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M37.5041 25.7527H36.7539V12.9983C36.7539 6.2424 31.2566 0.745117 24.4999 0.745117C17.7432 0.745117 12.2459 6.2424 12.2459 12.9983V25.7519H11.4957C9.97924 25.7519 8.74463 26.9857 8.74463 28.503V34.2549H40.2543V28.503C40.2543 26.9865 39.0205 25.7527 37.5041 25.7527ZM13.7463 12.9983C13.7463 7.06868 18.5702 2.24554 24.4999 2.24554C30.4295 2.24554 35.2535 7.06948 35.2535 12.9983V25.7519H13.7463V12.9983ZM38.7539 29.254H31.2014V30.7544H38.7539V32.7552H10.2459V30.7544H18.298V29.254H10.2459V28.5038C10.2459 27.8144 10.8063 27.2532 11.4965 27.2532H37.5041C38.1935 27.2532 38.7547 27.8136 38.7547 28.5038V29.254H38.7539Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M44.3929 5.18164L43.332 6.24251C48.8894 11.8006 48.8894 20.8432 43.332 26.4014L44.3929 27.4622C50.5355 21.3188 50.5355 11.3243 44.3929 5.18164Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M41.4456 8.12793L40.3848 9.1888C44.3176 13.1216 44.3176 19.5204 40.3848 23.4532L41.4456 24.5141C45.9629 19.9968 45.9629 12.646 41.4456 8.12793Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M5.66783 6.24233L4.60696 5.18066C-1.53565 11.3233 -1.53565 21.3186 4.60696 27.4613L5.66783 26.4004C0.11049 20.843 0.11049 11.7997 5.66783 6.24233Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M8.61485 9.1896L7.55398 8.12793C3.03669 12.6452 3.03669 19.9968 7.55398 24.5141L8.61485 23.4532C4.68204 19.5212 4.68204 13.1216 8.61485 9.1896Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M26.7505 23.5731V20.0198C27.6609 19.3345 28.251 18.2456 28.251 17.0206C28.251 14.9525 26.568 13.2695 24.4999 13.2695C22.4318 13.2695 20.7488 14.9525 20.7488 17.0206C20.7488 18.2448 21.3389 19.3345 22.2493 20.0198V23.5731H20.499V25.0736H28.5016V23.5731H26.7505ZM25.2501 23.5731H23.7497V20.6972C23.9923 20.7468 24.2429 20.7725 24.4999 20.7725C24.7569 20.7725 25.0075 20.746 25.2501 20.6972V23.5731ZM24.4999 19.272C23.2589 19.272 22.2493 18.2624 22.2493 17.0214C22.2493 15.7804 23.2589 14.7708 24.4999 14.7708C25.7409 14.7708 26.7505 15.7804 26.7505 17.0214C26.7505 18.2624 25.7409 19.272 24.4999 19.272Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M21.9994 29.2539H20.499V30.7543H21.9994V29.2539Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M29.0014 29.2539H27.501V30.7543H29.0014V29.2539Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M25.5009 29.2539H24.0005V30.7543H25.5009V29.2539Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                      </g>\n                      <defs>\n                        <clipPath id=\"clip0_125_1280\">\n                          <rect\n                            width=\"49\"\n                            height=\"33.5098\"\n                            fill=\"white\"\n                            transform=\"translate(0 0.745117)\"\n                          />\n                        </clipPath>\n                      </defs>\n                    </svg>\n                  </div>\n                  <span class=\"title\" id=\"appTab1\"\n                    >Anti-theft<br />\n                    protection</span\n                  >\n                </div>\n                <div class=\"grid__contetn\">\n                  <div class=\"grid\" app-control=\"#appTab2\">\n                    <svg\n                      width=\"42\"\n                      height=\"34\"\n                      viewBox=\"0 0 42 34\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <g clip-path=\"url(#clip0_125_1320)\">\n                        <path\n                          d=\"M25.9689 11.8639V9.08841C25.9689 8.67208 25.6889 8.39453 25.2689 8.39453H16.8689C16.4489 8.39453 16.1689 8.67208 16.1689 9.08841V11.8639C16.1689 12.2802 16.4489 12.5578 16.8689 12.5578H25.2689C25.6889 12.5578 25.9689 12.2802 25.9689 11.8639ZM24.5689 11.17H17.5689V9.78229H24.5689V11.17Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M13.3689 25.7412C11.8289 25.7412 10.5688 26.9902 10.5688 28.5167C10.5688 30.0433 11.8289 31.2922 13.3689 31.2922C14.9089 31.2922 16.1689 30.0433 16.1689 28.5167C16.1689 26.9902 14.9089 25.7412 13.3689 25.7412ZM13.3689 29.9045C12.5989 29.9045 11.9689 29.28 11.9689 28.5167C11.9689 27.7535 12.5989 27.129 13.3689 27.129C14.1389 27.129 14.7689 27.7535 14.7689 28.5167C14.7689 29.28 14.1389 29.9045 13.3689 29.9045Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M28.7688 25.7412C27.2288 25.7412 25.9688 26.9902 25.9688 28.5167C25.9688 30.0433 27.2288 31.2922 28.7688 31.2922C30.3088 31.2922 31.5688 30.0433 31.5688 28.5167C31.5688 26.9902 30.3088 25.7412 28.7688 25.7412ZM28.7688 29.9045C27.9988 29.9045 27.3688 29.28 27.3688 28.5167C27.3688 27.7535 27.9988 27.129 28.7688 27.129C29.5388 27.129 30.1688 27.7535 30.1688 28.5167C30.1688 29.28 29.5388 29.9045 28.7688 29.9045Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M28.6989 14.2921C28.8389 14.0145 28.7689 13.737 28.5589 13.4594C28.3489 13.1819 27.9989 13.1819 27.7189 13.3206L24.3589 15.3329C23.1689 16.0268 21.9089 16.6513 20.7189 17.2064C20.3689 17.3451 19.9489 17.5533 19.5289 17.7615C18.0589 18.5247 17.2889 20.1206 17.6389 21.7166C17.9189 22.9655 18.9689 24.0063 20.2289 24.2839C20.5089 24.3533 20.7889 24.3533 21.0689 24.3533C22.3989 24.3533 23.5889 23.59 24.2189 22.4104C24.3589 22.0635 24.5689 21.6472 24.7789 21.2308C25.4089 20.0513 25.9689 18.8023 26.6689 17.6227L28.6989 14.2921ZM25.4789 16.8594C24.7089 18.1084 24.0789 19.3574 23.5189 20.6064C23.3789 21.0227 23.1689 21.3696 22.9589 21.7859C22.5389 22.688 21.5589 23.1043 20.5789 22.8961C19.8089 22.7574 19.1789 22.1329 19.0389 21.3696C18.8289 20.3982 19.2489 19.4268 20.1589 19.0104C20.5089 18.8023 20.9289 18.6635 21.3489 18.4553C22.6089 17.8308 23.9389 17.2064 25.1289 16.5125L26.0389 15.9574L25.4789 16.8594Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                        <path\n                          d=\"M40.5693 13.182C40.5604 13.135 40.5474 13.0888 40.5289 13.0439C40.5103 12.9983 40.487 12.9568 40.4602 12.9187C39.4116 10.4289 37.8874 8.18128 36.0022 6.28605C35.9754 6.24659 35.9445 6.20918 35.9088 6.1738C35.8732 6.13843 35.8354 6.10782 35.7956 6.08128C31.9978 2.36904 26.7917 0.0683594 21.0688 0.0683594C18.3272 0.0683594 15.7049 0.596931 13.2982 1.55475C13.2508 1.5636 13.2041 1.57652 13.1588 1.59489C13.1136 1.61326 13.071 1.63639 13.0326 1.66292C10.5208 2.70237 8.25336 4.21326 6.3414 6.08196C6.30159 6.1085 6.26385 6.13911 6.22816 6.17448C6.19248 6.20986 6.16159 6.24727 6.13483 6.28673C2.38983 10.0514 0.0688477 15.2119 0.0688477 20.8847C0.0688477 25.6031 1.60885 30.1133 4.61885 33.7908C4.75885 33.999 4.96885 34.0684 5.17885 34.0684H36.9588C37.1688 34.0684 37.3788 33.999 37.5189 33.7908C40.5289 30.1133 42.0689 25.6031 42.0689 20.8847C42.0689 18.1677 41.5356 15.5677 40.5693 13.182ZM36.6789 32.6806H5.52885C4.58248 31.4704 3.796 30.1724 3.17493 28.8085L5.10885 28.0316C5.45885 27.8929 5.59885 27.4765 5.45885 27.1296C5.31885 26.7826 4.89885 26.6439 4.54885 26.7826L2.65336 27.5445C1.94993 25.6466 1.55463 23.6398 1.48189 21.5786H6.36885C6.78885 21.5786 7.06885 21.301 7.06885 20.8847C7.06885 20.4684 6.78885 20.1908 6.36885 20.1908H1.48257C1.56081 18.0031 2.00895 15.9044 2.76591 13.9548L4.68816 14.7786C4.75816 14.848 4.89816 14.848 4.96816 14.848C5.24816 14.848 5.45816 14.7092 5.59816 14.4316C5.73816 14.0847 5.59816 13.6684 5.24816 13.5296L3.30669 12.6969C4.18444 10.8405 5.34973 9.14183 6.74561 7.65816L8.18885 9.08877C8.32885 9.22754 8.46885 9.29693 8.67885 9.29693C8.88885 9.29693 9.02885 9.22754 9.16885 9.08877C9.44885 8.81122 9.44885 8.39489 9.16885 8.11734L7.72561 6.68673C9.29375 5.23707 11.0993 4.03775 13.0779 3.15475L13.8588 5.06428C13.9288 5.34183 14.2088 5.4806 14.4888 5.4806C14.5588 5.4806 14.6288 5.4806 14.7688 5.41122C15.1188 5.27244 15.2588 4.85611 15.1188 4.50918L14.3537 2.63775C16.2423 1.94931 18.2647 1.54387 20.3688 1.46972V6.31326C20.3688 6.72958 20.6488 7.00713 21.0688 7.00713C21.4888 7.00713 21.7689 6.72958 21.7689 6.31326V1.46972C23.9759 1.54727 26.0931 1.99149 28.0599 2.74251L27.2288 4.64795C27.0889 4.99489 27.2288 5.41122 27.5788 5.54999C27.6488 5.61938 27.7888 5.61938 27.8588 5.61938C28.1388 5.61938 28.4188 5.41122 28.4888 5.20305L29.3288 3.27856C31.2017 4.14863 32.9153 5.30373 34.4121 6.68741L32.9688 8.11802C32.6889 8.39557 32.6889 8.8119 32.9688 9.08945C33.1088 9.22822 33.2489 9.29761 33.4589 9.29761C33.5989 9.29761 33.8088 9.22822 33.9488 9.08945L35.3921 7.65884C36.8545 9.21326 38.0651 11.0031 38.9552 12.9643L37.0289 13.7384C36.6788 13.8772 36.5389 14.2935 36.6789 14.6405C36.7489 14.918 37.0289 15.0568 37.3088 15.0568C37.3788 15.0568 37.4488 14.9874 37.5888 14.9874L39.4768 14.2289C40.1713 16.101 40.5803 18.1058 40.6551 20.1915H35.7688C35.3489 20.1915 35.0688 20.469 35.0688 20.8854C35.0688 21.3017 35.3489 21.5792 35.7688 21.5792H40.6558C40.5796 23.7418 40.1493 25.8439 39.391 27.8241L37.4488 26.9915C37.0989 26.8527 36.6788 26.9915 36.5388 27.3384C36.3988 27.6854 36.5389 28.1017 36.8889 28.2405L38.8557 29.084C38.2662 30.3466 37.5388 31.552 36.6789 32.6806Z\"\n                          fill=\"#CCCCCC\"\n                        />\n                      </g>\n                      <defs>\n                        <clipPath id=\"clip0_125_1320\">\n                          <rect width=\"42\" height=\"34\" fill=\"white\" />\n                        </clipPath>\n                      </defs>\n                    </svg>\n                  </div>\n                  <span class=\"title\" id=\"appTab2\">Dashboard</span>\n                </div>\n                <div class=\"grid__contetn\">\n                  <div class=\"grid active\" app-control=\"#appTab3\">\n                    <svg\n                      width=\"39\"\n                      height=\"35\"\n                      viewBox=\"0 0 39 35\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        d=\"M27.7757 27.0358C28.1058 26.6917 28.1058 26.137 27.7757 25.8057C27.4341 25.4616 26.8835 25.4616 26.554 25.8057L20.3616 32.0326V11.4561C20.3616 10.9765 19.9831 10.5823 19.5064 10.5823C19.0303 10.5823 18.639 10.9759 18.639 11.4561V32.0313L12.4587 25.8044C12.1172 25.4603 11.5793 25.4603 11.2377 25.8044C10.9076 26.137 10.9076 26.6904 11.2377 27.0352L18.8965 34.7509C19.2266 35.0835 19.7759 35.0835 20.1175 34.7509L27.7757 27.0358ZM16.8929 20.8455C17.3568 20.8455 17.7481 21.2269 17.7481 21.7071C17.7481 22.1867 17.3575 22.5809 16.8929 22.5809H8.64783C6.26569 22.5809 4.10406 21.6089 2.54082 20.0218C0.964835 18.4463 0 16.2686 0 13.8688C0 11.4689 0.964836 9.29058 2.54018 7.71636C4.10406 6.14086 6.26569 5.15665 8.64783 5.15665C9.22202 5.15665 9.7962 5.21764 10.3576 5.34091C10.6756 5.4019 10.9803 5.47637 11.2734 5.57524C12.1892 3.98755 13.4969 2.65858 15.048 1.68657C16.7578 0.615691 18.7735 0 20.9351 0C23.8908 0 26.591 1.16911 28.5939 3.06369C30.4019 4.77401 31.635 7.06343 32.0142 9.64754C32.1971 9.6225 32.3927 9.6225 32.5763 9.6225C34.3472 9.6225 35.9602 10.348 37.1194 11.5171C38.292 12.6862 39 14.3105 39 16.0953C39 17.8916 38.2913 19.5044 37.1194 20.685C35.9589 21.8541 34.3466 22.5796 32.5763 22.5796H22.1205C21.6444 22.5796 21.2653 22.1861 21.2653 21.7058C21.2653 21.2256 21.6438 20.8442 22.1205 20.8442H32.5763C33.8706 20.8442 35.0559 20.3146 35.8984 19.4536C36.7536 18.5921 37.2787 17.4108 37.2787 16.094C37.2787 14.7901 36.753 13.5959 35.8984 12.7472C35.0559 11.8856 33.8706 11.3566 32.5763 11.3566C32.3806 11.3566 32.1856 11.3688 32.0142 11.3938C31.8313 11.406 31.6477 11.4426 31.4884 11.4798C31.4279 11.492 31.3661 11.5049 31.3055 11.5171C30.8288 11.5421 30.4261 11.173 30.3898 10.6927C30.2432 8.19466 29.1318 5.94248 27.4213 4.33102C25.7236 2.71893 23.4396 1.73472 20.9351 1.73472C19.103 1.73472 17.3932 2.26438 15.9516 3.16192C14.4496 4.08449 13.24 5.4263 12.4466 7.0262C12.2389 7.43259 11.7622 7.61685 11.3352 7.44479C10.9197 7.26053 10.48 7.12442 10.0288 7.0262C9.58909 6.94017 9.13662 6.89073 8.64847 6.89073C6.73091 6.89073 5.00835 7.67848 3.75037 8.93362C2.50449 10.201 1.72256 11.9485 1.72256 13.8681C1.72256 15.7999 2.50449 17.5353 3.75037 18.8026C5.00835 20.0578 6.73091 20.8455 8.64847 20.8455H16.8929Z\"\n                        fill=\"#CCCCCC\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"title active\" id=\"appTab3\"\n                    >Firmware upgrade</span\n                  >\n                </div>\n                <div class=\"grid__contetn\">\n                  <div class=\"grid\" app-control=\"#appTab4\">\n                    <svg\n                      width=\"36\"\n                      height=\"33\"\n                      viewBox=\"0 0 36 33\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        d=\"M35.8218 27.8386L30.6182 22.6042C30.3806 22.3651 29.9953 22.3651 29.7571 22.6042L29.4606 22.9024L27.5829 21.0143C30.6394 16.8934 31.0624 11.2465 28.4971 6.68242C28.3318 6.38777 27.96 6.28423 27.6676 6.45108C27.3747 6.61734 27.2718 6.99127 27.4371 7.28533C29.8771 11.6264 29.3353 17.0478 26.1835 20.8197C26.1729 20.8321 26.1629 20.8445 26.1524 20.857C26.1118 20.9055 26.07 20.9534 26.0288 21.0007C26.01 21.0226 25.9912 21.0439 25.9718 21.0658C25.9341 21.1084 25.8959 21.1516 25.8571 21.1936C25.8318 21.2214 25.8059 21.2492 25.78 21.277C25.7441 21.3155 25.7088 21.354 25.6724 21.3918C25.6447 21.4208 25.6165 21.4498 25.5882 21.4788C25.5547 21.5131 25.5218 21.5474 25.4882 21.5818C25.3441 21.7267 25.1971 21.8669 25.0471 22.003C25.0394 22.0095 25.0324 22.016 25.0247 22.0225C22.7753 24.0543 19.9347 25.0702 17.0929 25.0696C14.0529 25.0696 11.0124 23.9064 8.69824 21.5812C6.45588 19.3281 5.22118 16.3331 5.22118 13.147C5.22118 9.96084 6.45588 6.96583 8.69824 4.71277C13.3271 0.0616809 20.8588 0.0616809 25.4882 4.71277C25.7265 4.9518 26.1118 4.9518 26.3494 4.71218C26.5871 4.47314 26.5871 4.08501 26.3488 3.84598C21.2453 -1.28199 12.9412 -1.28199 7.83824 3.84598C5.36588 6.33038 4.00412 9.63306 4.00412 13.1464C4.00412 14.8202 4.31353 16.4455 4.90471 17.9578H0.608824C0.272353 17.9584 0 18.2323 0 18.5702V22.1711C0 22.5095 0.272353 22.7834 0.608824 22.7834H8.18706C8.65412 23.2201 9.14529 23.6159 9.65647 23.9709H0.608824C0.272353 23.9715 0 24.2454 0 24.5839V28.1847C0 28.5232 0.272353 28.7971 0.608824 28.7971H22.4553C22.7918 28.7971 23.0641 28.5232 23.0641 28.1847V24.8519C23.7135 24.5182 24.3406 24.1259 24.9382 23.6763L26.8147 25.5637L26.5182 25.8619C26.4041 25.9767 26.34 26.1323 26.34 26.295C26.34 26.4577 26.4041 26.6133 26.5182 26.7281L31.7224 31.9625C31.8365 32.0773 31.9912 32.1418 32.1529 32.1418C32.3147 32.1418 32.4694 32.0773 32.5835 31.9625L35.8224 28.7048C36.0594 28.4652 36.0594 28.0777 35.8218 27.8386ZM1.21765 21.5593V19.1831H5.45765C5.89118 20.0245 6.41706 20.8209 7.03118 21.5593H1.21765ZM21.8465 27.5724H1.21765V25.1962H11.5312C11.6088 25.1962 11.6829 25.1809 11.7518 25.1542C13.4465 25.9133 15.27 26.2938 17.0935 26.2938C18.7076 26.2938 20.3218 25.9956 21.8465 25.401V27.5724ZM25.8824 22.8947C25.9441 22.8379 26.0053 22.7805 26.0665 22.7231C26.0812 22.7095 26.0959 22.6959 26.1106 22.6817C26.1912 22.6047 26.2712 22.5266 26.35 22.4474C26.3812 22.416 26.4112 22.3841 26.4418 22.3527C26.4794 22.3142 26.5171 22.2764 26.5535 22.2373C26.59 22.1989 26.6265 22.1598 26.6624 22.1208C26.6935 22.087 26.7247 22.0539 26.7553 22.0202C26.7718 22.0018 26.7894 21.9835 26.8059 21.9652L28.5994 23.7686L27.6753 24.6981L25.8824 22.8947ZM32.1524 30.6632L27.8094 26.295L28.1041 25.9985C28.1047 25.998 28.1053 25.9974 28.1059 25.9968L29.8906 24.2017C29.8912 24.2011 29.8918 24.2005 29.8924 24.1999L30.1871 23.9035L34.53 28.2717L32.1524 30.6632Z\"\n                        fill=\"#CCCCCC\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"title\" id=\"appTab4\"\n                    >Device<br />\n                    status</span\n                  >\n                </div>\n                <div class=\"grid__contetn\">\n                  <div class=\"grid\" app-control=\"#appTab5\">\n                    <svg\n                      width=\"36\"\n                      height=\"36\"\n                      viewBox=\"0 0 36 36\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        d=\"M17.9999 8.66602C12.8535 8.66602 8.6665 12.8524 8.6665 17.9994C8.6665 23.1458 12.8529 27.3328 17.9999 27.3328C23.1469 27.3328 27.3333 23.1458 27.3333 17.9994C27.3333 12.853 23.1463 8.66602 17.9999 8.66602ZM17.9999 25.9992C13.5888 25.9992 10 22.4105 10 17.9994C10 13.5883 13.5888 9.99952 17.9999 9.99952C22.411 9.99952 25.9997 13.5883 25.9997 17.9994C25.9997 22.4105 22.411 25.9992 17.9999 25.9992Z\"\n                        fill=\"#CCCCCC\"\n                      />\n                      <path\n                        d=\"M34.1459 13.9998H32.8006C32.4571 12.7251 31.9524 11.5051 31.2942 10.3616L32.2448 9.41102C32.5948 9.06103 32.7877 8.59515 32.7877 8.10046C32.7877 7.60517 32.5948 7.13988 32.2448 6.7893L29.2095 3.75406C28.5095 3.05466 27.289 3.05348 26.5878 3.75406L25.6372 4.70463C24.4931 4.0464 23.2737 3.54171 22.0002 3.19877V1.8535C21.9996 0.831163 21.1685 0 20.1461 0H15.8527C14.8309 0 13.9998 0.831163 13.9998 1.8535V3.19877C12.7257 3.5423 11.5063 4.04699 10.3616 4.70522L9.41102 3.75464C8.71045 3.05348 7.48929 3.05466 6.7893 3.75464L3.75406 6.78989C3.40406 7.13988 3.21171 7.60576 3.21171 8.10104C3.21171 8.59574 3.40465 9.06103 3.75406 9.41161L4.70463 10.3622C4.0464 11.5051 3.54112 12.7251 3.19877 13.9998H1.8535C0.831163 13.9998 0 14.8309 0 15.8533V20.1461C0 21.1685 0.831163 21.9996 1.8535 21.9996H3.19877C3.54229 23.2737 4.04699 24.4931 4.70522 25.6378L3.75464 26.5884C3.40465 26.9384 3.21171 27.4043 3.21171 27.899C3.21171 28.3942 3.40465 28.8595 3.75464 29.2101L6.78989 32.2454C7.48988 32.9459 8.71103 32.9465 9.41161 32.2454L10.3622 31.2948C11.5069 31.953 12.7263 32.4583 14.0004 32.8012V34.1465C14.0004 35.1682 14.8315 36 15.8539 36H20.1467C21.1685 36 22.0002 35.1688 22.0002 34.1465V32.8012C23.2743 32.4577 24.4937 31.953 25.6384 31.2948L26.589 32.2454C27.2901 32.9465 28.5101 32.9453 29.2107 32.2454L32.2459 29.2101C32.5959 28.8601 32.7889 28.3942 32.7889 27.899C32.7889 27.4043 32.5959 26.939 32.2459 26.5884L31.2954 25.6378C31.9536 24.4931 32.4589 23.2737 32.8018 21.9996H34.1471C35.1688 21.9996 36.0006 21.1685 36.0006 20.1461V15.8527C35.9994 14.8309 35.1682 13.9998 34.1459 13.9998ZM34.6659 20.1461C34.6659 20.4326 34.4324 20.6661 34.1459 20.6661H31.7512L31.6312 21.1814C31.2842 22.6726 30.6989 24.0878 29.8895 25.3884L29.6095 25.8378L31.3024 27.5307C31.506 27.7343 31.506 28.0642 31.3024 28.2666L28.2672 31.3018C28.0642 31.5048 27.7348 31.506 27.5313 31.3018L25.8384 29.6089L25.389 29.8889C24.089 30.6983 22.6737 31.2842 21.182 31.6307L20.6667 31.7507V34.1453C20.6667 34.4318 20.4332 34.6653 20.1467 34.6653H15.8533C15.5668 34.6653 15.3333 34.4318 15.3333 34.1453V31.7507L14.818 31.6307C13.3268 31.2836 11.9116 30.6983 10.611 29.8889L10.1616 29.6089L8.46869 31.3018C8.26457 31.506 7.93458 31.5048 7.73281 31.3018L4.69757 28.2666C4.49404 28.0631 4.49404 27.7331 4.69757 27.5307L6.39048 25.8378L6.11049 25.3884C5.30109 24.0884 4.71522 22.6732 4.36875 21.1814L4.24875 20.6661H1.8535C1.56703 20.6661 1.33351 20.4326 1.33351 20.1461V15.8527C1.33351 15.5662 1.56703 15.3327 1.8535 15.3327H4.24817L4.36816 14.8174C4.71522 13.3257 5.30109 11.9104 6.1099 10.6104L6.38989 10.161L4.69698 8.4681C4.49346 8.26457 4.49346 7.93458 4.69698 7.73223L7.73223 4.69698C7.93516 4.49404 8.26516 4.49287 8.4681 4.69698L10.161 6.3899L10.6104 6.1099C11.9104 5.3005 13.3257 4.71463 14.8174 4.36816L15.3327 4.24817V1.8535C15.3327 1.56703 15.5662 1.33351 15.8527 1.33351H20.145C20.432 1.33351 20.6655 1.56703 20.6655 1.8535V4.24817L21.1808 4.36816C22.672 4.71581 24.0873 5.30109 25.3878 6.1099L25.8372 6.3899L27.5301 4.69698C27.7343 4.49287 28.0642 4.49404 28.266 4.69698L31.3013 7.73223C31.5048 7.93575 31.5048 8.26575 31.3013 8.4681L29.6083 10.161L29.8883 10.6104C30.6977 11.9098 31.2836 13.3251 31.6301 14.8174L31.7501 15.3327H34.1447C34.4312 15.3327 34.6647 15.5662 34.6647 15.8527V20.1461H34.6659Z\"\n                        fill=\"#CCCCCC\"\n                      />\n                      <path\n                        d=\"M17.9999 11.333C14.324 11.333 11.3335 14.3235 11.3335 17.9994C11.3335 21.6752 14.324 24.6657 17.9999 24.6657C21.6757 24.6657 24.6662 21.6752 24.6662 17.9994C24.6662 14.3235 21.6757 11.333 17.9999 11.333ZM17.9999 23.3328C15.0593 23.3328 12.6664 20.9405 12.6664 17.9994C12.6664 15.0588 15.0593 12.6659 17.9999 12.6659C20.9404 12.6659 23.3333 15.0582 23.3333 17.9994C23.3333 20.9399 20.9404 23.3328 17.9999 23.3328Z\"\n                        fill=\"#CCCCCC\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"title\" id=\"appTab5\"\n                    >Settings and restrictions</span\n                  >\n                </div>\n                <div class=\"grid__contetn\">\n                  <div class=\"grid\" app-control=\"#appTab6\">\n                    <svg\n                      width=\"36\"\n                      height=\"34\"\n                      viewBox=\"0 0 36 34\"\n                      fill=\"none\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <path\n                        d=\"M25.3454 30.3752C25.0236 30.2924 24.6977 30.4918 24.6183 30.8168L24.0183 33.2454C23.9371 33.5716 24.1336 33.9008 24.4548 33.9817C24.5036 33.9942 24.5524 34.0002 24.6007 34.0002C24.8695 34.0002 25.1136 33.8162 25.1818 33.5406L25.7818 31.1121C25.8624 30.7865 25.6665 30.4567 25.3454 30.3752Z\"\n                        fill=\"#CCCCCC\"\n                      />\n                      <path\n                        d=\"M18 18.2142C18.0782 18.2142 18.1559 18.1993 18.2294 18.1684L24.8294 15.4047C25.1353 15.2767 25.2806 14.9213 25.1541 14.6118C25.0276 14.3017 24.6753 14.1559 24.37 14.2826L18 16.9499L1.2 9.91537V9.71359C1.2 9.37847 0.931176 9.10645 0.6 9.10645C0.268824 9.10704 0 9.37906 0 9.71418V10.3213C0 10.5672 0.146471 10.7886 0.370588 10.882L17.7706 18.1678C17.8441 18.1987 17.9218 18.2142 18 18.2142Z\"\n                        fill=\"#CCCCCC\"\n                      />\n                      <path\n                        d=\"M25.1377 24.4347C24.9912 24.1341 24.6324 24.0103 24.3341 24.1591C23.1947 24.7293 21.2918 25.3924 18.6 25.4829V20.0364C18.6 19.7013 18.3312 19.4293 18 19.4293C17.6688 19.4293 17.4 19.7013 17.4 20.0364V25.4775C9.95 25.237 7.54588 20.6704 7.2 19.9103V15.7859C7.2 15.4507 6.93118 15.1787 6.6 15.1787C6.26882 15.1787 6 15.4507 6 15.7859V20.0359C6 20.1126 6.01471 20.1894 6.04235 20.2614C6.14706 20.5245 8.70059 26.7144 18 26.7144C21.25 26.7144 23.5277 25.9168 24.8659 25.2478C25.1635 25.0989 25.2853 24.7353 25.1377 24.4347Z\"\n                        fill=\"#CCCCCC\"\n                      />\n                      <path\n                        d=\"M26.9999 30.9648C26.6681 30.9648 26.3999 31.2369 26.3999 31.572V33.3934C26.3999 33.7285 26.6681 34.0006 26.9999 34.0006C27.3317 34.0006 27.5999 33.7285 27.5999 33.3934V31.572C27.5999 31.2369 27.3317 30.9648 26.9999 30.9648Z\"\n                        fill=\"#CCCCCC\"\n                      />\n                      <path\n                        d=\"M35.4 9.10729C35.0682 9.10729 34.8 9.37931 34.8 9.71443V9.91503L27.6 12.9138V11.8168L35.6294 8.45432C35.8535 8.36086 36 8.13943 36 7.8936C36 7.64777 35.8535 7.42693 35.63 7.33289L18.2294 0.0459821C18.0824 -0.0153274 17.9182 -0.0153274 17.7712 0.0459821L0.370588 7.3317C0.145882 7.42574 0 7.64658 0 7.89241C0 8.13824 0.146471 8.35967 0.370588 8.45312L17.7706 15.7388C17.8441 15.7698 17.9218 15.7853 18 15.7853C18.0782 15.7853 18.1559 15.7704 18.2294 15.7388L24.5212 13.1043C24.8276 12.9769 24.9729 12.6216 24.8465 12.3115C24.72 12.0019 24.3688 11.8555 24.0629 11.9829L18 14.5216L2.16882 7.89301L18 1.26384L33.8312 7.89301L26.9424 10.7775L20.3441 8.28467C20.3788 8.15848 20.4 8.02872 20.4 7.89301C20.4 6.87158 19.3459 6.07158 18 6.07158C16.6541 6.07158 15.6 6.87158 15.6 7.89301C15.6 8.91443 16.6541 9.71443 18 9.71443C18.6006 9.71443 19.1365 9.54896 19.5529 9.2817L26.4 11.8686V13.8138V13.8144V26.8263C25.7035 27.0781 25.2 27.7454 25.2 28.5359C25.2 29.54 26.0076 30.3573 27 30.3573C27.9924 30.3573 28.8 29.54 28.8 28.5359C28.8 27.7454 28.2965 27.0781 27.6 26.8263V23.3799C29.3224 22.0644 29.94 20.3121 29.9671 20.2341C29.9888 20.1704 30 20.1031 30 20.0359V15.7859C30 15.4507 29.7318 15.1787 29.4 15.1787C29.0682 15.1787 28.8 15.4507 28.8 15.7859V19.9234C28.6965 20.1805 28.3353 20.9746 27.6 21.7573V14.2269L35.6288 10.8835C35.8541 10.79 36 10.568 36 10.3222V9.71503C36 9.37932 35.7318 9.10729 35.4 9.10729ZM18 8.50015C17.2676 8.50015 16.8 8.14062 16.8 7.89301C16.8 7.64539 17.2676 7.28586 18 7.28586C18.7329 7.28586 19.2 7.64539 19.2 7.89301C19.2 8.14062 18.7324 8.50015 18 8.50015ZM27 29.143C26.6688 29.143 26.4 28.8704 26.4 28.5359C26.4 28.2013 26.6688 27.9287 27 27.9287C27.3312 27.9287 27.6 28.2013 27.6 28.5359C27.6 28.8704 27.3312 29.143 27 29.143Z\"\n                        fill=\"#CCCCCC\"\n                      />\n                      <path\n                        d=\"M29.3819 30.8174C29.3013 30.4924 28.9748 30.2942 28.6548 30.3758C28.3331 30.4573 28.1378 30.7871 28.2183 31.1121L28.8184 33.5406C28.8866 33.8162 29.1307 34.0002 29.3995 34.0002C29.4478 34.0002 29.4966 33.9948 29.5454 33.9817C29.8672 33.9002 30.0625 33.571 29.9825 33.2454L29.3819 30.8174Z\"\n                        fill=\"#CCCCCC\"\n                      />\n                    </svg>\n                  </div>\n                  <span class=\"title\" id=\"appTab6\"\n                    >Training<br />\n                    program</span\n                  >\n                </div>\n              </div>\n              <img class=\"img-1\" src=\"" + ___HTML_LOADER_REPLACEMENT_168___ + "\" alt=\"\" />\n              <img class=\"img-2\" src=\"" + ___HTML_LOADER_REPLACEMENT_169___ + "\" alt=\"\" />\n            </div>\n          </div>\n        </section>\n  \n        <section class=\"section\">\n          <div class=\"container\">\n            <h2>OTHER MODELS</h2>\n            <p>Check out the entire line of Segway scooters</p>\n            <div class=\"grid__gallery\" id=\"grid-gallery\">\n              <div class=\"grid__segway\">\n                <div class=\"contant__segway\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_170___ + "\" alt=\"\" />\n                  <h4>KS E22</h4>\n                  <span>$899.99</span>\n                  <button class=\"btn\" type=\"submit\">SEE MORE</button>\n                </div>\n                <div class=\"contant__segway\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_170___ + "\" alt=\"\" />\n                  <h4>KS E22</h4>\n                  <span>$899.99</span>\n                  <button class=\"btn\" type=\"submit\">SEE MORE</button>\n                </div>\n                <div class=\"contant__segway\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_170___ + "\" alt=\"\" />\n                  <h4>KS E22</h4>\n                  <span>$899.99</span>\n                  <button class=\"btn\" type=\"submit\">SEE MORE</button>\n                </div>\n                <div class=\"contant__segway\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_170___ + "\" alt=\"\" />\n                  <h4>KS E22</h4>\n                  <span>$899.99</span>\n                  <button class=\"btn\" type=\"submit\">SEE MORE</button>\n                </div>\n                <div class=\"contant__segway\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_170___ + "\" alt=\"\" />\n                  <h4>KS E22</h4>\n                  <span>$899.99</span>\n                  <button class=\"btn\" type=\"submit\">SEE MORE</button>\n                </div>\n                <div class=\"contant__segway\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_170___ + "\" alt=\"\" />\n                  <h4>KS E22</h4>\n                  <span>$899.99</span>\n                  <button class=\"btn\" type=\"submit\">SEE MORE</button>\n                </div>\n                <div class=\"contant__segway\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_170___ + "\" alt=\"\" />\n                  <h4>KS E22</h4>\n                  <span>$899.99</span>\n                  <button class=\"btn\" type=\"submit\">SEE MORE</button>\n                </div>\n                <div class=\"contant__frame\">\n                  <h4>\n                    NOT FOUND<br>\n                    MODEL?\n                  </h4>\n                  <p>\n                    Write to us from the social <br>\n                    network and we will offer the <br>\n                    best option\n                  </p>\n                  <div class=\"container__messenger\">\n                    <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_171___ + "\" alt=\"insta\"></a>\n                    <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_172___ + "\" alt=\"whatsapp\"></a>\n                    <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_173___ + "\" alt=\"telegram\"></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            </div>\n            \n        </section>\n      </main>\n      <footer class=\"footer\" id=\"contacts\">\n        <div class=\"container\" id=\"contacts__phone\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_174___ + "\" alt=\"\" />\n          <div class=\"footer__text\">\n            <span>+1 (888) 777-77-77</span>\n            <span>2637 Fairfax Ave Culver City, CA 90232</span>\n            <span>Segway California © 2017</span>\n          </div>\n        </div>\n      </footer>\n    </div>\n  </body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/28faaa7af5fb8932a114.ico";

/***/ }),

/***/ "./img/footer/logo.svg":
/*!*****************************!*\
  !*** ./img/footer/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/22e375f10f96f9413eec.svg";

/***/ }),

/***/ "./img/header/insta.svg":
/*!******************************!*\
  !*** ./img/header/insta.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/72927f8369c8c193d418.svg";

/***/ }),

/***/ "./img/header/telegram.svg":
/*!*********************************!*\
  !*** ./img/header/telegram.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b758440350c3e3a1b66b.svg";

/***/ }),

/***/ "./img/header/whatsapp.svg":
/*!*********************************!*\
  !*** ./img/header/whatsapp.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cc36ecbe904f2f930d6f.svg";

/***/ }),

/***/ "./img/icon/Vector.png":
/*!*****************************!*\
  !*** ./img/icon/Vector.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/9f70d286e25be6f701ef.png";

/***/ }),

/***/ "./img/icon/author.png":
/*!*****************************!*\
  !*** ./img/icon/author.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c1ec10bc002d75d0024d.png";

/***/ }),

/***/ "./img/icon/basket.png":
/*!*****************************!*\
  !*** ./img/icon/basket.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d8b7725e3035fb5823ee.png";

/***/ }),

/***/ "./img/icon/icon.svg":
/*!***************************!*\
  !*** ./img/icon/icon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/28cb325173de5257a17a.svg";

/***/ }),

/***/ "./img/icon/insta.png":
/*!****************************!*\
  !*** ./img/icon/insta.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fcd993ccde3b40dfff36.png";

/***/ }),

/***/ "./img/icon/tel.png":
/*!**************************!*\
  !*** ./img/icon/tel.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b601290bce2abd67a974.png";

/***/ }),

/***/ "./img/png/ellipse(blue).png":
/*!***********************************!*\
  !*** ./img/png/ellipse(blue).png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/10da87756e53b7f62d85.png";

/***/ }),

/***/ "./img/png/ellipse-big(blue).png":
/*!***************************************!*\
  !*** ./img/png/ellipse-big(blue).png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/203b4be6519e2dc71ed2.png";

/***/ }),

/***/ "./img/png/map.png":
/*!*************************!*\
  !*** ./img/png/map.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/343825764add95f4765a.png";

/***/ }),

/***/ "./img/png/setting.png":
/*!*****************************!*\
  !*** ./img/png/setting.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/be3ae0b77cd4b9926cec.png";

/***/ }),

/***/ "./img/png/setting2.png":
/*!******************************!*\
  !*** ./img/png/setting2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a5ac9045f65a94a0adf8.png";

/***/ }),

/***/ "./img/png/защита.png":
/*!****************************!*\
  !*** ./img/png/защита.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/7b8c7a74048885496a8f.png";

/***/ }),

/***/ "./img/section1/10_segway/1.webp":
/*!***************************************!*\
  !*** ./img/section1/10_segway/1.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d24f9534360e804626e3.webp";

/***/ }),

/***/ "./img/section1/10_segway/2.webp":
/*!***************************************!*\
  !*** ./img/section1/10_segway/2.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/614d26a85bf1b70d67a1.webp";

/***/ }),

/***/ "./img/section1/10_segway/3.webp":
/*!***************************************!*\
  !*** ./img/section1/10_segway/3.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4b222675e0bd8b98a104.webp";

/***/ }),

/***/ "./img/section1/10_segway/4.webp":
/*!***************************************!*\
  !*** ./img/section1/10_segway/4.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ab0fb82c3b4a2f74ec14.webp";

/***/ }),

/***/ "./img/section1/10_segway/5.webp":
/*!***************************************!*\
  !*** ./img/section1/10_segway/5.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/953bb8e98b7f744319dc.webp";

/***/ }),

/***/ "./img/section1/10_segway/6.webp":
/*!***************************************!*\
  !*** ./img/section1/10_segway/6.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/64eff59c16948143a9a7.webp";

/***/ }),

/***/ "./img/section1/11_segway/1.png":
/*!**************************************!*\
  !*** ./img/section1/11_segway/1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bad953ec73080f5b65de.png";

/***/ }),

/***/ "./img/section1/11_segway/2.png":
/*!**************************************!*\
  !*** ./img/section1/11_segway/2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/9dad68a3cac8c4658ba5.png";

/***/ }),

/***/ "./img/section1/11_segway/3.png":
/*!**************************************!*\
  !*** ./img/section1/11_segway/3.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d71c430738d128173173.png";

/***/ }),

/***/ "./img/section1/11_segway/4.png":
/*!**************************************!*\
  !*** ./img/section1/11_segway/4.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3a260b0a342215928dca.png";

/***/ }),

/***/ "./img/section1/11_segway/5.png":
/*!**************************************!*\
  !*** ./img/section1/11_segway/5.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/64eff59c16948143a9a7.png";

/***/ }),

/***/ "./img/section1/12_segway/1.png":
/*!**************************************!*\
  !*** ./img/section1/12_segway/1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/193839ea972538b99400.png";

/***/ }),

/***/ "./img/section1/12_segway/2.png":
/*!**************************************!*\
  !*** ./img/section1/12_segway/2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/64eff59c16948143a9a7.png";

/***/ }),

/***/ "./img/section1/13_segway/1.png":
/*!**************************************!*\
  !*** ./img/section1/13_segway/1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cba71a6cec28cd0ccc07.png";

/***/ }),

/***/ "./img/section1/13_segway/2.png":
/*!**************************************!*\
  !*** ./img/section1/13_segway/2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bffd3923bd6f73955484.png";

/***/ }),

/***/ "./img/section1/13_segway/3.png":
/*!**************************************!*\
  !*** ./img/section1/13_segway/3.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d121b9d5a075ca9101a4.png";

/***/ }),

/***/ "./img/section1/13_segway/4.png":
/*!**************************************!*\
  !*** ./img/section1/13_segway/4.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f998daa6b5c27171f6bc.png";

/***/ }),

/***/ "./img/section1/13_segway/5.png":
/*!**************************************!*\
  !*** ./img/section1/13_segway/5.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/47d7997239ca363e3773.png";

/***/ }),

/***/ "./img/section1/13_segway/6.png":
/*!**************************************!*\
  !*** ./img/section1/13_segway/6.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/64eff59c16948143a9a7.png";

/***/ }),

/***/ "./img/section1/14_segway/1.png":
/*!**************************************!*\
  !*** ./img/section1/14_segway/1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ed9e3ce6e518283533a4.png";

/***/ }),

/***/ "./img/section1/14_segway/2.png":
/*!**************************************!*\
  !*** ./img/section1/14_segway/2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ad57e89a62b561d8e649.png";

/***/ }),

/***/ "./img/section1/14_segway/3.png":
/*!**************************************!*\
  !*** ./img/section1/14_segway/3.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d9ab02cd77ad0303a7d5.png";

/***/ }),

/***/ "./img/section1/1_segway/1.webp":
/*!**************************************!*\
  !*** ./img/section1/1_segway/1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ca9c53a7f95249bdc6d6.webp";

/***/ }),

/***/ "./img/section1/1_segway/2.webp":
/*!**************************************!*\
  !*** ./img/section1/1_segway/2.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/8862c553cf759b37db7a.webp";

/***/ }),

/***/ "./img/section1/1_segway/3.webp":
/*!**************************************!*\
  !*** ./img/section1/1_segway/3.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/6e7d9656830318c4e07c.webp";

/***/ }),

/***/ "./img/section1/1_segway/4.webp":
/*!**************************************!*\
  !*** ./img/section1/1_segway/4.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/25c87101620afc2dcae4.webp";

/***/ }),

/***/ "./img/section1/1_segway/6.webp":
/*!**************************************!*\
  !*** ./img/section1/1_segway/6.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0ca6b17a6bc2d74e27f0.webp";

/***/ }),

/***/ "./img/section1/1_segway/7.webp":
/*!**************************************!*\
  !*** ./img/section1/1_segway/7.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/328a578e99acc984a6f5.webp";

/***/ }),

/***/ "./img/section1/1_segway/8.webp":
/*!**************************************!*\
  !*** ./img/section1/1_segway/8.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e1e853ec49391574feac.webp";

/***/ }),

/***/ "./img/section1/2_segway/1.png":
/*!*************************************!*\
  !*** ./img/section1/2_segway/1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b38831efbed4efc8e135.png";

/***/ }),

/***/ "./img/section1/2_segway/2.png":
/*!*************************************!*\
  !*** ./img/section1/2_segway/2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a2b090d625ecebae1200.png";

/***/ }),

/***/ "./img/section1/2_segway/3.png":
/*!*************************************!*\
  !*** ./img/section1/2_segway/3.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b1e365d452f5da3f6301.png";

/***/ }),

/***/ "./img/section1/2_segway/4.png":
/*!*************************************!*\
  !*** ./img/section1/2_segway/4.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/9e4d5d77e511999fc611.png";

/***/ }),

/***/ "./img/section1/2_segway/5.png":
/*!*************************************!*\
  !*** ./img/section1/2_segway/5.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5de59c7d94f6306ceb28.png";

/***/ }),

/***/ "./img/section1/3_segway/1.webp":
/*!**************************************!*\
  !*** ./img/section1/3_segway/1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/8f4fad74ccd7263362d8.webp";

/***/ }),

/***/ "./img/section1/3_segway/2.webp":
/*!**************************************!*\
  !*** ./img/section1/3_segway/2.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4f863196419101bb8c26.webp";

/***/ }),

/***/ "./img/section1/3_segway/3.webp":
/*!**************************************!*\
  !*** ./img/section1/3_segway/3.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0694df3bb0048889362a.webp";

/***/ }),

/***/ "./img/section1/3_segway/4.webp":
/*!**************************************!*\
  !*** ./img/section1/3_segway/4.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/1bc1480f2ef6b5f81846.webp";

/***/ }),

/***/ "./img/section1/3_segway/5.webp":
/*!**************************************!*\
  !*** ./img/section1/3_segway/5.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e2d39d0c76a2d73c74a7.webp";

/***/ }),

/***/ "./img/section1/3_segway/6.webp":
/*!**************************************!*\
  !*** ./img/section1/3_segway/6.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/1bda8f2fe7bdd663b945.webp";

/***/ }),

/***/ "./img/section1/4_segway/1.webp":
/*!**************************************!*\
  !*** ./img/section1/4_segway/1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fc4975f02d7a6edcd838.webp";

/***/ }),

/***/ "./img/section1/4_segway/2.webp":
/*!**************************************!*\
  !*** ./img/section1/4_segway/2.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/13f00d134cbd534196b9.webp";

/***/ }),

/***/ "./img/section1/4_segway/3.webp":
/*!**************************************!*\
  !*** ./img/section1/4_segway/3.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a7d9903e084c6d48c7fa.webp";

/***/ }),

/***/ "./img/section1/4_segway/4.webp":
/*!**************************************!*\
  !*** ./img/section1/4_segway/4.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5c9c11ec6dd4a979fd88.webp";

/***/ }),

/***/ "./img/section1/4_segway/5.webp":
/*!**************************************!*\
  !*** ./img/section1/4_segway/5.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c122068e0e5e4ea13c92.webp";

/***/ }),

/***/ "./img/section1/4_segway/6.webp":
/*!**************************************!*\
  !*** ./img/section1/4_segway/6.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a5b0c243ff4d6dfa7ada.webp";

/***/ }),

/***/ "./img/section1/5_segway/1.webp":
/*!**************************************!*\
  !*** ./img/section1/5_segway/1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c423a89620044064db17.webp";

/***/ }),

/***/ "./img/section1/5_segway/2.webp":
/*!**************************************!*\
  !*** ./img/section1/5_segway/2.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a1452044e353ade82e1a.webp";

/***/ }),

/***/ "./img/section1/5_segway/3.webp":
/*!**************************************!*\
  !*** ./img/section1/5_segway/3.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a6006b5e6ccbb3960076.webp";

/***/ }),

/***/ "./img/section1/5_segway/4.webp":
/*!**************************************!*\
  !*** ./img/section1/5_segway/4.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3b32d74efb7138230f86.webp";

/***/ }),

/***/ "./img/section1/5_segway/5.webp":
/*!**************************************!*\
  !*** ./img/section1/5_segway/5.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5de59c7d94f6306ceb28.webp";

/***/ }),

/***/ "./img/section1/6_segway/1.webp":
/*!**************************************!*\
  !*** ./img/section1/6_segway/1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bb7646f5afdb4dac416b.webp";

/***/ }),

/***/ "./img/section1/6_segway/2.webp":
/*!**************************************!*\
  !*** ./img/section1/6_segway/2.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d1244d86ef78f3d69dc5.webp";

/***/ }),

/***/ "./img/section1/6_segway/3.webp":
/*!**************************************!*\
  !*** ./img/section1/6_segway/3.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ee4fa5697d21086afab7.webp";

/***/ }),

/***/ "./img/section1/6_segway/4.webp":
/*!**************************************!*\
  !*** ./img/section1/6_segway/4.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/65bf4d99ecf79ee25125.webp";

/***/ }),

/***/ "./img/section1/6_segway/5.webp":
/*!**************************************!*\
  !*** ./img/section1/6_segway/5.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/facb66e24a5d12dfa4e7.webp";

/***/ }),

/***/ "./img/section1/6_segway/6.webp":
/*!**************************************!*\
  !*** ./img/section1/6_segway/6.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a69de7c51c1a10e5ea11.webp";

/***/ }),

/***/ "./img/section1/6_segway/7.webp":
/*!**************************************!*\
  !*** ./img/section1/6_segway/7.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0ad9deab6d082f8aa14a.webp";

/***/ }),

/***/ "./img/section1/7_segway/1.webp":
/*!**************************************!*\
  !*** ./img/section1/7_segway/1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a3a4feefd530e7bf795a.webp";

/***/ }),

/***/ "./img/section1/7_segway/2.webp":
/*!**************************************!*\
  !*** ./img/section1/7_segway/2.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/160c5280e1a11cd112cb.webp";

/***/ }),

/***/ "./img/section1/7_segway/3.webp":
/*!**************************************!*\
  !*** ./img/section1/7_segway/3.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f8c0ce5a3d62fbac769e.webp";

/***/ }),

/***/ "./img/section1/7_segway/4.webp":
/*!**************************************!*\
  !*** ./img/section1/7_segway/4.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/daaf3c24a171c3a5b5fb.webp";

/***/ }),

/***/ "./img/section1/7_segway/5.webp":
/*!**************************************!*\
  !*** ./img/section1/7_segway/5.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/47a20d9139659ee000e9.webp";

/***/ }),

/***/ "./img/section1/7_segway/6.webp":
/*!**************************************!*\
  !*** ./img/section1/7_segway/6.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0ad9deab6d082f8aa14a.webp";

/***/ }),

/***/ "./img/section1/8_segway/1.webp":
/*!**************************************!*\
  !*** ./img/section1/8_segway/1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a3c8755d8f661e0443be.webp";

/***/ }),

/***/ "./img/section1/8_segway/2.webp":
/*!**************************************!*\
  !*** ./img/section1/8_segway/2.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/235f80b7608169a80096.webp";

/***/ }),

/***/ "./img/section1/8_segway/3.webp":
/*!**************************************!*\
  !*** ./img/section1/8_segway/3.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3f46f97ae5a57344fc86.webp";

/***/ }),

/***/ "./img/section1/8_segway/4.webp":
/*!**************************************!*\
  !*** ./img/section1/8_segway/4.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/df8bb2f146664878694c.webp";

/***/ }),

/***/ "./img/section1/8_segway/5.webp":
/*!**************************************!*\
  !*** ./img/section1/8_segway/5.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/6ac9163a9b9b7137e33b.webp";

/***/ }),

/***/ "./img/section1/8_segway/6.webp":
/*!**************************************!*\
  !*** ./img/section1/8_segway/6.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b9ef3b9c518e597dbe4e.webp";

/***/ }),

/***/ "./img/section1/8_segway/7.webp":
/*!**************************************!*\
  !*** ./img/section1/8_segway/7.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0ad9deab6d082f8aa14a.webp";

/***/ }),

/***/ "./img/section1/9_segway/1.webp":
/*!**************************************!*\
  !*** ./img/section1/9_segway/1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/87f2fc4aee7721f5c808.webp";

/***/ }),

/***/ "./img/section1/9_segway/2.webp":
/*!**************************************!*\
  !*** ./img/section1/9_segway/2.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4601e5a9fe9d33526274.webp";

/***/ }),

/***/ "./img/section1/9_segway/3.webp":
/*!**************************************!*\
  !*** ./img/section1/9_segway/3.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0a8588dafce3d0f0b197.webp";

/***/ }),

/***/ "./img/section1/9_segway/4.webp":
/*!**************************************!*\
  !*** ./img/section1/9_segway/4.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b405170e08407ec26d54.webp";

/***/ }),

/***/ "./img/section1/9_segway/5.webp":
/*!**************************************!*\
  !*** ./img/section1/9_segway/5.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5c2e4f17b685de972c2b.webp";

/***/ }),

/***/ "./img/section1/9_segway/6.webp":
/*!**************************************!*\
  !*** ./img/section1/9_segway/6.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/64eff59c16948143a9a7.webp";

/***/ }),

/***/ "./img/section10/Батареи (1).png":
/*!***************************************!*\
  !*** ./img/section10/Батареи (1).png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/84e7a2a5aa8790c9945d.png";

/***/ }),

/***/ "./img/section10/Батареи.png":
/*!***********************************!*\
  !*** ./img/section10/Батареи.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/05a3239d182017376d0a.png";

/***/ }),

/***/ "./img/section10/Батареи2.png":
/*!************************************!*\
  !*** ./img/section10/Батареи2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/087b9fc4391fe6a88390.png";

/***/ }),

/***/ "./img/section11/1.png":
/*!*****************************!*\
  !*** ./img/section11/1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/72259568a537861e4fad.png";

/***/ }),

/***/ "./img/section12/batareus.png":
/*!************************************!*\
  !*** ./img/section12/batareus.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d5fb178f7ae22c1d1c40.png";

/***/ }),

/***/ "./img/section12/Батареи.png":
/*!***********************************!*\
  !*** ./img/section12/Батареи.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ab17fc5619b0adadf03b.png";

/***/ }),

/***/ "./img/section13/1156431_middle 1.png":
/*!********************************************!*\
  !*** ./img/section13/1156431_middle 1.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c10c01cb5bacff325081.png";

/***/ }),

/***/ "./img/section13/Батареи.png":
/*!***********************************!*\
  !*** ./img/section13/Батареи.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ff4d21ddba5cfdc1d716.png";

/***/ }),

/***/ "./img/section14/1.png":
/*!*****************************!*\
  !*** ./img/section14/1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/09ef33f52bf753da122f.png";

/***/ }),

/***/ "./img/section15/1.png":
/*!*****************************!*\
  !*** ./img/section15/1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/26a58618bc2f9b7bbb03.png";

/***/ }),

/***/ "./img/section15/pdf.png":
/*!*******************************!*\
  !*** ./img/section15/pdf.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d1432940d20fbe945dbe.png";

/***/ }),

/***/ "./img/section15/setting.png":
/*!***********************************!*\
  !*** ./img/section15/setting.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4e9952cf73743f3a9d19.png";

/***/ }),

/***/ "./img/section15/зарядка.png":
/*!***********************************!*\
  !*** ./img/section15/зарядка.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/35eb5fa5ea46526d901f.png";

/***/ }),

/***/ "./img/section15/шина.png":
/*!********************************!*\
  !*** ./img/section15/шина.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/dde46ebcd7e10ffd3b3f.png";

/***/ }),

/***/ "./img/section16/ellipse.png":
/*!***********************************!*\
  !*** ./img/section16/ellipse.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/93b28e7ce2eadeb6a3c8.png";

/***/ }),

/***/ "./img/section16/image10.png":
/*!***********************************!*\
  !*** ./img/section16/image10.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/9078119b75e5ce554489.png";

/***/ }),

/***/ "./img/section16/image11.png":
/*!***********************************!*\
  !*** ./img/section16/image11.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0849998470fc2da86b79.png";

/***/ }),

/***/ "./img/section16/image12.png":
/*!***********************************!*\
  !*** ./img/section16/image12.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/6afd0013cff623e9bb75.png";

/***/ }),

/***/ "./img/section16/image13.png":
/*!***********************************!*\
  !*** ./img/section16/image13.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/50de1a91f4a655aa449b.png";

/***/ }),

/***/ "./img/section16/image5.png":
/*!**********************************!*\
  !*** ./img/section16/image5.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a2e09ea6069297107d56.png";

/***/ }),

/***/ "./img/section16/image6.png":
/*!**********************************!*\
  !*** ./img/section16/image6.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f8d716a4b38339ebd469.png";

/***/ }),

/***/ "./img/section16/image7.png":
/*!**********************************!*\
  !*** ./img/section16/image7.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/42fc02c55aa383b0bbed.png";

/***/ }),

/***/ "./img/section16/image8.png":
/*!**********************************!*\
  !*** ./img/section16/image8.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/97cdfecd3d27cd720250.png";

/***/ }),

/***/ "./img/section16/image9.png":
/*!**********************************!*\
  !*** ./img/section16/image9.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3d5acdc29d3139783f99.png";

/***/ }),

/***/ "./img/section16/line.png":
/*!********************************!*\
  !*** ./img/section16/line.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a9afeb35d2360ae73697.png";

/***/ }),

/***/ "./img/section16/segway__1.png":
/*!*************************************!*\
  !*** ./img/section16/segway__1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f284009a9744dab6461e.png";

/***/ }),

/***/ "./img/section16/segway__2.png":
/*!*************************************!*\
  !*** ./img/section16/segway__2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5d3911e7671d1171d808.png";

/***/ }),

/***/ "./img/section16/segway__3.png":
/*!*************************************!*\
  !*** ./img/section16/segway__3.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/afc747e6403022b101fd.png";

/***/ }),

/***/ "./img/section16/Слой 0 2.png":
/*!************************************!*\
  !*** ./img/section16/Слой 0 2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f0260df6171c87a0c5ab.png";

/***/ }),

/***/ "./img/section17/sms.png":
/*!*******************************!*\
  !*** ./img/section17/sms.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4e7aac822596c3c45056.png";

/***/ }),

/***/ "./img/section18/app.png":
/*!*******************************!*\
  !*** ./img/section18/app.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/48f480980e4cdea5af85.png";

/***/ }),

/***/ "./img/section18/app2.png":
/*!********************************!*\
  !*** ./img/section18/app2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f2a8c31056ec594c0a1b.png";

/***/ }),

/***/ "./img/section20/segway1.png":
/*!***********************************!*\
  !*** ./img/section20/segway1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5c19d14ef5775b760842.png";

/***/ }),

/***/ "./img/section4/1.png":
/*!****************************!*\
  !*** ./img/section4/1.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/88b93170f58be9c3d086.png";

/***/ }),

/***/ "./img/section4/2.png":
/*!****************************!*\
  !*** ./img/section4/2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4d7a9d3cbbf605463084.png";

/***/ }),

/***/ "./img/section4/3.png":
/*!****************************!*\
  !*** ./img/section4/3.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d5a452af8fffb0131f1b.png";

/***/ }),

/***/ "./img/section4/4.png":
/*!****************************!*\
  !*** ./img/section4/4.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/51fe96376850e4ba56fa.png";

/***/ }),

/***/ "./img/section4/5.png":
/*!****************************!*\
  !*** ./img/section4/5.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4b622149848e727cec32.png";

/***/ }),

/***/ "./img/section4/6.png":
/*!****************************!*\
  !*** ./img/section4/6.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/9b5cd815f645698b08f3.png";

/***/ }),

/***/ "./img/section4/7.png":
/*!****************************!*\
  !*** ./img/section4/7.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ce23ff71f1f15952ee99.png";

/***/ }),

/***/ "./img/section4/8.png":
/*!****************************!*\
  !*** ./img/section4/8.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/674dfee39b1de8baeae4.png";

/***/ }),

/***/ "./img/section4/9.png":
/*!****************************!*\
  !*** ./img/section4/9.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c751786b128dfd54d964.png";

/***/ }),

/***/ "./img/section4/Frame 1.png":
/*!**********************************!*\
  !*** ./img/section4/Frame 1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/638592ecc47aa0ace871.png";

/***/ }),

/***/ "./img/section4/Frame 2.png":
/*!**********************************!*\
  !*** ./img/section4/Frame 2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/68acb537c1eb94cb3ab6.png";

/***/ }),

/***/ "./img/section4/Frame 3.png":
/*!**********************************!*\
  !*** ./img/section4/Frame 3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/63e9f5624a95506ef5bd.png";

/***/ }),

/***/ "./img/section4/Frame 4.png":
/*!**********************************!*\
  !*** ./img/section4/Frame 4.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d84fec35f44b2de82033.png";

/***/ }),

/***/ "./img/section4/Frame 5.png":
/*!**********************************!*\
  !*** ./img/section4/Frame 5.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b5dbedaa73a5ad193519.png";

/***/ }),

/***/ "./img/section4/Frame 6.png":
/*!**********************************!*\
  !*** ./img/section4/Frame 6.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/027741cadc7f4a61cc55.png";

/***/ }),

/***/ "./img/section4/Frame 7.png":
/*!**********************************!*\
  !*** ./img/section4/Frame 7.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f5f348c6dcc4b402a7ce.png";

/***/ }),

/***/ "./img/section4/Frame 8.png":
/*!**********************************!*\
  !*** ./img/section4/Frame 8.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/9dd4608b259e2af87e7d.png";

/***/ }),

/***/ "./img/section5/1.jpg":
/*!****************************!*\
  !*** ./img/section5/1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cffdcbaf54419ed75577.jpg";

/***/ }),

/***/ "./img/section6/(1.png":
/*!*****************************!*\
  !*** ./img/section6/(1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c55e41208f0b9c470284.png";

/***/ }),

/***/ "./img/section6/(2.png":
/*!*****************************!*\
  !*** ./img/section6/(2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/27f3cce20aadf99602a9.png";

/***/ }),

/***/ "./img/section6/(3.png":
/*!*****************************!*\
  !*** ./img/section6/(3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3592aae04521b0347c13.png";

/***/ }),

/***/ "./img/section6/(4.png":
/*!*****************************!*\
  !*** ./img/section6/(4.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/14ff74d5168c9ee32a28.png";

/***/ }),

/***/ "./img/section6/(5.png":
/*!*****************************!*\
  !*** ./img/section6/(5.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/192b19237e5c73b6567c.png";

/***/ }),

/***/ "./img/section6/(6.png":
/*!*****************************!*\
  !*** ./img/section6/(6.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e773e8ca7a22790a56b2.png";

/***/ }),

/***/ "./img/section6/(7.png":
/*!*****************************!*\
  !*** ./img/section6/(7.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bb9c51b689e22474a9c2.png";

/***/ }),

/***/ "./img/section6/(8.png":
/*!*****************************!*\
  !*** ./img/section6/(8.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/75a5d6468a0896015bb7.png";

/***/ }),

/***/ "./img/section7/segway.png":
/*!*********************************!*\
  !*** ./img/section7/segway.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/12ab6f3bf600a990a23e.png";

/***/ }),

/***/ "./img/section8/Батареи.png":
/*!**********************************!*\
  !*** ./img/section8/Батареи.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/144ec33db5715b719f01.png";

/***/ }),

/***/ "./img/section8/Батареи1.png":
/*!***********************************!*\
  !*** ./img/section8/Батареи1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0725e36539ba1cb2dd37.png";

/***/ }),

/***/ "./img/segwai(14)/1.png":
/*!******************************!*\
  !*** ./img/segwai(14)/1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/79e7d45574487e73a379.png";

/***/ }),

/***/ "./img/segwai(14)/10.png":
/*!*******************************!*\
  !*** ./img/segwai(14)/10.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c367980052f19ba51d3c.png";

/***/ }),

/***/ "./img/segwai(14)/11.png":
/*!*******************************!*\
  !*** ./img/segwai(14)/11.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d9f2f315b7096c1216e9.png";

/***/ }),

/***/ "./img/segwai(14)/12.png":
/*!*******************************!*\
  !*** ./img/segwai(14)/12.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/6974ba5b0b6f1fb0c7c0.png";

/***/ }),

/***/ "./img/segwai(14)/13.png":
/*!*******************************!*\
  !*** ./img/segwai(14)/13.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4c03893c13e8224bb00c.png";

/***/ }),

/***/ "./img/segwai(14)/14.png":
/*!*******************************!*\
  !*** ./img/segwai(14)/14.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ad64b489e614d721e875.png";

/***/ }),

/***/ "./img/segwai(14)/2.png":
/*!******************************!*\
  !*** ./img/segwai(14)/2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/43b7b0955cac229811d3.png";

/***/ }),

/***/ "./img/segwai(14)/3.png":
/*!******************************!*\
  !*** ./img/segwai(14)/3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/dfd32a2d83d72c44745b.png";

/***/ }),

/***/ "./img/segwai(14)/4.png":
/*!******************************!*\
  !*** ./img/segwai(14)/4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/27ce76f425229da4c9c5.png";

/***/ }),

/***/ "./img/segwai(14)/5.png":
/*!******************************!*\
  !*** ./img/segwai(14)/5.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e834ed7d856366bc904c.png";

/***/ }),

/***/ "./img/segwai(14)/6.png":
/*!******************************!*\
  !*** ./img/segwai(14)/6.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f1ce72fda2562664002a.png";

/***/ }),

/***/ "./img/segwai(14)/7.png":
/*!******************************!*\
  !*** ./img/segwai(14)/7.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3d969b7ae96ddcf87d92.png";

/***/ }),

/***/ "./img/segwai(14)/8.png":
/*!******************************!*\
  !*** ./img/segwai(14)/8.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bb29a834fae60bc8a4d5.png";

/***/ }),

/***/ "./img/segwai(14)/9.png":
/*!******************************!*\
  !*** ./img/segwai(14)/9.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d4a781a53531732afcbd.png";

/***/ }),

/***/ "./img/setting9/segway.png":
/*!*********************************!*\
  !*** ./img/setting9/segway.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f019fccd3c512cb0c34b.png";

/***/ }),

/***/ "./img/svg/box.svg":
/*!*************************!*\
  !*** ./img/svg/box.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/8b1b17a231e8f9914684.svg";

/***/ }),

/***/ "./img/svg/documentation.svg":
/*!***********************************!*\
  !*** ./img/svg/documentation.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4f96aad8e357134c17bc.svg";

/***/ }),

/***/ "./img/svg/setting.svg":
/*!*****************************!*\
  !*** ./img/svg/setting.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/45641755926f18a294b0.svg";

/***/ }),

/***/ "./img/svg/змейка.svg":
/*!****************************!*\
  !*** ./img/svg/змейка.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/327caa8f1c5abfb978ba.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_simplebar_src_simplebar_-e62838"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map