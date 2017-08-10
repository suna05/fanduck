package fanduck.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import fanduck.dao.BoardDao;
import fanduck.domain.Board;
import fanduck.service.BoardService;

@Service
public class BoardServiceImpl implements BoardService {
	
  @Autowired
  BoardDao boardDao;

  public List<Board> list() throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    
    return boardDao.selectList(valueMap);
  }

  @Override
  public Board get(int bdNo) throws Exception {
    // TODO Auto-generated method stub
    return boardDao.selectOne(bdNo);
  }

  @Override
  public int getSize() throws Exception {
    // TODO Auto-generated method stub
    return 0;
  }


  public void add(Board board) throws Exception {
   boardDao.insert(board);
   System.out.println(board.getBdNo());
   this.insertPhoto(board.getBdNo(), board.getPhotoList());
    
  }
  
  
  
  

  //@Transactional(propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
  public void update(Board board) throws Exception {
    
    int count = boardDao.update(board);
    
    if (count < 1) {
      throw new Exception(board.getBdNo() + "번 게시물을 찾을 수 없어");
    }
     
  }
  
  
  

  //@Transactional(propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
  public void remove(int bdNo) throws Exception {
    // TODO Auto-generated method stub
    //boardDao.deletePhoto(bdNo);
    
    int count = boardDao.delete(bdNo);
    
    if (count < 1) {
      throw new Exception(bdNo + "번 게시물을 찾을 수 없어");
    }
    
    try {
      count = boardDao.delete(bdNo);
    } catch (Exception e) {
      
    }
    
  }

  @Override
  public List<Board> searchList(Map<String, String> value) throws Exception {
    // TODO Auto-generated method stub
    return boardDao.searchListByTitle(value);   
  }
  

  
  
  
  private void insertPhoto(int boardNo, List<String> photoPathList) {
    if (photoPathList == null) 
      return;
    
    HashMap<String, Object> valueMap = new HashMap<>();
    valueMap.put("bdNo", boardNo);
    
    for (String photoPath : photoPathList) {
      valueMap.put("bdPhoto", photoPath);
      System.out.println(photoPath);
      boardDao.insertPhoto(valueMap);
    }    
  }

  @Override
  public void updatePhoto(Board board) throws Exception {
    // TODO Auto-generated method stub
    
    HashMap<String, Object> valueMap = new HashMap<>();
    valueMap.put("bdNo", board.getBdNo());
    boardDao.deletePhoto(valueMap);
    
    for (String photoPath : board.getPhotoList()) {
      valueMap.put("bdPhoto", photoPath);
      System.out.printf("photoPath=%s",photoPath);
      boardDao.insertPhoto(valueMap);
    }    
  }
  


/*  @Override
  public void fileAdd(Board board) throws Exception {
    // TODO Auto-generated method stub
    boardDao.fileInsert(board);
  }*/

  

}







