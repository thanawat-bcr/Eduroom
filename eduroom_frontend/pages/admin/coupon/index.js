import React, { Fragment, useContext } from 'react'
import ProtectedAdminRoute from '../../../components/admin/protectedAdminRoute'
import AdminTemplate from '../../../components/admin/template/default'
import AdminContext from '../../../contexts/admin/adminContext'
import CreateMain from '../../../components/coupon/createMain'
const createcouponPage = () => {
  const adminContext = useContext(AdminContext)
  const { logoutAdmin } = adminContext
  return (
    <Fragment>
      <ProtectedAdminRoute>
        <AdminTemplate>
          Hello Admin <button onClick={logoutAdmin}>logout</button>
          <CreateMain />
        </AdminTemplate>
      </ProtectedAdminRoute>
    </Fragment>
  )
}
export default createcouponPage