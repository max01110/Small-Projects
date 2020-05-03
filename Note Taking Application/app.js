const chalk = require('chalk')
const yargs = require('yargs')
const notes = require("./notes.js")

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.addNote(argv.title, argv.body)}
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            desribe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.removeNote(argv.title)}
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'lists note',
    handler () {notes.listNotes()
    }
})

//Create read command
yargs.command ({
    command: 'read',
    describe: 'reads notes',
    builder: {
        title: {
            desribe: 'Note title',
            demandOption: true,
            type: "string"
        }
    },
    handler (argv) {notes.readNote(argv.title)}
})

yargs.parse()
