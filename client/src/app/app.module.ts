import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { JavaComponent } from './java/java.component';
import { PythonComponent } from './python/python.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SimplePipe } from './simple.pipe';
import { SearchPipe } from './search.pipe';
import { authInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    TechnologiesComponent,
    JavaComponent,
    PythonComponent,
    NodejsComponent,
    NotfoundComponent,
    UserProfileComponent,
    SimplePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [provideHttpClient(withFetch()),provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }

