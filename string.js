var obj="This is a string object",len=obj.length;
var index= obj.indexOf("is  ");
var index2=obj.indexOf("is",index+1);
var substr=obj.substr(0,4);
var substring=obj.substring(0,3);
var newString=obj.replace("object","value");
alert(index);
alert(index2);
alert(substr);
alert(substring);
alert(newString);
