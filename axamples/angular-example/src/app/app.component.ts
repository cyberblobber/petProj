import { Component, OnInit } from '@angular/core'
import { petProj} from '@petProj' +
  /core'
import Webcam from '@petProj' +
  /webcam'
import Tus from '@petProj' +
  /tus'
import GoogleDrive from '@petProj' +
  /google-drive'

@Component({
  selector: 'app-root',
  template: /* html */ `
    <h1>petProj Angular Example!</h1>
    <h2>Inline dashboard</h2>
    <label>
      <input
        type="checkbox"
        (change)="showInline = $any($event.target)?.checked"
        [checked]="showInline"
      />
      Show Dashboard
    </label>

    <petProj -dashboard
      [petProj ]="petProj"
      [props]="dashboardProps"
      *ngIf="showInline"
    ></petProj-dashboard>

    <h2>Modal Dashboard</h2>
    <div>
      <petProj -dashboard-modal
        [petProj ]="petProj"
        [open]="showModal"
        [props]="dashboardModalProps"
      ></petProj-dashboard-modal>
      <button (click)="showModal = !showModal">
        {{ showModal ? 'Close dashboard' : 'Open dashboard' }}
      </button>
    </div>

    <h2>Drag Drop Area</h2>
    <petProj -drag-drop [petProj ]="petProj" [props]="{}"></petProj-drag-drop>

    <h2>Progress Bar</h2>
    <petProj -progress-bar
      [petProj ]="petProj"
      [props]="{ hideAfterFinish: false }"
    ></petProj-progress-bar>
  `,
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'angular-example'

  showInline = false

  showModal = false

  dashboardProps = {
    plugins: ['Webcam'],
  }

  dashboardModalProps = {
    target: document.body,
    onRequestCloseModal: (): void => {
      this.showModal = false
    },
  }

  petProj: petProj = new petProj({ debug: true, autoProceed: true })

  ngOnInit(): void {
    this.petProj
      .use(Webcam)
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(GoogleDrive, { companionUrl: 'https://companion.petProj' +
          .io' })
  }
}
