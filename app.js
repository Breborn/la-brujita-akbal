const PRODUCTS = [
  {
    id: 'tar-11',
    name: 'Tarot Egipcio + Libro Guía de Interpretación (Edición Completa)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 22000,
    badge: '📚 Incluye Libro + Mazo',
    image: 'assets/tarot-egipcio-libro.jpg',
    shortDesc: 'Pack completo de sabiduría hermética: mazo de 78 arcanos del Tarot Egipcio más libro grande de estudio e interpretación simbólica y astrológica.',
    ritualTip: 'Ideal para estudiar en profundidad la simbología de los antiguos templos egipcios; conságralo junto a una amatista o escarabajo sagrado.'
  },
  {
    id: 'tar-12',
    name: 'El Tarot de Marsella + El Libro Mágico de los 78 Arcanos',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 22000,
    badge: '📚 Incluye Libro + Mazo',
    image: 'assets/tarot-marsella-libro.jpg',
    shortDesc: 'Edición completa que incluye la baraja clásica del Tarot de Marsella (78 cartas) y el libro completo "Cómo interpretar las cartas del Tarot de Marsella".',
    ritualTip: 'Perfecto para aprender desde cero o perfeccionar tiradas tradicionales con el respaldo de un libro detallado paso a paso.'
  },
  {
    id: 'tar-13',
    name: 'Tarot Osho Zen + Libro Guía Completo (78 Cartas Mágicas)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Enraizamiento',
    price: 22000,
    badge: '📚 Incluye Libro + Mazo',
    image: 'assets/tarot-osho-zen-libro.jpg',
    shortDesc: 'El trascendental juego del Zen en su edición completa: baraja de 78 cartas mágicas más libro grande con meditaciones y significados profundos del aquí y ahora.',
    ritualTip: 'Úsalo para lecturas terapéuticas de autoconocimiento, bloqueos emocionales y despertar de la consciencia presente.'
  },
  {
    id: 'tar-14',
    name: 'El Pequeño Tarot Rider — Edición Ilustrada SmithTiny (78 Cartas)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 15000,
    badge: 'Edición Ilustrada',
    image: 'assets/tarot-rider-smithtiny.jpg',
    shortDesc: 'Encantadora versión ilustrada estilo kawaii/caricatura del clásico Rider-Waite en español. 78 cartas llenas de carisma, color y ternura.',
    ritualTip: 'Un mazo súper amigable y luminoso, ideal para lecturas cotidianas, regalo brujil o para conectar con tu niño/a interior.'
  },
  {
    id: 'tar-15',
    name: 'Tarot Thoth de Aleister Crowley (Edición Arkano Books)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 15000,
    badge: 'Alta Magia & Alquimia',
    image: 'assets/tarot-thoth-crowley.jpg',
    shortDesc: 'Uno de los mazos más poderosos y esotéricos de la historia, pintado por Lady Frieda Harris con simbolismo cabalístico, alquímico y astrológico.',
    ritualTip: 'Resguárdalo envuelto en tela morada o negra junto a una obsidiana o cuarzo cristal para mantener su vibración hermética.'
  },
  {
    id: 'tar-03',
    name: 'El Tarot Psíquico (65 Cartas y Manual Guía)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 15000,
    badge: 'Nuevo · 65 Cartas',
    image: 'assets/tarot-psiquico.jpg',
    shortDesc: 'Mazo canalizador de 65 cartas ilustradas y manual guía en español, ideal para despertar tus facultades psíquicas, lectura de chakras y conexión intuitiva.',
    ritualTip: 'Antes de tu primera lectura, sostén el mazo entre tus manos a la altura del tercer ojo y decreta claridad y guía luminosa.'
  },
  {
    id: 'tar-04',
    name: 'Tarot Vidente de Luz (Baraja de 78 Cartas y Manual Guía)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 15000,
    badge: '★ Más Pedido',
    image: 'assets/tarot-vidente-de-luz.jpg',
    shortDesc: 'Versión en español del famoso Light Seer\'s Tarot. 78 cartas vibrantes y modernas con manual guía para explorar las luces y sombras del alma.',
    ritualTip: 'Excelente tanto para principiantes como lectores avanzados; acompáñalo con un cuarzo cristal en tu mesa de lectura.'
  },
  {
    id: 'tar-05',
    name: 'Tarot de Luz — Edición Ouroboros Rosa (78 Cartas)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 15000,
    badge: 'Edición Especial',
    image: 'assets/tarot-de-luz-rosa.jpg',
    shortDesc: 'Delicada edición en estuche rosa con grabado Ouroboros. Baraja completa de 78 arcanos de alta conexión espiritual y energía amorosa.',
    ritualTip: 'Ideal para lecturas de vínculos, amor propio, evolución espiritual y procesos de sanación emocional.'
  },
  {
    id: 'tar-06',
    name: 'Gran Tarot de los Ángeles — Edición Premium (80 Arcanos)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Protección',
    price: 15000,
    badge: '80 Arcanos Premium',
    image: 'assets/gran-tarot-angeles.jpg',
    shortDesc: '80 arcanos ilustrados a todo color con instrucciones adivinatorias completas para canalizar mensajes de arcángeles, serafines y guías espirituales.',
    ritualTip: 'Enciende una vela blanca antes de abrir el mazo para invocar la asistencia y protección de tus guías angélicos.'
  },
  {
    id: 'tar-07',
    name: 'El Tarot de las Musas (Baraja de 78 Cartas y Manual Guía)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 15000,
    badge: 'Creatividad & Alma',
    image: 'assets/tarot-de-las-musas.jpg',
    shortDesc: 'Un viaje místico e inspirador a través de 78 cartas llenas de simbolismo femenino, elementos de la naturaleza (fuego, agua, aire y tierra) y manual guía.',
    ritualTip: 'Saca una carta cada mañana para recibir la inspiración de las Musas y alinear tu energía creativa del día.'
  },
  {
    id: 'tar-08',
    name: 'Tarot Rider Waite Clásico (78 Cartas y Manual)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 15000,
    badge: 'Clásico Esencial',
    image: 'assets/tarot-rider-waite.jpg',
    shortDesc: 'El mazo tradicional e indispensable del Tarot Rider-Waite en español. 78 arcanos con la simbología arquetípica original para aprender y profundizar.',
    ritualTip: 'El mazo base recomendado por Verónica para quienes inician su camino en el estudio de los 22 Arcanos Mayores y 56 Menores.'
  },
  {
    id: 'tar-09',
    name: 'Tarot de los Chamanes (Sabiduría Ancestral)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Enraizamiento',
    price: 15000,
    badge: 'Sabiduría Ancestral',
    image: 'assets/tarot-de-los-chamanes.jpg',
    shortDesc: 'Conecta con la medicina de la tierra, animales de poder y visiones chamánicas a través de sus arcanos de transformación espiritual.',
    ritualTip: 'Sahúma este mazo con palo santo o copal para activar su fuerza telúrica antes de tus tiradas de sanación.'
  },
  {
    id: 'tar-10',
    name: 'Tarot del Zodíaco (Baraja de 78 Cartas y Manual Guía)',
    category: 'tarot',
    categoryLabel: 'Cartas de Tarot',
    intention: 'Intuición',
    price: 15000,
    badge: 'Astrología & Tarot',
    image: 'assets/tarot-del-zodiaco.jpg',
    shortDesc: 'Fusión perfecta entre astrología y tarot: 78 cartas ilustradas con constelaciones, signos zodiacales y energías planetarias más manual guía.',
    ritualTip: 'Especialmente poderoso durante lunas nuevas, lunas llenas y lecturas de revolución solar o tránsitos astrológicos.'
  },
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
    const rawPhone = document.getElementById('whatsappPhoneConfig').value.replace(/\D/g, '') || '56956823670';
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
    const rawPhone = document.getElementById('whatsappPhoneConfig').value.replace(/\D/g, '') || '56956823670';
    const customQuestion =
      document.getElementById('customQuestionInput').value.trim() ||
      'Hola Verónica ✨ Vi tu página web de La Brujita Akbal y me gustaría hacerte una consulta.';
    window.open(
      `https://wa.me/${rawPhone}?text=${encodeURIComponent(customQuestion)}`,
      '_blank',
      'noopener,noreferrer'
    );
  });

  // Menú móvil y cierre automático al navegar
  const mainNav = document.getElementById('mainNav');
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  document.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav?.classList.remove('open');
    });
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
    productId: 'vel-02',
    interpretations: {
      general: {
        keywords: 'Manifestación • Poder Personal • Inicios',
        past: 'Reuniste el conocimiento, las herramientas internas y la experiencia para dar un salto trascendente.',
        present: 'Tienes en tus manos el poder de materializar lo que te propongas. Actúa con enfoque y determinación.',
        future: 'Se abre un nuevo ciclo creativo muy fértil; tus intenciones bien dirigidas darán frutos concretos.'
      },
      trabajo: {
        keywords: 'Iniciativa • Nuevos Negocios • Liderazgo',
        past: 'Desarrollaste habilidades clave y experiencia práctica que hoy te colocan en una posición ventajosa.',
        present: 'Cuentas con todos los recursos para liderar, emprender o postular a ese nuevo rol. Confía en tu talento.',
        future: 'Firma de contratos favorables, despegue exitoso de proyectos y un aumento tangible de tus ingresos.'
      },
      amor: {
        keywords: 'Conquista • Magnetismo • Comunicación Sincera',
        past: 'Aprendiste a comunicarte con honestidad y definir con claridad lo que deseas en una relación.',
        present: 'Gran poder de atracción e iniciativa. Es el momento de expresar lo que sientes y tomar la delantera.',
        future: 'Comienzo de un vínculo apasionado o renovación total de la chispa y complicidad en tu relación.'
      }
    }
  },
  {
    roman: 'II',
    name: 'La Sacerdotisa de Akbal',
    symbol: '🌙',
    productId: 'tar-01',
    interpretations: {
      general: {
        keywords: 'Intuición • Misterio • Sabiduría Interior',
        past: 'Tu intuición y sincronicidades ya te venían advirtiendo lo que ocurría bajo la superficie.',
        present: 'Momento de guardar silencio sagrado, observar sin prisa y escuchar la voz de tu alma.',
        future: 'Una verdad o respuesta importante se revelará a tu favor cuando conectes con tu calma interior.'
      },
      trabajo: {
        keywords: 'Estrategia • Prudencia • Oportunidad Oculta',
        past: 'Trabajaste discretamente, cultivando conocimientos y planes sin necesidad de hacer alarde.',
        present: 'No reveles todas tus estrategias laborales todavía. Lee con calma la letra chica de contratos y acuerdos.',
        future: 'Reconocimiento sólido a tu conocimiento; se destraban trámites y surge una oportunidad oculta muy rentable.'
      },
      amor: {
        keywords: 'Conexión Álmica • Misterio • Sensibilidad',
        past: 'Callaste emociones o guardaste sentimientos profundos esperando el momento oportuno para abrirte.',
        present: 'Sintonía psíquica sutil. Haz caso a tu corazonada sobre las verdaderas intenciones de la otra persona.',
        future: 'Comprensión mutua a nivel espiritual profundo; se disuelve un misterio y se consolida la confianza íntima.'
      }
    }
  },
  {
    roman: 'III',
    name: 'La Emperatriz',
    symbol: '👑',
    productId: 'pla-02',
    interpretations: {
      general: {
        keywords: 'Abundancia • Creatividad • Merecimiento',
        past: 'Sembraste con paciencia y dedicación, nutriendo tus sueños con amor propio y constancia.',
        present: 'Etapa de magnetismo, fertilidad de ideas y merecimiento. Permítete recibir lo bueno.',
        future: 'Florecimiento integral; todo lo que cuides con afecto crecerá con fuerza y belleza.'
      },
      trabajo: {
        keywords: 'Prosperidad • Expansión • Negocios Fértiles',
        past: 'Invertiste tiempo, esfuerzo y creatividad en proyectos que hoy comienzan a dar frutos tangibles.',
        present: 'Excelente ciclo financiero y productivo. Tus ideas generan valor real, clientes e ingresos crecientes.',
        future: 'Expansión económica notable, consolidación de tu emprendimiento o ascenso con gran reconocimiento.'
      },
      amor: {
        keywords: 'Amor Pleno • Calidez • Belleza y Armonía',
        past: 'Entregaste cariño sincero y cuidado en tus relaciones, construyendo bases afectivas nobles.',
        present: 'Tu energía irradia un encanto cálido y magnético que atrae afecto genuino y atención sincera.',
        future: 'Amor pleno, armonía doméstica, fertilidad de proyectos compartidos y gran dicha en pareja.'
      }
    }
  },
  {
    roman: 'VI',
    name: 'Los Enamorados',
    symbol: '💛',
    productId: 'vel-02',
    interpretations: {
      general: {
        keywords: 'Elección Crucial • Armonía • Coherencia',
        past: 'Una decisión importante o encrucijada marcó el rumbo en el que te encuentras hoy.',
        present: 'El oráculo te pide elegir desde la coherencia con tus valores del alma, no desde el temor.',
        future: 'Alineación total con tu verdadero camino y serenidad con las decisiones tomadas.'
      },
      trabajo: {
        keywords: 'Encrucijada Laboral • Alianzas • Decisiones Clave',
        past: 'Tuviste que elegir entre dos opciones, contratos o caminos profesionales que definieron tu situación actual.',
        present: 'Encrucijada profesional clave: dos propuestas o alternativas frente a ti. Elige la que tenga proyección y ética.',
        future: 'Sociedad comercial próspera, alianzas de mutua confianza y éxito tras elegir con determinación.'
      },
      amor: {
        keywords: 'Amor de Pareja • Elección del Corazón • Afinidad',
        past: 'Un encuentro significativo o decisión amorosa previa dejó una huella profunda en tus sentimientos.',
        present: 'Momento de sinceridad afectiva: decidir comprometerte de verdad, sanar o abrirte sin máscaras al amor.',
        future: 'Unión correspondida, complicidad sincera y reconciliación profunda entre dos almas afines.'
      }
    }
  },
  {
    roman: 'IX',
    name: 'El Ermitaño',
    symbol: '🏮',
    productId: 'amb-01',
    interpretations: {
      general: {
        keywords: 'Introspección • Protección • Sabiduría',
        past: 'Necesitaste tomar distancia del ruido externo para escuchar tu verdad y reencontrar tu centro.',
        present: 'Protege tu energía y tu tiempo. La calma y el discernimiento te darán la respuesta precisa.',
        future: 'Sabiduría madura, paz interior inalterable y claridad absoluta para dar el próximo paso.'
      },
      trabajo: {
        keywords: 'Especialización • Prudencia Financiera • Análisis',
        past: 'Un periodo de estudio, análisis o trabajo riguroso en solitario te dotó de maestría profesional.',
        present: 'No tomes decisiones de dinero apresuradas. Evalúa números, gastos y riesgos con prudencia.',
        future: 'Alcanzas un estatus de autoridad y respeto en tu rubro; tus finanzas se ordenan con bases firmes.'
      },
      amor: {
        keywords: 'Autoconocimiento • Sanar el Pasado • Amor Propio',
        past: 'Viviste un tiempo de soledad o distancia afectiva necesario para valorarte y sanar heridas viejas.',
        present: 'Comprende bien lo que necesitas antes de comprometerte por temor a la soledad. Primero tu paz.',
        future: 'Atracción de alguien maduro emocionalmente que respeta tus tiempos y valora tu mundo interno.'
      }
    }
  },
  {
    roman: 'X',
    name: 'La Rueda de la Fortuna',
    symbol: '☸️',
    productId: 'pla-01',
    interpretations: {
      general: {
        keywords: 'Destino • Giro Favorable • Nuevo Ciclo',
        past: 'Atravesaste altibajos y cambios inesperados que te enseñaron a fluir sin aferrarte.',
        present: 'La energía cósmica acelera su paso. Prepárate para cambios positivos y golpes de suerte sincrónicos.',
        future: 'Un giro sumamente afortunado destraba lo que parecía detenido y abre una etapa dorada.'
      },
      trabajo: {
        keywords: 'Golpe de Suerte • Oportunidades • Dinamismo Económico',
        past: 'Superaste rachas de incertidumbre o estancamiento económico que templaron tu perseverancia.',
        present: 'La rueda gira a tu favor: se reactivan llamados, ventas, pagos pendientes o propuestas sorpresivas.',
        future: 'Salto cuántico en tus finanzas; oportunidad dorada de inversión, nuevo empleo o contrato lucrativo.'
      },
      amor: {
        keywords: 'Sincronías • Encuentro Fortuito • Giro Sentimental',
        past: 'Altibajos emocionales o idas y vueltas que concluyen un ciclo kármico de aprendizaje.',
        present: 'El destino interviene: encuentros casuales, conversaciones que cambian el panorama o sorpresas gratas.',
        future: 'Un cambio muy afortunado en tu vida afectiva; renovación y un aire fresco y esperanzador.'
      }
    }
  },
  {
    roman: 'XIV',
    name: 'La Templanza',
    symbol: '🏺',
    productId: 'cri-01',
    interpretations: {
      general: {
        keywords: 'Alquimia • Equilibrio • Sanación',
        past: 'Tras momentos intensos o desgastantes, tu espíritu buscó pacificar la mente y sanar su energía.',
        present: 'Evita los extremos. La paciencia y la mesura están integrando tus emociones en perfecta armonía.',
        future: 'Serenidad duradera, acuerdos pacíficos y bienestar integral en tu cuerpo, mente y espíritu.'
      },
      trabajo: {
        keywords: 'Negociación • Flujo Constante • Estabilidad Laboral',
        past: 'Equilibraste múltiples exigencias laborales manteniendo la calma bajo presión.',
        present: 'Excelente momento para negociar, mediar en el equipo y balancear ingresos y egresos con prudencia.',
        future: 'Estabilidad laboral impecable, acuerdos de beneficio mutuo y un flujo de dinero constante y fluido.'
      },
      amor: {
        keywords: 'Paz Afectiva • Diálogo Sereno • Ternura',
        past: 'Superaste roces o tensiones aprendiendo a escuchar con empatía y bajar las defensas.',
        present: 'Paciencia, diálogo sincero y sanación mutua. La energía fluye con suavidad y comprensión.',
        future: 'Convivencia pacífica, relación equilibrada sin desgastes y profunda reciprocidad afectiva.'
      }
    }
  },
  {
    roman: 'XVII',
    name: 'La Estrella',
    symbol: '✨',
    productId: 'vel-01',
    interpretations: {
      general: {
        keywords: 'Esperanza • Renovación • Guía Celestial',
        past: 'Superaste una tormenta importante manteniendo viva tu fe, tu nobleza y tu sensibilidad.',
        present: 'Estás bajo una protección celestial manifiesta. Limpia tu aura y confía en tu camino.',
        future: 'Tus anhelos más nobles encuentran cauce; llegan bendiciones, claridad de propósito e inspiración.'
      },
      trabajo: {
        keywords: 'Éxito Brillante • Visión Creativa • Crecimiento',
        past: 'Persististe con vocación incluso cuando las recompensas económicas tardaban en manifestarse.',
        present: 'Se encienden nuevas ideas, propuestas creativas y puertas abiertas hacia el progreso laboral.',
        future: 'Éxito profesional brillante; reconocimiento público, proyectos prósperos y tranquilidad financiera.'
      },
      amor: {
        keywords: 'Ilusión Renovada • Transparencia • Amor Verdadero',
        past: 'Sanaste desilusiones pasadas y recuperaste la ilusión de creer en el amor auténtico.',
        present: 'Ilusión renovada y transparencia. Tus sentimientos son puros y atraen bendiciones al corazón.',
        future: 'Vínculo luminoso, comunicación fluida y un futuro sentimental lleno de esperanza y ternura compartida.'
      }
    }
  },
  {
    roman: 'XVIII',
    name: 'La Luna',
    symbol: '🐺',
    productId: 'amb-02',
    interpretations: {
      general: {
        keywords: 'Sueños • Inconsciente • Limpieza de Sombras',
        past: 'Ciertas dudas, ilusiones o energías densas del entorno nublaron tu claridad recientemente.',
        present: 'No temas mirar tus emociones profundas; usa obsidiana y plata para cortar confusiones y envidias.',
        future: 'La niebla se disipa por completo; la verdad sale a la luz y recuperas tu serenidad y agudeza.'
      },
      trabajo: {
        keywords: 'Atención a la Letra Chica • Claridad • Protección',
        past: 'Dudas laborales, promesas que no se cumplieron o ambientes de trabajo con energías pesadas.',
        present: 'Atención al detalle: no firmes acuerdos a ciegas ni confíes en promesas de dinero fácil. Resguarda tus ideas.',
        future: 'Se desenmascaran confusiones o engaños laborales; encuentras el camino claro y seguro para progresar.'
      },
      amor: {
        keywords: 'Superar Inseguridades • Verdad Emocional • Claridad',
        past: 'Temores o malentendidos que generaron inseguridades y celos en tu mundo emocional.',
        present: 'Distingue entre tus intuiciones reales y los miedos imaginarios. Habla claro para despejar dudas.',
        future: 'Las sombras se aclaran, se revela la verdad de los sentimientos y renace la paz en el vínculo.'
      }
    }
  },
  {
    roman: 'XIX',
    name: 'El Sol',
    symbol: '☀️',
    productId: 'vel-02',
    interpretations: {
      general: {
        keywords: 'Éxito • Claridad • Plenitud Vital',
        past: 'Tu honestidad y esfuerzo constante prepararon el terreno para este ciclo de luz.',
        present: 'Claridad absoluta, vitalidad y alegría. Todo sale a la luz de manera favorable para ti.',
        future: 'Triunfo rotundo en tu consulta, calidez y prosperidad compartida.'
      },
      trabajo: {
        keywords: 'Victoria Laboral • Rentabilidad • Alto Rendimiento',
        past: 'Dedicación constante y transparencia que demostraron tu talento y confiabilidad profesional.',
        present: 'Éxito, visibilidad y liderazgo. Es momento de brillar, presentar proyectos y cobrar lo justo.',
        future: 'Crecimiento financiero contundente, rentabilidad alta en tus negocios y victoria laboral total.'
      },
      amor: {
        keywords: 'Dicha Compartida • Pasión Noble • Compromiso',
        past: 'Aprendiste a amarte y valorarte con luz propia antes de compartir tu vida con alguien más.',
        present: 'Felicidad compartida, calidez, pasión noble y armonía total en tus relaciones afectivas.',
        future: 'Compromiso dichoso, celebración en pareja, planes de vida juntos y bienestar familiar pleno.'
      }
    }
  }
];

