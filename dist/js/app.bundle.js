/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/globals.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/globals.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  color: #333; }\n\n.wrapper {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-evenly;\n  flex-direction: row;\n  background-color: #d9e6f5;\n  width: 100vw;\n  min-height: 100vh;\n  padding-top: 3vw; }\n\n.form-base {\n  border-radius: 10px;\n  background-color: #fff;\n  width: 20vw;\n  margin-bottom: 3vw;\n  border: 1px solid #4f83c2; }\n\n.header {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  background-color: #4f83c2;\n  border-radius: 5px 5px 0 0;\n  padding-left: 15px; }\n\n.group-head {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  background-color: #005789;\n  width: 100%;\n  height: 30px; }\n\n#devices > div:nth-child(5) {\n  border-radius: 0 0 5px 5px; }\n\n.group-head h4 {\n  font-size: .9em; }\n\n.group-head-3 {\n  border-radius: 0 0 5px 5px; }\n\n.group {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start; }\n\n.devices {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-left: 20%;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  width: 100%; }\n\n.devices:nth-child(3) {\n  display: none; }\n\n.inner-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-left: 5%;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.devices-3 {\n  display: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-left: 20%;\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.fa-caret-down, .fa-caret-right {\n  color: #fff; }\n\n.device {\n  display: flex;\n  flex-direction: row;\n  height: 35px;\n  width: 100%;\n  align-items: center;\n  /* border: 1px solid red; */ }\n\ninput[type=\"checkbox\"] {\n  margin-right: 5px;\n  cursor: pointer;\n  background-color: #fff; }\n\n.checkbox {\n  width: 10%;\n  height: 30px;\n  cursor: pointer; }\n\n.checkbox {\n  background: #fff; }\n\np {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  font-weight: lighter;\n  font-size: .8em; }\n\n.p_check {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 10%;\n  font-weight: lighter;\n  font-size: .8em; }\n\n.p_name {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  font-weight: lighter;\n  font-size: .8em; }\n\nh3 {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 100;\n  height: 30px;\n  margin: .9vw; }\n\nh4 {\n  color: #fff;\n  font-weight: lighter; }\n\n.carret {\n  height: 10px;\n  width: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 14px;\n  cursor: pointer; }\n\n.diviceDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%; }\n\n.device-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  width: 90%;\n  box-shadow: 0 0.2rem 0.1rem #edecec; }\n\n.deviceItem {\n  height: 35px;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding-left: 15px; }\n\n.protocolItem {\n  height: 35px;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding-left: 15px; }\n\n.protocol {\n  height: 35px;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding-left: 15px; }\n\n.time {\n  height: 35px;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding-left: 15px; }\n\n.periodItem {\n  height: 35px;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding-left: 15px; }\n\n.protocls-list {\n  width: 90%;\n  box-shadow: 0 0.2rem 0.1rem #edecec; }\n\n.period {\n  width: 90%;\n  box-shadow: 0 0.2rem 0.1rem #edecec; }\n\n.protocolDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%; }\n\n.periodDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%; }\n\n.diviceHead {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%; }\n\n.protocolHead {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%; }\n\n.periodHead {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%; }\n\n.btns {\n  margin: 1vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%; }\n\n.startBtn {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: #4f83c2;\n  color: #fff; }\n\n.startBtn p {\n  font-size: 1em;\n  color: #fff; }\n\n.fa-play {\n  margin-right: 10px;\n  color: #fff; }\n\n.btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px;\n  font-size: .9rem;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  cursor: pointer;\n  font-weight: 100; }\n\n/* ======= Media queries ======= */\n@media all and (max-width: 500px) {\n  * {\n    overflow-x: hidden;\n    width: 100vw; }\n  .wrapper {\n    flex-direction: column;\n    width: 100vw;\n    align-items: center; }\n  .form-base {\n    width: 90vw; }\n  .btns {\n    flex-direction: column; }\n  .startBtn {\n    width: 80vw; }\n  input {\n    width: 20px; }\n  .checkbox {\n    height: 5vw; }\n  .radio {\n    height: 5vw; }\n  .devices, .devices-3 {\n    padding-left: 10%; }\n  h3 {\n    margin-left: 5vw; }\n  h4 {\n    margin-left: 1vw; } }\n\n/* \n\n\nimport styles from '../css/globals.css'\nimport { inherits } from 'util';\n\n\nlet templates = {};\ntemplates.protocolTemplate = `<div class=\"protocol\"> \n                    <div class='p_check' />\n                        <input type=\"checkbox\" />                        \n                    </div>\n                    <div class=\"p_name\">{{protocol_name}}</div>\n                `;\ntemplates.timeTemplate = `<div class=\"protocol\"> \n                    <div class='p_check' />\n                        <input type=\"radio\" />                        \n                    </div>\n                    <div class=\"p_name\">{{time_name}}</div>\n                `;\n                \ntemplates.summaryDevice = `<div class=\"deviceItem\"><p>{{device_name}}</p></div>`;\ntemplates.summaryProtocols = `<div class=\"protocolItem\"><p>{{protocol_s_name}}</p></div>`;\ntemplates.summaryTimes = `<div class=\"periodItem\"><p>{{time_s_name}}</p></div>`;\n\n\n(function init() {\n    document.querySelector(\"#start\").addEventListener(\"click\", (e) => {\n        createSummary();\n    });\n\n    document.querySelector(\"#clear\").addEventListener(\"click\", (e) => {\n        clear();\n    });\n    \n    loadData();\n})();\n\n\nfunction loadData() {\n    fetch(\"./data/ex_data.json\")\n        .then(res => res.json())\n        .then((data) => {\n            loadBDevicesByGroup(data.device_groups);\n            // appendCheckboxes(data.device_groups.devices);\n            CheckboxesAppendCheckToParent(data.device_groups);\n            // appendCheckboxes(data.device_groups[0].devices, data.device_groups[1].devices, data.device_groups[2].devices);\n            loadProtocols(data.protocols);\n            loadTimes(data.times);\n            fetchIds(data.device_groups, data.protocols, data.times);\n            caret3Toggle();\n            appendCheckboxes();\n        }\n    );\n}\n\nfunction loadBDevicesByGroup(groups) {\n    let groupHtml = document.querySelector('.group');\n\n    groups.forEach(group => {\n        let ghead = document.createElement('div');\n        ghead.classList.add('group-head');\n\n        let car = document.createElement('div');\n        car.classList.add('carret');\n        car.innerHTML = '<i class=\"fas fa-caret-down\"></i>';\n\n        let gcheck = document.createElement('input');\n        gcheck.type = 'checkbox'\n        gcheck.name = group.name;\n        gcheck.value = group.name;\n\n        let gname = document.createElement('h4');\n        gname.innerText = group.name;\n\n        ghead.appendChild(car);\n        ghead.appendChild(gcheck);\n        ghead.appendChild(gname);\n\n        let devices = document.createElement('div');\n        devices.classList.add('devices');\n\n        group.devices.forEach(device => {\n            let div = document.createElement('div');\n            div.classList.add('device')\n\n            let p = document.createElement('p')\n\n            let checkbox = document.createElement('input')\n            checkbox.type = 'checkbox'\n            checkbox.classList.add('checkbox')\n            checkbox.dataset.name = device.name;\n            checkbox.checked = (device.active === 1) ? true : false;\n\n            p.innerText = device.name\n            div.appendChild(checkbox)\n            div.appendChild(p);\n\n            devices.appendChild(div)\n        });\n\n        groupHtml.appendChild(ghead);\n        groupHtml.appendChild(devices);\n\n    });\n}\n\nfunction loadProtocols(protocols) {\n    let protocolsHtml = document.querySelector('#protocols');\n\n    protocols.forEach(p => {\n        protocolsHtml.innerHTML += templates.protocolTemplate.replace(\"{{protocol_name}}\", p.name);\n    });\n}\n\nfunction loadTimes(times) {\n    let timesHtml = document.querySelector('#times');\n\n    times.forEach(t => {\n        timesHtml.innerHTML += templates.timeTemplate.replace(\"{{time_name}}\", t.name);\n    });\n}\n\nfunction createSummary() {\n    let summary = document.querySelector(\"#devicesSummary\");\n    summary.innerHTML = '';\n    let elements = document.querySelectorAll(\"#devices input[type='checkbox']:checked\");\n    console.log(elements)\n    elements.forEach(elm => {\n        if (elm.checked) {\n            summary.innerHTML += templates.summaryDevice.replace(\"{{device_name}}\", elm.dataset.name);\n            console.log(elm.dataset)\n        }\n    });\n\n    let protocolsSum = document.querySelector(\"#protocolsSummary\");\n    protocolsSum.innerHTML = '';\n    let elmProtocols = document.querySelectorAll(\"#protocols input[type='checkbox']:checked\");\n    console.log(elmProtocols)\n\n    elmProtocols.forEach(p => {\n        if (p.checked) {\n            protocolsSum.innerHTML += templates.summaryProtocols.replace(\"{{protocol_s_name}}\", p.dataset.name);\n        }\n    });\n\n    let timesSum = document.querySelector(\"#periodSummary\");\n    timesSum.innerHTML = '';\n    let elmTimes = document.querySelectorAll(\"#times input[type='radio']:checked\");\n    console.log(elmTimes)\n\n    elmTimes.forEach(t => {\n        if (t.checked) {\n            timesSum.innerHTML += templates.summaryTimes.replace(\"{{time_s_name}}\", t.dataset.name);\n        }\n    });\n}\n\nfunction fetchIds(d, p, t) {\n    console.log(d)\n    console.log(p)\n    console.log(t)\n    d.forEach(g => {\n        // console.log(d[0].devices[0].id)\n    });\n}\n\n\n    // function check(e) {\n    //     let counter = 1;\n    //     let z = 2;\n    //     console.log(\"z: \", z)\n    //     console.log(\"counter: \", counter)\n    //     let da = `#devices > div:nth-child(${counter}) > input[type=\"checkbox\"]`;\n    //     let za = `#devices > div:nth-child(${z}) input[type='checkbox']:checked`;\n    //     let fa = `#devices > div:nth-child(${z}) > div`;\n    //     let gfull = document.querySelectorAll(fa);\n    //     let gParnetCheckbox = document.querySelector(da);\n    //     let g1 =  document.querySelectorAll(za);\n    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}\n    //     counter += 2;\n    //     z += 2;\n    // }\n  \n    // for(let x = 1; x <= devices.length; x++) {\n    //     let g = 2;\n    //     let fa = `#devices > div:nth-child(${g}) > div`;\n    //     let gfull = document.querySelectorAll(fa);\n    //     gfull.forEach((g, i) => {\n    //         i++; // === 1\n    //         let y = 2;\n\n    //        let mishtane = `#devices > div:nth-child(${y}) > div:nth-child(${i})`;\n    //        document.querySelector(mishtane).addEventListener('change', (e, y, i) => {\n            \n    //         let da = `#devices > div:nth-child(${i}) > input[type=\"checkbox\"]`;\n    //         let za = `#devices > div:nth-child(${y}) input[type='checkbox']:checked`;\n    //         let fa = `#devices > div:nth-child(${y}) > div`;\n\n    //         let gParnetCheckbox = document.querySelector(da);\n    //         let g1 =  document.querySelectorAll(za);\n\n    //         if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}\n    //        });\n\n    //        y += 2;\n    //     });\n    //     g += 2;\n    // }\n\n\n\n\n// function appendCheckboxes(devices1, devices2, devices3){\n    function appendCheckboxes(){\n        \n        let gfull = document.querySelectorAll(\"#devices > div:nth-child(2) > div\");\n        let gParnetCheckbox = document.querySelector('#devices > div:nth-child(1) > input[type=\"checkbox\"]');\n    \n    gfull.forEach((g, i) => {\n        i++; // === 1\n        let fst_grp_devices = `#devices > div:nth-child(2) > div:nth-child(${i})`;\n        document.querySelector(fst_grp_devices).addEventListener('change', check);\n    });\n    function check(e) {\n        let g1 =  document.querySelectorAll(\"#devices > div:nth-child(2) input[type='checkbox']:checked\");\n            if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}\n    }\n\n\n    // ====== group 1 ======= //\n\n    // let checkedItem1 = document.querySelector(\"#devices > div:nth-child(2) > div:nth-child(1)\").addEventListener('change', (e) => {\n    //     let g1 =  document.querySelectorAll(\"#devices > div:nth-child(2) input[type='checkbox']:checked\");\n    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}\n    // });\n    // let checkedItem2 = document.querySelector(\"#devices > div:nth-child(2) > div:nth-child(2)\").addEventListener('change', (e) => {\n    //     let g1 =  document.querySelectorAll(\"#devices > div:nth-child(2) input[type='checkbox']:checked\");\n    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}\n    // });\n    // let checkedItem3 = document.querySelector(\"#devices > div:nth-child(2) > div:nth-child(3)\").addEventListener('change', (e) => {\n    //     let g1 =  document.querySelectorAll(\"#devices > div:nth-child(2) input[type='checkbox']:checked\");\n    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}\n    // });\n    // let checkedItem4 = document.querySelector(\"#devices > div:nth-child(2) > div:nth-child(4)\").addEventListener('change', (e) => {\n    //     let g1 =  document.querySelectorAll(\"#devices > div:nth-child(2) input[type='checkbox']:checked\");\n    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}\n    // });\n    // let checkedItem5 = document.querySelector(\"#devices > div:nth-child(2) > div:nth-child(5)\").addEventListener('change', (e) => {\n    //     let g1 =  document.querySelectorAll(\"#devices > div:nth-child(2) input[type='checkbox']:checked\");\n    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}\n    // });\n    // let checkedItem6 = document.querySelector(\"#devices > div:nth-child(2) > div:nth-child(6)\").addEventListener('change', (e) => {\n    //     let g1 =  document.querySelectorAll(\"#devices > div:nth-child(2) input[type='checkbox']:checked\");\n    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}\n    // });\n    // let checkedItem7 = document.querySelector(\"#devices > div:nth-child(2) > div:nth-child(7)\").addEventListener('change', (e) => {\n    //     let g1 =  document.querySelectorAll(\"#devices > div:nth-child(2) input[type='checkbox']:checked\");\n    //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}\n    // });\n\n    // // ====== group 2 ======= //\n\n\n    // let gfull2 = document.querySelectorAll(\"#devices > div:nth-child(4) > div\");\n    // let gParnetCheckbox2 = document.querySelector('#devices > div:nth-child(3) > input[type=\"checkbox\"]');\n\n    // let checkedItem2_1 = document.querySelector(\"#devices > div:nth-child(4) > div:nth-child(1)\").addEventListener('change', (e) => {\n    //     let g2 =  document.querySelectorAll(\"#devices > div:nth-child(4) input[type='checkbox']:checked\");\n    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}\n    // });\n    // let checkedItem2_2 = document.querySelector(\"#devices > div:nth-child(4) > div:nth-child(2)\").addEventListener('change', (e) => {\n    //     let g2 =  document.querySelectorAll(\"#devices > div:nth-child(4) input[type='checkbox']:checked\");\n    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}\n    // });\n    // let checkedItem2_3 = document.querySelector(\"#devices > div:nth-child(4) > div:nth-child(3)\").addEventListener('change', (e) => {\n    //     let g2 =  document.querySelectorAll(\"#devices > div:nth-child(4) input[type='checkbox']:checked\");\n    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}\n    // });\n    // let checkedItem2_4 = document.querySelector(\"#devices > div:nth-child(4) > div:nth-child(4)\").addEventListener('change', (e) => {\n    //     let g2 =  document.querySelectorAll(\"#devices > div:nth-child(4) input[type='checkbox']:checked\");\n    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}\n    // });\n    // let checkedItem2_5 = document.querySelector(\"#devices > div:nth-child(4) > div:nth-child(5)\").addEventListener('change', (e) => {\n    //     let g2 =  document.querySelectorAll(\"#devices > div:nth-child(4) input[type='checkbox']:checked\");\n    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}\n    // });\n    // let checkedItem2_6 = document.querySelector(\"#devices > div:nth-child(4) > div:nth-child(6)\").addEventListener('change', (e) => {\n    //     let g2 =  document.querySelectorAll(\"#devices > div:nth-child(4) input[type='checkbox']:checked\");\n    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}\n    // });\n    // let checkedItem2_7 = document.querySelector(\"#devices > div:nth-child(4) > div:nth-child(7)\").addEventListener('change', (e) => {\n    //     let g2 =  document.querySelectorAll(\"#devices > div:nth-child(4) input[type='checkbox']:checked\");\n    //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}\n    // });\n\n    // // ====== group 3 ======= //\n\n    // let gfull3 = document.querySelectorAll(\"#devices > div:nth-child(6) > div\");\n    // let gParnetCheckbox3 = document.querySelector('#devices > div:nth-child(5) > input[type=\"checkbox\"]');\n\n    // let checkedItem3_1 = document.querySelector(\"#devices > div:nth-child(6) > div:nth-child(1)\").addEventListener('change', (e) => {\n    //     let g3 =  document.querySelectorAll(\"#devices > div:nth-child(6) input[type='checkbox']:checked\");\n    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}\n    // });\n    // let checkedItem3_2 = document.querySelector(\"#devices > div:nth-child(6) > div:nth-child(2)\").addEventListener('change', (e) => {\n    //     let g3 =  document.querySelectorAll(\"#devices > div:nth-child(6) input[type='checkbox']:checked\");\n    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}\n    // });\n    // let checkedItem3_3 = document.querySelector(\"#devices > div:nth-child(6) > div:nth-child(3)\").addEventListener('change', (e) => {\n    //     let g3 =  document.querySelectorAll(\"#devices > div:nth-child(6) input[type='checkbox']:checked\");\n    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}\n    // });\n    // let checkedItem3_4 = document.querySelector(\"#devices > div:nth-child(6) > div:nth-child(4)\").addEventListener('change', (e) => {\n    //     let g3 =  document.querySelectorAll(\"#devices > div:nth-child(6) input[type='checkbox']:checked\");\n    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}\n    // });\n    // let checkedItem3_5 = document.querySelector(\"#devices > div:nth-child(6) > div:nth-child(5)\").addEventListener('change', (e) => {\n    //     let g3 =  document.querySelectorAll(\"#devices > div:nth-child(6) input[type='checkbox']:checked\");\n    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}\n    // });\n    // let checkedItem3_6 = document.querySelector(\"#devices > div:nth-child(6) > div:nth-child(6)\").addEventListener('change', (e) => {\n    //     let g3 =  document.querySelectorAll(\"#devices > div:nth-child(6) input[type='checkbox']:checked\");\n    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}\n    // });\n    // let checkedItem3_7 = document.querySelector(\"#devices > div:nth-child(6) > div:nth-child(7)\").addEventListener('change', (e) => {\n    //     let g3 =  document.querySelectorAll(\"#devices > div:nth-child(6) input[type='checkbox']:checked\");\n    //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}\n    // });\n\n\n    let ghead1 = document.querySelector('#devices > div:nth-child(1)');\n    let dev1 = document.querySelector('#devices > div:nth-child(2)');\n    let device11 = document.querySelector('#devices > div:nth-child(2) > div:nth-child(1)');\n    let device17 = document.querySelector('#devices > div:nth-child(2) > div:nth-child(7)');\n    let ghead2 = document.querySelector('#devices > div:nth-child(3)');\n    let dev2 = document.querySelector('#devices > div:nth-child(4)');\n    let ghead3 = document.querySelector('#devices > div:nth-child(5)');\n    let dev3 = document.querySelector('#devices > div:nth-child(6)');\n\n\n    appendCheckToChildren();\n        // console.log(devices1)\n        // console.log(devices2)\n        // console.log(devices3)\n}\n\nfunction CheckboxesAppendCheckToParent(){\n    let gParnetCheckbox = document.querySelector('#devices > div:nth-child(1) > input[type=\"checkbox\"]');\n    let g1 =  document.querySelectorAll(\"#devices > div:nth-child(2) input[type='checkbox']\");\n    gParnetCheckbox.addEventListener('change', () => {\n        if(gParnetCheckbox.checked === true){\n            g1.forEach(d => { d.checked = true}) } else { g1.forEach(d => {d.checked = false}) }\n    })\n}\n\nfunction caret3Toggle() {\n    let group = document.querySelector('#devices > div:nth-child(6)')\n    console.log('works')\n    group.style.display = 'none';\n    let caret3 = document.querySelector('#devices > div:nth-child(5) > div > i');\n    // console.log(caret3) \n    let carretDown = document.querySelector('#devices > div:nth-child(5) > div > i')\n    carretDown.style.transform = 'rotate(-90deg)';\n    const groupBar = document.querySelector('#devices > div:nth-child(5)')\n        caret3.addEventListener('click', () => {\n            // console.log('clicked')\n            // const group = document.querySelector('.devices-3');\n            // const carretDown = document.querySelector('.caret-down-3');\n            if (group.style.display === 'none') {\n                group.style.display = 'flex';\n                group.style.transition = '400ms';\n                groupBar.style.borderRadius = '0';\n                carretDown.style.transform = 'rotate(0)';\n                carretDown.style.transition = '300ms'\n            } else {\n                group.style.display = 'none';\n                groupBar.style.borderRadius = '0 0 5px 5px';\n                carretDown.style.transform = 'rotate(-90deg)'\n                carretDown.style.transition = '300ms'\n            }\n        })\n}\n\nfunction clear(){\n    let checkedInputs = document.querySelectorAll('input[type=\"checkbox\"]:checked');\n    let checkedRadioInputs = document.querySelectorAll('input[type=\"radio\"]:checked');\n    Array.from(checkedInputs).map(item => {\n        item.checked = false;\n    })\n    Array.from(checkedRadioInputs).map(item => {\n        item.checked = false;\n    })\n}\n\n\n//     const carret3 = document.querySelector('.carret3');\n// let carretg3 = document.querySelector('#devices > div:nth-child(5)')\n// console.log(carretg3)\n\n\n//     const clrBtn = document.querySelector('.clrBtn');\n//     clrBtn.addEventListener('click', () => {\n//         console.log('clrBtn works')\n//     });\n\n//     const submit = document.querySelector('.submit');\n//     submit.addEventListener('click', () => {\n//         console.log('submit works')\n//     }); */\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function () {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
  var keys = Object.keys(obj);
  var descriptors = {};

  for (var i = 0; i < keys.length; i++) {
    descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
  }

  return descriptors;
};

