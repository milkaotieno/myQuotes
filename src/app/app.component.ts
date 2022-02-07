import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuoteListFormComponent } from './quote-list-form/quote-list-form.component'
import { QuoteListComponent } from './quotes/quote-list.component'
import { Quote } from './quotes/quote'

@Component({
  selector: 'lq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: [QuoteListComponent]
})

export class AppComponent {
  pageTitle: string = 'LifeQuotes';

  constructor(private modalService: NgbModal) { }
  public quote = {}

  quotes: Quote[] = [new Quote(
   "Peace begins with a smile."
    "Mother_Teresa",
    new Date('2022, 07, 02'),
    "Motieno"
  ),
  new Quote(
    "The only true wisdom is in knowing you know nothing.",
    new Date('2022, 07, 02'),
    "Socrates"
  ),
  new Quote(
    "Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and \
    studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.",
    "William Faulkner",
    new Date('2022, 07, 02'),
    "Motieno"
  )
  ]
  openFormModal() {
    const modalRef = this.modalService.open(QuoteListFormComponent);
    modalRef.componentInstance.quote = this.quote;

    modalRef.result.then((result: { quote: any; author: any; addedBy: any; }) => {
      this.quotes.push(new Quote(result.quote, result.author, new Date(), result.addedBy))
    }).catch((error: any) => {
      console.log(error);
    });
  }
}