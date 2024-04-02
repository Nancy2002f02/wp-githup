/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ast-checkbox.js":
/*!*****************************!*\
  !*** ./src/ast-checkbox.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  ToggleControl
} = wp.components;
const AstCheckboxControl = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    className: props.name,
    label: props.label,
    checked: props.value,
    onChange: val => {
      val = true === val ? 'disabled' : '';
      props.onChange(val);
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (AstCheckboxControl);

/***/ }),

/***/ "./src/ast-radio-image.js":
/*!********************************!*\
  !*** ./src/ast-radio-image.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_svg_svgs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/svg/svgs.json */ "../../../assets/svg/svgs.json");



const AstRadioImageControl = props => {
  const {
    label,
    description,
    id,
    choices,
    metavalue
  } = props;
  const onLayoutChange = value => {
    props.onChange(value);
  };
  let htmlLabel = null,
    htmlDescription = null,
    htmlRadio;
  const counterClass = Object.keys(choices).length ? 'ast-radio-option-' + Object.keys(choices).length : '';
  if (label) {
    htmlLabel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "customize-control-title"
    }, label);
  }
  if (description) {
    htmlDescription = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "description customize-control-description"
    }, description);
  }
  htmlRadio = Object.entries(choices).map(_ref => {
    let [key, data] = _ref;
    let value = data.value;
    let checked = metavalue === value ? true : false;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: key
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "image-select",
      type: "radio",
      value: value,
      name: id,
      id: id + '-' + value,
      checked: checked,
      onChange: () => onLayoutChange(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: id + '-' + value,
      className: "ast-radio-img-svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ast-meta-image-tooltip"
    }, data.label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: _assets_svg_svgs_json__WEBPACK_IMPORTED_MODULE_1__[value]
      }
    })));
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-radio-image-controller"
  }, (htmlLabel || htmlDescription) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, htmlLabel, htmlDescription), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: `input_${id}`,
    className: `options-wrapper ${counterClass}`
  }, htmlRadio));
};
/* harmony default export */ __webpack_exports__["default"] = (AstRadioImageControl);

/***/ }),

/***/ "./src/ast-selector.js":
/*!*****************************!*\
  !*** ./src/ast-selector.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const AstSelectorControl = props => {
  const {
    label,
    description,
    id,
    metavalue,
    choices
  } = props;
  const onValueChange = value => {
    props.onChange(value);
  };
  if (!choices) {
    return;
  }
  let labelHtml = null;
  let descriptionHtml = null;
  if (label) {
    labelHtml = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ast-meta-sortable-title"
    }, label);
  }
  if (description) {
    descriptionHtml = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ast-meta-sortable-description"
    }, description);
  }
  let optionsHtml = Object.entries(choices).map(_ref => {
    let [key, data] = _ref;
    let value = data.value;
    var html = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ast-selector-inner-wrap",
      key: key
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: key,
      onClick: () => onValueChange(value),
      "aria-pressed": value === metavalue,
      isPrimary: value === metavalue,
      label: data.label
    }, data.label));
    return html;
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: "ast-meta-selector-controller"
  }, (labelHtml || descriptionHtml) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, labelHtml, descriptionHtml), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-meta-selector-wrapper"
  }, optionsHtml));
};
/* harmony default export */ __webpack_exports__["default"] = (AstSelectorControl);

/***/ }),

