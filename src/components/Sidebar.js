import React from 'react'

const Sidebar = () => {
  return (
    <div>
    {/* SIDEBAR */}
    <aside class="app-sidebar" id="sidebar">

    <div class="main-sidebar-header">
        <a href="index.html" class="header-logo">
            <img src="build/assets/img/brand-logos/desktop-logo.png" alt="logo"
                class="main-logo desktop-logo"/>
            <img src="build/assets/img/brand-logos/toggle-logo.png" alt="logo"
                class="main-logo toggle-logo"/>
            <img src="build/assets/img/brand-logos/desktop-dark.png" alt="logo"
                class="main-logo desktop-dark"/>
            <img src="build/assets/img/brand-logos/toggle-dark.png" alt="logo"
                class="main-logo toggle-dark"/>
        </a>
    </div>
   
    <div class="main-sidebar " id="sidebar-scroll">

        {/* Start::nav */}
        <nav class="main-menu-container nav nav-pills flex-column sub-open">
            <div class="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                    width="24" height="24" viewBox="0 0 24 24">
                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                </svg></div>
            <ul class="main-menu">
                {/* Start::slide__category */}
                <li class="slide__category"><span class="category-name">Main</span></li>
                {/* End::slide__category */}

                {/* Start::slide */}
                <li class="slide  has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-home-8-line side-menu__icon"></i>
                        <span class="side-menu__label">Dashboards</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Dashboards</a></li>
                        <li class="slide"><a href="index.html" class="side-menu__item">Sales</a></li>
                        <li class="slide"><a href="index2.html" class="side-menu__item">Ecommerce</a></li>
                        <li class="slide"><a href="index3.html" class="side-menu__item">Crypto</a></li>
                        <li class="slide"><a href="index4.html" class="side-menu__item">Jobs</a></li>
                        <li class="slide"><a href="index5.html" class="side-menu__item">NFT</a></li>
                        <li class="slide"><a href="index6.html" class="side-menu__item">Analytics</a></li>
                        <li class="slide"><a href="index7.html" class="side-menu__item">Projects</a></li>
                        <li class="slide"><a href="index8.html" class="side-menu__item">HRM</a></li>
                        <li class="slide"><a href="index9.html" class="side-menu__item">CRM</a></li>
                        <li class="slide"><a href="index10.html" class="side-menu__item">Personal</a></li>
                        <li class="slide"><a href="index11.html" class="side-menu__item">Stocks</a></li>
                        <li class="slide"><a href="index12.html" class="side-menu__item">Course</a></li>
                    </ul>
                </li>
                {/* End::slide */}

                {/* Start::slide */}
                <li class="slide">
                    <a href="widgets.html" class="side-menu__item">
                        <i class="ri-apps-2-line side-menu__icon"></i>
                        <span class="side-menu__label">Widgets</span>
                    </a>
                </li>
                {/* End::slide */}

                {/* Start::slide__category */}
                <li class="slide__category"><span class="category-name">General</span></li>
                {/* End::slide__category */}

                {/* Start::slide */}
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-inbox-line side-menu__icon"></i>
                        <span class="side-menu__label">Components</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Components</a></li>
                        <li class="slide"><a href="accordion.html" class="side-menu__item">Accordion</a>
                        </li>
                        <li class="slide"><a href="alerts.html" class="side-menu__item">Alerts</a></li>
                        <li class="slide"><a href="avatars.html" class="side-menu__item">Avatars</a></li>
                        <li class="slide"><a href="badges.html" class="side-menu__item">Badges</a></li>
                        <li class="slide"><a href="blockquotes.html" class="side-menu__item">Blockquotes</a>
                        </li>
                        <li class="slide"><a href="buttons.html" class="side-menu__item">Buttons</a></li>
                        <li class="slide"><a href="cards.html" class="side-menu__item">Cards</a></li>
                        <li class="slide"><a href="collapse.html" class="side-menu__item">Collapse</a></li>
                        <li class="slide"><a href="list-group.html" class="side-menu__item">List Group</a>
                        </li>
                        <li class="slide"><a href="list-page.html" class="side-menu__item">List</a></li>
                        <li class="slide"><a href="indicators.html" class="side-menu__item">Indicators</a>
                        </li>
                        <li class="slide"><a href="progress.html" class="side-menu__item">Progress</a></li>
                        <li class="slide"><a href="skeleton.html" class="side-menu__item">Skeleton</a></li>
                        <li class="slide"><a href="spinners.html" class="side-menu__item">Spinners</a></li>
                        <li class="slide"><a href="toast.html" class="side-menu__item">Toast</a></li>
                    </ul>
                </li>
                {/* End::slide */}

                {/* Start::slide */}
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-cpu-line side-menu__icon"></i>
                        <span class="side-menu__label">Elements</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Elements</a></li>
                        <li class="slide"><a href="navbar.html" class="side-menu__item">Navbar</a></li>
                        <li class="slide"><a href="mega-menu.html" class="side-menu__item">Mega Menu</a>
                        </li>
                        <li class="slide"><a href="tabs.html" class="side-menu__item">Nav &amp; Tabs</a>
                        </li>
                        <li class="slide"><a href="scrollspy.html" class="side-menu__item">Scrollspy</a>
                        </li>
                        <li class="slide"><a href="breadcrumb.html" class="side-menu__item">Breadcrumb</a>
                        </li>
                        <li class="slide"><a href="pagination.html" class="side-menu__item">Pagination</a>
                        </li>
                        <li class="slide"><a href="grid.html" class="side-menu__item">Grids</a></li>
                        <li class="slide"><a href="columns.html" class="side-menu__item"> Columns</a></li>
                    </ul>
                </li>
                {/* End::slide */}

                {/* Start::slide */}
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-file-text-line side-menu__icon"></i>
                        <span class="side-menu__label">Forms</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Forms</a></li>
                        <li class="slide"><a href="form-elements.html" class="side-menu__item">Form
                                Elements</a></li>
                        <li class="slide"><a href="advanced-forms.html" class="side-menu__item">Advanced
                                Forms</a></li>
                        <li class="slide"><a href="form-inputgroup.html" class="side-menu__item">Form Input
                                Group</a></li>
                        <li class="slide"><a href="file-upload.html" class="side-menu__item">File
                                Uploads</a></li>
                        <li class="slide"><a href="form-checkbox.html" class="side-menu__item">Form
                                Checkbox</a></li>
                        <li class="slide"><a href="form-radio.html" class="side-menu__item">Form Radio</a>
                        </li>
                        <li class="slide"><a href="form-switch.html" class="side-menu__item">Form Switch</a>
                        </li>
                        <li class="slide"><a href="form-select.html" class="side-menu__item">Form Select</a>
                        </li>
                        <li class="slide"><a href="form-layouts.html" class="side-menu__item">Form
                                Layouts</a></li>
                        <li class="slide"><a href="form-validations.html" class="side-menu__item">Form
                                Validations</a></li>
                        <li class="slide"><a href="quil-editor.html" class="side-menu__item">Form Editor</a>
                        </li>
                    </ul>
                </li>
                {/* End::slide */}

                {/* Start::slide */}
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-stack-line side-menu__icon"></i>
                        <span class="side-menu__label">Advanced Ui</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Advanced Ui</a>
                        </li>
                        <li class="slide"><a href="rangeslider.html" class="side-menu__item">Rangeslider</a>
                        </li>
                        <li class="slide"><a href="calendar.html" class="side-menu__item">Calendar</a></li>
                        <li class="slide"><a href="carousel.html" class="side-menu__item">Carousel</a></li>
                        <li class="slide"><a href="gallery.html" class="side-menu__item">Gallery</a></li>
                        <li class="slide"><a href="sweetalert.html" class="side-menu__item">Sweetalert</a>
                        </li>
                        <li class="slide"><a href="ratings.html" class="side-menu__item">Rating</a></li>
                        <li class="slide"><a href="draggable.html" class="side-menu__item">Draggable
                                Cards</a></li>
                        <li class="slide"><a href="notifications.html"
                                class="side-menu__item">Notifications</a></li>
                        <li class="slide"><a href="treeview.html" class="side-menu__item">Treeview</a></li>
                        <li class="slide has-sub"><a href="javascript:void(0);" class="side-menu__item">File
                                Manager<i class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="filemanager.html" class="side-menu__item">File
                                        Manager</a>
                                </li>
                                <li class="slide"><a href="filemanager-list.html"
                                        class="side-menu__item">File Manager
                                        List</a></li>
                                <li class="slide"><a href="file-details.html" class="side-menu__item">File
                                        Details</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {/* End::slide */}

                {/* Start::slide */}
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-file-list-3-line side-menu__icon"></i>
                        <span class="side-menu__label">Basic Ui</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Basic Ui</a></li>
                        <li class="slide"><a href="dropdown.html" class="side-menu__item">Dropdown</a></li>
                        <li class="slide"><a href="modal.html" class="side-menu__item">Modal</a></li>
                        <li class="slide"><a href="offcanvas.html" class="side-menu__item">Offcanvas</a>
                        </li>
                        <li class="slide"><a href="tooltip-popovers.html" class="side-menu__item">Tooltips
                                &amp; Popovers</a></li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Tables<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="tables.html" class="side-menu__item">Basic
                                        Tables</a></li>
                                <li class="slide"><a href="datatables.html" class="side-menu__item">Data
                                        Tables</a></li>
                                <li class="slide"><a href="edittable.html" class="side-menu__item">Edit
                                        Tables</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {/* End::slide */}


                {/* Start::slide__category */}
                <li class="slide__category"><span class="category-name">Levels</span></li>
                {/* End::slide__category */}

                {/* Start::slide */}
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-node-tree side-menu__icon"></i>
                        <span class="side-menu__label">NestedMenu</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Nested Menu</a>
                        </li>
                        <li class="slide"><a href="javascript:void(0);" class="side-menu__item">Nested-1</a>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Nested-2<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="javascript:void(0);"
                                        class="side-menu__item">Nested-2-1</a>
                                </li>
                                <li class="slide has-sub"><a href="javascript:void(0);"
                                        class="side-menu__item">Nested-2-2<i
                                            class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul class="slide-menu child3">
                                        <li class="slide"><a href="javascript:void(0);"
                                                class="side-menu__item">Nested-2-2-1</a></li>
                                        <li class="slide"><a href="javascript:void(0);"
                                                class="side-menu__item">Nested-2-2-2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {/* End::slide */}

                {/* Start::slide__category */}
                <li class="slide__category"><span class="category-name">Maps &amp; charts</span></li>
                {/* End::slide__category */}

                {/* Start::slide */}
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-map-pin-user-line side-menu__icon"></i>
                        <span class="side-menu__label">Maps</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Maps</a></li>
                        <li class="slide"><a href="google-maps.html" class="side-menu__item">Google Maps</a>
                        </li>
                        <li class="slide"><a href="leaflet-maps.html" class="side-menu__item">Leaflet
                                Maps</a></li>
                        <li class="slide"><a href="vector-maps.html" class="side-menu__item">Vector Maps</a>
                        </li>
                    </ul>
                </li>
                {/* End::slide */}

                {/* Start::slide */}
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-pie-chart-2-line side-menu__icon"></i>
                        <span class="side-menu__label">Charts</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Charts</a></li>
                        <li class="slide"><a href="apex-charts.html" class="side-menu__item">Apex Charts</a>
                        </li>
                        <li class="slide"><a href="chartjs.html" class="side-menu__item">Chart JS</a></li>
                        <li class="slide"><a href="echartjs.html" class="side-menu__item">Echart Js</a></li>
                    </ul>
                </li>
                {/* End::slide */}


                {/* Start::slide__category */}
                <li class="slide__category"><span class="category-name">Pages</span></li>
                {/* End::slide__category */}

                {/* Start::slide */}
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-book-open-line side-menu__icon"></i>
                        <span class="side-menu__label">Pages</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Pages</a></li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Profile<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="profile.html" class="side-menu__item">Home</a>
                                </li>
                                <li class="slide"><a href="profile-settings.html"
                                        class="side-menu__item">Profile
                                        Settings</a></li>
                            </ul>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Invoice<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="invoice-list.html"
                                        class="side-menu__item">Invoice List</a>
                                </li>
                                <li class="slide"><a href="invoice.html" class="side-menu__item">Invoice
                                        Details</a>
                                </li>
                            </ul>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Blog<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="blog.html" class="side-menu__item">Blog</a></li>
                                <li class="slide"><a href="blog-details.html" class="side-menu__item">Blog
                                        Details</a>
                                </li>
                                <li class="slide"><a href="blog-edit.html" class="side-menu__item">Edit
                                        Blog</a></li>
                            </ul>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Mail<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="mail-inbox.html" class="side-menu__item">Mail
                                        Inbox</a></li>
                                <li class="slide"><a href="chat.html" class="side-menu__item">Chat</a></li>
                                <li class="slide"><a href="mail-settings.html" class="side-menu__item">Mail
                                        Settings</a>
                                </li>
                            </ul>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Ecommerce<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="products.html"
                                        class="side-menu__item">Products</a></li>
                                <li class="slide"><a href="product-list.html"
                                        class="side-menu__item">Product List</a>
                                </li>
                                <li class="slide"><a href="add-product.html" class="side-menu__item">Add
                                        Product</a>
                                </li>
                                <li class="slide"><a href="edit-product.html" class="side-menu__item">Edit
                                        Product</a>
                                </li>
                                <li class="slide"><a href="products-details.html"
                                        class="side-menu__item">Products Details</a></li>
                                <li class="slide"><a href="cart.html" class="side-menu__item">Cart</a></li>
                                <li class="slide"><a href="checkout.html"
                                        class="side-menu__item">Checkout</a></li>
                                <li class="slide"><a href="orders.html" class="side-menu__item">Orders</a>
                                </li>
                                <li class="slide"><a href="order-details.html" class="side-menu__item">Order
                                        Details</a>
                                </li>
                                <li class="slide"><a href="wishlist.html"
                                        class="side-menu__item">Wishlist</a></li>
                            </ul>
                        </li>
                        <li class="slide"><a href="about.html" class="side-menu__item">About Us</a></li>
                        <li class="slide"><a href="contacts.html" class="side-menu__item">Contacts</a></li>
                        <li class="slide"><a href="pricing.html" class="side-menu__item">Pricing Tables</a>
                        </li>
                        <li class="slide"><a href="timeline.html" class="side-menu__item">Timeline</a></li>
                        <li class="slide"><a href="teams.html" class="side-menu__item">Team</a></li>
                        <li class="slide"><a href="landing.html" class="side-menu__item">Landing</a></li>
                        <li class="slide"><a href="todo.html" class="side-menu__item">Todo List</a></li>
                        <li class="slide"><a href="tasks.html" class="side-menu__item">Tasks</a></li>
                        <li class="slide"><a href="reviews.html" class="side-menu__item">Reviews</a></li>
                        <li class="slide"><a href="faqs.html" class="side-menu__item">Faq's</a></li>
                        <li class="slide"><a href="contactus.html" class="side-menu__item">Contact Us</a>
                        </li>
                        <li class="slide"><a href="terms.html" class="side-menu__item">Terms &amp;
                                Conditions</a></li>
                        <li class="slide"><a href="empty-page.html" class="side-menu__item">Empty Page</a>
                        </li>
                    </ul>
                </li>
                {/* End::slide */}

                {/* Start::slide */}
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-camera-lens-line side-menu__icon"></i>
                        <span class="side-menu__label">Icons</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Icons</a></li>
                        <li class="slide"><a href="tabler-icons.html" class="side-menu__item">Tabler
                                Icons</a></li>
                        <li class="slide"><a href="remix-icons.html" class="side-menu__item">Remix Icons</a>
                        </li>
                    </ul>
                </li>
                {/* End::slide */}

                {/* Start::slide */}
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <i class="ri-error-warning-line side-menu__icon"></i>
                        <span class="side-menu__label">Authentication</span>
                        <i class="ri ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1"><a href="javascript:void(0)">Authentication</a>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Sign-In<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="signin.html" class="side-menu__item">Basic</a>
                                </li>
                                <li class="slide"><a href="signin-cover.html"
                                        class="side-menu__item">Cover-1</a></li>
                                <li class="slide"><a href="signin-cover2.html"
                                        class="side-menu__item">Cover-2</a></li>
                            </ul>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Sign-Up<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="signup.html" class="side-menu__item">Basic</a>
                                </li>
                                <li class="slide"><a href="signup-cover.html"
                                        class="side-menu__item">Cover-1</a></li>
                                <li class="slide"><a href="signup-cover2.html"
                                        class="side-menu__item">Cover-2</a></li>
                            </ul>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Create
                                Password<i class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="createpassword.html"
                                        class="side-menu__item">Basic</a></li>
                                <li class="slide"><a href="createpassword-cover.html"
                                        class="side-menu__item">Cover-1</a></li>
                                <li class="slide"><a href="createpassword-cover2.html"
                                        class="side-menu__item">Cover-2</a></li>
                            </ul>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Forgot
                                Password<i class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="forgot.html" class="side-menu__item">Basic</a>
                                </li>
                                <li class="slide"><a href="forgot-cover.html"
                                        class="side-menu__item">Cover-1</a></li>
                                <li class="slide"><a href="forgot-cover2.html"
                                        class="side-menu__item">Cover-2</a></li>
                            </ul>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Reset Password<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="reset.html" class="side-menu__item">Basic</a>
                                </li>
                                <li class="slide"><a href="reset-cover.html"
                                        class="side-menu__item">Cover-1</a></li>
                                <li class="slide"><a href="reset-cover2.html"
                                        class="side-menu__item">Cover-2</a></li>
                            </ul>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Lockscreen<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="lockscreen.html"
                                        class="side-menu__item">Basic</a></li>
                                <li class="slide"><a href="lockscreen-cover.html"
                                        class="side-menu__item">Cover-1</a>
                                </li>
                                <li class="slide"><a href="lockscreen-cover2.html"
                                        class="side-menu__item">Cover-2</a>
                                </li>
                            </ul>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Two-Step
                                Verification<i class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="verification.html"
                                        class="side-menu__item">Basic</a></li>
                                <li class="slide"><a href="verification-cover.html"
                                        class="side-menu__item">Cover-1</a>
                                </li>
                                <li class="slide"><a href="verification-cover2.html"
                                        class="side-menu__item">Cover-2</a>
                                </li>
                            </ul>
                        </li>
                        <li class="slide"><a href="maintenance.html" class="side-menu__item">Under
                                Maintenance</a></li>
                        <li class="slide"><a href="construction.html" class="side-menu__item">Under
                                Construction</a>
                        </li>
                        <li class="slide"><a href="comingsoon.html" class="side-menu__item">Coming Soon</a>
                        </li>
                        <li class="slide has-sub"><a href="javascript:void(0);"
                                class="side-menu__item">Error Pages<i
                                    class="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide"><a href="error404.html"
                                        class="side-menu__item">404Error</a></li>
                                <li class="slide"><a href="error500.html"
                                        class="side-menu__item">500Error</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {/* End::slide */}

            </ul>
            <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                    width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                    </path>
                </svg></div>
        </nav>

    </div>

</aside>










<header class="header custom-sticky !top-0 !w-full">
<nav class="main-header" aria-label="Global">
    <div class="header-content">
        <div class="header-left">
            {/* Navigation Toggle */}
            <div class="">
                <button type="button" class="sidebar-toggle !w-100 !h-100">
                    <span class="sr-only">Toggle Navigation</span>
                    <i class="ri-arrow-right-circle-line header-icon"></i>
                </button>
            </div>
            {/* End Navigation Toggle */}
        </div>

        <div class="responsive-logo">
            <a class="responsive-logo-dark" href="index.html" aria-label="Brand"><img
                    src="build/assets/img/brand-logos/desktop-logo.png" alt="logo" class="mx-auto"/></a>
            <a class="responsive-logo-light" href="index.html" aria-label="Brand"><img
                    src="build/assets/img/brand-logos/desktop-dark.png" alt="logo" class="mx-auto"/></a>
        </div>

        <div class="header-right">
            <div class="responsive-headernav">
                <div class="header-nav-right">
                    <div class="header-country hs-dropdown ti-dropdown hidden sm:block"
                        data-hs-dropdown-placement="bottom-right">
                        <button id="dropdown-flag" type="button"
                            class="hs-dropdown-toggle ti-dropdown-toggle p-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] border-0 rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                            <img src="build/assets/img/flags/10.png" alt="flag-img"
                                class="h-[1.375rem] w-[1.375rem]"/>
                        </button>
                        <div class="hs-dropdown-menu ti-dropdown-menu min-w-[10rem]"
                            aria-labelledby="dropdown-flag">
                            <div
                                class="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                <div class="py-2 first:pt-0 last:pb-0">
                                    <div class="ti-dropdown-item">
                                        <div
                                            class="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                            <div class="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                <img src="build/assets/img/flags/10.png" alt="flag-img"/>
                                            </div>
                                            <div>
                                                <p class="text-xs font-medium">
                                                    USA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ti-dropdown-item">
                                        <div
                                            class="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                            <div class="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                <img src="build/assets/img/flags/1.png" alt="flag-img"/>
                                            </div>
                                            <div>
                                                <p class="text-xs font-medium">
                                                    Argentina
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ti-dropdown-item">
                                        <div
                                            class="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                            <div class="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                <img src="build/assets/img/flags/2.png" alt="flag-img"/>
                                            </div>
                                            <div>
                                                <p class="text-xs font-medium">
                                                    Canada
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ti-dropdown-item">
                                        <div
                                            class="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                            <div class="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                <img src="build/assets/img/flags/3.png" alt="flag-img"/>
                                            </div>
                                            <div>
                                                <p class="text-xs font-medium">
                                                    France
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ti-dropdown-item">
                                        <div
                                            class="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                            <div class="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                <img src="build/assets/img/flags/4.png" alt="flag-img"/>
                                            </div>
                                            <div>
                                                <p class="text-xs font-medium">
                                                    Germany
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ti-dropdown-item">
                                        <div
                                            class="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                            <div class="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                <img src="build/assets/img/flags/5.png" alt="flag-img"/>
                                            </div>
                                            <div>
                                                <p class="text-xs font-medium">
                                                    Italy
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-search">
                        <button aria-label="button" type="button" data-hs-overlay="#search-modal"
                            class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                            <i class="ri-search-2-line header-icon"></i>
                        </button>
                    </div>
                    <div class="header-theme-mode hidden sm:block">
                        <a aria-label="anchor"
                            class="hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                            href="javascript:;" data-hs-theme-click-value="dark">
                            <i class="ri-moon-line header-icon"></i>
                        </a>
                        <a aria-label="anchor"
                            class="hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                            href="javascript:;" data-hs-theme-click-value="light">
                            <i class="ri-sun-line header-icon"></i>
                        </a>
                    </div>
                    <div class="header-fullscreen hidden lg:block">
                        <a aria-label="anchor" href="javascript:void(0);" onclick="openFullscreen();"
                            class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                            <i class="ri-fullscreen-line header-icon full-screen-open"></i>
                            <i class="ri-fullscreen-exit-line header-icon full-screen-close hidden"></i>
                        </a>
                    </div>
                    <div class="header-cart hs-dropdown ti-dropdown hidden lg:block"
                        data-hs-dropdown-placement="bottom-right">
                        <button id="dropdown-cart" type="button"
                            class="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                            <i class="ri-shopping-basket-line header-icon"></i>
                            <span
                                class="flex absolute h-5 w-5 top-0 ltr:right-0 rtl:left-0 -mt-1 ltr:-mr-1 rtl:-ml-1">
                                <span
                                    class="relative inline-flex rounded-full h-5 w-5 bg-danger text-white justify-center items-center"
                                    id="cart-data2">4</span>
                            </span>
                        </button>
                        <div class="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                            aria-labelledby="dropdown-cart">
                            <div
                                class="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center">
                                <p class="ti-dropdown-header-title !text-white font-semibold">Shopping
                                    Cart</p>
                                <a href="javascript:void(0)"
                                    class="badge bg-black/20 text-white rounded-sm" id="cart-data">4
                                    Items</a>
                            </div>
                            <div
                                class="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                <div class="py-2 first:pt-0 last:pb-0" id="allCartsContainer">
                                    <div class="ti-dropdown-item relative header-box">
                                        <a href="cart.html"
                                            class="flex items-center space-x-3 rtl:space-x-reverse w-full">
                                            <img loading="lazy"
                                                src="build/assets/img/ecommerce/products/1.png"
                                                alt="product-img"
                                                class="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"/>
                                            <div>
                                                <p
                                                    class="text-sm font-medium text-gray-800 dark:text-white">
                                                    Black Heals For Women
                                                </p>
                                                <div class="flex space-x-2 rtl:space-x-reverse">
                                                    <h5 class="text-xs">$699</h5>
                                                    <span
                                                        class="my-auto line-through text-xs text-gray-400 dark:text-white/70">$999</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                            <i class="ri-close-circle-line"></i>
                                        </a>
                                    </div>
                                    <div class="ti-dropdown-item relative header-box">
                                        <a href="cart.html"
                                            class="flex items-center space-x-3 rtl:space-x-reverse w-full">
                                            <img loading="lazy"
                                                src="build/assets/img/ecommerce/products/2.png"
                                                alt="product-img"
                                                class="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"/>
                                            <div>
                                                <p
                                                    class="text-sm font-medium text-gray-800 dark:text-white">
                                                    Tshirt For Men
                                                </p>
                                                <div class="flex space-x-2 rtl:space-x-reverse">
                                                    <h5 class="text-xs">$245</h5>
                                                    <span
                                                        class="my-auto line-through text-xs text-gray-400 dark:text-white/70">$599</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                            <i class="ri-close-circle-line"></i>
                                        </a>
                                    </div>
                                    <div class="ti-dropdown-item relative header-box">
                                        <a href="cart.html"
                                            class="flex items-center space-x-3 rtl:space-x-reverse w-full">
                                            <img loading="lazy"
                                                src="build/assets/img/ecommerce/products/9.png"
                                                alt="product-img"
                                                class="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"/>
                                            <div>
                                                <p
                                                    class="text-sm font-medium text-gray-800 dark:text-white">
                                                    Travel Bag For Womens
                                                </p>
                                                <div class="flex space-x-2 rtl:space-x-reverse">
                                                    <h5 class="text-xs">$299</h5>
                                                    <span
                                                        class="my-auto line-through text-xs text-gray-400 dark:text-white/70">$399</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                            <i class="ri-close-circle-line"></i>
                                        </a>
                                    </div>
                                    <div class="ti-dropdown-item relative header-box">
                                        <a href="cart.html"
                                            class="flex items-center space-x-3 rtl:space-x-reverse w-full">
                                            <img loading="lazy"
                                                src="build/assets/img/ecommerce/products/10.png"
                                                alt="product-img"
                                                class="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"/>
                                            <div>
                                                <p
                                                    class="text-sm font-medium text-gray-800 dark:text-white">
                                                    Leather Wallet For Grils
                                                </p>
                                                <div class="flex space-x-2 rtl:space-x-reverse">
                                                    <h5 class="text-xs">$100</h5>
                                                    <span
                                                        class="my-auto line-through text-xs text-gray-400 dark:text-white/70">$150</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                            <i class="ri-close-circle-line"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="py-2 first:pt-0 last:pb-0 px-5">
                                    <div class="flex justify-between">
                                        <div>
                                            <span
                                                class="text-xs font-semibold text-gray-800 dark:text-white">Total</span>
                                        </div>
                                        <div class="text-end font-medium">
                                            <span
                                                class="text-xs font-semibold text-gray-800 dark:text-white">$40,020</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-2 first:pt-0 px-5">
                                    <a class="w-full ti-btn ti-btn-primary p-2" href="checkout.html">
                                        Proceed Checkout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-notification hs-dropdown ti-dropdown hidden sm:block"
                        data-hs-dropdown-placement="bottom-right">
                        <button id="dropdown-notification" type="button"
                            class="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                            <i class="ri-notification-2-line header-icon animate-bell"></i>
                            <span
                                class="flex absolute h-5 w-5 top-0 ltr:right-0 rtl:left-0 -mt-1 ltr:-mr-1 rtl:-ml-1">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/80 opacity-75"></span>
                                <span
                                    class="relative inline-flex rounded-full h-5 w-5 bg-success text-white justify-center items-center"
                                    id="notify-data">4</span>
                            </span>
                        </button>
                        <div class="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                            aria-labelledby="dropdown-notification">
                            <div
                                class="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center">
                                <p class="ti-dropdown-header-title !text-white font-semibold">
                                    Notifications</p>
                                <a href="javascript:void(0)"
                                    class="badge bg-black/20 text-white rounded-sm">Mark All Read</a>
                            </div>
                            <div
                                class="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                <div class="py-2 first:pt-0 last:pb-0" id="allNotifyContainer">
                                    <div class="ti-dropdown-item relative header-box">
                                        <a href="mail-inbox.html"
                                            class="flex space-x-3 rtl:space-x-reverse">
                                            <div class="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                                <img src="build/assets/img/users/17.jpg" alt="img"
                                                    class="rounded-sm"/>
                                            </div>
                                            <div class="relative w-full">
                                                <h5
                                                    class="text-sm text-gray-800 dark:text-white font-semibold mb-1">
                                                    Elon Isk</h5>
                                                <p class="text-xs mb-1 max-w-[200px] truncate">Hello
                                                    there! How are you doing? Call me when...</p>
                                                <p class="text-xs text-gray-400 dark:text-white/70">2
                                                    min</p>
                                            </div>
                                        </a>
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                            <i class="ri-close-circle-line"></i>
                                        </a>
                                    </div>
                                    <div class="ti-dropdown-item relative header-box">
                                        <a href="mail-inbox.html"
                                            class="flex items-center space-x-3 rtl:space-x-reverse">
                                            <div class="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                                <img src="build/assets/img/users/2.jpg" alt="img"
                                                    class="rounded-sm"/>
                                            </div>
                                            <div class="relative w-full">
                                                <h5
                                                    class="text-sm text-gray-800 dark:text-white font-semibold mb-1">
                                                    Shakira Sen</h5>
                                                <p class="text-xs mb-1 max-w-[200px] truncate">I would
                                                    like to discuss about that assets...</p>
                                                <p class="text-xs text-gray-400 dark:text-white/70">
                                                    09:43</p>
                                            </div>
                                        </a>
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                            <i class="ri-close-circle-line"></i>
                                        </a>
                                    </div>
                                    <div class="ti-dropdown-item relative header-box">
                                        <a href="mail-inbox.html"
                                            class="flex items-center space-x-3 rtl:space-x-reverse">
                                            <div class="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                                <img src="build/assets/img/users/21.jpg" alt="img"
                                                    class="rounded-sm"/>
                                            </div>
                                            <div class="relative w-full">
                                                <h5
                                                    class="text-sm text-gray-800 dark:text-white font-semibold mb-1">
                                                    Sebastian</h5>
                                                <p class="text-xs mb-1 max-w-[200px] truncate">Shall we
                                                    go to the cafe at downtown...</p>
                                                <p class="text-xs text-gray-400 dark:text-white/70">
                                                    yesterday</p>
                                            </div>
                                        </a>
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                            <i class="ri-close-circle-line"></i>
                                        </a>
                                    </div>
                                    <div class="ti-dropdown-item relative header-box">
                                        <a href="mail-inbox.html"
                                            class="flex items-center space-x-3 rtl:space-x-reverse">
                                            <div class="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                                <img src="build/assets/img/users/11.jpg" alt="img"
                                                    class="rounded-sm"/>
                                            </div>
                                            <div class="relative w-full">
                                                <h5
                                                    class="text-sm text-gray-800 dark:text-white font-semibold mb-1">
                                                    Charlie Davieson</h5>
                                                <p class="text-xs mb-1 max-w-[200px] truncate">Lorem
                                                    ipsum dolor sit amet, consectetur</p>
                                                <p class="text-xs text-gray-400 dark:text-white/70">
                                                    yesterday</p>
                                            </div>
                                        </a>
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                            <i class="ri-close-circle-line"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="py-2 first:pt-0 px-5">
                                    <a class="w-full ti-btn ti-btn-primary p-2" href="mail-inbox.html">
                                        View All
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-apps hs-dropdown ti-dropdown hidden md:block"
                        data-hs-dropdown-placement="bottom-right">
                        <button aria-label="button" id="dropdown-apps" type="button"
                            class="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                            <i class="ri-bookmark-line header-icon"></i>
                        </button>
                        <div class="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0"
                            aria-labelledby="dropdown-apps">
                            <div
                                class="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center text-center">
                                <p class="ti-dropdown-header-title font-semibold !text-white">Related
                                    Apps</p>
                            </div>
                            <div
                                class="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                <div class="grid grid-cols-3 gap-0 p-4 pt-2">
                                    <a href="mail-inbox.html"
                                        class="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                        <i
                                            class="ri ri-mail-line leading-none text-2xl avatar ring-0 bg-primary/20 text-primary rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                        <div
                                            class="text-xs font-semibold text-gray-800 dark:text-white">
                                            Mail Inbox</div>
                                    </a>
                                    <a href="chat.html"
                                        class="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                        <i
                                            class="ri ri-chat-2-line leading-none text-2xl avatar ring-0 bg-secondary/20 text-secondary rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                        <div
                                            class="text-xs font-semibold text-gray-800 dark:text-white">
                                            Chat</div>
                                    </a>
                                    <a href="tasks.html"
                                        class="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                        <i
                                            class="ri ri-task-line leading-none text-2xl avatar ring-0 bg-warning/20 text-warning rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                        <div
                                            class="text-xs font-semibold text-gray-800 dark:text-white">
                                            Task</div>
                                    </a>
                                    <a href="calendar.html"
                                        class="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                        <i
                                            class="ri ri-calendar-event-line leading-none text-2xl avatar ring-0 bg-danger/20 text-danger rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                        <div
                                            class="text-xs font-semibold text-gray-800 dark:text-white">
                                            Calendar</div>
                                    </a>
                                    <a href="filemanager.html"
                                        class="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                        <i
                                            class="ri ri-file-copy-2-line leading-none text-2xl avatar ring-0 bg-info/20 text-info rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                        <div
                                            class="text-xs font-semibold text-gray-800 dark:text-white">
                                            File Manager</div>
                                    </a>
                                    <a href="contacts.html"
                                        class="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                        <i
                                            class="ri ri-group-line leading-none text-2xl avatar ring-0 bg-success/20 text-success rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                        <div
                                            class="text-xs font-semibold text-gray-800 dark:text-white">
                                            Contacts</div>
                                    </a>
                                </div>
                                <div class="py-2 first:pt-0 px-5">
                                    <a class="w-full ti-btn ti-btn-primary p-2"
                                        href="javascript:void(0);">
                                        View All
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-profile hs-dropdown ti-dropdown"
                        data-hs-dropdown-placement="bottom-right">
                        <button id="dropdown-profile" type="button"
                            class="hs-dropdown-toggle ti-dropdown-toggle gap-2 p-0 flex-shrink-0 h-8 w-8 rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                            <img class="inline-block rounded-full ring-2 ring-white dark:ring-white/10"
                                src="build/assets/img/users/1.jpg" alt=" Description"/>
                        </button>

                        <div class="hs-dropdown-menu ti-dropdown-menu border-0 w-[20rem]"
                            aria-labelledby="dropdown-profile">
                            <div class="ti-dropdown-header !bg-primary flex">
                                <div class="ltr:mr-3 rtl:ml-3">
                                    <img class="avatar shadow-none rounded-full !ring-transparent"
                                        src="build/assets/img/users/1.jpg" alt="profile-img"/>
                                </div>
                                <div>
                                    <p class="ti-dropdown-header-title !text-white">Json Taylor</p>
                                    <p class="ti-dropdown-header-content !text-white/50">Web Designer
                                    </p>
                                </div>
                            </div>
                            <div class="mt-2 ti-dropdown-divider">
                                <a href="profile.html" class="ti-dropdown-item">
                                    <i class="ti ti-user-circle text-lg"></i>
                                    Profile
                                </a>
                                <a href="mail-inbox.html" class="ti-dropdown-item">
                                    <i class="ti ti-inbox text-lg"></i>
                                    Inbox
                                </a>
                                <a href="tasks.html" class="ti-dropdown-item">
                                    <i class="ti ti-clipboard-check text-lg"></i>
                                    Task Manager
                                </a>
                                <a href="profile-settings.html" class="ti-dropdown-item">
                                    <i class="ti ti-adjustments-horizontal text-lg"></i>
                                    Settings
                                </a>
                                <a href="index3.html" class="ti-dropdown-item">
                                    <i class="ti ti-wallet text-lg"></i>
                                    Bal: $7,12,950
                                </a>
                                <a href="signin.html" class="ti-dropdown-item">
                                    <i class="ti ti-logout  text-lg"></i>
                                    Log Out
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="switcher-icon">
                        <button aria-label="button" type="button"
                            class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                            data-hs-overlay="#hs-overlay-switcher">
                            <i class="ri-settings-5-line header-icon animate-spin"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
</header>

</div>
  )
}

export default Sidebar