package fanduck.service;

import java.util.List;

import fanduck.domain.MoviePerson;

public interface MoviePersonService {
  List<MoviePerson> list() throws Exception;
  MoviePerson get(int no) throws Exception;
  int getSize() throws Exception;
  void add(MoviePerson moviePerson) throws Exception;
  void update(MoviePerson moviePerson) throws Exception;
  void remove(int mpNo) throws Exception;
}







