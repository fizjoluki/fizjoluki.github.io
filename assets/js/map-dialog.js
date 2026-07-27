(() => {
  const trigger = document.querySelector("[data-map-dialog-open]");
  const dialog = document.querySelector("#pricing-map-dialog");
  const closeButton = dialog?.querySelector("[data-map-dialog-close]");
  const dialogImage = dialog?.querySelector("[data-map-dialog-image]");
  const dialogViewport = dialog?.querySelector(".pricing-map-dialog-viewport");

  if (!trigger || !dialog || !closeButton || !dialogViewport || typeof dialog.showModal !== "function") {
    return;
  }

  let pointerMoved = false;
  let pointerStartX = 0;
  let pointerStartY = 0;

  const centerMap = () => {
    dialogViewport.scrollLeft = Math.max(
      0,
      (dialogViewport.scrollWidth - dialogViewport.clientWidth) / 2
    );
    dialogViewport.scrollTop = 0;
  };

  dialogImage?.addEventListener("load", centerMap);

  trigger.addEventListener("pointerdown", (event) => {
    pointerMoved = false;
    pointerStartX = event.clientX;
    pointerStartY = event.clientY;
  });

  trigger.addEventListener("pointermove", (event) => {
    const horizontalDistance = Math.abs(event.clientX - pointerStartX);
    const verticalDistance = Math.abs(event.clientY - pointerStartY);

    if (horizontalDistance > 10 || verticalDistance > 10) {
      pointerMoved = true;
    }
  });

  trigger.addEventListener("pointercancel", () => {
    pointerMoved = true;
  });

  trigger.addEventListener("click", (event) => {
    if (pointerMoved && event.detail !== 0) {
      event.preventDefault();
      pointerMoved = false;
      return;
    }

    event.preventDefault();
    pointerMoved = false;

    if (dialogImage && !dialogImage.hasAttribute("src")) {
      dialogImage.src = dialogImage.dataset.src;
    }

    dialog.showModal();
    document.documentElement.classList.add("map-dialog-open");
    requestAnimationFrame(centerMap);
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("map-dialog-open");
    trigger.focus({ preventScroll: true });
  });
})();
