package es.curso.rest.lab1.repository;

import java.util.List;

public interface BaseRepository<T, ID> {


    List<T> findAll();

    T findById(ID id);

    ID save(T toSave);

    T update(ID id, T toUpdate);

}
