package fanduck.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import fanduck.domain.Member;
import fanduck.service.MemberService;

@RestController
@RequestMapping("/web/member/")
public class MemberControl {
  
  @Autowired ServletContext servletContext;
  @Autowired MemberService memberService;
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", memberService.list());
    System.out.println(dataMap);
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("add")
  public JsonResult add(Member member, String filenames) throws Exception {
    memberService.add(member);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  
  @RequestMapping(path="idCheck", method=RequestMethod.POST)
  public JsonResult idCheck(String id, Model model, 
      HttpServletResponse response) throws Exception {

    Member member = null;
    member = memberService.idCheck(id);

    System.out.println(id);
    System.out.println(member);
 
    if (member != null) { 
      model.addAttribute("loginMember", member);
      

      return new JsonResult(JsonResult.SUCCESS, "ok");
      
    } else {
      return new JsonResult(JsonResult.FAIL, "fail");
    }
  }

 
  @RequestMapping("detail")
  public JsonResult detail(int mno) throws Exception {
    Member member = memberService.get(mno);
    if (member == null) {
      return new JsonResult(JsonResult.FAIL, mno + "번 회원이 없습니다.");
    }
    return new JsonResult(JsonResult.SUCCESS, member);
  }
  
 
  @RequestMapping("update")
  public JsonResult update(Member member) throws Exception {
    memberService.update(member);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
 @Autowired ServletContext ctx; 
  @RequestMapping(path="upload1")
  public Object upload1(Member member, MultipartFile[] files) throws Exception {
    System.out.println("upload1 memberControl단입니다.");
    HashMap<String,Object> resultMap = new HashMap<>();   
    
    ArrayList<Object> fileList = new ArrayList<>();
    
    for (int i = 0; i < files.length; i++) {
      files[i].transferTo(new File(ctx.getRealPath("/web/member/upload/" + files[i].getOriginalFilename())));
      System.out.println(ctx.getRealPath("/web/member/upload/" + files[i].getOriginalFilename()));
      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", files[i].getOriginalFilename());
      fileMap.put("filesize", files[i].getSize());
      fileList.add(fileMap);
      System.out.println(member.getId());
      System.out.println(member.getNickname());
      System.out.println(member.getPassword());
      System.out.println(member.getSelfIntro());
      member.setPath("upload/" + files[i].getOriginalFilename());
      System.out.println(member.getPath());
      resultMap.put("Member", member);
      memberService.update(member);
    }
    resultMap.put("fileList", fileList);
    return resultMap;
  }
}









