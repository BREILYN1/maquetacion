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
  botonF1: any = ""
  botonF2: any = ""
  botonF3: any = ""
  botonF4: any = ""
  btn: any = ""
  container: any = "";


  frases: Array<any> = []
  constructor(private http: HttpClient) { }
  url = "http://localhost:3004/frases";
  async getConditionalDataUsingAsync() {
    this.frases = await this.http.get<any>(this.url).toPromise();
    this.frase = JSON.stringify(this.frases[this.dia - 1].frase);
  }

  handleMouseEnter(): void {
    this.botonF1 = document.getElementById('botonF1');
    this.botonF2 = document.getElementById('botonF2');
    this.botonF3 = document.getElementById('botonF3');
    this.botonF4 = document.getElementById('botonF4');
    console.log(this.botonF1);
    this.botonF1?.classList.add('animacionVer');
    this.botonF2?.classList.add('animacionVer');
    this.botonF3?.classList.add('animacionVer');
    this.botonF4?.classList.add('animacionVer');  
  }
  handleMouseOver(): void {
    this.botonF1 = document.getElementById('botonF1');
    this.botonF2 = document.getElementById('botonF2');
    this.botonF3 = document.getElementById('botonF3');
    this.botonF4 = document.getElementById('botonF4');
    console.log(this.container);
    this.botonF1?.classList.remove('animacionVer');
    this.botonF2?.classList.remove('animacionVer');
    this.botonF3?.classList.remove('animacionVer');
    this.botonF4?.classList.remove('animacionVer');  
    
  }

  ngOnInit() {
    this.getConditionalDataUsingAsync()

  }

 
}



  


