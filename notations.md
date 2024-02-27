# IF

<ng-container *ngIf="product">
  <h2>{{ product.title }}</h2>
  <img [src]="product.images[0]">
</ng-container>

# FOR

<app-product *ngFor="let product in products">

</app-products>


# Peticiones API

import { HttpClientModule } from '@angular/common/http';

http = inject(HttpClient);

ngOnInit() {
  this.http.get<Product[]>('URL').suscribe((data) => {
    this.products = data;
  });
}
