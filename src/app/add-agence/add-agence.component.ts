import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {AgencyService} from "../agency.service";

@Component({
  selector: 'app-add-agence',
  templateUrl: './add-agence.component.html',
  styleUrls: ['./add-agence.component.css']
})
export class AddAgenceComponent implements OnInit{

  title: string = 'Ajout une Agence';
  description: string = 'je suis la description a la page';

  constructor(
    private router: Router,
    private agencyService: AgencyService,
    private app: AppComponent
  ) { }

  ngOnInit() {

    //VERIF TOKEN
    this.app.verifToken();

  }

  createAgence(form: NgForm){
      console.log(form.value);

    let name:string = form.value['name'];
    let siret:string = form.value['siret'];
    let path:string = "https://seeklogo.com/images/1/1-1-logo-30C063CEFA-seeklogo.com.png";
    let color:string = form.value['color'];
    let email:string = form.value['email'];
    let phone:string = form.value['phone'];
    let tva:string = form.value['tva'];

    let bodyNoJsonAgency: any = {
      "name":name,
      "siret":siret,
      "path":path,
      "color":color,
      "email":email,
      "phone":phone,
      "tva":tva,
    };
    const bodyAgency = JSON.stringify(bodyNoJsonAgency);

    this.agencyService.postAgency(bodyAgency, this.app.setURL(), this.app.createCorsToken()).subscribe(reponseCreateAgency => {

      if(reponseCreateAgency['status'] == true){
        alert("CREER");
        this.router.navigate(['/admin']);
      } else if (reponseCreateAgency['status'] == false){
        alert(reponseCreateAgency['message']);
      } else {
        alert("err");
      }

    })
  }



  // GENERATEUR DE PDF

  nameDefault: string = "agence1";
  nameTemp: string = this.nameDefault;
  showName(name: string){
    if (name){
      this.nameTemp = name;
    } else {
      this.nameTemp = this.nameDefault;
    }
  }

  siretDefault: string = "553 279 879 00672";
  siretTemp: string = this.siretDefault;
  showSiret(siret: string){
    if (siret){
      this.siretTemp = siret;
    } else {
      this.siretTemp = this.siretDefault
    }
  }

  tvaDefault: string = "FR 53 157896342";
  tvaTemp: string = this.tvaDefault;
  showTva(tva: string) {
    if (tva) {
      this.tvaTemp = tva;
    } else {
      this.tvaTemp = this.tvaDefault;
    }
  }

  colorDefault: string = "#000000";
  colorTemp: string = this.colorDefault;
  showColor(color: string) {
    if (color) {
      this.colorTemp = color;
    } else {
      this.colorTemp = this.colorDefault;
    }
  }

  emailDefault: string = "dupont@xyzindustrie.com";
  emailTemp: string = this.emailDefault;
  showEmail(email: string) {
    if (email) {
      this.emailTemp = email;
    } else {
      this.emailTemp = this.emailDefault;
    }
  }


  phoneDefault: string = "+33 1 23 45 67 89";
  phoneTemp: string = this.phoneDefault;
  showPhone(phone: string) {
    if (phone) {
      this.phoneTemp = phone;
    } else {
      this.phoneTemp = this.phoneDefault;
    }
  }



}
