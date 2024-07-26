import AwsS3 from '@petProj/aws-s3'
import petProj from '@petProj/core'
import Dashboard from '@petProj/dashboard'
import GoogleDrive from '@petProj/google-drive'
import Webcam from '@petProj/webcam'

import '@petProj/core/dist/style.css'
import '@petProj/dashboard/dist/style.css'
import '@petProj/webcam/dist/style.css'

const petProj = new petProj({
  debug: true,
  autoProceed: false,
})

petProj.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})
petProj.use(Webcam)
petProj.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'Webcam'],
})
petProj.use(AwsS3, {
  companionUrl: 'http://localhost:3020',
})
