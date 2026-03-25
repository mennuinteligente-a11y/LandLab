/* 
Filippi Santos — App Logic
*/

const templates = [
  {
    name: "Barbearia Premium",
    slug: "barbearia",
    category: "Negócios Locais",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
  },
  {
    name: "Clínica Estética",
    slug: "clinica",
    category: "Saúde",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Restaurante Moderno",
    slug: "restaurante",
    category: "Gastronomia",
    image: "https://images.unsplash.com/photo-1550966842-2849a28c0a61?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Imobiliária Luxo",
    slug: "imobiliaria",
    category: "Negócios Locais",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop"
  },
  {
    name: "Advogado Especialista",
    slug: "advogado",
    category: "Negócios Locais",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Dentista Sorriso",
    slug: "dentista",
    category: "Saúde",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Estética Avançada",
    slug: "estetica",
    category: "Saúde",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Taróloga Profissional",
    slug: "tarot",
    category: "Negócios Locais",
    image: "https://images.unsplash.com/photo-1590076175571-4b54592b5a15?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Terapeuta Holístico",
    slug: "terapeuta",
    category: "Saúde",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
  }
];

document.addEventListener('DOMContentLoaded', () => {

  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  const grid = document.getElementById('templates-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (grid) {
    renderTemplates('all');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {

        const category = btn.getAttribute('data-category');

        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        renderTemplates(category);

      });
    });
  }

  function renderTemplates(category) {

    grid.innerHTML = '';

    const filteredTemplates = category === 'all'
      ? templates
      : templates.filter(t => t.category === category);

    filteredTemplates.forEach(template => {

      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <div class="card-image">
          <img src="${template.image}" alt="${template.name}">
        </div>
        <div class="card-content">
          <span class="card-category">${template.category}</span>
          <h3 class="card-title">${template.name}</h3>
          <div class="card-footer">
            <span class="btn-view">Ver Modelo</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        window.location.href = `templates/${template.slug}/index.html`;
      });

      grid.appendChild(card);

    });

  }

});