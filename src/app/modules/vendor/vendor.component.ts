import { Component, OnInit } from '@angular/core';
//import { SharedserviceService } from 'app/sharedservice.service';
import { Vendor } from './vendor';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
   vendors: Vendor[] = [
    {name: "Ram", age: 23, city:"kolkata"},
    { name: "Rajdeep", age: 26, city:"Bangalore"},
    { name: "Rohan", age: 28, city:"Mumbai"},
    { name: "Ravi", age: 34, city:"Delhi"}
  ];
  selectedVendor?: Vendor;
  ngOnInit(): void {
   
  }
  display(selectedvendor : Vendor): void {
    this.selectedVendor = selectedvendor;
  }
}
