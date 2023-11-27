import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";
import {UserInterface} from "../user-interface";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private app: AppComponent) { }

  title: string = 'Ton Profile';
  description: string = 'je suis la description a la page';
  userConnected: UserInterface|any = this.app.userConnected;

  ngOnInit() {

    //VERIF TOKEN
    this.app.verifToken();

  }

  loggout(){
    this.app.loggout();
  }


  profileStates = {
    editProfile: false,
    changePassword: false,
    showDetails: true
  };

  tabHandler(tab: string) {
    const editProfileTab = tab.includes('edit-profile');
    const changePassTab = tab.includes('change-password');

    if (editProfileTab && !this.isEditProfileShowing()) {
      this.hideDetails();
      this.showEditProfile();
    } else if (changePassTab && !this.isChangePasswordShowing()) {
      this.hideDetails();
      this.showChangePassword();
    } else if ((editProfileTab && this.isEditProfileShowing()) || (changePassTab && this.isChangePasswordShowing())) {
      this.pageReset();
    }
  }

  pageReset() {
    this.showDetails();
    this.profileStates.editProfile = false;
    this.profileStates.changePassword = false;
  }

  showDetails() {
    this.profileStates.showDetails = true;
  }

  hideDetails() {
    this.profileStates.showDetails = false;
  }

  showEditProfile() {
    this.profileStates.editProfile = true;
  }

  showChangePassword() {
    this.profileStates.changePassword = true;
  }

  isDetailsShowing() {
    return this.profileStates.showDetails;
  }

  isChangePasswordShowing() {
    return this.profileStates.changePassword;
  }

  isEditProfileShowing() {
    return this.profileStates.editProfile;
  }

}
