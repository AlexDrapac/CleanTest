import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ManageServicesComponent } from './admin/subcomponents/manage-services/manage-services.component';
import { DashboardComponent } from './admin/subcomponents/dashboard/dashboard.component';
import { SidebarComponent } from './admin/subcomponents/sidebar/sidebar.component';
import { ManageEmployeesComponent } from './admin/subcomponents/manage-employees/manage-employees.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    ManageServicesComponent,
    DashboardComponent,
    SidebarComponent,
    ManageEmployeesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
