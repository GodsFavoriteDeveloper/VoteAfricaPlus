import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, AlertController } from 'ionic-angular';
import { ChatProvider, Message } from '../../providers/chat/chat';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { Events } from 'ionic-angular';
import { text } from '@angular/core/src/render3/instructions';


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
  disabled: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chat: ChatProvider, public events: Events, public alertCtrl: AlertController) {
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

  async onChangeText(a:any){
    console.log(a)
    if(this.formValue.length > 2){
      this.disabled = true
    } else {
      this.disabled = true
    }
  }


  sendMessage() {
    if(this.formValue.length > 2){
      this.chat.converse(this.formValue);
      this.formValue = '';
      this.isLoading = true;
    } else {
      this.disabled = true
    }
    
  }

}
