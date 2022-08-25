import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardListComponent } from './card-list/card-list.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { OneService } from './one.service';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CardDetailsComponent,
    CardListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [OneService],
})
export class AppModule {}
