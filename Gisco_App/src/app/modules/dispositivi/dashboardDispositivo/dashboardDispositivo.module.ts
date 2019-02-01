import { NgModule } from '@angular/core'
import { DashboardDispositivoPage } from '../../../pages/dispositivi/dashboard-dispositivo/dashboard-dispositivo';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [DashboardDispositivoPage],
	imports: [IonicModule],
	exports: [DashboardDispositivoPage]
})
export class DashboardDispositivoModule {}
