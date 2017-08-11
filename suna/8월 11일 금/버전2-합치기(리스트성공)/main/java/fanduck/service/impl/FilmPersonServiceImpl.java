package fanduck.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fanduck.dao.FilmPersonDao;
import fanduck.domain.FilmPerson;
import fanduck.service.FilmPersonService;

@Service
public class FilmPersonServiceImpl implements FilmPersonService {
	
  @Autowired
  FilmPersonDao FilmPersonDao;
  
	@Override
	public List<FilmPerson> list() throws Exception {
	  HashMap<String,Object> valueMap = new HashMap<>();
      return FilmPersonDao.selectList(valueMap);
	}

	@Override
	public void add(FilmPerson FilmPerson) throws Exception {
	  FilmPersonDao.insert(FilmPerson);
	}

	@Override
	public void update(FilmPerson FilmPerson) throws Exception {
	
	}

	@Override
	public void remove(String FilmPersonNo) throws Exception {
	  FilmPersonDao.delete(FilmPersonNo);
		
	}

}
 






