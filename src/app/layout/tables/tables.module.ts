import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        FormsModule ,
        CommonModule,
        TablesRoutingModule,
        PageHeaderModule
    ],
    declarations: [TablesComponent]
})
export class TablesModule { }
