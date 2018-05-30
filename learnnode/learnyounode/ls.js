// list files with specific extenssions

var fs = require('fs');
var path = require('path');
var  dir = path.normalize( process.argv[2] );
var ext = process.argv[3]; 

function finishedDir (err, data){
    
    if (err) 
        console.error("error: " + err);

    data.forEach( function (line ){
         if ( path.extname( line ) === "." + ext )
            console.log ( line ); 
    });
};

fs.readdir
fs.readdir( dir, finishedDir);
