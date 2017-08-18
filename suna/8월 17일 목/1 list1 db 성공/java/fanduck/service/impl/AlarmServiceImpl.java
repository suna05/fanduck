package fanduck.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fanduck.dao.AlarmDao;
import fanduck.domain.Alarm;
import fanduck.service.AlarmService;

@Service
public class AlarmServiceImpl implements AlarmService {
	
  @Autowired
  AlarmDao alarmDao;

  public List<Alarm> list() throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    
    return alarmDao.selectList(valueMap);
  }

@Override
public void add(Alarm alarm) throws Exception {
	alarmDao.insert(alarm);
	
}

@Override
public void update(Alarm alarm) throws Exception {
	// TODO Auto-generated method stub
	
}

@Override
public void remove(int alarmNo) throws Exception {
	alarmDao.delete(alarmNo);
}
  
/*
  public Alarm get(int no) throws Exception {
    return AlarmDao.selectOne(no);
  }
  
  public Alarm getByEmailPassword(String email, String password) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("email", email);
    valueMap.put("password", password);
    
    return AlarmDao.selectOneByEmailPassword(valueMap);
  }
  
  @Override
  public int getSize() throws Exception {
    return AlarmDao.countAll();
  }
  
  // XML 태그로 트랜잭션을 설정하게 되면 @Transactional 애노테이션은 필요없다.
  //@Transactional(propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
  public void add(Alarm Alarm) throws Exception {
    memberDao.insert(Alarm);
    AlarmDao.insert(Alarm);
    this.insertPhoto(Alarm.getNo(), Alarm.getPhotoList()); // 강사 사진 추가
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
  
  
  }
*/

}







