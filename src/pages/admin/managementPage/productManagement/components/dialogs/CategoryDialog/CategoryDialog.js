import { useEffect, useRef, useState} from "react";
import "./style.scss";
import {HiOutlineTrash, HiPlus} from 'react-icons/hi';
import {BsCheckLg} from 'react-icons/bs';
import {MdOutlineClose} from "react-icons/md";
import {toast} from "react-toastify";
import {useCookies} from "react-cookie";
import {FiEdit3} from "react-icons/fi";
import {ConfigProvider, Popconfirm} from "antd";
import {isStartWithLetter} from '@Utils';
import {API, CATEGORY, CATEGORY_DIALOG, MESSAGE, POPCONFIRM} from "@Const";

const categoriesData = [
  {
    "categoryID": 1,
    "categoryName": "Áo Nam",
    "parentCategoryID": null,
    "imagePath": "https://iili.io/JR4gFGs.md.png",
    "products": null,
    "subCategories": [
      {
        "categoryID": 2,
        "categoryName": "Áo Thun",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXHIj.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 3,
        "categoryName": "Áo Khoác",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXFEB.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 4,
        "categoryName": "Áo Polo",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXq21.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 8,
        "categoryName": "Áo Sơ Mi",
        "parentCategoryID": 1,
        "imagePath": "https://iili.io/J5HXCkg.webp",
        "products": null,
        "subCategories": null
      }
    ]
  },
  {
    "categoryID": 5,
    "categoryName": "Quần Nam",
    "parentCategoryID": null,
    "imagePath": "https://iili.io/JR4gFGs.md.png",
    "products": null,
    "subCategories": [
      {
        "categoryID": 7,
        "categoryName": "Quần Short Thể Thao",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXUGV.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 9,
        "categoryName": "Quần Dài Kaki",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXNyu.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 10,
        "categoryName": "Quần Short Kaki",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXUGV.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 11,
        "categoryName": "Quần Short Tây",
        "parentCategoryID": 5,
        "imagePath": "https://iili.io/J5HXLua.webp",
        "products": null,
        "subCategories": null
      }
    ]
  },
  {
    "categoryID": 12,
    "categoryName": "Quần Lót",
    "parentCategoryID": null,
    "imagePath": "https://iili.io/JR4gFGs.md.png",
    "products": null,
    "subCategories": [
      {
        "categoryID": 13,
        "categoryName": "Quần Lót Boxer",
        "parentCategoryID": 12,
        "imagePath": "https://iili.io/J5HjR5X.webp",
        "products": null,
        "subCategories": null
      },
      {
        "categoryID": 14,
        "categoryName": "Quần Lót Brief",
        "parentCategoryID": 12,
        "imagePath": "https://iili.io/J5HjR5X.webp",
        "products": null,
        "subCategories": null
      }
    ]
  },
  {
    "categoryID": 15,
    "categoryName": "Phụ Kiện",
    "parentCategoryID": null,
    "imagePath": "https://iili.io/JR4gFGs.md.png",
    "products": null,
    "subCategories": [
      {
        "categoryID": 16,
        "categoryName": "Tất Nam",
        "parentCategoryID": 15,
        "imagePath": "https://iili.io/J5HwxTu.jpg",
        "products": null,
        "subCategories": null
      }
    ]
  }
];

