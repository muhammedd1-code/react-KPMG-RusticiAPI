const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(createProxyMiddleware('/api2', {
        target: 'https://kpmg-dev.engine.scorm.com/RusticiEngine/api/v2/',
        changeOrigin: true,
        pathRewrite: { '^/api2': '' }
     }
    )
  );
};