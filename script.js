var c='off';
        var s="off";

        function capstoggle(){
            if(c=='off')
                c='on';
            else
                c='off';
        }

        function typeOut(letter){
        var t=document.getElementById("text");
        if((c=='on')&&(s=='on')){
            t.insertAdjacentText("beforeend", letter);
            c='on';
            s='off';
        }    
        else if((c=='on')||(s=='on')){
            t.insertAdjacentText("beforeend", letter.toUpperCase());
            s='off';
        } 
        else if(c=='on'){
            t.insertAdjacentText("beforeend", letter.toUpperCase());
        }
        else
            t.insertAdjacentText("beforeend", letter);
        
        }
        function typeOutNum(num){
            var t=document.getElementById("text");
            t.insertAdjacentText("beforeend", num);
        }
        function typeOutSym(num){
            const alt=[')','!','@','#','$','%','^','&','*','(',];
            var t=document.getElementById("text");
            t.insertAdjacentText("beforeend", alt[num]);
        }
        
        function back(){
            var t=document.getElementById("text").innerText;
            var x=t.substring(0,t.length-1);
            document.getElementById("text").innerText=x;
        }

        function enter(){
            var t=document.getElementById("text");
            t.insertAdjacentHTML("beforeend", "<br>");
        }
        function tab(){
            var t=document.getElementById("text");
            t.insertAdjacentText("beforeend","    ");
        }

        function shift(){
            s='on';
        }

        function space(){
            var t=document.getElementById("text");
            t.insertAdjacentText("beforeend", " ");
        }