/***/ "./src/astra-color-picker-control.js":
/*!*******************************************!*\
  !*** ./src/astra-color-picker-control.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3__);






const AstraGradientPicker = astMetaParams.isWP_5_9 ? _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker : _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGradientPicker;
const defaultGradient = 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)';
const maybeGetColorForVariable = (color, palette) => {
  const paletteColors = palette.palette;
  if (undefined !== color && color.includes('var')) {
    // Get color index from palette for color variable.
    const colorIndex = color.charAt(color.length - 2);
    color = paletteColors[colorIndex];
  }
  return color;
};
const globalIconSVG = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    className: "astra-globe-dashicon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.99997 0.499249C12.143 0.499249 15.5015 3.85775 15.5015 8.00075C15.5015 12.143 12.143 15.5015 7.99997 15.5015C3.85697 15.5015 0.498474 12.143 0.498474 8.00075C0.498474 3.85775 3.85697 0.499249 7.99997 0.499249ZM10.2042 11.375H5.79497C6.28397 13.1855 7.13447 14.3765 7.99922 14.3765C8.86397 14.3765 9.71447 13.1855 10.2035 11.375H10.2042ZM4.63172 11.375H2.58872C3.31285 12.5337 4.38885 13.4302 5.65922 13.9332C5.26772 13.3182 4.94447 12.5487 4.70672 11.672L4.63022 11.3757L4.63172 11.375ZM13.4105 11.375H11.369C11.126 12.3762 10.775 13.25 10.3392 13.9332C11.5294 13.4625 12.5509 12.6455 13.2717 11.588L13.4105 11.3757V11.375ZM4.32047 6.5H1.80122L1.79747 6.51275C1.68111 7.00019 1.62246 7.49962 1.62272 8.00075C1.62272 8.79275 1.76747 9.551 2.03147 10.2507H4.41122C4.2301 9.00898 4.19912 7.74992 4.31897 6.50075L4.32047 6.5ZM10.5477 6.5H5.45222C5.32027 7.74899 5.35432 9.00995 5.55347 10.25H10.4465C10.6456 9.00994 10.6796 7.74899 10.5477 6.5ZM14.1987 6.5H11.6802C11.7267 6.98525 11.7515 7.48775 11.7515 8C11.7527 8.75301 11.698 9.50507 11.588 10.25H13.9677C14.2385 9.5308 14.3767 8.76849 14.3757 8C14.3757 7.48325 14.3142 6.98 14.1987 6.5ZM5.65997 2.0675L5.64272 2.0735C4.10779 2.68641 2.86957 3.86953 2.18747 5.375H4.47347C4.70897 4.061 5.11847 2.9165 5.66072 2.0675H5.65997ZM7.99997 1.62425L7.91297 1.628C6.96497 1.715 6.04697 3.2165 5.62247 5.375H10.379C9.95447 3.2225 9.04172 1.72325 8.09522 1.62875L7.99997 1.625V1.62425ZM10.34 2.06675L10.4202 2.198C10.922 3.032 11.303 4.127 11.5265 5.37575H13.8125C13.1614 3.93881 12.0025 2.793 10.5582 2.15825L10.34 2.0675V2.06675Z"
  }));
};
class AstraColorPickerControl extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(...arguments);
    this.onChangeComplete = this.onChangeComplete.bind(this);
    this.onOverlayChangeComplete = this.onOverlayChangeComplete.bind(this);
    this.onChangeOverlayGradientComplete = this.onChangeOverlayGradientComplete.bind(this);
    this.onPaletteChangeComplete = this.onPaletteChangeComplete.bind(this);
    this.onChangeGradientComplete = this.onChangeGradientComplete.bind(this);
    this.renderImageSettings = this.renderImageSettings.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.open = this.open.bind(this);
    this.onColorClearClick = this.onColorClearClick.bind(this);
    this.onColorResetClick = this.onColorResetClick.bind(this);
    this.state = {
      isVisible: false,
      refresh: false,
      color: this.props.color,
      modalCanClose: true,
      backgroundType: this.props.backgroundType,
      overlayType: this.props.overlayType,
      supportGradient: undefined === AstraGradientPicker ? false : true
    };
  }
  onResetRefresh() {
    if (this.state.refresh === true) {
      this.setState({
        refresh: false
      });
    } else {
      this.setState({
        refresh: true
      });
    }
  }
  componentDidMount() {
    // Add a click event listener to the document when the component mounts.
    document.addEventListener('click', this.handleClickOutside);
  }
  componentDidUpdate() {
    // If the color picker is already open, hide the second color picker.
    if (document.querySelectorAll('.open').length > 1) {
      const colorPickerPosition = 1;
      const otherColorPicker = document.querySelectorAll('.astra-popover-color')[colorPickerPosition];
      if (otherColorPicker) {
        otherColorPicker.style.display = 'none';
      }
    }
  }
  componentWillUnmount() {
    // Remove the event listener when the component unmounts.
    document.removeEventListener('click', this.handleClickOutside);
  }
  handleClickOutside = event => {
    // If clicked on elements outside the range then close the modal.
    const isOutsideClickRange = !event.target.closest('.astra-popover-color') && !event.target.closest('.astra-advanced-color-indicate') && !event.target.closest('.media-modal-content') && !event.target.closest('.dashicons-format-image') && !event.target.closest('.components-popover__content') && !event.target.closest('.ast-bg-img-remove');
    if (this.state.isVisible && isOutsideClickRange) {
      // If the click is outside the modal, close it.
      this.closePicker();
    }
  };
  closePicker = () => {
    if (this.state.isVisible === true) {
      this.setState({
        isVisible: false
      });
    }
  };
  render() {
    const {
      refresh,
      modalCanClose,
      isVisible,
      supportGradient,
      backgroundType
    } = this.state;
    const {
      allowGradient,
      allowImage
    } = this.props;
    var disablePalette = this.props.disablePalette;
    var enableDeleteIcon = this.props.enableDeleteIcon;
    const toggleVisible = () => {
      if (refresh === true) {
        this.setState({
          refresh: false
        });
      } else {
        this.setState({
          refresh: true
        });
      }
      this.setState({
        isVisible: true
      });
    };
    const toggleClose = () => {
      if (modalCanClose) {
        if (isVisible === true) {
          this.setState({
            isVisible: false
          });
        }
      }
    };
    const showingGradient = allowGradient && supportGradient ? true : false;
    let tabs = [{
      name: 'color',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'astra'),
      className: 'astra-color-background'
    }];
    if (showingGradient) {
      let gradientTab = {
        name: 'gradient',
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gradient', 'astra'),
        className: 'astra-image-background'
      };
      tabs.push(gradientTab);
    }
    if (allowImage) {
      let imageTab = {
        name: 'image',
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'astra'),
        className: 'astra-image-background'
      };
      tabs.push(imageTab);
    }
    let finalpaletteColors = [];
    const defaultGradient = 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)';
    let globalColorPalette = {
      'palette': ["#046bd2", "#045cb4", "#1e293b", "#334155", "#f9fafb", "#FFFFFF", "#e2e8f0", "#cbd5e1", "#94a3b8"]
    };
    if (astMetaParams.global_color_palette) {
      globalColorPalette = {
        'palette': astMetaParams.global_color_palette.palette
      };
    }
    Object.entries(globalColorPalette.palette).forEach(_ref => {
      let [index, color] = _ref;
      let palettePrefix = '--ast-global-color-';
      const paletteLables = ['Color  1', 'Color  2', 'Color  3', 'Color  4', 'Color  5', 'Color  6', 'Color  7', 'Color  8', 'Color  9'];
      let paletteColors = {};
      Object.assign(paletteColors, {
        name: paletteLables[index],
        color: 'var(' + palettePrefix + index + ')'
      });
      finalpaletteColors.push(paletteColors);
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: this.props.color && this.props.color.includes('var') ? 'color-button-wrap has-global-palette-color' : 'color-button-wrap'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: isVisible ? 'astra-color-icon-indicate open' : 'astra-color-icon-indicate',
      onClick: () => {
        isVisible ? toggleClose() : toggleVisible();
      }
    }, ('color' === backgroundType || 'gradient' === backgroundType) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
      className: "astra-advanced-color-indicate",
      colorValue: this.props.color
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "global-color"
    }, globalIconSVG())), 'image' === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
      className: "astra-advanced-color-indicate",
      colorValue: "#ffffff"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "format-image"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "astra-color-picker-wrap " + (isVisible ? 'picker-open' : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "astra-popover-color",
      onClose: toggleClose
    }, 1 < tabs.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: "astra-popover-tabs astra-background-tabs",
      activeClass: "active-tab",
      initialTabName: backgroundType,
      tabs: tabs
    }, tab => {
      let tabout;
      if (tab.name) {
        if ('gradient' === tab.name) {
          tabout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AstraGradientPicker, {
            className: `ast-gradient-color-picker ${astMetaParams.isWP_5_9 ? 'ast-gradient-ui' : ''}`,
            gradients: [],
            value: this.props.color && this.props.color.includes('gradient') ? this.props.color : defaultGradient,
            onChange: gradient => this.onChangeGradientComplete(gradient)
          }));
        }
        if ('image' === tab.name) {
          tabout = this.renderImageSettings();
        } else if ('color' === tab.name) {
          tabout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !disablePalette && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
            colors: finalpaletteColors,
            value: this.props.color,
            clearable: false,
            disableCustomColors: true,
            className: "ast-color-palette",
            onChange: color => this.onPaletteChangeComplete(color)
          })), refresh && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: maybeGetColorForVariable(this.props.color, globalColorPalette),
            onChangeComplete: color => this.onChangeComplete(color)
          })), !refresh && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: maybeGetColorForVariable(this.props.color, globalColorPalette),
            onChangeComplete: color => this.onChangeComplete(color)
          })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
            type: "button",
            onClick: () => {
              this.onColorClearClick();
            },
            className: "ast-clear-btn-inside-picker components-button common components-circular-option-picker__clear is-secondary is-small"
          }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear', 'astra')));
        }
      }
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, tabout);
    }), 1 === tabs.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !disablePalette && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
      colors: finalpaletteColors,
      value: this.props.color,
      clearable: false,
      disableCustomColors: true,
      className: "ast-color-palette",
      onChange: color => this.onPaletteChangeComplete(color)
    })), refresh && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: maybeGetColorForVariable(this.props.color, globalColorPalette),
      onChangeComplete: color => this.onChangeComplete(color)
    })), !refresh && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: maybeGetColorForVariable(this.props.color, globalColorPalette),
      onChangeComplete: color => this.onChangeComplete(color)
    })), !disablePalette && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      onClick: () => {
        this.onColorClearClick();
      },
      className: "ast-clear-btn-inside-picker components-button components-circular-option-picker__clear is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear', 'astra'))), disablePalette && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      onClick: () => {
        this.onColorResetClick();
      },
      className: "ast-reset-btn-inside-picker components-button common components-circular-option-picker__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'astra')))))));
  }
  onColorClearClick() {
    if (this.state.refresh === true) {
      this.setState({
        refresh: false
      });
    } else {
      this.setState({
        refresh: true
      });
    }
    this.props.onChangeComplete('', 'color');
  }
  onColorResetClick() {
    if (this.state.refresh === true) {
      this.setState({
        refresh: false
      });
    } else {
      this.setState({
        refresh: true
      });
    }
    this.props.onColorResetClick('', 'color');
  }
  onChangeGradientComplete(gradient) {
    this.setState({
      backgroundType: 'gradient'
    });
    this.props.onChangeComplete(gradient, 'gradient');
  }
  onChangeComplete(color) {
    let newColor;
    if (color.rgb && color.rgb.a && 1 !== color.rgb.a) {
      newColor = 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')';
    } else {
      newColor = color.hex;
    }
    this.setState({
      backgroundType: 'color'
    });
    this.props.onChangeComplete(color, 'color');
  }
  onOverlayChangeComplete(color) {
    let newColor;
    if (color.rgb && color.rgb.a && 1 !== color.rgb.a) {
      newColor = 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')';
    } else {
      newColor = color.hex;
    }
    this.onChangeImageOptions('overlayType', 'overlay-type', 'classic');
    this.onChangeImageOptions('overlayColor', 'overlay-color', newColor);
  }
  onChangeOverlayGradientComplete(gradient) {
    this.onChangeImageOptions('overlayType', 'overlay-type', 'gradient');
    this.onChangeImageOptions('overlayGradient', 'overlay-gradient', gradient);
  }
  onOverlayTabSelect(tabName) {
    this.onChangeImageOptions('overlayType', 'overlay-type', tabName);
  }
  onPaletteChangeComplete(color) {
    this.setState({
      color: color
    });
    if (this.state.refresh === true) {
      this.setState({
        refresh: false
      });
    } else {
      this.setState({
        refresh: true
      });
    }
    this.props.onChangeComplete(color, 'color');
  }
  onSelectImage(media) {
    this.setState({
      modalCanClose: true
    });
    this.setState({
      backgroundType: 'image'
    });
    this.props.onSelectImage(media, 'image');
  }
  onRemoveImage() {
    this.setState({
      modalCanClose: true
    });
    this.props.onSelectImage('');
  }
  open(open) {
    this.setState({
      modalCanClose: false
    });
    open();
  }
  onChangeImageOptions(tempKey, mainkey, value) {
    this.setState({
      backgroundType: 'image'
    });
    this.props.onChangeImageOptions(mainkey, value, 'image');
  }
  toggleMoreSettings() {
    let parent = event.target.parentElement.parentElement;
    let trigger = parent.querySelector('.more-settings');
    let wrapper = parent.querySelector('.media-position-setting');
    let dataDirection = trigger.dataset.direction;
    let dataId = trigger.dataset.id;
    if ('down' === dataDirection) {
      trigger.setAttribute('data-direction', 'up');
      parent.querySelector('.message').innerHTML = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Less Settings");
      parent.querySelector('.icon').innerHTML = '↑';
    } else {
      trigger.setAttribute('data-direction', 'down');
      parent.querySelector('.message').innerHTML = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("More Settings");
      parent.querySelector('.icon').innerHTML = '↓';
    }
    if (wrapper.classList.contains('hide-settings')) {
      wrapper.classList.remove('hide-settings');
    } else {
      wrapper.classList.add('hide-settings');
    }
  }
  renderImageSettings() {
    let overlayTabs = [{
      name: 'none',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'astra'),
      className: 'astra-none-overlay-bg'
    }, {
      name: 'classic',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Classic', 'astra'),
      className: 'astra-classic-overlay-bg'
    }, {
      name: 'gradient',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gradient', 'astra'),
      className: 'astra-gradient-overlay-bg'
    }];
    let finalpaletteColors = [];
    const defaultGradient = 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)';
    let globalColorPalette = {
      'palette': ["#046bd2", "#045cb4", "#1e293b", "#334155", "#f9fafb", "#FFFFFF", "#e2e8f0", "#cbd5e1", "#94a3b8"]
    };
    if (astMetaParams.global_color_palette) {
      globalColorPalette = {
        'palette': astMetaParams.global_color_palette.palette
      };
    }
    Object.entries(globalColorPalette.palette).forEach(_ref2 => {
      let [index, color] = _ref2;
      let palettePrefix = '--ast-global-color-';
      const paletteLables = ['Color  1', 'Color  2', 'Color  3', 'Color  4', 'Color  5', 'Color  6', 'Color  7', 'Color  8', 'Color  9'];
      let paletteColors = {};
      Object.assign(paletteColors, {
        name: paletteLables[index],
        color: 'var(' + palettePrefix + index + ')'
      });
      finalpaletteColors.push(paletteColors);
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (this.props.media.url || this.props.backgroundImage) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: this.props.media.url ? this.props.media.url : this.props.backgroundImage
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Background Image", 'astra'),
      onSelect: media => this.onSelectImage(media),
      allowedTypes: ["image"],
      value: this.props.media && this.props.media ? this.props.media : '',
      render: _ref3 => {
        let {
          open
        } = _ref3;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "upload-button button-add-media",
          isDefault: true,
          onClick: () => this.open(open)
        }, !this.props.media.url && !this.props.backgroundImage ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Background Image", 'astra') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Replace image", 'astra'));
      }
    }), (this.props.media.url || this.props.backgroundImage) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "ast-bg-img-remove",
      onClick: this.onRemoveImage,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Image", 'astra')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "more-settings",
      onClick: this.toggleMoreSettings,
      "data-direction": "down",
      "data-id": "desktop"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "message"
    }, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("More Settings"), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "icon"
    }, " \u2193 ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "media-position-setting hide-settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Position"),
      value: this.props.backgroundPosition,
      onChange: value => this.onChangeImageOptions('backgroundPosition', 'background-position', value),
      options: [{
        value: "left top",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left Top", 'astra')
      }, {
        value: "left center",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left Center", 'astra')
      }, {
        value: "left bottom",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left Bottom", 'astra')
      }, {
        value: "right top",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right Top", 'astra')
      }, {
        value: "right center",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right Center", 'astra')
      }, {
        value: "right bottom",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right Bottom", 'astra')
      }, {
        value: "center top",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Center Top", 'astra')
      }, {
        value: "center center",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Center Center", 'astra')
      }, {
        value: "center bottom",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Center Bottom", 'astra')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Attachment", 'astra'),
      value: this.props.backgroundAttachment,
      onChange: value => this.onChangeImageOptions('backgroundAttachment', 'background-attachment', value),
      options: [{
        value: "fixed",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fixed", 'astra')
      }, {
        value: "scroll",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Scroll", 'astra')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Repeat", 'astra'),
      value: this.props.backgroundRepeat,
      onChange: value => this.onChangeImageOptions('backgroundRepeat', 'background-repeat', value),
      options: [{
        value: "no-repeat",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Repeat", 'astra')
      }, {
        value: "repeat",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Repeat All", 'astra')
      }, {
        value: "repeat-x",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Repeat Horizontally", 'astra')
      }, {
        value: "repeat-y",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Repeat Vertically", 'astra')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Size", 'astra'),
      value: this.props.backgroundSize,
      onChange: value => this.onChangeImageOptions('backgroundSize', 'background-size', value),
      options: [{
        value: "auto",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto", 'astra')
      }, {
        value: "cover",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cover", 'astra')
      }, {
        value: "contain",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Contain", 'astra')
      }]
    }), 1 < overlayTabs.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Overlay", 'astra'), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: "astra-popover-tabs astra-background-tabs",
      activeClass: "active-tab",
      initialTabName: this.props.overlayType,
      onSelect: tabName => this.onOverlayTabSelect(tabName),
      tabs: overlayTabs
    }, tab => {
      let tabout;
      if (tab.name) {
        if ('gradient' === tab.name) {
          tabout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AstraGradientPicker, {
            className: `ast-gradient-color-picker ${astMetaParams.isWP_5_9 ? 'ast-gradient-ui' : ''}`,
            gradients: [],
            value: this.props.overlayGradient || defaultGradient,
            onChange: gradient => this.onChangeOverlayGradientComplete(gradient)
          }));
        } else if ('classic' === tab.name) {
          tabout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: maybeGetColorForVariable(this.props.overlayColor, globalColorPalette),
            onChangeComplete: color => this.onOverlayChangeComplete(color)
          }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
            type: "button",
            onClick: () => this.onChangeImageOptions('overlayColor', 'overlay-color', ''),
            className: "ast-clear-btn-inside-picker components-button common components-circular-option-picker__clear is-secondary is-small"
          }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear', 'astra')));
        }
      }
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, tabout);
    })))));
  }
}
AstraColorPickerControl.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  usePalette: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  palette: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  presetColors: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  onChangeComplete: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onPaletteChangeComplete: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onPaletteChangeComplete: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onChangeOverlayGradientComplete: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  customizer: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (AstraColorPickerControl);

/***/ }),

