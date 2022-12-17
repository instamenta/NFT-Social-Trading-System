import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NftService } from 'src/app/auth/nft.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: any = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    url: ['', [Validators.required, Validators.minLength(10)]],
    price: ['', [Validators.required, Validators.min(100)]],
  });
  imgSrc: any = 'https://rlv.zcache.com.au/create_your_own_photo_print-r7881a010b313447b82044d4b2d1875bc_ncud_8byvr_324.jpg?square_it=true';
  userData: any;
  responseMessage: any;
  tokenValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private nftService: NftService,
    private userService: UserService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.userService.getUserData()
      .subscribe((data) => {
        this.userData = data
      })
  }
  onSubmit() {
    const nameControl = this.form.get('name')
    const descriptionControl = this.form.get('description')
    const urlControl = this.form.get('url')
    const priceControl = this.form.get('price')

    if (this.form.valid) {
      const name = nameControl?.value
      const description = descriptionControl?.value
      const pic = urlControl?.value
      const price = priceControl?.value
      this.nftService.createNft(
        name,
        description,
        price,
        pic,
        this.userData
      )
        .subscribe((res) => {
          this.router.navigate(['/catalog/details/' + res.post._id])
        })
    }
  }
  urlHandler() {
    let data = this.form.get('url')
    this.imgSrc = data?.value
  }
}
