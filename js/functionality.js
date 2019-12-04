(function($) {
    $("#sendMessageButton").click(function(event){
        if(document.getElementById("filePicker").src.length == 0){
            document.getElementById("noresume").hidden=false;
        }
        else{
            console.log(checkFile)
            if(!checkFile()){
                document.getElementById("badresume").hidden=false;
            }else{
                document.getElementById("loadingimage").showModal();
            }
        }
    });

    $("input[type=file]").change(function () {
        document.getElementById("noresume").hidden=true;
        document.getElementById("badresume").hidden=true;
        var fieldVal = $(this).val();
        var fieldValDisplay = fieldVal.replace("C:\\fakepath\\", "");
        var path = fieldValDisplay;
        document.getElementById("filePicker").src = path;
        if (fieldValDisplay != undefined || fieldValDisplay != "") {
            $(this).next(".custom-file-label").attr('data-content', fieldValDisplay);
            $(this).next(".custom-file-label").text(fieldValDisplay);
        }
    });

    function checkFile() {
        var fileElement = document.getElementById("filePicker");
        var fileExtension = "";
        if (fileElement.value.lastIndexOf(".") > 0) {
            fileExtension = fileElement.value.substring(fileElement.value.lastIndexOf(".") + 1, fileElement.value.length);
        }
        if (fileExtension.toLowerCase() == "pdf" |
            fileExtension.toLowerCase() == "doc" |
            fileExtension.toLowerCase() == "docx" |
            fileExtension.toLowerCase() == "txt") {
            return true;
        }
        else {
            return false;
        }
    }
})(jQuery);