/***/ "./src/responsive-background.js":
/*!**************************************!*\
  !*** ./src/responsive-background.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _astra_color_picker_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./astra-color-picker-control */ "./src/astra-color-picker-control.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _assets_svg_svgs_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/svg/svgs.json */ "../../../assets/svg/svgs.json");








const ResponsiveBackground = props => {
  const {
    metavalue
  } = props;
  let defaultPropsValue = props.control.default;
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    value: metavalue
  });
  const updateValues = obj => {
    setState(prevState => ({
      ...prevState,
      value: obj
    }));
    props.control.setMetaFieldValue(obj, props.control.controlName);
  };
  const updateBackgroundType = device => {
    let value = props.metavalue;
    let obj = {
      ...value
    };
    if (!state.value[device]['background-type']) {
      let deviceObj = {
        ...obj[device]
      };
      if (state.value[device]['background-color']) {
        deviceObj['background-type'] = 'color';
        obj[device] = deviceObj;
        updateValues(obj);
        if (state.value[device]['background-color'].includes('gradient')) {
          deviceObj['background-type'] = 'gradient';
          obj[device] = deviceObj;
          updateValues(obj);
        }
      }
      if (state.value[device]['background-image']) {
        deviceObj['background-type'] = 'image';
        obj[device] = deviceObj;
        updateValues(obj);
      }
    }
  };
  const renderReset = () => {
    let reserBtnDisabled = true;
    let devices = ['desktop', 'mobile', 'tablet'];
    for (let device of devices) {
      if (state.value[device]['background-color'] !== defaultPropsValue[device]['background-image'] || state.value[device]['background-image'] !== defaultPropsValue[device]['background-color'] || state.value[device]['background-media'] !== defaultPropsValue[device]['background-media']) {
        reserBtnDisabled = false;
      }
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ast-color-btn-reset-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "ast-reset-btn components-button components-circular-option-picker__clear is-secondary is-small",
      disabled: reserBtnDisabled,
      onClick: e => {
        e.preventDefault();
        let value = JSON.parse(JSON.stringify(defaultPropsValue));
        if (undefined !== value && '' !== value) {
          for (let device in value) {
            if (undefined === value[device]['background-color'] || '' === value[device]['background-color']) {
              value[device]['background-color'] = '';
            }
            if (undefined === value[device]['background-image'] || '' === value[device]['background-image']) {
              value[device]['background-image'] = '';
            }
            if (undefined === value[device]['background-media'] || '' === value[device]['background-media']) {
              value[device]['background-media'] = '';
            }
          }
        }
        updateValues(value);
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
      icon: "image-rotate"
    })));
  };
  const onSelectImage = (media, key, backgroundType) => {
    let obj = {
      ...state.value
    };
    let deviceObj = {
      ...obj[key]
    };
    deviceObj['background-image'] = media.url;
    deviceObj['background-media'] = toString(media.id);
    deviceObj['background-type'] = backgroundType;
    obj[key] = deviceObj;
    updateValues(obj);
  };
  const onChangeImageOptions = (mainKey, value, device, backgroundType) => {
    let obj = {
      ...state.value
    };
    let deviceObj = {
      ...obj[device]
    };
    deviceObj[mainKey] = value;
    deviceObj['background-type'] = backgroundType;
    obj[device] = deviceObj;
    updateValues(obj);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    let devices = ['desktop', 'mobile', 'tablet'];
    for (let device of devices) {
      updateBackgroundType(device);
    }
  }, []);
  const renderSettings = key => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_astra_color_picker_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: undefined !== state.value[key]['background-color'] && state.value[key]['background-color'] ? state.value[key]['background-color'] : '',
      onChangeComplete: (color, backgroundType) => handleChangeComplete(color, key, backgroundType),
      media: undefined !== state.value[key]['background-media'] && state.value[key]['background-media'] ? state.value[key]['background-media'] : '',
      backgroundImage: undefined !== state.value[key]['background-image'] && state.value[key]['background-image'] ? state.value[key]['background-image'] : '',
      backgroundAttachment: undefined !== state.value[key]['background-attachment'] && state.value[key]['background-attachment'] ? state.value[key]['background-attachment'] : '',
      backgroundPosition: undefined !== state.value[key]['background-position'] && state.value[key]['background-position'] ? state.value[key]['background-position'] : '',
      backgroundRepeat: undefined !== state.value[key]['background-repeat'] && state.value[key]['background-repeat'] ? state.value[key]['background-repeat'] : '',
      backgroundSize: undefined !== state.value[key]['background-size'] && state.value[key]['background-size'] ? state.value[key]['background-size'] : '',
      onSelectImage: (media, backgroundType) => onSelectImage(media, key, backgroundType),
      onChangeImageOptions: (mainKey, value, backgroundType) => onChangeImageOptions(mainKey, value, key, backgroundType),
      backgroundType: undefined !== state.value[key]['background-type'] && state.value[key]['background-type'] ? state.value[key]['background-type'] : 'color',
      overlayType: undefined !== state.value[key]['overlay-type'] && state.value[key]['overlay-type'] ? state.value[key]['overlay-type'] : 'none',
      overlayColor: undefined !== state.value[key]['overlay-color'] && state.value[key]['overlay-color'] ? state.value[key]['overlay-color'] : '',
      overlayGradient: undefined !== state.value[key]['overlay-gradient'] && state.value[key]['overlay-gradient'] ? state.value[key]['overlay-gradient'] : '',
      allowGradient: true,
      allowImage: true
    }));
  };
  const handleChangeComplete = (color, key, backgroundType) => {
    let value = '';
    if (color) {
      if (typeof color === 'string' || color instanceof String) {
        value = color;
      } else if (undefined !== color.rgb && undefined !== color.rgb.a && 1 !== color.rgb.a) {
        value = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
      } else {
        value = color.hex;
      }
    }
    let obj = {
      ...state.value
    };
    let deviceObj = {
      ...obj[key]
    };
    deviceObj['background-color'] = value;
    deviceObj['background-type'] = backgroundType;
    obj[key] = deviceObj;
    updateValues(obj);
  };
  const {
    label,
    description
  } = props.control;
  let labelHtml = null;
  let descriptionHtml = null;
  let responsiveHtml = null;
  let inputHtml = null;
  const responsiveDesktop = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(_assets_svg_svgs_json__WEBPACK_IMPORTED_MODULE_6__["desktop-responsive"]);
  const responsiveTablet = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(_assets_svg_svgs_json__WEBPACK_IMPORTED_MODULE_6__["tablet-responsive"]);
  const responsiveMobile = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(_assets_svg_svgs_json__WEBPACK_IMPORTED_MODULE_6__["mobile-responsive"]);
  if (label && '' !== label && undefined !== label) {
    labelHtml = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, label);
  } else {
    labelHtml = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background', 'astra'));
  }
  if (description) {
    descriptionHtml = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "description customize-control-description"
    }, description);
  }
  const skipResponsiveTriggers = undefined !== props.control.ignore_responsive_btns && props.control.ignore_responsive_btns ? true : false;
  const [activeDevice, setActiveDevice] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('desktop'); // Initialize with 'desktop' as active device

  const handleDeviceChange = device => {
    if ('desktop' === device) {
      setActiveDevice('tablet');
    } else if ('tablet' === device) {
      setActiveDevice('mobile');
    } else {
      setActiveDevice('desktop');
    }
  };
  responsiveHtml = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "ast-responsive-btns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: `desktop ${activeDevice === 'desktop' ? 'active' : ''}`,
    onClick: () => handleDeviceChange('desktop')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "preview-desktop",
    "data-device": "desktop"
  }, responsiveDesktop)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: `tablet ${activeDevice === 'tablet' ? 'active' : ''}`,
    onClick: () => handleDeviceChange('tablet')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "preview-tablet",
    "data-device": "tablet"
  }, responsiveTablet)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: `mobile ${activeDevice === 'mobile' ? 'active' : ''}`,
    onClick: () => handleDeviceChange('mobile')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "preview-mobile",
    "data-device": "mobile"
  }, responsiveMobile)));
  inputHtml = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "background-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `background-container desktop ${activeDevice === 'desktop' ? 'active' : ''}`
  }, renderSettings('desktop')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `background-container tablet ${activeDevice === 'tablet' ? 'active' : ''}`
  }, renderSettings('tablet')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `background-container mobile ${activeDevice === 'mobile' ? 'active' : ''}`
  }, renderSettings('mobile')));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-bg-control-left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, labelHtml, descriptionHtml), !skipResponsiveTriggers && responsiveHtml), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-bg-control-right"
  }, renderReset(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "customize-control-content"
  }, inputHtml)));
};
ResponsiveBackground.propTypes = {
  control: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (React.memo(ResponsiveBackground));

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ast_checkbox_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ast-checkbox.js */ "./src/ast-checkbox.js");
/* harmony import */ var _ast_radio_image_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ast-radio-image.js */ "./src/ast-radio-image.js");
/* harmony import */ var _ast_selector_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ast-selector.js */ "./src/ast-selector.js");
/* harmony import */ var _assets_svg_svgs_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/svg/svgs.json */ "../../../assets/svg/svgs.json");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _responsive_background_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./responsive-background.js */ "./src/responsive-background.js");

