import { Component } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent {

  public settingsForm: FormGroup;

  constructor(fb: FormBuilder, public settingsService: SettingsService) {
    this.settingsForm = fb.group({
      azure_devops_organisation: settingsService.getSetting('azure_devops_organisation'),
      azure_devops_auth_token: settingsService.getSetting('azure_devops_auth_token')
    });
  }

  saveSettings() {
    this.settingsService.setSetting('azure_devops_organisation', this.settingsForm.get('azure_devops_organisation')?.value);
    this.settingsService.setSetting('azure_devops_auth_token', this.settingsForm.get('azure_devops_auth_token')?.value);
  }

}
