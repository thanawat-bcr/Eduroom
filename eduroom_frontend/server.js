const express = require('express')
const next = require('next')

const devProxy = {
	'/api': {
		target: `${process.env.NEXT_PUBLIC_BACKEND_API || 'http://localhost:5000'}`,
		pathRewrite: { '^/api': '/api' },
		changeOrigin: true,
	},
	'/grader': {
		target: `${process.env.NEXT_PUBLIC_GRADER_URL || 'http://localhost:3050'}`,
		pathRewrite: { '^/grader': '/grader' },
		changeOrigin: true,
	},
	'/socket-chat': {
		target: `${process.env.NEXT_PUBLIC_CHAT_SERVER || 'http://localhost:5050'}`,
		pathRewrite: { '^/socket-chat': '/socket-chat' },
		changeOrigin: true,
	},
	'/kahoot': {
		target: `${process.env.NEXT_PUBLIC_KAHOOT_URL || 'http://localhost:8000'}`,
		pathRewrite: { '^/kahoot': '/kahoot' },
		changeOrigin: true,
	},
}

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env === 'development'
const app = next({
	dir: '.',
	dev,
})

const handle = app.getRequestHandler()

let server
app
	.prepare()
	.then(() => {
		server = express()
		if (dev && devProxy) {
			const { createProxyMiddleware } = require('http-proxy-middleware')
			Object.keys(devProxy).forEach(function (context) {
				server.use(context, createProxyMiddleware(devProxy[context]))
			})
		}

		server.all('*', (req, res) => handle(req, res))

		server.listen(port, (err) => {
			if (err) {
				throw err
			}
			console.log(`> Ready on port ${port} [${env}]`)
		})
	})
	.catch((err) => {
		console.log('An error occurred, unable to start the server')
		console.log(err)
	})
