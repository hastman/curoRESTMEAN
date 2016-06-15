package es.curso.rest.lab1.repository;

import es.curso.rest.lab1.model.Libro;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class LibroRepository implements BaseRepository<Libro, Integer> {


    Map<Integer, Libro> inMemoryDB;
    Integer fakeIndex;

    @PostConstruct
    public void initDB() {
        inMemoryDB = new HashMap<Integer, Libro>();
        fakeIndex = 0;
    }

    @Override
    public List<Libro> findAll() {
        return new ArrayList<Libro>(inMemoryDB.values());
    }

    @Override
    public Libro findById(Integer id) {
        return inMemoryDB.get(id);
    }

    @Override
    public Integer save(Libro toSave) {
        fakeIndex++;
        toSave.setIdLibro(fakeIndex);
        inMemoryDB.put(fakeIndex, toSave);
        return fakeIndex;
    }

    @Override
    public Libro update(Integer id, Libro toUpdate) {
        inMemoryDB.remove(id);
        return inMemoryDB.put(id, toUpdate);
    }
}
