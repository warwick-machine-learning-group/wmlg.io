function gradeChange(){
					
					
					
    var nSel = document.getElementById("dname");

      

var index = nSel.selectedIndex; 

var value= nSel.options[index].value;

if (value != "-1") {



  document.getElementById("h3").innerHTML = obj.sites[value].name;

  document.getElementById("h2").innerHTML = obj.sites[value].pheno;





  $("canvas#myChart").remove();

  $("div#chartcontainer").append('<canvas id="myChart"></canvas>');





  var ctx = $("#myChart").get(0).getContext("2d");



  

  window.chart = new Chart(ctx, {

  

      // The type of chart we want to create

      type: 'bar',



      // The data for our dataset

      data: {

  labels: obj.sites[value].phenoindex.split('<br>'),

          datasets: [{

              label: "Ranked Relevance of Phenotypes",

              backgroundColor: 'rgb(255, 99, 132)',

              borderColor: 'rgb(255, 99, 132)',

              data: obj.sites[value].phenovalue.split('<br>'),

          }]

      },



      // Configuration options go here

      options: {



     layout: {

          padding: {

              left: 0,

              right: 0,

              top: 100,

              bottom: 0

          }



}

}

});			

   }

}