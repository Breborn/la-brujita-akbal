const PRODUCTS = [
  {
    id: 'amb-01',
    name: 'Ombliguera de Obsidiana Negra en Macramé & Plata',
    category: 'amuletos',
    categoryLabel: 'Amuletos y Ombligueras',
    intention: 'Protección',
    price: 18900,
    badge: '★ Favorito en IG',
    image: 'assets/obsidian-crystals.jpg',
    shortDesc: 'Tejida a mano con cabujón de obsidiana volcánica natural y cuentas de plata para proteger y sellar tu centro energético.',
    ritualTip: 'Límpiala con humo de lavanda o romero antes de colocarla en tu cintura. Respira profundo 3 veces visualizando un escudo negro-dorado alrededor de tu plexo solar.'
  },
  {
    id: 'amb-02',
    name: 'Ombliguera Lunar con Piedra Luna y Obsidiana',
    category: 'amuletos',
    categoryLabel: 'Amuletos y Ombligueras',
    intention: 'Enraizamiento',
    price: 21500,
    badge: 'Hecho a Mano',
    image: 'assets/ig-dato-obsidiana.png',
    shortDesc: 'Doble poder: enraizamiento profundo de la obsidiana y equilibrio emocional cíclico con destellos de piedra luna.',
    ritualTip: 'Ideal para terapeutas, tarotistas o personas altamente empáticas que absorben cansancio de ambientes cargados.'
  },
  {
    id: 'tar-01',
    name: 'Mazo Tarot Celestial Akbal (Edición Filo Dorado)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 29900,
    badge: 'Edición Especial',
    image: 'assets/tarot-deck.jpg',
    shortDesc: '78 cartas ilustradas con simbología clásica Rider-Waite en acabado púrpura nocturno y grabado metalizado dorado.',
    ritualTip: 'Incluye bolsa de terciopelo morado y un cristal de amatista para reposar tu mazo entre lecturas.'
  },
  {
    id: 'tar-02',
    name: 'Kit Iniciación al Tarot: Mazo + Paño de Terciopelo + Amatista',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 38500,
    badge: 'Kit Completo',
    image: 'assets/hero-altar.jpg',
    shortDesc: 'Todo lo necesario para consagrar tu espacio de lectura: mazo completo, paño bordado con fases lunares, vela violeta y cuarzo.',
    ritualTip: 'Antes de tu primera tirada, baraja pensando en tu pregunta y toca cada carta para impregnarlas con tu energía personal.'
  },
  {
    id: 'pla-01',
    name: 'Medalla Tetragrammaton en Plata Ley .925',
    category: 'plata',
    categoryLabel: 'Joyería en Plata .925',
    intention: 'Protección',
    price: 26900,
    badge: 'Plata .925',
    image: 'assets/silver-amulets.jpg',
    shortDesc: 'Pentagrama esotérico de alta protección forjado en Plata Ley .925 maciza con cadena de 50 cm incluida.',
    ritualTip: 'La punta superior del pentagrama siempre debe mirar hacia arriba (el Espíritu gobernando los cuatro elementos).'
  },
  {
    id: 'pla-02',
    name: 'Anillo Fases de la Luna con Piedra Luna Arcoíris (.925)',
    category: 'plata',
    categoryLabel: 'Joyería en Plata .925',
    intention: 'Intuición',
    price: 24900,
    badge: 'Plata .925',
    image: 'assets/silver-amulets.jpg',
    shortDesc: 'Anillo artesanal en plata envejecida con fases lunares talladas y cabujón central de piedra luna natural con adularescencia azul.',
    ritualTip: 'Cárgalo bajo la luz de la Luna Llena sobre un cuenco de madera o cristal.'
  },
  {
    id: 'pla-03',
    name: 'Péndulo y Dije Punta de Obsidiana Engarzada en Plata .925',
    category: 'plata',
    categoryLabel: 'Joyería en Plata .925',
    intention: 'Protección',
    price: 23500,
    badge: '2 en 1',
    image: 'assets/silver-amulets.jpg',
    shortDesc: 'Punta hexagonal de obsidiana negra con capuchón labrado en plata con soles y lunas. Úsalo como collar protector o para radiestesia.',
    ritualTip: 'Excelente para cortar cordones de pesadez y consultar respuestas de sí/no con claridad.'
  },
  {
    id: 'vel-01',
    name: 'Trío de Velas Rituales Vestidas (Corte, Transmutación y Miel)',
    category: 'velas',
    categoryLabel: 'Velas para Rituales',
    intention: 'Limpieza',
    price: 16900,
    badge: '100% Artesanal',
    image: 'assets/ritual-candles.jpg',
    shortDesc: 'Velas de cera de abeja vestidas a mano con lavanda, romero, chips de amatista, obsidiana y pan de oro.',
    ritualTip: 'Enciende con cerillas de madera. Usa la negra para cortar envidias, la violeta para transmutar y la de miel para abrir caminos.'
  },
  {
    id: 'vel-02',
    name: 'Velón Consagrado de Abundancia y Dulzura (Miel & Canela)',
    category: 'velas',
    categoryLabel: 'Velas para Rituales',
    intention: 'Abundancia',
    price: 11900,
    badge: 'Abrecaminos',
    image: 'assets/ritual-candles.jpg',
    shortDesc: 'Velón artesanal de cera de panal pura consagrado con flores secas, esencia natural de canela, manzanilla y cuarzo citrino.',
    ritualTip: 'Ideal para encender los días jueves o durante la fase de Luna Creciente anotando tus proyectos debajo.'
  },
  {
    id: 'cri-01',
    name: 'Pack Guardián de Cristales: Obsidiana + Amatista + Cuarzo Cristal',
    category: 'cristales',
    categoryLabel: 'Cristales y Obsidiana',
    intention: 'Enraizamiento',
    price: 15500,
    badge: 'Trinidad Energética',
    image: 'assets/obsidian-crystals.jpg',
    shortDesc: 'Combinación esencial recomendada por La Brujita Akbal: obsidiana pulida (escudo), drusa de amatista (calma) y punta de cuarzo (amplificador).',
    ritualTip: 'Colócalos en tu mesa de noche o escritorio para mantener el espacio limpio y en equilibrio.'
  },
  {
    id: 'cri-02',
    name: 'Esfera y Piedras Rodadas de Obsidiana Negra Volcánica',
    category: 'cristales',
    categoryLabel: 'Cristales y Obsidiana',
    intention: 'Protección',
    price: 13900,
    badge: 'Piedra Volcánica',
    image: 'assets/obsidian-crystals.jpg',
    shortDesc: 'Selección de obsidiana negra auténtica de brillo espejo para meditación, bolsillo o altar de protección.',
    ritualTip: 'Como dice El Dato de la Bruja: la obsidiana actúa como un espejo del alma que absorbe y ancla la densidad.'
  },
  {
    id: 'amb-03',
    name: 'Botella de Bruja (Spell Jar) de Protección y Calma con Lavanda',
    category: 'amuletos',
    categoryLabel: 'Amuletos y Ombligueras',
    intention: 'Limpieza',
    price: 12500,
    badge: 'Receta de Akbal',
    image: 'assets/hero-altar.jpg',
    shortDesc: 'Frasco ritual sellado con sal negra, flores de lavanda, romero, chips de amatista y cuarzo cristal.',
    ritualTip: 'Ubícala cerca de la puerta de entrada de tu hogar o en tu espacio de trabajo.'
  }
];

