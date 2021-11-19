import { Injectable } from '@angular/core';
import { HttpEndpoints } from '../models/http-endpoints';
import { HttpMethod } from '../models/http-methods';
import { ServiceModel } from '../models/ServiceModel';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceSaloonService {

  constructor(private httpService: HttpService) { }

  getAllServices(){
    return this.httpService.makeHttpCall(HttpEndpoints.GetAllServices, HttpMethod.GET);
  }

  createNewService(serviceModel: ServiceModel){
    return this.httpService.makeHttpCall(HttpEndpoints.CreateNewService, HttpMethod.POST, serviceModel)
  }

  deleteService(id: number){
    return this.httpService.makeHttpCall(HttpEndpoints.DeleteService, HttpMethod.DELETE, id)
  }
}
