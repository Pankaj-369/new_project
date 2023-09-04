import React from 'react'

const Footer = () => {
  return (
    <div>
    {/* SEARCH-MODAL */}
    <div id="search-modal" class="hs-overlay ti-modal hidden">
    <div class="ti-modal-box">
        <div class="ti-modal-content">
            <div class="ti-modal-body">
                <div class="header-search">
                    <label for="icon" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="search-btn">
                            <i class="ri ri-search-2-line search-btn-icon"></i>
                        </div>
                        <input type="text" id="icon" name="icon"
                            class="py-2 ltr:pl-11 rtl:pr-11 ti-form-input focus:z-10" placeholder="Search"/>
                        <div class="voice-search">
                            <i class="ri ri-mic-2-line voice-btn-icon"></i>
                        </div>
                        <div class="search-dropdown">
                            <i class="ri ri-more-2-line search-dropdown-btn-icon"></i>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="font-semibold text-[13px] text-gray-400 dark:text-gray-200 mb-2">Are You
                        Looking For...</p>
                    <div class="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
                        <a href="teams.html"
                            class="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse">
                            <span class="inline-block text-secondary mr-1"><i
                                    class="ri ri-user-line text-sm"></i></span>
                            Team
                        </a>
                        <a href="javascript:void(0);"
                            class="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white">
                            <span class="sr-only">Remove badge</span>
                            <svg class="h-4 w-4 hover:fill-white" xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div class="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
                        <a href="form-elements.html"
                            class="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse">
                            <span class="inline-block text-secondary mr-1"><i
                                    class="ri ri-file-text-line text-sm"></i></span>
                            Forms
                        </a>
                        <a href="javascript:void(0);"
                            class="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white">
                            <span class="sr-only">Remove badge</span>
                            <svg class="h-4 w-4 hover:fill-white" xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div class="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
                        <a href="vector-maps.html"
                            class="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse">
                            <span class="inline-block text-secondary mr-1"><i
                                    class="ri ri-map-pin-line text-sm"></i></span>
                            Maps
                        </a>
                        <a href="javascript:void(0);"
                            class="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white">
                            <span class="sr-only">Remove badge</span>
                            <svg class="h-4 w-4 hover:fill-white" xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div class="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
                        <a href="widgets.html"
                            class="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse">
                            <span class="inline-block text-secondary mr-1"><i
                                    class="ri ri-server-line text-sm"></i></span>
                            Widgets
                        </a>
                        <a href="javascript:void(0);"
                            class="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white">
                            <span class="sr-only">Remove badge</span>
                            <svg class="h-4 w-4 hover:fill-white" xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="font-semibold text-sm text-gray-500 mb-2">Recent Search :</p>
                    <div
                        class="p-2 border dark:border-white/10 rounded-sm flex items-center text-gray-500 mb-1 relative header-box">
                        <a href="notifications.html" class="w-full my-auto items-center flex">
                            <span class="text-sm">Notifications</span>
                        </a>
                        <a aria-label="anchor" href="javascript:void(0);"
                            class="ltr:ml-auto rtl:mr-auto flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 focus:outline-none header-remove-btn">
                            <i class="ri-close-line"></i>
                        </a>
                    </div>
                    <div
                        class="p-2 border dark:border-white/10 rounded-sm flex items-center text-gray-500 mb-1 relative header-box">
                        <a href="alerts.html" class="w-full my-auto items-center flex">
                            <span class="text-sm">Alerts</span>
                        </a>
                        <a aria-label="anchor" href="javascript:void(0);"
                            class="ltr:ml-auto rtl:mr-auto flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 focus:outline-none header-remove-btn">
                            <i class="ri-close-line"></i>
                        </a>
                    </div>
                    <div
                        class="p-2 border dark:border-white/10 rounded-sm flex items-center text-gray-500 relative header-box">
                        <a href="tables.html" class="w-full my-auto items-center flex">
                            <span class="text-sm">Tables</span>
                        </a>
                        <a aria-label="anchor" href="javascript:void(0);"
                            class="ltr:ml-auto rtl:mr-auto flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 focus:outline-none header-remove-btn">
                            <i class="ri-close-line"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="ti-modal-footer">
                <div class="inline-flex rounded-md shadow-sm">
                    <button type="button"
                        class="ti-btn-group py-1 ti-btn-soft-primary dark:border-white/10">
                        Search
                    </button>
                    <button type="button" class="ti-btn-group py-1 ti-btn-primary dark:border-white/10">
                        Clear Recents
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

{/* END SEARCH-MODAL */}

{/* FOOTER */}
<footer class="mt-auto py-3 border-t dark:border-white/10 bg-white dark:bg-bgdark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center">Copyright © <span id="year"></span> <a href="javascript:void(0)"
                class="text-primary">Synto</a>. Designed with <span
                class="ri ri-heart-fill text-red-500"></span> by <a class="text-primary"
                href="javascript:void(0)"> Spruko </a> All rights reserved </p>
    </div>
</footer>

{/* END FOOTER */}





<div class="scrollToTop">
<span class="arrow"><i class="ri-arrow-up-s-fill text-xl"></i></span>
</div>

<div id="responsive-overlay"> </div>

{/* POPPER JS  */}
<script src="build/assets/libs/%40popperjs/core/umd/popper.min.js"></script>

{/* COLOR PICKER JS */}
<script src="build/assets/libs/%40simonwep/pickr/pickr.es5.min.js"></script>

{/* PRELINE JS */}
<script src="build/assets/libs/preline/preline.js"></script>

{/* SIMPLEBAR JS */}
<script src="build/assets/libs/simplebar/simplebar.min.js"></script>


{/* APEX CHARTS JS */}
<script src="build/assets/libs/apexcharts/apexcharts.min.js"></script>

{/* CHARTJS CHART JS */}
<script src="build/assets/libs/chart.js/chart.min.js"></script>

{/* INDEX JS */}
<link rel="modulepreload" href="build/assets/index-aec7c4a2.js" />
<script type="module" src="build/assets/index-aec7c4a2.js"></script>


{/* STICKY JS */}
<script src="build/assets/sticky.js"></script>

{/* SWITCH JS */}
<link rel="modulepreload" href="build/assets/switch-2b19e479.js" />
<script type="module" src="build/assets/switch-2b19e479.js"></script>

{/* APP JS */}
<link rel="modulepreload" href="build/assets/app-9dd85cc5.js" />
<script type="module" src="build/assets/app-9dd85cc5.js"></script>

{/* END SCRIPTS */}
</div>
  )
}

export default Footer