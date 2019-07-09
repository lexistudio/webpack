var stylus = require('stylus')
  , Canvas = require('canvas')
  , nodes = stylus.nodes
  , utils = stylus.utils;

function Gradient(size, start) {
  this.size = size;
  this.canvas = new Canvas(1, 1);
  this.setStartPosition(start);
  this.ctx = this.canvas.getContext('2d');
  this.grad = this.ctx.createLinearGradient(
      this.from[0], this.from[1], this.to[0], this.to[1]
  );
}

Gradient.prototype.toString = function () {
  return 'Gradient(' + this.size + 'px '
       + this.stops.map(function(stop){
       return stop[0] + ' ' + stop[1];
  }).join(', ') + ')';
}

Gradient.prototype.setStartPosition = function(start){
  var size = this.size
    , canvas = this.canvas;

  switch (start) {
    case 'top':
      canvas.height = size;
      this.from = [canvas.width / 2, 0];
      this.to = [canvas.width / 2, canvas.height];
      break;
    case 'bottom':
      canvas.height = size;
      this.from = [canvas.width / 2, canvas.height];
      this.to = [canvas.width / 2, 0];
      break;
    case 'left':
      canvas.width = size;
      this.from = [0, 0];
      this.to = [canvas.width, canvas.height];
      break;
    case 'right':
      canvas.width = size;
      this.from = [canvas.width, canvas.height];
      this.to = [0, 0];
      break;
    default:
      throw new Error('invalid start position "' + start + '"');
  }
};

/**
 * Add color stop `pos` / `color`.
 *
 * @param {Number} pos
 * @param {String} color
 * @api private
 */

Gradient.prototype.addColorStop = function(pos, color){
  this.grad.addColorStop(pos, color);
};

/**
 * Return data URI string.
 *
 * @return {String}
 * @api private
 */

Gradient.prototype.toDataURL = function(){
  var canvas = this.canvas
    , ctx = this.ctx;
  ctx.fillStyle = this.grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return canvas.toDataURL();
};

Gradient.prototype.__proto__ = nodes.Node.prototype;

var plugin = function() {
  return function (style) {
    if (Canvas) {
      style.define('has-canvas', nodes.true);

      style.define('-linear-gradient-add-stop', function (grad, pos, color) {
        utils.assertType(grad, 'gradient', 'grad');
        utils.assertType(pos, 'unit', 'pos');
        utils.assertColor(color, 'color');
        grad.addColorStop(pos.val / 100, color.rgba.toString());
        return nodes.null;
      });
      style.define('-linear-gradient-data-uri', function (grad) {
        utils.assertType(grad, 'gradient');
        return new nodes.String(grad.toDataURL());
      });
      style.define('-linear-gradient-create-image', function (size, start) {
        utils.assertType(size, 'unit', 'size');
        utils.assertString(start, 'start');
        return new Gradient(size.val, start.string);
      });
    }
  };
}

module.exports = plugin;