/**
 * Meta Options build.
 */











const {
  __
} = wp.i18n;
const MetaSettings = props => {
  const modalIcon = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_10__["default"])(_assets_svg_svgs_json__WEBPACK_IMPORTED_MODULE_8__["meta-popup-icon"]);
  const astraLogo = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_10__["default"])(_assets_svg_svgs_json__WEBPACK_IMPORTED_MODULE_8__["astra-brand-icon"]);
  const brandIcon = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_10__["default"])(_assets_svg_svgs_json__WEBPACK_IMPORTED_MODULE_8__["astra-brand-icon"]);
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [showHelpText, setShowHelpText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const is_hide_content_layout_sidebar = astMetaParams.is_hide_content_layout_sidebar;

  // Adjust spacing & borders for table.
  const topTableSpacing = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "ast-extra-spacing"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-border"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null));
  const bottomTableSpacing = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "ast-extra-spacing ast-extra-spacing-bottom"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-border"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null));
  const icon = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_10__["default"])(_assets_svg_svgs_json__WEBPACK_IMPORTED_MODULE_8__["astra-meta-settings"]);
  const sidebarOptions = Object.entries(astMetaParams.sidebar_options).map(_ref => {
    let [key, name] = _ref;
    return {
      label: name,
      value: key
    };
  });
  const contentLayoutOptions = Object.entries(astMetaParams.content_layout).map(_ref2 => {
    let [key, name] = _ref2;
    return {
      label: name,
      value: key
    };
  });
  const contentStyleOptions = Object.entries(astMetaParams.content_style).map(_ref3 => {
    let [key, name] = _ref3;
    return {
      label: name,
      value: key
    };
  });
  const sidebarStyleOptions = Object.entries(astMetaParams.content_style).map(_ref4 => {
    let [key, name] = _ref4;
    return {
      label: name,
      value: key
    };
  });

  // Taransparent and Sticky Header Options.
  const headerOptions = Object.entries(astMetaParams.header_options).map(_ref5 => {
    let [key, name] = _ref5;
    return {
      label: name,
      value: key
    };
  });

  // Page header optins.
  const pageHeaderOptions = Object.entries(astMetaParams.page_header_options).map(_ref6 => {
    let [key, name] = _ref6;
    return {
      label: name,
      value: key
    };
  });

  // Page header optins.
  const pageBgToggleOptions = Object.entries(astMetaParams.page_bg_toggle_options).map(_ref7 => {
    let [key, name] = _ref7;
    return {
      label: name,
      value: key
    };
  });

  // Checkbox control
  const disableSections = Object.entries(astMetaParams.disable_sections).map(_ref8 => {
    let [key, value] = _ref8;
    let sectionValue = 'disabled' === props.meta[value['key']] ? true : false;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ast_checkbox_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: value['label'],
      value: sectionValue,
      key: key,
      name: value['key'],
      onChange: val => {
        props.setMetaFieldValue(val, value['key']);
      }
    });
  });
  const headers_meta_options = Object.entries(astMetaParams.headers_meta_options).map(_ref9 => {
    let [key, value] = _ref9;
    let sectionValue = 'disabled' === props.meta[value['key']] ? true : false;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ast_checkbox_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: value['label'],
      value: sectionValue,
      key: key,
      name: value['key'],
      onChange: val => {
        props.setMetaFieldValue(val, value['key']);
      }
    });
  });

  // Checkbox control
  const stickyHeadderOptions = Object.entries(astMetaParams.sticky_header_options).map(_ref10 => {
    let [key, value] = _ref10;
    let stickyValue = 'disabled' === props.meta[value['key']] ? true : false;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ast_checkbox_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: value['label'],
      value: stickyValue,
      key: key,
      name: value['key'],
      onChange: val => {
        props.setMetaFieldValue(val, value['key']);
      }
    });
  });

  // Migrate meta layout, content style and sidebar options if old user.
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (astMetaParams.v4_1_6_migration && undefined !== props.meta['astra-migrate-meta-layouts'] && 'set' !== props.meta['astra-migrate-meta-layouts']) {
      props.setMetaFieldValue('set', 'astra-migrate-meta-layouts');
      switch (props.meta['site-content-layout']) {
        case 'plain-container':
          props.setMetaFieldValue('normal-width-container', 'ast-site-content-layout');
          props.setMetaFieldValue('unboxed', 'site-content-style');
          props.setMetaFieldValue('unboxed', 'site-sidebar-style');
          break;
        case 'boxed-container':
          props.setMetaFieldValue('normal-width-container', 'ast-site-content-layout');
          props.setMetaFieldValue('boxed', 'site-content-style');
          props.setMetaFieldValue('boxed', 'site-sidebar-style');
          break;
        case 'content-boxed-container':
          props.setMetaFieldValue('normal-width-container', 'ast-site-content-layout');
          props.setMetaFieldValue('boxed', 'site-content-style');
          props.setMetaFieldValue('unboxed', 'site-sidebar-style');
          break;
        case 'page-builder':
          props.setMetaFieldValue('full-width-container', 'ast-site-content-layout');
          props.setMetaFieldValue('unboxed', 'site-content-style');
          props.setMetaFieldValue('unboxed', 'site-sidebar-style');
          break;
        case 'narrow-container':
          props.setMetaFieldValue('narrow-width-container', 'ast-site-content-layout');
          props.setMetaFieldValue('unboxed', 'site-content-style');
          props.setMetaFieldValue('unboxed', 'site-sidebar-style');
          break;
        default:
          props.setMetaFieldValue('default', 'ast-site-content-layout');
          props.setMetaFieldValue('default', 'site-content-style');
          props.setMetaFieldValue('default', 'site-sidebar-style');
          break;
      }
    }
  }, [props.meta['astra-migrate-meta-layouts']]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebarMoreMenuItem, {
    target: "theme-meta-panel",
    icon: icon
  }, astMetaParams.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
    isPinnable: true,
    icon: icon,
    name: "theme-meta-panel",
    title: astMetaParams.title
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-sidebar-container components-panel__body is-opened",
    id: "astra_settings_meta_box"
  }, !is_hide_content_layout_sidebar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.PanelBody, {
    title: __('Container', 'astra'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    id: "ast-label-container-layout",
    className: "ast-sub-section-title"
  }, __('Container Layout', 'astra')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-sidebar-layout-meta-wrap components-base-control__field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ast_radio_image_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    metavalue: undefined !== props.meta['ast-site-content-layout'] && '' !== props.meta['ast-site-content-layout'] ? props.meta['ast-site-content-layout'] : 'default',
    choices: contentLayoutOptions,
    id: 'ast-site-content-layout',
    onChange: val => {
      if (val === 'narrow-container') props.setMetaFieldValue('no-sidebar', 'site-sidebar-layout');
      props.setMetaFieldValue(val, 'ast-site-content-layout');
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    id: "ast-label-container-style",
    className: "ast-sub-section-title"
  }, __('Container Style', 'astra')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-sidebar-layout-meta-wrap components-base-control__field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ast_selector_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    metavalue: undefined !== props.meta['site-content-style'] && '' !== props.meta['site-content-style'] ? props.meta['site-content-style'] : 'default',
    choices: contentStyleOptions,
    id: 'site-content-style',
    onChange: val => {
      props.setMetaFieldValue(val, 'site-content-style');
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "description"
  }, __('Container style will apply only when layout is set to either normal or narrow.', 'astra'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.PanelBody, {
    title: __('Sidebar', 'astra'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    id: "ast-label-sidebar-layout",
    className: "ast-sub-section-title"
  }, __('Sidebar Layout', 'astra')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-sidebar-layout-meta-wrap components-base-control__field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ast_radio_image_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    metavalue: undefined !== props.meta['site-sidebar-layout'] && '' !== props.meta['site-sidebar-layout'] ? props.meta['site-sidebar-layout'] : 'default',
    choices: sidebarOptions,
    id: 'site-sidebar-layout',
    onChange: val => {
      props.setMetaFieldValue(val, 'site-sidebar-layout');
    }
  })), !astMetaParams.v4_1_6_migration && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "description"
  }, __('Sidebar will only apply when container layout is set to normal.', 'astra')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    id: "ast-label-sidebar-style",
    className: "ast-sub-section-title"
  }, __('Sidebar Style', 'astra')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-sidebar-layout-meta-wrap components-base-control__field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ast_selector_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    metavalue: undefined !== props.meta['site-sidebar-style'] && '' !== props.meta['site-sidebar-style'] ? props.meta['site-sidebar-style'] : 'default',
    choices: sidebarStyleOptions,
    id: 'site-sidebar-style',
    onChange: val => {
      props.setMetaFieldValue(val, 'site-sidebar-style');
    }
  }))), !is_hide_content_layout_sidebar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.PanelBody, {
    title: __('Disable Elements', 'astra'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-sidebar-layout-meta-wrap components-base-control__field"
  }, disableSections)), is_hide_content_layout_sidebar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.PanelBody, {
    title: __('Disable Elements', 'astra'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-sidebar-layout-meta-wrap components-base-control__field"
  }, disableSections)), !is_hide_content_layout_sidebar && undefined !== props.meta['ast-global-header-display'] && 'disabled' !== props.meta['ast-global-header-display'] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-custom-layout-panel components-panel__body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "components-panel__body-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "components-button components-panel__body-toggle",
    onClick: openModal
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ast-title-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-title"
  }, " ", __('Advanced Settings', 'astra'))), modalIcon))), isOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Modal, {
    title: __('Advanced Settings', 'astra'),
    className: "ast-header-settings-modal",
    shouldCloseOnClickOutside: false,
    onRequestClose: closeModal,
    icon: brandIcon
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-meta-settings-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "ast-meta-settings-hook-table widefat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, topTableSpacing, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "ast-advanced-hook-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-advanced-hook-row-heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", __('Header Rows', 'astra'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-advanced-hook-row-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "components-base-control__field"
  }, headers_meta_options))), bottomTableSpacing, topTableSpacing, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "ast-advanced-hook-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-advanced-hook-row-heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", astMetaParams.transparent_header_title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-advanced-hook-row-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control__field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ast_selector_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    metavalue: undefined !== props.meta['theme-transparent-header-meta'] && '' !== props.meta['theme-transparent-header-meta'] ? props.meta['theme-transparent-header-meta'] : 'default',
    choices: headerOptions,
    id: 'theme-transparent-header-meta',
    onChange: val => {
      props.setMetaFieldValue(val, 'theme-transparent-header-meta');
    }
  }))))), 'disabled' !== props.meta['ast-main-header-display'] && astMetaParams.is_addon_activated && astMetaParams.sticky_addon_enabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, bottomTableSpacing, topTableSpacing, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "ast-advanced-hook-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-advanced-hook-row-heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", astMetaParams.sticky_header_title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-advanced-hook-row-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ast_selector_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    metavalue: undefined !== props.meta['stick-header-meta'] && '' !== props.meta['stick-header-meta'] ? props.meta['stick-header-meta'] : 'default',
    choices: headerOptions,
    id: 'stick-header-meta',
    onChange: val => {
      props.setMetaFieldValue(val, 'stick-header-meta');
    }
  }))))), astMetaParams.is_addon_activated && astMetaParams.sticky_addon_enabled && 'enabled' == props.meta['stick-header-meta'] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, topTableSpacing, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "ast-advanced-hook-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-advanced-hook-row-heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", astMetaParams.sticky_header_title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-advanced-hook-row-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-sticky-header-options components-base-control__field"
  }, stickyHeadderOptions))))), astMetaParams.is_addon_activated && astMetaParams.color_addon_enabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, bottomTableSpacing, topTableSpacing, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "ast-advanced-hook-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-advanced-hook-row-heading ast-show-help-text-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", astMetaParams.ast_page_bg_title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "ast-control-tooltip dashicons dashicons-editor-help"
  }), undefined !== props.meta['ast-page-background-enabled'] && 'enabled' === props.meta['ast-page-background-enabled'] ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ast-dashicons-custom-tooltip"
  }, " ", astMetaParams.surface_color_help_text) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ast-dashicons-custom-tooltip",
    style: {
      bottom: '15px',
      top: 'unset'
    }
  }, " ", astMetaParams.surface_color_help_text))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "ast-advanced-hook-row-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control__field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ast_selector_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    metavalue: undefined !== props.meta['ast-page-background-enabled'] && '' !== props.meta['ast-page-background-enabled'] ? props.meta['ast-page-background-enabled'] : 'default',
    choices: pageBgToggleOptions,
    id: 'ast-page-background-enabled',
    onChange: val => {
      props.setMetaFieldValue(val, 'ast-page-background-enabled');
    }
  })), undefined !== props.meta['ast-page-background-enabled'] && 'enabled' === props.meta['ast-page-background-enabled'] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "customize-control-astra-settings-site-layout-outside-bg-obj-responsive",
    className: "customize-control customize-control-ast-responsive-background"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_responsive_background_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    metavalue: undefined !== props.meta['ast-page-background-meta'] && '' !== props.meta['ast-page-background-meta'] ? props.meta['ast-page-background-meta'] : 'default',
    control: {
      'controlName': 'ast-page-background-meta',
      'default': astMetaParams.site_page_bg_meta_default,
      'ignore_responsive_btns': false,
      'setMetaFieldValue': props.setMetaFieldValue,
      'label': astMetaParams.page_bg_dynamic_title,
      'description': ''
    },
    id: 'ast-page-background-meta'
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "customize-control-astra-settings-content-bg-obj-responsive",
    className: "customize-control customize-control-ast-responsive-background"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_responsive_background_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    metavalue: undefined !== props.meta['ast-content-background-meta'] && '' !== props.meta['ast-content-background-meta'] ? props.meta['ast-content-background-meta'] : 'default',
    control: {
      'controlName': 'ast-content-background-meta',
      'default': astMetaParams.content_page_bg_meta_default,
      'ignore_responsive_btns': false,
      'setMetaFieldValue': props.setMetaFieldValue,
      'label': 'Content Background',
      'description': ''
    },
    id: 'ast-content-background-meta'
  })))))), topTableSpacing)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-cl-footer-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-button-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ast-cl-popup-notice"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons dashicons-warning"
  }), __('Make sure to update your post for changes to take effect.', 'astra'), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button-default",
    onClick: closeModal
  }, " ", __('Return To Post', 'astra'))))), astMetaParams.is_bb_themer_layout && astMetaParams.is_addon_activated && astMetaParams.page_header_availability && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.PanelBody, {
    title: astMetaParams.page_header_title,
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-sidebar-layout-meta-wrap components-base-control__field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.SelectControl, {
    value: undefined !== props.meta['adv-header-id-meta'] && '' !== props.meta['adv-header-id-meta'] ? props.meta['adv-header-id-meta'] : '',
    options: pageHeaderOptions.reverse(),
    onChange: val => {
      props.setMetaFieldValue(val, 'adv-header-id-meta');
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "description"
  }, __('If you would like to apply custom header for this page, select the one from the list above. Page headers can be created and customized from ', 'astra'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: astMetaParams.page_header_edit_link,
    target: "__blank"
  }, __('here.', 'astra')))), !astMetaParams.is_addon_activated && astMetaParams.show_upgrade_notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ast-pro-upgrade-cta-wrapper"
  }, astraLogo, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "ast-upgrade-description"
  }, " ", __('Unlock your full design potential and build a website to be proud of with Astra Pro.', 'astra'), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: astMetaParams.upgrade_pro_link,
    className: "ast-pro-upgrade-link",
    target: "_blank"
  }, " ", __('Upgrade Now', 'astra'), " ")))));
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => {
  const postMeta = select('core/editor').getEditedPostAttribute('meta');
  const oldPostMeta = select('core/editor').getCurrentPostAttribute('meta');
  return {
    meta: {
      ...oldPostMeta,
      ...postMeta
    },
    oldMeta: oldPostMeta
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withDispatch)(dispatch => ({
  setMetaFieldValue: (value, field) => dispatch('core/editor').editPost({
    meta: {
      [field]: value
    }
  })
})))(MetaSettings));

