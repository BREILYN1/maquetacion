import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-orientacion',
  templateUrl: './test-orientacion.component.html',
  styleUrls: ['./test-orientacion.component.css']
})
export class TestOrientacionComponent {

  questions:Array<any> = []
  question: string = ''
  constructor(private http: HttpClient) { }
  url = "http://localhost:3001/questions";
  async getConditionalDataUsingAsync() {
    this.questions = await this.http.get<any>(this.url).toPromise();
    console.log(this.questions);
    
  }
  ngOnInit() {
    this.getConditionalDataUsingAsync()
  }

 
}
