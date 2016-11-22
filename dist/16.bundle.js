webpackJsonp([16],{

/***/ 615:
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

var _Tiles = __webpack_require__(662);

var _Tiles2 = _interopRequireDefault(_Tiles);

var _Tile = __webpack_require__(661);

var _Tile2 = _interopRequireDefault(_Tile);

var _Header = __webpack_require__(341);

var _Header2 = _interopRequireDefault(_Header);

var _Heading = __webpack_require__(693);

var _Heading2 = _interopRequireDefault(_Heading);

var _Box = __webpack_require__(38);

var _Box2 = _interopRequireDefault(_Box);

var _Carousel = __webpack_require__(692);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _reactRouter = __webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function (_React$Component) {
  (0, _inherits3.default)(Main, _React$Component);

  function Main() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Main);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tiles: [{
        id: 1,
        title: "Force Directed Graph",
        description: "Using d3.forceSimulation",
        color: "neutral-1",
        link: '/force-directed-graph'
      }, {
        id: 2,
        title: "Examples",
        description: "It's up to your immagination!",
        color: "neutral-2",
        link: "/slides/examples"
      }, {
        id: 3,
        title: "WebVR",
        description: "A-Frame, three.js",
        color: "neutral-3",
        link: "/webvr"
      }, {
        id: 4,
        title: "The Force",
        description: "Use it",
        color: "neutral-1",
        link: "/force1"
      }, {
        id: 9,
        title: "The Force",
        description: "Links",
        color: "neutral-4-a",
        link: "/force2"
      }, {
        id: 5,
        title: "Basic Shapes",
        description: "Let's draw some triangles",
        color: "grey-1",
        link: "basic-shapes"
      }, {
        id: 7,
        title: "Data Binding",
        description: "Join data with elements",
        color: "warning",
        link: "/d3-selection-data-binding"
      }, {
        id: 8,
        title: "D3 Selection",
        description: "Selections allow powerful data-driven transformation of the DOM",
        color: "neutral-1",
        link: "/d3-selection"
      }, {
        id: 10,
        title: "Axis",
        description: "Human readable axis",
        color: "neutral-2",
        link: "/api-axis"
      }, {
        id: 11,
        title: "Arrays",
        description: "Search, transform, stats",
        color: "neutral-3",
        link: "/api-arrays"
      }, {
        id: 13,
        title: "Colors",
        description: "For a better world",
        color: "neutral-1",
        link: "/api-colors"
      }, {
        id: 12,
        title: "Scales",
        description: "Abstract your visualization",
        color: "grey-3-a",
        link: "/api-scales"
      }, {
        id: 6,
        title: "Slides",
        description: "The boring stuff",
        color: "neutral-4-a",
        link: "/slides/cover"
      }]
    }, _this.onSelect = function (item) {
      _this.props.router.push(item.link);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Main, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _Tiles2.default,
        { fill: true },
        this.state.tiles.map(function (tile) {
          if (tile.carousel) {
            return _react2.default.createElement(
              _Tile2.default,
              { key: tile.id, align: 'start', basis: 'small', flex: false, colorIndex: tile.color },
              _react2.default.createElement(
                _Carousel2.default,
                { persistentNav: false, autoplaySpeed: 2000 },
                tile.items.map(function (item) {
                  return _react2.default.createElement(
                    _Box2.default,
                    { key: item.id },
                    _react2.default.createElement(
                      'a',
                      { onClick: _this2.onSelect.bind(_this2, item) },
                      _react2.default.createElement(
                        _Header2.default,
                        { size: 'small', pad: { "horizontal": "small" } },
                        _react2.default.createElement(
                          _Heading2.default,
                          { tag: 'h4' },
                          _react2.default.createElement(
                            'strong',
                            { style: { color: "White" } },
                            item.title
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _Box2.default,
                        { pad: 'small' },
                        _react2.default.createElement(
                          'p',
                          null,
                          item.description
                        )
                      )
                    )
                  );
                })
              )
            );
          } else {
            return _react2.default.createElement(
              _Tile2.default,
              { key: tile.id, align: 'start', basis: 'small', flex: false, colorIndex: tile.color },
              _react2.default.createElement(
                'a',
                { onClick: _this2.onSelect.bind(_this2, tile) },
                _react2.default.createElement(
                  _Header2.default,
                  { size: 'small', pad: { "horizontal": "small" } },
                  _react2.default.createElement(
                    _Heading2.default,
                    { tag: 'h4' },
                    _react2.default.createElement(
                      'strong',
                      { style: { color: "White" } },
                      tile.title
                    )
                  )
                ),
                _react2.default.createElement(
                  _Box2.default,
                  { pad: 'small' },
                  _react2.default.createElement(
                    'p',
                    null,
                    tile.description
                  )
                )
              )
            );
          }
        })
      );
    }
  }]);
  return Main;
}(_react2.default.Component);

exports.default = (0, _reactRouter.withRouter)(Main);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(101); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Main.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)(module)))

/***/ },

/***/ 658:
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

var _Intl = __webpack_require__(22);

var _Intl2 = _interopRequireDefault(_Intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.SPINNING;

var Spinning = function (_Component) {
  (0, _inherits3.default)(Spinning, _Component);

  function Spinning() {
    (0, _classCallCheck3.default)(this, Spinning);
    return (0, _possibleConstructorReturn3.default)(this, (Spinning.__proto__ || (0, _getPrototypeOf2.default)(Spinning)).apply(this, arguments));
  }

  (0, _createClass3.default)(Spinning, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          a11yTitle = _props.a11yTitle,
          className = _props.className,
          small = _props.small,
          props = (0, _objectWithoutProperties3.default)(_props, ['a11yTitle', 'className', 'small']);
      var intl = this.context.intl;

      var classes = (0, _classnames3.default)(CLASS_ROOT, (0, _defineProperty3.default)({}, CLASS_ROOT + '--small', small), className);

      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, props, { className: classes, viewBox: '0 0 48 48', version: '1.1',
          role: 'img', 'aria-label': a11yTitle || _Intl2.default.getMessage(intl, 'Spinning') }),
        _react2.default.createElement('circle', { stroke: '#ddd', strokeWidth: '4', strokeDasharray: '24px 8px',
          fill: 'none', cx: '24', cy: '24', r: '20' }),
        _react2.default.createElement('circle', { stroke: '#333', strokeWidth: '4', strokeDasharray: '24px 104px',
          fill: 'none', cx: '24', cy: '24', r: '20' })
      );
    }
  }]);
  return Spinning;
}(_react.Component);

