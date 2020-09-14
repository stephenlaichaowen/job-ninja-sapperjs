// import { jobs } from './_data.js'
import { v4 as uuid } from 'uuid'

export function get(req, res) {
  res.end(JSON.stringify(jobs))
}

export function post(req, res) {
  const id = uuid()
  jobs.unshift({ id, ...req.body })
  res.end(JSON.stringify(jobs))
}

