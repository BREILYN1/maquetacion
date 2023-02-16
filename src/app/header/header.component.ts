import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  fecha = new Date()
  dia = this.fecha.getDay()
  frase = ""

  frases:Array<any> = []
  constructor(private http: HttpClient) { }
  url = "http://localhost:3004/frases";
  async getConditionalDataUsingAsync() {
    this.frases = await this.http.get<any>(this.url).toPromise();
    this.frase = JSON.stringify(this.frases[this.dia -1].frase);
  }
  ngOnInit() {
    this.getConditionalDataUsingAsync()
  }

  

}
