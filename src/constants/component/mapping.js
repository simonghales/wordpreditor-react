
import React          from 'react'
import * as types     from './types'
import PCHeading      from '../../components/pageComponents/PCHeading'
import PCImage        from '../../components/pageComponents/PCImage'
import PCParagraph    from '../../components/pageComponents/PCParagraph'
import PCSection      from '../../components/pageComponents/PCSection'

export const COMPONENT_MAPPING = {
  [types.PCHEADING]: (data) => (<PCHeading data={data} />),
  [types.PCIMAGE]: (data) => (<PCImage data={data} />),
  [types.PCPARAGRAPH]: (data) => (<PCParagraph data={data} />),
  [types.PCSECTION]: (data) => (<PCSection data={data} />),
};