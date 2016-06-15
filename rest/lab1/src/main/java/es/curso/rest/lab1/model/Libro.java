package es.curso.rest.lab1.model;


import lombok.Data;

@Data
public class Libro {

    private Integer idLibro;
    private String titulo;
    private String autor;
    private Boolean prestado;

    public Libro() {
    }

    public Libro(Integer idLibro, String titulo, String autor, Boolean prestado) {
        this.idLibro = idLibro;
        this.titulo = titulo;
        this.autor = autor;
        this.prestado = prestado;
    }
}
