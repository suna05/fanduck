package fanduck.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fanduck.dao.MovieDao;
import fanduck.domain.Movie;
import fanduck.service.MovieService;

@Service
public class MovieServiceImpl implements MovieService {
	
  @Autowired
  MovieDao movieDao;
  
	@Override
	public List<Movie> list() throws Exception {
	  HashMap<String,Object> valueMap = new HashMap<>();
      return movieDao.selectList(valueMap);
	}

	@Override
	public void add(Movie movie) throws Exception {
	  movieDao.insert(movie);
	}

	@Override
	public void update(Movie movie) throws Exception {
	
	}

	@Override
	public void remove(String movieNo) throws Exception {
	  movieDao.delete(movieNo);
		
	}

}







