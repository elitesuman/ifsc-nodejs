var fs = require('fs');
var path = require('path');
//for full details about ifscs
 function getDetails(dataa, callback){
    var error = null;
    var result = null;
    if(dataa){
        if(dataa.length > 4){
    var bank = dataa.slice(0, 4);
	fs.readFile(path.join(__dirname, "ifsc/"+bank+".json"), function(err, data){
        if (err) {
            error = "your IFSC code is wrong or incomplete";
            callback(error, result);
        	} 
        else {
            var j = require(path.join(__dirname, "ifsc/"+bank+".json"));
              if (j.hasOwnProperty(dataa)) {
                var d = dataa;
                result = j[d];
                callback(error, result);
              }
              else{
                error = "your IFSC code is wrong or incomplete";
                callback(error, result);
              }
        }
    	});
        }
            else{
        error = "your IFSC code is wrong or incomplete";
        callback(error, result);
        }
    }
    else{
        error = "your IFSC code is wrong or incomplete";
        callback(error, result);
    }
}

exports.getDetails = getDetails;