Spinning.displayName = 'Spinning';
exports.default = Spinning;


Spinning.contextTypes = {
  intl: _react.PropTypes.object
};

Spinning.propTypes = {
  a11yTitle: _react.PropTypes.string,
  className: _react.PropTypes.string,
  small: _react.PropTypes.bool
};
module.exports = exports['default'];

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(660), __esModule: true };

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

var core  = __webpack_require__(18)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ },

/***/ 661:
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

var _keys = __webpack_require__(45);

var _keys2 = _interopRequireDefault(_keys);

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

var _Props = __webpack_require__(53);

var _Props2 = _interopRequireDefault(_Props);

var _Box = __webpack_require__(38);

var _Box2 = _interopRequireDefault(_Box);

var _CSSClassnames = __webpack_require__(8);

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = _CSSClassnames2.default.TILE; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var NAMESPACE = _CSSClassnames2.default.NAMESPACE;

var Tile = function (_Component) {
  (0, _inherits3.default)(Tile, _Component);

  function Tile() {
    (0, _classCallCheck3.default)(this, Tile);
    return (0, _possibleConstructorReturn3.default)(this, (Tile.__proto__ || (0, _getPrototypeOf2.default)(Tile)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tile, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          onClick = _props.onClick,
          wide = _props.wide,
          status = _props.status,
          hoverStyle = _props.hoverStyle,
          hoverColorIndex = _props.hoverColorIndex,
          hoverBorder = _props.hoverBorder,
          hoverBorderSize = _props.hoverBorderSize;

      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Tile.propTypes));

      var statusClass = status ? status.toLowerCase() : undefined;
      // if Tiles flush is true, default borderSize to small (1px)
      var borderSize = hoverBorder ? hoverBorderSize ? hoverBorderSize : 'large' : 'small';

      var classes = (0, _classnames3.default)(CLASS_ROOT, className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--status-' + statusClass, status), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--wide', wide), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--selectable', onClick), (0, _defineProperty3.default)(_classnames, '' + NAMESPACE + hoverStyle + (hoverStyle == 'border' ? borderSize ? '-' + borderSize : '-medium' : '') + '-hover-color-index-' + hoverColorIndex, hoverStyle), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--hover-border-' + borderSize, borderSize), _classnames));

      var boxProps = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));

      return _react2.default.createElement(
        _Box2.default,
        (0, _extends3.default)({}, restProps, boxProps, { className: classes }),
        children
      );
    }
  }]);
  return Tile;
}(_react.Component);

Tile.displayName = 'Tile';
exports.default = Tile;


Tile.propTypes = (0, _extends3.default)({
  hoverStyle: _react.PropTypes.oneOf(['border', 'background', 'none']),
  hoverColorIndex: _react.PropTypes.string,
  hoverBorder: _react.PropTypes.bool,
  hoverBorderSize: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  wide: _react.PropTypes.bool }, _Box2.default.propTypes);

Tile.defaultProps = {
  pad: 'none',
  direction: 'column',
  align: 'center',
  hoverStyle: 'none',
  hoverColorIndex: 'disabled'
};
module.exports = exports['default'];

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(45);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = __webpack_require__(14);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _from = __webpack_require__(340);

var _from2 = _interopRequireDefault(_from);

var _typeof2 = __webpack_require__(46);

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__(659);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _reactDom = __webpack_require__(24);

var _classnames2 = __webpack_require__(11);

var _classnames3 = _interopRequireDefault(_classnames2);

var _Props = __webpack_require__(53);

var _Props2 = _interopRequireDefault(_Props);

var _Box = __webpack_require__(38);

var _Box2 = _interopRequireDefault(_Box);

var _Button = __webpack_require__(67);

var _Button2 = _interopRequireDefault(_Button);

var _Spinning = __webpack_require__(658);

var _Spinning2 = _interopRequireDefault(_Spinning);

var _Scroll = __webpack_require__(344);

var _Scroll2 = _interopRequireDefault(_Scroll);

var _InfiniteScroll = __webpack_require__(696);

var _InfiniteScroll2 = _interopRequireDefault(_InfiniteScroll);

var _Selection = __webpack_require__(697);

var _Selection2 = _interopRequireDefault(_Selection);

var _KeyboardAccelerators = __webpack_require__(40);

var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

var _Intl = __webpack_require__(22);

var _Intl2 = _interopRequireDefault(_Intl);

var _Announcer = __webpack_require__(68);

var _LinkPrevious = __webpack_require__(343);

var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

var _LinkNext = __webpack_require__(342);

var _LinkNext2 = _interopRequireDefault(_LinkNext);

var _CSSClassnames = __webpack_require__(8);

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.TILES;
var TILE = _CSSClassnames2.default.TILE;
var SELECTED_CLASS = TILE + '--selected';
var ACTIVE_CLASS = TILE + '--active';

