import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevmiddleware from 'webpack-dev-middleware';
import webpackHotmiddleware from 'webpack-hot-middleware';
import open from 'open';

import webpackconfig from '../../webpack.config.babel';

const port = process.env.PORT || 8080;

const isDevelopment = process.env.NODE_ENV !== 'production';

const app= express();

app.use(express.static(path.join(__dirname, '../public')))

const webpackCompiler = webpack(webpackconfig);
if(isDevelopment){
    app.use(webpackDevmiddleware(webpackCompiler));
    app.use(webpackHotmiddleware(webpackCompiler));
}

app.get('*', (req, res) => {
    console.log(req);
    console.log(res);
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
})

app.listen(port, err => {
    if(!err){
        open('http://localhost:'+8080);
    }
})