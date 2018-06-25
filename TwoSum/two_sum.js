
var twoSum = function(num, target) {
    var ret = [];
    var buf_hash = {};
    for (var i = 0; i < num.length; i++) {
        if (typeof(buf_hash[target-num[i]]) !== 'undefined') {
          ret.push(buf_hash[target-num[i]]);
          ret.push(i);
          return ret;
        }
        buf_hash[num[i]] = i;
    }
}

console.log(twoSum([2, 7, 11, 15], 18));
