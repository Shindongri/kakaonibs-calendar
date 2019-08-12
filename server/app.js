require('dotenv').config()
const express = require('express')
const redis = require('redis')
const JSON = require('JSON')
const app = express()

const client = redis.createClient({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  db: process.env.DB_NUMBER
})

app.use(express.json())

app.use((req, _, next) => {
  req.cache = client
  next()
})

// /* 전체 스케줄 조회 */
// app.get('/schdule', (req, res, next) => {

// })

/* 특정 날짜 스케줄 조회 */
app.get('/schdule/:datetime', (req, res, next) => {
  const datetime = req.params.datetime

  req.cache.get(datetime, (error, data) => {
    if (error) {
      res.send(error)

      next()
    } else {
      res.json(JSON.parse(data))
    }
  })
})

/* 스케줄 등록 */
app.post('/schdule', (req, res, next) => {
  req.accepts('application/json')

  const datetime = req.body.datetime
  const value = JSON.stringify(req.body)

  req.cache.exists(datetime, (error, reply) => {
    if (reply === 1) {
      res.status(409).send('Already Exists.')
    } else if (reply === 0) {
      req.cache.set(datetime, value, error => {
        if (error) {
          res.json(error)
          
          next()
        } else {
          res.json(JSON.parse(value))
        }
      })
    }
  })
})

/* 스케줄 수정 */
app.put('/schdule', (req, res, next) => {
  req.accepts('application/json')

  const datetime = req.body.datetime
  const value = JSON.stringify(req.body)

  req.cache.mset(datetime, value, error => {
    if (error) {
      res.json(error)

      next()
    } else {
      res.json(JSON.parse(value))
    }
  })
})

/* 스케줄 삭제 */
app.delete('/schdule', (req, res, next) => {
  req.accepts('application/json')

  const id = req.body.id

  req.cache.del(id, error => {
    if (error) {
      res.json(error)

      next()
    } else {
      res.send('success')
    }
  })
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening on port ${ process.env.SERVER_PORT}`)
})

module.exports = app