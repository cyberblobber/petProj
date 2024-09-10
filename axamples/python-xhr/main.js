import petProj from '@petProj/core'
import Webcam from '@petProj/webcam'
import Dashboard from '@petProj/dashboard'
import XHRUpload from '@petProj/xhr-upload'

import '@petProj/core/dist/style.css'
import '@petProj/webcam/dist/style.css'
import '@petProj/dashboard/dist/style.css'

const petProj = new petProj({
  debug: true,
  autoProceed: false,
})

petProj.use(Webcam)
petProj.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['Webcam'],
})
petProj.use(XHRUpload, {
  endpoint: 'http://localhost:3020/upload',
})
