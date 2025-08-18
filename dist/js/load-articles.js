// $(function () {
//     $('[data-a-category]').on('show.bs.tab', function (e) {
//         var category = $(this).data('a-category');
//         if (!$(this).hasClass('a-loaded')) {
//             $.ajax({
//                 url: '/inc/article-load.php?category='+category,
//                 dataType: 'json',
//                 success: function (_response) {
//                     var error = _response.error;
//                     var output_data = _response.output_data;
//                     if (error != "") {
//                         alert(error);
//                     }
//                     else {
//                         $('#'+category+'-pane').append(output_data);
//                         $('#'+category+'-tab').addClass('a-loaded');
//                     }
//                 },
//                 error: function (jqXhr, json, errorThrown) {
//                     var error = jqXhr.responseText;
//                     alert(error);
//                 }
//             });
//         }
//     })
// });

$(function () {
  $("[data-a-category]").on("click", function (e) {
    e.preventDefault();

    var tabTrigger = new bootstrap.Tab(this);
    tabTrigger.show();
  });
});
