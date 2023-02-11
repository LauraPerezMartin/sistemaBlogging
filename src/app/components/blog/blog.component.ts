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
        imageURL: 'https://img.freepik.com/vector-premium/ilustracion-literatura-diseno-plano-dibujado-mano_23-2149300321.jpg?w=740',
        text: '<p> hendrerit est id finibus condimentum. Curabitur malesuada justo at ligula varius ultricies. Duis a nisl ligula. Praesent arcu lorem, sagittis at metus non, posuere fermentum diam. Quisque mollis arcu eu sapien fringilla malesuada. Nulla rhoncus erat at urna semper, id dignissim felis ultricies. Sed nec urna eu arcu fermentum diam euismod aliquam eu sed nisi.</p><p>Donec ultrices sollicitudin arcu, at aliquam tellus ornare eu alesuada elementum. Etiam viverra aliquet sollicitudin. Integer tempus urna ipsum. Aenean turpis nisi, scelerisque vitae nulla non, malesuada tincidunt massa.</p><p>Donec porttitor erat non elit efficitur, eget volutpat augue blandit. Maecenas gravida, nisl id accumsan dapibus, metus neque viverra quam, in aliquet ex mauris rhoncus lacus. Nunc ante felis, feugiat sit amet suscipit sit amet, eleifend non nibh.</p><p>Donec ultrices sollicitudin arcu, at aliquam tellus ornare eu alesuada elementum. Etiam viverra aliquet sollicitudin. Integer tempus urna ipsum. Aenean turpis nisi, scelerisque.</p>'
      },
      {
        id: 2,
        title: 'Quia dolor sit amet, consectetur, adipisci velit',
        date: '05/02/2023',
        imageURL: 'https://img.freepik.com/vector-gratis/ilustracion-criatura-creativa-colorida_516247-6.jpg?w=740&t=st=1676111178~exp=1676111778~hmac=166d69f1c48888c556d22c377e4c05d6c7be60dbb8a457eeb0dafb4462347413',
        text: '<p>Donec sollicitudin dolor ipsum, placerat tempus urna accumsan rutrum. Curabitur ut semper dolor. Donec commodo dignissim erat, vitae lacinia nunc faucibus vel. Nullam posuere fermentum diam quis turpis eu blandit.</p><p>Cras feugiat malesuada elementum. Nunc posuere, dolor sed luctus tempus, lorem nunc suscipit nulla, ut vehicula ante est vel felis. Proin quis lectus nibh. Proin et pulvinar odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur luctus nec ex non consequat.</p><p>Cras suscipit aliquet ullamcorper. Nulla facilisi. Donec porttitor erat non elit efficitur, eget volutpat augue blandit. Maecenas ut neque sit amet eros rhoncus luctus quis sed metus. Nunc ante felis, feugiat sit amet suscipit sit amet, eleifend non nibh.</p><p>Donec ultrices sollicitudin arcu, at aliquam tellus ornare eu alesuada elementum. Etiam viverra aliquet sollicitudin. Integer tempus urna ipsum. Aenean turpis nisi, scelerisque vitae nulla non, malesuada tincidunt massa.</p>'
      }
    ]
    this.cargarNoticias (); //añado noticias a listadoHTML para pintarlas la primera vez
  }

  cargarNoticias (): void {
    this.listadoHTML = "";
    this.listadoHTML= this.arrNoticias.reduce((acc: string, noticia): string => {
      return acc + `<article class="noticiaWrapper">
      <div class="imagen"><img class="imageResonsive" src="${noticia.imageURL}" /></div>
      <div class="noticiaContent">
        <h2>${noticia.title}</h2>
        <p class="date">${noticia.date}</p>
        <p>${noticia.text}</p>
      </div>
    </article>`;
    }, "")
  }

  guardarNoticia(): void {
    if (this.titulo !== "" && this.fecha !== "" && this.imagenURL !== "" && this.texto ) {
      const fechaOrdenada: string = this.ordenarFecha(this.fecha); //ordeno la fecha que viene al reves

      let noticia: Noticia= {
        id: this.contId,
        title: this.titulo,
        date: fechaOrdenada,
        imageURL: this.imagenURL,
        text: this.texto
      }
      
      this.arrNoticias.push(noticia);
      this.cargarNoticias ();

      this.contId ++; //una vez añadida la noticia al array inicializo las variables
      this.titulo = "";
      this.fecha = "";
      this.imagenURL = "";
      this.texto = "";

    } else {
      alert ('Tienes que rellenar todos los campos para guardar la noticia');
    }
 
  }

  ordenarFecha(fecha: string): string { //ordeno la fecha
    const arrFecha = fecha.split('-');
    arrFecha.reverse();
    return arrFecha.join('/');
  }
  
}