let tarotSpreadState = {
  shuffledDeck: [],
  selectedCards: []
};

let tarotDeckHasBeenShuffled = false;

function initTarotReadingRoom() {
  const fanContainer = document.getElementById('tarotFanContainer');
  if (!fanContainer) return;

  tarotDeckHasBeenShuffled = false;
  shuffleAndResetTarot(false);

  // Re-renderizar significados si el consultante cambia de área
  const topicSelect = document.getElementById('tarotSpreadTopic');
  if (topicSelect) {
    topicSelect.addEventListener('change', () => {
      if (tarotSpreadState.selectedCards.length > 0) {
        renderTarotSpreadSlots();
        if (tarotSpreadState.selectedCards.length === 3) {
          renderTarotSynthesis();
        }
      }
    });
  }

  const shuffleBtn = document.getElementById('shuffleDeckBtn');

  // El efecto de barajado solo se ejecuta UNA VEZ por tirada
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      if (tarotDeckHasBeenShuffled || isDeckShuffling) return;
      shuffleAndResetTarot(true);
    });
  }

  document.getElementById('revealAllSpreadBtn').addEventListener('click', () => {
    if (isDeckShuffling) return;
    tarotDeckHasBeenShuffled = true;
    updateShuffleBtnState();

    while (tarotSpreadState.selectedCards.length < 3) {
      const remaining = tarotSpreadState.shuffledDeck.filter(
        (c) => !tarotSpreadState.selectedCards.some((sel) => sel.roman === c.roman)
      );
      const nextCard = remaining[Math.floor(Math.random() * remaining.length)];
      tarotSpreadState.selectedCards.push(nextCard);
    }
    renderTarotFan(false);
    renderTarotSpreadSlots();
    renderTarotSynthesis();
  });

  document.getElementById('resetReadingBtn').addEventListener('click', () => {
    tarotDeckHasBeenShuffled = false;
    updateShuffleBtnState();
    shuffleAndResetTarot(false);
    showToast('✨ Altar reiniciado. Puedes barajar el mazo para tu nueva tirada.');
  });

  const sendReadingBtn = document.getElementById('sendReadingToVeronicaBtn');
  if (sendReadingBtn) {
    sendReadingBtn.addEventListener('click', () => {
      sendTarotReadingWhatsApp();
    });
  }



  document.getElementById('openLiveVideoBtn').addEventListener('click', () => {
    openPaymentModal();
  });

  document.getElementById('closeVideoRoomBtn').addEventListener('click', () => {
    closeEmbeddedVideoCall();
  });


  // Eventos del Modal de Cobro Directo por Transferencia
  const paymentModal = document.getElementById('videoCallPaymentModal');
  if (paymentModal) {
    document.getElementById('closePaymentModalBtn')?.addEventListener('click', closePaymentModal);
    document.getElementById('dismissPaymentModalBtn')?.addEventListener('click', closePaymentModal);
    paymentModal.addEventListener('click', (e) => {
      if (e.target === paymentModal) closePaymentModal();
    });
    document.getElementById('copyBankDataBtn')?.addEventListener('click', copyBankTransferData);
    document.getElementById('confirmPaymentAndOpenVideoWhatsappBtn')?.addEventListener('click', notifyPaymentAndJoinWhatsApp);
    document.getElementById('confirmPaymentAndOpenVideoDirectBtn')?.addEventListener('click', confirmDirectPaymentAndJoin);
  }

    document.getElementById('shareVideoLinkWhatsappBtn').addEventListener('click', () => {
    notifyVeronicaVideoRoomWhatsApp();
  });

  // Botones para agendar sesiones en vivo con Verónica
  document.querySelectorAll('[data-book-session]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sessionName = btn.getAttribute('data-book-session');
      const querent = document.getElementById('tarotQuerentName').value.trim() || 'Consultante de La Brujita Akbal';
      const topic = document.getElementById('tarotSpreadTopic').value;
      const question = document.getElementById('tarotQuerentQuestion').value.trim();
      const rawPhone = document.getElementById('whatsappPhoneConfig').value.replace(/\D/g, '') || '56956823670';

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

// --- SÍNTESIS DE SONIDO DE BARAJADO DE CARTAS (Web Audio API nativo) ---
function playShuffleSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const bursts = 16;
    for (let i = 0; i < bursts; i++) {
      const startTime = ctx.currentTime + 0.12 + i * 0.052 + (Math.random() * 0.015);
      const bufferSize = Math.floor(ctx.sampleRate * 0.038);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        data[j] = (Math.random() * 2 - 1) * Math.exp(-j / (bufferSize * 0.35));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1100 + Math.random() * 500;
      filter.Q.value = 2.2;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.06, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.038);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(startTime);
    }
  } catch (e) {
    // Si el navegador bloquea audio, continúa silencioso
  }
}

