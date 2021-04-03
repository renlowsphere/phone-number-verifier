const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const exec = require('child_process').exec;
console.log('Example Phone number:96477642958 \n');
rl.question("Type in Phone Number: ", function(phone) {
exec(`curl https://phonenumbervalidation.apifex.com/api/v1/validate?phonenumber=%2b${phone}`, (err, stdout, stderr) => {
 if (err) {
   console.error(err);
   return;
    console.log('Error..')
  }
 ren =  stdout;
 re = JSON.parse(ren);
 console.log('\nValid Number:'+re.is_valid_number+'\n\nRegion: '+re.time_zones_for_number+'\n\nLocal Time:'+re.local_time);
        rl.close();
        });
    });
rl.on("close", function() {
console.log('\nMy Telegram: @renlowsphere');
    process.exit(0);
});
