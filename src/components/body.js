import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import '../style/body.css'

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div>
          <Row>
            <Col md="2"></Col>
            <Col md="5">
              <div>
                <div className="pr-5">
                  <div className="pd-img">
                    <img className="img" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"></img>
                  </div>

                  <h2 style={{ fontSize: '28px' }}>
                    Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
                  </h2>
                </div>
              </div>
            </Col>
            <Col md="4" className="pt-5">
              <div className="border pt-4 ">
                <div className="GroupInput">
                  <Form>
                    <FormGroup className="input">
                      <Input className="inputHeight" type="text" placeholder="Email hoặc số điện thoại" name="email" />
                    </FormGroup>
                    <FormGroup className="input">
                      <Input className=" inputHeight" type="text" placeholder="Mật khẩu" name="pass" />
                    </FormGroup>
                  </Form>

                  <div className="login">
                    <a
                      class="btn btn-primary"
                      type="submit"
                      href="#"
                      role="button"
                      style={{ width: '100%', padding: '10px' }}
                    >
                      Đăng nhập
                    </a>
                  </div>
                  <div style={{ marginTop: '16px' }}>
                    <a href="#">Quên mật khẩu?</a>
                  </div>
                  <div className="line"></div>
                </div>
                <div className=" w-100 col-12" style={{ textAlign: 'center' }}>
                  <p className="btn btn-primary " style={{ backgroundColor: '#42b72a' }} href="#">
                    Tạo tài khoản mới
                  </p>
                </div>
              </div>

              <div className=" mt-4">
                <a href="#" style={{ color: 'black', fontWeight: '700' }}>
                  Tạo Trang
                </a>
                &#160;dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.
              </div>
            </Col>
            <Col></Col>
          </Row>
          {/* <Row className="color">
            <div className="pt-4">
              <div >
                <div className="display">
                  <ul className="display">
                    <li>
                      <a href="#" style={{ color: 'black', fontWeight: '500' }}>
                        Tiếng Việt{' '}
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        English
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        中文(台灣)
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        日本語
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        한국어
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        ภาษาไทย
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        Français (France)
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        Español
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        Português (Brasil)
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        Deutsch
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        Italiano
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: 'black' }}>
                        Português (Brasil)
                      </a>
                    </li>
                  </ul>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </Row> */}
        </div>
      </div>
    )
  }
}
export default Body
