import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddennamevalidator } from './forbiddennamevalidator';
import { passvalidator } from './validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  newform = this.fb.group({
    Name:['',[Validators.required,Validators.minLength(3),forbiddennamevalidator('abc')]],
   email:['',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
    mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password:['',[Validators.required]],
    cnfpass:['',[Validators.required,passvalidator]]
 
 })
 constructor(private fb:FormBuilder) { }
  
 get mobilectrl():FormControl{
   return this.newform.get('mobile') as FormControl;

 }

 get passctrl():FormControl{
   return this.newform.get('password') as FormControl;

 }
 get emctrl():FormControl{
   return this.newform.get('email') as FormControl;
 }
 get firstnamectrl():FormControl{
   return this.newform.get('Name') as FormControl;
 }
 get cnfctrl():FormControl{
   return this.newform.get('cnfpass') as FormControl;
 }
  onsubmit(){
    console.log(this.newform.value);
  }

 

  ngOnInit(): void {
  }

}
