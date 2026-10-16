import emailjs from '@emailjs/browser'

// Same EmailJS service/template as the contact form, so fan sign-ups land in
// Ethan's inbox with no extra setup. `kind` shows up as the event type.
const EMAILJS_SERVICE_ID  = 'service_jkskb25'
const EMAILJS_TEMPLATE_ID = 'template_fqosxmp'
const EMAILJS_PUBLIC_KEY  = 'iloAULJ2uMQUWoHTi'

export function sendFanNote(kind: string, fields: { name?: string; email?: string; location?: string; message: string }) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      name: fields.name ?? '',
      email: fields.email ?? '',
      phone: '',
      eventType: kind,
      date: '',
      location: fields.location ?? '',
      message: fields.message,
    },
    EMAILJS_PUBLIC_KEY,
  )
}
