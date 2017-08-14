
  insert into cast_memb (mv_no, fp_code, mno, ifread)
  values(20164174, 10004060, 1, 1);
  
  select fp_name, mv_titl, mv_day, ifread, mno
    from cast_memb cm inner join movie on cm.mv_no = movie.mv_no
    				  inner join film_person fp on fp.fp_code = cm.fp_code;
  
  
  
update cast_memb set 
  ifread=false
  where mno=1 and mv_no=20162869 and fp_code=20208626;