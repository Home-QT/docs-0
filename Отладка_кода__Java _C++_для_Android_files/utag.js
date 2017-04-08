//~~tv:7122.20140827
//~~tc: Initial version of the Ghostery Privacy Governance tag.

//tealium universal tag - utag.sender.7122 ut4.0.201610212043, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    u.ev = {"view" : 1};

      u.map={"ghostery_pid":"pid"};
  u.extend=[];


    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f;

        u.data = {
          "qsp_delim" : "&",
          "kvp_delim" : "=",
          "base_url" : "//c.betrad.com/geo/h1.js",
          "pid" : "",
          "ocid" : "2155"
        };

        // Start tag-scoped extensions
        
        // End tag-scoped extensions

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        // End Mapping

        u.s = document.getElementsByTagName("script")[0];
        u.scr = document.createElement("script");
        u.scr.type = "text/javascript";
        u.scr.async = true;
        u.scr.setAttribute("data-ev-hover-pid", u.data.pid);
        u.scr.setAttribute("data-ev-hover-ocid", u.data.ocid);
        u.scr.src = u.data.base_url;
        u.s.parentNode.insertBefore(u.scr, u.s);

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("3", "intel.profile-ssg.intel"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

