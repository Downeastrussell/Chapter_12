(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const apiManager = {
  fetchAllContacts: () => {
    return fetch("http://localhost:8088/contacts").then(contact => contact.json());
  },
  POSTcontact: newContact => {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    });
  }
};
var _default = apiManager;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apiManager = _interopRequireDefault(require("./apiManager"));

var _printDOM = _interopRequireDefault(require("./printDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const saveContact = () => {
  document.querySelector("#save").addEventListener("click", () => {
    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const address = document.querySelector("#address").value;
    const newContact = {
      name: name,
      phone: phone,
      address: address
    };
    console.log(newContact);

    _apiManager.default.POSTcontact(newContact);

    _apiManager.default.fetchAllContacts();

    (0, _printDOM.default)();
  });
};

var _default = saveContact;
exports.default = _default;

},{"./apiManager":1,"./printDOM":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const contactForm = `<fieldset id="form">
<legend>Save New Contact</legend>

<div>
  <label>Name:</label> <input type="text" id="name" >
</div>
<div>
  <label>Phone #:</label> <input type="text" id="phone">
</div>
<div>
  <label>Address:</label> <input type="text" id="address">
</div>
</fieldset>`;
const saveButton = `<div class="button">
<button type="submit" id="save">Save Contact</button>
</div>`;
const build = {
  Form: () => {
    document.querySelector("#formArea").innerHTML = contactForm;
  },
  Button: () => {
    document.querySelector("#saveButton").innerHTML = saveButton;
  }
};
var _default = build;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _buildFORM = _interopRequireDefault(require("./buildFORM.js"));

var _buildContact = _interopRequireDefault(require("./buildContact.js"));

var _printDOM = _interopRequireDefault(require("./printDOM.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_buildFORM.default.Form();

_buildFORM.default.Button();

(0, _buildContact.default)();
(0, _printDOM.default)();

},{"./buildContact.js":2,"./buildFORM.js":3,"./printDOM.js":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function printDOM() {
  document.querySelector("#DOM").innerHTML = "";
  fetch("http://localhost:8088/contacts", {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(employees => employees.json()).then(employeeData => {
    employeeData.forEach(Element => {
      document.querySelector("#DOM").innerHTML += `<fieldset class="form">
            <legend>Contact #${Element.id}</legend>
            <div>Name: ${Element.name}</div>
            <div>Phone: ${Element.phone}</div>
            <div>Address: ${Element.address}</div></fieldset>`;
    });
  });
}

var _default = printDOM;
exports.default = _default;

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2FwaU1hbmFnZXIuanMiLCIuLi9zY3JpcHRzL2J1aWxkQ29udGFjdC5qcyIsIi4uL3NjcmlwdHMvYnVpbGRGT1JNLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9wcmludERPTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE1BQU0sVUFBVSxHQUFHO0FBQ2YsRUFBQSxnQkFBZ0IsRUFBQyxNQUFLO0FBQ2xCLFdBQU8sS0FBSyxDQUFDLGdDQUFELENBQUwsQ0FDRixJQURFLENBQ0csT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFSLEVBRGQsQ0FBUDtBQUVILEdBSmM7QUFLZixFQUFBLFdBQVcsRUFBSSxVQUFELElBQWU7QUFDekIsV0FBTyxLQUFLLENBQUMsZ0NBQUQsRUFBbUM7QUFDL0MsTUFBQSxNQUFNLEVBQUUsTUFEdUM7QUFFL0MsTUFBQSxPQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWCxPQUZzQztBQUsvQyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLFVBQWY7QUFMeUMsS0FBbkMsQ0FBWjtBQU9IO0FBYmMsQ0FBbkI7ZUFnQmUsVTs7Ozs7Ozs7Ozs7QUNoQmY7O0FBQ0E7Ozs7QUFFQSxNQUFNLFdBQVcsR0FBRyxNQUFLO0FBQUMsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxnQkFBaEMsQ0FBaUQsT0FBakQsRUFBMEQsTUFBSztBQUNyRixVQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxLQUE3QztBQUNBLFVBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLEtBQS9DO0FBQ0EsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsRUFBbUMsS0FBbkQ7QUFLRSxVQUFNLFVBQVUsR0FBRztBQUNsQixNQUFBLElBQUksRUFBQyxJQURhO0FBRWxCLE1BQUEsS0FBSyxFQUFDLEtBRlk7QUFHbEIsTUFBQSxPQUFPLEVBQUM7QUFIVSxLQUFuQjtBQU9GLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaOztBQUNBLHdCQUFXLFdBQVgsQ0FBdUIsVUFBdkI7O0FBQ0Esd0JBQVcsZ0JBQVg7O0FBQ0E7QUFLSCxHQXZCeUI7QUF1QnZCLENBdkJIOztlQXlCZSxXOzs7Ozs7Ozs7O0FDNUJmLE1BQU0sV0FBVyxHQUFJOzs7Ozs7Ozs7Ozs7WUFBckI7QUFjQSxNQUFNLFVBQVUsR0FBSTs7T0FBcEI7QUFNQSxNQUFNLEtBQUssR0FBRztBQUNWLEVBQUEsSUFBSSxFQUFHLE1BQUs7QUFBQyxJQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLEVBQW9DLFNBQXBDLEdBQWdELFdBQWhEO0FBQTRELEdBRC9EO0FBSVYsRUFBQSxNQUFNLEVBQUUsTUFBTTtBQUFDLElBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsU0FBdEMsR0FBa0QsVUFBbEQ7QUFBNkQ7QUFKbEUsQ0FBZDtlQVNlLEs7Ozs7OztBQzdCZjs7QUFDQTs7QUFDQTs7OztBQUVBLG1CQUFNLElBQU47O0FBQ0EsbUJBQU0sTUFBTjs7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDUEEsU0FBUyxRQUFULEdBQW9CO0FBQ2hCLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsU0FBL0IsR0FBMkMsRUFBM0M7QUFDSixFQUFBLEtBQUssQ0FBQyxnQ0FBRCxFQUFtQztBQUNwQyxJQUFBLE9BQU8sRUFBRTtBQUNMLHNCQUFnQjtBQURYO0FBRDJCLEdBQW5DLENBQUwsQ0FLSyxJQUxMLENBS1UsU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFWLEVBTHZCLEVBTUssSUFOTCxDQU1VLFlBQVksSUFBSTtBQUVsQixJQUFBLFlBQVksQ0FBQyxPQUFiLENBQXFCLE9BQU8sSUFBSTtBQUlqQyxNQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLEVBQStCLFNBQS9CLElBQTZDOytCQUNyQixPQUFPLENBQUMsRUFBRzt5QkFDakIsT0FBTyxDQUFDLElBQUs7MEJBQ1osT0FBTyxDQUFDLEtBQU07NEJBQ1osT0FBTyxDQUFDLE9BQVEsbUJBSnJDO0FBTUYsS0FWRztBQVdILEdBbkJMO0FBbUJPOztlQUVRLFEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhcGlNYW5hZ2VyID0ge1xyXG4gICAgZmV0Y2hBbGxDb250YWN0czooKSA9PntcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdHNcIilcclxuICAgICAgICAgICAgLnRoZW4oY29udGFjdCA9PiBjb250YWN0Lmpzb24oKSlcclxuICAgIH0sXHJcbiAgICBQT1NUY29udGFjdCA6IChuZXdDb250YWN0KSA9PntcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdHNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3Q29udGFjdClcclxuICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaU1hbmFnZXI7IiwiaW1wb3J0IGFwaU1hbmFnZXIgZnJvbSBcIi4vYXBpTWFuYWdlclwiO1xyXG5pbXBvcnQgcHJpbnRET00gZnJvbSBcIi4vcHJpbnRET01cIjtcclxuXHJcbmNvbnN0IHNhdmVDb250YWN0ID0gKCk9PiB7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIikudmFsdWVcclxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZVwiKS52YWx1ZVxyXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkcmVzc1wiKS52YWx1ZVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgY29uc3QgbmV3Q29udGFjdCA9IHtcclxuICAgICAgIG5hbWU6bmFtZSxcclxuICAgICAgIHBob25lOnBob25lLFxyXG4gICAgICAgYWRkcmVzczphZGRyZXNzLFxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhuZXdDb250YWN0KVxyXG4gICAgYXBpTWFuYWdlci5QT1NUY29udGFjdChuZXdDb250YWN0KTtcclxuICAgIGFwaU1hbmFnZXIuZmV0Y2hBbGxDb250YWN0cygpO1xyXG4gICAgcHJpbnRET00oKTtcclxuXHJcblxyXG5cclxuXHJcbn0pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2F2ZUNvbnRhY3QiLCJjb25zdCBjb250YWN0Rm9ybSA9IGA8ZmllbGRzZXQgaWQ9XCJmb3JtXCI+XHJcbjxsZWdlbmQ+U2F2ZSBOZXcgQ29udGFjdDwvbGVnZW5kPlxyXG5cclxuPGRpdj5cclxuICA8bGFiZWw+TmFtZTo8L2xhYmVsPiA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiA+XHJcbjwvZGl2PlxyXG48ZGl2PlxyXG4gIDxsYWJlbD5QaG9uZSAjOjwvbGFiZWw+IDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGhvbmVcIj5cclxuPC9kaXY+XHJcbjxkaXY+XHJcbiAgPGxhYmVsPkFkZHJlc3M6PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGRyZXNzXCI+XHJcbjwvZGl2PlxyXG48L2ZpZWxkc2V0PmBcclxuXHJcbmNvbnN0IHNhdmVCdXR0b24gPSBgPGRpdiBjbGFzcz1cImJ1dHRvblwiPlxyXG48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNhdmVcIj5TYXZlIENvbnRhY3Q8L2J1dHRvbj5cclxuPC9kaXY+YFxyXG5cclxuXHJcblxyXG5jb25zdCBidWlsZCA9IHtcclxuICAgIEZvcm0gOiAoKSA9Pntkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1BcmVhXCIpLmlubmVySFRNTCA9IGNvbnRhY3RGb3JtfSxcclxuXHJcblxyXG4gICAgQnV0dG9uOiAoKSA9PiB7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlQnV0dG9uXCIpLmlubmVySFRNTCA9IHNhdmVCdXR0b259XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVpbGQiLCJpbXBvcnQgYnVpbGQgZnJvbSBcIi4vYnVpbGRGT1JNLmpzXCJcclxuaW1wb3J0IHNhdmVDb250YWN0IGZyb20gXCIuL2J1aWxkQ29udGFjdC5qc1wiXHJcbmltcG9ydCBwcmludERPTSBmcm9tIFwiLi9wcmludERPTS5qc1wiXHJcblxyXG5idWlsZC5Gb3JtKCk7XHJcbmJ1aWxkLkJ1dHRvbigpO1xyXG5zYXZlQ29udGFjdCgpO1xyXG5wcmludERPTSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiZnVuY3Rpb24gcHJpbnRET00oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0RPTVwiKS5pbm5lckhUTUwgPSBcIlwiXHJcbmZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RzXCIsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbn0pXHJcbiAgICAudGhlbihlbXBsb3llZXMgPT4gZW1wbG95ZWVzLmpzb24oKSlcclxuICAgIC50aGVuKGVtcGxveWVlRGF0YSA9PiB7XHJcblxyXG4gICAgICAgIGVtcGxveWVlRGF0YS5mb3JFYWNoKEVsZW1lbnQgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNET01cIikuaW5uZXJIVE1MICs9IGA8ZmllbGRzZXQgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgIDxsZWdlbmQ+Q29udGFjdCAjJHtFbGVtZW50LmlkfTwvbGVnZW5kPlxyXG4gICAgICAgICAgICA8ZGl2Pk5hbWU6ICR7RWxlbWVudC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlBob25lOiAke0VsZW1lbnQucGhvbmV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+QWRkcmVzczogJHtFbGVtZW50LmFkZHJlc3N9PC9kaXY+PC9maWVsZHNldD5gXHJcblxyXG4gICAgfSlcclxuICAgIH0pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpbnRET01cclxuIl19