var Tiles = function (_Component) {
  (0, _inherits3.default)(Tiles, _Component);

  function Tiles(props, context) {
    (0, _classCallCheck3.default)(this, Tiles);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tiles.__proto__ || (0, _getPrototypeOf2.default)(Tiles)).call(this, props, context));

    _this._onLeft = _this._onLeft.bind(_this);
    _this._onRight = _this._onRight.bind(_this);
    _this._onScrollHorizontal = _this._onScrollHorizontal.bind(_this);
    _this._onWheel = _this._onWheel.bind(_this);
    _this._onResize = _this._onResize.bind(_this);
    _this._layout = _this._layout.bind(_this);
    _this._onClick = _this._onClick.bind(_this);
    _this._fireClick = _this._fireClick.bind(_this);
    _this._announceTile = _this._announceTile.bind(_this);
    _this._onPreviousTile = _this._onPreviousTile.bind(_this);
    _this._onNextTile = _this._onNextTile.bind(_this);
    _this._onEnter = _this._onEnter.bind(_this);

    _this.state = {
      activeTile: undefined,
      mouseActive: false,
      overflow: false,
      selected: _Selection2.default.normalizeIndexes(props.selected)
    };
    return _this;
  }

  (0, _createClass3.default)(Tiles, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          direction = _props.direction,
          onMore = _props.onMore,
          selectable = _props.selectable;

      this._setSelection();
      if (onMore) {
        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.moreRef, onMore);
      }
      if ('row' === direction) {
        window.addEventListener('resize', this._onResize);
        document.addEventListener('wheel', this._onWheel, { passive: true });
        this._trackHorizontalScroll();
        // give browser a chance to stabilize
        setTimeout(this._layout, 10);
      }
      if (selectable) {
        // only listen for navigation keys if the tile row can be selected
        this._keyboardHandlers = {
          left: this._onPreviousTile,
          up: this._onPreviousTile,
          right: this._onNextTile,
          down: this._onNextTile,
          enter: this._onEnter,
          space: this._onEnter
        };
        _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected !== undefined) {
        this.setState({
          selected: _Selection2.default.normalizeIndexes(nextProps.selected)
        });
      }
      if (this._scroll) {
        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
        this._scroll = undefined;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props2 = this.props,
          direction = _props2.direction,
          onMore = _props2.onMore,
          selectable = _props2.selectable;
      var selected = this.state.selected;

      if ((0, _stringify2.default)(selected) !== (0, _stringify2.default)(prevState.selected)) {
        this._setSelection();
      }
      if (onMore && !this._scroll) {
        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.moreRef, onMore);
      }
      if ('row' === direction) {
        this._trackHorizontalScroll();
        // give browser a chance to stabilize
        setTimeout(this._layout, 10);
      }
      if (selectable) {
        // only listen for navigation keys if the list row can be selected
        this._keyboardHandlers = {
          left: this._onPreviousTile,
          up: this._onPreviousTile,
          right: this._onNextTile,
          down: this._onNextTile,
          enter: this._onEnter,
          space: this._onEnter
        };
        _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props3 = this.props,
          direction = _props3.direction,
          selectable = _props3.selectable;

      if (this._scroll) {
        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
      }
      if ('row' === direction) {
        window.removeEventListener('resize', this._onResize);
        document.removeEventListener('wheel', this._onWheel);
        if (this._tracking) {
          var tiles = (0, _reactDom.findDOMNode)(this.tilesRef);
          tiles.removeEventListener('scroll', this._onScrollHorizontal);
        }
      }
      if (selectable) {
        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);
      }
    }
  }, {
    key: '_announceTile',
    value: function _announceTile(label) {
      var intl = this.context.intl;

      var enterSelectMessage = _Intl2.default.getMessage(intl, 'Enter Select');
      // avoid a long text to be read by the screen reader
      var labelMessage = label.length > 15 ? label.substring(0, 15) + '...' : label;
      (0, _Announcer.announce)(labelMessage + ' ' + enterSelectMessage);
    }
  }, {
    key: '_onPreviousTile',
    value: function _onPreviousTile(event) {
      var _this2 = this;

      if ((0, _reactDom.findDOMNode)(this.tilesRef).contains(document.activeElement)) {
        var _ret = function () {
          event.preventDefault();
          var activeTile = _this2.state.activeTile;

          var rows = (0, _reactDom.findDOMNode)(_this2.tilesRef).querySelectorAll('.' + TILE);
          if (rows && rows.length > 0) {
            if (activeTile === undefined) {
              rows[0].classList.add(ACTIVE_CLASS);
              _this2.setState({ activeTile: 0 }, function () {
                _this2._announceTile(rows[_this2.state.activeTile].innerText);
              });
            } else if (activeTile - 1 >= 0) {
              rows[activeTile].classList.remove(ACTIVE_CLASS);
              rows[activeTile - 1].classList.add(ACTIVE_CLASS);
              _this2.setState({ activeTile: activeTile - 1 }, function () {
                _this2._announceTile(rows[_this2.state.activeTile].innerText);
              });
            }
          }

          //stop event propagation
          return {
            v: true
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
      }
    }
  }, {
    key: '_onNextTile',
    value: function _onNextTile(event) {
      var _this3 = this;

      if ((0, _reactDom.findDOMNode)(this.tilesRef).contains(document.activeElement)) {
        var _ret2 = function () {
          event.preventDefault();
          var activeTile = _this3.state.activeTile;

          var rows = (0, _reactDom.findDOMNode)(_this3.tilesRef).querySelectorAll('.' + TILE);
          if (rows && rows.length > 0) {
            if (activeTile === undefined) {
              rows[0].classList.add(ACTIVE_CLASS);
              _this3.setState({ activeTile: 0 }, function () {
                _this3._announceTile(rows[_this3.state.activeTile].innerText);
              });
            } else if (activeTile + 1 <= rows.length - 1) {
              rows[activeTile].classList.remove(ACTIVE_CLASS);
              rows[activeTile + 1].classList.add(ACTIVE_CLASS);
              _this3.setState({ activeTile: activeTile + 1 }, function () {
                _this3._announceTile(rows[_this3.state.activeTile].innerText);
              });
            }
          }

          //stop event propagation
          return {
            v: true
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
      }
    }
  }, {
    key: '_fireClick',
    value: function _fireClick(element, shiftKey) {
      var event = void 0;
      try {
        event = new MouseEvent('click', {
          'bubbles': true,
          'cancelable': true,
          'shiftKey': shiftKey
        });
      } catch (e) {
        // IE11 workaround.
        event = document.createEvent('Event');
        event.initEvent('click', true, true);
      }
      // We use dispatchEvent to have the browser fill out the event fully.
      element.dispatchEvent(event);
    }
  }, {
    key: '_onEnter',
    value: function _onEnter(event) {
      var activeTile = this.state.activeTile;
      var intl = this.context.intl;

      if ((0, _reactDom.findDOMNode)(this.tilesRef).contains(document.activeElement) && activeTile !== undefined) {
        var rows = (0, _reactDom.findDOMNode)(this.tilesRef).querySelectorAll('.' + TILE);
        this._fireClick(rows[activeTile], event.shiftKey);
        rows[activeTile].classList.remove(ACTIVE_CLASS);
        var label = rows[activeTile].innerText;
        // avoid a long text to be read by the screen reader
        var labelMessage = label.length > 15 ? label.substring(0, 15) + '...' : label;
        var selectedMessage = _Intl2.default.getMessage(intl, 'Selected');
        (0, _Announcer.announce)(labelMessage + ' ' + selectedMessage);
      }
    }
  }, {
    key: '_onLeft',
    value: function _onLeft() {
      var tiles = (0, _reactDom.findDOMNode)(this.tilesRef);
      _Scroll2.default.scrollBy(tiles, 'scrollLeft', -tiles.offsetWidth);
    }
  }, {
    key: '_onRight',
    value: function _onRight() {
      var tiles = (0, _reactDom.findDOMNode)(this.tilesRef);
      _Scroll2.default.scrollBy(tiles, 'scrollLeft', tiles.offsetWidth);
    }
  }, {
    key: '_onScrollHorizontal',
    value: function _onScrollHorizontal() {
      // debounce
      clearTimeout(this._scrollTimer);
      this._scrollTimer = setTimeout(this._layout, 50);
    }
  }, {
    key: '_onWheel',
    value: function _onWheel(event) {
      if (Math.abs(event.deltaX) > 100) {
        clearInterval(this._scrollTimer);
      } else if (event.deltaX > 5) {
        this._onRight();
      } else if (event.deltaX < -5) {
        this._onLeft();
      }
    }
  }, {
    key: '_layout',
    value: function _layout() {
      var _this4 = this;

      var direction = this.props.direction;

      if ('row' === direction) {
        (function () {
          // determine if we have more tiles than room to fit
          var tiles = (0, _reactDom.findDOMNode)(_this4.tilesRef);
          // 20 is to allow some fuzziness as scrollbars come and go
          _this4.setState({
            overflow: tiles.scrollWidth > tiles.offsetWidth + 20,
            overflowStart: tiles.scrollLeft <= 20,
            overflowEnd: tiles.scrollLeft >= tiles.scrollWidth - tiles.offsetWidth
          });

          // mark any tiles that might be clipped
          var rect = tiles.getBoundingClientRect();
          var children = tiles.querySelectorAll('.' + TILE);

          (0, _from2.default)(children).map(function (child, index) {
            var childRect = child.getBoundingClientRect();
            // 12 accounts for padding
            if (childRect.left + 12 < rect.left || childRect.right - 12 > rect.right) {
              child.classList.add(TILE + '--eclipsed');
            } else {
              child.classList.remove(TILE + '--eclipsed');
            }
          });
        })();
      }
    }
  }, {
    key: '_renderChild',
    value: function _renderChild(element) {
      var flush = this.props.flush;


      if (element) {
        // only clone tile children
        if (element.type && element.type.displayName === 'Tile') {
          var elementClone = _react2.default.cloneElement(element, {
            hoverBorder: !flush
          });

          return elementClone;
        }
        return element;
      }

      return undefined;
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      // debounce
      clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(this._layout, 50);
    }
  }, {
    key: '_trackHorizontalScroll',
    value: function _trackHorizontalScroll() {
      var overflow = this.state.overflow;

      if (overflow && !this._tracking) {
        var tiles = (0, _reactDom.findDOMNode)(this.tilesRef);
        tiles.addEventListener('scroll', this._onScrollHorizontal);
        this._tracking = true;
      }
    }
  }, {
    key: '_setSelection',
    value: function _setSelection() {
      _Selection2.default.setClassFromIndexes({
        containerElement: (0, _reactDom.findDOMNode)(this.tilesRef),
        childSelector: '.' + TILE,
        selectedClass: SELECTED_CLASS,
        selectedIndexes: this.state.selected
      });
    }
  }, {
    key: '_onClick',
    value: function _onClick(event) {
      var _props4 = this.props,
          onSelect = _props4.onSelect,
          selectable = _props4.selectable,
          selected = _props4.selected;

      var selection = _Selection2.default.onClick(event, {
        containerElement: (0, _reactDom.findDOMNode)(this.tilesRef),
        childSelector: '.' + TILE,
        selectedClass: SELECTED_CLASS,
        multiSelect: 'multiple' === selectable,
        priorSelectedIndexes: this.state.selected
      });
      // only set the selected state and classes if the caller isn't managing it.
      if (selected === undefined) {
        this.setState({ selected: selection }, this._setSelection);
      }

      if (onSelect) {
        onSelect(selection.length === 1 ? selection[0] : selection);
      }
    }

    // children should be an array of Tile

  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this5 = this;

      var _props5 = this.props,
          a11yTitle = _props5.a11yTitle,
          className = _props5.className,
          children = _props5.children,
          direction = _props5.direction,
          fill = _props5.fill,
          flush = _props5.flush,
          _onBlur = _props5.onBlur,
          _onFocus = _props5.onFocus,
          onMore = _props5.onMore,
          _onMouseDown = _props5.onMouseDown,
          _onMouseUp = _props5.onMouseUp,
          selectable = _props5.selectable;
      var _state = this.state,
          activeTile = _state.activeTile,
          focus = _state.focus,
          mouseActive = _state.mouseActive,
          overflow = _state.overflow,
          overflowEnd = _state.overflowEnd,
          overflowStart = _state.overflowStart;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--fill', fill), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--flush', flush), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--focus', focus), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--selectable', selectable), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--moreable', onMore), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--overflowed', overflow), _classnames), className);

      var other = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));

      var more = void 0;
      if (onMore) {
        more = _react2.default.createElement(
          'div',
          { ref: function ref(_ref) {
              return _this5.moreRef = _ref;
            }, className: CLASS_ROOT + '__more' },
          _react2.default.createElement(_Spinning2.default, null)
        );
      }

      var tileContents = _react.Children.map(children, function (element) {
        return _this5._renderChild(element);
      });

      var selectableProps = void 0;
      if (selectable) {
        var multiSelectMessage = selectable === 'multiple' ? '(' + _Intl2.default.getMessage(intl, 'Multi Select') + ')' : '';
        var tilesMessage = a11yTitle || _Intl2.default.getMessage(intl, 'Tiles');
        var navigationHelpMessage = _Intl2.default.getMessage(intl, 'Navigation Help');
        selectableProps = {
          'aria-label': tilesMessage + ' ' + multiSelectMessage + ' ' + navigationHelpMessage,
          tabIndex: '0',
          onClick: this._onClick,
          onMouseDown: function onMouseDown(event) {
            _this5.setState({ mouseActive: true });
            if (_onMouseDown) {
              _onMouseDown(event);
            }
          },
          onMouseUp: function onMouseUp(event) {
            _this5.setState({ mouseActive: false });
            if (_onMouseUp) {
              _onMouseUp(event);
            }
          },
          onFocus: function onFocus(event) {
            if (mouseActive === false) {
              _this5.setState({ focus: true });
            }
            if (_onFocus) {
              _onFocus(event);
            }
          },
          onBlur: function onBlur(event) {
            if (activeTile) {
              var rows = (0, _reactDom.findDOMNode)(_this5.tilesRef).querySelectorAll('.' + TILE);
              rows[activeTile].classList.remove(ACTIVE_CLASS);
            }
            _this5.setState({ focus: false, activeTile: undefined });
            if (_onBlur) {
              _onBlur(event);
            }
          }
        };
      }

      var contents = _react2.default.createElement(
        _Box2.default,
        (0, _extends3.default)({ ref: function ref(_ref2) {
            return _this5.tilesRef = _ref2;
          } }, other, {
          wrap: direction ? false : true,
          direction: direction ? direction : 'row',
          className: classes, focusable: false }, selectableProps),
        tileContents,
        more
      );

      if (overflow) {
        var left = void 0;
        var right = void 0;

        if (!overflowStart) {
          var previousTilesMessage = _Intl2.default.getMessage(intl, 'Previous Tiles');
          left = _react2.default.createElement(_Button2.default, { className: CLASS_ROOT + '__left', icon: _react2.default.createElement(_LinkPrevious2.default, null),
            a11yTitle: previousTilesMessage, onClick: this._onLeft });
        }
        if (!overflowEnd) {
          var nextTilesMessage = _Intl2.default.getMessage(intl, 'Next Tiles');
          right = _react2.default.createElement(_Button2.default, { className: CLASS_ROOT + '__right', icon: _react2.default.createElement(_LinkNext2.default, null),
            a11yTitle: nextTilesMessage, onClick: this._onRight });
        }

        contents = _react2.default.createElement(
          'div',
          { className: CLASS_ROOT + '__container' },
          left,
          contents,
          right
        );
      }

      return contents;
    }
  }]);
  return Tiles;
}(_react.Component);

