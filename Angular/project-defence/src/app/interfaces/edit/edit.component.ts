import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NftService } from 'src/app/auth/nft.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: any = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    url: ['', [Validators.required, Validators.minLength(10)]],
    price: ['', [Validators.required, Validators.min(100)]],
  })

  userData: any;
  userId: any;
  responseMessage: any;
  tokenValue: any;
  params$: any;
  postData: any;
  imgSrc: any;

  nameValue: any;
  descriptionValue: any;
  urlValue: any;
  priceValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private nftService: NftService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.params$ = this.route.params
      .subscribe(params => {
        this.userId = params["id"]
        this.nftService.loadNft(this.userId)
          .subscribe((result) => {
            this.postData = result
            this.nameValue = this.postData.name
            this.descriptionValue = this.postData.description
            this.urlValue = this.postData.pic
            this.priceValue = this.postData.price
            this.imgSrc = this.postData.pic
          })
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
      this.nftService.editNft(
        name,
        description,
        price,
        pic,
        this.userId
      )
        .subscribe((response) => {
          this.router.navigate(['catalog/details/' + this.postData._id])
        })
    }
  }
  urlHandler() {
    let data = this.form.get('url')
    this.imgSrc = data?.value
  }
}
