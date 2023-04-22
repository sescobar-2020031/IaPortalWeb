$(document).ready(function () {
  if (window.location.search == "") {
    window.location.back();
  }

  const parametros = window.location.search;

  const params = new URLSearchParams(parametros);

  if (
    params.get("id") == null ||
    params.get("id") == undefined ||
    params.get("id") == ""
  ) {
    window.location.back();
  }

  let id = params.get("id");

  let data = dataDetails.find((item) => item.id == id);

  if (data == null || data == undefined) {
    window.location.back();
  }

  $("#principal-title").html("<h1>" + data.title + "</h1>");

  $(".blgD-text-b p").html(data.text);

  $(".blgD-detailImg img").attr("src", data.img);
  $(".blgD-detailImg img").attr("alt", data.imgName);

  $(".blgD-card1-bd iframe").attr("src", data.urlVideo);
  $(".blgD-tittle-b h1").text(data.nombreCanal);
  $(".blg-btn-b-Blogd a").attr("href", data.urlCanal);

  $("#title1").on("click", function () {
    window.location.search = "";
    let id = $(this).attr("id");
    let url = window.location.origin;
    let newUrl = url + "/index_logica_primer_orden.html?param=" + id;
    window.location = newUrl;
  });

  $("#title2").on("click", function () {
    window.location.search = "";
    let id = $(this).attr("id");
    let url = window.location.origin;
    let newUrl = url + "/index_logica_primer_orden.html?param=" + id;
    window.location = newUrl;
  });

  $("#title3").on("click", function () {
    window.location.search = "";
    let id = $(this).attr("id");
    let url = window.location.origin;
    let newUrl = url + "/index_logica_primer_orden.html?param=" + id;
    window.location = newUrl;
  });
});