const ORACLE_MESSAGES = [
  {
    arcana: 'I • El Escudo de Obsidiana',
    message: 'Hoy tu energía necesita límites amorosos pero firmes. No cargues con emociones que no te pertenecen; protege tu centro vital (tu ombligo y plexo solar) y vuelve a tu raíz.',
    productId: 'amb-01'
  },
  {
    arcana: 'II • La Sacerdotisa de Akbal',
    message: 'Tu intuición te está hablando a través de sueños y corazonadas. Es momento de escuchar tu voz interior en silencio y consultar el oráculo sin dudar de tu sabiduría.',
    productId: 'tar-01'
  },
  {
    arcana: 'XVII • La Estrella y el Reflejo Lunar',
    message: 'Un ciclo pesado queda atrás. La plata lunar refleja lejos de ti cualquier envidia y abre paso a una etapa de claridad emocional y renovación espiritual.',
    productId: 'pla-01'
  },
  {
    arcana: 'XIX • El Fuego Transmutador',
    message: 'Enciende una luz con intención clara. Lo que hoy parece estancado se pone en movimiento cuando limpias tu espacio y decretas abundancia.',
    productId: 'vel-01'
  }
];

// Estado de la aplicación
let state = {
  category: 'todos',
  intention: 'all',
  search: '',
  cart: JSON.parse(localStorage.getItem('akbal_cart') || '[]')
};

// Utilidad para formatear moneda ($18.900)
function formatPrice(amount) {
  return '$' + amount.toLocaleString('es-CL');
}

