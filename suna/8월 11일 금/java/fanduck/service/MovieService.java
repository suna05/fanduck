package fanduck.service;

import java.util.List;

import fanduck.domain.Movie;

public interface MovieService {
  List<Movie> list() throws Exception;
  void add(Movie movie) throws Exception;
  void update(Movie movie) throws Exception;
  void remove(String movieNo) throws Exception;
}







