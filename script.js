document.addEventListener("DOMContentLoaded", () => {
  const qrImage = document.getElementById("qrCode");

  if (qrImage) {
    const targetPath = qrImage.dataset.qrTarget || "contact.html";
    const targetUrl = new URL(targetPath, window.location.href).href;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=${encodeURIComponent(targetUrl)}`;
  }
});
