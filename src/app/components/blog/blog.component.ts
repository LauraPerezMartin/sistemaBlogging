import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {
  titulo: string = "";
  fecha: string = "";
  imagenURL: string = "";
  texto: string = "";
  contId: number = 3; //contador de ids
  listadoHTML: string= "";
  arrNoticias: Noticia[] = [];

  constructor () {
    this.arrNoticias = [
      {
        id: 1,
        title: 'Neque porro quisquam est qui dolorem ipsum',
        date: '04/02/2023',
        imageURL: 'https://via.placeholder.com/800',
        text: '<p> hendrerit est id finibus condimentum. Curabitur malesuada justo at ligula varius ultricies. Duis a nisl ligula. Praesent arcu lorem, sagittis at metus non, posuere fermentum diam. Quisque mollis arcu eu sapien fringilla malesuada. Nulla rhoncus erat at urna semper, id dignissim felis ultricies. Sed nec urna eu arcu fermentum diam euismod aliquam eu sed nisi.</p><p>Donec ultrices sollicitudin arcu, at aliquam tellus ornare eu alesuada elementum. Etiam viverra aliquet sollicitudin. Integer tempus urna ipsum. Aenean turpis nisi, scelerisque vitae nulla non, malesuada tincidunt massa.</p><p>Donec porttitor erat non elit efficitur, eget volutpat augue blandit. Maecenas gravida, nisl id accumsan dapibus, metus neque viverra quam, in aliquet ex mauris rhoncus lacus. Nunc ante felis, feugiat sit amet suscipit sit amet, eleifend non nibh.</p>'
      },
      {
        id: 2,
        title: 'Quia dolor sit amet, consectetur, adipisci velit',
        date: '05/02/2023',
        imageURL: 'https://via.placeholder.com/800x700',
        text: '<p>Donec sollicitudin dolor ipsum, placerat tempus urna accumsan rutrum. Curabitur ut semper dolor. Donec commodo dignissim erat, vitae lacinia nunc faucibus vel. Nullam posuere fermentum diam quis turpis eu blandit.</p><p>Cras feugiat malesuada elementum. Nunc posuere, dolor sed luctus tempus, lorem nunc suscipit nulla, ut vehicula ante est vel felis. Proin quis lectus nibh. Proin et pulvinar odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur luctus nec ex non consequat.</p><p>Cras suscipit aliquet ullamcorper. Nulla facilisi. Donec porttitor erat non elit efficitur, eget volutpat augue blandit. Maecenas ut neque sit amet eros rhoncus luctus quis sed metus. Nunc ante felis, feugiat sit amet suscipit sit amet, eleifend non nibh.</p>'
      }
    ]
  }

  cargarNoticias (): string{
    this.listadoHTML = "";
    this.listadoHTML= this.arrNoticias.reduce((acc: string, noticia: any): string => {
      console.log(acc, 'reduce');
      return acc + `<article class="noticiaWrapper">
      <div class="imagen"><img class="imageResonsive" src="${noticia.imageURL}" /></div>
      <div class="noticiaContent">
        <h2>${noticia.title}</h2>
        <p class="date">${noticia.date}</p>
        <p>${noticia.text}</p>
      </div>
    </article>`;
    }, "")
    return this.listadoHTML;
  }
  ;
}
