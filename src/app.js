const expres = require("express")

const PORT = 3000

let app = expres()

app.get('/', (req, res) => res.send("Version 0.1"))

app.use(expres.static('public'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))