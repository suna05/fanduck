package fanduck.dao;

import java.util.List;
import java.util.Map;

import fanduck.domain.Movie;

public interface MovieDao {
  List<Movie> selectList(Map<String, Object> valueMap);
  int insert(Movie movie);
  int delete(String movieNo);
  int update(Movie movie);
}
