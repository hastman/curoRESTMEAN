package es.curso.rest.spring.model;

import lombok.Data;

@Data
public class SubModel {

    private String nombre;
    private String apellido;

    public SubModel() {
    }

    public SubModel(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
