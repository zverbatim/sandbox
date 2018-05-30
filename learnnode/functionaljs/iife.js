// sandbox based on article: http://benalman.com/news/2010/11/immediately-invoked-function-expression/

// direct invocation errors out
// SyntaxError: Unexpected token )
//function test(){}(); 


// this works
(function (){ console.log('test1')})();

// this also important to use ;
 (function (){ console.log('test2')}());

// unary operator
0, function (){ console.log('test3')}();

// and with binary
!function (){ console.log('test4')}();


