'use client';

import { useMemo, useState } from 'react';
import { C } from '@/content/site';
import { getServiceNames } from '@/content/localized';
import { t, type Lang } from '@/content/i18n';
import { WhatsAppIcon } from '@/components/icons';

/**
 * The design's contact form does not persist anything server-side — it composes
 * a message and hands the user off to WhatsApp. We keep that behaviour.
 */
export default function ContactForm({ lang }: { lang: Lang }) {
  const d = t(lang);
  const isAr = lang === 'ar';
  const serviceNames = getServiceNames(lang, d.formServiceDefault);

  const [name, setName] = useState('');
  const [area, setArea] = useState(d.navDubai);
  const [service, setService] = useState(serviceNames[0]);
  const [msg, setMsg] = useState('');

  const waHref = useMemo(() => {
    const named = service && service !== serviceNames[0];
    let text = isAr
      ? `مرحباً ${'أبيكس'} — أرغب في قياس مجاني في الموقع${named ? ` لـ ${service}` : ''}.`
      : `Hello ${C.short} — I would like a free on-site measurement${named ? ` for ${service}` : ''}.`;
    if (name) text += `\n${isAr ? 'الاسم' : 'Name'}: ${name}`;
    if (area) text += `\n${isAr ? 'المنطقة' : 'Area'}: ${area}`;
    if (msg) text += `\n${isAr ? 'التفاصيل' : 'Details'}: ${msg}`;
    return `https://wa.me/${C.wa}?text=${encodeURIComponent(text)}`;
  }, [name, area, service, msg, isAr, serviceNames]);

  return (
    <div>
      <div className="border border-line2 rounded-2xl p-[clamp(22px,3vw,32px)] bg-paper">
        <h2 className="text-[22px] font-extrabold font-display">{d.formTitle}</h2>
        <p className="text-muted text-[14.5px] mt-2">{d.formLede}</p>
        <div className="grid gap-[14px] mt-[22px]">
          <label className="grid gap-[6px]">
            <span className="field-label">{d.formName}</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={d.formNamePh}
              className="field"
            />
          </label>
          <label className="grid gap-[6px]">
            <span className="field-label">{d.formArea}</span>
            <input
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder={d.formAreaPh}
              className="field"
            />
          </label>
          <label className="grid gap-[6px]">
            <span className="field-label">{d.formService}</span>
            <select value={service} onChange={(e) => setService(e.target.value)} className="field">
              {serviceNames.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-[6px]">
            <span className="field-label">{d.formDetails}</span>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={3}
              placeholder={d.formDetailsPh}
              className="field resize-y"
            />
          </label>
          <a
            href={waHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-[10px] p-[15px] rounded-[10px] bg-wa text-white hover:text-white font-semibold text-base"
          >
            <WhatsAppIcon size={19} />
            {d.formSend}
          </a>
          <p className="mono text-[11px] text-muted text-center">
            {isAr ? 'يفتح واتساب إلى' : 'Opens WhatsApp to'} {C.phoneDisp} · {d.formFootnote}
          </p>
        </div>
      </div>
    </div>
  );
}