/***/ }),

/***/ "./node_modules/domelementtype/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/domelementtype/lib/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = ElementType.Root;
/** Type for Text */
exports.Text = ElementType.Text;
/** Type for <? ... ?> */
exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
exports.Comment = ElementType.Comment;
/** Type for <script> tags */
exports.Script = ElementType.Script;
/** Type for <style> tags */
exports.Style = ElementType.Style;
/** Type for Any tag */
exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
exports.Doctype = ElementType.Doctype;


/***/ }),

/***/ "./node_modules/domhandler/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/domhandler/lib/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomHandler = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var node_1 = __webpack_require__(/*! ./node */ "./node_modules/domhandler/lib/node.js");
__exportStar(__webpack_require__(/*! ./node */ "./node_modules/domhandler/lib/node.js"), exports);
var reWhitespace = /\s+/g;
// Default options
var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
var DomHandler = /** @class */ (function () {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    function DomHandler(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new node_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler.prototype.onparserinit = function (parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function () {
        this.dom = [];
        this.root = new node_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function () {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function (error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function () {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    };
    DomHandler.prototype.onopentag = function (name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler.prototype.ontext = function (data) {
        var normalizeWhitespace = this.options.normalizeWhitespace;
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) {
                lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            }
            else {
                lastNode.data += data;
            }
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            if (normalizeWhitespace) {
                data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function (data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler.prototype.oncommentend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function () {
        var text = new node_1.Text("");
        var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler.prototype.oncdataend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function (name, data) {
        var node = new node_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function (error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function (node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler;
}());
exports.DomHandler = DomHandler;
exports["default"] = DomHandler;


/***/ }),

/***/ "./node_modules/domhandler/lib/node.js":
/*!*********************************************!*\
  !*** ./node_modules/domhandler/lib/node.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var nodeTypes = new Map([
    [domelementtype_1.ElementType.Tag, 1],
    [domelementtype_1.ElementType.Script, 1],
    [domelementtype_1.ElementType.Style, 1],
    [domelementtype_1.ElementType.Directive, 1],
    [domelementtype_1.ElementType.Text, 3],
    [domelementtype_1.ElementType.CDATA, 4],
    [domelementtype_1.ElementType.Comment, 8],
    [domelementtype_1.ElementType.Root, 9],
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    /**
     *
     * @param type The type of the node.
     */
    function Node(type) {
        this.type = type;
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "nodeType", {
        // Read-only aliases
        /**
         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
         * node {@link type}.
         */
        get: function () {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
exports.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */
    function DataNode(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
    }
    return Text;
}(DataNode));
exports.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
    }
    return Comment;
}(DataNode));
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
    }
    return Document;
}(NodeWithChildren));
exports.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1.ElementType.Script
            : name === "style"
                ? domelementtype_1.ElementType.Style
                : domelementtype_1.ElementType.Tag; }
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/constants.js ***!
  \**************************************************************/
/***/ (function(module) {

/**
 * SVG elements are case-sensitive.
 *
 * @see {@link https://developer.mozilla.org/docs/Web/SVG/Element#SVG_elements_A_to_Z}
 */
var CASE_SENSITIVE_TAG_NAMES = [
  'animateMotion',
  'animateTransform',
  'clipPath',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussainBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'foreignObject',
  'linearGradient',
  'radialGradient',
  'textPath'
];

module.exports = {
  CASE_SENSITIVE_TAG_NAMES: CASE_SENSITIVE_TAG_NAMES
};


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/domparser.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/domparser.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// constants
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
var HEAD_TAG_REGEX = /<head.*>/i;
var BODY_TAG_REGEX = /<body.*>/i;

// falls back to `parseFromString` if `createHTMLDocument` cannot be used
var parseFromDocument = function () {
  throw new Error(
    'This browser does not support `document.implementation.createHTMLDocument`'
  );
};

var parseFromString = function () {
  throw new Error(
    'This browser does not support `DOMParser.prototype.parseFromString`'
  );
};

/**
 * DOMParser (performance: slow).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */
if (typeof window.DOMParser === 'function') {
  var domParser = new window.DOMParser();
  var mimeType = 'text/html';

  /**
   * Creates an HTML document using `DOMParser.parseFromString`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromString = function (html, tagName) {
    if (tagName) {
      html = '<' + tagName + '>' + html + '</' + tagName + '>';
    }

    return domParser.parseFromString(html, mimeType);
  };

  parseFromDocument = parseFromString;
}

/**
 * DOMImplementation (performance: fair).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */
if (document.implementation) {
  var isIE = (__webpack_require__(/*! ./utilities */ "./node_modules/html-dom-parser/lib/client/utilities.js").isIE);

  // title parameter is required in IE
  // https://msdn.microsoft.com/en-us/library/ff975457(v=vs.85).aspx
  var doc = document.implementation.createHTMLDocument(
    isIE() ? 'html-dom-parser' : undefined
  );

  /**
   * Use HTML document created by `document.implementation.createHTMLDocument`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromDocument = function (html, tagName) {
    if (tagName) {
      doc.documentElement.getElementsByTagName(tagName)[0].innerHTML = html;
      return doc;
    }

    doc.documentElement.innerHTML = html;
    return doc;
  };
}

/**
 * Template (performance: fast).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */
var template = document.createElement('template');
var parseFromTemplate;

if (template.content) {
  /**
   * Uses a template element (content fragment) to parse HTML.
   *
   * @param  {string} html - The HTML string.
   * @return {NodeList}
   */
  parseFromTemplate = function (html) {
    template.innerHTML = html;
    return template.content.childNodes;
  };
}

/**
 * Parses HTML string to DOM nodes.
 *
 * @param  {string}   html - HTML markup.
 * @return {NodeList}
 */
function domparser(html) {
  var firstTagName;
  var match = html.match(FIRST_TAG_REGEX);

  if (match && match[1]) {
    firstTagName = match[1].toLowerCase();
  }

  var doc;
  var element;
  var elements;

  switch (firstTagName) {
    case HTML:
      doc = parseFromString(html);

      // the created document may come with filler head/body elements,
      // so make sure to remove them if they don't actually exist
      if (!HEAD_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(HEAD)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      if (!BODY_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(BODY)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      return doc.getElementsByTagName(HTML);

    case HEAD:
    case BODY:
      elements = parseFromDocument(html).getElementsByTagName(firstTagName);

      // if there's a sibling element, then return both elements
      if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
        return elements[0].parentNode.childNodes;
      }
      return elements;

    // low-level tag or text
    default:
      if (parseFromTemplate) {
        return parseFromTemplate(html);
      }

      return parseFromDocument(html, BODY).getElementsByTagName(BODY)[0]
        .childNodes;
  }
}

module.exports = domparser;


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/html-to-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/html-to-dom.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var domparser = __webpack_require__(/*! ./domparser */ "./node_modules/html-dom-parser/lib/client/domparser.js");
var formatDOM = (__webpack_require__(/*! ./utilities */ "./node_modules/html-dom-parser/lib/client/utilities.js").formatDOM);

var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>

/**
 * Parses HTML string to DOM nodes in browser.
 *
 * @param  {string} html  - HTML markup.
 * @return {DomElement[]} - DOM elements.
 */
function HTMLDOMParser(html) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (html === '') {
    return [];
  }

  // match directive
  var match = html.match(DIRECTIVE_REGEX);
  var directive;

  if (match && match[1]) {
    directive = match[1];
  }

  return formatDOM(domparser(html), null, directive);
}

module.exports = HTMLDOMParser;


/***/ }),

/***/ "./node_modules/html-dom-parser/lib/client/utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/client/utilities.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var constants = __webpack_require__(/*! ./constants */ "./node_modules/html-dom-parser/lib/client/constants.js");
var domhandler = __webpack_require__(/*! domhandler/lib/node */ "./node_modules/domhandler/lib/node.js");

var CASE_SENSITIVE_TAG_NAMES = constants.CASE_SENSITIVE_TAG_NAMES;

var Comment = domhandler.Comment;
var Element = domhandler.Element;
var ProcessingInstruction = domhandler.ProcessingInstruction;
var Text = domhandler.Text;

var caseSensitiveTagNamesMap = {};
var tagName;

for (var i = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i < len; i++) {
  tagName = CASE_SENSITIVE_TAG_NAMES[i];
  caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
}

/**
 * Gets case-sensitive tag name.
 *
 * @param  {string}           tagName - Tag name in lowercase.
 * @return {string|undefined}         - Case-sensitive tag name.
 */
function getCaseSensitiveTagName(tagName) {
  return caseSensitiveTagNamesMap[tagName];
}

/**
 * Formats DOM attributes to a hash map.
 *
 * @param  {NamedNodeMap} attributes - List of attributes.
 * @return {object}                  - Map of attribute name to value.
 */
function formatAttributes(attributes) {
  var result = {};
  var attribute;
  // `NamedNodeMap` is array-like
  for (var i = 0, len = attributes.length; i < len; i++) {
    attribute = attributes[i];
    result[attribute.name] = attribute.value;
  }
  return result;
}

/**
 * Corrects the tag name if it is case-sensitive (SVG).
 * Otherwise, returns the lowercase tag name (HTML).
 *
 * @param  {string} tagName - Lowercase tag name.
 * @return {string}         - Formatted tag name.
 */
function formatTagName(tagName) {
  tagName = tagName.toLowerCase();
  var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
  if (caseSensitiveTagName) {
    return caseSensitiveTagName;
  }
  return tagName;
}

/**
 * Transforms DOM nodes to `domhandler` nodes.
 *
 * @param  {NodeList}     nodes         - DOM nodes.
 * @param  {Element|null} [parent=null] - Parent node.
 * @param  {string}       [directive]   - Directive.
 * @return {Array<Comment|Element|ProcessingInstruction|Text>}
 */
function formatDOM(nodes, parent, directive) {
  parent = parent || null;
  var result = [];

  for (var index = 0, len = nodes.length; index < len; index++) {
    var node = nodes[index];
    var current;

    // set the node data given the type
    switch (node.nodeType) {
      case 1:
        // script, style, or tag
        current = new Element(
          formatTagName(node.nodeName),
          formatAttributes(node.attributes)
        );
        current.children = formatDOM(node.childNodes, current);
        break;

      case 3:
        current = new Text(node.nodeValue);
        break;

      case 8:
        current = new Comment(node.nodeValue);
        break;

      default:
        continue;
    }

    // set previous node next
    var prev = result[index - 1] || null;
    if (prev) {
      prev.next = current;
    }

    // set properties for current node
    current.parent = parent;
    current.prev = prev;
    current.next = null;

    result.push(current);
  }

  if (directive) {
    current = new ProcessingInstruction(
      directive.substring(0, directive.indexOf(' ')).toLowerCase(),
      directive
    );
    current.next = result[0] || null;
    current.parent = parent;
    result.unshift(current);

    if (result[1]) {
      result[1].prev = result[0];
    }
  }

  return result;
}

/**
 * Detects if browser is Internet Explorer.
 *
 * @return {boolean} - Whether IE is detected.
 */
function isIE() {
  return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
}

module.exports = {
  formatAttributes: formatAttributes,
  formatDOM: formatDOM,
  isIE: isIE
};


/***/ }),

/***/ "./node_modules/html-react-parser/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-react-parser/index.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var domToReact = __webpack_require__(/*! ./lib/dom-to-react */ "./node_modules/html-react-parser/lib/dom-to-react.js");
var attributesToProps = __webpack_require__(/*! ./lib/attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js");
var htmlToDOM = __webpack_require__(/*! html-dom-parser */ "./node_modules/html-dom-parser/lib/client/html-to-dom.js");

// support backwards compatibility for ES Module
htmlToDOM =
  /* istanbul ignore next */
  typeof htmlToDOM.default === 'function' ? htmlToDOM.default : htmlToDOM;

var domParserOptions = { lowerCaseAttributeNames: false };

/**
 * Converts HTML string to React elements.
 *
 * @param {string} html - HTML string.
 * @param {object} [options] - Parser options.
 * @param {object} [options.htmlparser2] - htmlparser2 options.
 * @param {object} [options.library] - Library for React, Preact, etc.
 * @param {Function} [options.replace] - Replace method.
 * @returns {JSX.Element|JSX.Element[]|string} - React element(s), empty array, or string.
 */
function HTMLReactParser(html, options) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  if (html === '') {
    return [];
  }
  options = options || {};
  return domToReact(
    htmlToDOM(html, options.htmlparser2 || domParserOptions),
    options
  );
}

HTMLReactParser.domToReact = domToReact;
HTMLReactParser.htmlToDOM = htmlToDOM;
HTMLReactParser.attributesToProps = attributesToProps;
HTMLReactParser.Element = (__webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js").Element);

// support CommonJS and ES Modules
module.exports = HTMLReactParser;
module.exports["default"] = HTMLReactParser;


/***/ }),

/***/ "./node_modules/html-react-parser/lib/attributes-to-props.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/attributes-to-props.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var reactProperty = __webpack_require__(/*! react-property */ "./node_modules/react-property/lib/index.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");

/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param {object} [attributes={}] - HTML/SVG DOM attributes.
 * @returns - React props.
 */
module.exports = function attributesToProps(attributes) {
  attributes = attributes || {};

  var valueOnlyInputs = {
    reset: true,
    submit: true
  };

  var attributeName;
  var attributeNameLowerCased;
  var attributeValue;
  var propName;
  var propertyInfo;
  var props = {};
  var inputIsValueOnly = attributes.type && valueOnlyInputs[attributes.type];

  for (attributeName in attributes) {
    attributeValue = attributes[attributeName];

    // ARIA (aria-*) or custom data (data-*) attribute
    if (reactProperty.isCustomAttribute(attributeName)) {
      props[attributeName] = attributeValue;
      continue;
    }

    // convert HTML/SVG attribute to React prop
    attributeNameLowerCased = attributeName.toLowerCase();
    propName = getPropName(attributeNameLowerCased);

    if (propName) {
      propertyInfo = reactProperty.getPropertyInfo(propName);

      // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
      // https://reactjs.org/docs/uncontrolled-components.html
      if (
        (propName === 'checked' || propName === 'value') &&
        !inputIsValueOnly
      ) {
        propName = getPropName('default' + attributeNameLowerCased);
      }

      props[propName] = attributeValue;

      switch (propertyInfo && propertyInfo.type) {
        case reactProperty.BOOLEAN:
          props[propName] = true;
          break;
        case reactProperty.OVERLOADED_BOOLEAN:
          if (attributeValue === '') {
            props[propName] = true;
          }
          break;
      }
      continue;
    }

    // preserve custom attribute if React >=16
    if (utilities.PRESERVE_CUSTOM_ATTRIBUTES) {
      props[attributeName] = attributeValue;
    }
  }

  // transform inline style to object
  utilities.setStyleProp(attributes.style, props);

  return props;
};

/**
 * Gets prop name from lowercased attribute name.
 *
 * @param {string} attributeName - Lowercased attribute name.
 * @returns - Prop name.
 */
function getPropName(attributeName) {
  return reactProperty.possibleStandardNames[attributeName];
}


/***/ }),

