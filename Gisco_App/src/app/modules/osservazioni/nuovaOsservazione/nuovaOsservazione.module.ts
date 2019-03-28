

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonicSelectableModule } from 'ionic-selectable';
import { NuovaOsservazionePage } from '../../../pages/osservazioni/nuova-osservazione/nuova-osservazione';

@NgModule({
	declarations: [NuovaOsservazionePage],
	imports: [IonicModule, IonicSelectableModule],
	exports: [NuovaOsservazionePage]
})
export class NuovaOsservazioneModule {}