// --- ANIMACIÓN FÍSICA Y MÍSTICA DE BARAJADO ---
let isDeckShuffling = false;

function triggerCardShuffleAnimation(callback) {
  const fanContainer = document.getElementById('tarotFanContainer');
  const shuffleBtn = document.getElementById('shuffleDeckBtn');
  if (!fanContainer) {
    if (callback) callback();
    return;
  }

  const cards = fanContainer.querySelectorAll('.fan-card');
  if (!cards.length) {
    if (callback) callback();
    return;
  }

  isDeckShuffling = true;

  if (shuffleBtn) {
    shuffleBtn.disabled = true;
    shuffleBtn.classList.add('btn--shuffling');
    shuffleBtn.innerHTML = '<span>⏳ Mezclando los Arcanos...</span>';
  }

  playShuffleSound();

  // Calcular centro exacto de la mesa ritual
  const containerRect = fanContainer.getBoundingClientRect();
  const centerX = containerRect.left + containerRect.width / 2;
  const centerY = containerRect.top + containerRect.height / 2;

  // Asignar vectores de vuelo a cada carta para formar el mazo y cruzarse
  cards.forEach((card, i) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    const dx = centerX - cardCenterX;
    const dy = centerY - cardCenterY;
    const side = (i % 2 === 0) ? -1 : 1;
    const rot = (i - 3) * 3;

    card.style.setProperty('--dx', `${dx}px`);
    card.style.setProperty('--dy', `${dy}px`);
    card.style.setProperty('--side', side);
    card.style.setProperty('--rot', `${rot}deg`);
    card.style.zIndex = 10 + i;

    card.classList.remove('picked');
    card.classList.add('shuffling-card');
  });

  fanContainer.classList.add('shuffling');

  // Limpiar mesa de interpretación durante el barajado
  document.getElementById('tarotReadingSynthesis').hidden = true;
  tarotSpreadState.selectedCards = [];
  renderTarotSpreadSlots();

  const statusPill = document.getElementById('tarotStepStatus');
  if (statusPill) {
    statusPill.textContent = '🔀 Verónica y Zyra están barajando los Arcanos sagrados...';
  }

  setTimeout(() => {
    fanContainer.classList.remove('shuffling');
    cards.forEach((card) => {
      card.classList.remove('shuffling-card');
      card.style.removeProperty('--dx');
      card.style.removeProperty('--dy');
      card.style.removeProperty('--side');
      card.style.removeProperty('--rot');
      card.style.removeProperty('z-index');
    });

    tarotDeckHasBeenShuffled = true;
    isDeckShuffling = false;
    updateShuffleBtnState();

    if (callback) callback();
  }, 1300);
}

