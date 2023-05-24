var flag=0;
var id='';
var countX=0;
var countY=0;
var writings='s';
var ls=0;
var chk='';
var ckk=0;

var name1=localStorage.getItem('firstNam').toUpperCase();
var name2=localStorage.getItem('secondNam').toUpperCase();
$(".player").html("PLAYER  "+name1+ "  TURN");
$(document).ready(function(){

    $(".inner-box").one("click",function(){

        if(ckk==8){
            chk='ENTERED';

            $(function() {
                $( ".contentZ" ).toggle();
              });
              //$(".abc").html(name1);
            setTimeout(function(){
                location.reload();
            },7000);
            

        }
        else if(flag==0){
            $(".player").html("PLAYER  "+name2+ "  TURN");
            id=$(this).attr('id');
            $(this).html("X");
            writings=$('#'+id).text();
            ckk++;
            updt();
            //if(countX==3)alert("won");
            flag=1;
            
        }else if(flag==1){
            id=$(this).attr('id');
            $(".player").html("PLAYER  "+name1+ "  TURN");

            $(this).html("O");
            writings=$('#'+id).text();
            ckk++;
            updt();
        
            flag=0;
        }
        
    });

    function updt(){
            $(".inner-box").each(function(){
                ls++;
                if($(this).text()=='X')countX++;
                if($(this).text()=='O')countY++;
                
                if(ls==3 || ls==6 || ls==9){
                    if(countX==3){
                        $(function() {
                            $( ".contentX" ).toggle();
                          });
                          $(".abc").html(name1);
                        setTimeout(function(){
                            location.reload();
                        },7000);
                          
                    }
                    else if(countY==3){
                        $(function() {
                            $( ".contentY" ).toggle();
                          });
                          $(".def").html(name2);

                          setTimeout(function(){
                            location.reload();
                        },7000);

                         
                        
                    }
                    else{
                        countX=0;
                        countY=0;
                    }
                    
                }
                if(ls==9)ls=0;
                
                
                            
                
            
            });
            
    }

});
