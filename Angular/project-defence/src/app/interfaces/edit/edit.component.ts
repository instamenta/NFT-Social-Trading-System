import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NftService } from 'src/app/auth/nft.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup;

  userData: any;
  userId: any;
  responseMessage: any;
  tokenValue: any;
  params$ :any;
  postData: any;
  imgSrc:  any;
  nameError: any;
  descriptionError: any;
  urlError: any;
  priceError: any;
  
  nameValue: any;
  descriptionValue: any;
  urlValue: any;
  priceValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private nftService: NftService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
      this.form = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(4)]],
        url: ['', [Validators.required, Validators.minLength(4)]],
        price: ['', [Validators.required, Validators.minLength(4)]],
      });
  }
  ngOnInit(): void {
    this.params$ = this.route.params.subscribe(params => {
      this.userId = params["id"]
      this.nftService.loadNft(this.userId).subscribe((result)=> {
        this.postData = result
        this.nameValue = this.postData.name
        this.descriptionValue = this.postData.description
        this.urlValue = this.postData.pic
        this.priceValue = this.postData.price
        this.imgSrc = this.postData.pic
        console.log(this.postData)
      })
    })

  }

  onSubmit() {
    const nameControl = this.form.get('name')
    const descriptionControl = this.form.get('description')
    const urlControl = this.form.get('url')
    const priceControl = this.form.get('price')



    if (this.form.valid) {
      console.log('valid')
      const name = nameControl?.value
      const description = descriptionControl?.value
      const pic = urlControl?.value
      const price = priceControl?.value

      console.log(name)
      console.log(description)
      console.log(pic)
      console.log(price)
      console.log(this.userId)
      this.nftService.editNft(
        name,
        description,
        price,
        pic,
        this.userId
        )
        .subscribe((response) => {
          console.log(response)
          this.router.navigate(['catalog/details/' + this.postData._id])
        })

    } else {
      if(nameControl?.hasError) {
        this.nameError = true
      }
      
      if(descriptionControl?.hasError) {
        this.descriptionError = true
      }
      
      if(priceControl?.hasError) {
        this.priceError = true
      }
      
      if(urlControl?.hasError) {
        this.urlError = true
      }
    }
  }
  urlHandler() {
    let data = this.form.get('url')
    this.imgSrc = data?.value

  }
}
