
export const PCHEADING        = 'PCHeading'
export const PCIMAGE          = 'PCImage'
export const PCPARAGRAPH      = 'PCParagraph'
export const PCSECTION        = 'PCSection'

export const COMPONENT_TYPES_SETTINGS = {
  [PCHEADING]: {
    childrenAllowed: false,
    icon: 'folder',
  },
  [PCIMAGE]: {
    childrenAllowed: false,
    icon: 'folder',
  },
  [PCPARAGRAPH]: {
    childrenAllowed: false,
    icon: 'folder',
  },
  [PCSECTION]: {
    childrenAllowed: true,
    icon: 'folder',
  },
};