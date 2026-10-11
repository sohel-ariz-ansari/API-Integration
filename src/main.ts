import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient  } from '@angular/common/http';
import { UsersComponent } from './app/users/users/users.component';


// Root component (App) or directly using the UsersComponent
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, UsersComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-users></app-users>
  `,
})
export class App {
  name = 'Angular';
}

// Bootstrap the root app component
bootstrapApplication(App, {
  providers: [
    provideHttpClient()
  ],
});
