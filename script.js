var doSomething=function (a,b,fun) {
 alert("inside doSomething");
  a=a+1;
  a=a+3;
  a=a*8;
  alert("value of a inside doSomething"+a);
  alert("value of b inside doSomething"+b);
  return  fun(a,b);
  }
  function sum(a,b) {
    alert("inside sum");
    return a+b;
    }
    function prod(a,b) {
      alert("inside prod");
      return a*b;
    }
var foo=doSomething(2,2,sum);
  alert(foo);
var bar=doSomething(3,2,prod);


  alert(bar);
