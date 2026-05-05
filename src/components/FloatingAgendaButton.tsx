'use client';

import {
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/FloatingAgendaButton.module.css';

const WHATSAPP_PHONE = '527292324754';

const initialForm = {
  petName: '',
  petType: 'Perro',
  service: '',
  size: 'Pequeño',
  desiredDay: '',
  preferredTime: '',
  comments: '',
};

type AgendaForm = typeof initialForm;

const serviceOptions = ['Baño', 'Corte', 'Baño + corte', 'Servicio extra'];
const petTypes = ['Perro', 'Gato', 'Otro'];
const sizeOptions = ['Pequeño', 'Mediano', 'Grande'];

type AgendaContextValue = {
  openAgenda: () => void;
  closeAgenda: () => void;
};

const AgendaContext = createContext<AgendaContextValue | null>(null);

export function useAgendaModal() {
  const context = useContext(AgendaContext);

  if (!context) {
    throw new Error('useAgendaModal must be used inside AgendaProvider');
  }

  return context;
}

export function AgendaProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const value = useMemo(
    () => ({
      openAgenda: () => setOpen(true),
      closeAgenda: () => setOpen(false),
    }),
    []
  );

  return (
    <AgendaContext.Provider value={value}>
      {children}
      <FloatingAgendaButton open={open} setOpen={setOpen} />
    </AgendaContext.Provider>
  );
}

function FloatingAgendaButton({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean | ((current: boolean) => boolean)) => void;
}) {
  const [form, setForm] = useState<AgendaForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(
    () => ({
      petName: submitted && !form.petName.trim(),
      service: submitted && !form.service,
      desiredDay: submitted && !form.desiredDay,
      preferredTime: submitted && !form.preferredTime.trim(),
    }),
    [form, submitted]
  );

  const updateField = (field: keyof AgendaForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (!form.petName.trim() || !form.service || !form.desiredDay || !form.preferredTime.trim()) {
      return;
    }

    const message = [
      'Hola Patitas Spa, quiero agendar una cita 🐾',
      '',
      `Nombre de mi mascota: ${form.petName.trim()}`,
      `Tipo de mascota: ${form.petType}`,
      `Servicio de interés: ${form.service}`,
      `Tamaño: ${form.size}`,
      `Día deseado: ${form.desiredDay}`,
      `Horario preferido: ${form.preferredTime.trim()}`,
      `Comentarios: ${form.comments.trim() || 'Sin comentarios'}`,
      '',
      '¿Me podrían confirmar disponibilidad?',
    ].join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className={styles.wrapper}>
      {open && (
        <div className={styles.panel} role="dialog" aria-label="Solicitar cita por WhatsApp">
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.kicker}>Agenda rápida</span>
              <h2>Agenda tu cita</h2>
            </div>

            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Cerrar formulario"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={`${styles.row} ${styles.petRow}`}>
              <label className={styles.field}>
                <span>Mascota</span>
                <input
                  value={form.petName}
                  onChange={(event) => updateField('petName', event.target.value)}
                  aria-invalid={errors.petName}
                  placeholder="Ej. Moka"
                />
                {errors.petName && <small>Campo requerido.</small>}
              </label>

              <label className={styles.field}>
                <span>Tipo</span>
                <select
                  value={form.petType}
                  onChange={(event) => updateField('petType', event.target.value)}
                >
                  {petTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className={`${styles.row} ${styles.serviceRow}`}>
              <label className={styles.field}>
                <span>Servicio</span>
                <select
                  value={form.service}
                  onChange={(event) => updateField('service', event.target.value)}
                  aria-invalid={errors.service}
                >
                  <option value="">Selecciona</option>
                  {serviceOptions.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
                {errors.service && <small>Selecciona un servicio.</small>}
              </label>

              <label className={styles.field}>
                <span>Tamaño</span>
                <select value={form.size} onChange={(event) => updateField('size', event.target.value)}>
                  {sizeOptions.map((size) => (
                    <option key={size}>{size}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className={`${styles.row} ${styles.dateRow}`}>
              <label className={styles.field}>
                <span>Día</span>
                <input
                  type="date"
                  value={form.desiredDay}
                  onChange={(event) => updateField('desiredDay', event.target.value)}
                  aria-invalid={errors.desiredDay}
                />
                {errors.desiredDay && <small>Indica el día deseado.</small>}
              </label>

              <label className={styles.field}>
                <span>Horario</span>
                <input
                  value={form.preferredTime}
                  onChange={(event) => updateField('preferredTime', event.target.value)}
                  aria-invalid={errors.preferredTime}
                  placeholder="Ej. 11:00 am"
                />
                {errors.preferredTime && <small>Indica un horario.</small>}
              </label>
            </div>

            <label className={styles.field}>
              <span>Comentario (opcional)</span>
              <textarea
                value={form.comments}
                onChange={(event) => updateField('comments', event.target.value)}
                rows={2}
                placeholder="Algo especial que debamos saber"
              />
            </label>

            <button type="submit" className={styles.submitBtn}>
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className={styles.floatBtn}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? 'Cerrar agenda rápida' : 'Abrir agenda rápida'}
      >
        <span className={styles.floatLabel}>Cita rápida</span>
        <span className={styles.floatIcon}>
          <FontAwesomeIcon icon={faPaw} />
        </span>
      </button>
    </div>
  );
}
