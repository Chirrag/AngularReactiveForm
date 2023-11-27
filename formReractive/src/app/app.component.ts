import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm !:FormGroup
  title = 'formReractive';
  submitted= false;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    // Validation 
  this.registerForm=this.formBuilder.group({
   firstName:['',Validators.required],
   lastName:['',Validators.required],
   Email:['',[Validators.required,Validators.email]],
   Password:['',[Validators.required,Validators.minLength(8)]]
  })    
  }

  onSubmit(){
    this.submitted= true

    if(this.registerForm.invalid){
      return
    }
    alert('success')
  }
}
