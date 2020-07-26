/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbStepperModule,
  NbButtonModule,
  NbWindowModule,
  NbTooltipModule,
  NbCardModule,
  NbInputModule,
} from '@nebular/theme';
import { AuthInterceptor } from './auth.interceptor';
import { YesNoDialogComponent } from './components/yes-no-dialog/yes-no-dialog.component';

@NgModule({
  declarations: [AppComponent, YesNoDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ThemeModule.forRoot(),
    
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbTooltipModule,
    NbCardModule,
    NbDialogModule,
    NbButtonModule,
    NbInputModule,
    CoreModule.forRoot(),
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
