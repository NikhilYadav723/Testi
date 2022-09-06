import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestaurantData } from 'src/restaurant.modal';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-testi',
  templateUrl: './testi.component.html',
  styleUrls: ['./testi.component.css'],
})
export class TestiComponent implements OnInit {
  formValue!: FormGroup;
  restaurantModelObj: RestaurantData = new RestaurantData();
  allRestaurantData: any;
  showAdd!:boolean;
  Showbtn!:boolean

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    });
    this.getAllData();
  }
  clickAddrestu(){
    this.formValue.reset();
    this.showAdd=true;
    this.Showbtn=false
  }
  // Now subscribing our data
  addRestaurant() {
    this.restaurantModelObj.name = this.formValue.value.name;
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.services = this.formValue.value.services;

    this.api.postResturant(this.restaurantModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Restaurant record add succesfull');
        let ref = document.getElementById('clear');
        ref?.click();

        this.formValue.reset();
        this.getAllData();
      },
      (err) => {
        alert('kuch galat hai');
      }
    );
  }
  getAllData() {
    this.api.getRestaurant().subscribe((res) => {
      this.allRestaurantData = res;
    });
  }
  deleteData(data: any) {
    this.api.deleteRestaurant(data.id).subscribe((res) => {
      alert('Records are Deleted');
      this.getAllData();
    });
  }

  onEditResto(data:any){
    this.showAdd=false;
    this.Showbtn=true
    this.restaurantModelObj.id = data.id
    this.formValue.controls['name'].setValue(data.name)
    this.formValue.controls['email'].setValue(data.email)
    this.formValue.controls['mobile'].setValue(data.mobile)
    this.formValue.controls['address'].setValue(data.address)
    this.formValue.controls['services'].setValue(data.services)
  
  
  
  }
  updateRestaurant(){
    this.restaurantModelObj.name = this.formValue.value.name;
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.services = this.formValue.value.services;

    this.api.updateRestaurant(this.restaurantModelObj,this.restaurantModelObj.id).subscribe(res=>{
      alert ("Restaurant Records Updated");
      console.log(res)
      let ref = document.getElementById('clear');
        ref?.click();

        this.formValue.reset();
        this.getAllData();
    })
  }
}

