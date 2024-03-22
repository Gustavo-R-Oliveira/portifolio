import { NgModule } from '@angular/core';
import { BlobAvatarComponent } from './components/blob-avatar/blob-avatar.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [BlobAvatarComponent, IconComponent],
  imports: [],
  exports: [BlobAvatarComponent, IconComponent],
})
export class SharedModule {}
