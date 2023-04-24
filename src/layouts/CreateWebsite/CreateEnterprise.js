import React from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { HiOutlineFolder } from "react-icons/hi";
import { TwitterPicker } from "react-color";
import { useState } from "react";
import img from "../Image/manhinhpc1.png";
import "./CreateEnterprise.css";
export default function CreateEnterprise() {
  const [color, setColor] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  function hexToRgbA(hex, opacity) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return (
        "rgba(" +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
        `,${opacity})`
      );
    }
  }
  console.log(hexToRgbA(color, 0.2));
  return (
    <div className="create-enterprise-container">
      <div className="create-enterprise-heading">
        <div className="create-enterprise--heading-title">
          TẠO WEBSITE / PHẦN MỀM RIÊNG CHO BẠN / DOANH NGHIỆP CỦA BẠN{" "}
        </div>
      </div>
      <div className="create-enterprise-body">
        <div className="create-enterprise-body-title">
          <div className="create-enterprise-body-title-info">
            Yêu cầu của bạn
          </div>
        </div>
        <div className="create-enterprise-body-request">
          <textarea className="create-enterprise-body-request-of-user"></textarea>
          <div className="create-enterprise-body-request-form">
            <div className="create-enterprise-body-request-form-heading">
              <div className="create-enterprise-body-request-form-heading-title">
                Mẫu "Yêu cầu"
              </div>
              <div className="create-enterprise-body-request-form-body-content ">
                Tôi muốn làm một trang web có tên <b>DEEDWORD</b>{" "}
                <span style={{ color: "gray" }}>(tên doanh nghiệp)</span>. Trang
                web này dùng cho mục đích <b>thương mại</b>{" "}
                <span style={{ color: "gray" }}>(mục đích)</span> và thuộc lĩnh
                vực <b>quần áo</b>{" "}
                <span style={{ color: "gray" }}>(lĩnh vực)</span>. Tôi muốn
                trang web có các mục cơ bản như là{" "}
                <b>sản phẩm, phân loại, liên hệ, đặt hàng</b>{" "}
                <span style={{ color: "gray" }}>(mô tả)</span>. Ngoài ra thì tôi
                muốn có các <b> hiệu ứng đặc biệt khi chuyển mục</b>, tôi cũng
                muốn làm một{" "}
                <b>cơ sở dữ liệu để có thể lưu trữ thông tin khách hàng</b>{" "}
                <span style={{ color: "gray" }}>(yêu cầu đặc biệt)</span>.
              </div>
            </div>
            <div className="create-enterprise-body-request-form-bottom">
              <div className="create-enterprise-body-request-form-bottom-note">
                <div className="create-enterprise-body-request-form-bottom-note-title">
                  Lưu ý:
                </div>
                <div className="create-enterprise-body-request-form-bottom-note-content">
                  Bạn cần nhập đúng theo format trên để hỗ trợ viên có thể dễ
                  dàng nắm bắt thông tin cần thiết.{" "}
                </div>
              </div>
              <div className="create-enterprise-body-request-form-bottom-note">
                <div
                  style={{ marginLeft: "10px" }}
                  className="create-enterprise-body-request-form-bottom-note-title"
                >
                  Mẹo:
                </div>
                <div className="create-enterprise-body-request-form-bottom-note-content">
                  Bạn có thể copy mẫu trên và sửa lại các thông tin phù hợp với
                  bạn.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="create-enterprise-bottom">
        <div className="create-enterprise-bottom-option">
          <div className="create-enterprise-bottom-choose-color-title">
            <div className="create-enterprise-bottom-choose-color-title-info">
              Màu sắc cho website / phần mềm của bạn{" "}
            </div>
          </div>
          <div className="create-enterprise-bottom-choose-color-box">
            <div className="create-enterprise-bottom-choose-color-box-heading">
              <div className="create-enterprise-bottom-choose-color-box-heading-option">
                <button
                  style={{ backgroundColor: color }}
                  onClick={() =>
                    setShowColorPicker((showColorPicker) => !showColorPicker)
                  }
                  className="create-enterprise-bottom-choose-color-box-heading-add-color"
                ></button>
                <div className="create-enterprise-bottom-choose-color-box-heading-color-table">
                  {showColorPicker && (
                    <TwitterPicker
                      color={color}
                      onChange={(updateColor) => {
                        setColor(updateColor.hex);
                        setShowColorPicker(false);
                      }}
                    />
                  )}
                </div>
                <div className="create-enterprise-bottom-choose-color-box-heading-name-color">
                  {color}
                </div>
              </div>
            </div>
            <div className="create-enterprise-bottom-choose-color-box-body">
              <div
                style={{
                  backgroundColor: hexToRgbA(color, 1),
                }}
                className="box-body-circles-1"
              ></div>
              <div
                style={{
                  backgroundColor: hexToRgbA(color, 0.15),
                }}
                className="box-body-circles-2"
              ></div>
              <div
                style={{
                  backgroundColor: hexToRgbA(color, 0.16),
                }}
                className="box-body-circles-3"
              ></div>
              <div
                style={{
                  backgroundColor: hexToRgbA(color, 0.17),
                }}
                className="box-body-circles-4"
              ></div>
              <div
                style={{
                  backgroundColor: hexToRgbA(color, 0.18),
                }}
                className="box-body-circles-5"
              ></div>
              <div
                style={{
                  backgroundColor: hexToRgbA(color, 0.19),
                }}
                className="box-body-circles-6"
              ></div>
              <div
                style={{
                  backgroundColor: hexToRgbA(color, 0.21),
                }}
                className="box-body-circles-7"
              ></div>
              <div
                style={{
                  backgroundColor: hexToRgbA(color, 0.25),
                }}
                className="box-body-circles-8"
              ></div>
              <div
                style={{
                  backgroundColor: hexToRgbA(color, 0.48),
                }}
                className="box-body-circles-9"
              ></div>
              <div
                style={{
                  backgroundColor: hexToRgbA(color, 1),
                }}
                className="box-body-circles-10"
              ></div>
            </div>
            <div className="create-enterprise-bottom-choose-color-box-bottom">
              <div className="create-enterprise-bottom-choose-color-box-bottom-info">
                Nếu muốn có thêm nhiều lựa chọn hơn cho màu sắc website / phần
                mềm DEEDWORD có thể
                <button className="create-enterprise-bottom-choose-color-box-bottom-btn">
                  hỗ trợ
                </button>
                <span style={{ marginLeft: "3px" }}>bạn</span>
              </div>
            </div>
          </div>
          <div className="create-enterprise-bottom-choose-color-title">
            <div className="create-enterprise-bottom-choose-color-title-info">
              Một vài hình ảnh liên quan đến website / phần mềm của bạn
            </div>
          </div>
          <div className="create-enterprise-bottom-choose-box">
            <input type="file" id="picture-hidden" />
            <label
              className="create-enterprise-bottom-choose"
              for="picture-hidden"
            >
              <div className="create-enterprise-bottom-choose-icon">
                <AiOutlinePicture size={60} />
              </div>
              <div className="create-enterprise-bottom-choose-title">
                Thêm ảnh
              </div>
            </label>
            <input type="file" id="folder-hidden" />
            <label
              for="folder-hidden"
              className="create-enterprise-bottom-choose"
            >
              <div className="create-enterprise-bottom-choose-icon">
                <HiOutlineFolder size={60} />
              </div>
              <div className="create-enterprise-bottom-choose-title">
                Thêm tệp
              </div>
            </label>
          </div>
        </div>
        <div className="create-enterprise-bottom-img-btn">
          <div className="create-enterprise-bottom-img">
            <img src={img} alt="" width={500} height={350} />
          </div>

          <div className="create-enterprise-bottom-btn">
            <button className="create-enterprise-bottom-btn-confirm">
              Xong
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
