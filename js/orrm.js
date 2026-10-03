const team = [
    
    { id: 1, name: "Dr. Ítalo Montofré Bacigalupo", role: "Director ORRM", title: "Ingeniero en Minas | Dr. en Minería y Medio Ambiente", details: "Especialista en Economía Circular, Sostenibilidad y Seguridad Minera. Depto. Ingeniería Metalúrgica y Minas UCN.", email: "imontofre@ucn.cl" },
    { id: 2, name: "Dra. Elizabeth Lam Esquenazi", role: "Coordinadora I+D", title: "Ingeniero Civil en Química | Dra. en Ciencias", details: "Especialista en Estabilización de Relaves y Planes de Cierre de Minas. Directora Núcleo Gestión de Residuos.", email: "elam@ucn.cl" },
    { id: 3, name: "Dr. Rodrigo Rojas Ardiles", role: "Investigador", title: "Doctor en Ciencias", details: "Especialista en procesos químicos avanzados y remediación ambiental.", email: "rrojas02@ucn.cl" },
    { id: 4, name: "Dra. Bárbara Fuentes Siegmund", role: "Impacto Ambiental", title: "Ing. Ambiental | Dra. en Recursos Naturales", details: "Especialista en impacto ambiental en zonas áridas.", email: "bfuentes@ucn.cl" },
    { id: 5, name: "Dr. Iván Soto Espinoza", role: "Geometalurgia", title: "Geólogo", details: "Especialista en Geología, Petrología y Tecnología Educativa.", email: "isoto@ucn.cl" },
    { id: 6, name: "Mathías Becerra Rissi", role: "Encargado Procesos", title: "Ing. Química | Est. Doctorado", details: "Investigador en lixiviación avanzada y procesos sostenibles.", email: "mathias.becerra@ce.ucn.cl" },
    { id: 7, name: "Carolina Gómez Zamorano", role: "Comunicaciones", title: "Periodista", details: "Encargada de difusión científica y posicionamiento regional.", email: "cgomez02@ucn.cl" },
    { id: 8, name: "Dr. Fernando Álvarez Castillo", role: "Ingeniero Comercial", title: "Ingeniero en Minas | Dr. en Minería y Medio Ambiente", details: "Especialista en Economía Circular, Sostenibilidad y Seguridad Minera. Depto. Ingeniería Metalúrgica y Minas UCN.", email: "imontofre@ucn.cl" },
    { id: 9, name: "Dr. Vicente Zétola Vargas", role: "Constructor Civil", title: "Ingeniero Civil en Química | Dra. en Ciencias", details: "Especialista en Estabilización de Relaves y Planes de Cierre de Minas. Directora Núcleo Gestión de Residuos.", email: "elam@ucn.cl" },
    { id: 10, name: "Mg. Sussy Véliz Moraga", role: "Ingeniera Civil en Química", title: "Doctor en Ciencias", details: "Especialista en procesos químicos avanzados y remediación ambiental.", email: "rrojas02@ucn.cl" },
    { id: 11, name: "Ing. Matías Orellana Hormazábal", role: "Ingeniero Civil en Computación e Informática", title: "Ing. Ambiental | Dra. en Recursos Naturales", details: "Especialista en impacto ambiental en zonas áridas.", email: "bfuentes@ucn.cl" },
    { id: 12, name: "Ing. Marcelo Lam Biaggini", role: "Ingeniero en Computación e Informática", title: "Geólogo", details: "Especialista en Geología, Petrología y Tecnología Educativa.", email: "isoto@ucn.cl" },
    { id: 13, name: "Mg. Paula Villarroel Volta", role: "Gestora Financiera", title: "Ing. Química | Est. Doctorado", details: "Investigador en lixiviación avanzada y procesos sostenibles.", email: "mathias.becerra@ce.ucn.cl" },
    { id: 14, name: "Ps. Piero Jaramillo Cortés", role: "Comunidades e Inclusión", title: "Psicólogo", details: "Encargada de difusión científica y posicionamiento regional.", email: "cgomez02@ucn.cl" }
];

function renderList() 
{
    const container = document.getElementById('member-list');
    container.innerHTML = team.map(m => `
        <button onclick="showMember(${m.id})" id="btn-${m.id}" class="member-btn w-full flex items-center p-4 rounded-2xl border bg-slate-50 border-slate-100 hover:border-amber-400 hover:bg-white transition-all text-left">
        <div class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold mr-4 text-slate-500">${m.name[0]}</div>
            <div>
                <h4 class="font-bold text-sm text-slate-800">${m.name}</h4>
                <p class="text-[10px] text-slate-500 uppercase tracking-wider">${m.role}</p>
            </div>
        </button>
    `).join('');
}

function showMember(id) 
{
            const m = team.find(x => x.id === id);
            const detail = document.getElementById('detail-content');
            
            // Actualizar Estilos Botones
            document.querySelectorAll('.member-btn').forEach(b => b.classList.replace('bg-amber-600', 'bg-slate-50'));
            document.querySelectorAll('.member-btn').forEach(b => b.classList.replace('text-white', 'text-slate-800'));
            const activeBtn = document.getElementById(`btn-${id}`);
            activeBtn.classList.remove('bg-slate-50');
            activeBtn.classList.add('bg-amber-600', 'text-white');

            detail.style.opacity = '0';
            setTimeout(() => {
                detail.innerHTML = `
                    <div class="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-amber-600 flex items-center justify-center text-5xl font-black text-white shadow-xl shadow-amber-600/20 shrink-0">
                        ${m.name[0]}
                    </div>
                    <div>
                        <h3 class="text-3xl font-black mb-2">${m.name}</h3>
                        <p class="text-amber-500 font-bold text-lg mb-4">${m.role}</p>
                        <p class="text-slate-400 text-sm mb-6 leading-relaxed">${m.title}</p>
                        <p class="text-slate-300 italic mb-8 border-l-2 border-amber-600 pl-4">"${m.details}"</p>
                        <a href="mailto:${m.email}" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl transition-all border border-white/10 font-bold text-sm">
                            <i data-lucide="mail" size="16"></i> ${m.email}
                        </a>
                    </div>
                `;
                lucide.createIcons();
                detail.style.opacity = '1';
            }, 200);
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('glass', 'shadow-lg', 'py-3', 'text-slate-900');
                nav.classList.remove('text-white', 'py-6');
            } else {
                nav.classList.remove('glass', 'shadow-lg', 'py-3', 'text-slate-900');
                nav.classList.add('text-white', 'py-6');
            }
        });

        window.onload = () => {
            renderList();
            showMember(1);
    lucide.createIcons();
};


