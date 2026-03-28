/* ============================================
   BAGICHA — Plants Data & Rendering (js/plants.js)
   ============================================ */

const plantsData = [
  { id: 1, name: 'Snake Plant', botanical: 'Sansevieria trifasciata', emoji: '🌿', description: 'One of the hardiest houseplants, the Snake Plant tolerates low light and irregular watering. It purifies indoor air by filtering toxins like formaldehyde and benzene, making it a perfect bedroom companion.', care: { light: 'Low to Bright', water: 'Every 2-3 Weeks', difficulty: 'Easy', temperature: '15-30°C' }, category: 'Indoor', tags: ['Air Purifier', 'Low Light'], popular: true },
  { id: 2, name: 'Monstera Deliciosa', botanical: 'Monstera deliciosa', emoji: '🌱', description: 'Known for its iconic split leaves, the Monstera is a tropical statement plant. It thrives in bright, indirect light and loves humidity. A fast grower that can become the centerpiece of any room.', care: { light: 'Bright Indirect', water: 'Weekly', difficulty: 'Moderate', temperature: '18-30°C' }, category: 'Indoor', tags: ['Tropical', 'Statement'], popular: true },
  { id: 3, name: 'Lavender', botanical: 'Lavandula angustifolia', emoji: '💜', description: 'Lavender is prized for its fragrant purple flowers and calming aroma. It attracts pollinators and repels pests. Ideal for sunny borders, herb gardens, and dried flower arrangements.', care: { light: 'Full Sun', water: 'Every 1-2 Weeks', difficulty: 'Easy', temperature: '10-25°C' }, category: 'Outdoor', tags: ['Fragrant', 'Pollinator'], popular: true },
  { id: 4, name: 'Basil', botanical: 'Ocimum basilicum', emoji: '🌿', description: 'A kitchen essential, Basil is easy to grow and adds fresh flavor to countless dishes. It prefers warm weather and full sun. Pinch flowers to encourage bushy, leafy growth all season.', care: { light: 'Full Sun', water: 'Every 2-3 Days', difficulty: 'Easy', temperature: '20-30°C' }, category: 'Herbs', tags: ['Edible', 'Kitchen'], popular: true },
  { id: 5, name: 'Pothos', botanical: 'Epipremnum aureum', emoji: '🍃', description: 'Pothos is a trailing vine that thrives on neglect. Its heart-shaped leaves come in various patterns. Perfect for shelves, hanging baskets, or even growing in water. Nearly impossible to kill.', care: { light: 'Low to Bright', water: 'Every 1-2 Weeks', difficulty: 'Easy', temperature: '15-30°C' }, category: 'Indoor', tags: ['Trailing', 'Beginner'], popular: false },
  { id: 6, name: 'Rose', botanical: 'Rosa spp.', emoji: '🌹', description: 'The classic garden flower, roses come in endless colors and varieties. With proper care — regular pruning, feeding, and pest management — they reward you with stunning, fragrant blooms.', care: { light: 'Full Sun', water: 'Every 2-3 Days', difficulty: 'Moderate', temperature: '15-28°C' }, category: 'Outdoor', tags: ['Flowering', 'Fragrant'], popular: false },
  { id: 7, name: 'Aloe Vera', botanical: 'Aloe barbadensis miller', emoji: '🌵', description: 'A succulent with medicinal properties, Aloe Vera is famous for its soothing gel. It thrives in bright light with infrequent watering. Great for sunny windowsills and minor burn relief.', care: { light: 'Bright Direct', water: 'Every 2-3 Weeks', difficulty: 'Easy', temperature: '13-27°C' }, category: 'Succulents', tags: ['Medicinal', 'Succulent'], popular: false },
  { id: 8, name: 'Fern', botanical: 'Nephrolepis exaltata', emoji: '🌿', description: 'Boston Ferns bring lush, feathery fronds to any space. They love humidity and indirect light, making them perfect for bathrooms. Regular misting keeps them happy and vibrant.', care: { light: 'Indirect', water: 'Keep Moist', difficulty: 'Moderate', temperature: '15-24°C' }, category: 'Indoor', tags: ['Humidity', 'Lush'], popular: false },
  { id: 9, name: 'Sunflower', botanical: 'Helianthus annuus', emoji: '🌻', description: 'Sunflowers turn heads with their towering stems and cheerful, sun-tracking blooms. Easy to grow from seed, they attract birds and bees. Plant them in spring for a stunning summer display.', care: { light: 'Full Sun', water: 'Weekly', difficulty: 'Easy', temperature: '18-33°C' }, category: 'Outdoor', tags: ['Flowering', 'Tall'], popular: false },
  { id: 10, name: 'Mint', botanical: 'Mentha spicata', emoji: '🍃', description: 'Mint is a vigorous herb that spreads quickly. Its refreshing leaves are used in drinks, salads, and desserts. Best grown in containers to prevent it from taking over your entire garden.', care: { light: 'Partial Sun', water: 'Every 2-3 Days', difficulty: 'Easy', temperature: '15-25°C' }, category: 'Herbs', tags: ['Edible', 'Aromatic'], popular: false },
  { id: 11, name: 'Jade Plant', botanical: 'Crassula ovata', emoji: '🪴', description: 'A popular succulent symbolizing good luck, the Jade Plant develops thick, woody stems over time. It stores water in its plump leaves and thrives with minimal attention in bright spots.', care: { light: 'Bright Indirect', water: 'Every 2-3 Weeks', difficulty: 'Easy', temperature: '12-24°C' }, category: 'Succulents', tags: ['Succulent', 'Lucky'], popular: false },
  { id: 12, name: 'Tomato', botanical: 'Solanum lycopersicum', emoji: '🍅', description: 'There\'s nothing like a homegrown tomato. From cherry to beefsteak, tomatoes love sun and consistent watering. Stake or cage them for support as they grow heavy with juicy fruit.', care: { light: 'Full Sun', water: 'Daily in Summer', difficulty: 'Moderate', temperature: '20-30°C' }, category: 'Outdoor', tags: ['Edible', 'Vegetable'], popular: false },
  { id: 13, name: 'Peace Lily', botanical: 'Spathiphyllum wallisii', emoji: '🤍', description: 'The Peace Lily is an elegant indoor plant with glossy dark green leaves and striking white spathes. It thrives in low light and helps purify the air. Known for being forgiving and easy to care for.', care: { light: 'Low to Indirect', water: 'Weekly', difficulty: 'Easy', temperature: '18-30°C' }, category: 'Indoor', tags: ['Air Purifier', 'Flowering'], popular: true },
  { id: 14, name: 'Bamboo Palm', botanical: 'Chamaedorea seifrizii', emoji: '🎋', description: 'The Bamboo Palm brings a tropical vibe to any indoor space. Its feathery fronds are excellent at filtering air pollutants. It prefers indirect light and regular watering.', care: { light: 'Indirect', water: 'Twice a Week', difficulty: 'Moderate', temperature: '18-28°C' }, category: 'Indoor', tags: ['Tropical', 'Air Purifier'], popular: false },
  { id: 15, name: 'Rosemary', botanical: 'Salvia rosmarinus', emoji: '🌿', description: 'Rosemary is a fragrant, woody herb used in cooking and aromatherapy. It loves full sun and well-drained soil. Its needle-like leaves add flavor to roasted meats, breads, and Mediterranean dishes.', care: { light: 'Full Sun', water: 'Every 1-2 Weeks', difficulty: 'Easy', temperature: '10-30°C' }, category: 'Herbs', tags: ['Edible', 'Fragrant'], popular: false },
  { id: 16, name: 'Cactus', botanical: 'Cactaceae family', emoji: '🌵', description: 'Cacti are the ultimate low-maintenance plants. They store water in their thick stems and come in hundreds of fascinating shapes. Perfect for bright windowsills.', care: { light: 'Bright Direct', water: 'Every 3-4 Weeks', difficulty: 'Easy', temperature: '15-35°C' }, category: 'Succulents', tags: ['Drought-Tolerant', 'Decorative'], popular: false },
  { id: 17, name: 'Hibiscus', botanical: 'Hibiscus rosa-sinensis', emoji: '🌺', description: 'Hibiscus produces large, showy flowers in vibrant reds, pinks, and oranges. It thrives in tropical climates with plenty of sun. The flowers can be used to make tea.', care: { light: 'Full Sun', water: 'Daily in Summer', difficulty: 'Moderate', temperature: '20-35°C' }, category: 'Outdoor', tags: ['Flowering', 'Tropical'], popular: true },
  { id: 18, name: 'Tulsi (Holy Basil)', botanical: 'Ocimum tenuiflorum', emoji: '🙏', description: 'Tulsi is a sacred plant in Indian culture, known for its medicinal and spiritual significance. It has a peppery, clove-like flavor and is used in teas and Ayurvedic remedies.', care: { light: 'Full Sun', water: 'Every 2-3 Days', difficulty: 'Easy', temperature: '20-35°C' }, category: 'Herbs', tags: ['Medicinal', 'Sacred'], popular: true },
  { id: 19, name: 'Money Plant', botanical: 'Epipremnum aureum', emoji: '💰', description: 'The Money Plant is believed to bring prosperity and good luck. It\'s an incredibly easy-to-grow vine that thrives in water or soil with minimal effort.', care: { light: 'Low to Bright', water: 'Every 1-2 Weeks', difficulty: 'Easy', temperature: '15-30°C' }, category: 'Indoor', tags: ['Lucky', 'Trailing'], popular: false },
  { id: 20, name: 'Marigold', botanical: 'Tagetes erecta', emoji: '🏵️', description: 'Marigolds are cheerful, easy-to-grow flowers in vibrant yellows and oranges. They are natural pest repellents and widely used in festivals and companion planting.', care: { light: 'Full Sun', water: 'Every 2-3 Days', difficulty: 'Easy', temperature: '18-35°C' }, category: 'Outdoor', tags: ['Flowering', 'Pest Repellent'], popular: true }
];