/***/ "./node_modules/html-react-parser/lib/dom-to-react.js":
/*!************************************************************!*\
  !*** ./node_modules/html-react-parser/lib/dom-to-react.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");
var attributesToProps = __webpack_require__(/*! ./attributes-to-props */ "./node_modules/html-react-parser/lib/attributes-to-props.js");
var utilities = __webpack_require__(/*! ./utilities */ "./node_modules/html-react-parser/lib/utilities.js");

var setStyleProp = utilities.setStyleProp;
var canTextBeChildOfNode = utilities.canTextBeChildOfNode;

/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param {DomElement[]} nodes - DOM nodes.
 * @param {object} [options={}] - Options.
 * @param {Function} [options.replace] - Replacer.
 * @param {object} [options.library] - Library (React, Preact, etc.).
 * @returns - String or JSX element(s).
 */
function domToReact(nodes, options) {
  options = options || {};

  var library = options.library || React;
  var cloneElement = library.cloneElement;
  var createElement = library.createElement;
  var isValidElement = library.isValidElement;

  var result = [];
  var node;
  var isWhitespace;
  var hasReplace = typeof options.replace === 'function';
  var replaceElement;
  var props;
  var children;
  var trim = options.trim;

  for (var i = 0, len = nodes.length; i < len; i++) {
    node = nodes[i];

    // replace with custom React element (if present)
    if (hasReplace) {
      replaceElement = options.replace(node);

      if (isValidElement(replaceElement)) {
        // set "key" prop for sibling elements
        // https://fb.me/react-warning-keys
        if (len > 1) {
          replaceElement = cloneElement(replaceElement, {
            key: replaceElement.key || i
          });
        }
        result.push(replaceElement);
        continue;
      }
    }

    if (node.type === 'text') {
      isWhitespace = !node.data.trim().length;

      if (isWhitespace && node.parent && !canTextBeChildOfNode(node.parent)) {
        // We have a whitespace node that can't be nested in its parent
        // so skip it
        continue;
      }

      if (trim && isWhitespace) {
        // Trim is enabled and we have a whitespace node
        // so skip it
        continue;
      }

      // We have a text node that's not whitespace and it can be nested
      // in its parent so add it to the results
      result.push(node.data);
      continue;
    }

    props = node.attribs;
    if (skipAttributesToProps(node)) {
      setStyleProp(props.style, props);
    } else if (props) {
      props = attributesToProps(props);
    }

    children = null;

    switch (node.type) {
      case 'script':
      case 'style':
        // prevent text in <script> or <style> from being escaped
        // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
        if (node.children[0]) {
          props.dangerouslySetInnerHTML = {
            __html: node.children[0].data
          };
        }
        break;

      case 'tag':
        // setting textarea value in children is an antipattern in React
        // https://reactjs.org/docs/forms.html#the-textarea-tag
        if (node.name === 'textarea' && node.children[0]) {
          props.defaultValue = node.children[0].data;
        } else if (node.children && node.children.length) {
          // continue recursion of creating React elements (if applicable)
          children = domToReact(node.children, options);
        }
        break;

      // skip all other cases (e.g., comment)
      default:
        continue;
    }

    // set "key" prop for sibling elements
    // https://fb.me/react-warning-keys
    if (len > 1) {
      props.key = i;
    }

    result.push(createElement(node.name, props, children));
  }

  return result.length === 1 ? result[0] : result;
}

