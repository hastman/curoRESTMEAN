package es.curso.rest.dropwizard.model;

import lombok.Data;

@Data
public class SubModelSample {

    private String nombre;
    private String apellido;

    public SubModelSample() {

    }

    public SubModelSample(String nombre, String apellido) {

        this.nombre = nombre;
        this.apellido = apellido;
    }
}
