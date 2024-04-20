import React from 'react'
import { render } from '@bdp-rps/react-pdf-renderer'

import '../src/utils/init'

import Holzwurm from '../src/templates/Holzwurm'

render(<Holzwurm />, `${__dirname}/../dist/Holzwurm.pdf`)
