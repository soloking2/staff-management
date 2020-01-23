import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StaffListComponent } from './staff/staff-list.component';
import { NavigationComponent } from './header/navigation.component';
import { StaffCreateComponent } from './staff/staff-create.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffListComponent,
    NavigationComponent,
    StaffCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: StaffListComponent },
      {path: 'create', component: StaffCreateComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
