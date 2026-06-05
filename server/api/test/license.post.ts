// server/api/test/licenses.post.ts
import { readBody } from 'h3'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export default eventHandler(async (event) => {
    const body = await readBody(event)
    
    const filePath = resolve('./server/data/licenses.json')
    const licenses = JSON.parse(readFileSync(filePath, 'utf-8'))
    
    const newLicense = {
        ...body,
        id: (licenses.at(-1)?.id ?? 0) + 1
    }
    
    licenses.push(newLicense)
    writeFileSync(filePath, JSON.stringify(licenses, null, 2))
    
    return newLicense
})