/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param {DomElement} node
 * @returns - Whether node attributes should be converted to props.
 */
function skipAttributesToProps(node) {
  return (
    utilities.PRESERVE_CUSTOM_ATTRIBUTES &&
    node.type === 'tag' &&
    utilities.isCustomComponent(node.name, node.attribs)
  );
}

module.exports = domToReact;


/***/ }),

/***/ "./node_modules/html-react-parser/lib/utilities.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-react-parser/lib/utilities.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");
var styleToJS = (__webpack_require__(/*! style-to-js */ "./node_modules/style-to-js/cjs/index.js")["default"]);

/**
 * Swap key with value in an object.
 *
 * @param {object} obj - The object.
 * @param {Function} [override] - The override method.
 * @returns - The inverted object.
 */
function invertObject(obj, override) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('First argument must be an object');
  }

  var key;
  var value;
  var isOverridePresent = typeof override === 'function';
  var overrides = {};
  var result = {};

  for (key in obj) {
    value = obj[key];

    if (isOverridePresent) {
      overrides = override(key, value);
      if (overrides && overrides.length === 2) {
        result[overrides[0]] = overrides[1];
        continue;
      }
    }

    if (typeof value === 'string') {
      result[value] = key;
    }
  }

  return result;
}

/**
 * Check if a given tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param {string} tagName - The name of the html tag.
 * @param {object} props - The props being passed to the element.
 * @returns - Whether tag is custom component.
 */
function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return props && typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var styleToJSOptions = { reactCompat: true };

/**
 * Sets style prop.
 *
 * @param {null|undefined|string} style
 * @param {object} props
 */
function setStyleProp(style, props) {
  if (style === null || style === undefined) {
    return;
  }
  try {
    props.style = styleToJS(style, styleToJSOptions);
  } catch (err) {
    props.style = {};
  }
}

/**
 * @constant {boolean}
 * @see {@link https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html}
 */
var PRESERVE_CUSTOM_ATTRIBUTES = React.version.split('.')[0] >= 16;

// Taken from
// https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
var elementsWithNoTextChildren = new Set([
  'tr',
  'tbody',
  'thead',
  'tfoot',
  'colgroup',
  'table',
  'head',
  'html',
  'frameset'
]);

/**
 * Checks if the given node can contain text nodes
 *
 * @param {DomElement} node - Node.
 * @returns - Whether node can contain text nodes.
 */
function canTextBeChildOfNode(node) {
  return !elementsWithNoTextChildren.has(node.name);
}

module.exports = {
  PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
  invertObject: invertObject,
  isCustomComponent: isCustomComponent,
  setStyleProp: setStyleProp,
  canTextBeChildOfNode: canTextBeChildOfNode,
  elementsWithNoTextChildren: elementsWithNoTextChildren
};


/***/ }),

/***/ "./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/***/ (function(module) {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function(style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-property/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-property/lib/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      attributeName = _ref2[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function capitalize(token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

var _require = __webpack_require__(/*! ../lib/possibleStandardNamesOptimized */ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js"),
    CAMELCASE = _require.CAMELCASE,
    SAME = _require.SAME,
    possibleStandardNamesOptimized = _require.possibleStandardNames;

var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
/**
 * Checks whether a property name is a custom attribute.
 *
 * @see {@link https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25}
 *
 * @param {string}
 * @return {boolean}
 */

var isCustomAttribute = RegExp.prototype.test.bind( // eslint-disable-next-line no-misleading-character-class
new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
var possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce(function (accumulator, standardName) {
  var propName = possibleStandardNamesOptimized[standardName];

  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }

  return accumulator;
}, {});

exports.BOOLEAN = BOOLEAN;
exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
exports.NUMERIC = NUMERIC;
exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
exports.RESERVED = RESERVED;
exports.STRING = STRING;
exports.getPropertyInfo = getPropertyInfo;
exports.isCustomAttribute = isCustomAttribute;
exports.possibleStandardNames = possibleStandardNames;


/***/ }),

