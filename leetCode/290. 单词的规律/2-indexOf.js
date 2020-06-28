var wordPattern = function (pattern, str) {
  var str = str.split(' ');
  if (pattern.length !== str.length) return false;
  for (var i = 0; i < pattern.length; i++) {
    if (pattern.indexOf(pattern[i]) != str.indexOf(str[i])) {
      return false;
    }
  }
}