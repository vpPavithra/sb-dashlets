import { NgModule } from '@angular/core';
import { DashletComponent, ChartJsComponent, BigNumberComponent, DtTableComponent, FiltersComponent } from './components';
import { ReportWrapperDirective, TemplateRefsDirective } from './directives';
import { HttpClientModule } from '@angular/common/http'
import { ChartsModule, ThemeService } from 'ng2-charts'
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [ChartJsComponent, DashletComponent, ReportWrapperDirective, BigNumberComponent, DtTableComponent, TemplateRefsDirective, FiltersComponent],
  imports: [HttpClientModule, ChartsModule, CommonModule, DataTablesModule, ReactiveFormsModule, NgMultiSelectDropDownModule, NgxDaterangepickerMd.forRoot()],
  exports: [DashletComponent, TemplateRefsDirective],
  providers: [ThemeService],
  entryComponents: [ChartJsComponent, BigNumberComponent, DtTableComponent]
})
export class DashletModule { }