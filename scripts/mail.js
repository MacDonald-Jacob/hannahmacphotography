 function mail(form) {
     var name = form.name.value;
     var city = "";
     var adate = form.adate.value;
     var ddate = form.ddate.value;
     var activities = form.activities.value;
     var adult = form.adult.value;
     var child = form.childeren.value;
     var comment = form.comment.value;
     var warning = ""
     for (i = 0; i < form.city.length; i++) {
         if (form.city[i].checked)
             city += " " + form.city[i].value;
     }
     var str = "mailto:abc@x.com?subject=travel to morocco&body=";
     if (name.length > 0) {
         str += "Hi my name is " + name + ", ";
     } else {
         warning += "Name is required"
     }
     if (city.length > 0) {
         str += "I am Intersted in visiting the following citis: " + city + ", ";
     }
     if (activities.length > 0) {
         str += "I am Intersted in following activities: " + activities + ". "
     }
     if (adate.length > 0) {
         str += "I will be ariving on " + adate;
     }
     if (ddate.length > 0) {
         str += " And departing on " + ddate;
     }
     if (adult.length > 0) {
         if (adult == 1 && child == null) {
             str += ". I will be travelling alone"
         } else if (adult > 1) {
             str += ".We will have a group of " + adult + " adults ";
         }
         if (child == null) {
             str += ".";
         } else if (child > 1) {
             str += "along with " + child + " children.";
         } else if (child == 1) {
             str += "along with a child.";
         }
     }

     if (comment.length > 0) {
         str += "%0D%0A" + comment + "."
     }

     if (warning.length > 0) {
         alert(warning)
     } else {
         str += "%0D%0ARegards,%0D%0A" + name;
         document.getElementById('send').href = str;
     }
 }