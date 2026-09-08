/* LiquorBox shared logic: localStorage cart, age gate, mobile nav, add-to-cart, WhatsApp helpers */
var WA_NUMBER = "256700000000"; // TODO: replace with the store's real WhatsApp number

function waLink(text) {
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
}
function fmtUGX(n) {
  return "UGX " + Number(n).toLocaleString("en-US");
}

var Cart = {
  read: function () {
    try {
      return JSON.parse(localStorage.getItem("lb-cart")) || {};
    } catch (e) {
      return {};
    }
  },
  write: function (c) {
    localStorage.setItem("lb-cart", JSON.stringify(c));
    updateCartBadge();
  },
  add: function (id, qty) {
    var c = this.read();
    c[id] = (c[id] || 0) + (qty || 1);
    this.write(c);
  },
  setQty: function (id, qty) {
    var c = this.read();
    if (qty <= 0) {
      delete c[id];
    } else {
      c[id] = qty;
    }
    this.write(c);
  },
  remove: function (id) {
    this.setQty(id, 0);
  },
  clear: function () {
    localStorage.removeItem("lb-cart");
    updateCartBadge();
  },
  count: function () {
    var c = this.read(),
      n = 0;
    Object.keys(c).forEach(function (k) {
      n += c[k];
    });
    return n;
  },
  items: function () {
    var c = this.read();
    return Object.keys(c)
      .map(function (id) {
        return { product: findProduct(id), qty: c[id] };
      })
      .filter(function (i) {
        return i.product;
      });
  },
  subtotal: function () {
    return this.items().reduce(function (s, i) {
      return s + i.product.price * i.qty;
    }, 0);
  },
};

function updateCartBadge() {
  var el = document.getElementById("cart-count");
  if (el) el.textContent = Cart.count();
}

function initAgeGate() {
  if (localStorage.getItem("lb-age-verified")) return;
  var gate = document.createElement("div");
  gate.id = "age-gate";
  gate.className = "fixed inset-0 z-[60] flex items-center justify-center px-6";
  gate.style.background = "rgba(14,14,15,0.93)";
  gate.setAttribute("role", "dialog");
  gate.setAttribute("aria-modal", "true");
  gate.innerHTML =
    '<div class="max-w-sm w-full text-center p-10" style="background:var(--parchment);">' +
    '<img src="assets/img/logo.jpg" alt="Liquor Box 256" class="h-16 w-auto mx-auto mb-5 mix-blend-multiply">' +
    '<h2 class="font-display text-2xl mb-3">Are you 18 or older?</h2>' +
    '<p class="text-sm opacity-60 mb-8">You must be of legal drinking age in Uganda to enter this site.</p>' +
    '<div class="flex gap-3 justify-center">' +
    '<button id="age-yes" class="text-sm px-7 py-3 btn-dark">Yes, I\'m 18+</button>' +
    '<a href="https://www.google.com" class="text-sm px-7 py-3 border" style="border-color:var(--onyx);">No, exit</a>' +
    "</div>" +
    "</div>";
  document.body.appendChild(gate);
  document.body.style.overflow = "hidden";
  document.getElementById("age-yes").addEventListener("click", function () {
    localStorage.setItem("lb-age-verified", "1");
    gate.remove();
    document.body.style.overflow = "";
  });
}

function initMobileMenu() {
  var btn = document.getElementById("menu-btn");
  var menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", function () {
    var open = !menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

/* Binds every [data-add="product-id"] button; safe to call again after re-rendering a grid */
function initAddButtons(root) {
  (root || document).querySelectorAll("[data-add]").forEach(function (btn) {
    if (btn._lbBound) return;
    btn._lbBound = true;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      Cart.add(btn.getAttribute("data-add"), 1);
      var original = btn.textContent;
      btn.textContent = "Added ✓";
      setTimeout(function () {
        btn.textContent = original;
      }, 1200);
    });
  });
}

function initWhatsAppFloat() {
  if (document.getElementById("wa-float")) return;
  var a = document.createElement("a");
  a.id = "wa-float";
  a.href = waLink("Hi Liquor Box 256, I'd like to place an order");
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", "Chat on WhatsApp");
  a.className =
    "fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg";
  a.style.background = "#25D366";
  a.innerHTML =
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.7l.5-.6c.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z"/></svg>';
  document.body.appendChild(a);
}

document.addEventListener("DOMContentLoaded", function () {
  initAgeGate();
  initMobileMenu();
  initAddButtons();
  initWhatsAppFloat();
  updateCartBadge();
});
