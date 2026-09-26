import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin } from 'lucide-react';

interface StudioContactProps {
  inquiredArtworkTitle?: string;
}

export const StudioContact: React.FC<StudioContactProps> = ({ inquiredArtworkTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: inquiredArtworkTitle ? `Hola, me interesa consultar sobre la obra "${inquiredArtworkTitle}".` : '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSent(true);
  };

  return (
    <section id="contact" className="w-full bg-[#111111] text-[#FAF8F5] py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="md:col-span-5">
            <span className="text-xs font-mono-acc text-neutral-400 uppercase tracking-widest block mb-2">
              Studio & Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Get in Touch.
            </h2>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              For original artwork acquisitions, gallery exhibitions, or custom private commissions, write directly to the studio.
            </p>

            <div className="mt-8 space-y-3 text-xs font-mono-acc text-neutral-400">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-white" />
                <a href="mailto:studio@elena-art.com" className="text-white hover:underline">
                  studio@artistportfolio.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-white" />
                <span>Available Worldwide · Studio in Madrid / CDMX</span>
              </div>
            </div>
          </div>

          {/* Right Column: Short Inquiry Form */}
          <div className="md:col-span-7">
            <div className="bg-[#1C1C1C] border border-[#2B2B2B] rounded-2xl p-6 sm:p-8">
              {sent ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1E7B5E]/20 text-[#34D399] flex items-center justify-center mb-3">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-white mb-1">
                    Mensaje Recibido
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Gracias por tu interés en mi arte. Te responderé a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono-acc">
                  <div>
                    <label className="block text-neutral-400 uppercase mb-1">Nombre</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre o coleccionista"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#242424] border border-[#333333] text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 uppercase mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      placeholder="tu@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#242424] border border-[#333333] text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 uppercase mb-1">Mensaje / Consulta de Obra</label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntame qué obra te interesa o si buscas un encargo personalizado..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#242424] border border-[#333333] text-white focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-white text-[#111111] font-heading font-bold uppercase rounded-xl hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Enviar Consulta al Estudio
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