/* ---------- Garden LocalStorage Helpers ---------- */
function getGardenIds() { try { return JSON.parse(localStorage.getItem('bagicha_garden')) || []; } catch { return []; } }
function saveGardenIds(ids) { localStorage.setItem('bagicha_garden', JSON.stringify(ids)); }
function isInGarden(plantId) { return getGardenIds().includes(plantId); }

function toggleGarden(plantId) {
  let ids = getGardenIds();
  if (ids.includes(plantId)) { ids = ids.filter(id => id !== plantId); showToast('Removed from My Garden 🗑️'); }
  else { ids.push(plantId); showToast('Added to My Garden! 🌱'); }
  saveGardenIds(ids);
  return ids.includes(plantId);
}

/* ---------- Render Plant Cards ---------- */
function renderPlantCards(plants, container, options = {}) {
  const { showRemove = false } = options;
  container.innerHTML = '';
  plants.forEach(plant => {
    const inGarden = isInGarden(plant.id);
    const card = document.createElement('div');
    card.className = 'plant-card';
    card.setAttribute('data-plant-id', plant.id);
    card.innerHTML = `
      <div class="plant-card__image-wrapper">
        <div class="plant-card__image">${plant.emoji}</div>
        <span class="plant-card__badge">${plant.category}</span>
      </div>
      <div class="plant-card__body">
        <h3 class="plant-card__name">${plant.name}</h3>
        <p class="plant-card__botanical">${plant.botanical}</p>
        <p class="plant-card__desc">${plant.description}</p>
        <div class="plant-card__footer">
          <div class="plant-card__tags">${plant.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          ${showRemove
            ? `<button class="garden-plant-card__remove" data-remove-id="${plant.id}" title="Remove">✕</button>`
            : `<button class="plant-card__add-btn ${inGarden ? 'added' : ''}" data-add-id="${plant.id}" title="${inGarden ? 'Remove from' : 'Add to'} My Garden">${inGarden ? '✓' : '+'}</button>`}
        </div>
      </div>`;
    card.addEventListener('click', (e) => {
      if (e.target.closest('.plant-card__add-btn') || e.target.closest('.garden-plant-card__remove')) return;
      openPlantModal(plant);
    });
    container.appendChild(card);
  });

  container.querySelectorAll('[data-add-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = Number(btn.dataset.addId);
      const added = toggleGarden(id);
      btn.classList.toggle('added', added);
      btn.textContent = added ? '✓' : '+';
      btn.title = added ? 'Remove from My Garden' : 'Add to My Garden';
    });
  });

  container.querySelectorAll('[data-remove-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleGarden(Number(btn.dataset.removeId));
      if (typeof renderGardenPage === 'function') renderGardenPage();
    });
  });
}

