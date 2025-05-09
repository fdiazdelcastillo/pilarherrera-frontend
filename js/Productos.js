// Espera a que el contenido de HTML esté cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los elementos de la pagina productos con clase 'product'
    const products = document.querySelectorAll(".product");
  
    // Almacena cuál producto está activo
    let activeProduct = null;
  
    products.forEach((product) => {
        //función que permite escuchar eventos como el clic.
      product.addEventListener("click", function (e) {
        // Previene que el clic se propague y cierre el overlay inmediatamente
        e.stopPropagation();
  
        // Si hay un producto activo, lo resetea
        if (activeProduct && activeProduct !== product) {
          resetProduct(activeProduct);
        }
  
        // Si haces clic en el mismo producto activo, lo cierra
        if (product === activeProduct) {
          resetProduct(product);
          activeProduct = null;
          return;
        }
  
        // Marca el producto como activo visualmente
        product.classList.add("dimmed");
        const overlay = product.querySelector(".product-overlay");
        overlay.classList.add("active");
  
        // Agrega el texto correspondiente usando switch según el texto del producto
        const title = product.querySelector(".product-title").textContent.trim();
  
        let contenido = "";
        switch (title) {
          case "Pan de Trigo":
            contenido = "Contiene harina de trigo, levadura y sal.";
            break;
          case "Croissant":
            contenido = "Contiene harina, mantequilla, azúcar y sal.";
            break;
          case "Media Luna":
            contenido = "Contiene mantequilla, harina y levadura.";
            break;
          case "Cinnamon":
            contenido = "Contiene canela, azúcar y masa hojaldrada.";
            break;
          case "Baguette":
            contenido = "Contiene harina de trigo, sal y agua.";
            break;
          case "Integral":
            contenido = "Contiene harina integral, semillas y sal.";
            break;
          case "Galleta de Avena":
            contenido = "Contiene avena, mantequilla y azúcar morena.";
            break;
          case "Galleta de Avena Fit":
            contenido = "Contiene avena, mantequilla y endulzante stevia.";
            break;
          case "Galleta":
            contenido = "Contiene avena chips de chocolate y azucar morena .";
            break;
          case "Galleta Chocolate":
            contenido = "Galleta de chocolate con Chips de chocolate blanco.";
            break;
          case "Galleta Maní":
            contenido = "Galleta casera de mantequilla con mani sin sal y cacao al 70%.";
            break;
            case "Galleta Chips":
            contenido = "Contiene chocolate, malvaviscos y mantequilla.";
            break;
            case "Galleta Rellena":
            contenido = "Contiene crema pastelera, galleta artesanal y vainilla.";
            break;
          default:
            contenido = "Producto artesanal.";
        }
  
        overlay.textContent = contenido;
        activeProduct = product;
      });
    });
  
    // Si haces clic en cualquier parte fuera del producto, cierra el activo
    document.addEventListener("click", function () {
      if (activeProduct) {
        resetProduct(activeProduct);
        activeProduct = null;
      }
    });
  
    // Función para limpiar la visual de un producto
    function resetProduct(product) {
      const overlay = product.querySelector(".product-overlay");
      overlay.classList.remove("active");
      overlay.textContent = "";
      product.classList.remove("dimmed");
    }
  });
  