package fanduck.domain;


public class MoviePerson{
  int mpNo;
//  String mpName;
  String mpPhotoPath;
  String mpNickname;
  String mpContent;
  String mpWork;
  boolean mpAlarm;
  String mpFilmo;
  String mpcode;
  
public String getMpFilmo() {
    return mpFilmo;
  }
  public void setMpFilmo(String mpFilmo) {
    this.mpFilmo = mpFilmo;
  }
  public String getMpcode() {
    return mpcode;
  }
  public void setMpcode(String mpcode) {
    this.mpcode = mpcode;
  }
public int getMpNo() {
	return mpNo;
}
public void setMpNo(int mpNo) {
	this.mpNo = mpNo;
}
//public String getMpName() {
//	return mpName;
//}
//public void setMpName(String mpName) {
//	this.mpName = mpName;
//}
public String getMpPhotoPath() {
	return mpPhotoPath;
}
public void setMpPhotoPath(String mpPhotoPath) {
	this.mpPhotoPath = mpPhotoPath;
}
public String getMpNickname() {
	return mpNickname;
}
public void setMpNickname(String mpNickname) {
	this.mpNickname = mpNickname;
}
public String getMpContent() {
	return mpContent;
}
public void setMpContent(String mpContent) {
	this.mpContent = mpContent;
}
public String getMpWork() {
	return mpWork;
}
public void setMpWork(String mpWork) {
	this.mpWork = mpWork;
}
public boolean isMpAlarm() {
	return mpAlarm;
}
public void setMpAlarm(boolean mpAlarm) {
	this.mpAlarm = mpAlarm;
}
  
  
  
}
