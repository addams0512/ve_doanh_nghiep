import React from "react";
import { BiDotsHorizontalRounded, BiSearch } from "react-icons/bi";
import { Listfriend } from "../data/Listfirend";
import { useState } from "react";
import { TiUserDelete } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { RiUserShared2Line, RiChatSmile3Line } from "react-icons/ri";
import "./Phonebook.css";

export default function Phonebook() {
  const [fillterRunName, setFillterRunName] = useState(Listfriend);
  const [clickFriendDisplay, setClickFriendDisplay] = useState();
  const [onClickOption, setOnClickOption] = useState();
  const [displayForm, setDisplayForm] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [closeAddFriendDisplay, setCloseAddFriendDisplay] = useState(false);
  const [clickAlphabet, setClickAlphabet] = useState(false);

  function closeaddfriend() {
    setCloseAddFriendDisplay(false);
  }
  function closelistfriend() {
    setCloseAddFriendDisplay(true);
  }
  // bấm vào chữ cái để hiện ra tên có chữ cái đó
  function findname(name, id) {
    const array = Listfriend.filter((e) => e.name[0] === name);
    setFillterRunName(array);
    setChooseAlphabet(
      alphabet.map((item) => {
        if (item.id === id) {
          item.choose = !item.choose;
        }
        return item;
      })
    );
  }
  //  chọn một bạn bất kì trong map
  const clickFriend = () => {
    setClickFriendDisplay(
      Listfriend.map((item) => {
        return item;
      })
    );
  };
  // chọn vào dấu ba chấm bất kì trong map
  const showdropdown = (id) => {
    setOnClickOption(
      Listfriend.map((item) => {
        if (item.id === id) {
          item.click = !item.click;
        } else {
          item.click = false;
        }
        return item;
      })
    );
  };
  // xóa bạn bát kì trong map khi bấm vào nút xóa
  const deletefriend = () => {
    setFillterRunName(
      filterOutData.filter((item) => {
        return item.id !== currentId;
      })
    );
    setDisplayForm(!displayForm);
  };
  const filterOutData = fillterRunName.filter((item) => {
    return !item.onClose;
  });
  const alphabet = [
    {
      id: 1,
      choose: false,
      name: "A",
    },
    {
      id: 2,
      choose: false,
      name: "B",
    },
    {
      id: 3,
      choose: false,
      name: "C",
    },
    {
      id: 4,
      choose: false,
      name: "D",
    },
    {
      id: 5,
      choose: false,
      name: "E",
    },
    {
      id: 6,
      choose: false,
      name: "F",
    },
    {
      id: 7,
      choose: false,
      name: "G",
    },
    {
      id: 8,
      choose: false,
      name: "H",
    },
    {
      id: 9,
      choose: false,
      name: "I",
    },
    {
      id: 10,
      choose: false,
      name: "J",
    },
    {
      id: 11,
      choose: false,
      name: "K",
    },
    {
      id: 12,
      choose: false,
      name: "L",
    },
    {
      id: 13,
      choose: false,
      name: "M",
    },
    {
      id: 14,
      choose: false,
      name: "N",
    },
    {
      id: 15,
      choose: false,
      name: "O",
    },
    {
      id: 16,
      choose: false,
      name: "P",
    },

    {
      id: 17,
      choose: false,
      name: "Q",
    },
    {
      id: 18,
      choose: false,
      name: "R",
    },
    {
      id: 19,
      choose: false,
      name: "S",
    },
    {
      id: 20,
      choose: false,
      name: "T",
    },
    {
      id: 21,
      choose: false,
      name: "U",
    },
    {
      id: 22,
      choose: false,
      name: "V",
    },
    {
      id: 23,
      choose: false,
      name: "W",
    },
    {
      id: 24,
      choose: false,
      name: "X",
    },
    {
      id: 25,
      choose: false,
      name: "Y",
    },
    {
      id: 26,
      choose: false,
      name: "Z",
    },
  ];
  const [chooseAlphabet, setChooseAlphabet] = useState(alphabet);
  return (
    <div className="list-friend-container">
      {displayForm && (
        <div className="list-friend-body-friendlistd-accept-cancel">
          <div className="list-friend-body-friendlist-format-cancel">
            <div className="format-cancel-heading">
              <p>Bạn có chắc chắn muốn xóa người này không ?</p>
            </div>
            <div className="format-cancel-body">
              <h5>Nếu bạn xác nhận xóa , bạn sẽ mất đi người bạn này.</h5>
            </div>
            <div className="format-cancel-bottom">
              <div className="format-cancel-bottom-btn">
                <div
                  onClick={() => {
                    setDisplayForm(false);
                  }}
                  className="format-cancel-bottom-btn-cancel"
                >
                  <p>Hủy</p>
                </div>
                <div
                  onClick={() => {
                    deletefriend(currentId);
                  }}
                  className="format-cancel-bottom-btn-accept"
                >
                  <p> Xác nhận</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="list-friend">
        <div className="list-friend-heading">
          <div className="list-friend-heading-left">
            <div className="list-friend-heading-tittle">Danh bạ</div>
            <div className="list-friend-heading-content">
              Kết nối với bạn bè
            </div>
          </div>
          <div className="list-friend-heading-right">
            <butto
              onClick={closelistfriend}
              className="list-friend-heading-add-friend"
            >
              <div className="list-friend-heading-add-friend-content">
                Thêm bạn bè
              </div>
            </butto>
          </div>
        </div>
        <div className="list-friend-body">
          <div className="list-friend-body-tittle-all">
            <button
              onClick={() => {
                setFillterRunName(Listfriend);
                setChooseAlphabet(alphabet);
              }}
              className="list-friend-body-tittle-btn"
            >
              Tất cả
            </button>
            <div className="list-friend-body-tittle"> Bạn bè</div>
            <div className="list-friend-body-tittle">Mối quan hệ</div>
            <div className="list-friend-body-tittle">
              Thời gian trở thành bạn bè
            </div>
            <div className="list-friend-body-tittle">Trạng thái</div>
            <div className="list-friend-body-tittle">Hành động</div>
          </div>
          <div className="list-friend-body-friendlist">
            <div className="list-friend-body-friendlist-alphabetic">
              {chooseAlphabet.map((x) => {
                return (
                  <button
                    onClick={() => findname(x.name, x.id)}
                    key={x.id}
                    className={
                      x.choose
                        ? "list-friend-body-friendlist-alphabetic1"
                        : "list-friend-body-friendlist-alphabetic2"
                    }
                  >
                    {x.name}
                  </button>
                );
              })}
            </div>
            <div>
              {fillterRunName.map((element) => {
                return (
                  <div
                    onClick={() => {
                      clickFriend(element.id);
                    }}
                    key={element.id}
                    className={
                      element.choose
                        ? "list-friend-body-friendlist-all"
                        : "list-friend-body-friendlist-all-info-choose"
                    }
                  >
                    <div className="list-friend-body-friendlist-friend">
                      <div className="list-friend-body-friendlist-img"></div>
                      <div className="list-friend-body-friendlist-name">
                        {element.name}
                      </div>
                    </div>
                    <div className="list-friend-body-friendlist-relationship">
                      {element.relationship}
                    </div>
                    <div className="list-friend-body-friendlist-time">
                      {element.time}
                    </div>
                    <div
                      style={
                        element.status === "Bạn bè"
                          ? {
                              backgroundColor: " rgb(179, 239, 179)",
                              color: "green",
                              border: "1px solid green",
                            }
                          : element.status === "Từ chối"
                          ? {
                              backgroundColor: " rgb(255, 200, 200)",
                              color: "red",
                              border: "1px solid red",
                            }
                          : {
                              backgroundColor: "rgb(255, 253, 200)",
                              color: "rgb(234, 209, 50)",
                              border: "1px solid rgb(234, 209, 50)",
                            }
                      }
                      className="list-friend-body-friendlist-status"
                    >
                      {element.status}
                    </div>
                    <div className=" list-friend-body-friendlist-actions ">
                      <div
                        onClick={() => {
                          showdropdown(element.id);
                        }}
                        key={element.id}
                        className={
                          element.choose
                            ? "list-friend-body-friendlist-actions-icon"
                            : "list-friend-body-friendlist-actions-icon-info"
                        }
                      >
                        <BiDotsHorizontalRounded size={30} />
                      </div>
                      {""}
                      {element.click && (
                        <div className="list-friend-body-friendlist-actions-dropdow">
                          <div
                            onClick={() => {
                              showdropdown(element.id);
                            }}
                            className="dropdown-after-close"
                          />
                          <div class="dropdown-after">
                            <div className="dropdown-all">
                              <button className="dropdown-info">
                                <div className="dropdown-info-icon">
                                  {" "}
                                  <RiChatSmile3Line size={20} />{" "}
                                </div>
                                <p style={{ marginLeft: "10px" }}>Trò chuyện</p>
                              </button>
                              <button className="dropdown-info">
                                <div className="dropdown-info-icon">
                                  <RiUserShared2Line size={20} />
                                </div>
                                <p style={{ marginLeft: "10px" }}> Đến thăm</p>
                              </button>

                              <button
                                className="dropdown-info"
                                onClick={() => {
                                  setDisplayForm(true);
                                  setCurrentId(element.id);
                                }}
                              >
                                <div className="dropdown-info-icon">
                                  {" "}
                                  <TiUserDelete size={20} />
                                </div>
                                <p style={{ marginLeft: "10px" }}>
                                  Hủy kết bạn
                                </p>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {closeAddFriendDisplay && (
        <div className="list-friend-click-add-friend">
          <div className="click-add-friend-container">
            <div className="click-add-friend-btn-container">
              <button onClick={closeaddfriend} className="click-add-friend-btn">
                <AiOutlineClose size={25} />
              </button>
            </div>
            <div className="click-add-friend-search-bar-all">
              <div className="click-add-friend-search-bar">
                <div className="click-add-friend-icon">
                  <BiSearch size={30} />
                </div>
                <input
                  type="text"
                  placeholder="Tên,SDT"
                  className="click-add-friend-input-search"
                ></input>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