var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  } // Allow for deprecating things in the process of starting up.


  if (typeof process === 'undefined') {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];

    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }

    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};

exports.promisify.custom = kCustomPromisifiedSymbol;

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }

  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  } // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.


  function callbackified() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();

    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }

    var self = this;

    var cb = function () {
      return maybeCb.apply(self, arguments);
    }; // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)


    original.apply(this, args).then(function (ret) {
      process.nextTick(cb, null, ret);
    }, function (rej) {
      process.nextTick(callbackifyOnRejected, rej, cb);
    });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
  return callbackified;
}

exports.callbackify = callbackify;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/css/globals.css":
/*!*****************************!*\
  !*** ./src/css/globals.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./globals.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/globals.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/globals.css */ "./src/css/globals.css");
/* harmony import */ var _css_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_globals_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


var templates = {}; // templates.protocolTemplate = `<div class="protocol"> 
//                     <div class='p_check' />
//                         <input type="checkbox" />                        
//                     </div>
//                     <div class="p_name">{{protocol_name}}</div>
//                 `;
// templates.timeTemplate = `<div class="protocol"> 
//                     <div class='p_check' />
//                         <input type="radio" />                        
//                     </div>
//                     <div class="p_name">{{time_name}}</div>
//                 `;

templates.summaryDevice = "<div class=\"deviceItem\"><p>{{device_name}}</p></div>";
templates.summaryProtocols = "<div class=\"protocolItem\"><p>{{protocol_s_name}}</p></div>";
templates.summaryTimes = "<div class=\"periodItem\"><p>{{time_s_name}}</p></div>";

