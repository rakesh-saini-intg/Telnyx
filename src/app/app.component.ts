import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TelnyxRTC } from '@telnyx/webrtc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Telnyx';
  constructor(private http: HttpClient) { }
  ngOnInit() {
     this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((d)=>{
       console.log(d)
     })
  }

  onSubmit(data:any){
    console.warn(data);
    if(data.SentToMsg == '' && data.SentTo == ''){
      alert("Enter Valid Data")
      return;
    }
    const headers = { 'Authorization': 'Bearer KEY017869E3526CCFDE1219DD7E9426565D_1gagsnapOuGviA2Cn79PB5'};
    const body = {
      "from": "+917971279011",
      "to": data.SentTo,
      "text": data.SentToMsg,
      "media_urls" : []
    }
    this.http.post("https://api.telnyx.com/v2/messages",body,{headers}).subscribe((d)=>{
       console.log(d)
     })
  }
}
