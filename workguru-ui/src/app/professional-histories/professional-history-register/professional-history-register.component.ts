import { Component } from '@angular/core';
import { ProfessionalHistory } from '../../core/models';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../security/auth.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProfessionalHistoryService } from '../professional-history.service';

@Component({
  selector: 'app-professional-history-register',
  templateUrl: './professional-history-register.component.html',
  styleUrl: './professional-history-register.component.css'
})
export class ProfessionalHistoryRegisterComponent {

  professionalHistory = new ProfessionalHistory(this.auth.jwtPayload?.user_id);


      constructor(
        private professionalHistoryService: ProfessionalHistoryService,
        private errorHandler: ErrorHandlerService,
        private messageService: MessageService,
        private auth: AuthService,
        private route: ActivatedRoute,
      ){}

      ngOnInit(): void {
        const id = this.route.snapshot.params[`id`];
        if(id !== undefined && id !== "new"){
          this.loadProfessionalHistory(id);
        }
      }

      get editing(): boolean {
        return Boolean(this.professionalHistory.id);
      }

      save(professionalHistoryForm: NgForm){
        if(this.editing){
          this.updateProfessionalHistory(professionalHistoryForm);
        }else{
          this.addProfessionalHistory(professionalHistoryForm);
        }
      }

      updateProfessionalHistory(professionalHistoryForm: NgForm) {
        this.professionalHistoryService.update(this.professionalHistory)
          .then( professionalHistory => {
            this.messageService.add({ severity: 'success', detail: 'Histórico editado com sucesso!' });
            this.professionalHistory = professionalHistory;
          })
          .catch(error => this.errorHandler.handle(error));
      }

      new(professionalHistoryForm: NgForm){
            this.professionalHistory = new ProfessionalHistory(this.auth.jwtPayload?.user_id);
            professionalHistoryForm.reset();
          }

          addProfessionalHistory(professionalHistoryForm: NgForm) {
            this.professionalHistoryService.add(this.professionalHistory)
              .then(addedProfessionalHistory => {
                this.hideIframe();
                this.messageService.add({ severity: 'success', detail: 'Histórico adicionado com sucesso!' });

          this.loadProfessionalHistory(addedProfessionalHistory.id);

              })
              .catch(error => this.errorHandler.handle(error));
          }

          loadProfessionalHistory(id: number) {
            this.professionalHistoryService.findById(id)
              .then(professionalHistory => {
                this.professionalHistory = professionalHistory;
              })
              .catch(error => this.errorHandler.handle(error));
          }

          hideIframe(){
            window.parent.postMessage('hideIframeHistory', '*');
          }
}
