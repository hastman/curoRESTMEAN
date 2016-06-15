package es.curso.rest.dropwizard.model;


import com.sun.jersey.server.linking.Link;
import com.sun.jersey.server.linking.Ref;
import es.curso.rest.dropwizard.resources.ResourceSample;
import lombok.Data;

import java.net.URI;

import static com.sun.jersey.server.linking.Ref.Style.ABSOLUTE;

@Data
@Link(value = @Ref(resource = ResourceSample.class, style = ABSOLUTE, method = "getModel"), rel = "self")
public class ModelSample {

    @Ref(resource = ResourceSample.class, style = Ref.Style.ABSOLUTE, method = "getModel")
    private URI self;

    private  Integer id;
    private  String nombre;
    private  Long edad;
    private  SubModelSample subModel;

    public ModelSample(){

    }

    public ModelSample(Integer id, String nombre, Long edad, SubModelSample subModel) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.subModel = subModel;
    }
}