/* ---------- Plant Detail Modal ---------- */
function openPlantModal(plant) {
  const overlay = document.getElementById('plantModal');
  if (!overlay) return;
  document.getElementById('modalImage').textContent = plant.emoji;
  document.getElementById('modalTitle').textContent = plant.name;
  document.getElementById('modalBotanical').textContent = plant.botanical;
  document.getElementById('modalDesc').textContent = plant.description;
  document.getElementById('modalDetails').innerHTML = `
    <div class="modal__detail-item"><div class="modal__detail-label">☀️ Light</div><div class="modal__detail-value">${plant.care.light}</div></div>
    <div class="modal__detail-item"><div class="modal__detail-label">💧 Water</div><div class="modal__detail-value">${plant.care.water}</div></div>
    <div class="modal__detail-item"><div class="modal__detail-label">📊 Difficulty</div><div class="modal__detail-value">${plant.care.difficulty}</div></div>
    <div class="modal__detail-item"><div class="modal__detail-label">🌡️ Temperature</div><div class="modal__detail-value">${plant.care.temperature}</div></div>`;
  const addBtn = document.getElementById('modalAddBtn');
  if (addBtn) {
    const inGarden = isInGarden(plant.id);
    addBtn.textContent = inGarden ? 'Remove from Garden ❌' : 'Add to My Garden 🌱';
    addBtn.onclick = () => {
      const added = toggleGarden(plant.id);
      addBtn.textContent = added ? 'Remove from Garden ❌' : 'Add to My Garden 🌱';
      const cardBtn = document.querySelector(`[data-add-id="${plant.id}"]`);
      if (cardBtn) { cardBtn.classList.toggle('added', added); cardBtn.textContent = added ? '✓' : '+'; }
    };
  }
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePlantModal() {
  const overlay = document.getElementById('plantModal');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* ---------- Modal Close Events ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('modalClose');
  const closeBtnAlt = document.getElementById('modalCloseBtn');
  const overlay = document.getElementById('plantModal');
  if (closeBtn) closeBtn.addEventListener('click', closePlantModal);
  if (closeBtnAlt) closeBtnAlt.addEventListener('click', closePlantModal);
  if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closePlantModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePlantModal(); });
});