(function init() {
  document.querySelector("#start").addEventListener("click", function (e) {
    createSummary();
  });
  document.querySelector("#clear").addEventListener("click", function (e) {
    clear();
  });
  loadData();
})();

function loadData() {
  fetch("./data/ex_data.json").then(function (res) {
    return res.json();
  }).then(function (data) {
    loadBDevicesByGroup(data.device_groups); // appendCheckboxes(data.device_groups.devices);

    CheckboxesAppendCheckToParent(data.device_groups); // appendCheckboxes(data.device_groups[0].devices, data.device_groups[1].devices, data.device_groups[2].devices);

    loadProtocols(data.protocols);
    loadTimes(data.times); // fetchIds(data.device_groups, data.protocols, data.times);

    caret3Toggle();
    appendCheckboxes();
  });
}

function loadBDevicesByGroup(groups) {
  var groupHtml = document.querySelector('.group');
  groups.forEach(function (group) {
    var ghead = document.createElement('div');
    ghead.classList.add('group-head');
    var car = document.createElement('div');
    car.classList.add('carret');
    car.innerHTML = '<i class="fas fa-caret-down"></i>';
    var gcheck = document.createElement('input');
    gcheck.type = 'checkbox';
    gcheck.name = group.name;
    gcheck.value = group.name;
    var gname = document.createElement('h4');
    gname.innerText = group.name;
    ghead.appendChild(car);
    ghead.appendChild(gcheck);
    ghead.appendChild(gname);
    var devices = document.createElement('div');
    devices.classList.add('devices');
    group.devices.forEach(function (device) {
      var div = document.createElement('div');
      div.classList.add('device');
      var p = document.createElement('p');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('checkbox');
      checkbox.dataset.name = device.name;
      checkbox.dataset.id = device.id;
      checkbox.checked = device.active === 1 ? true : false;
      p.innerText = device.name;
      div.appendChild(checkbox);
      div.appendChild(p);
      devices.appendChild(div);
    });
    groupHtml.appendChild(ghead);
    groupHtml.appendChild(devices);
  });
}

