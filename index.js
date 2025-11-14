/*const path = require("path") ;
console.log(__dirname);
console.log(path.join(__dirname, "index.mjs"));
//path shows directories path
*/
/*
const { program } = require('commander');

program
  .option('--first')
  .option('-s, --separator <char>')
  .argument('<string>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));
*/
/*
const { Command } = require('commander');
const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();
*/

/*
const fs = require('fs');
const { Command } = require('commander');
const program = new Command();          //new class

program                                       //giving values
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')  // actual thing inside file 
  .argument('<file>', 'file to count')    // single argument that accepts a file
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.parse();
*/

/* withput cli
const fs = require('fs');
function main(filename){
    fs.readFile(filename, 'utf8', function(err, data){
        let total=0;
        for(let i=0; i<data.length; i++){
            if(data[i] === " "){
                total++;
            }
        }
        console.log(total+1);
    
    })
}
main(process.argv[2]);
*/