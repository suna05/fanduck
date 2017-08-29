package fanduck.control;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import fanduck.domain.Board;
import fanduck.service.BoardService;
import net.coobird.thumbnailator.Thumbnails;

@Controller
@RequestMapping("/board/")
public class BoardControl {
	
  @Autowired ServletContext ctx;
  @Autowired BoardService boardService;
  
  @RequestMapping("add") 
  public String add(Board board, @RequestParam(value="mpNo") int mpNo, MultipartFile files) throws Exception{
	  
	    HashMap<String,Object> resultMap = new HashMap<>();
	    
	    String bdTitle = board.getBdTitle();
	    String bdContent = board.getBdContent();
	    
	    //board.setBdTitle(bdTitle);
	    //board.setBdContent(bdContent);
	    
	    System.out.println(bdTitle);
	    System.out.println(bdContent);
	    
	    
	    ArrayList<Object> fileList2 = new ArrayList<>();
	    
	    HashMap<String,Object> fileMap = new HashMap<>();
	
	    String newFilename = this.getNewFilename();
	    
	    File file = new File(ctx.getRealPath("/web/board/photo/" + newFilename));
	    files.transferTo(file);
	    
	    
	    File thumbnail = new File(ctx.getRealPath("/upload/" + newFilename));
	    Thumbnails.of(file).size(650, 650).outputFormat("png").toFile(thumbnail); 
	
	      
	    fileMap.put("filename", newFilename);
	    fileMap.put("filesize", files.getSize());
	    fileList2.add(fileMap);
	    
	    resultMap.put("fileList", fileList2);    
	    
	    board.setBdPhoto(newFilename);
	    
	    boardService.add(board);
	  
	  return "empty";
  }
  
  int count = 0;
  synchronized private String getNewFilename() {
    if (count > 100) {
        count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 

      
     // boardService.add(board);
     // return new JsonResult(JsonResult.SUCCESS, "ok");
   }  
    
}