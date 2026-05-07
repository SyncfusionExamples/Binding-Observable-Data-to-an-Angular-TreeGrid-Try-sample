import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { TaskDataService } from './task-data.service';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TaskDataService, { delay: 500 }),
    TreeGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
