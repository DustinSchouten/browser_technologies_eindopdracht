const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let userInput;

app.post('/', (req, res) => {

	userInput = JSON.stringify(req.body)

	fs.writeFile('data.json', userInput, 'utf8', cb => {
		console.log('written to json file');
	});

	res.render('bedankt');
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})