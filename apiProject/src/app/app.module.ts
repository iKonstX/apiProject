import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// 3rd Party Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostEditorComponent } from './components/dashboard/post-editor/post-editor.component';
import { PostsComponent } from './components/dashboard/posts/posts.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpwComponent } from './components/login/forgotpw/forgotpw.component';
import { DocsComponent } from './components/docs/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostEditorComponent,
    PostsComponent,
    LoginComponent,
    ForgotpwComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    CKEditorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
