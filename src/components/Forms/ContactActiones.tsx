// src/components/ContactActions.tsx
import siteData from "@config/siteData.json";
import { useState } from "react";

 
export default function ContactActions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
     setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildMessage = () => {
    const { name, email, date, message } = formData;
    return encodeURIComponent(
      `👋🏼 Hola! Soy ${name}\n📅 Fecha del evento: ${date}\n📧 Email: ${email}\n💬 Mensaje:\n${message}`
    );
  };

  const handleWhatsApp = () => {
     window.open(`https://wa.me/${siteData.tel}?text=${buildMessage()}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Nuevo contacto desde tu web");
    const body = buildMessage();
    window.open(`mailto:${siteData.mail}?subject=${subject}&body=${body}`);
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {e.preventDefault();
        handleWhatsApp()}}
    >
      <label htmlFor="name">Nombre
      <input name="name" type="text" placeholder="Tu nombre" required className="form__input" onChange={handleChange} />
      </label>
      <label htmlFor="email">
        Correo electrónico
      <input name="email" type="email" placeholder="Tu correo" required className="form__input" onChange={handleChange} />
      </label>

      <label htmlFor="date">Fecha del evento
        <input name="date" type="date" required className="form__input" onChange={handleChange} /></label>

      <label htmlFor="message">Observaciones
      <textarea name="message" rows={5} placeholder="Tu mensaje" required className="form__input" onChange={handleChange} />

      </label>

      <footer className="grid md:grid-cols-[1fr_auto] gap-2">
        <button
          type="submit"
           className="px-3 py-2 rounded-xl bg-primary-200 hover:brightness-90 transition-all"
        >
          📱 Enviar por WhatsApp
        </button>
        <button
          type="button"
          onClick={handleEmail}
          className="px-3 py-2 rounded-xl hover:underline transition-all"
        >
          ✉️ Email
        </button>
      </footer>
    </form>
  );
}
