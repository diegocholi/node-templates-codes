import React from 'react'
import FiltersComponent from './FiltersComponent'
import TableComponent from './TableComponent'
import DialogComponent from './DialogComponent'

export default ({ setOpenAddViagens, openAddViagens }) => (
  <>
    <FiltersComponent setOpenAddViagens={setOpenAddViagens} />
    <TableComponent />
    <DialogComponent
      openAddViagens={openAddViagens}
      setOpenAddViagens={setOpenAddViagens}
    />
  </>
)
