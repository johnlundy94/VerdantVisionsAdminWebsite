const config = {
  websocketUrl:
    process.env.REACT_APP_WS_API_GATEWAY_URL || "ws://localhost:8080",
};

console.log(
  "WebSocket URL from environment:",
  process.env.REACT_APP_WS_API_GATEWAY_URL
);
console.log("WebSocket URL in config:", config.websocketUrl);

export default config;
