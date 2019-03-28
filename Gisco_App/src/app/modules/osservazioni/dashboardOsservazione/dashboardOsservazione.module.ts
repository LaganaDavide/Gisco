import { NgModule } from '@angular/core'
import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../../componenti/components.module';
import { AgmCoreModule } from '@agm/core';
import { DashboardOsservazionePage } from '../../../pages/osservazioni/dashboard-osservazione/dashboard-osservazione';

@NgModule({
	declarations: [DashboardOsservazionePage],
	imports: [IonicModule, ComponentsModule, AgmCoreModule],
	exports: [DashboardOsservazionePage]
})
export class DashboardOsservazioneModule {}
