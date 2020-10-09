import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbThemeModule, NbLayoutModule, NbSidebarModule, NbListModule, NbCardModule, NbInputModule } from "@nebular/theme"

const modules = [
  NbThemeModule.forRoot({ name: "default" }),
  NbLayoutModule,
  NbSidebarModule.forRoot(),
  NbInputModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    modules
  ]
})
export class NebularModule { }
