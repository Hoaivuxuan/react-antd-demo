import React, { PureComponent, Fragment } from 'react';
import {
  Breadcrumb,
  Layout,
  Form,
  Input,
  Row,
  Col,
  Card,
  Button,
  Icon,
  DatePicker,
  TimePicker,
  Select,
  Popover,
  Table,
  Popconfirm,
  Divider
} from "antd";
import "./App.css";

function App() {
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const { Content, Footer } = Layout;
  const fieldLabels = {
    name: "仓库名",
    url: "仓库域名",
    owner: "仓库管理员",
    approver: "审批人",
    dateRange: "生效日期",
    type: "仓库类型",
    name2: "任务名",
    url2: "任务描述",
    owner2: "执行人",
    approver2: "责任人",
    dateRange2: "生效日期",
    type2: "任务类型",
  };

  const tableData = [
    {
      key: "1",
      workId: "00001",
      name: "John Brown",
      department: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      workId: "00002",
      name: "Jim Green",
      department: "London No. 1 Lake Park",
    },
    {
      key: "3",
      workId: "00003",
      name: "Joe Black",
      department: "Sidney No. 1 Lake Park",
    },
  ];
  const columns = [
    {
      title: '成员姓名',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              autoFocus
              placeholder="成员姓名"
            />
          );
        }
        return text;
      },
    },
    {
      title: '工号',
      dataIndex: 'workId',
      key: 'workId',
      width: '20%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              placeholder="工号"
            />
          );
        }
        return text;
      },
    },
    {
      title: '所属部门',
      dataIndex: 'department',
      key: 'department',
      width: '40%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              placeholder="所属部门"
            />
          );
        }
        return text;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        const { loading } = this.state;
        if (!!record.editable && loading) {
          return null;
        }
        if (record.editable) {
          if (record.isNew) {
            return (
              <span>
                <a onClick={e => this.saveRow(e, record.key)}>保存</a>
                <Divider type="vertical" />
                <Popconfirm title="是否要删除此行？">
                  <a>删除</a>
                </Popconfirm>
              </span>
            );
          }
          return (
            <span>
              <a onClick={e => this.saveRow(e, record.key)}>保存</a>
              <Divider type="vertical" />
              <a onClick={e => this.cancel(e, record.key)}>取消</a>
            </span>
          );
        }
        return (
          <span>
            <a onClick={e => this.toggleEditable(e, record.key)}>编辑</a>
            <Divider type="vertical" />
            <Popconfirm title="是否要删除此行？">
              <a>删除</a>
            </Popconfirm>
          </span>
        );
      },
    },
  ];
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        <div className="site-layout-content">
          <Card title="仓库管理" bordered={false}>
            <Form layout="vertical">
              <Row gutter={16}>
                <Col lg={6} md={12} sm={24}>
                  <Form.Item
                    label={fieldLabels.name}
                    rules={[{ required: true, message: "请输入仓库名称" }]}
                  >
                    <Input placeholder="请输入仓库名称" />
                  </Form.Item>
                </Col>
                <Col
                  xl={{ span: 6, offset: 2 }}
                  lg={{ span: 8 }}
                  md={{ span: 12 }}
                  sm={24}
                >
                  <Form.Item
                    label={fieldLabels.url}
                    rules={[
                      {
                        required: true,
                        message: "请选择",
                      },
                    ]}
                  >
                    <Input
                      style={{ width: "100%" }}
                      addonBefore="http://"
                      addonAfter=".com"
                      placeholder="请输入"
                    />
                  </Form.Item>
                </Col>
                <Col
                  xl={{ span: 8, offset: 2 }}
                  lg={{ span: 10 }}
                  md={{ span: 24 }}
                  sm={24}
                >
                  <Form.Item
                    label={fieldLabels.owner}
                    rules={[
                      {
                        required: true,
                        message: "请选择管理员",
                      },
                    ]}
                  >
                    <Select placeholder="请选择管理员">
                      <Option value="xiao">付晓晓</Option>
                      <Option value="mao">周毛毛</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col lg={6} md={12} sm={24}>
                  <Form.Item
                    label={fieldLabels.approver}
                    rules={[{ required: true, message: "请选择审批员" }]}
                  >
                    <Select placeholder="请选择审批员">
                      <Option value="xiao">付晓晓</Option>
                      <Option value="mao">周毛毛</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  xl={{ span: 6, offset: 2 }}
                  lg={{ span: 8 }}
                  md={{ span: 12 }}
                  sm={24}
                >
                  <Form.Item
                    label={fieldLabels.dateRange}
                    rules={[
                      {
                        required: true,
                        message: "请选择生效日期",
                      },
                    ]}
                  >
                    <RangePicker
                      placeholder={["开始日期", "结束日期"]}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  xl={{ span: 8, offset: 2 }}
                  lg={{ span: 10 }}
                  md={{ span: 24 }}
                  sm={24}
                >
                  <Form.Item
                    label={fieldLabels.type}
                    rules={[
                      {
                        required: true,
                        message: "请选择仓库类型",
                      },
                    ]}
                  >
                    <Select placeholder="请选择仓库类型">
                      <Option value="private">私密</Option>
                      <Option value="public">公开</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
          <div className="m-5"></div>
          <Card title="仓库管理" bordered={false}>
            <Form layout="vertical">
              <Row gutter={16}>
                <Col lg={6} md={12} sm={24}>
                  <Form.Item
                    label={fieldLabels.name}
                    rules={[{ required: true, message: "请输入仓库名称" }]}
                  >
                    <Input placeholder="请输入仓库名称" />
                  </Form.Item>
                </Col>
                <Col
                  xl={{ span: 6, offset: 2 }}
                  lg={{ span: 8 }}
                  md={{ span: 12 }}
                  sm={24}
                >
                  <Form.Item
                    label={fieldLabels.url}
                    rules={[
                      {
                        required: true,
                        message: "请选择",
                      },
                    ]}
                  >
                    <Input placeholder="请输入" />
                  </Form.Item>
                </Col>
                <Col
                  xl={{ span: 8, offset: 2 }}
                  lg={{ span: 10 }}
                  md={{ span: 24 }}
                  sm={24}
                >
                  <Form.Item
                    label={fieldLabels.owner}
                    rules={[
                      {
                        required: true,
                        message: "请选择管理员",
                      },
                    ]}
                  >
                    <Select placeholder="请选择管理员">
                      <Option value="xiao">付晓晓</Option>
                      <Option value="mao">周毛毛</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col lg={6} md={12} sm={24}>
                  <Form.Item
                    label={fieldLabels.approver}
                    rules={[{ required: true, message: "请选择审批员" }]}
                  >
                    <Select placeholder="请选择审批员">
                      <Option value="xiao">付晓晓</Option>
                      <Option value="mao">周毛毛</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  xl={{ span: 6, offset: 2 }}
                  lg={{ span: 8 }}
                  md={{ span: 12 }}
                  sm={24}
                >
                  <Form.Item
                    label={fieldLabels.dateRange}
                    rules={[
                      {
                        required: true,
                        message: "请选择生效日期",
                      },
                    ]}
                  >
                    <TimePicker
                      placeholder="提醒时间"
                      style={{ width: '100%' }}
                      getPopupContainer={trigger => trigger.parentNode}
                    />
                  </Form.Item>
                </Col>
                <Col
                  xl={{ span: 8, offset: 2 }}
                  lg={{ span: 10 }}
                  md={{ span: 24 }}
                  sm={24}
                >
                  <Form.Item
                    label={fieldLabels.type}
                    rules={[
                      {
                        required: true,
                        message: "请选择仓库类型",
                      },
                    ]}
                  >
                    <Select placeholder="请选择仓库类型">
                      <Option value="private">私密</Option>
                      <Option value="public">公开</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
          <div className="m-5"></div>
          <Card title="成员管理" bordered={false}>
            <Fragment>
              <Table
                columns={columns}
                pagination={false}
              />
              <Button
                style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
                type="dashed"
                // icon="plus"
              >
                + 新增成员
              </Button>
            </Fragment>
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}

export default App;
