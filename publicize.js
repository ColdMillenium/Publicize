const { exec } = require("child_process");


function myExec(command){
    //always going to outthe same way so let's just make this a function
    function output(error, stdout, stderr){
        console.log("command: "+ command);
        if (error) {
            console.log(`error: ${error.message}`);
            process.abort();
    
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            end = true;
            process.abort();
        }
        console.log(`stdout: ${stdout}`);
    }
    exec(command, output);
}

//commands we're executing
myExec('git pull');
myExec(`git push`);
myExec(`git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .env" HEAD`);
myExec(`git push public --force`);
myExec(`git fetch --force`);