Tiles.displayName = 'Tiles';
exports.default = Tiles;


Tiles.contextTypes = {
  intl: _react.PropTypes.object
};

Tiles.propTypes = (0, _extends3.default)({
  fill: _react.PropTypes.bool,
  flush: _react.PropTypes.bool,
  onMore: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  selectable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['multiple'])]),
  selected: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)])
}, _Box2.default.propTypes);

Tiles.defaultProps = {
  flush: true,
  justify: 'start',
  pad: 'small'
};
module.exports = exports['default'];

/***/ },

/***/ 692:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(14);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = __webpack_require__(45);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames3 = __webpack_require__(11);

var _classnames4 = _interopRequireDefault(_classnames3);

var _Box = __webpack_require__(38);

var _Box2 = _interopRequireDefault(_Box);

var _Tiles = __webpack_require__(662);

var _Tiles2 = _interopRequireDefault(_Tiles);

var _Tile = __webpack_require__(661);

var _Tile2 = _interopRequireDefault(_Tile);

var _Button = __webpack_require__(67);

var _Button2 = _interopRequireDefault(_Button);

var _Previous = __webpack_require__(695);

var _Previous2 = _interopRequireDefault(_Previous);

var _Next = __webpack_require__(694);

var _Next2 = _interopRequireDefault(_Next);

