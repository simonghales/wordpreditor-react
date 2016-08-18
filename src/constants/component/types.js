
export const PCHEADING        = 'PCHeading'
export const PCIMAGE          = 'PCImage'
export const PCPARAGRAPH      = 'PCParagraph'
export const PCSECTION        = 'PCSection'

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