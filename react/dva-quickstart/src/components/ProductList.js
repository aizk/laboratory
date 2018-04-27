import React from 'react'
import PropTypes from 'prop-types'
import { Table, Popconfirm, Button} from 'antd'

const ProductList = ({ onDelete, products }) => {
  // 确认删除数据的列
  const columns = [{
    title: 'Name',
    // 每行对于 dataSource 的数据索引
    dataIndex: 'name',
  }, {
    title: 'Actions',
    // 每行渲染一个按钮
    render: (text, record) => {
      return (
        // 确认时删除记录
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)} >
          <Button>Delete</Button>>
        </Popconfirm>
      )
    }
  }];
  // 渲染 table
  return (
    <Table dataSource={products} columns={columns} />
  )
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList
