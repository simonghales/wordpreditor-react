
import React          from 'react'
import * as types     from './types'
import PCHeading      from '../../components/PCHeading'
import PCImage        from '../../components/PCImage'
import PCParagraph    from '../../components/PCParagraph'
import PCSection      from '../../components/PCSection'

export const COMPONENT_MAPPING = {
  [types.PCHEADING]: (data) => (<PCHeading data={data} />),
  [types.PCIMAGE]: (data) => (<PCImage data={data} />),
  [types.PCPARAGRAPH]: (data) => (<PCParagraph data={data} />),
  [types.PCSECTION]: (data) => (<PCSection data={data} />),
};