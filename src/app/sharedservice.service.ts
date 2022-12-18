import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vendor } from './modules/vendor/vendor';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  public vendors !: Vendor;
  vendorObs=new Subject<Vendor>();

  constructor() { }
  setVendor(vendor: Vendor)
  {
    this.vendors=vendor;
    this.vendorObs.next(vendor);
  }
  getVendor()
  {
    return this.vendors;
  }
}