var _DOM = __webpack_require__(39);

var _DOM2 = _interopRequireDefault(_DOM);

var _CSSClassnames = __webpack_require__(8);

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__(22);

var _Intl2 = _interopRequireDefault(_Intl);

var _Announcer = __webpack_require__(68);

var _Props = __webpack_require__(53);

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = _CSSClassnames2.default.CAROUSEL; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var Carousel = function (_Component) {
  (0, _inherits3.default)(Carousel, _Component);

  function Carousel(props, context) {
    (0, _classCallCheck3.default)(this, Carousel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).call(this, props, context));

    _this._onSelect = _this._onSelect.bind(_this);
    _this._stopAutoplay = _this._stopAutoplay.bind(_this);
    _this._startAutoplay = _this._startAutoplay.bind(_this);
    _this._onResize = _this._onResize.bind(_this);
    _this._slidePrev = _this._slidePrev.bind(_this);
    _this._slideNext = _this._slideNext.bind(_this);
    _this._handleScroll = _this._handleScroll.bind(_this);

    _this.state = {
      activeIndex: 0,
      hideControls: !props.persistentNav,
      priorIndex: 0,
      sequence: 1,
      width: 0,
      slide: false
    };
    return _this;
  }

  (0, _createClass3.default)(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.carouselRef) {
        this.setState({
          width: this.carouselRef.offsetWidth
        });

        window.addEventListener('resize', this._onResize);

        var _Hammer = __webpack_require__(698);
        this.hammer = new _Hammer(this.carouselRef);
        this._updateHammer();

        this._handleScroll();
        var scrollParents = _DOM2.default.findScrollParents(this.carouselRef);
        scrollParents.forEach(function (scrollParent) {
          scrollParent.addEventListener('scroll', _this2._handleScroll);
        }, this);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._updateHammer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      clearInterval(this._slideAnimation);

      window.removeEventListener('resize', this._onResize);

      var scrollParents = _DOM2.default.findScrollParents(this.carouselRef);
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', _this3._handleScroll);
      }, this);

      this._unmountHammer();
    }
  }, {
    key: '_unmountHammer',
    value: function _unmountHammer() {
      if (this.hammer) {
        this.hammer.stop();
        this.hammer.destroy();
      }
      this.hammer = undefined;
    }
  }, {
    key: '_updateHammer',
    value: function _updateHammer() {
      var _this4 = this;

      if (this.hammer) {
        this.hammer.get('swipe').set({
          direction: Hammer.DIRECTION_HORIZONTAL
        });

        this.hammer.off('panend');
        this.hammer.on('panend', function (event) {
          if (event.direction === 4) {
            _this4._slidePrev();
          } else if (event.direction === 2) {
            _this4._slideNext();
          }
        });
      }
    }
  }, {
    key: '_handleScroll',
    value: function _handleScroll() {
      var autoplay = this.props.autoplay;
      var slide = this.state.slide;

      var viewportHeight = document.documentElement.clientHeight;
      var carouselTopPosition = this.carouselRef.getBoundingClientRect().top;
      var carouselHeight = this.carouselRef.offsetHeight;
      var startScroll = viewportHeight - carouselHeight / 2;

      if (autoplay && carouselTopPosition <= startScroll && carouselTopPosition >= -carouselHeight / 2) {
        if (slide === false) {
          this._setSlideInterval();
          this.setState({
            slide: true
          });
        }
      } else {
        clearInterval(this._slideAnimation);
        this.setState({
          slide: false
        });
      }
    }
  }, {
    key: '_setSlideInterval',
    value: function _setSlideInterval() {
      var autoplaySpeed = this.props.autoplaySpeed;

      clearInterval(this._slideAnimation);
      this._slideAnimation = setInterval(function () {
        var _this5 = this;

        var _props = this.props,
            children = _props.children,
            infinite = _props.infinite;
        var activeIndex = this.state.activeIndex;
        var intl = this.context.intl;

        var numSlides = children.length;

        this.setState({
          activeIndex: (activeIndex + 1) % numSlides
        }, function () {
          var slideNumber = _Intl2.default.getMessage(intl, 'Slide Number', {
            slideNumber: _this5.state.activeIndex + 1
          });
          var activatedMessage = _Intl2.default.getMessage(intl, 'Activated');
          (0, _Announcer.announce)(slideNumber + ' ' + activatedMessage, 'polite');
        });

        if (!infinite && activeIndex === numSlides - 1) {
          clearInterval(this._slideAnimation);
        }
      }.bind(this), autoplaySpeed);
    }
  }, {
    key: '_onSelect',
    value: function _onSelect(index) {
      if (index !== this.state.activeIndex) {
        this.setState({
          activeIndex: index
        });
      }
    }
  }, {
    key: '_stopAutoplay',
    value: function _stopAutoplay() {
      var _props2 = this.props,
          autoplay = _props2.autoplay,
          persistentNav = _props2.persistentNav;

      if (autoplay) {
        clearInterval(this._slideAnimation);
      }

      if (!persistentNav) {
        this.setState({
          hideControls: false
        });
      }
    }
  }, {
    key: '_startAutoplay',
    value: function _startAutoplay() {
      var activeIndex = this.state.activeIndex;
      var _props3 = this.props,
          autoplay = _props3.autoplay,
          children = _props3.children,
          infinite = _props3.infinite,
          persistentNav = _props3.persistentNav;

      if (autoplay && (infinite || activeIndex !== children.length - 1) &&
      // making sure to only start autoplay if the focus is not inside
      // the carousel
      !this.carouselRef.contains(document.activeElement)) {
        this._setSlideInterval();
      }

      if (!persistentNav) {
        this.setState({
          hideControls: true
        });
      }
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      this.setState({
        width: this.carouselRef.offsetWidth
      });
    }
  }, {
    key: '_slidePrev',
    value: function _slidePrev() {
      var children = this.props.children;
      var activeIndex = this.state.activeIndex;

      var numSlides = children.length;
      this.setState({
        activeIndex: (activeIndex + numSlides - 1) % numSlides
      });
    }
  }, {
    key: '_slideNext',
    value: function _slideNext() {
      var children = this.props.children;
      var activeIndex = this.state.activeIndex;

      var numSlides = children.length;
      this.setState({
        activeIndex: (activeIndex + 1) % numSlides
      });
    }
  }, {
    key: '_renderPrevButton',
    value: function _renderPrevButton() {
      var infinite = this.props.infinite;
      var activeIndex = this.state.activeIndex;
      var intl = this.context.intl;

      var prevButton = void 0;
      if (infinite || activeIndex !== 0) {
        var prevMessage = _Intl2.default.getMessage(intl, 'Previous Slide');
        prevButton = _react2.default.createElement(_Button2.default, { icon: _react2.default.createElement(_Previous2.default, { size: 'large' }), a11yTitle: prevMessage,
          className: CLASS_ROOT + '__arrow ' + CLASS_ROOT + '__arrow--prev',
          onClick: this._slidePrev });
      }

      return prevButton;
    }
  }, {
    key: '_renderNextButton',
    value: function _renderNextButton() {
      var _props4 = this.props,
          children = _props4.children,
          infinite = _props4.infinite;
      var activeIndex = this.state.activeIndex;
      var intl = this.context.intl;

      var nextButton = void 0;
      if (infinite || activeIndex !== children.length - 1) {
        var nextMessage = _Intl2.default.getMessage(intl, 'Next Slide');
        nextButton = _react2.default.createElement(_Button2.default, { icon: _react2.default.createElement(_Next2.default, { size: 'large' }), a11yTitle: nextMessage,
          className: CLASS_ROOT + '__arrow ' + CLASS_ROOT + '__arrow--next',
          onClick: this._slideNext });
      }

      return nextButton;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _props5 = this.props,
          a11yTitle = _props5.a11yTitle,
          children = _props5.children,
          className = _props5.className,
          props = (0, _objectWithoutProperties3.default)(_props5, ['a11yTitle', 'children', 'className']);

      var restProps = _Props2.default.omit((0, _extends3.default)({}, props), (0, _keys2.default)(Carousel.propTypes));
      var _state = this.state,
          activeIndex = _state.activeIndex,
          hideControls = _state.hideControls,
          width = _state.width;
      var intl = this.context.intl;

      var classes = (0, _classnames4.default)(CLASS_ROOT, (0, _defineProperty3.default)({}, CLASS_ROOT + '--hide-controls', hideControls), className);

      var trackWidth = width * children.length;
      var trackPosition = -(width * activeIndex);

      var tiles = _react2.default.Children.map(children, function (child, index) {
        var ariaHidden = activeIndex !== index ? true : false;
        return _react2.default.createElement(
          _Tile2.default,
          { className: CLASS_ROOT + '__item', 'aria-hidden': ariaHidden },
          child
        );
      });

      var controls = _react2.default.Children.map(children, function (child, index) {
        var active = index === activeIndex;
        var controlClasses = (0, _classnames4.default)(CLASS_ROOT + '__control', (0, _defineProperty3.default)({}, CLASS_ROOT + '__control--active', active));
        var activateMessage = _Intl2.default.getMessage(intl, 'Activate');
        var slideNumberMessage = _Intl2.default.getMessage(intl, 'Slide Number', {
          slideNumber: index + 1
        });

        var currentlyActiveMessage = '';
        if (active) {
          currentlyActiveMessage = '(' + _Intl2.default.getMessage(intl, 'Currently Active') + ')';
        }
        return _react2.default.createElement(
          _Button2.default,
          { plain: true, onClick: _this6._onSelect.bind(_this6, index),
            a11yTitle: activateMessage + ' ' + slideNumberMessage + ' ' + currentlyActiveMessage },
          _react2.default.createElement(
            'svg',
            { className: controlClasses, viewBox: '0 0 24 24', version: '1.1' },
            _react2.default.createElement('circle', { cx: 12, cy: 12, r: 6 })
          )
        );
      }, this);

      var carouselMessage = a11yTitle || _Intl2.default.getMessage(intl, 'Carousel');
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ ref: function ref(_ref) {
            return _this6.carouselRef = _ref;
          } }, restProps, {
          className: classes, role: 'group', 'aria-label': carouselMessage,
          onFocus: this._stopAutoplay, onBlur: this._startAutoplay,
          onMouseOver: this._stopAutoplay, onMouseOut: this._startAutoplay }),
        _react2.default.createElement(
          'div',
          { className: CLASS_ROOT + '__track',
            style: {
              width: trackWidth && trackWidth > 0 ? trackWidth : '',
              marginLeft: trackPosition
            } },
          _react2.default.createElement(
            _Tiles2.default,
            { fill: true, responsive: false, wrap: false, direction: 'row' },
            tiles
          )
        ),
        this._renderPrevButton(),
        this._renderNextButton(),
        _react2.default.createElement(
          _Box2.default,
          { className: CLASS_ROOT + "__controls", direction: 'row',
            justify: 'center', responsive: false },
          controls
        )
      );
    }
  }]);
  return Carousel;
}(_react.Component);

