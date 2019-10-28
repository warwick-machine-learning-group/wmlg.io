function addpheno(){
                    
                    
                    
                        var obj=document.getElementById('pheno1');
                        
                        var obj2=document.getElementById('pheno2');
                        
                        
                        
                        var index=obj.selectedIndex;
                        
                        var val = obj.options[index].value;
                        
                        var text = obj.options[index].text;
                        
                        
                        
                        obj2.add(new Option(text,val));
                        
                        obj.options.remove(index);
                        
                        $("#pheno2").append($("#pheno2 option").remove().sort(function(a, b) {
                        
                            var at = $(a).text(), bt = $(b).text();
                        
                            return (at > bt)?1:((at < bt)?-1:0);
                        
                        }));
                        
                        }

    function addpheno2(){
                    
                    
                    
                            var obj=document.getElementById('pheno2');
                            
                            var obj2=document.getElementById('pheno1');
                            
                            
                            
                            var index=obj.selectedIndex;
                            
                            var val = obj.options[index].value;
                            
                            var text = obj.options[index].text;
                            
                            
                            
                            obj.options.remove(index);
                            
                            
                            
                            }

         function addpheno3(){
                    
                    
                    
                    
                    
                    
                    
                    
                    
                                $("#pheno2").empty();
                                
                                
                                
                                }

             function gradeChange2(){
                    
                    
                    
                                    var myarray = new Array();
                                    
                                    
                                    
                                    for (var i = 0; i < document.getElementById('pheno2').options.length; i++) {
                                    
                                    var txt = document.getElementById('pheno2').options[i].text;
                                    
                                    myarray.push(txt);
                                    
                                    
                                    
                                    }
                                    
                                    var total = 1;
                                    
                                    document.getElementById('h6').innerHTML = ' ';
                                    
                                    var total2 = 0;
                                    
                                    var dp = obj.sites[1].pheno.split('<br>');
                                    
                                    var dv = obj.sites[1].phenovalue.split('<br>');
                                    
                                    var dn = 0;
                                    
                                    var dvs = [];
                                    
                                    var dns = [];
                                    
                                    var nu = 1;
                                    
                                    for (var i = 0; i < newdata.length; i++){
                                    
                                      total = -1;
                                    
                                       ph = obj.sites[i].pheno;
                                    
                                      for (var j = 0; j < document.getElementById('pheno2').options.length; j++){
                                    
                                        var comp = myarray[j];
                                    
                                        if(ph.indexOf(comp)!=-1)  {
                                    
                                            total = 1;
                                    
                                        }else{
                                    
                                            total = total*1;
                                    
                                        }
                                    
                                    
                                    
                                         }
                                    
                                        if ( total > -1){
                                    
                                    //  document.getElementById('h6').innerHTML = document.getElementById('h6').innerHTML + nu.toString()+ ' ' + obj.sites[i].name.split('<br>') ;
                                    
                                        dns.push(obj.sites[i].name.split('<br>'));
                                    
                                        nu = nu + 1;
                                    
                                        total2 = total2 +1;
                                    
                                        dp = obj.sites[i].pheno.split('<br>');
                                    
                                        dv = obj.sites[i].phenovalue.split('<br>');
                                    
                                        dn = 0;
                                    
                                        for (j = 0; j < document.getElementById('pheno2').options.length; j++){
                                    
                                            comp = myarray[j];
                                    
                                            for (var n = 0; n < dp.length; n++){
                                    
                                                if(dp[n].indexOf(comp)!=-1) {
                                    
                                                    dn = dn + parseFloat(dv[n]);
                                    
                                                }
                                    
                                            }
                                    
                                        
                                    
                                        }
                                    
                                        
                                    
                                    //  document.getElementById('h6').innerHTML = document.getElementById('h6').innerHTML + dn.toString() +'<br>' ;
                                    
                                        dvs.push(dn);
                                    
                                        
                                    
                                    
                                    
                                        }
                                    
                                    }
                                    
                                    var dvs2 = [];
                                    
                                    var dns2 = [];
                                    
                                    var totalnu = 0.0;
                                    
                                    var dvi = [];
                                    
                                    var dnss = [];
                                    
                                    for (var i = 0; i < dvs.length; i++){
                                    
                                        dvi.push(1);
                                    
                                        for (var j = 0; j < dvs.length; j++){
                                    
                                            if (dvs[i]<dvs[j]){
                                    
                                            dvi[i] = dvi[i] + 1;
                                    
                                            }
                                    
                                    }   
                                    
                                    }
                                    
                                    var n = 1;
                                    
                                    for (var i = 0; i < 6; i++){
                                    
                                        for (var j = 0; j < dvs.length; j++){
                                    
                                        if ( dvi[j] == i)
                                    
                                        {
                                    
                                            dvs2.push(dvs[j]);
                                    
                                            dnss.push(dns[j]);
                                    
                                            totalnu = totalnu + dvs[j];
                                    
                                        }
                                    
                                    }
                                    
                                    }
                                    
                                    var pt = 0;
                                    
                                    for (var j = 0; j < dvs2.length; j++){
                                    
                                        dvs2[j] = dvs2[j]/totalnu;
                                    
                                        pt = dvs2[j]*100;
                                    
                                        dvs2[j] = dvs2[j].toFixed(2);
                                    
                                        document.getElementById('h6').innerHTML = document.getElementById('h6').innerHTML + n.toString()+ ' ' + dnss[j] ;
                                    
                                        document.getElementById('h6').innerHTML = document.getElementById('h6').innerHTML + pt.toFixed(2) +'%' +'<br>' ;
                                    
                                        dns2.push(n);
                                    
                                        n = n +1
                                    
                                    }
                                    
                                        $("canvas#pieChart").remove();
                                    
                                        $("div#chartcontainer3").append('<canvas id="pieChart"></canvas>');
                                    
                                        
                                    
                                        var ctx = $("#pieChart").get(0).getContext("2d");   
                                    
                                        var dynamicColors = function() {
                                    
                                                var r = 125+Math.floor(Math.random() * 125);
                                    
                                                var g = 125+Math.floor(Math.random() * 125);
                                    
                                                var b = 125+Math.floor(Math.random() * 125);
                                    
                                                return "rgb(" + r + "," + g + "," + b + ")";
                                    
                                             };
                                    
                                    
                                    
                                    
                                    
                                    var coloR = [];
                                    
                                    for (var i = 0; i < dvs2.length; i++) {
                                    
                                            coloR.push(dynamicColors());
                                    
                                        }
                                    
                                    
                                    
                                        window.chart = new Chart(ctx,{
                                    
                                        type: 'pie',
                                    
                                        data: {
                                    
                                    labels: dns2,
                                    
                                            datasets: [{
                                    
                                                label: "Ranked Relevance of Phenotypes",
                                    
                                                backgroundColor: coloR,
                                    
                                                data: dvs2,
                                    
                                            }]
                                    
                                        },
                                    
                                    
                                    
                                    layout: {
                                    
                                         padding: {
                                    
                                             left: 0,
                                    
                                             right: 0,
                                    
                                             top: 0,
                                    
                                             bottom: 0
                                    
                                         }
                                    
                                    }
                                    
                                    });
                                    
                                        if ( total2 < 1){
                                    
                                        document.getElementById('h6').innerHTML = 'Not Found';
                                    
                                        }
                                    
                                    }
                                    
                                    
                function lookupfunction(){
                    
                                            var phenodata2 = [];
                                        
                                            for (i = 0; i < phenodata.length; i++){
                                        
                                                if (phenodata[i].toLowerCase().indexOf(document.getElementById("input").value.toLowerCase()) > -1){
                                        
                                                    phenodata2.push(phenodata[i]);
                                        
                                                }       
                                        
                                            }
                                        
                                            $("#pheno1").empty();
                                        
                                            for (var i = 0; i < phenodata2.length; i++) {
                                        
                                                       
                                        
                                                       var option = document.createElement("option");
                                        
                                                                     
                                        
                                                                  
                                        
                                                      $(option).val(i);
                                        
                                                                      
                                        
                                                                   
                                        
                                                      $(option).text(phenodata2[i]);
                                        
                                                                      
                                        
                                                                  
                                        
                                                      $('#pheno1').append(option);
                                        
                                                      
                                        
                                                      }
                                        
                                                      
                                        
                                                      $("#pheno1").append($("#pheno1 option").remove().sort(function(a, b) {
                                        
                                                          var at = $(a).text(), bt = $(b).text();
                                        
                                                          return (at > bt)?1:((at < bt)?-1:0);
                                        
                                                      }));
                                        
                                                      
                                        
                                        
                                        
                                        }