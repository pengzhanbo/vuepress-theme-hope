// German (Austria) [de-at]
import { isArray } from "@vuepress/helper";
import type dayjs from "dayjs";

import type { Locale } from "./locale.js";

const texts = {
  s: "ein paar Sekunden",
  m: ["eine Minute", "einer Minute"],
  mm: "%d Minuten",
  h: ["eine Stunde", "einer Stunde"],
  hh: "%d Stunden",
  d: ["ein Tag", "einem Tag"],
  dd: ["%d Tage", "%d Tagen"],
  M: ["ein Monat", "einem Monat"],
  MM: ["%d Monate", "%d Monaten"],
  y: ["ein Jahr", "einem Jahr"],
  yy: ["%d Jahre", "%d Jahren"],
};

const relativeTimeFormatter = (
  number: string,
  withoutSuffix: boolean,
  key: "s" | "m" | "mm" | "h" | "hh" | "d" | "dd" | "M" | "MM" | "y" | "yy",
): string => {
  let l = texts[key];

  if (isArray(l)) l = l[withoutSuffix ? 0 : 1];

  return l.replace("%d", number);
};

const locale: Partial<Locale> = {
  name: "de-at",
  weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
    "_",
  ),
  weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
  weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
  months:
    "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
      "_",
    ),
  monthsShort:
    "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
  ordinal: (n) => `${n}.`,
  weekStart: 1,
  formats: {
    LTS: "HH:mm:ss",
    LT: "HH:mm",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY HH:mm",
    LLLL: "dddd, D. MMMM YYYY HH:mm",
  },
  relativeTime: {
    future: "in %s",
    past: "vor %s",
    // @ts-expect-error: dayjs locale is not correctly typed
    s: relativeTimeFormatter,
    // @ts-expect-error: dayjs locale is not correctly typed
    m: relativeTimeFormatter,
    // @ts-expect-error: dayjs locale is not correctly typed
    mm: relativeTimeFormatter,
    // @ts-expect-error: dayjs locale is not correctly typed
    h: relativeTimeFormatter,
    // @ts-expect-error: dayjs locale is not correctly typed
    hh: relativeTimeFormatter,
    // @ts-expect-error: dayjs locale is not correctly typed
    d: relativeTimeFormatter,
    // @ts-expect-error: dayjs locale is not correctly typed
    dd: relativeTimeFormatter,
    // @ts-expect-error: dayjs locale is not correctly typed
    M: relativeTimeFormatter,
    // @ts-expect-error: dayjs locale is not correctly typed
    MM: relativeTimeFormatter,
    // @ts-expect-error: dayjs locale is not correctly typed
    y: relativeTimeFormatter,
    // @ts-expect-error: dayjs locale is not correctly typed
    yy: relativeTimeFormatter,
  },
};

export const loadDeAtLocale = (extendedDayjs: typeof dayjs): void => {
  extendedDayjs.locale("de-at", locale);
};
