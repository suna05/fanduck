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




  @Override
  public void add(Board board) throws Exception {
   boardDao.insert(board);
   
   //this.insertPhoto(board.getBdNo(), board.getPhotoList());
    
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
 
  
  
/*  public Board search(Board board) throws Exception {
    Board searchValue = boardDao.search(board);
    return searchValue;
    
  }*/

  

}







