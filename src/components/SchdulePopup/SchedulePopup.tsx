import React from "react"
import { DatePicker, Input, Button, Col, Row, Divider } from "antd"

import { SET_SHOW_POPUP } from "../../reducer"
import { useDispatch } from "../../store"

import { SchedulePopupWrapper, ContentWrapper } from "./SchedulePopup.style"

const SchedulePopup = () => {
  const dispatch = useDispatch()

  return (
    <SchedulePopupWrapper>
      <ContentWrapper>
        <Row gutter={24} align="middle">
          <Col span={24}>
            <Input placeholder="일정 제목을 입력해주세요." />
          </Col>
        </Row>
        <br />
        <Row gutter={24} justify="space-around" align="middle">
          <Col span={8}>
            <DatePicker />
          </Col>
          <Col span={8}>
            <DatePicker />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24} justify="space-around">
          <Col span={3} offset={15}>
            <Button
              type="dashed"
              onClick={() => dispatch({ type: SET_SHOW_POPUP, payload: false })}
            >
              취소
            </Button>
          </Col>
          <Col span={3}>
            <Button type="danger">삭제</Button>
          </Col>
          <Col span={3}>
            <Button type="primary">저장</Button>
          </Col>
        </Row>
      </ContentWrapper>
    </SchedulePopupWrapper>
  )
}

export default SchedulePopup
