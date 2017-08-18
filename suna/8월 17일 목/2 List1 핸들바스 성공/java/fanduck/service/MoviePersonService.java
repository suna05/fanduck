package fanduck.service;

import java.util.List;

import fanduck.domain.MoviePerson;

public interface MoviePersonService {
  List<MoviePerson> list(int mno) throws Exception;
  MoviePerson get(int mno, int mpNo) throws Exception;
  void add(MoviePerson moviePerson) throws Exception;
  void update(MoviePerson moviePerson) throws Exception;
  void remove(MoviePerson moviePerson) throws Exception;
}







