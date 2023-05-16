import * as fs from 'fs'
import * as path from 'path'
import { getFunctions } from './getDirs'

export const getHTTPRoutingFiles = async () => {
  const functions = getFunctions()
  for (const functionName of functions) {
    const httpRoutingPath = path.join(
      '.',
      'functions',
      functionName,
      'src',
      'rountings',
      'http'
    )
    const files = fs.readdirSync(httpRoutingPath)
    console.log(files)
  }
}

const run = async () => {
  await getHTTPRoutingFiles()
}

run()
