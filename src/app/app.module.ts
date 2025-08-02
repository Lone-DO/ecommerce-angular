import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store';
import { ProductEffects } from './features/products/store/product.effects';
import { ProductsModule } from './features/products/products.module';
import { ToastComponent } from './core/components/toast/toast.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { RocketBannerComponent } from './core/components/rocket-banner/rocket-banner.component';

@NgModule({
  declarations: [AppComponent, ToastComponent, HeaderComponent, FooterComponent, RocketBannerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
