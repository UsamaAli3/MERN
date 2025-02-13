const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AVNKaDxIz4ZNvChBU3M35WRshWt_WyDgnYJplcFGaSWUwnLrAmCmFIRR6ZijpdMQtPydPbjhqVC56rG-",
  client_secret:
    "EPjH8w8GQWCnCkkv20HYhwwW6HrH38baXyZ6Inp5W0kBCkzsqGdmhlXdKdHKJU473ITX448G_XqwFcll",
});

module.exports = paypal;
