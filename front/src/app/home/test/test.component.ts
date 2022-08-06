import { Component, OnInit } from '@angular/core';
import { TestApiClientService } from 'src/app/services/test-api-client.service';
import { TestTranslatorService } from 'src/app/services/test-translator.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [TestApiClientService, TestTranslatorService]
})
export class TestComponent {

  public inputTest = 'coe';

  constructor(private testTranslatorService: TestTranslatorService) {
    testTranslatorService.messages?.subscribe((msg) => {
      console.log('Response user: ' + msg.user);
      console.log('Response recieved from websocket: ' + msg.messageContent);
    });
  }

  private message = {
    user: 'Lucas',
    messageContent: 'msg inicial',
  };

  sendMessage() {
    this.message.messageContent = this.inputTest;
    this.testTranslatorService.messages?.next(this.message);
    console.log('new message from the client: ', this.message);
  }

}
