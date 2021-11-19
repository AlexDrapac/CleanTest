import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ServiceModel } from 'src/app/core/models/ServiceModel';
import { ServiceSaloonService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-manage-services',
  templateUrl: './manage-services.component.html',
  styleUrls: ['./manage-services.component.css']
})
export class ManageServicesComponent implements OnInit, OnDestroy {

  private getAllServicesSubs: Subscription | undefined;  

  addService:boolean = false;
  
  services: ServiceModel[] = [];

  serviceGroup:FormGroup = this.formBuilder.group({
    serviceName: ["", Validators.required],
    minutes: ["", Validators.required],
    price: ["", Validators.required],
  })

  constructor(private serviceSaloon: ServiceSaloonService, private formBuilder:FormBuilder) { }

  ngOnDestroy(): void {
    if(!this.getAllServicesSubs?.closed) {
      this.getAllServicesSubs?.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.getAllServices();
  }

  private getAllServices() {
    this.getAllServicesSubs = this.serviceSaloon.getAllServices().subscribe(
      res => {
        this.services = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  createNewService() {
    const serviceModel = <ServiceModel> {
      name: this.serviceGroup.value.serviceName,
      minutes: this.serviceGroup.value.minutes,
      price: this.serviceGroup.value.price,
    }
    this.getAllServicesSubs = this.serviceSaloon.createNewService(serviceModel).subscribe(
      res => {
        this.addService = false;
        this.getAllServices();
      },
      err => {
        console.log(err)
      }
    )
  }

  deleteService(serviceId:number) {
    this.serviceSaloon.deleteService(serviceId).subscribe(
      res => {
        this.services = this.services.filter(sv => sv.id != serviceId);
      },
      err => {
        console.log(err)
      }
    )
  }



}