Carousel.displayName = 'Carousel';
exports.default = Carousel;


Carousel.contextTypes = {
  intl: _react.PropTypes.object
};

Carousel.defaultProps = {
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  persistentNav: true
};

Carousel.propTypes = {
  a11yTitle: _react.PropTypes.string,
  autoplay: _react.PropTypes.bool,
  autoplaySpeed: _react.PropTypes.number,
  infinite: _react.PropTypes.bool,
  persistentNav: _react.PropTypes.bool
};
module.exports = exports['default'];

/***/ },

/***/ 693:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = _CSSClassnames2.default.HEADING; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var Heading = function (_Component) {
  (0, _inherits3.default)(Heading, _Component);

  function Heading() {
    (0, _classCallCheck3.default)(this, Heading);
    return (0, _possibleConstructorReturn3.default)(this, (Heading.__proto__ || (0, _getPrototypeOf2.default)(Heading)).apply(this, arguments));
  }

  (0, _createClass3.default)(Heading, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          align = _props.align,
          children = _props.children,
          className = _props.className,
          margin = _props.margin,
          size = _props.size,
          strong = _props.strong,
          Tag = _props.tag,
          uppercase = _props.uppercase,
          props = (0, _objectWithoutProperties3.default)(_props, ['align', 'children', 'className', 'margin', 'size', 'strong', 'tag', 'uppercase']);

      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--strong', strong), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--align-' + align, align), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--margin-' + margin, margin), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--uppercase', uppercase), _classnames), className);

      return _react2.default.createElement(
        Tag,
        (0, _extends3.default)({}, props, { className: classes }),
        children
      );
    }
  }]);
  return Heading;
}(_react.Component);

