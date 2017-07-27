package fanduck.domain;

import java.util.List;

public class MoviePerson{
  int mno;
  int mpNo;
  String mpPhotopath;
  String mpNickname;
  String mpContent;
  boolean mpAlarm;
  List<String> mpFilmo;
  String mpCode;
  String mpType;
  
public int getMno() {
	return mno;
}
public void setMno(int mno) {
	this.mno = mno;
}
public int getMpNo() {
	return mpNo;
}
public void setMpNo(int mpNo) {
	this.mpNo = mpNo;
}
public String getMpPhotopath() {
	return mpPhotopath;
}
public void setMpPhotopath(String mpPhotopath) {
	this.mpPhotopath = mpPhotopath;
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
public boolean isMpAlarm() {
	return mpAlarm;
}
public void setMpAlarm(boolean mpAlarm) {
	this.mpAlarm = mpAlarm;
}
public List<String> getMpFilmo() {
	return mpFilmo;
}
public void setMpFilmo(List<String> mpFilmo) {
	this.mpFilmo = mpFilmo;
}
public String getMpCode() {
	return mpCode;
}
public void setMpCode(String mpCode) {
	this.mpCode = mpCode;
}
public String getMpType() {
	return mpType;
}
public void setMpType(String mpType) {
	this.mpType = mpType;
}

  
}