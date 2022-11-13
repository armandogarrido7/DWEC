//Clase BookList, no necesita parametros
//Tiene un atributo books que es un array de libros
//Tiene un atributo reading que indica el libro que se esta leyendo actualmente
//Tiene un atributo nextBook que indica el siguiente libro a leer
//Tiene un atributo lastBook que indica el ultimo libro leido
//Metodo add para añadir un libro a la lista
//Metodo finishCurrentBook para marcar el libro actual como leido y pasar al siguiente
//Metodo ordenadr como metodo 'privado' para ordenar la lista de libros en base a si estan leidos o no

class BookList{ 
    constructor() {
        this.read = 0;
        this.notread = 0;
        this.lastRead;
        this.reading;
        this.nextRead;
        this.books = [];
      }

      add(book){
        this.books.push(book);
        if(book.isRead == false)
        this.notread += 1;
        else this.read += 1;
        this.ordenar();
      }

      //En caso de que no haya más libros disponibles, asignará undefined a los atributos nextRead, lastRead y reading.
      finishCurrentBook(){
        this.reading.markAsRead();
        this.reading.setReadDate(new Date(Date.now()));
        this.lastRead = this.reading;
        this.reading = this.nextRead
        if (this.nextRead != undefined){
                this.ordenar()
                if(this.books[0].isRead != true){
                    this.nextRead = this.books[0];
                    this.read += 1;
                    this.notread -= 1;
                }
                else
                this.nextRead = undefined;
            }
        }

        ordenar(){
          this.books.sort((a, b)=> {
              if(a.isRead == true && b.isRead == false)
                  return -1;
              else if(a.isRead == false && b.isRead == true)
                  return 1;
              else return 0
          })
        }
}
      
//Clase Book, necesita un titulo, un autor y un genero, pasados por parametro, (el genero no es obligatorio)
//Tiene un atributo read que indica si el libro ha sido leido o no y un atributo readDate que indica la fecha en la que se ha leido
//Tiene un metodo markAsRead que cambia el atributo read a true
//Tiene un metodo setReadDate que cambia el atributo readDate a la fecha pasada por parametro
class Book{
    constructor(title, author, genre='') {
        this.title = title;
        this.author = author;
        this.genre
        this.isRead = false
        this.readDate
    }

    markAsRead(){
        this.isRead = true;
    }

    setReadDate(date){
        this.readDate = date
    }
    
    setgenre(genre){
        this.genre = genre
    }
}

export {BookList, Book};