function loadProtocols(protocols) {
  var protocolsHtml = document.querySelector('#protocols');
  protocols.forEach(function (protocol) {
    var div = document.createElement('div');
    div.classList.add('protocol');
    var p = document.createElement('p');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.dataset.name = protocol.name;
    checkbox.dataset.id = protocol.id;
    checkbox.checked = protocol.active === 1 ? true : false;
    p.innerText = protocol.name;
    div.appendChild(checkbox);
    div.appendChild(p);
    protocolsHtml.appendChild(div); //     protocolsHtml.innerHTML += `
    //     <div class="protocol"> 
    //         <div class='p_check' />
    //             <input type="checkbox" id=${p.id}/>                        
    //         </div>
    //     <div class="p_name">${p.name}</div>
    // `
    // protocolsHtml.innerHTML += templates.protocolTemplate.replace("{{protocol_name}}", p.name);
    // console.log('p: ', p) 
  });
}

function loadTimes(times) {
  var timesHtml = document.querySelector('#times');
  times.forEach(function (time) {
    var div = document.createElement('div');
    div.classList.add('time');
    var p = document.createElement('p');
    p.classList.add('p_name');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'radio');
    checkbox.classList.add('p_check');
    checkbox.dataset.name = time.name;
    checkbox.dataset.id = time.id;
    checkbox.checked = time.active === 1 ? true : false;
    p.innerText = time.name;
    div.appendChild(checkbox);
    div.appendChild(p);
    timesHtml.appendChild(div); //     timesHtml.innerHTML += `
    //     <div class="protocol"> 
    //         <div class='p_check' />
    //             <input type="radio" id=${t.id}/>                        
    //         </div>
    //     <div class="p_name">${t.name}</div>
    // `;
    // timesHtml.innerHTML += templates.timeTemplate.replace("{{time_name}}", t.name);
  });
}