Heading.displayName = 'Heading';
exports.default = Heading;


Heading.propTypes = {
  align: _react.PropTypes.oneOf(['start', 'center', 'end']),
  margin: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  strong: _react.PropTypes.bool,
  tag: _react.PropTypes.string,
  uppercase: _react.PropTypes.bool
};

Heading.defaultProps = {
  tag: 'h1'
};
module.exports = exports['default'];

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(14);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _Intl = __webpack_require__(22);

var _Intl2 = _interopRequireDefault(_Intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  (0, _inherits3.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-next', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'next');

      return _react2.default.createElement(
        'svg',
        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle },
        _react2.default.createElement('polyline', { fill: 'none', stroke: '#000000', strokeWidth: '2', points: '7 2 17 12 7 22' })
      );
    }
  }]);
  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Next';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(14);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _Intl = __webpack_require__(22);

var _Intl2 = _interopRequireDefault(_Intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  (0, _inherits3.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-previous', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'previous');

      return _react2.default.createElement(
        'svg',
        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle },
        _react2.default.createElement('polyline', { fill: 'none', stroke: '#000000', strokeWidth: '2', points: '7 2 17 12 7 22', transform: 'matrix(-1 0 0 1 24 0)' })
      );
    }
  }]);
  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Previous';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];

/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DOM = __webpack_require__(39);

