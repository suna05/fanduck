package fanduck.domain;


public class Board {
  int bdNo;
  String bdTilte;
  String bdContent;
  String bdRegister;
  String bdModify;
  
  
  @Override
  public String toString() {
    return "board [bdNo=" + bdNo + ", bdTilte=" + bdTilte + ", bdContent=" + bdContent + ", bdRegister=" + bdRegister
        + ", bdModify=" + bdModify + "]";
  }


  public int getBdNo() {
    return bdNo;
  }


  public void setBdNo(int bdNo) {
    this.bdNo = bdNo;
  }


  public String getBdTilte() {
    return bdTilte;
  }


  public void setBdTilte(String bdTilte) {
    this.bdTilte = bdTilte;
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


  public String getBdModify() {
    return bdModify;
  }


  public void setBdModify(String bdModify) {
    this.bdModify = bdModify;
  }


  
}
