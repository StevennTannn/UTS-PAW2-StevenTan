var createError = require('http-errors');
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var pariwisatasRouter = require('./routes/stevens');

const mongoose = require("mongoose");

mongoose.connect(
    'mongodb://localhost:27017/dbPariwisata'
).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    // console.error('App starting error:', err.stack);
    console.log("Connection Failed");
});

app.use('/', pariwisatasRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;