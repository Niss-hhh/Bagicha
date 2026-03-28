/* ============================================
   BAGICHA — Garden Page Logic (js/garden.js)
   ============================================ */

function renderGardenPage() {
  const grid = document.getElementById('gardenGrid');
  const emptyState = document.getElementById('gardenEmpty');
  const statsContainer = document.getElementById('gardenStats');
  if (!grid) return;
  const gardenIds = getGardenIds();
  const gardenPlants = plantsData.filter(p => gardenIds.includes(p.id));
  if (gardenPlants.length === 0) {
    grid.style.display = 'none';
    if (statsContainer) statsContainer.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }
  grid.style.display = '';
  if (emptyState) emptyState.style.display = 'none';
  if (statsContainer) {
    statsContainer.style.display = '';
    const categories = new Set(gardenPlants.map(p => p.category));
    statsContainer.innerHTML = `
      <div class="garden-stat"><div class="garden-stat__number">${gardenPlants.length}</div><div class="garden-stat__label">Plants Saved</div></div>
      <div class="garden-stat"><div class="garden-stat__number">${categories.size}</div><div class="garden-stat__label">Categories</div></div>
      <div class="garden-stat"><div class="garden-stat__number">${gardenPlants.filter(p => p.care.difficulty === 'Easy').length}</div><div class="garden-stat__label">Easy to Grow</div></div>`;
  }
  renderPlantCards(gardenPlants, grid, { showRemove: true });
}

function clearGarden() {
  if (confirm('Are you sure you want to remove all plants from your garden?')) {
    saveGardenIds([]);
    renderGardenPage();
    showToast('Garden cleared 🗑️');
  }
}

document.addEventListener('DOMContentLoaded', () => { renderGardenPage(); });
