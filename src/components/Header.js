import React from 'react'

const Header = () => {
  return (
    <div>
    {/*  META DATA */}
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="Tailwind Responsive Admin Web Dashboard Laravel Template"/>
    <meta name="keywords"
        content="admin, admin tailwind, laravel admin template, admin laravel, tailwind laravel, admin dashboard template, laravel tailwind, admin dashboard, admin panel, admin template, laravel admin dashboard, tailwind, laravel dashboard template, admin panel template, laravel admin panel, laravel dashboard"/>

     {/*  TITLE */}
    <title> Synto - Laravel Tailwind Admin Template </title>

      {/*  FAVICON */}
    <link rel="shortcut icon" href="build/assets/img/brand-logos/favicon.ico"/>

      {/*   APP CSS*/}
    <link rel="preload" as="style" href="build/assets/app-b1c9e6c6.css" />
    <link rel="stylesheet" href="build/assets/app-b1c9e6c6.css" />

      {/*  APP SCSS */}
    <link rel="preload" as="style" href="build/assets/app-31501561.css" />
    <link rel="stylesheet" href="build/assets/app-31501561.css" />

      {/*   SIMPLEBAR CSS */}
    <link rel="stylesheet" href="build/assets/libs/simplebar/simplebar.min.css"/>

      {/*   COLOR PICKER CSS */}
    <link rel="stylesheet" href="build/assets/libs/%40simonwep/pickr/themes/nano.min.css"/>

      {/*   MAIN JS */}
    <script src="build/assets/main.js"></script>


     {/*   VECTOR MAP CSS*/}
    <link rel="stylesheet" href="build/assets/libs/jsvectormap/css/jsvectormap.min.css"/>

    </div>
    
  )
}

export default Header