package fanduck.domain;

public class Movie extends FilmPerson{
  String mvNo;
  String mvTitle;
  String mvDay;
  
public String getMvNo() {
	return mvNo;
}
public void setMvNo(String mvNo) {
	this.mvNo = mvNo;
}
public String getMvTitle() {
	return mvTitle;
}
public void setMvTitle(String mvTitle) {
	this.mvTitle = mvTitle;
}
public String getMvDay() {
	return mvDay;
}
public void setMvDay(String mvDay) {
	this.mvDay = mvDay;
}
  
}