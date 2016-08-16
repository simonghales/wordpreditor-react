
export const PCHEADING        = 'PCHEADING'
export const PCIMAGE          = 'PCIMAGE'
export const PCPARAGRAPH      = 'PCPARAGRAPH'
export const PCSECTION        = 'PCSECTION'

export const COMPONENT_TYPES_SETTINGS = {
  [PCHEADING]: {
    childrenAllowed: false,
  },
  [PCIMAGE]: {
    childrenAllowed: false,
  },
  [PCPARAGRAPH]: {
    childrenAllowed: false,
  },
  [PCSECTION]: {
    childrenAllowed: true,
  },
};