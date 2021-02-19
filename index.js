#!/usr/bin/env node
'use script'

const colors   = require('colors');
const debug   = require('debug')('commander:cli')
const program = require('commander');
const prompt  = require('prompt');

program
  .version('0.1.0', '-v, --version')
  .usage(' ');
  //.usage('encrypt|decrypt <password> <options>');
  
//   program
//   .command('encrypt <password>')
//   .description('Encrypt a plain text password')
//   .option('-k, --key <string>', 'String|phrase Key to Use')
//   .action(function (password, options) {
//     debug('encrypt command');
//     if( options.key == undefined ){
//       console.log();
//       // console.log('  -k, --key option is required');
      
//       console.log('  ');
//       process.exit(1);
//     } else {
//       let ciphertext = CryptoJS.AES.encrypt(password,options.key);
//       console.log();
//       console.log(' Encrypted Password: ' + ciphertext);
//       console.log();
//     }
 
//   });

program.on('--help', function(){
    console.log();
    console.log('Extra Help Text');
    console.log('');
    console.log('');
    console.log('');
  });


// program.on('--help', function(){
//     console.log();
//     console.log('Examples:');
//     console.log('');
//     console.log('  $ pass encrypt mypassword -k oneWordPass');
//     console.log("  $ pass encrypt 'mypassword' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('  $ pass decrypt encryptedstring -k oneWordPass');
//     console.log("  $ pass decrypt 'encryptedstring' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('Notice: ')
//     console.log('  For special characters in passwords/keys,');
//     console.log('  please use single quotes around each');
//     console.log('');
//     console.log('');
//   });


  program.parse(process.argv);

  if (!program.args.length) program.help();
