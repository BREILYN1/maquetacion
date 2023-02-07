import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/cursos";
  async getConditionalDataUsingAsync() {
    let data = await this.http.get<any>(this.url).toPromise();
    console.log(data)
  }
  ngOnInit() {
    this.getConditionalDataUsingAsync()
  }
}