const CategoryDialog = ({ onClose, onConfirm }) => {
  const [cookies] = useCookies(['access_token']);
  const accessToken = cookies.access_token;

  const [selectedParentCategory, setSelectedParentCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [inputValue, setInputValue] = useState('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [isAddingSubCategory, setIsAddingSubCategory] = useState(false);

  const inputCategoryRef = useRef(null);
  const inputSubCategoryRef = useRef(null);

  const [categories, setCategories] = useState([]);

  const [editingCategoryID, setEditingCategoryID] = useState(null);

  const handleButtonCloseClick = () => {
    onClose();
  };

  const handleSubmitCategoryDialog = () => {
    onConfirm(selectedCategory, selectedParentCategory);
  };

  const initData = async () => {
    setCategories(categoriesData);
  }

  useEffect(() => {
    initData().then(r => {});
  }, []);

  useEffect(() => {
    if (isAddingCategory && inputCategoryRef) {
      inputCategoryRef.current.focus();
    }
  }, [isAddingCategory]);

  useEffect(() => {
    if (editingCategoryID && inputCategoryRef) {
      inputCategoryRef.current.focus();
    }
  }, [editingCategoryID]);

  useEffect(() => {
    if (isAddingSubCategory && inputSubCategoryRef) {
      inputSubCategoryRef.current.focus();
    }
  }, [isAddingSubCategory]);

  useEffect(() => {
    if (selectedParentCategory) {
      setSelectedParentCategory(categories.find((category) => category.categoryID === selectedParentCategory.categoryID));
    }

    if (selectedCategory) {
      for (const category of categories) {
        const foundSubCategory = category.subCategories.find((subCategory) => subCategory.categoryID === selectedCategory.categoryID);
        if (foundSubCategory) {
          setSelectedCategory(foundSubCategory);
          break;
        }
      }
    }

  }, [categories]);

  const getSubCategoriesByParentCategoryID = (categoryID) => {
    const selectedCategory = categories.find((category) => category.categoryID === categoryID);
    return selectedCategory ? (selectedCategory.subCategories ? selectedCategory.subCategories : []) : [];
  };

  const handleCategoryClick = (category) => {
    handleCancelCategoryClick();
    handleCancelSubCategoryClick();
    setSelectedCategory(null);
    setSelectedParentCategory(category);
  };

  const handleSubCategoryClick = (subCategory) => {
    handleCancelCategoryClick();
    handleCancelSubCategoryClick();
    setSelectedCategory(subCategory);
  };

  const handleAddCategoryClick = () => {
    setSelectedCategory(null);
    setEditingCategoryID(null);
    setSelectedParentCategory(null);
    setInputValue("");
    handleCancelSubCategoryClick();
    setIsAddingCategory(true);
  };

  const handleAddSubCategoryClick = () => {
    setSelectedCategory(null);
    setEditingCategoryID(null);
    setInputValue("");
    setIsAddingSubCategory(true);
  };

  const handleEditCategoryClick = (e, categoryID, categoryName) => {
    e.stopPropagation();
    setIsAddingSubCategory(false);
    setInputValue(categoryName);
    setEditingCategoryID(categoryID);
  }

  const handleCancelSubCategoryClick = (e) => {
    if (e) e.stopPropagation();
    setInputValue("");
    setIsAddingSubCategory(false);
  };

  const handleCancelCategoryClick = (e) => {
    if (e) e.stopPropagation();
    setInputValue("");
    setIsAddingCategory(false);
    setEditingCategoryID(null);
  };

  return (
    <div className="modal" id="modal-auth" style={{ display: 'flex', alignItems:"center", justifyContent:"center" }}>
      <div className="fashion-store-modal__content fashion-store-modal__content--normal" style={{width:"700px"}}>
        <div className="fashion-store-modal__header" style={{position: "relative"}}>

          <div className="btn-close category-dialog-btn-close pointer-cursor"
               aria-label="Close"
               onClick={handleButtonCloseClick}
          />

          <div className="fashion-store-modal__header-inner fashion-store-modal__header-inner__has-close">
            <div className="fashion-store-modal__title">{CATEGORY_DIALOG.EDIT_CATEGORY}</div>
          </div>
        </div>

        <div className="fashion-store-modal__body over-height" style={{position: "relative"}}>
          <div data-v-59dc2242="" className="category-selector-wrap">
            <div data-v-38ab3376="" data-v-59dc2242="" className="category-selector category-selector">
              <div data-v-38ab3376="" className="selector" style={{marginBottom:"30px", paddingTop:"2px"}}>
                <div data-v-38ab3376="" className="category-wrap">
                  <div data-v-38ab3376="" className="category-list">

                    <ul data-v-38ab3376="" className="scroll-item" style={{paddingLeft:"5px"}}>

                      {isAddingCategory ?
                          <li data-v-38ab3376="" className="category-item" style={{background:"white"}}>
                            <div data-v-38ab3376="" className="text-overflow">
                              <input className="input-category"
                                     type="text" ref={inputCategoryRef}
                                     value={inputValue}
                                     onChange={(e) => setInputValue(e.target.value)}
                              />
                            </div>
                            <div data-v-38ab3376="" className="category-item-right">
                              <MdOutlineClose onClick={(e) => handleCancelCategoryClick(e)} className="btn-add pointer-cursor" style={{marginRight:"5px"}}/>
                              <BsCheckLg className="btn-add pointer-cursor"/>
                            </div>
                          </li>
                          :
                          <li data-v-38ab3376="" className="category-item" onClick={handleAddCategoryClick}>
                            <div data-v-38ab3376="" className="text-overflow">
                              <HiPlus className="btn-add pointer-cursor" style={{marginBottom:"3px", marginRight:"5px"}}/> {CATEGORY_DIALOG.ADD_CATEGORY}
                            </div>
                          </li>
                      }

                      {categories && categories.map((category, index) => (
                        <div key={index}>
                          {editingCategoryID && category.categoryID === editingCategoryID ?
                            <li data-v-38ab3376="" className="category-item" style={{background:"white"}}>
                              <div data-v-38ab3376="" className="text-overflow">
                                <input className="input-category"
                                       style={{borderBottom: "1px solid #bd0000"}}
                                       type="text" ref={inputCategoryRef}
                                       value={inputValue}
                                       onChange={(e) => setInputValue(e.target.value)}
                                />
                              </div>
                              <div data-v-38ab3376="" className="category-item-right">
                                <MdOutlineClose onClick={(e) => handleCancelCategoryClick(e)} className="btn-add pointer-cursor" style={{marginRight:"5px", color:"#bd0000"}}/>
                                <BsCheckLg className="btn-add pointer-cursor"  style={{color:"#bd0000"}}/>
                              </div>
                            </li>
                            :
                            <li data-v-38ab3376="" className="category-item" onClick={() => handleCategoryClick(category)}>
                              <p data-v-38ab3376="" className={`text-overflow ${selectedParentCategory && category.categoryID === selectedParentCategory.categoryID ? 'selected-category' : ''}`}>
                                {category.categoryName}
                              </p>

                              { selectedParentCategory && category.categoryID === selectedParentCategory.categoryID ?
                                  <div data-v-38ab3376="" className="category-item-right">
                                    <FiEdit3  onClick={(e) => handleEditCategoryClick(e, category.categoryID, category.categoryName)}
                                              className="selected-category btn-add pointer-cursor"
                                              style={{marginRight:"6px"}}
                                    />

                                    <ConfigProvider
                                        button={{
                                          style: { width: 80, margin: 4 },
                                        }}
                                        theme={{
                                          components: {
                                            Button: {
                                              colorPrimary: '#bd0000',
                                              colorPrimaryHover: '#dc3636',
                                              colorPrimaryActive: '#b20a0a',
                                              primaryShadow: '0 2px 0 #ffe6e6',
                                            },
                                          },
                                        }}
                                    >
                                      <Popconfirm
                                          placement="top"
                                          title={POPCONFIRM.CONFIRM_DELETE_CATEGORY}
                                          description={POPCONFIRM.DELETE_PARENT_CATEGORY_WARNING}
                                          okText={POPCONFIRM.DELETE}
                                          cancelText={POPCONFIRM.CANCEL}
                                      >
                                        <HiOutlineTrash className="selected-category btn-delete pointer-cursor"/>
                                      </Popconfirm>
                                    </ConfigProvider>
                                  </div>
                                  :
                                  <div data-v-38ab3376="" className="category-item-right">
                                    <i data-v-38ab3376="" className="icon-next fashion-store-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                      </svg>
                                    </i>
                                  </div>
                              }
                            </li>
                          }
                        </div>
                      ))}
                    </ul>

                    <ul data-v-38ab3376="" className="scroll-item" style={{paddingLeft:"6px"}}>
                      { selectedParentCategory &&
                          <div>
                            {isAddingSubCategory ?
                                <li data-v-38ab3376="" className="category-item" style={{background:"white"}}>
                                  <div data-v-38ab3376="" className="text-overflow">
                                    <input className="input-category"
                                           type="text" ref={inputSubCategoryRef}
                                           value={inputValue}
                                           onChange={(e) => setInputValue(e.target.value)}/>
                                  </div>
                                  <div data-v-38ab3376="" className="category-item-right">
                                    <MdOutlineClose onClick={(e) => handleCancelSubCategoryClick(e)} className="btn-add pointer-cursor" style={{marginRight:"5px"}}/>
                                    <BsCheckLg className="btn-add pointer-cursor"/>
                                  </div>
                                </li>
                                :
                                <li data-v-38ab3376="" className="category-item" onClick={handleAddSubCategoryClick}>
                                  <div data-v-38ab3376="" className="text-overflow">
                                    <HiPlus className="btn-add pointer-cursor" style={{marginBottom:"3px", marginRight:"5px"}}/> {CATEGORY_DIALOG.ADD_CATEGORY}
                                  </div>
                                </li>
                            }
                          </div>
                      }

                      { selectedParentCategory &&
                        getSubCategoriesByParentCategoryID(selectedParentCategory.categoryID).map((subCategory, index) => (
                          <div key={index}>
                            {editingCategoryID && subCategory.categoryID === editingCategoryID ?
                              <li data-v-38ab3376="" className="category-item" style={{background:"white"}}>
                                <div data-v-38ab3376="" className="text-overflow">
                                  <input className="input-category"
                                         style={{borderBottom: "1px solid #bd0000"}}
                                         type="text" ref={inputCategoryRef}
                                         value={inputValue}
                                         onChange={(e) => setInputValue(e.target.value)}
                                  />
                                </div>
                                <div data-v-38ab3376="" className="category-item-right">
                                  <MdOutlineClose onClick={(e) => handleCancelCategoryClick(e)} className="btn-add pointer-cursor" style={{marginRight:"5px", color:"#bd0000"}}/>
                                  <BsCheckLg className="btn-add pointer-cursor"  style={{color:"#bd0000"}}/>
                                </div>
                              </li>
                              :
                              <li data-v-38ab3376="" className="category-item" onClick={() => handleSubCategoryClick(subCategory)}>
                                <p data-v-38ab3376="" className={`text-overflow ${selectedCategory && subCategory.categoryID === selectedCategory.categoryID ? 'selected-category' : ''}`}>
                                  {subCategory.categoryName}
                                </p>
                                { selectedCategory && subCategory.categoryID === selectedCategory.categoryID &&
                                    <div data-v-38ab3376="" className="category-item-right">
                                      <FiEdit3  onClick={(e) => handleEditCategoryClick(e, subCategory.categoryID, subCategory.categoryName)}
                                                className="selected-category btn-add pointer-cursor" style={{marginRight:"6px"}}/>

                                      <ConfigProvider
                                          button={{
                                            style: { width: 80, margin: 4 },
                                          }}
                                          theme={{
                                            components: {
                                              Button: {
                                                colorPrimary: '#bd0000',
                                                colorPrimaryHover: '#dc3636',
                                                colorPrimaryActive: '#b20a0a',
                                                primaryShadow: '0 2px 0 #ffe6e6',
                                              },
                                            },
                                          }}
                                      >
                                        <Popconfirm
                                            placement="top"
                                            title={POPCONFIRM.CONFIRM_DELETE_CATEGORY}
                                            description={POPCONFIRM.DELETE_SUB_CATEGORY_WARNING}
                                            okText={POPCONFIRM.DELETE}
                                            cancelText={POPCONFIRM.CANCEL}
                                        >
                                          <HiOutlineTrash className="selected-category btn-delete pointer-cursor"/>
                                        </Popconfirm>
                                      </ConfigProvider>

                                    </div>
                                }
                              </li>
                            }
                          </div>
                        ))
                      }
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fashion-store-modal__footer with-assist">
          <div data-v-59dc2242="" className="category-selected" style={{display:"flex"}}>
            <span data-v-59dc2242="" className="label" style={{fontSize:"14px", marginRight: "5px"}}>{CATEGORY_DIALOG.SELECTED}</span>

            {selectedParentCategory ?
              <span style={{fontSize:"14px", marginRight: "5px"}} >
                {selectedParentCategory.categoryName}
                {selectedCategory && (" > " + selectedCategory.categoryName) }
              </span>
              :
              <span style={{fontSize:"14px", marginRight: "5px"}} >{CATEGORY_DIALOG.NOT_SELECTED_CATEGORY}</span>
            }

          </div>

          <div className="fashion-store-modal__footer-buttons">
            <button type="button"
                    className="fashion-store-button fashion-store-button--normal"
                    onClick={handleButtonCloseClick}>
              <span>{CATEGORY_DIALOG.CANCEL_BTN}</span>
            </button>

            {selectedCategory && selectedParentCategory ?
                <button type="button"
                        onClick={handleSubmitCategoryDialog}
                        className="fashion-store-button fashion-store-button--primary fashion-store-button--normal">
                  <span>{CATEGORY_DIALOG.ACCEPT_BTN}</span>
                </button>
                :
                <button type="button" disabled="disabled"
                        className="fashion-store-button fashion-store-button--primary fashion-store-button--normal disabled">
                  <span>{CATEGORY_DIALOG.ACCEPT_BTN}</span>
                </button>
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryDialog;