function createSummary() {
  var Arr1 = [];
  var Arr2 = [];
  var Arr3 = [];
  var devicesStr = 'ex.html?devices=';
  var summary = document.querySelector("#devicesSummary");
  summary.innerHTML = '';
  var elements = document.querySelectorAll("#devices input[type='checkbox']:checked"); // console.log(elements)

  elements.forEach(function (elm) {
    if (elm.checked) {
      console.log(elm);
      summary.innerHTML += templates.summaryDevice.replace("{{device_name}}", elm.dataset.name);

      if (elm.dataset.name !== undefined) {
        Arr1.push(elm.dataset.id);
      }
    }
  });
  var protocolsStr = '&protocols=';
  var protocolsSum = document.querySelector("#protocolsSummary");
  protocolsSum.innerHTML = '';
  var elmProtocols = document.querySelectorAll("#protocols input[type='checkbox']:checked"); // console.log('elmProtocols',elmProtocols)

  elmProtocols.forEach(function (p) {
    if (p.checked) {
      protocolsSum.innerHTML += templates.summaryProtocols.replace("{{protocol_s_name}}", p.dataset.name);
      Arr2.push(p.dataset.id);
    }
  });
  var timesStr = '&times=';
  var timesSum = document.querySelector("#periodSummary");
  timesSum.innerHTML = '';
  var elmTimes = document.querySelectorAll("#times input[type='radio']:checked"); // console.log(elmTimes)

  elmTimes.forEach(function (t) {
    if (t.checked) {
      timesSum.innerHTML += templates.summaryTimes.replace("{{time_s_name}}", t.dataset.name); // console.log('t.dataset.id',t.id)

      Arr3.push(t.dataset.id);
    }
  });
  var finalStr = '';
  finalStr = "".concat(devicesStr).concat(Arr1).concat(protocolsStr).concat(Arr2).concat(timesStr).concat(Arr3);
  createGetReq(finalStr);
} // function fetchIds(d, p, t) {
//     console.log(d)
//     console.log(p)
//     console.log(t)
//     d.forEach(g => {
//         // console.log(d[0].devices[0].id)
//     });
// }


