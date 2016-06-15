package es.curso.rest.dropwizard.resources;


import es.curso.rest.dropwizard.model.ModelSample;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Path("/sample")
@Produces(MediaType.APPLICATION_JSON)
public class ResourceSample {

    Map<Integer, ModelSample> fakeRepo = new HashMap<>();
    Integer fakeId = 0;

    @GET
    @Path("{id}")
    public ModelSample getModel(@PathParam("id") Integer id) {
        return fakeRepo.get(id);
    }

    @GET
    public List<ModelSample> get() {
        return new ArrayList<>(fakeRepo.values());
    }

    @POST
    public void add(ModelSample sampleModel) {
        fakeRepo.put(fakeId, new ModelSample(fakeId, sampleModel.getNombre(), sampleModel.getEdad(), sampleModel.getSubModel()));
        fakeId++;
    }

}