// Renderizado del catálogo
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const filterBar = document.getElementById('activeFilterBar');
  const filterText = document.getElementById('activeFilterText');

  const filtered = PRODUCTS.filter((item) => {
    const matchesCategory = state.category === 'todos' || item.category === state.category;
    const matchesIntention = state.intention === 'all' || item.intention === state.intention;
    const query = state.search.trim().toLowerCase();
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.shortDesc.toLowerCase().includes(query) ||
      item.intention.toLowerCase().includes(query) ||
      item.categoryLabel.toLowerCase().includes(query);

    return matchesCategory && matchesIntention && matchesSearch;
  });

  // Mostrar barra si hay filtros activos
  const hasFilters = state.category !== 'todos' || state.intention !== 'all' || state.search.trim() !== '';
  filterBar.hidden = !hasFilters;
  if (hasFilters) {
    const parts = [];
    if (state.category !== 'todos') parts.push(`Categoría: ${state.category.toUpperCase()}`);
    if (state.intention !== 'all') parts.push(`Intención: ${state.intention}`);
    if (state.search.trim()) parts.push(`Búsqueda: "${state.search.trim()}"`);
    filterText.textContent = `🔮 Filtrando por ${parts.join(' • ')} (${filtered.length} tesoros)`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: rgba(34,15,54,0.6); border: 1px dashed rgba(240,185,66,0.4); border-radius: 18px;">
        <p style="font-size: 1.15rem; margin-bottom: 0.8rem;">✨ No encontramos un amuleto con esa combinación exacta.</p>
        <button class="btn btn--outline" onclick="resetFilters()">Ver todo el catálogo de La Brujita Akbal</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (product) => `
      <article class="product-card">
        <div class="product-card__media">
          <img src="${product.image}" alt="${product.name}" class="product-card__img" loading="lazy" />
          <span class="product-card__badge">${product.badge}</span>
          <span class="product-card__intention">✦ ${product.intention}</span>
        </div>
        <div class="product-card__body">
          <span class="product-card__category">${product.categoryLabel}</span>
          <h3 class="product-card__title">${product.name}</h3>
          <p class="product-card__desc">${product.shortDesc}</p>
          <div class="product-card__footer">
            <span class="product-card__price">${formatPrice(product.price)}</span>
            <div class="product-card__actions">
              <button class="btn-icon-ritual" data-quick-view="${product.id}" title="Ver ritual y detalles">
                📜 Ritual
              </button>
              <button class="btn-add-cart" data-quick-add="${product.id}">
                + Agregar
              </button>
            </div>
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

function resetFilters() {
  state.category = 'todos';
  state.intention = 'all';
  state.search = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.category-tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.category === 'todos');
  });
  document.querySelectorAll('.intention-card').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.intention === 'all');
  });
  renderProducts();
}

// Gestión del Carrito
function saveCart() {
  localStorage.setItem('akbal_cart', JSON.stringify(state.cart));
  renderCart();
}

function addToCart(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: product.id, qty: 1 });
  }

  saveCart();
  showToast(`✨ "${product.name}" agregado a tu pedido`);
}

function updateQty(productId, delta) {
  const index = state.cart.findIndex((item) => item.id === productId);
  if (index === -1) return;

  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  saveCart();
}

function renderCart() {
  const badge = document.getElementById('cartCountBadge');
  const container = document.getElementById('cartItemsContainer');
  const totalEl = document.getElementById('cartTotalValue');

  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = totalCount;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <p style="font-size: 2.2rem; margin-bottom: 0.5rem;">🌙</p>
        <p><strong>Tu altar de pedido está vacío</strong></p>
        <p style="font-size: 0.85rem; margin-top: 0.35rem;">Explora las ombligueras de obsidiana, mazos de tarot, joyas en plata y velas rituales.</p>
      </div>
    `;
    totalEl.textContent = '$0';
    return;
  }

  let totalAmount = 0;
  container.innerHTML = state.cart
    .map((cartItem) => {
      const product = PRODUCTS.find((p) => p.id === cartItem.id);
      if (!product) return '';
      const subtotal = product.price * cartItem.qty;
      totalAmount += subtotal;

      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" class="cart-item__img" />
          <div>
            <div class="cart-item__title">${product.name}</div>
            <div class="cart-item__price">${formatPrice(product.price)} c/u • Sub: ${formatPrice(subtotal)}</div>
            <div class="cart-item__controls">
              <button class="qty-btn" onclick="updateQty('${product.id}', -1)" aria-label="Disminuir cantidad">−</button>
              <span style="min-width: 22px; text-align: center; font-size: 0.88rem; font-weight: 700;">${cartItem.qty}</span>
              <button class="qty-btn" onclick="updateQty('${product.id}', 1)" aria-label="Aumentar cantidad">+</button>
            </div>
          </div>
          <button class="qty-btn" onclick="updateQty('${product.id}', -99)" title="Quitar">✕</button>
        </div>
      `;
    })
    .join('');

  totalEl.textContent = formatPrice(totalAmount);
}

// Construir texto del pedido para WhatsApp / Instagram
function buildOrderMessage() {
  const customerName = document.getElementById('customerName').value.trim() || 'Amiga/o de La Brujita Akbal';
  const customerIntention = document.getElementById('customerIntention').value.trim();

  let total = 0;
  const lines = state.cart.map((item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    const sub = product.price * item.qty;
    total += sub;
    return `• ${item.qty}x ${product.name} (${formatPrice(sub)})`;
  });

  let message = `✨ ¡Hola Verónica y Zyra! 🌙🐾\nSoy *${customerName}* y quiero realizar este pedido en *La Brujita Akbal*:\n\n`;
  message += lines.join('\n');
  message += `\n\n🔮 *Total estimado:* ${formatPrice(total)}`;
  if (customerIntention) {
    message += `\n💜 *Mi intención / nota:* ${customerIntention}`;
  }
  message += `\n\n¿Me confirmas disponibilidad y datos de envío? ¡Gracias! ✨`;
  return message;
}

// Modal de Vista Rápida y Ritual de Activación
function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const body = document.getElementById('modalBody');

  body.innerHTML = `
    <div class="modal-product">
      <img src="${product.image}" alt="${product.name}" />
      <div>
        <span class="product-card__category">${product.categoryLabel} • ${product.intention}</span>
        <h3 id="modalTitle" style="font-family: var(--font-display); font-size: 1.35rem; color: var(--gold-light); margin: 0.3rem 0 0.6rem;">
          ${product.name}
        </h3>
        <p style="font-size: 0.92rem; color: var(--text-muted);">${product.shortDesc}</p>
        <div class="modal-ritual-box">
          <strong style="color: var(--gold-light); display: block; margin-bottom: 0.25rem;">📜 El Dato de la Bruja (Ritual de Uso):</strong>
          <p>${product.ritualTip}</p>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1rem;">
          <strong style="font-family: var(--font-display); font-size: 1.4rem; color: var(--gold-light);">${formatPrice(product.price)}</strong>
          <button class="btn btn--gold" onclick="addToCart('${product.id}'); closeProductModal();">
            <span>Agregar a mi pedido ✦</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
}

// Toast
let toastTimeout;
function showToast(text) {
  const toast = document.getElementById('toastNotification');
  toast.textContent = text;
  toast.hidden = false;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.hidden = true;
  }, 2800);
}

