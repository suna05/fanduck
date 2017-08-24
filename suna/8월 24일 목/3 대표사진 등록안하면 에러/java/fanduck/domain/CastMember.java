package fanduck.domain;

public class CastMember extends Movie {
  boolean ifRead;
  int mno;
  
	public boolean isIfRead() {
		return ifRead;
	}
	public void setIfRead(boolean ifRead) {
		this.ifRead = ifRead;
	}
	public int getMno() {
		return mno;
	}
	public void setMno(int mno) {
		this.mno = mno;
	}
  
}