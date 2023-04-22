$(document).ready(function () {
  const parametros = window.location.search;

  const params = new URLSearchParams(parametros);

  $("#title1").on("click", function () {
    let dataTitle1 = dataPreview.filter((data) => data.principalTitle == 1);
    $(".blg-card1-b").remove();
    $(".blg-card2-b").remove();

    let right = true;

    for (let info of dataTitle1) {
      if (right) {
        $(".content-blgCards-b").append(
          '<div class="blg-card1-b"><div class="blh-info-b"><div class="blg-tittle-b"><h1>' +
            info.title +
            '</h1></div><div class="blg-text-b"><p>' +
            info.text +
            '</p></div><div class="blg-btn-b"><a target="_blank"><button id="' +
            info.id +
            '" class="btn-vm-b verMas" role="button">Ver más</button></a></div></div><img src="' +
            info.img +
            '" alt="' +
            info.imgName +
            '" /></div>'
        );
        right = !right;
      } else {
        $(".content-blgCards-b").append(
          '<div class="blg-card2-b"><img src="' +
            info.img +
            '" alt="' +
            info.imgName +
            '" /><div class="blh-info-b"><div class="blg-tittle-b"><h1>' +
            info.title +
            '</h1></div><div class="blg-text-b"><p>' +
            info.text +
            '</p></div><div class="blg-btn-b"><a target="_blank"><button id="' +
            info.id +
            '" class="btn-vm-b verMas" role="button">Ver más</button></a></div></div></div>'
        );

        right = !right;
      }
    }

    $(".verMas").on("click", function () {
      window.location.search = "";
      let id = $(this).attr("id");
      let url = window.location.origin;
      let newUrl = url + "/logica_article_detail.html?id=" + id;
      window.location = newUrl;
    });

    $(".txtBann-b p").text("Logica de primer orden");
    $("#title3").removeClass("selected");
    $("#title2").removeClass("selected");
    $(this).addClass("selected");
    $(".imgBann-b").css(
      "background-image",
      "url(https://www.iberdrola.com/documents/20125/40288/Inteligencia_746x419.jpeg/36dfd4a5-da70-2f11-2c48-1a1f30934cc5?t=1627271717751)"
    );
  });
  $("#title2").on("click", function () {
    $(".blg-card1-b").remove();
    $(".blg-card2-b").remove();
    let dataTitle2 = dataPreview.filter((data) => data.principalTitle == 2);
    let right = true;

    for (let info of dataTitle2) {
      if (right) {
        $(".content-blgCards-b").append(
          '<div class="blg-card1-b"><div class="blh-info-b"><div class="blg-tittle-b"><h1>' +
            info.title +
            '</h1></div><div class="blg-text-b"><p>' +
            info.text +
            '</p></div><div class="blg-btn-b"><a target="_blank"><button id="' +
            info.id +
            '" class="btn-vm-b verMas" role="button">Ver más</button></a></div></div><img src="' +
            info.img +
            '" alt="' +
            info.imgName +
            '" /></div>'
        );
        right = !right;
      } else {
        $(".content-blgCards-b").append(
          '<div class="blg-card2-b"><img src="' +
            info.img +
            '" alt="' +
            info.imgName +
            '" /><div class="blh-info-b"><div class="blg-tittle-b"><h1>' +
            info.title +
            '</h1></div><div class="blg-text-b"><p>' +
            info.text +
            '</p></div><div class="blg-btn-b"><a target="_blank"><button id="' +
            info.id +
            '" class="btn-vm-b verMas" role="button">Ver más</button></a></div></div></div>'
        );

        right = !right;
      }
    }

    $(".verMas").on("click", function () {
      window.location.search = "";
      let id = $(this).attr("id");
      let url = window.location.origin;
      let newUrl = url + "/logica_article_detail.html?id=" + id;
      window.location = newUrl;
    });
    $(".txtBann-b p").html("Inferencia en Logica de primer orden");
    $("#title1").removeClass("selected");
    $("#title3").removeClass("selected");
    $(this).addClass("selected");
    $(".imgBann-b").css(
      "background-image",
      "url(https://img.freepik.com/fotos-premium/plantilla-fondo-tecnologia-inteligencia-artificial_8188-605.jpg)"
    );
  });

  $("#title3").on("click", function () {
    $(".blg-card1-b").remove();
    $(".blg-card2-b").remove();
    $(".txtBann-b p").html("Autor de la página");
    $("#title1").removeClass("selected");
    $("#title2").removeClass("selected");
    $(this).addClass("selected");
    $(".imgBann-b").css(
      "background-image",
      "url(https://www.safecreative.org/blog/es/wp-content/uploads/2022/09/tipos-de-derechos-de-autor.jpg)"
    );

    $(".content-blgCards-b").append(
      '<div class="blg-card1-b"><div class="blh-info-b"><div class="blg-tittle-b"><h1>AUTOR</h1></div><div class="blg-text-b"><p>Nombre: KENNETH GARCIA<br>Edad: 20 años<br>Email: <a style="text-decoration:none" href="mailto:kgarcialemys@gmail.com">kgarcialemys@gmail.com</a></p></div><div class="blg-btn-b"></div></div><img src="https://avatars.githubusercontent.com/u/88795584?v=4" alt="Kenneth Garcia" /></div>'
    );
  });

  let right = true;

  for (let info of dataPreview) {
    if (right) {
      $(".content-blgCards-b").append(
        '<div class="blg-card1-b"><div class="blh-info-b"><div class="blg-tittle-b"><h1>' +
          info.title +
          '</h1></div><div class="blg-text-b"><p>' +
          info.text +
          '</p></div><div class="blg-btn-b"><a target="_blank"><button id="' +
          info.id +
          '" class="btn-vm-b verMas" role="button">Ver más</button></a></div></div><img src="' +
          info.img +
          '" alt="' +
          info.imgName +
          '" /></div>'
      );
      right = !right;
    } else {
      $(".content-blgCards-b").append(
        '<div class="blg-card2-b"><img src="' +
          info.img +
          '" alt="' +
          info.imgName +
          '" /><div class="blh-info-b"><div class="blg-tittle-b"><h1>' +
          info.title +
          '</h1></div><div class="blg-text-b"><p>' +
          info.text +
          '</p></div><div class="blg-btn-b"><a target="_blank"><button id="' +
          info.id +
          '" class="btn-vm-b verMas" role="button">Ver más</button></a></div></div></div>'
      );

      right = !right;
    }
  }

  $(".verMas").on("click", function () {
    window.location.search = "";
    let id = $(this).attr("id");
    let url = window.location.origin;
    let newUrl = url + "/logica_article_detail.html?id=" + id;
    window.location = newUrl;
  });

  if (
    params.get("param") != null ||
    params.get("param") != undefined ||
    params.get("param") != ""
  ) {
    $("#" + params.get("param")).click();
  }
});
