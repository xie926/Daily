var countSegments = function(s) {
  return (/\S+/g).test(s) ? s.match(/[\S]+/g).length : 0
};