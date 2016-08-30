
export const PCMODULE         = 'PCModule'
export const PCHEADING        = 'PCHeading'
export const PCIMAGE          = 'PCImage'
export const PCPARAGRAPH      = 'PCParagraph'
export const PCSECTION        = 'PCSection'
export const PCCODE           = 'PCCode'
export const PCFILM           = 'PCFilm'

export const COMPONENT_TYPES_SETTINGS = {
  [PCMODULE]: {
    childrenAllowed: false,
    icon: 'rocket',
  },
  [PCSECTION]: {
    childrenAllowed: true,
    icon: 'folder',
  },
  [PCHEADING]: {
    childrenAllowed: false,
    icon: 'font',
  },
  [PCIMAGE]: {
    childrenAllowed: false,
    icon: 'picture-o',
  },
  [PCPARAGRAPH]: {
    childrenAllowed: false,
    icon: 'paragraph',
  },
  [PCFILM]: {
    childrenAllowed: false,
    icon: 'film',
  },
  [PCCODE]: {
    childrenAllowed: false,
    icon: 'code',
  },
};