function createGetReq(str) {
  console.log(str);
} // function check(e) {
//     let counter = 1;
//     let z = 2;
//     console.log("z: ", z)
//     console.log("counter: ", counter)
//     let da = `#devices > div:nth-child(${counter}) > input[type="checkbox"]`;
//     let za = `#devices > div:nth-child(${z}) input[type='checkbox']:checked`;
//     let fa = `#devices > div:nth-child(${z}) > div`;
//     let gfull = document.querySelectorAll(fa);
//     let gParnetCheckbox = document.querySelector(da);
//     let g1 =  document.querySelectorAll(za);
//     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
//     counter += 2;
//     z += 2;
// }
// for(let x = 1; x <= devices.length; x++) {
//     let g = 2;
//     let fa = `#devices > div:nth-child(${g}) > div`;
//     let gfull = document.querySelectorAll(fa);
//     gfull.forEach((g, i) => {
//         i++; // === 1
//         let y = 2;
//        let mishtane = `#devices > div:nth-child(${y}) > div:nth-child(${i})`;
//        document.querySelector(mishtane).addEventListener('change', (e, y, i) => {
//         let da = `#devices > div:nth-child(${i}) > input[type="checkbox"]`;
//         let za = `#devices > div:nth-child(${y}) input[type='checkbox']:checked`;
//         let fa = `#devices > div:nth-child(${y}) > div`;
//         let gParnetCheckbox = document.querySelector(da);
//         let g1 =  document.querySelectorAll(za);
//         if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
//        });
//        y += 2;
//     });
//     g += 2;
// }
// function appendCheckboxes(devices1, devices2, devices3){


