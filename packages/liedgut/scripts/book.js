import React from 'react'
import { render } from '@bdp-rps/react-pdf-renderer'

import '../src/utils/init'

import Ohrwurm from '../src/templates/Ohrwurm'

render(<Ohrwurm />, `${__dirname}/../dist/Ohrwurm.pdf`)
