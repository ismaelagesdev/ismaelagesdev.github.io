const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const opened = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
  menuButton.setAttribute("aria-label", opened ? "Fechar menu" : "Abrir menu");
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
  });
});

// CONFIGURE ANTES DE DIVULGAR:
// Use apenas o número de WhatsApp que você autoriza a exibir.
// Formato internacional, somente números, com DDI 55 + DDD + telefone.
const whatsappNumber = "5500000000000";
const whatsappMessage = "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto de site.";
const whatsappCta = document.querySelector("#whatsapp-cta");
whatsappCta.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
