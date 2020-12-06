import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProddetalhePage } from './proddetalhe.page';

describe('ProddetalhePage', () => {
  let component: ProddetalhePage;
  let fixture: ComponentFixture<ProddetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProddetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProddetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