function updateShuffleBtnState() {
  const shuffleBtn = document.getElementById('shuffleDeckBtn');
  if (!shuffleBtn) return;

  if (tarotDeckHasBeenShuffled) {
    shuffleBtn.disabled = true;
    shuffleBtn.classList.remove('btn--shuffling');
    shuffleBtn.classList.add('is-shuffled-done');
    shuffleBtn.innerHTML = '<span>✓ Mazo Barajado en el Altar</span>';
    shuffleBtn.title = 'El mazo ya fue consagrado y barajado para esta lectura';
  } else {
    shuffleBtn.disabled = false;
    shuffleBtn.classList.remove('btn--shuffling', 'is-shuffled-done');
    shuffleBtn.innerHTML = '<span>🔀 Barajar el Mazo Consagrado</span>';
    shuffleBtn.title = 'Barajar los 22 Arcanos Mayores en el altar consagrado';
  }
}

function shuffleAndResetTarot(animate = false) {
  if (animate) {
    if (isDeckShuffling) return;
    triggerCardShuffleAnimation(() => {
      const copy = [...MAJOR_ARCANA_DECK];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      tarotSpreadState.shuffledDeck = copy.slice(0, 7);
      tarotSpreadState.selectedCards = [];

      renderTarotFan(true);
      renderTarotSpreadSlots();
      showToast('🔀 ¡Cartas mezcladas en el altar! Elige 3 arcanos');
    });
  } else {
    const copy = [...MAJOR_ARCANA_DECK];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    tarotSpreadState.shuffledDeck = copy.slice(0, 7);
    tarotSpreadState.selectedCards = [];

    renderTarotFan(false);
    renderTarotSpreadSlots();
    document.getElementById('tarotReadingSynthesis').hidden = true;
  }
}

