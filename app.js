var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var routes = require('./routes/routes');
var passport = require('passport');
var app = express();
var port= 3000;
var io = require('socket.io')(app.listen(port));
var SerialPort = require('serialport');


//Tutorial: https://www.youtube.com/watch?v=WnmymruDag4
//VersionNode: 6.10.2


var sp = new SerialPort('/COM4', {
   baudRate: 9600,
   parser: SerialPort.parsers.readline('\n')
});



require('./passport/passport')(passport);



sp.on("data", function(data){
  console.log(JSON.parse(data));
  //envio json como una variable datos para recibirlos en html
  io.emit('datos',JSON.parse(data));
  ;
});


io.on('connection', function(socket){
  socket.on('pluvial', function(d){   //PARA ENTRADA A EL ARDUINO 
    //escribe en el puerto de arduino
    //o arduino interpreta ligar o desligar led
    sp.write(d);
    console.log(d);
  });
  socket.on('potable', function(d){   //PARA ENTRADA A EL ARDUINO 
    //escribe en el puerto de arduino
    //o arduino interpreta ligar o desligar led
    sp.write(d);
    console.log(d);
  });
  socket.on('serv1', function(d){   //PARA ENTRADA A EL ARDUINO 
    //escribe en el puerto de arduino
    //o arduino interpreta ligar o desligar led
    sp.write(d);
    console.log(d);
  });
   socket.on('serv2', function(d){   //PARA ENTRADA A EL ARDUINO 
    //escribe en el puerto de arduino
    //o arduino interpreta ligar o desligar led
    sp.write(d);
    console.log(d);
  });



});


app.use(cookieParser());
app.use(session({
	secret: 'secret',  
	resave : false,
	saveUninitialized: false
}));

app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

sp.on('close', function(){console.log('servidor desconectado!');});

sp.on('eroor', function(err){console.error('eroor', err);});

sp.on('open', function(){console.log('servidor conectado: http://localhost:'+ port);

});

module.exports = app;
