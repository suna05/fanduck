package fanduck.dao;

import java.util.List;
import java.util.Map;

import fanduck.domain.FilmPerson;

public interface FilmPersonDao {
  List<FilmPerson> selectList(Map<String, Object> valueMap);
  int insert(FilmPerson FilmPerson);
  int delete(String fpCode);
  int update(FilmPerson FilmPerson);
}
