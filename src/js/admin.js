jQuery(document).ready(function () {
  $(".slide").click(function () {
    $(".dropdown").slideToggle();
  });
  $(".none").click(function () {
    $(".dropdown").slideUp();
  });


  $(".compae").click(function () {
    $(".ResponseTeam").slideToggle();
    $(".compae").toggleClass("rduser");
  });
  $(".upslide").click(function () {
    $(".ResponseTeam").slideUp();
  });

  $('#documents').DataTable();

  $(".rightbut").click(function(){
    $(".rightsidmenu").toggleClass("right");
  });

  $(".filtercu").click(function(){
    $(".filtercustome").toggleClass("open");
  });
  $(".cancel").click(function(){
    $(".filtercustome").removeClass("open");
  });
    $(".filternone").click(function(){
      $(".filtercustome").removeClass("open");
  });


/////////////////jSn toggle//////////////////////////// 
  $('input[type="checkbox"]#tableview').change(function() {
    if ($(this).is(":checked")) { 
      $(".viewjsn").hide();
      $(".tableview").show(); 
      $(".nocheked").text("Table View");
      $(".nocheked").removeClass("text-[#4F4F4F]");

    } else {
      $(".nocheked").text("JSON View");
      $(".nocheked").addClass("text-[#4F4F4F]");
      $(".viewjsn").show();
      $(".tableview").hide(); 
  }
}); 


$(".viewbut").click(function(){  
  if ($(this).hasClass('open')){
    $('.viewbut').removeClass('open');
  } else {
    $('.viewbut').removeClass('open');
    $(this).addClass('open');
  }

});




$(".dropdown-content").click(function(){
  $('.viewbut').removeClass('open');
});


///////////////////processes/////////
$('.processes').click(function() {
    $('.allprosess').removeClass('hidden');
     $('.all-listno').addClass('hidden'); 
});
$('.close-process').click(function() {
  $('.allprosess').addClass('hidden');
   $('.all-listno').removeClass('hidden'); 
});
 ///////////////////processesend/////////

 //////////////////dllsbut/////////////////

$('.dllsbut').click(function() {
  $('.dllsprosess').removeClass('hidden');
   $('.all-listno').addClass('hidden'); 
});
$('.close-process').click(function() {
$('.dllsprosess').addClass('hidden');
 $('.all-listno').removeClass('hidden'); 
});
////////////////dllsbut end/////////////

////////////Handleprocesses/////////////
$('.Handleprocesses').click(function() {
  $('.handlestabprosess').removeClass('hidden');
   $('.all-listno').addClass('hidden'); 
});
$('.close-process').click(function() {
$('.handlestabprosess').addClass('hidden');
 $('.all-listno').removeClass('hidden'); 
});
//////////////////Handleprocesses end////////////////

//////////////////Memoryprocesses //////////////////
$('.Memoryprocesses').click(function() {
  $('.memorytabprosess').removeClass('hidden');
   $('.all-listno').addClass('hidden'); 
});
$('.close-process').click(function() {
$('.memorytabprosess').addClass('hidden');
 $('.all-listno').removeClass('hidden'); 
});


///////////////Memoryprocesses end///////////

//////////////////Threadsprocesses //////////////////
$('.Threadsprocesses').click(function() {
  $('.threadstabprosess').removeClass('hidden');
   $('.all-listno').addClass('hidden'); 
});
$('.close-process').click(function() {
$('.threadstabprosess').addClass('hidden');
 $('.all-listno').removeClass('hidden'); 
});


///////////////Threadsprocesses end///////////


//////////////////Variablesprocesses Start //////////////////
$('.Variablesprocesses').click(function() {
  $('.Variablestabprosess').removeClass('hidden');
   $('.all-listno').addClass('hidden'); 
});
$('.close-process').click(function() {
$('.Variablestabprosess').addClass('hidden');
 $('.all-listno').removeClass('hidden'); 
});


//////////////////Variablesprocesses End //////////////////










////////////////////Drivers Start///////////////////////

$('input[type="checkbox"]#tableview').change(function() {
  if ($(this).is(":checked")) { 
    $(".viewjsn").hide();
    $(".driverstables").show(); 
    $(".nocheked").text("Table View");
    $(".nocheked").removeClass("text-[#4F4F4F]");

  } else {
    $(".nocheked").text("JSON View");
    $(".nocheked").addClass("text-[#4F4F4F]");
    $(".viewjsn").show();
    $(".driverstables").hide(); 
}
}); 

////////////////////Drivers End///////////////////////


////////////////////Registry Start///////////////////////

$('input[type="checkbox"]#tableview').change(function() {
  if ($(this).is(":checked")) { 
    $(".viewjsn").hide();
    $(".registry").show(); 
    $(".nocheked").text("Table View");
    $(".nocheked").removeClass("text-[#4F4F4F]");

  } else {
    $(".nocheked").text("JSON View");
    $(".nocheked").addClass("text-[#4F4F4F]");
    $(".viewjsn").show();
    $(".registry").hide(); 
}
}); 

////////////////////Registry End///////////////////////

////////////////////Syscalls Start///////////////////////

$('input[type="checkbox"]#tableview').change(function() {
  if ($(this).is(":checked")) { 
    $(".viewjsn").hide();
    $(".Syscalls").show(); 
    $(".nocheked").text("Table View");
    $(".nocheked").removeClass("text-[#4F4F4F]");

  } else {
    $(".nocheked").text("JSON View");
    $(".nocheked").addClass("text-[#4F4F4F]");
    $(".viewjsn").show();
    $(".Syscalls").hide(); 
}
}); 

////////////////////Syscalls End///////////////////////

////////////////////Objects Start///////////////////////

$('input[type="checkbox"]#tableview').change(function() {
  if ($(this).is(":checked")) { 
    $(".viewjsn").hide();
    $(".Objects").show(); 
    $(".nocheked").text("Table View");
    $(".nocheked").removeClass("text-[#4F4F4F]");

  } else {
    $(".nocheked").text("JSON View");
    $(".nocheked").addClass("text-[#4F4F4F]");
    $(".viewjsn").show();
    $(".Objects").hide(); 
}
}); 

////////////////////Objects End///////////////////////

////////////////////Sockets Start///////////////////////

$('input[type="checkbox"]#tableview').change(function() {
  if ($(this).is(":checked")) { 
    $(".viewjsn").hide();
    $(".Sockets").show(); 
    $(".nocheked").text("Table View");
    $(".nocheked").removeClass("text-[#4F4F4F]");

  } else {
    $(".nocheked").text("JSON View");
    $(".nocheked").addClass("text-[#4F4F4F]");
    $(".viewjsn").show();
    $(".Sockets").hide(); 
}
}); 

////////////////////Sockets End///////////////////////

////////////////////Callbacks Start///////////////////////

$('input[type="checkbox"]#tableview').change(function() {
  if ($(this).is(":checked")) { 
    $(".viewjsn").hide();
    $(".Callbacks").show(); 
    $(".nocheked").text("Table View");
    $(".nocheked").removeClass("text-[#4F4F4F]");

  } else {
    $(".nocheked").text("JSON View");
    $(".nocheked").addClass("text-[#4F4F4F]");
    $(".viewjsn").show();
    $(".Callbacks").hide(); 
}
}); 

////////////////////Callbacks End///////////////////////

////////////////////Scheduled Start///////////////////////

$('input[type="checkbox"]#tableview').change(function() {
  if ($(this).is(":checked")) { 
    $(".viewjsn").hide();
    $(".Scheduled").show(); 
    $(".nocheked").text("Table View");
    $(".nocheked").removeClass("text-[#4F4F4F]");

  } else {
    $(".nocheked").text("JSON View");
    $(".nocheked").addClass("text-[#4F4F4F]");
    $(".viewjsn").show();
    $(".Scheduled").hide(); 
}
}); 

////////////////////Scheduled End///////////////////////
////////////////////autoruns Start///////////////////////

$('input[type="checkbox"]#tableview').change(function() {
  if ($(this).is(":checked")) { 
    $(".viewjsn").hide();
    $(".autoruns").show(); 
    $(".nocheked").text("Table View");
    $(".nocheked").removeClass("text-[#4F4F4F]");

  } else {
    $(".nocheked").text("JSON View");
    $(".nocheked").addClass("text-[#4F4F4F]");
    $(".viewjsn").show();
    $(".autoruns").hide(); 
}
}); 

////////////////////autoruns End///////////////////////



////////////////////////////login//////////////////



}); 
$("#forgetpass").click(function(){
  $("#mainlogin").addClass("hidden");
  $("#sendlink").removeClass("hidden");
});
$("#addquery").click(function(){
  $("#addquery-content").toggle();
  
});
$("#Selectquery").click(function(){
  $("#selectQuery").show();
  $("#addquery-content").hide();
});



$(".sendlinknewass").click(function(){
  $("#mainlogin").addClass("hidden");
  $("#sendlink").addClass("hidden");
  $(".allforgetpasswerd").removeClass("hidden");
});

   //////////Dashboard////////////

   $("#openSideBar").click(function(){
    $("#mobile-nav").addClass("openmenu");
  });
  $("#closeSideBar").click(function(){
    $("#mobile-nav").removeClass("openmenu");
  });

  //  var sideBar = document.getElementById("mobile-nav");
  //  var openSidebar = document.getElementById("openSideBar");
  //  var closeSidebar = document.getElementById("closeSideBar");
  //  //sideBar.style.transform = "translateX(-260px)";

  
  //  function sidebarHandler(flag) {
  //    if (flag) {
  //      sideBar.style.transform = "translateX(0px)";
  //      openSidebar.classList.add("hidden");
  //      closeSidebar.classList.remove("hidden");
  //    } else {
  //      sideBar.style.transform = "translateX(-260px)";
  //      closeSidebar.classList.add("hidden");
  //      openSidebar.classList.remove("hidden");
  //    }
  //  }