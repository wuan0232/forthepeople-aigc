export type OfficeLocation = {
  id: string
  name: string
  addressLines: string[]
  phoneDisplay: string
  phoneTel: string
  /** Google Maps link for this office address */
  mapsUrl: string
}

function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/** Canonical office list used across header/footer/locations/contact. */
export const SITE_OFFICES: OfficeLocation[] = [
  {
    id: 'nyc-flushing',
    name: 'New York City Office',
    addressLines: ['42-65 Kissena Blvd', 'Flushing, NY'],
    phoneDisplay: '(929) 399-3134',
    phoneTel: '+19293993134',
    mapsUrl: mapsSearchUrl('42-65 Kissena Blvd, Flushing, NY'),
  },
  {
    id: 'syracuse',
    name: 'Syracuse Office',
    addressLines: ['475 Irving Ave, Suite 420', 'Syracuse, NY 13210'],
    phoneDisplay: '(929) 399-3134',
    phoneTel: '+19293993134',
    mapsUrl: mapsSearchUrl('475 Irving Ave, Suite 420, Syracuse, NY 13210'),
  },
]

export const SITE_PHONE_DISPLAY = '(929) 399-3134'
export const SITE_PHONE_TEL = '+19293993134'