function renderTarotFan(justShuffled = false) {
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
      const shuffledClass = justShuffled ? 'just-shuffled' : '';
      const delayStyle = justShuffled ? `style="--settle-delay: ${index * 0.05}s;"` : '';
      return `
        <button
          class="fan-card ${isPicked ? 'picked' : ''} ${shuffledClass}"
          data-fan-index="${index}"
          ${delayStyle}
          aria-label="Carta misteriosa ${index + 1}"
          ${isPicked || count >= 3 || isDeckShuffling ? 'disabled' : ''}
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
      if (isDeckShuffling) return;
      if (tarotSpreadState.selectedCards.length >= 3) return;
      const idx = parseInt(btn.getAttribute('data-fan-index'), 10);
      const chosen = tarotSpreadState.shuffledDeck[idx];
      if (!chosen) return;

      tarotSpreadState.selectedCards.push(chosen);
      tarotDeckHasBeenShuffled = true;
      updateShuffleBtnState();
      renderTarotFan(false);
      renderTarotSpreadSlots();
      if (tarotSpreadState.selectedCards.length === 3) {
        renderTarotSynthesis();
      }
    });
  });
}

function getActiveTarotTopicCategory() {
  const topicEl = document.getElementById('tarotSpreadTopic');
  const val = (topicEl ? topicEl.value : '').toLowerCase();
  if (val.includes('trabajo') || val.includes('abundancia') || val.includes('proyecto')) {
    return 'trabajo';
  }
  if (val.includes('amor') || val.includes('vínculo') || val.includes('pareja')) {
    return 'amor';
  }
  return 'general';
}

function getCardInterpretation(card, category) {
  if (!card) return null;
  if (card.interpretations) {
    return card.interpretations[category] || card.interpretations.general;
  }
  return {
    keywords: card.keywords || '',
    past: card.past || '',
    present: card.present || '',
    future: card.future || ''
  };
}

function renderTarotSpreadSlots() {
  const placeholders = [
    'Elige tu 1ª carta arriba (Pasado / Raíz)',
    'Elige tu 2ª carta arriba (Presente)',
    'Elige tu 3ª carta arriba (Futuro / Consejo)'
  ];

  const category = getActiveTarotTopicCategory();

  for (let i = 0; i < 3; i++) {
    const slotEl = document.getElementById(`spreadSlot${i}`);
    const card = tarotSpreadState.selectedCards[i];

    if (!card) {
      slotEl.className = 'spread-slot__card';
      slotEl.innerHTML = `<span class="slot-placeholder">${placeholders[i]}</span>`;
    } else {
      const interp = getCardInterpretation(card, category);
      const positionMeaning = i === 0 ? interp.past : i === 1 ? interp.present : interp.future;
      const keywords = interp.keywords || card.keywords || '';

      slotEl.className = 'spread-slot__card revealed';
      slotEl.innerHTML = `
        <span class="revealed-arcana__symbol">${card.symbol}</span>
        <span class="revealed-arcana__roman">ARCANO ${card.roman}</span>
        <strong class="revealed-arcana__name">${card.name}</strong>
        <span class="revealed-arcana__keywords">${keywords}</span>
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
  const category = getActiveTarotTopicCategory();
  const recommendedProduct = PRODUCTS.find((p) => p.id === c3.productId) || PRODUCTS[0];

  let thematicNarrative = '';
  if (category === 'trabajo') {
    thematicNarrative = `Tus arcanos revelan que en tus proyectos y finanzas vienes de <strong>${c1.name} (${c1.roman})</strong> como punto de partida. Hoy tu presente laboral y económico te exige enfocar tu energía con <strong>${c2.name} (${c2.roman})</strong>, mientras que <strong>${c3.name} (${c3.roman})</strong> decreta el consejo y desenlace para tu prosperidad y crecimiento material.`;
  } else if (category === 'amor') {
    thematicNarrative = `En tus relaciones y mundo emocional, tu camino viene marcado por <strong>${c1.name} (${c1.roman})</strong> como origen. Hoy tu corazón y tus vínculos se enfrentan al aprendizaje de <strong>${c2.name} (${c2.roman})</strong>, mientras que <strong>${c3.name} (${c3.roman})</strong> ilumina tu porvenir sentimental y consejo para el amor correspondido.`;
  } else {
    thematicNarrative = `Tu camino de vida viene marcado por la energía de <strong>${c1.name} (${c1.roman})</strong> en el pasado, invitándote a honrar lo aprendido. Hoy, en tu presente, <strong>${c2.name} (${c2.roman})</strong> te señala el punto exacto donde debes enfocar tu fuerza espiritual, mientras que <strong>${c3.name} (${c3.roman})</strong> ilumina tu desenlace y consejo evolutivo.`;
  }

  synthesisBody.innerHTML = `
    <p style="margin-bottom: 0.75rem;">
      ✨ <strong>Mensaje de Verónica (+ Zyra 🐾) para ${querent}</strong> sobre <em>${topic}</em>:
      ${question ? `<br><span style="color: var(--gold-light);">Tu consulta: "${question}"</span>` : ''}
    </p>
    <p style="margin-bottom: 0.75rem;">
      ${thematicNarrative}
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

let activeVideoRoomUrl = '';



function openEmbeddedVideoCall() {
  const panel = document.getElementById('videoCallPanel');
  const frameWrap = document.getElementById('videoCallFrameWrap');
  const externalBtn = document.getElementById('openExternalVideoRoomBtn');
  const rawQuerent = document.getElementById('tarotQuerentName').value.trim() || 'Consultante';
  const querent = rawQuerent.replace(/[^a-zA-Z0-9]/g, '') || 'Altar';
  const roomCode = `LaBrujitaAkbalTarot${querent}`;
  
  // Conexión directa automática: sin prejoin, sin lobby, sin pedir nombre, entra de inmediato
  activeVideoRoomUrl = `https://fairmeeting.net/${roomCode}`;
  const clientFlags = `#config.prejoinConfig.enabled=false&config.prejoinPageEnabled=false&config.welcomePage.disabled=true&config.deeplinking.disabled=true&config.disableDeepLinking=true&config.defaultLanguage="es"&interfaceConfig.DEFAULT_LANG="es"&userInfo.displayName="${encodeURIComponent(rawQuerent)}"&config.startWithAudioMuted=false&config.startWithVideoMuted=false`;
  const iframeSrc = `${activeVideoRoomUrl}${clientFlags}`;

  if (externalBtn) {
    externalBtn.href = `sala.html?sala=${roomCode}&rol=consultante`;
  }

  frameWrap.innerHTML = `
    <iframe
      src="${iframeSrc}"
      allow="camera; microphone; fullscreen; display-capture; autoplay"
      title="Sala de Videollamada de Tarot con Verónica - La Brujita Akbal"
    ></iframe>
  `;

  panel.hidden = false;
  panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  showToast('📹 Sala de Videollamada abierta en la página');
}

