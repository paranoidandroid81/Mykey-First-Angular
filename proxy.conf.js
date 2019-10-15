const PROXY_CONFIG = {
  '/api/getcurr': {
    'target': 'https://api.spotify.com',
    'secure': false,
    "logLevel": "debug",
    'changeOrigin': true,
    'pathRewrite': {
      '^/api/getcurr': '/v1/me/player/currently-playing'
    },
    "onProxyReq": function(proxyReq, req, res){
      //console.log(`req: ${JSON.stringify(req)}`);
      console.log(`proxyReq: ${proxyReq.getHeader('Authorization')}`);
      //proxyReq.setHeader('Authorization', req.headers['Authorization']);
    },
    "onProxyRes": function(proxyRes, req, res){
    }
  }
}

module.exports = PROXY_CONFIG;
