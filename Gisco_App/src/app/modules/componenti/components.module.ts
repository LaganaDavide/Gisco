import { NgModule } from '@angular/core';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [PageHeaderComponent],
	imports: [IonicModule],
	exports: [PageHeaderComponent, IonicModule]
})
export class ComponentsModule {}
