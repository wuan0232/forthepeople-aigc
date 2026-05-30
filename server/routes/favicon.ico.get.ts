import { createReadStream, existsSync } from 'node:fs'
import { join } from 'node:path'
import { sendStream } from 'h3'

const FAVICON_PATH = join(process.cwd(), 'public', 'favicon.ico')

/** 避免缺失或静态中间件异常时 /favicon.ico 返回 500 */
export default defineEventHandler((event) => {
  if (!existsSync(FAVICON_PATH)) {
    return sendRedirect(event, '/favicon.svg', 302)
  }

  setHeader(event, 'Content-Type', 'image/x-icon')
  setHeader(event, 'Cache-Control', 'public, max-age=86400')
  return sendStream(event, createReadStream(FAVICON_PATH))
})
