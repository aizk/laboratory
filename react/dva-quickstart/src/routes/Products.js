import React from 'react'
import { connect } from 'dva'
// 包装无状态组件
import ProductList from '../components/ProductList'

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    // 调用 dispatch
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products}/>
    </div>
  )
};

// state -> protos
// actions -> protos
// 定义如何传递 data 和 action 到容器组件
// actions 在函数中定义了，只需要传递 data, 该 products 就是 store 上的 key？
// export default connect(({ products }) => ({
//   products,
// }))(Products);
export default connect(({ products }) => {
  return {
    products,
  }
})(Products);
