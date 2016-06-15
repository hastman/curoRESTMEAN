package es.curso.rest.spring.controller;

import es.curso.rest.spring.model.SampleModel;
import es.curso.rest.spring.model.SubModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityLinks;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/sample")
@ExposesResourceFor(SampleModel.class)
public class SampleController {

    @Autowired
    private EntityLinks entityLinks;

    Map<Integer, SampleModel> fakeRepo;
    Integer fakeId;

    @PostConstruct
    public void initFakeRepo() {
        fakeRepo = new HashMap<Integer, SampleModel>();
        fakeRepo.put(0, new SampleModel(0, "Test", 12l, new SubModel("hola", "apellido")));
        fakeRepo.put(1, new SampleModel(1, "Otro test", 102l, new SubModel("adios", "apellido")));
        fakeId = 2;
    }


    @RequestMapping(path = "", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public HttpEntity<Resources<SampleModel>> allModels() {
        Resources<SampleModel> resources = new Resources<SampleModel>(
               this.fakeRepo.values());
        resources.add(this.entityLinks.linkToCollectionResource(SampleModel.class));
        return new ResponseEntity<Resources<SampleModel>>(resources, HttpStatus.OK);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public HttpEntity<Resource<SampleModel>> model(@PathVariable("id") Integer id) {
        Resource<SampleModel> resource = new Resource<SampleModel>(
                this.fakeRepo.get(id));
        resource.add(this.entityLinks.linkToSingleResource(SampleModel.class, id));
        return new ResponseEntity<Resource<SampleModel>>(resource, HttpStatus.OK);
    }


    @RequestMapping(path = "", method = RequestMethod.POST, consumes = APPLICATION_JSON_VALUE)
    public HttpEntity<Resource<SampleModel>> add(@RequestBody SampleModel sampleModel) {
        fakeRepo.put(fakeId, new SampleModel(fakeId, sampleModel.getNombre(), sampleModel.getEdad(), sampleModel.getSubModel()));
        fakeId++;
        return new ResponseEntity<Resource<SampleModel>>(HttpStatus.CREATED);
    }

}
