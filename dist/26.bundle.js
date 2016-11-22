webpackJsonp([26],{

/***/ 638:
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

var SlideSaveTheDate = function (_React$Component) {
  (0, _inherits3.default)(SlideSaveTheDate, _React$Component);

  function SlideSaveTheDate() {
    (0, _classCallCheck3.default)(this, SlideSaveTheDate);
    return (0, _possibleConstructorReturn3.default)(this, (SlideSaveTheDate.__proto__ || (0, _getPrototypeOf2.default)(SlideSaveTheDate)).apply(this, arguments));
  }

  (0, _createClass3.default)(SlideSaveTheDate, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Box2.default,
        null,
        _react2.default.createElement(
          _Hero2.default,
          { colorIndex: '#f2f5f3' },
          _react2.default.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 169.03 44.65' },
            _react2.default.createElement('path', { d: 'M18.25,37.87c-2.5-3.17-3.8-6.64-3.8-11.9V10.28a1.09,1.09,0,0,1,1.09-1.09H29.93A1.09,1.09,0,0,1,31,10.28v15a1.09,1.09,0,0,1-1.09,1.09H19.17A15.08,15.08,0,0,0,22,35.05c2,2.56,4.83,3.85,7.4,5A1.08,1.08,0,0,1,30,41.51l-1,2.11a1.09,1.09,0,0,1-1.35.56C23.28,42.61,20.52,40.74,18.25,37.87Z', style: { fill: "#00b5d1" } }),
            _react2.default.createElement('path', { d: 'M72.12,44.26H69.19a1,1,0,0,1-1-1V16.06c0-1.75-.84-2.53-2.33-2.53a7.89,7.89,0,0,0-4.54,1.75v28a1,1,0,0,1-1,1H57.39a1,1,0,0,1-1-1V1a1,1,0,0,1,1-1h2.93a1,1,0,0,1,1,1V11.52a8.47,8.47,0,0,1,6-2.66,5.25,5.25,0,0,1,5.12,2.85c0.67,0.94.64,2.8,0.65,3.57v28A1,1,0,0,1,72.12,44.26Z' }),
            _react2.default.createElement('path', { d: 'M128.56,44.26h-2.93a1,1,0,0,1-1-1V1a1,1,0,0,1,1-1h2.93a1,1,0,0,1,1,1V43.26A1,1,0,0,1,128.56,44.26Z' }),
            _react2.default.createElement('path', { d: 'M11.07,12.5V10.26a1,1,0,0,0-1-1H7.75V1a1,1,0,0,0-1-1H3.84a1,1,0,0,0-1,1V9.26H1a1,1,0,0,0-1,1V12.5a1,1,0,0,0,1,1H2.84V37.1c0,4.3,2.56,6.9,7.13,7.25a1,1,0,0,0,1.09-1V40.71a1,1,0,0,0-.86-1,2.76,2.76,0,0,1-2.44-3l0-6.66h0V13.5h2.32A1,1,0,0,0,11.07,12.5Z' }),
            _react2.default.createElement('path', { d: 'M100.13,12.5V10.26a1,1,0,0,0-1-1H96.81V1a1,1,0,0,0-1-1H92.91a1,1,0,0,0-1,1V9.26H90.07a1,1,0,0,0-1,1V12.5a1,1,0,0,0,1,1h1.84V37.1c0,4.3,2.56,6.9,7.13,7.25a1,1,0,0,0,1.09-1V40.71a1,1,0,0,0-.86-1,2.76,2.76,0,0,1-2.44-3l0-6.66h0V13.5h2.32A1,1,0,0,0,100.13,12.5Z' }),
            _react2.default.createElement('path', { d: 'M47.46,20.73V16.57a3.11,3.11,0,0,0-3.11-3.11H43.57a3.11,3.11,0,0,0-3.11,3.11V24l0,4.74,0,8.18q0,3.11,3.11,3.11h0.91a3.11,3.11,0,0,0,3.11-3.11V33.15a1,1,0,0,1,1-1h2.8a1,1,0,0,1,1,1v3.58c0,4.37-2.47,7.91-7.91,7.91h-1c-5.25,0-7.91-2.66-7.91-7.29v-20c0-5.87,2.66-8.52,7.91-8.52h1c5.25,0,7.91,2.66,7.91,7.91v4a1,1,0,0,1-1,1H48.46A1,1,0,0,1,47.46,20.73Z' }),
            _react2.default.createElement('path', { d: 'M146.65,44.39H150a1,1,0,0,0,.94-1.32l-6.88-20.53,6-11.87a1,1,0,0,0-.89-1.45h-3.19a1,1,0,0,0-.9.56l-5.87,12V1a1,1,0,0,0-1-1h-2.93a1,1,0,0,0-1,1V43.26a1,1,0,0,0,1,1h2.93a1,1,0,0,0,1-1v-11l1.75-3.48,4.77,14.9A1,1,0,0,0,146.65,44.39Z' }),
            _react2.default.createElement('path', { d: 'M169,20.53V16.77a7.91,7.91,0,0,0-7.91-7.91h-0.93c-5.18,0-7.83,2.59-7.9,7.7l0,0v4.9c0,4.34,1.43,5.08,5.19,6.38l4.3,1.47a3.11,3.11,0,0,1,2.32,3.09v4.55a3.18,3.18,0,0,1-3.18,3.18h-0.67A3.18,3.18,0,0,1,157,36.93V33a1,1,0,0,0-1-1h-2.8a1,1,0,0,0-1,1v3.76a7.91,7.91,0,0,0,7.91,7.91h0.93c5.18,0,7.83-2.59,7.9-7.7l0,0v-4.4c0-4.34-1.43-6.09-5.19-7.39l-4.3-1.47a3.11,3.11,0,0,1-2.32-3.09v-4a3.18,3.18,0,0,1,3.18-3.18h0.67a3.18,3.18,0,0,1,3.18,3.18v4a1,1,0,0,0,1,1H168A1,1,0,0,0,169,20.53Z' }),
            _react2.default.createElement('path', { d: 'M116.06,15.56c2.5,3.17,3.8,6.64,3.8,11.9V43.16a1.09,1.09,0,0,1-1.09,1.09H104.38a1.09,1.09,0,0,1-1.09-1.09v-15a1.09,1.09,0,0,1,1.09-1.09h10.76a15.08,15.08,0,0,0-2.87-8.72c-2-2.56-4.83-3.85-7.4-5a1.08,1.08,0,0,1-.51-1.44l1-2.11a1.09,1.09,0,0,1,1.35-.56C111,10.82,113.79,12.69,116.06,15.56Z', style: { fill: "fill:#00b5d1" } })
          ),
          _react2.default.createElement(
            'h1',
            { style: { color: "black" } },
            'One script to rule them all, React + Native'
          ),
          _react2.default.createElement(
            'span',
            { style: { color: "#e74e50" } },
            _react2.default.createElement(
              'h1',
              null,
              '26 November 2016'
            ),
            _react2.default.createElement(
              'h1',
              null,
              _react2.default.createElement(
                'a',
                { style: { color: "#00adef" }, href: 'http://techtalks.bg/' },
                'SPS Tower, 72 Todor Kableshkov Blvd., Sofia'
              )
            )
          )
        )
      );
    }
  }]);
  return SlideSaveTheDate;
}(_react2.default.Component);

exports.default = (0, _reactRouter.withRouter)(SlideSaveTheDate);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(101); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SlideSaveTheDate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
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
//# sourceMappingURL=26.bundle.js.map