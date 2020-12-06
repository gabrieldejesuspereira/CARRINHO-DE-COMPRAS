import { Component } from '@angular/core'; 
import { Bancodedados001Service } from './../Bancodedados001.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private bd: Bancodedados001Service) {}

}
