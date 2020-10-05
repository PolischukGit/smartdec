import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { KeyCheckerComponent } from './key-checker/key-checker.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TabsComponent, FooterComponent, HeaderComponent, UserInfoComponent, KeyCheckerComponent],
  exports: [TabsComponent, FooterComponent, HeaderComponent, UserInfoComponent, KeyCheckerComponent],
    imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class SharedComponentsModule { }
