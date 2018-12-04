function Joystick(opt) {
  
  // if (!opt.zone) return;
  // var disabledColor = opt && opt.disabledColor || true;
  // console.log("opt"+opt.zone);
  // this.options = {
  //   mode: opt && opt.mode || 'static',
  //   size: opt && opt.size || 300,
  //   color: disabledColor ? 'ddd' : (opt && opt.color || '#eee'),
  //   position: opt && opt.position || {
  //     left: '50%',
  //     top: '50%'
  //   },
  //  zone: opt && opt.zone
  // };
  this.options = {
    mode: 'static',
    size:  300,
    color: '#eee',
    position: {
      left: '50%',
      top: '50%'
    },
   //zone: opt && opt.zone
  };

  this.distance = 0;
  this.angle = null;
  this.time = null;
}

Joystick.prototype.init = function() {
  var manager = nipplejs.create(this.options);
  this.manager = manager;
  this._on();
  return this;
}

Joystick.prototype._on = function() {
  //var me = this;
  this.manager
    .on('start', function (evt, data) {
      // me.time = setInterval(() => {
      //   me.onStart && me.onStart(me.distance,me.angle);
      // }, 100);
      console.log("start" + data);
    })
    .on('move', function (evt, data) {
    //   if (data.direction) {
    //     me.angle = data.direction.angle;
    //     me.distance = data.distance;
    //   }
    console.log("move" + data);
     }
    )
    .on('end', function (evt, data) {
      // clearInterval(me.time);
      // me.onEnd && me.onEnd();
      console.log("end" + data);
    });
}