var _DOM2 = _interopRequireDefault(_DOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SCROLL_MORE_DELAY = 500; // when the user scrolls
// (C) Copyright 2014 Hewlett Packard Enterprise Development LP

var SCROLL_MORE_INITIAL_DELAY = 50; // when we start out at the bottom already

function _evaluate(scrollState) {
  if (scrollState.scrollParent) {
    // are we at the bottom?
    var bottom;
    if (scrollState.scrollParent === document) {
      bottom = window.innerHeight;
    } else {
      bottom = scrollState.scrollParent.getBoundingClientRect().bottom;
    }
    var indicatorRect = scrollState.indicatorElement.getBoundingClientRect();
    // Only if bottom isn't zero. This can happen when content hasn't
    // arrived yet.
    // 10px offset is to ensure onEnd() gets called
    if (bottom && indicatorRect.bottom <= bottom + 10) {
      scrollState.onEnd();
    }
  }
}

function _onScroll(scrollState) {
  // delay a bit to ride out quick users
  clearTimeout(scrollState.scrollTimer);
  scrollState.scrollTimer = setTimeout(function () {
    _evaluate(scrollState);
  }, SCROLL_MORE_DELAY);
}

function _onResize(scrollState) {
  clearTimeout(scrollState.scrollTimer);
  scrollState.scrollTimer = setTimeout(function () {
    _evaluate(scrollState);
  }, SCROLL_MORE_DELAY);
}

exports.default = {
  startListeningForScroll: function startListeningForScroll(indicatorElement, onEnd) {
    var scrollState = {
      onEnd: onEnd,
      indicatorElement: indicatorElement,
      scrollParent: _DOM2.default.findScrollParents(indicatorElement)[0]
    };

    scrollState._onResize = _onResize.bind(this, scrollState);
    scrollState._onScroll = _onScroll.bind(this, scrollState);

    scrollState.scrollParent.addEventListener("scroll", scrollState._onScroll);
    window.addEventListener("resize", scrollState._onResize);
    // check in case we're already at the bottom and the indicator is visible
    if (scrollState.scrollParent === document || scrollState.scrollParent === document.body) {
      var rect = indicatorElement.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        scrollState.scrollTimer = setTimeout(onEnd, SCROLL_MORE_INITIAL_DELAY);
      }
    }
    return scrollState;
  },
  stopListeningForScroll: function stopListeningForScroll(scrollState) {
    if (scrollState.scrollParent) {
      clearTimeout(scrollState.scrollTimer);
      scrollState.scrollParent.removeEventListener("scroll", scrollState._onScroll);
      window.removeEventListener("resize", scrollState._onResize);
      scrollState.scrollParent = undefined;
    }
  }
};
module.exports = exports["default"];

/***/ },

/***/ 697:
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// (C) Copyright 2015 Hewlett Packard Enterprise Development LP

// Functions to manage selection via both child index and a specific class name.

// Ensures it is an array.
function normalizeIndexes(selectedIndexes) {
  var result = void 0;
  if (undefined === selectedIndexes || null === selectedIndexes) {
    result = [];
  } else if (typeof selectedIndexes === 'number') {
    result = [selectedIndexes];
  } else {
    result = selectedIndexes;
  }
  return result;
}

// Clears any selected items
// options: {containerElement: , selectedClass: }
function clearClass(options) {
  if (options && options.containerElement) {
    var items = options.containerElement.querySelectorAll("." + options.selectedClass);
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove(options.selectedClass);
    }
  }
}

// Sets the selectedClass on all children whose index is in selectedIndexes.
// options: {containerElement: , childSelector: , selectedClass: ,
//    selectedIndexes: []}
function setClassFromIndexes(options) {
  clearClass(options);
  if (options && options.containerElement && options.selectedIndexes) {
    (function () {
      var items = options.containerElement.querySelectorAll(options.childSelector);
      options.selectedIndexes.forEach(function (index) {
        if (items[index]) {
          items[index].classList.add(options.selectedClass);
        }
      });
    })();
  }
}

// Gets the selected selectedClass on all children whose index is in
// selectedIndexes.
// options: {containerElement: , childSelector: , selectedClass: }
function getIndexesFromClass(options) {
  var items = options.containerElement.querySelectorAll(options.childSelector);
  var selectedIndexes = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains(options.selectedClass)) {
      selectedIndexes.push(i);
    }
  }
  return selectedIndexes;
}

// Returns a new selectedIndexes array with the latest selected indexes
// options: {containerElement: , childSelector: , //selectedClass: ,
//   multiSelect: true|false, priorSelectedIndexes: []}
function onClick(event, options) {

  // Go up the DOM tree until we match the childSelector
  var item = event.target;
  var matchFunction = item.matches || item.matchesElement || item.msMatchesSelector;
  while (matchFunction && item && !matchFunction.bind(item, options.childSelector)()) {
    item = item.parentNode;
    matchFunction = item.matches || item.matchesElement || item.msMatchesSelector;
  }

  // determine the index of the clicked element
  var indexInContainer = 0;
  var previousItem = item.previousSibling;
  while (previousItem != null) {
    previousItem = previousItem.previousSibling;
    indexInContainer += 1;
  }

  var selectedIndexes = void 0; // what will be returned

  if (!event.ctrlKey && !event.metaKey && !event.shiftKey) {

    selectedIndexes = [indexInContainer];
  } else {
    // was it selected?
    var indexInPrior = options.priorSelectedIndexes.indexOf(indexInContainer);

    if (!options.multiSelect) {

      if (-1 !== indexInPrior && (event.ctrlKey || event.metaKey)) {
        selectedIndexes = [];
      } else {
        selectedIndexes = options.priorSelectedIndexes;
      }
    } else {
      // multi-select

      // make a copy of the prior list so we can modify it
      selectedIndexes = options.priorSelectedIndexes.slice(0);

      if (event.shiftKey) {
        var i;

        (function () {

          // select from nearest selected item to the currently selected item
          var closestIndex = -1;
          selectedIndexes.forEach(function (selectIndex, arrayIndex) {
            if (-1 === closestIndex) {
              closestIndex = selectIndex;
            } else if (Math.abs(indexInContainer - selectIndex) < Math.abs(indexInContainer - closestIndex)) {
              closestIndex = selectIndex;
            }
          });

          for (i = indexInContainer; i !== closestIndex;) {
            selectedIndexes.push(i);
            if (closestIndex < indexInContainer) {
              i -= 1;
            } else {
              i += 1;
            }
          }

          if (indexInPrior > -1) {
            selectedIndexes.splice(indexInPrior, 1);
          }

          // Remove text selection. This often happens when shift multi-selecting
          window.getSelection().removeAllRanges();
        })();
      } else {
        // toggle
        if (-1 === indexInPrior) {
          selectedIndexes.push(indexInContainer);
        } else {
          selectedIndexes.splice(indexInPrior, 1);
        }
      }
    }
  }

  return selectedIndexes;
}

exports.default = {
  normalizeIndexes: normalizeIndexes,
  clearClass: clearClass,
  getIndexesFromClass: getIndexesFromClass,
  setClassFromIndexes: setClassFromIndexes,
  onClick: onClick
};
module.exports = exports["default"];

/***/ },

/***/ 698:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return Hammer;
    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }

});
//# sourceMappingURL=16.bundle.js.map