import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Message} from 'primeng/primeng';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-post-code-component',
  templateUrl: './post-code-component.component.html',
  providers: [PostService],
  styleUrls: ['./post-code-component.component.css']
})
export class PostCodeComponentComponent implements OnInit {
postCode: any;
results: any= [];
suburbs: any= [];
isSearchActive= false;
tableData: any= [];
msgs: Message[] = [];
private subscriptions: Subscription[] = [];
  constructor(private ps: PostService) {
     this.postCode = undefined;
  }
  ngOnInit(): void {
  }

  changeSearchText(){   /*function triggers when poostcode greater than length 3 is entered in the input*/
    if (this.postCode && this.postCode.trim().length > 2){
        this.subscriptions.push( this.ps.getPostCodes(this.postCode).subscribe((data: any) => {
           this.assignPost(data);
              }, (err: any) => {
                this.msgs = [];
                this.msgs.push({severity:'error', summary:'Failure', detail:'Unable to fetch details(blocked by CORS policy)'});
              }));
    }
  }

  isObject(val): boolean { return typeof val === 'object'; }  /*function to check whether value is object*/

  searchSuburb(e: any){   /*function to search for suburbs within 4km range*/
    this.msgs = [];
    if (this.postCode) {
       this.subscriptions.push(this.ps.getNearSuburbs(this.postCode).subscribe((data: any) => {
        this.assignSuburbs(data);
      }, (err: any) => {
          this.msgs.push({severity:'error', summary:'Failure', detail:'Unable to fetch details(blocked by CORS policy)'});
      }));
    }
    if (!this.postCode || this.postCode.length === 0){
      this.msgs.push({severity: 'warn', summary: 'No results found', detail: 'Enter a valid search'});
      this.tableData = [];


    }
  }

  assignPost(data: any){   /*assign data to postcode autocomplete*/
    this.results = data;
  }

  assignSuburbs(data: any){  /*assign data to suburb datatable*/
    this.isSearchActive = true;
    this.suburbs = data;
    if (this.suburbs && this.suburbs.length > 0){
      this.suburbs.map(d => {
          d.stateName = d.state.name;
        });
        this.tableData = this.suburbs;
        console.log(this.suburbs);
    }
  }

  clearSubscriptions() {
    this.subscriptions.map(s => {
      s.unsubscribe();
    });
  }

  ngOnDestroy() {
    this.clearSubscriptions();  /*clear all subscriptions in the component*/
  }

}
