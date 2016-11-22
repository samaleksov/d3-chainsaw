webpackJsonp([25],{

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(99), RootInstanceProvider = __webpack_require__(100), ReactMount = __webpack_require__(65), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(155);

var _Hero = __webpack_require__(655);

var _Hero2 = _interopRequireDefault(_Hero);

var _Box = __webpack_require__(38);

var _Box2 = _interopRequireDefault(_Box);

var _Image = __webpack_require__(339);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideShire = function (_React$Component) {
  (0, _inherits3.default)(SlideShire, _React$Component);

  function SlideShire() {
    (0, _classCallCheck3.default)(this, SlideShire);
    return (0, _possibleConstructorReturn3.default)(this, (SlideShire.__proto__ || (0, _getPrototypeOf2.default)(SlideShire)).apply(this, arguments));
  }

  (0, _createClass3.default)(SlideShire, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Box2.default, { style: {
          backgroundImage: 'url(/eaf.gif)',
          backgroundSize: 'contain',
          minHeight: "85vh"
        } });
    }
  }]);
  return SlideShire;
}(_react2.default.Component);

exports.default = (0, _reactRouter.withRouter)(SlideShire);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(101); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SlideShire.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)(module)))

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(14);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(16);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(11);

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__(8);

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Responsive = __webpack_require__(102);

var _Responsive2 = _interopRequireDefault(_Responsive);

var _Box = __webpack_require__(38);

var _Box2 = _interopRequireDefault(_Box);

var _Image = __webpack_require__(339);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.HERO;

var Hero = function (_Component) {
  (0, _inherits3.default)(Hero, _Component);

  function Hero(props, context) {
    (0, _classCallCheck3.default)(this, Hero);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Hero.__proto__ || (0, _getPrototypeOf2.default)(Hero)).call(this, props, context));

    _this._setReverse = _this._setReverse.bind(_this);
    _this._setBackgroundColorIndex = _this._setBackgroundColorIndex.bind(_this);

    _this.state = {
      colorIndex: props.colorIndex,
      reverse: props.justify === 'start' ? true : false
    };
    return _this;
  }

  (0, _createClass3.default)(Hero, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this._setReverse);
      window.addEventListener('resize', this._setBackgroundColorIndex);
      this._setReverse();
      this._setBackgroundColorIndex();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._setReverse);
      window.removeEventListener('resize', this._setBackgroundColorIndex);
    }
  }, {
    key: '_setBackgroundColorIndex',
    value: function _setBackgroundColorIndex() {
      var colorIndex = this.props.colorIndex;


      if (window.innerWidth < _Responsive2.default.smallSize()) {
        this.setState({ colorIndex: 'light-1' });
      } else {
        this.setState({ colorIndex: colorIndex });
      }
    }
  }, {
    key: '_setReverse',
    value: function _setReverse() {
      var justify = this.props.justify;


      if (window.innerWidth < _Responsive2.default.smallSize()) {
        this.setState({ reverse: false });
      } else {
        this.setState({ reverse: justify === 'start' ? true : false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          backgroundImage = _props.backgroundImage,
          backgroundVideo = _props.backgroundVideo,
          children = _props.children,
          className = _props.className,
          flush = _props.flush,
          image = _props.image,
          justify = _props.justify,
          responsiveBackgroundPosition = _props.responsiveBackgroundPosition,
          separator = _props.separator,
          size = _props.size,
          props = (0, _objectWithoutProperties3.default)(_props, ['backgroundImage', 'backgroundVideo', 'children', 'className', 'flush', 'image', 'justify', 'responsiveBackgroundPosition', 'separator', 'size']);


      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--bg-' + responsiveBackgroundPosition, responsiveBackgroundPosition), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--mobile-separator', separator), _classnames), className);

      var full = flush ? 'horizontal' : false;
      var pad = flush ? 'none' : 'large';

      var backgroundMarkup = void 0;
      if (backgroundImage) {
        backgroundMarkup = _react2.default.createElement(_Box2.default, { containerClassName: CLASS_ROOT + "__background",
          appCentered: true, pad: pad,
          backgroundImage: 'url(' + backgroundImage + ')', full: full });
      } else if (backgroundVideo) {
        backgroundMarkup = _react2.default.createElement(
          _Box2.default,
          { className: CLASS_ROOT + "__background " + CLASS_ROOT + "__background-video" },
          backgroundVideo
        );
      }

      var imageMarkup = _react2.default.createElement(_Box2.default, null);
      if (image) {
        imageMarkup = _react2.default.createElement(_Image2.default, { src: 'url(' + image + ')' });
      }

      var contentMarkup = void 0;
      if (justify === 'center') {
        contentMarkup = _react2.default.createElement(
          _Box2.default,
          { className: CLASS_ROOT + "__overlay", justify: justify,
            align: 'center', primary: true, full: full, direction: 'row' },
          _react2.default.createElement(
            _Box2.default,
            { pad: { horizontal: 'large', vertical: 'large',
                between: 'medium' } },
            children
          )
        );
      } else {
        contentMarkup = _react2.default.createElement(
          _Box2.default,
          { className: CLASS_ROOT + "__overlay", align: 'center',
            primary: true, full: full, direction: 'row',
            reverse: this.state.reverse },
          _react2.default.createElement(
            _Box2.default,
            { className: CLASS_ROOT + "__image", align: 'center',
              justify: 'center' },
            imageMarkup
          ),
          _react2.default.createElement(
            _Box2.default,
            { pad: { horizontal: 'large', vertical: 'large',
                between: 'medium' } },
            children
          )
        );
      }

      return _react2.default.createElement(
        _Box2.default,
        (0, _extends3.default)({}, props, { className: classes, colorIndex: this.state.colorIndex }),
        backgroundMarkup,
        contentMarkup
      );
    }
  }]);
  return Hero;
}(_react.Component);

Hero.displayName = 'Hero';
exports.default = Hero;


Hero.propTypes = {
  backgroundImage: _react.PropTypes.string,
  backgroundVideo: _react.PropTypes.object,
  colorIndex: _react.PropTypes.string,
  flush: _react.PropTypes.bool,
  image: _react.PropTypes.string,
  justify: _react.PropTypes.oneOf(['start', 'center', 'end']),
  responsiveBackgroundPosition: _react.PropTypes.oneOf(['left', 'center', 'right']),
  separator: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['small', 'large'])
};

Hero.defaultProps = {
  colorIndex: 'grey-1',
  flush: true,
  justify: 'end',
  responsiveBackgroundPosition: 'center',
  separator: false,
  size: 'large'
};
module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=25.bundle.js.map