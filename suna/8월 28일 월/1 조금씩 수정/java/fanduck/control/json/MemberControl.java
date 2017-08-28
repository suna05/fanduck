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
import net.coobird.thumbnailator.Thumbnails;

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
  
  @RequestMapping("updateOutPass")
  public JsonResult updateOutPass(Member member) throws Exception {
    memberService.updateOutPass(member);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @Autowired ServletContext ctx; 
  @RequestMapping(path="upload1")
  public Object upload1(Member member, MultipartFile files) throws Exception {
    System.out.println("upload1 memberControl단입니다.");
    System.out.println(member);
    HashMap<String,Object> resultMap = new HashMap<>();   
    
    ArrayList<Object> fileList = new ArrayList<>();
    HashMap<String,Object> fileMap = new HashMap<>();
    
    if (member.getPassword().length() > 0 && files != null) {
    	System.out.println(member.getPassword().length());
    	System.out.println("비밀번호랑 파일 모두 있을 때 -> 일반 업로드");
    	String newFilename = this.getNewFilename();
        File file = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename));
        files.transferTo(file);
        
        File thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_80"));
        Thumbnails.of(file).size(80, 80).outputFormat("png").toFile(thumbnail); 

        thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_140"));
        Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
        
        thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_200"));
        Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail);
          
        fileMap.put("filename", newFilename);
        fileMap.put("filesize", files.getSize());
        fileList.add(fileMap);
        
        resultMap.put("fileList", fileList);    
        member.setPath("photo/" + newFilename + "_200.png");
        resultMap.put("Member", member);
        
        System.out.println("패스워드가 있을 때");
		memberService.update(member);
    } else if (member.getPassword().length() > 0 && files == null) { 
    	System.out.println("비밀번호가 있고 파일은 없을 때 -> 일반 업로드");
    	memberService.update(member);
    } else if (files == null && member.getPassword().length() == 0) { 
    	System.out.println("비밀번호와 파일 모두 없을 때 -> 비밀번호를 빼고 업로드");
    	memberService.updateOutPass(member);
    } else if (files != null && member.getPassword().length() == 0) { 
    	System.out.println("비밀번호가 없고 파일은 있을 때 -> 사진 업로드");
    	String newFilename = this.getNewFilename();
        File file = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename));
        files.transferTo(file);
        
        File thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_80"));

        thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_140"));
        Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
        
        thumbnail = new File(ctx.getRealPath("/web/movieperson/photo/" + newFilename + "_200"));
        Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail);
          
        fileMap.put("filename", newFilename);
        fileMap.put("filesize", files.getSize());
        fileList.add(fileMap);
        
        resultMap.put("fileList", fileList);    
        member.setPath("photo/" + newFilename + "_200.png");
        
        System.out.println("패스워드가 없을 때");
		memberService.updateOutPass(member);
    }
    
    
    
    resultMap.put("fileList", fileList);
    return resultMap;
  }
  
  int count = 0;
  synchronized private String getNewFilename() {
	  if (count > 100) {
		  count = 0;
	  }
	  return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }

}









