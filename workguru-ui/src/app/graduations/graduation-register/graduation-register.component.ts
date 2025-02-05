import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { GraduationService } from '../graduation.service';
import { Graduation } from './../../core/models';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../security/auth.service';

@Component({
  selector: 'app-graduation-register',
  templateUrl: './graduation-register.component.html',
  styleUrl: './graduation-register.component.css'
})
export class GraduationRegisterComponent {

  graduation = new Graduation(this.auth.jwtPayload?.user_id);

  degrees = [
    { label: 'Bacharelado', value: 'BACHARELADO' },
    { label: 'Licenciatura', value: 'LICENCIATURA' },
    { label: 'Tecnólogo', value: 'TECNOLOGO' },
    { label: 'Mestrado', value: 'MESTRADO'},
    { label: 'Doutorado', value: 'DOUTORADO' },
    { label: 'Pós-doutorado', value: 'POS_DOUTORADO' },
    { label: 'Técnico', value: 'TECNICO' },
    { label: 'Ensino médio', value: 'ENSINO_MEDIO'}
  ];

    constructor(
      private graduationService: GraduationService,
      private errorHandler: ErrorHandlerService,
      private messageService: MessageService,
      private auth: AuthService,
      private route: ActivatedRoute,
    ){}

    ngOnInit(): void {
      const id = this.route.snapshot.params[`id`];
      if(id !== undefined && id !== "new"){
        this.loadGraduation(id);
      }
    }

    get editing(): boolean {
      return Boolean(this.graduation.id);
    }

    save(graduationForm: NgForm){
      if(this.editing){
        this.updateGraduation(graduationForm);
      }else{
        this.addGraduation(graduationForm);
      }
    }

    updateGraduation(graduationForm: NgForm) {
      this.graduationService.update(this.graduation)
        .then( graduation => {
          this.messageService.add({ severity: 'success', detail: 'Formação editada com sucesso!' });
          this.graduation = graduation;
        })
        .catch(error => this.errorHandler.handle(error));
    }

    new(graduationForm: NgForm){
          this.graduation = new Graduation(this.auth.jwtPayload?.user_id);
          graduationForm.reset();
        }

        addGraduation(graduationForm: NgForm) {
          this.graduationService.add(this.graduation)
            .then(addedGraduation => {
              this.messageService.add({ severity: 'success', detail: 'Formação adicionada com sucesso!' });

        this.loadGraduation(addedGraduation.id);

            })
            .catch(error => this.errorHandler.handle(error));
        }

        loadGraduation(id: number) {
          this.graduationService.findById(id)
            .then(graduation => {
              this.graduation = graduation;
            })
            .catch(error => this.errorHandler.handle(error));
        }

        hideIframe(){
          window.parent.postMessage('hideIframe', '*');
        }





}