// Abrir / Cerrar Carrito
function toggleCart(open) {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  drawer.classList.toggle('open', open);
  drawer.setAttribute('aria-hidden', String(!open));
  backdrop.hidden = !open;
}

// Oráculo Interactivo
function drawOracleCard() {
  const randomPick = ORACLE_MESSAGES[Math.floor(Math.random() * ORACLE_MESSAGES.length)];
  const recommendedProduct = PRODUCTS.find((p) => p.id === randomPick.productId);
  const stage = document.getElementById('oracleResultCard');

  stage.innerHTML = `
    <div class="tarot-card-back" style="background: radial-gradient(circle at 50% 20%, #5c1978, #14061f 85%); cursor: default;">
      <div class="tarot-card-back__inner" style="gap: 0.5rem;">
        <span style="font-size: 0.72rem; letter-spacing: 0.14em; color: var(--gold-primary); font-weight: 800;">MENSAJE REVELADO</span>
        <strong style="font-family: var(--font-display); font-size: 1.15rem; color: var(--gold-light);">${randomPick.arcana}</strong>
        <p style="font-size: 0.88rem; color: var(--text-main); line-height: 1.45;">"${randomPick.message}"</p>
        <div style="width: 100%; border-top: 1px dashed rgba(240,185,66,0.4); padding-top: 0.6rem; margin-top: 0.3rem;">
          <span style="font-size: 0.75rem; color: var(--gold-light); display: block; margin-bottom: 0.4rem;">
            🔮 Amuleto afín: <strong>${recommendedProduct.name}</strong>
          </span>
          <button class="btn-add-cart" onclick="addToCart('${recommendedProduct.id}')">
            Agregar amuleto (${formatPrice(recommendedProduct.price)})
          </button>
        </div>
      </div>
    </div>
  `;
}