function appendCheckboxes() {
  var gfull1 = document.querySelectorAll("#devices > div:nth-child(2) > div");
  var gParnetCheckbox1 = document.querySelector('#devices > div:nth-child(1) > input[type="checkbox"]');
  gfull1.forEach(function (g, i) {
    i++; // === 1

    var fst_grp_devices = "#devices > div:nth-child(2) > div:nth-child(".concat(i, ")");
    document.querySelector(fst_grp_devices).addEventListener('change', check);
  });

  function check(e) {
    var g1 = document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");

    if (g1.length === gfull1.length) {
      gParnetCheckbox1.checked = true;
    } else {
      gParnetCheckbox1.checked = false;
    }
  }

  var gfull2 = document.querySelectorAll("#devices > div:nth-child(4) > div");
  var gParnetCheckbox2 = document.querySelector('#devices > div:nth-child(3) > input[type="checkbox"]');
  gfull2.forEach(function (g, i) {
    i++; // === 1

    var fst_grp_devices = "#devices > div:nth-child(4) > div:nth-child(".concat(i, ")");
    document.querySelector(fst_grp_devices).addEventListener('change', check2);
  });

  function check2(e) {
    var g2 = document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");

    if (g2.length === gfull2.length) {
      gParnetCheckbox2.checked = true;
    } else {
      gParnetCheckbox2.checked = false;
    }
  }

  var gfull3 = document.querySelectorAll("#devices > div:nth-child(6) > div");
  var gParnetCheckbox3 = document.querySelector('#devices > div:nth-child(5) > input[type="checkbox"]');
  gfull3.forEach(function (g, i) {
    i++; // === 1

    var fst_grp_devices = "#devices > div:nth-child(6) > div:nth-child(".concat(i, ")");
    document.querySelector(fst_grp_devices).addEventListener('change', check3);
  });

  function check3(e) {
    var g3 = document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");

    if (g3.length === gfull3.length) {
      gParnetCheckbox3.checked = true;
    } else {
      gParnetCheckbox3.checked = false;
    }
  } // ====== group 1 ======= //
  // let checkedItem1 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(1)").addEventListener('change', (e) => {
  //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
  //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
  // });
  // let checkedItem2 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(2)").addEventListener('change', (e) => {
  //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
  //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
  // });
  // let checkedItem3 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(3)").addEventListener('change', (e) => {
  //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
  //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
  // });
  // let checkedItem4 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(4)").addEventListener('change', (e) => {
  //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
  //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
  // });
  // let checkedItem5 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(5)").addEventListener('change', (e) => {
  //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
  //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
  // });
  // let checkedItem6 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(6)").addEventListener('change', (e) => {
  //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
  //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
  // });
  // let checkedItem7 = document.querySelector("#devices > div:nth-child(2) > div:nth-child(7)").addEventListener('change', (e) => {
  //     let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']:checked");
  //     if(g1.length === gfull.length) {gParnetCheckbox.checked = true} else {gParnetCheckbox.checked = false}
  // });
  // // ====== group 2 ======= //
  // let gfull2 = document.querySelectorAll("#devices > div:nth-child(4) > div");
  // let gParnetCheckbox2 = document.querySelector('#devices > div:nth-child(3) > input[type="checkbox"]');
  // let checkedItem2_1 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(1)").addEventListener('change', (e) => {
  //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
  //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
  // });
  // let checkedItem2_2 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(2)").addEventListener('change', (e) => {
  //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
  //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
  // });
  // let checkedItem2_3 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(3)").addEventListener('change', (e) => {
  //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
  //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
  // });
  // let checkedItem2_4 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(4)").addEventListener('change', (e) => {
  //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
  //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
  // });
  // let checkedItem2_5 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(5)").addEventListener('change', (e) => {
  //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
  //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
  // });
  // let checkedItem2_6 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(6)").addEventListener('change', (e) => {
  //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
  //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
  // });
  // let checkedItem2_7 = document.querySelector("#devices > div:nth-child(4) > div:nth-child(7)").addEventListener('change', (e) => {
  //     let g2 =  document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']:checked");
  //     if(g2.length === gfull2.length) {gParnetCheckbox2.checked = true} else {gParnetCheckbox2.checked = false}
  // });
  // // ====== group 3 ======= //
  // let gfull3 = document.querySelectorAll("#devices > div:nth-child(6) > div");
  // let gParnetCheckbox3 = document.querySelector('#devices > div:nth-child(5) > input[type="checkbox"]');
  // let checkedItem3_1 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(1)").addEventListener('change', (e) => {
  //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
  //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
  // });
  // let checkedItem3_2 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(2)").addEventListener('change', (e) => {
  //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
  //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
  // });
  // let checkedItem3_3 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(3)").addEventListener('change', (e) => {
  //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
  //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
  // });
  // let checkedItem3_4 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(4)").addEventListener('change', (e) => {
  //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
  //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
  // });
  // let checkedItem3_5 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(5)").addEventListener('change', (e) => {
  //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
  //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
  // });
  // let checkedItem3_6 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(6)").addEventListener('change', (e) => {
  //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
  //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
  // });
  // let checkedItem3_7 = document.querySelector("#devices > div:nth-child(6) > div:nth-child(7)").addEventListener('change', (e) => {
  //     let g3 =  document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']:checked");
  //     if(g3.length === gfull3.length) {gParnetCheckbox3.checked = true} else {gParnetCheckbox3.checked = false}
  // });


  var ghead1 = document.querySelector('#devices > div:nth-child(1)');
  var dev1 = document.querySelector('#devices > div:nth-child(2)');
  var device11 = document.querySelector('#devices > div:nth-child(2) > div:nth-child(1)');
  var device17 = document.querySelector('#devices > div:nth-child(2) > div:nth-child(7)');
  var ghead2 = document.querySelector('#devices > div:nth-child(3)');
  var dev2 = document.querySelector('#devices > div:nth-child(4)');
  var ghead3 = document.querySelector('#devices > div:nth-child(5)');
  var dev3 = document.querySelector('#devices > div:nth-child(6)'); // appendCheckToChildren();
  // console.log(devices1)
  // console.log(devices2)
  // console.log(devices3)
}

