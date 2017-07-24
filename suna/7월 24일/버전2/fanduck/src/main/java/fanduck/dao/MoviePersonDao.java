package fanduck.dao;

import java.util.List;
import java.util.Map;

import fanduck.domain.MoviePerson;

public interface MoviePersonDao {
  List<MoviePerson> selectList(Map<String, Object> valueMap);
  MoviePerson selectOne(int mpNo);
//  Teacher selectOneByEmailPassword(Map<String,Object> valueMap);
  int countAll();
  int insert(MoviePerson moviePerson);
  int delete(int mpNo);
  int update(MoviePerson moviePerson);
  void insertPhoto(String mpPhotoPath);
  String selectPhoto(int mpNo);
  void deletePhoto(int mpNo);
}