// Inicialización de eventos
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();

  // Tabs de categoría
  document.getElementById('categoryTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.category-tab');
    if (!btn) return;
    state.category = btn.dataset.category;
    document.querySelectorAll('.category-tab').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts();
  });

  // Tarjetas de intención
  document.getElementById('intentionFilters').addEventListener('click', (e) => {
    const card = e.target.closest('.intention-card');
    if (!card) return;
    state.intention = card.dataset.intention;
    document.querySelectorAll('.intention-card').forEach((c) => c.classList.remove('active'));
    card.classList.add('active');
    renderProducts();
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
  });

  // Buscador en vivo
  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.search = e.target.value;
    renderProducts();
  });

  document.getElementById('clearFiltersBtn').addEventListener('click', resetFilters);

  // Delegación global de botones rápidos (Agregar al carrito / Ver ritual / Filtrar categoría)
  document.body.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-quick-add]');
    if (addBtn) {
      addToCart(addBtn.dataset.quickAdd);
      return;
    }

    const viewBtn = e.target.closest('[data-quick-view]');
    if (viewBtn) {
      openProductModal(viewBtn.dataset.quickView);
      return;
    }

    const filterCatBtn = e.target.closest('[data-filter-cat]');
    if (filterCatBtn) {
      const cat = filterCatBtn.dataset.filterCat;
      state.category = cat;
      document.querySelectorAll('.category-tab').forEach((b) => {
        b.classList.toggle('active', b.dataset.category === cat);
      });
      renderProducts();
      document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Eventos del carrito
  document.getElementById('openCartBtn').addEventListener('click', () => toggleCart(true));
  document.getElementById('closeCartBtn').addEventListener('click', () => toggleCart(false));
  document.getElementById('cartBackdrop').addEventListener('click', () => toggleCart(false));

  // Eventos del Modal
  document.getElementById('closeModalBtn').addEventListener('click', closeProductModal);
  document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target.id === 'productModal') closeProductModal();
  });

  // Inicializar Sala de Lectura de Tarot en Línea con Verónica
  initTarotReadingRoom();

  // Checkout por WhatsApp
  document.getElementById('checkoutWhatsappBtn').addEventListener('click', () => {
    if (state.cart.length === 0) {
      showToast('🔮 Primero agrega al menos un producto a tu pedido');
      return;
    }
    const rawPhone = document.getElementById('whatsappPhoneConfig').value.replace(/\D/g, '') || '56912345678';
    const text = encodeURIComponent(buildOrderMessage());
    window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank', 'noopener,noreferrer');
  });

  // Copiar pedido para Instagram DM
  document.getElementById('copyOrderInstagramBtn').addEventListener('click', async () => {
    if (state.cart.length === 0) {
      showToast('🔮 Primero agrega al menos un producto a tu pedido');
      return;
    }
    const text = buildOrderMessage();
    try {
      await navigator.clipboard.writeText(text);
      const feedback = document.getElementById('copyFeedbackMsg');
      feedback.hidden = false;
      showToast('📋 ¡Pedido copiado para pegar en Instagram DM!');
      setTimeout(() => {
        feedback.hidden = true;
      }, 4500);
    } catch {
      showToast('Selecciona y copia el mensaje manualmente');
    }
  });

  // Consulta personalizada por WhatsApp
  document.getElementById('sendCustomWhatsappBtn').addEventListener('click', () => {
    const rawPhone = document.getElementById('whatsappPhoneConfig').value.replace(/\D/g, '') || '56912345678';
    const customQuestion =
      document.getElementById('customQuestionInput').value.trim() ||
      'Hola Verónica ✨ Vi tu página web de La Brujita Akbal y me gustaría hacerte una consulta.';
    window.open(
      `https://wa.me/${rawPhone}?text=${encodeURIComponent(customQuestion)}`,
      '_blank',
      'noopener,noreferrer'
    );
  });

  // Menú móvil
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('open');
  });
});


