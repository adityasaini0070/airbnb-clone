import { useMemo, useState } from 'react';
import { Listing } from '../models/listing';
import './Calendar.css';

interface CalMonth {
  label: string;
  year: number;
  month: number;
  weeks: (number | null)[][];
}

function buildMonth(year: number, month: number): CalMonth {
  const normMonth = ((month % 12) + 12) % 12;
  const normYear = year + Math.floor(month / 12);
  const first = new Date(normYear, normMonth, 1);
  const daysInMonth = new Date(normYear, normMonth + 1, 0).getDate();
  const startWeekday = first.getDay();
  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = new Array(startWeekday).fill(null);
  for (let d = 1; d <= daysInMonth; d++) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return { label: first.toLocaleString('en-US', { month: 'long', year: 'numeric' }), year: normYear, month: normMonth, weeks };
}

export default function Calendar({ listing }: { listing: Listing }) {
  const checkIn = useMemo(() => new Date(listing.checkIn), [listing.checkIn]);
  const checkOut = useMemo(() => new Date(listing.checkOut), [listing.checkOut]);
  const [base, setBase] = useState({ year: checkIn.getFullYear(), month: checkIn.getMonth() });

  const months = [buildMonth(base.year, base.month), buildMonth(base.year, base.month + 1)];

  const isInRange = (cal: CalMonth, day: number | null) => {
    if (!day) return false;
    const d = new Date(cal.year, cal.month, day);
    return d >= checkIn && d <= checkOut;
  };
  const isEndpoint = (cal: CalMonth, day: number | null) => {
    if (!day) return false;
    const d = new Date(cal.year, cal.month, day);
    return d.getTime() === checkIn.getTime() || d.getTime() === checkOut.getTime();
  };

  const shiftMonths = (delta: number) => {
    const total = base.month + delta;
    setBase({ year: base.year + Math.floor(total / 12), month: ((total % 12) + 12) % 12 });
  };

  const dateFmt = (d: Date) => d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <section className="calendar">
      <h2 className="section-title">{listing.nights} nights in {listing.neighbourhood.split(',')[0]}</h2>
      <p className="calendar__range">{dateFmt(checkIn)} - {dateFmt(checkOut)}</p>

      <div className="calendar__months">
        <button className="calendar__nav calendar__nav--prev" onClick={() => shiftMonths(-1)} aria-label="Previous month">‹</button>
        {months.map((cal, idx) => (
          <div className="calendar__month" key={idx}>
            <strong>{cal.label}</strong>
            <div className="calendar__weekdays">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i}>{d}</span>)}
            </div>
            <div className="calendar__grid">
              {cal.weeks.flatMap((week, wi) =>
                week.map((day, di) => (
                  <span
                    key={`${wi}-${di}`}
                    className={[
                      'calendar__day',
                      !day ? 'calendar__day--empty' : '',
                      isInRange(cal, day) ? 'calendar__day--in-range' : '',
                      isEndpoint(cal, day) ? 'calendar__day--endpoint' : '',
                    ].filter(Boolean).join(' ')}
                  >
                    {day}
                  </span>
                ))
              )}
            </div>
          </div>
        ))}
        <button className="calendar__nav calendar__nav--next" onClick={() => shiftMonths(1)} aria-label="Next month">›</button>
      </div>

      <button className="underline-link calendar__clear" type="button">Clear dates</button>
    </section>
  );
}
