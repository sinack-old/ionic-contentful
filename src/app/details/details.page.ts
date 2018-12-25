import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  private product: Entry<any> = null;
  private id: string = null;

  constructor(
      private contentfulService: ContentfulService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.getProduct();
    });
  }

  getProduct() {
    this.contentfulService.getProduct(this.id)
        .then(product => {
          this.product = product;
        });
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
