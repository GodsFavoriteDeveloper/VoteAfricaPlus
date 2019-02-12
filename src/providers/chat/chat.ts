import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from './environments/environments';
import { Events } from 'ionic-angular';


// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}


@Injectable()
export class ChatProvider {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor(public events: Events,) {}

  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
               .then(res => {
                  const speech = res.result.fulfillment.speech;
                  const botMessage = new Message(speech, 'bot');
                  this.update(botMessage);
                  this.events.publish('hello', 'Norman')
               }).catch((error)=>{
                console.error(error)
               });
  }


  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }

}

