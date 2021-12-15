const JSONDATA = require('./src/eventdetails.json');
const fs = require('fs');
fiterteredsort()
function fiterteredsort(){
    const eventongoing=[],eventupcoming=[],eventcompleted=[];
    JSONDATA.forEach(function(data){
        if(data["status"]==="upcoming"){
            eventupcoming.push(data);
        }
        else if(data["status"]==="ongoing"){
            eventongoing.push(data);
        }
        else if(data["status"]==="completed"){
            eventcompleted.push(data);
        }
    })
    eventcompleted.sort(dynamicSort('start-date',1));
    eventupcoming.sort(dynamicSort('start-date',-1));
    eventongoing.sort(dynamicSort('start-date',-1));
    const JSONd = {}
    JSONd["upcoming"]=eventupcoming;
    JSONd["ongoing"]=eventongoing;
    JSONd["completed"]=eventcompleted;
    fs.writeFile( './src/fileoutputName.json',(JSON.stringify(JSONd)),function(err) {
        if (err) throw err;
            // if no error
        console.log("Data is written to file successfully.");
    });
}

function dynamicSort(property,order) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        ad=new Date(a[property]);
        bd=new Date(b[property]);
        console.log(a[property],b[property],ad,bd);
        var result = (ad < bd) ? order : (ad > bd) ? -order : 0;
        return result * sortOrder;
    }
}

