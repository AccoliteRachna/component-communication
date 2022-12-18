import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'app/sharedservice.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {
  selectedVendor?: Vendor;
  //blockvendors!: Vendor[];
  constructor(private Service : SharedserviceService) { }
  ngOnInit(): void {
    this.Service.vendorObs.subscribe((data) => {
      //this.blockvendors.push(data);
      this.selectedVendor=data;
      console.log("data: ", this.selectedVendor);
    })
  }

}
