import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZabbixComponent } from './zabbix.component';

describe('ZabbixComponent', () => {
  let component: ZabbixComponent;
  let fixture: ComponentFixture<ZabbixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZabbixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZabbixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
