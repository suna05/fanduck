package fanduck.control.json;

import javax.servlet.http.Cookie;
//import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import fanduck.domain.Member;
import fanduck.service.MemberService;

@RestController
@RequestMapping("/auth/")
@SessionAttributes({"loginMember"})
public class AuthControl {
  @Autowired
  MemberService memberService;

  @RequestMapping(path="login", method=RequestMethod.POST)
  public JsonResult login(String id, String password, String saveId,
      Model model, HttpSession session, HttpServletResponse response) throws Exception {

    Member member = null;
//    if (userType.equals("member")) { //이놈을 막았더니 authControl의 30번째 줄 오류가 사라졌다.
      member = memberService.getByEmailPassword(id, password);
//    }
      
    System.out.println("로그인함");
    System.out.println(id);
    System.out.println(password);
    System.out.println(member);
 
    if (member != null) { 
      model.addAttribute("loginMember", member);
    
      if (saveId != null) {
        Cookie cookie2 = new Cookie("id", id);
        cookie2.setMaxAge(60 * 60 * 24 * 7); 
        response.addCookie(cookie2);
      } else {
        Cookie cookie2 = new Cookie("id", "");
        cookie2.setMaxAge(0);
        response.addCookie(cookie2);
      }
      
      return new JsonResult(JsonResult.SUCCESS, "ok");
      
    } else {
      return new JsonResult(JsonResult.FAIL, "fail");
    }
  }
  
  @RequestMapping("logout")
  public JsonResult logout(HttpSession session, SessionStatus status) throws Exception {
    status.setComplete();
    session.invalidate();  
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @RequestMapping("userinfo")
  public JsonResult userinfo(HttpSession session) throws Exception {
    Member loginMember = (Member)session.getAttribute("loginMember");
    return new JsonResult(JsonResult.SUCCESS, loginMember);
  }
}









