import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {
  petProjAngularDashboardModule,
  petProjAngularStatusBarModule,
  petProjAngularDragDropModule,
  petProjAngularProgressBarModule,
  petProjAngularDashboardModalModule,
} from '@petProj' +
  /angular'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    petProjAngularDashboardModule,
    petProjAngularStatusBarModule,
    petProjAngularDashboardModalModule,
    petProjAngularDragDropModule,
    petProjAngularProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