// =========================================================================
// SALA DE LECTURA DE TAROT EN LÍNEA CON VERÓNICA (MAZO DE ARCANOS MAYORES)
// =========================================================================
const MAJOR_ARCANA_DECK = [
  {
    roman: 'I',
    name: 'El Mago',
    symbol: '🪄',
    keywords: 'Manifestación • Poder Personal • Inicios',
    past: 'Has venido reuniendo todas las herramientas internas y la experiencia necesaria para dar un salto importante.',
    present: 'Tienes en tus manos el poder de materializar lo que deseas. Confía en tus dones y actúa con determinación.',
    future: 'Se abre un nuevo ciclo creativo muy fértil; tus intenciones bien enfocadas darán frutos concretos.',
    productId: 'vel-02'
  },
  {
    roman: 'II',
    name: 'La Sacerdotisa de Akbal',
    symbol: '🌙',
    keywords: 'Intuición • Misterio • Sabiduría Interior',
    past: 'Tu intuición ya te venía avisando a través de sueños y corazonadas lo que estaba ocurriendo bajo la superficie.',
    present: 'Es momento de guardar silencio, observar sin prisa y escuchar la voz de tu alma antes de hablar.',
    future: 'Un secreto o verdad importante se revelará a tu favor cuando conectes con tu calma interior.',
    productId: 'tar-01'
  },
  {
    roman: 'III',
    name: 'La Emperatriz',
    symbol: '👑',
    keywords: 'Abundancia • Creatividad • Amor Propio',
    past: 'Sembraste con amor y paciencia, cuidando tus vínculos y tu propia energía vital.',
    present: 'Estás en una etapa de magnetismo, fertilidad de proyectos y merecimiento. Permítete recibir.',
    future: 'Florecimiento económico y emocional; lo que cuides hoy crecerá con fuerza y belleza.',
    productId: 'pla-02'
  },
  {
    roman: 'VI',
    name: 'Los Enamorados',
    symbol: '💛',
    keywords: 'Elección del Corazón • Armonía • Vínculos',
    past: 'Una decisión importante o encuentro marcó el rumbo emocional en el que te encuentras hoy.',
    present: 'El Tarot te pide elegir desde el amor auténtico y la coherencia con tus valores, no desde el miedo.',
    future: 'Alianza sincera, reconciliación con tu propio deseo y claridad total en tus relaciones.',
    productId: 'vel-02'
  },
  {
    roman: 'IX',
    name: 'El Ermitaño',
    symbol: '🏮',
    keywords: 'Introspección • Protección • Guía Interna',
    past: 'Necesitaste tomar distancia del ruido externo para sanar y comprender tu verdadero propósito.',
    present: 'Protege tu centro energético (tu plexo solar) y selecciona muy bien con quién compartes tu energía.',
    future: 'Tu prudencia actual te llevará a una respuesta sabia y a una paz profunda e inquebrantable.',
    productId: 'amb-01'
  },
  {
    roman: 'X',
    name: 'La Rueda de la Fortuna',
    symbol: '☸️',
    keywords: 'Destino • Movimiento • Cambio de Ciclo',
    past: 'Atravesaste altibajos que te enseñaron a fluir y no aferrarte a lo que ya cumplió su ciclo.',
    present: 'La energía se pone en movimiento rápido. Acepta las sincronías y oportunidades inesperadas.',
    future: 'Un giro sumamente favorable destraba lo que parecía estancado y renueva tu suerte.',
    productId: 'pla-01'
  },
  {
    roman: 'XIV',
    name: 'La Templanza',
    symbol: '🏺',
    keywords: 'Alquimia • Equilibrio • Sanación',
    past: 'Tras días de intensidad emocional, tu espíritu buscó recuperar su centro y armonía.',
    present: 'Evita los extremos. La paciencia y la limpieza energética están integrando tus emociones.',
    future: 'Llega una etapa de alivio, acuerdos pacíficos y bienestar integral para tu mente y cuerpo.',
    productId: 'cri-01'
  },
  {
    roman: 'XVII',
    name: 'La Estrella',
    symbol: '✨',
    keywords: 'Esperanza • Renovación • Guía Celestial',
    past: 'Superaste una tormenta importante manteniendo viva tu fe y tu sensibilidad.',
    present: 'Estás bajo una protección luminosa. Limpia tu aura y confía en que estás en el camino correcto.',
    future: 'Tus sueños más nobles encuentran cauce; llega inspiración, alivio y bendiciones a tu hogar.',
    productId: 'vel-01'
  },
  {
    roman: 'XVIII',
    name: 'La Luna',
    symbol: '🐺',
    keywords: 'Sueños • Inconsciente • Limpieza de Sombras',
    past: 'Ciertas dudas, ilusiones o energías densas del entorno nublaron tu claridad recientemente.',
    present: 'No temas mirar tus emociones profundas; usa obsidiana y plata para cortar confusiones y envidias.',
    future: 'La niebla se disipa por completo y tu intuición sale fortalecida al amanecer.',
    productId: 'amb-02'
  },
  {
    roman: 'XIX',
    name: 'El Sol',
    symbol: '☀️',
    keywords: 'Éxito • Claridad • Plenitud Vital',
    past: 'Tu honestidad y esfuerzo constante prepararon el terreno para este momento de luz.',
    present: 'Claridad absoluta, vitalidad y alegría. Todo sale a la luz de manera favorable para ti.',
    future: 'Triunfo rotundo en tu consulta, calidez afectiva y prosperidad compartida.',
    productId: 'vel-02'
  }
];

let tarotSpreadState = {
  shuffledDeck: [],
  selectedCards: []
};

