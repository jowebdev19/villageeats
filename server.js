import express from 'express'
import cors from 'cors'

const port = 3000
const app = express()
app.use(cors())
app.use(express.json())

app.get('/meal', (req, res) => {

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((meal) => {
        
        return res.send(meal)
    })
});






app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})