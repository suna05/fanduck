package fanduck.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fanduck.dao.MoviePersonDao;
import fanduck.domain.MoviePerson;
import fanduck.service.MoviePersonService;

@Service
public class MoviePersonServiceImpl implements MoviePersonService {
	
  @Autowired
  MoviePersonDao moviePersonDao;

  public List<MoviePerson> list() throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    
    return moviePersonDao.selectList(valueMap);
  }

@Override
public MoviePerson get(int no) throws Exception {
	// TODO Auto-generated method stub
	return null;
}

@Override
public int getSize() throws Exception {
	// TODO Auto-generated method stub
	return 0;
}

@Override
public void add(MoviePerson moviePerson) throws Exception {
    moviePersonDao.insert(moviePerson);
	
}

@Override
public void update(MoviePerson moviePerson) throws Exception {
	// TODO Auto-generated method stub
	
}

@Override
public void remove(int mpNo) throws Exception {
	moviePersonDao.delete(mpNo);
	
}
  
/*
  public MoviePerson get(int no) throws Exception {
    return MoviePersonDao.selectOne(no);
  }
  
  public MoviePerson getByEmailPassword(String email, String password) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("email", email);
    valueMap.put("password", password);
    
    return MoviePersonDao.selectOneByEmailPassword(valueMap);
  }
  
  @Override
  public int getSize() throws Exception {
    return MoviePersonDao.countAll();
  }
  
  // XML 태그로 트랜잭션을 설정하게 되면 @Transactional 애노테이션은 필요없다.
  //@Transactional(propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
  public void add(MoviePerson MoviePerson) throws Exception {
    memberDao.insert(MoviePerson);
    MoviePersonDao.insert(MoviePerson);
    this.insertPhoto(MoviePerson.getNo(), MoviePerson.getPhotoList()); // 강사 사진 추가
  }
  
  //XML 태그로 트랜잭션을 설정하게 되면 @Transactional 애노테이션은 필요없다.
  //@Transactional(propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
  public void update(MoviePerson MoviePerson) throws Exception {
    int count = memberDao.update(MoviePerson);
    if (count < 1) {
      throw new Exception(MoviePerson.getNo() + "번 강사를 찾을 수 없습니다.");
    }
    
    count = MoviePersonDao.update(MoviePerson);
    if (count < 1) {
      throw new Exception(MoviePerson.getNo() + "번 강사를 찾을 수 없습니다.");
    }
    
    // 강사 사진 갱신
    MoviePersonDao.deletePhoto(MoviePerson.getNo()); // 강사의 모든 사진을 지운다.
    this.insertPhoto(MoviePerson.getNo(), MoviePerson.getPhotoList()); // 강사 사진 추가
  }
  
  private void insertPhoto(int MoviePersonNo, List<String> photoPathList) {
    if (photoPathList == null)
      return;
    
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("MoviePersonNo", MoviePersonNo);
    
    for (String photoPath : photoPathList) {
      valueMap.put("photoPath", photoPath);
      MoviePersonDao.insertPhoto(valueMap);
    }
  }
  
  //XML 태그로 트랜잭션을 설정하게 되면 @Transactional 애노테이션은 필요없다.
  //@Transactional(propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
  public void remove(int no) throws Exception {
    MoviePersonDao.deletePhoto(no);
    int count = MoviePersonDao.delete(no);
    if (count < 1) {
      throw new Exception(no + "번 강사를 찾을 수 없습니다.");
    }
    
    try {
      count = memberDao.delete(no);
    } catch (Exception e) {}
  }
*/

}







