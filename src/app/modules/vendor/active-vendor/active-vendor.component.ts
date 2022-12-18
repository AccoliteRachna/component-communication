
import { Component, Input, OnInit,OnChanges, EventEmitter, Output } from '@angular/core';
import { SharedserviceService } from 'app/sharedservice.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
  @Input() vendors!: Vendor[];
  selectedVendor?: Vendor;
  @Output() newItemEvent = new EventEmitter<Vendor>();
  constructor(public Service : SharedserviceService) { }
  ngOnInit(): void {
  }
  selectVendor(vendor: Vendor)
  {
    //console.log("works");
    this.selectedVendor=vendor;
    console.log(this.selectedVendor);
    this.newItemEvent.emit(this.selectedVendor);
    this.Service.setVendor(this.selectedVendor);
  }
  
}
