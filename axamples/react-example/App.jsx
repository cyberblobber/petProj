/* eslint-disable */
import React from'react'
import petProj from'@petProj/core'
import Tus from'@petProj/tus'
import GoogleDrive from '@petProj/google-drive'
import Webcam from '@petProj/webcam'
import RemoteSources from '@petProj/remote-sources'
import { Dashboard, DashboardModal, DragDrop, ProgressBar, FileInput } from'@petProj/react'

import '@petProj/core/dist/style.css'
import '@petProj/dashboard/dist/style.css'
import '@petProj/drag-drop/dist/style.css'
import '@petProj/file-input/dist/style.css'
import '@petProj/progress-bar/dist/style.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showInlineDashboard: false,
      open: false
    }

    this.petProj = new petProj({ id: 'petProj1', autoProceed: true, debug: true })
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(Webcam)
      .use(RemoteSources, { companionUrl: 'https://companion.petProj.io', sources: ['GoogleDrive', 'Box', 'Dropbox', 'Facebook', 'Instagram', 'OneDrive', 'Unsplash', 'Zoom', 'Url'],
      })

    this.petProj2 = new petProj({ id: 'petProj2', autoProceed: false, debug: true })
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })

    this.handleModalClick = this.handleModalClick.bind(this)
  }

  componentWillUnmount () {
    this.petProj.close({ reason: 'unmount' })
    this.petProj2.close({ reason: 'unmount' })
  }

  handleModalClick () {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    const { showInlineDashboard } = this.state
    return (
      <div>
        <h1>React Examples</h1>

        <h2>Inline Dashboard</h2>
        <label>
          <input
            type="checkbox"
            checked={showInlineDashboard}
            onChange={(event) => {
              this.setState({
                showInlineDashboard: event.target.checked
              })
            }}
          />
          Show Dashboard
        </label>
        {showInlineDashboard && (
          <Dashboard
            petProj={this.petProj}
            plugins={['GoogleDrive']}
            metaFields={[
              { id: 'name', name: 'Name', placeholder: 'File name' }
            ]}
          />
        )}

        <h2>Modal Dashboard</h2>
        <div>
          <button onClick={this.handleModalClick}>
            {this.state.open ? 'Close dashboard' : 'Open dashboard'}
          </button>
          <DashboardModal
            petProj={this.petProj2}
            open={this.state.open}
            target={document.body}
            onRequestClose={() => this.setState({ open: false })}
          />
        </div>

        <h2>Drag Drop Area</h2>
        <DragDrop
          petProj={this.petProj}
          locale={{
            strings: {
              chooseFile: 'Boop a file',
              orDragDrop: 'or yoink it here'
            }
          }}
        />

        <h2>Progress Bar</h2>
        <ProgressBar
          petProj={this.petProj}
          hideAfterFinish={false}
        />

        <h2>File Input</h2>
        <FileInput
          petProj={this.petProj}
        />
      </div>
    )
  }
}
