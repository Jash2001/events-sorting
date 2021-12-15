const achieve = require('./src/achievements.json');
const fs = require('fs');

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

achieve.sort(dynamicSort('Date',1));

fs.writeFile( './src/sorted_achievements.json',(JSON.stringify(achieve)),function(err) {
    if (err) throw err;
        // if no error
    console.log("Data is written to file successfully.");
});