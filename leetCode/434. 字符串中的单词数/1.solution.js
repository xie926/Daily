var countSegments = function(s) {
  return s.length>0 ? s.split(' ').filter(item => item.trim() !== '').length : 0
};