import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevmiddleware from 'webpack-dev-middleware';
import webpackHotmiddleware from 'webpack-hot-middleware';
import open from 'open';

import webpackconfig from '../../webpack.config.dev';

const port = 3000;

const app= express();

const webpackCompiler = webpack(webpackconfig);
app.use(webpackDevmiddleware(webpackCompiler));
app.use(webpackHotmiddleware(webpackCompiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, err => {
    if(!err){
        open('htp://localhost:${port}');
    }
})