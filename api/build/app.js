"use strict";

var _dotenv = require("dotenv");
var _express = _interopRequireDefault(require("express"));
var _routes = _interopRequireDefault(require("./routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _dotenv.config)();
const app = (0, _express.default)();
const port = process.env.PORT || 3000;
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_routes.default);
app.listen(port, () => console.log(`App listening on ${port}`));