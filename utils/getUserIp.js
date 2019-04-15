module.exports = function (req) {
  if (req) {
    var ip =
      req.headers['x-forwarded-for'] ||
      req.ip ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress ||
      ''
    if (ip.split(',').length > 0) {
      ip = ip.split(',')[0]
    }
    return ip
  } else {
    return ''
  }
}