function CheckboxesAppendCheckToParent(groups) {
  var gParnetCheckbox1 = document.querySelector('#devices > div:nth-child(1) > input[type="checkbox"]');
  var g1 = document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']");
  gParnetCheckbox1.addEventListener('change', function () {
    if (gParnetCheckbox1.checked === true) {
      g1.forEach(function (d) {
        d.checked = true;
      });
    } else {
      g1.forEach(function (d) {
        d.checked = false;
      });
    }
  });
  var gParnetCheckbox2 = document.querySelector('#devices > div:nth-child(3) > input[type="checkbox"]');
  var g2 = document.querySelectorAll("#devices > div:nth-child(4) input[type='checkbox']");
  gParnetCheckbox2.addEventListener('change', function () {
    if (gParnetCheckbox2.checked === true) {
      g2.forEach(function (d) {
        d.checked = true;
      });
    } else {
      g2.forEach(function (d) {
        d.checked = false;
      });
    }
  });
  var gParnetCheckbox3 = document.querySelector('#devices > div:nth-child(5) > input[type="checkbox"]');
  var g3 = document.querySelectorAll("#devices > div:nth-child(6) input[type='checkbox']");
  gParnetCheckbox3.addEventListener('change', function () {
    if (gParnetCheckbox3.checked === true) {
      g3.forEach(function (d) {
        d.checked = true;
      });
    } else {
      g3.forEach(function (d) {
        d.checked = false;
      });
    }
  }); // let j = 1;
  // let i = 1;
  // let y = 2;
  // groups.forEach(group => {
  //     console.log('group: ' ,group, 'i:', i)
  //     console.log(document.querySelector(`#devices > div:nth-child(${i}) > input[type="checkbox"]`));  // parent
  //     // let g1 =  document.querySelectorAll("#devices > div:nth-child(2) input[type='checkbox']");
  //     group.devices.forEach((device, j) => {
  //         j++
  //         console.log('device: ', device, 'y: ', y, 'j : ', j)
  //         console.log(document.querySelector(`#devices > div:nth-child(${y}) > div:nth-child(${j}) input[type='checkbox']`)) // device
  //     })
  //     // i.addEventListener('change', () => {
  //     //     if(i.checked === true){
  //     //         group.devices.forEach(device => { j.checked = true }) } else { group.devices.forEach(device => { j.checked = false }) };
  //     // })  
  //     y+=2
  //     i+=2
  // })
}

function caret3Toggle() {
  var group = document.querySelector('#devices > div:nth-child(6)');
  group.style.display = 'none';
  var caret3 = document.querySelector('#devices > div:nth-child(5) > div > i'); // console.log(caret3) 

  var carretDown = document.querySelector('#devices > div:nth-child(5) > div > i');
  carretDown.style.transform = 'rotate(-90deg)';
  var groupBar = document.querySelector('#devices > div:nth-child(5)');
  caret3.addEventListener('click', function () {
    // console.log('clicked')
    // const group = document.querySelector('.devices-3');
    // const carretDown = document.querySelector('.caret-down-3');
    if (group.style.display === 'none') {
      group.style.display = 'flex';
      group.style.transition = '400ms';
      groupBar.style.borderRadius = '0';
      carretDown.style.transform = 'rotate(0)';
      carretDown.style.transition = '300ms';
    } else {
      group.style.display = 'none';
      groupBar.style.borderRadius = '0 0 5px 5px';
      carretDown.style.transform = 'rotate(-90deg)';
      carretDown.style.transition = '300ms';
    }
  });
}

function clear() {
  var checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked');
  var checkedRadioInputs = document.querySelectorAll('input[type="radio"]:checked');
  Array.from(checkedInputs).map(function (item) {
    item.checked = false;
  });
  Array.from(checkedRadioInputs).map(function (item) {
    item.checked = false;
  });
} //     const carret3 = document.querySelector('.carret3');
// let carretg3 = document.querySelector('#devices > div:nth-child(5)')
// console.log(carretg3)
//     const clrBtn = document.querySelector('.clrBtn');
//     clrBtn.addEventListener('click', () => {
//         console.log('clrBtn works')
//     });
//     const submit = document.querySelector('.submit');
//     submit.addEventListener('click', () => {
//         console.log('submit works')
//     });

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map