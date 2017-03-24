isAnagram=function(word,compare){
  if (typeof word !== "string" || typeof compare !== "string") {
    throw new Error('Invalide Data Type');
    console.log("hi");
  }
  var space = " ";
  var first = word.split('').sort().toString();
    var secound = compare.split('').sort().toString();
  if (first[0] == space || secound[0] === space) {
    return false;
  }else if (first === secound){
    return true;
  }
  return false;
};

module.exports.isAnagram = isAnagram;

boxVolume=function(one,two,three){
if (one <1 || two <1 || three <1) {
  throw new Error('No falues smaller then 0');
}else if (one instanceof Number  || two instanceof Number  ||three instanceof Number ) {
  throw new Error('Invalide Data Type');
}else {
  var liters = (one * two * three)/1000;
  return Math.ceil(liters *10000)/10000;
}

};
module.exports.boxVolume = boxVolume;