function initTarotReadingRoom() {
  const fanContainer = document.getElementById('tarotFanContainer');
  if (!fanContainer) return;

  shuffleAndResetTarot();

  document.getElementById('shuffleDeckBtn').addEventListener('click', () => {
    shuffleAndResetTarot();
    showToast('🔀 Verónica y Zyra han barajado las cartas en el altar');
  });

  document.getElementById('revealAllSpreadBtn').addEventListener('click', () => {
    while (tarotSpreadState.selectedCards.length < 3) {
      const remaining = tarotSpreadState.shuffledDeck.filter(
        (c) => !tarotSpreadState.selectedCards.some((sel) => sel.roman === c.roman)
      );
      const nextCard = remaining[Math.floor(Math.random() * remaining.length)];
      tarotSpreadState.selectedCards.push(nextCard);
    }
    renderTarotFan();
    renderTarotSpreadSlots();
    renderTarotSynthesis();
  });

  document.getElementById('resetReadingBtn').addEventListener('click', () => {
    shuffleAndResetTarot();
  });

  document.getElementById('sendReadingToVeronicaBtn').addEventListener('click', () => {
    sendTarotReadingWhatsApp();
  });

  // Botones para agendar sesiones en vivo con Verónica
  document.querySelectorAll('[data-book-session]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sessionName = btn.getAttribute('data-book-session');
      const querent = document.getElementById('tarotQuerentName').value.trim() || 'Consultante de La Brujita Akbal';
      const topic = document.getElementById('tarotSpreadTopic').value;
      const question = document.getElementById('tarotQuerentQuestion').value.trim();
      const rawPhone = document.getElementById('whatsappPhoneConfig').value.replace(/\D/g, '') || '56912345678';

      let msg = `✨ ¡Hola Verónica! 🌙🔮\nSoy *${querent}* y quiero agendar una *${sessionName}* desde la página de *La Brujita Akbal*.\n\n`;
      msg += `✴ *Tema de consulta:* ${topic}\n`;
      if (question) {
        msg += `✴ *Mi pregunta / intención:* "${question}"\n`;
      }
      if (tarotSpreadState.selectedCards.length === 3) {
        const names = tarotSpreadState.selectedCards.map((c) => `${c.roman} ${c.name}`).join(' • ');
        msg += `🃏 *Mis 3 cartas en la tirada online:* ${names}\n`;
      }
      msg += `\n¿Qué horarios tienes disponibles? ¡Muchas gracias! ✨`;

      window.open(`https://wa.me/${rawPhone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    });
  });
}

function shuffleAndResetTarot() {
  const copy = [...MAJOR_ARCANA_DECK];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  tarotSpreadState.shuffledDeck = copy.slice(0, 7);
  tarotSpreadState.selectedCards = [];

  renderTarotFan();
  renderTarotSpreadSlots();
  document.getElementById('tarotReadingSynthesis').hidden = true;
}

function renderTarotFan() {
  const fanContainer = document.getElementById('tarotFanContainer');
  const statusPill = document.getElementById('tarotStepStatus');
  const count = tarotSpreadState.selectedCards.length;

  statusPill.textContent =
    count < 3
      ? `🔮 Selecciona ${3 - count} carta(s) más del abanico (${count} / 3 elegidas)`
      : '✨ ¡Tirada de 3 Arcanos completada! Lee tu mensaje abajo';

  fanContainer.innerHTML = tarotSpreadState.shuffledDeck
    .map((card, index) => {
      const isPicked = tarotSpreadState.selectedCards.some((c) => c.roman === card.roman);
      return `
        <button
          class="fan-card ${isPicked ? 'picked' : ''}"
          data-fan-index="${index}"
          aria-label="Carta misteriosa ${index + 1}"
          ${isPicked || count >= 3 ? 'disabled' : ''}
        >
          <span class="fan-card__moon">🌙</span>
          <span class="fan-card__num">AKBAL</span>
          <span style="font-size: 0.65rem; color: var(--gold-primary);">✴ ☾ ✴</span>
        </button>
      `;
    })
    .join('');

  fanContainer.querySelectorAll('.fan-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (tarotSpreadState.selectedCards.length >= 3) return;
      const idx = parseInt(btn.getAttribute('data-fan-index'), 10);
      const chosen = tarotSpreadState.shuffledDeck[idx];
      if (!chosen) return;

      tarotSpreadState.selectedCards.push(chosen);
      renderTarotFan();
      renderTarotSpreadSlots();
      if (tarotSpreadState.selectedCards.length === 3) {
        renderTarotSynthesis();
      }
    });
  });
}

function renderTarotSpreadSlots() {
  const placeholders = [
    'Elige tu 1ª carta arriba (Pasado / Raíz)',
    'Elige tu 2ª carta arriba (Presente)',
    'Elige tu 3ª carta arriba (Futuro / Consejo)'
  ];

  for (let i = 0; i < 3; i++) {
    const slotEl = document.getElementById(`spreadSlot${i}`);
    const card = tarotSpreadState.selectedCards[i];

    if (!card) {
      slotEl.className = 'spread-slot__card';
      slotEl.innerHTML = `<span class="slot-placeholder">${placeholders[i]}</span>`;
    } else {
      const positionMeaning = i === 0 ? card.past : i === 1 ? card.present : card.future;
      slotEl.className = 'spread-slot__card revealed';
      slotEl.innerHTML = `
        <span class="revealed-arcana__symbol">${card.symbol}</span>
        <span class="revealed-arcana__roman">ARCANO ${card.roman}</span>
        <strong class="revealed-arcana__name">${card.name}</strong>
        <span class="revealed-arcana__keywords">${card.keywords}</span>
        <p class="revealed-arcana__meaning">${positionMeaning}</p>
      `;
    }
  }
}

function renderTarotSynthesis() {
  const synthesisBox = document.getElementById('tarotReadingSynthesis');
  const synthesisBody = document.getElementById('tarotSynthesisBody');
  const [c1, c2, c3] = tarotSpreadState.selectedCards;
  if (!c1 || !c2 || !c3) return;

  const querent = document.getElementById('tarotQuerentName').value.trim() || 'Alma Luminosa';
  const topic = document.getElementById('tarotSpreadTopic').value;
  const question = document.getElementById('tarotQuerentQuestion').value.trim();
  const recommendedProduct = PRODUCTS.find((p) => p.id === c3.productId) || PRODUCTS[0];

  synthesisBody.innerHTML = `
    <p style="margin-bottom: 0.75rem;">
      ✨ <strong>Mensaje de Verónica (+ Zyra 🐾) para ${querent}</strong> sobre <em>${topic}</em>:
      ${question ? `<br><span style="color: var(--gold-light);">Tu consulta: "${question}"</span>` : ''}
    </p>
    <p style="margin-bottom: 0.75rem;">
      Tu camino viene marcado por la energía de <strong>${c1.name} (${c1.roman})</strong> en el pasado, invitándote a honrar lo aprendido. Hoy, en tu presente, <strong>${c2.name} (${c2.roman})</strong> te señala el punto exacto donde debes enfocar tu fuerza espiritual, mientras que <strong>${c3.name} (${c3.roman})</strong> ilumina tu desenlace y consejo evolutivo.
    </p>
    <div style="background: rgba(229,184,75,0.1); border: 1px dashed var(--gold-primary); padding: 0.9rem 1.1rem; border-radius: 14px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <div>
        <span style="font-size: 0.75rem; color: var(--gold-primary); font-weight: 800; letter-spacing: 0.08em;">🔮 AMULETO RECOMENDADO PARA TU TIRADA</span>
        <strong style="display: block; color: var(--gold-light); font-size: 1rem;">${recommendedProduct.name} (${formatPrice(recommendedProduct.price)})</strong>
      </div>
      <button class="btn-add-cart" onclick="addToCart('${recommendedProduct.id}')">
        + Sumar Amuleto a mi Pedido
      </button>
    </div>
  `;

  synthesisBox.hidden = false;
}

function sendTarotReadingWhatsApp() {
  const [c1, c2, c3] = tarotSpreadState.selectedCards;
  if (!c1 || !c2 || !c3) return;

  const querent = document.getElementById('tarotQuerentName').value.trim() || 'Consultante de La Brujita Akbal';
  const topic = document.getElementById('tarotSpreadTopic').value;
  const question = document.getElementById('tarotQuerentQuestion').value.trim();
  const rawPhone = document.getElementById('whatsappPhoneConfig').value.replace(/\D/g, '') || '56912345678';

  let msg = `🃏✨ ¡Hola Verónica! Acabo de realizar mi *Tirada de Tarot en Línea* en *La Brujita Akbal*:\n\n`;
  msg += `👤 *Nombre / Signo:* ${querent}\n`;
  msg += `🔮 *Área de consulta:* ${topic}\n`;
  if (question) {
    msg += `💭 *Mi pregunta:* "${question}"\n`;
  }
  msg += `\n*Mis 3 Arcanos revelados:*\n`;
  msg += `1️⃣ *Pasado:* ${c1.roman} - ${c1.name}\n`;
  msg += `2️⃣ *Presente:* ${c2.roman} - ${c2.name}\n`;
  msg += `3️⃣ *Futuro / Consejo:* ${c3.roman} - ${c3.name}\n\n`;
  msg += `Me encantaría profundizar esta lectura contigo en una sesión personalizada. ¿Me cuentas cómo agendar? ✨🌙`;

  window.open(`https://wa.me/${rawPhone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}
