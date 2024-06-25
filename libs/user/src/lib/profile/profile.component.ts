import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../store/user.service';
import { toSignal } from '@angular/core/rxjs-interop'; // or from 'rxjs/operators'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'org-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit{
  user =  toSignal(this.userService.getUser());
  fullName = computed(()=>this.user()?.name.firstname + ' ' + this.user()?.name.lastname)
  profileForm!:FormGroup;
  constructor(private userService: UserService,private fb : FormBuilder){}

  ngOnInit(): void {
      this.profileForm = this.fb.group({
        if: new FormControl(this.user()?.id, Validators.required),
        email: this.user()?.email,
        phone: this.user()?.phone,
        address: this.fb.group({
          city: this.user()?.address.city,
          street: this.user()?.address.street,
          number: this.user()?.address.number,
          zipcode: this.user()?.address.zipcode,
          geoLocation: this.fb.group({
            lat: ['', Validators.required ],
            long: ['', Validators.required ],
          })
        })
      })
  }
}
