var getHourlyRate = function() {
    var dropdown=$(this);
    processId=dropdown.val();
    var hourlyRate=null;
    $.ajax({url: "/inhouseprocess/"+processId, success: function(result){
        hourlyRate = result;
        dropdown.closest("div.form-inline").find("div.project_tasks_hourlyrate input").val(hourlyRate);
    }});
};

$(document).ready(function() {
    $("#owner a.add_fields").
      data("association-insertion-position", 'before').
      data("association-insertion-node", 'this');

    $('#owner').bind('cocoon:after-insert',
         function() {
           $("#owner_from_list").hide();
           $("#owner a.add_fields").hide();
         });
    $('#owner').bind("cocoon:after-remove",
         function() {
           $("#owner_from_list").show();
           $("#owner a.add_fields").show();
         });

    $("#tags a.add_fields").
      data("association-insertion-position", 'before').
      data("association-insertion-node", 'this');

    $('#tags').bind('cocoon:after-insert',
         function(e, tag) {
             console.log('inserting new tag ...');
             $(".project-tag-fields a.add-tag").
                 data("association-insertion-position", 'after').
                 data("association-insertion-node", 'this');
             $(this).find('.project-tag-fields').bind('cocoon:after-insert',
                  function() {
                    console.log('insert new tag ...');
                    console.log($(this));
                    $(this).find(".tag_from_list").remove();
                    $(this).find("a.add_fields").hide();
                  });
         });

    $('.project-tag-fields').bind('cocoon:after-insert',
        function(e) {
            console.log('replace OLD tag ...');
            e.stopPropagation();
            console.log($(this));
            $(this).find(".tag_from_list").remove();
            $(this).find("a.add_fields").hide();
        });


    $('#tasks').bind('cocoon:before-insert', function(e,task_to_be_added) {
        console.log(task_to_be_added);
        task_to_be_added.fadeIn('slow');
    });

    $('#tasks').bind('cocoon:after-insert', function(e, added_task) {
        //added_task.css("background","red");
        console.log("task has been added");
        added_task.find("select").change(getHourlyRate);
    });

    $(".project_tasks_inhouseprocess select").change(getHourlyRate);

    $('#tasks').bind('cocoon:before-remove', function(e, task) {
        $(this).data('remove-timeout', 1000);
        task.fadeOut('slow');
    });

document.getElementById("project_name").addEventListener("click", function(){
    alert("Hello World!");
});

    

    //$('body').tabs();




});


