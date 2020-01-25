import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProformaComponent } from './proforma/proforma.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { NurseComponent } from './nurse/nurse.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LabortatotistComponent } from './labortatotist/labortatotist.component';
import { AccountantComponent } from './accountant/accountant.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { MonitorComponent } from './monitor/monitor.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'proforma', component: ProformaComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'nurse', component: NurseComponent },
  { path: 'pharmacist', component: PharmacistComponent },
  { path: 'labortatotist', component: LabortatotistComponent },
  { path: 'accountant', component: AccountantComponent },
  { path: 'receptionist', component: ReceptionistComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'noticeboard', component: NoticeboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
