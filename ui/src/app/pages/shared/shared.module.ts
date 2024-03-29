import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NbCardModule,
  NbIconModule,
  NbButtonModule, NbTooltipModule
} from '@nebular/theme';
import {PageHeaderComponent} from './page-header/page-header.component';
import {CaseDataTableComponent} from './case-data-table/case-data-table.component';
import {DataTablesModule} from 'angular-datatables';
import {CaseHeatmapComponent} from './case-heatmap/case-heatmap.component';
import {ChartsModule} from '../charts/charts.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FormatDatetimePipe} from './custom-pipes/format-datetime.pipe';
import {FormatResultsJsonPipe} from './custom-pipes/format-results-json.pipe';
import {ResultsExpiryPipe} from './custom-pipes/results-expiry.pipe';
import {DialogCaseDetailsComponent} from './case-data-table/dialog-case-details/dialog-case-details.component';

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    DataTablesModule,
    ChartsModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbTooltipModule
  ],
  declarations: [
    PageHeaderComponent,
    CaseDataTableComponent,
    CaseHeatmapComponent,
    FormatDatetimePipe,
    FormatResultsJsonPipe,
    ResultsExpiryPipe,
    DialogCaseDetailsComponent
  ],
  exports: [
    PageHeaderComponent,
    CaseDataTableComponent,
    CaseHeatmapComponent,
    FormatDatetimePipe,
    FormatResultsJsonPipe,
    ResultsExpiryPipe
  ],
  entryComponents:[DialogCaseDetailsComponent]
})
export class SharedModule {
}
