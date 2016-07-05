var globalvar="this is  a global varibale";
var globalFunction=function () {
  alert(globalvar);
   localvar="this is a local variable";
//  globalvar="globalvar has been modified";
var localFunction=function () {
 var localvar="hello world";
  alert(localvar);
};
localFunction();
alert(localvar);
};
globalFunction();
alert(localvar);
//alert(globalvar);
