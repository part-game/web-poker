import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { VcardComponent } from './pages/lobby/components/vcard/vcard.component';
import { TableComponent } from './pages/lobby/components/table/table.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './security/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LobbyComponent,
    VcardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
