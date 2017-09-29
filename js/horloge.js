            function compZero(nombre) {
              return nombre < 10 ? '0' + nombre : nombre;
            }
            
            function date_heure() {
              const infos = new Date();
              
     
      document.getElementById('date_heure').innerHTML = 'Il est ' + compZero(infos.getHours()) + ' heures ' + compZero(infos.getMinutes()) + ', ' + compZero(infos.getSeconds());
      

    }
    
    window.onload = function() {
     setInterval("date_heure()", 1000); 
   };