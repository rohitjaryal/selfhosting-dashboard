import pm2ProxyHandler from "./proxy";

console.log('pm2 loaded')
const widget = {
  api: "{url}/api/v2?apikey={key}&cmd={endpoint}",
  proxyHandler: pm2ProxyHandler,

  mappings: {
    get_activity: {
      endpoint: "get_activity",
    },
  },
};

export default widget;
