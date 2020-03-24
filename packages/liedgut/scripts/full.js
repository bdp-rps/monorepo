import React from 'react'
import ReactPDF from '@bdp-rps/react-pdf-renderer'

import '../src/utils/init'

import Ohrwurm from '../src/templates/Ohrwurm'

ReactPDF.render(<Ohrwurm />, `${__dirname}/../dist/ohrwurm.pdf`)
