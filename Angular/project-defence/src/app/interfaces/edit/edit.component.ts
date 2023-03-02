import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NftService } from 'src/app/auth/nft.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: any = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(14),
    ]],
    description: ['', [
      Validators.required,
      Validators.minLength(4),
    ]],
    url: ['', [
      Validators.required,
      Validators.minLength(10),
    ]],
    price: ['', [
      Validators.required,
      Validators.min(100),
    ]],
  })

  responseMessage: any;
  postData: any;
  imgSrc: string = '';

  nameValue: string = '';
  descriptionValue: string = '';
  urlValue: string = '';
  priceValue: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private nftService: NftService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
        this.nftService.loadNft(params["id"])
          .subscribe((data) => {
            this.postData = data
            this.nameValue = this.postData.name
            this.descriptionValue = this.postData.description
            this.urlValue = this.postData.pic
            this.imgSrc = this.postData.pic
            this.priceValue = Number(this.postData.price)
          })
      })
  }
  onSubmit() {
    const nameControl = this.form.get('name');
    const descriptionControl = this.form.get('description');
    const urlControl = this.form.get('url');
    const priceControl = this.form.get('price');

    if (this.form.valid) {
      const name: string = nameControl?.value
      const description: string = descriptionControl?.value
      const pic: string = urlControl?.value
      const price: number = priceControl?.value

      this.nftService.editNft(
        name, description,
        price, pic,
        this.postData?._id
      )
        .subscribe(() => this.router.navigate
        (['catalog/details/' + this.postData?._id]))
    }
  }
  urlHandler() {
    let data = this.form.get('url')
    this.imgSrc = data?.value
  }
}
