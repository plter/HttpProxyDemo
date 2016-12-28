/**
 * Created by plter on 12/28/16.
 */
(function () {

    $("#btn-click-to-load").click(function () {
        $.get("/proxy", {url: $("#url-input").val()}).done(function (data) {
            $("#result").val(data);
        });
    });

})();