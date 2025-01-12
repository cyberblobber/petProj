import petProj from '@petProj/core'
import Dashboard from '@petProj/dashboard'
import XHRUpload from '@petProj/xhr-upload'

import '@petProj/core/dist/style.css'
import '@petProj/dashboard/dist/style.css'

const petProj = new petProj({
  debug: true,
  meta: { something: 'xyz' },
})

petProj.use(Dashboard, {
  target: '#app',
  inline: true,
  hideRetryButton: true,
  hideCancelButton: true,
})

petProj.use(XHRUpload, {
  bundle: true,
  endpoint: 'http://localhost:9967/upload',
  allowedMetaFields: ['something'],
  fieldName: 'files',
})
