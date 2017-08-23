package fanduck.service;

import java.util.List;

import fanduck.domain.FilmPerson;

public interface FilmPersonService {
  List<FilmPerson> list() throws Exception;
  void add(FilmPerson filmPerson) throws Exception;
  void update(FilmPerson filmPerson) throws Exception;
  void remove(String fpCode) throws Exception;
}







