package fanduck.domain;

import java.util.List;

public class Board {
  int bdNo;
  int mpNo;
  String bdTitle;
  String bdContent;
  String bdRegister;
  String bdPhoto;
  
  List<String> photoList;
  
  
  public void setPhotoList(List<String> photoList) {
    this.photoList = photoList;
  }
  
  public String getBdPhoto() {
    return bdPhoto;
  }
  
  
  public void setBdPhoto(String bdPhoto) {
    this.bdPhoto = bdPhoto;
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
//  public List<String> getPhotoList() {
//    return photoList;
//  }
//  public void setPhotoList(List<String> photoList) {
//    this.photoList = photoList;
//  }
//  
  public List<String> getPhotoList() {
    // TODO Auto-generated method stub
    return photoList;
  }
 




  
}
