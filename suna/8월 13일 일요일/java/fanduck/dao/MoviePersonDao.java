package fanduck.dao;

import java.util.List;
import java.util.Map;

import fanduck.domain.MoviePerson;

public interface MoviePersonDao {
  List<MoviePerson> selectList(Map<String, Object> valueMap);
  MoviePerson selectOne(int mpNo);
//  Teacher selectOneByEmailPassword(Map<String,Object> valueMap);
  int insert(MoviePerson moviePerson);
  int delete(MoviePerson moviePerson);
  int update(MoviePerson moviePerson);
}
