package es.curso.rest.spring.model;

import lombok.Data;

@Data
public class SampleModel {

    private Integer id;
    private String nombre;
    private Long edad;
    private SubModel subModel;

    public SampleModel() {
    }

    public SampleModel(Integer id, String nombre, Long edad, SubModel subModel) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.subModel = subModel;
    }
}
