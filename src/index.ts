import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';

/** message */
import { Ng2IziToastModule } from 'ng2-izitoast';

/** translate */
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  exports: [
  ],
})
export class MessageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessageModule,
      providers: [
        MessageService
      ]
    };
  }
}
