const app = require('express')();

app.get('/', (req, res) => {
  res.json({message: 'docker is ez'})
})

const port = 1234;
app.listen(port, () => console.log(`Listening on port ${port}. Yay!!`))