/* ---------- Plants Page Init ---------- */
function initPlantsPage() {
  const grid = document.getElementById('plantGrid');
  const searchInput = document.getElementById('plantSearch');
  const filtersContainer = document.getElementById('categoryFilters');
  const noResults = document.getElementById('noResults');
  if (!grid || !searchInput || !filtersContainer) return;
  const categories = ['All', ...new Set(plantsData.map(p => p.category))];
  let activeCategory = 'All';
  filtersContainer.innerHTML = categories.map(cat => `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat}</button>`).join('');
  function filterAndRender() {
    const query = searchInput.value.toLowerCase().trim();
    let filtered = plantsData;
    if (activeCategory !== 'All') filtered = filtered.filter(p => p.category === activeCategory);
    if (query) filtered = filtered.filter(p => p.name.toLowerCase().includes(query) || p.botanical.toLowerCase().includes(query) || p.tags.some(t => t.toLowerCase().includes(query)));
    renderPlantCards(filtered, grid);
    if (noResults) noResults.style.display = filtered.length === 0 ? 'block' : 'none';
  }
  searchInput.addEventListener('input', filterAndRender);
  filtersContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    activeCategory = btn.dataset.category;
    filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterAndRender();
  });
  filterAndRender();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('plantGrid') && document.getElementById('plantSearch')) initPlantsPage();
  // Popular plants on home page
  const popGrid = document.getElementById('popularPlantsGrid');
  if (popGrid) renderPlantCards(plantsData.filter(p => p.popular).slice(0, 4), popGrid);
});
