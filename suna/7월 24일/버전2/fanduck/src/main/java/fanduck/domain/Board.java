package fanduck.domain;

import java.util.List;

public class Board {
  int bdNo;
  int mpNo;
  String bdTitle;
  String bdContent;
  String bdRegister;
  List<String> photoList;
  
  
  
  
  public List<String> getPhotoList() {
    return photoList;
  }

  public void setPhotoList(List<String> photoList) {
    this.photoList = photoList;
  }

  public int getBdNo() {
    return bdNo;
  }
  
  public void setBdNo(int bdNo) {
    this.bdNo = bdNo;
  }
  
  public int getMpNo() {
    return mpNo;
  }
  
  public void setMpNo(int mpNo) {
    this.mpNo = mpNo;
  }
  
  public String getBdTitle() {
    return bdTitle;
  }
  
  public void setBdTitle(String bdTitle) {
    this.bdTitle = bdTitle;
  }
  
  public String getBdContent() {
    return bdContent;
  }
  
  public void setBdContent(String bdContent) {
    this.bdContent = bdContent;
  }
  
  public String getBdRegister() {
    return bdRegister;
  }
  
  public void setBdRegister(String bdRegister) {
    this.bdRegister = bdRegister;
  } 
 



  
}
