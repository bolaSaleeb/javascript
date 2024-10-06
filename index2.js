function scrollIntoViewCentered(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    var elementTop = rect.top + window.scrollY;
    var centerY = elementTop - windowHeight / 2 + rect.height / 2;

    window.scrollTo({
      top: centerY,
      behavior: "smooth",
    });
  }

  document.getElementById("alertBody").addEventListener("click", function (event) {
      var target = event.target;
      if (target.classList.contains("error-listItem")) {
        var clickedTextContent = target.textContent;
        var errorFields = document.querySelectorAll(
          ".form-group.has-error.has-feedback"
        );
        for (var j = 0; j < errorFields.length; j++) {
          var errorField =
            errorFields[j].querySelector(".input").lastElementChild;
          if (errorField.innerHTML == clickedTextContent) {
            // errorField.parentElement.scrollIntoView({ behavior: "smooth" });
            scrollIntoViewCentered(errorField.parentElement);
            errorField.parentElement.classList.add("shake");
            setTimeout(function () {
              errorField.parentElement.classList.remove("shake");
            }, 1000);
            break;
          }
        }
      }
    });

  function closeAlert() {
    document.getElementById("myAlert").classList.add("hidden");
  }

  function scrollToErrorField(className) {
    const clickedTextContent = document
      .getElementById("alertBody")
      .querySelector(className);
    const errorFields = document.querySelectorAll(
      "form-group.has-error.has-feedback"
    );

    for (let i = 0; i < errorFields.length; i++) {
      const errorField = errorFields[i].querySelector(".input > div");
      if (errorField.textContent === clickedTextContent) {
        errorField.scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  }