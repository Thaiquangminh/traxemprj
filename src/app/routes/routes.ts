import { Routes } from '@angular/router';
import { ForGetPassWordComponent } from '../components/for-get-pass-word/for-get-pass-word.component';
import { LoginComponent } from '../components/login/login.component';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { RegisterComponent } from '../components/register/register.component';

export const routes: Routes = [
    {
      path: 'main',
      component: MainPageComponent, // this is the component with the <router-outlet> in the template
      children: [
        {
          path: 'login', // child route path
          component: LoginComponent, // child route component that the router renders
        },
        {
          path: 'register',
          component: RegisterComponent, // another child route component that the router renders
        },
        {
          path: 'getpassword',
          component: ForGetPassWordComponent, // another child route component that the router renders
        },
      ],
    },
  ];
