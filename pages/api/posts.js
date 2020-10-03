import { createProxyMiddleware } from "http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createProxyMiddleware({
  target: "http://jsonplaceholder.typicode.com/posts",
  changeOrigin: true,
});