/***/ "./node_modules/react-property/lib/possibleStandardNamesOptimized.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-property/lib/possibleStandardNamesOptimized.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME = 0;
exports.SAME = SAME;

// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
var CAMELCASE = 1;
exports.CAMELCASE = CAMELCASE;

exports.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  'accept-charset': 'acceptCharset',
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: 'className',
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: 'htmlFor',
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  'http-equiv': 'httpEquiv',
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  'accent-height': 'accentHeight',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  'alignment-baseline': 'alignmentBaseline',
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  'arabic-form': 'arabicForm',
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  'baseline-shift': 'baselineShift',
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  'cap-height': 'capHeight',
  clip: 0,
  clipPath: 1,
  'clip-path': 'clipPath',
  clipPathUnits: 1,
  clipRule: 1,
  'clip-rule': 'clipRule',
  color: 0,
  colorInterpolation: 1,
  'color-interpolation': 'colorInterpolation',
  colorInterpolationFilters: 1,
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorProfile: 1,
  'color-profile': 'colorProfile',
  colorRendering: 1,
  'color-rendering': 'colorRendering',
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  'dominant-baseline': 'dominantBaseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  'enable-background': 'enableBackground',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  'fill-opacity': 'fillOpacity',
  fillRule: 1,
  'fill-rule': 'fillRule',
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  'flood-opacity': 'floodOpacity',
  floodColor: 1,
  'flood-color': 'floodColor',
  focusable: 0,
  fontFamily: 1,
  'font-family': 'fontFamily',
  fontSize: 1,
  'font-size': 'fontSize',
  fontSizeAdjust: 1,
  'font-size-adjust': 'fontSizeAdjust',
  fontStretch: 1,
  'font-stretch': 'fontStretch',
  fontStyle: 1,
  'font-style': 'fontStyle',
  fontVariant: 1,
  'font-variant': 'fontVariant',
  fontWeight: 1,
  'font-weight': 'fontWeight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  'glyph-name': 'glyphName',
  glyphOrientationHorizontal: 1,
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphOrientationVertical: 1,
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  'horiz-adv-x': 'horizAdvX',
  horizOriginX: 1,
  'horiz-origin-x': 'horizOriginX',
  ideographic: 0,
  imageRendering: 1,
  'image-rendering': 'imageRendering',
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  'letter-spacing': 'letterSpacing',
  lightingColor: 1,
  'lighting-color': 'lightingColor',
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  'marker-end': 'markerEnd',
  markerHeight: 1,
  markerMid: 1,
  'marker-mid': 'markerMid',
  markerStart: 1,
  'marker-start': 'markerStart',
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  'overline-position': 'overlinePosition',
  overlineThickness: 1,
  'overline-thickness': 'overlineThickness',
  paintOrder: 1,
  'paint-order': 'paintOrder',
  panose1: 0,
  'panose-1': 'panose1',
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  'pointer-events': 'pointerEvents',
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  'rendering-intent': 'renderingIntent',
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  'shape-rendering': 'shapeRendering',
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  'stop-color': 'stopColor',
  stopOpacity: 1,
  'stop-opacity': 'stopOpacity',
  strikethroughPosition: 1,
  'strikethrough-position': 'strikethroughPosition',
  strikethroughThickness: 1,
  'strikethrough-thickness': 'strikethroughThickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  'stroke-dasharray': 'strokeDasharray',
  strokeDashoffset: 1,
  'stroke-dashoffset': 'strokeDashoffset',
  strokeLinecap: 1,
  'stroke-linecap': 'strokeLinecap',
  strokeLinejoin: 1,
  'stroke-linejoin': 'strokeLinejoin',
  strokeMiterlimit: 1,
  'stroke-miterlimit': 'strokeMiterlimit',
  strokeWidth: 1,
  'stroke-width': 'strokeWidth',
  strokeOpacity: 1,
  'stroke-opacity': 'strokeOpacity',
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  'text-anchor': 'textAnchor',
  textDecoration: 1,
  'text-decoration': 'textDecoration',
  textLength: 1,
  textRendering: 1,
  'text-rendering': 'textRendering',
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  'underline-position': 'underlinePosition',
  underlineThickness: 1,
  'underline-thickness': 'underlineThickness',
  unicode: 0,
  unicodeBidi: 1,
  'unicode-bidi': 'unicodeBidi',
  unicodeRange: 1,
  'unicode-range': 'unicodeRange',
  unitsPerEm: 1,
  'units-per-em': 'unitsPerEm',
  unselectable: 0,
  vAlphabetic: 1,
  'v-alphabetic': 'vAlphabetic',
  values: 0,
  vectorEffect: 1,
  'vector-effect': 'vectorEffect',
  version: 0,
  vertAdvY: 1,
  'vert-adv-y': 'vertAdvY',
  vertOriginX: 1,
  'vert-origin-x': 'vertOriginX',
  vertOriginY: 1,
  'vert-origin-y': 'vertOriginY',
  vHanging: 1,
  'v-hanging': 'vHanging',
  vIdeographic: 1,
  'v-ideographic': 'vIdeographic',
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  'v-mathematical': 'vMathematical',
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  'word-spacing': 'wordSpacing',
  writingMode: 1,
  'writing-mode': 'writingMode',
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  'x-height': 'xHeight',
  xlinkActuate: 1,
  'xlink:actuate': 'xlinkActuate',
  xlinkArcrole: 1,
  'xlink:arcrole': 'xlinkArcrole',
  xlinkHref: 1,
  'xlink:href': 'xlinkHref',
  xlinkRole: 1,
  'xlink:role': 'xlinkRole',
  xlinkShow: 1,
  'xlink:show': 'xlinkShow',
  xlinkTitle: 1,
  'xlink:title': 'xlinkTitle',
  xlinkType: 1,
  'xlink:type': 'xlinkType',
  xmlBase: 1,
  'xml:base': 'xmlBase',
  xmlLang: 1,
  'xml:lang': 'xmlLang',
  xmlns: 0,
  'xml:space': 'xmlSpace',
  xmlnsXlink: 1,
  'xmlns:xlink': 'xmlnsXlink',
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};


/***/ }),

/***/ "./node_modules/style-to-js/cjs/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-js/cjs/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var style_to_object_1 = __importDefault(__webpack_require__(/*! style-to-object */ "./node_modules/style-to-object/index.js"));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./node_modules/style-to-js/cjs/utilities.js");
function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1["default"])(style, function (property, value) {
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
exports["default"] = StyleToJS;


/***/ }),

/***/ "./node_modules/style-to-js/cjs/utilities.js":
/*!***************************************************!*\
  !*** ./node_modules/style-to-js/cjs/utilities.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
var skipCamelCase = function (property) {
    return !property ||
        NO_HYPHEN_REGEX.test(property) ||
        CUSTOM_PROPERTY_REGEX.test(property);
};
var capitalize = function (match, character) {
    return character.toUpperCase();
};
var trimHyphen = function (match, prefix) { return "".concat(prefix, "-"); };
var camelCase = function (property, options) {
    if (options === void 0) { options = {}; }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    }
    else {
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase;


/***/ }),

/***/ "./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parse = __webpack_require__(/*! inline-style-parser */ "./node_modules/inline-style-parser/index.js");

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/media-utils":
/*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["mediaUtils"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "./node_modules/html-react-parser/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/html-react-parser/index.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: function() { return /* binding */ Element; },
/* harmony export */   attributesToProps: function() { return /* binding */ attributesToProps; },
/* harmony export */   domToReact: function() { return /* binding */ domToReact; },
/* harmony export */   htmlToDOM: function() { return /* binding */ htmlToDOM; }
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/html-react-parser/index.js");


var domToReact = _index_js__WEBPACK_IMPORTED_MODULE_0__.domToReact;
var htmlToDOM = _index_js__WEBPACK_IMPORTED_MODULE_0__.htmlToDOM;
var attributesToProps = _index_js__WEBPACK_IMPORTED_MODULE_0__.attributesToProps;
var Element = _index_js__WEBPACK_IMPORTED_MODULE_0__.Element;

/* harmony default export */ __webpack_exports__["default"] = (_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../../../assets/svg/svgs.json":
/*!*************************************!*\
  !*** ../../../assets/svg/svgs.json ***!
  \*************************************/
/***/ (function(module) {

"use strict";

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);









const {
  __
} = wp.i18n;
if (astMetaParams.register_astra_metabox) {
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('astra-theme-layout', {
    render: _settings__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
  class HideFeaturedImage extends _wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Component {
    render() {
      const {
        meta,
        setMetaFieldValue
      } = this.props;
      let toggleValue = 'disabled' === meta['ast-featured-img'] ? true : false;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
        label: __('Show featured image in the posts lists only, but hide it in the single post view.', 'astra'),
        className: 'ast-featured-img',
        checked: toggleValue,
        onChange: val => {
          val = true === val ? 'disabled' : '';
          setMetaFieldValue(val, 'ast-featured-img');
        }
      })));
    }
  }
  const composedHideFeaturedImage = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => {
    const postMeta = select('core/editor').getEditedPostAttribute('meta');
    const oldPostMeta = select('core/editor').getCurrentPostAttribute('meta');
    return {
      meta: {
        ...oldPostMeta,
        ...postMeta
      },
      oldMeta: oldPostMeta
    };
  }), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)(dispatch => ({
    setMetaFieldValue: (value, field) => dispatch('core/editor').editPost({
      meta: {
        [field]: value
      }
    })
  }))])(HideFeaturedImage);
  const wrapDisablePostFeaturedImageMeta = function (OriginalComponent) {
    return function (props) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, {}, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(OriginalComponent, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(composedHideFeaturedImage));
    };
  };

  /**
   * PostFeaturedImage is a React component used to render the Post Featured Image selection tool.
   *
   * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/editor/src/components/post-featured-image/README.md
   */
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.addFilter)('editor.PostFeaturedImage', 'astra/disable-featured-image', wrapDisablePostFeaturedImageMeta);
}
}();
/******/ })()
;
//# sourceMappingURL=index.js.map