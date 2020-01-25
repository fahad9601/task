import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickColorDirective } from './dashboard/click-color.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProformaComponent } from './proforma/proforma.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule,
  MatButtonModule,
  MatToolbarModule,
   MatExpansionModule, MatIconModule,
 } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideComponent } from './side/side.component';
import { PatientComponent } from './patient/patient.component';
import { NurseComponent } from './nurse/nurse.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LabortatotistComponent } from './labortatotist/labortatotist.component';
import { AccountantComponent } from './accountant/accountant.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { MonitorComponent } from './monitor/monitor.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProformaComponent,
    DoctorComponent,
    SideComponent,
    ClickColorDirective,
    PatientComponent,
    NurseComponent,
    PharmacistComponent,
    LabortatotistComponent,
    AccountantComponent,
    ReceptionistComponent,
    MonitorComponent,
    NoticeboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