function closeEmbeddedVideoCall() {
  const panel = document.getElementById('videoCallPanel');
  const frameWrap = document.getElementById('videoCallFrameWrap');
  frameWrap.innerHTML = '';
  panel.hidden = true;
}

function notifyVeronicaVideoRoomWhatsApp() {
  const [c1, c2, c3] = tarotSpreadState.selectedCards;
  const querent = document.getElementById('tarotQuerentName').value.trim() || 'Consultante de La Brujita Akbal';
  const topic = document.getElementById('tarotSpreadTopic').value;
  const rawPhone = document.getElementById('whatsappPhoneConfig').value.replace(/\D/g, '') || '56956823670';
  const safeName = querent.replace(/[^a-zA-Z0-9]/g, '') || 'Altar';
  const roomCode = `LaBrujitaAkbalTarot${safeName}`;
  const portalUrl = `https://breborn.github.io/la-brujita-akbal/sala.html?sala=${roomCode}&rol=veronica`;

  let msg = `📹✨ ¡Hola Verónica! Soy *${querent}* y estoy esperándote en la *Sala de Videollamada de La Brujita Akbal* para continuar con mi lectura detallada.\n\n`;
  msg += `🔮 *Tema:* ${topic}\n`;
  if (c1 && c2 && c3) {
    msg += `🃏 *Mis 3 cartas reveladas:* ${c1.name} • ${c2.name} • ${c3.name}\n`;
  }
  msg += `\n👉 *PINCHA AQUÍ PARA ENTRAR A LA SALA:*\n${portalUrl}\n\n`;
  msg += `📲 *O si prefieres:* ¡Iníciame la videollamada por WhatsApp directamente aquí! ✨🌙`;

  window.open(`https://wa.me/${rawPhone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

function sendTarotReadingWhatsApp() {
  const [c1, c2, c3] = tarotSpreadState.selectedCards;
  if (!c1 || !c2 || !c3) return;

  const querent = document.getElementById('tarotQuerentName').value.trim() || 'Consultante de La Brujita Akbal';
  const topic = document.getElementById('tarotSpreadTopic').value;
  const question = document.getElementById('tarotQuerentQuestion').value.trim();
  const rawPhone = document.getElementById('whatsappPhoneConfig').value.replace(/\D/g, '') || '56956823670';

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

// GESTIÓN DE COBRO DIRECTO POR TRANSFERENCIA PARA VIDEOLLAMADA
function openPaymentModal(c1, c2, c3) {
  const modal = document.getElementById('videoCallPaymentModal');
  if (!modal) return;
  
  if (!c1 && tarotSpreadState.selectedCards.length === 3) {
    [c1, c2, c3] = tarotSpreadState.selectedCards;
  }
  
  const summaryEl = document.getElementById('paymentModalCardsSummary');
  if (summaryEl && c1 && c2 && c3) {
    summaryEl.textContent = `🃏 Tus 3 Arcanos revelados: I. ${c1.name} • II. ${c2.name} • III. ${c3.name}`;
  }
  
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
}

function closePaymentModal() {
  const modal = document.getElementById('videoCallPaymentModal');
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
}

function copyBankTransferData() {
  const bankText = `DATOS DE TRANSFERENCIA — LA BRUJITA AKBAL
• Titular: Verónica Akbal
• RUT: 16.892.451-K
• Banco: BancoEstado
• Tipo: Cuenta RUT / Vista
• N° Cuenta: 16892451
• Email: pagos@labrujitaakbal.cl
• Monto: $25.000 CLP (Sesión Tarot Terapéutico en Vivo 45 min)`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(bankText).then(() => {
      showToast('📋 ¡Datos bancarios copiados al portapapeles!');
    }).catch(() => {
      fallbackCopyText(bankText);
    });
  } else {
    fallbackCopyText(bankText);
  }
}

function fallbackCopyText(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast('📋 ¡Datos bancarios copiados al portapapeles!');
}

function notifyPaymentAndJoinWhatsApp() {
  const [c1, c2, c3] = tarotSpreadState.selectedCards;
  const querent = document.getElementById('tarotQuerentName').value.trim() || 'Consultante de La Brujita Akbal';
  const topic = document.getElementById('tarotSpreadTopic').value;
  const rawPhone = document.getElementById('whatsappPhoneConfig').value.replace(/\D/g, '') || '56956823670';
  const safeName = querent.replace(/[^a-zA-Z0-9]/g, '') || 'Altar';
  const roomCode = `LaBrujitaAkbalTarot${safeName}`;
  const portalRoomUrl = `https://breborn.github.io/la-brujita-akbal/sala.html?sala=${roomCode}&rol=veronica`;

  let msg = `✨🔮 ¡Hola Verónica! Soy *${querent}* y acabo de transferir los *$25.000* para mi *Sesión de Tarot en Vivo (45 min)* en La Brujita Akbal.\n\n`;
  msg += `📸 *Te adjunto mi comprobante de transferencia por aquí.*\n`;
  msg += `✴ *Tema de consulta:* ${topic}\n`;
  if (c1 && c2 && c3) {
    msg += `🃏 *Mis 3 cartas en la mesa ritual:* ${c1.name} • ${c2.name} • ${c3.name}\n`;
  }
  msg += `\n👉 *PINCHA AQUÍ PARA ENTRAR A LA SALA:*\n${portalRoomUrl}\n\n`;
  msg += `📲 *O si estás en tu celular y prefieres:* ¡Iníciame la videollamada por WhatsApp directamente aquí! ✨🌙`;

  // 1. Abrir WhatsApp inmediatamente en el evento de click (evita bloqueo de popups)
  window.open(`https://wa.me/${rawPhone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');

  // 2. Abrir sala de videollamada en la web
  closePaymentModal();
  openEmbeddedVideoCall();
}

function confirmDirectPaymentAndJoin() {
  closePaymentModal();
  openEmbeddedVideoCall();
  showToast('📹 Conectando a la Sala... Verónica confirmará tu comprobante contigo en la llamada.');
}
