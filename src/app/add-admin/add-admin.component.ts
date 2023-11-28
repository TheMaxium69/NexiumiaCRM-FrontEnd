import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit{

  constructor(
    private router: Router,
    private userService: UserService,
    private app: AppComponent
  ) { }

  ngOnInit() {

    //VERIF TOKEN
    this.app.verifToken();

  }

  createAdmin(form: NgForm){

    let firstName:string = form.value['firstName'];
    let lastName:string = form.value['lastName'];
    let email:string = form.value['email'];
    let content:string = form.value['content'];

    let bodyNoJsonAdmin: any = {
      "firstName":firstName,
      "lastName":lastName,
      "email":email,
      // "content":content
    };
    const bodyAdmin = JSON.stringify(bodyNoJsonAdmin);

    this.userService.postUserAdmin(bodyAdmin, this.app.setURL(), this.app.createCorsToken()).subscribe(reponseCreateAdmin => {

      if(reponseCreateAdmin['status'] == true){
        alert("CREER");
        this.router.navigate(['/admin']);
      } else if (reponseCreateAdmin['status'] == false){
        alert(reponseCreateAdmin['message']);
      } else {
        alert("err");
      }

    })

  }

}
