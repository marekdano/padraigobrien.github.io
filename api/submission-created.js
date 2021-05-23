
const fetch = require("node-fetch");


exports.handler = async (event) => {

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "podge@podge.com" }),
      };
      
      return fetch(
        "https://x7yh3592qk.execute-api.eu-west-1.amazonaws.com/Prod",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
            console.log(`Submitted to Buttondown:\n ${data}`);
          })
        .catch((error) => ({ statusCode: 422, body: String(error) }));
};



