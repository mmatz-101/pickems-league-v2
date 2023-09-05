
export const myCustomTheme = {
    name: 'my-custom-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        "--theme-font-family-heading": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "16px",
        "--theme-rounded-container": "4px",
        "--theme-border-base": "2px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "0 0 0",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "255 255 255",
        // =~= Theme Colors  =~=
        // primary | #5CC8FF 
        "--color-primary-50": "231 247 255", // #e7f7ff
        "--color-primary-100": "222 244 255", // #def4ff
        "--color-primary-200": "214 241 255", // #d6f1ff
        "--color-primary-300": "190 233 255", // #bee9ff
        "--color-primary-400": "141 217 255", // #8dd9ff
        "--color-primary-500": "92 200 255", // #5CC8FF
        "--color-primary-600": "83 180 230", // #53b4e6
        "--color-primary-700": "69 150 191", // #4596bf
        "--color-primary-800": "55 120 153", // #377899
        "--color-primary-900": "45 98 125", // #2d627d
        // secondary | #98DFAF 
        "--color-secondary-50": "240 250 243", // #f0faf3
        "--color-secondary-100": "234 249 239", // #eaf9ef
        "--color-secondary-200": "229 247 235", // #e5f7eb
        "--color-secondary-300": "214 242 223", // #d6f2df
        "--color-secondary-400": "183 233 199", // #b7e9c7
        "--color-secondary-500": "152 223 175", // #98DFAF
        "--color-secondary-600": "137 201 158", // #89c99e
        "--color-secondary-700": "114 167 131", // #72a783
        "--color-secondary-800": "91 134 105", // #5b8669
        "--color-secondary-900": "74 109 86", // #4a6d56
        // tertiary | #DEEFB7 
        "--color-tertiary-50": "250 253 244", // #fafdf4
        "--color-tertiary-100": "248 252 241", // #f8fcf1
        "--color-tertiary-200": "247 251 237", // #f7fbed
        "--color-tertiary-300": "242 249 226", // #f2f9e2
        "--color-tertiary-400": "232 244 205", // #e8f4cd
        "--color-tertiary-500": "222 239 183", // #DEEFB7
        "--color-tertiary-600": "200 215 165", // #c8d7a5
        "--color-tertiary-700": "167 179 137", // #a7b389
        "--color-tertiary-800": "133 143 110", // #858f6e
        "--color-tertiary-900": "109 117 90", // #6d755a
        // success | #7de491 
        "--color-success-50": "236 251 239", // #ecfbef
        "--color-success-100": "229 250 233", // #e5fae9
        "--color-success-200": "223 248 228", // #dff8e4
        "--color-success-300": "203 244 211", // #cbf4d3
        "--color-success-400": "164 236 178", // #a4ecb2
        "--color-success-500": "125 228 145", // #7de491
        "--color-success-600": "113 205 131", // #71cd83
        "--color-success-700": "94 171 109", // #5eab6d
        "--color-success-800": "75 137 87", // #4b8957
        "--color-success-900": "61 112 71", // #3d7047
        // warning | #f8cf77 
        "--color-warning-50": "254 248 235", // #fef8eb
        "--color-warning-100": "254 245 228", // #fef5e4
        "--color-warning-200": "253 243 221", // #fdf3dd
        "--color-warning-300": "252 236 201", // #fcecc9
        "--color-warning-400": "250 221 160", // #fadda0
        "--color-warning-500": "248 207 119", // #f8cf77
        "--color-warning-600": "223 186 107", // #dfba6b
        "--color-warning-700": "186 155 89", // #ba9b59
        "--color-warning-800": "149 124 71", // #957c47
        "--color-warning-900": "122 101 58", // #7a653a
        // error | #be1968 
        "--color-error-50": "245 221 232", // #f5dde8
        "--color-error-100": "242 209 225", // #f2d1e1
        "--color-error-200": "239 198 217", // #efc6d9
        "--color-error-300": "229 163 195", // #e5a3c3
        "--color-error-400": "210 94 149", // #d25e95
        "--color-error-500": "190 25 104", // #be1968
        "--color-error-600": "171 23 94", // #ab175e
        "--color-error-700": "143 19 78", // #8f134e
        "--color-error-800": "114 15 62", // #720f3e
        "--color-error-900": "93 12 51", // #5d0c33
        // surface | #495a8f 
        "--color-surface-50": "228 230 238", // #e4e6ee
        "--color-surface-100": "219 222 233", // #dbdee9
        "--color-surface-200": "210 214 227", // #d2d6e3
        "--color-surface-300": "182 189 210", // #b6bdd2
        "--color-surface-400": "128 140 177", // #808cb1
        "--color-surface-500": "73 90 143", // #495a8f
        "--color-surface-600": "66 81 129", // #425181
        "--color-surface-700": "55 68 107", // #37446b
        "--color-surface-800": "44 54 86", // #2c3656
        "--color-surface-900": "36 44 70", // #242c46

    }
}