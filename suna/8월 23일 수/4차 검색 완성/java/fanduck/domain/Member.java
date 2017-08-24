package fanduck.domain;

public class Member {
  
    int mno;
    String id;
    String nickname;
    String password;
    String path;
    String selfIntro;
    String loginType;
    
    public String getPath() {
      return path;
    }
    @Override
    public String toString() {
      return "Member [mno=" + mno + ", id=" + id + ", nickname=" + nickname + ", password=" + password + ", path="
          + path + ", selfIntro=" + selfIntro + ", loginType=" + loginType + "]";
    }
    public void setPath(String path) {
      this.path = path;
    }
    public int getMno() {
      return mno;
    }
    public void setMno(int mno) {
      this.mno = mno;
    }
    public String getId() {
      return id;
    }
    public void setId(String id) {
      this.id = id;
    }
    public String getNickname() {
      return nickname;
    }
    public void setNickname(String nickname) {
      this.nickname = nickname;
    }
    public String getPassword() {
      return password;
    }
    public void setPassword(String password) {
      this.password = password;
    }
    public String getSelfIntro() {
      return selfIntro;
    }
    public void setSelfIntro(String selfIntro) {
      this.selfIntro = selfIntro;
    }
    public String getLoginType() {
      return loginType;
    }
    public void setLoginType(String loginType) {
      this.loginType = loginType;
    }
    
    
  
 

    

}
