import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ChatProvider, Message } from '../../providers/chat/chat';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage implements OnInit {
  @ViewChild(Content) content: Content;
  messages: Observable<Message[]>;
  formValue: string;
  isLoading: boolean = false;
  isEnabled: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chat: ChatProvider, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );

    this.chat.conversation.subscribe((data)=>{
      if(data){
        this.isLoading = false;
        this.content.scrollToBottom().then((data)=>{
          console.log(data + 'done')
        }).catch((error)=>{
          console.log(error + 'undone')
        })
      }
    })
  }

  onChangeText(a:any){
    if(a.length > 3){
      this.isEnabled = true
    } else {
      this.isEnabled = false
    }
  }


  sendMessage() {
    if(this.formValue.length > 2){
      this.chat.converse(this.formValue);
      this.formValue = '';
      this.isLoading = true;
    } else {
      this.isEnabled = false
    }
    
  }

}
