/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
      lobsterTwo: ['Lobster Two', 'cursive'],
    },
    keyframes: {
      'animation-part-10': {
        '0%': {
          transform: `matrix3d(0.949395, 0.314085, 0, 0, -0.278702, 1, 0.5, 0, 0.144826, -0.5, 1, -0.002, 0, -200, 0, 1)`,
        },
        '100%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
        },
      },
      'animation-part-9': {
        '0%': {
          transform: `matrix3d(0.97555, 0.219777, 0, 0, -0.207749, 0.922157, 0.326293, -0.0006577, 0.0717119, -0.318315, 0.945269, -0.0019054, 0, -125.968, 0, 1)`,
        },
        '100%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
        },
      },
      'animation-part-8': {
        '0%': {
          transform: `matrix3d(0.950079, -0.31201, 0, 0, 0.277331, 0.84448, -0.458193, 0.0009236, 0.142961, 0.43532, 0.888853, -0.0017917, 0, -180.384, 0, 1)`,
        },
        '100%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
        },
      },
      'animation-part-5': {
        '0%': {
          transform: `matrix3d(0.988408, 0.151819, 0, 0, -0.147869, 0.962692, 0.226627, -0.0004568, 0.0344062, -0.224, 0.973982, -0.0019633, 108.302, -129.962, 0, 1)`,
        },
        '100%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
        },
      },
      'animation-part-4': {
        '0%': {
          transform: `matrix3d(0.998459, 0.0554922, 0, 0, -0.0552999, 0.994999, 0.0831849, -0.0001676, 0.0046161, -0.0830568, 0.996534, -0.0020087, 0, -31.5626, 0, 1)`,
        },
        '100%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
        },
      },
      'animation-part-3': {
        '0%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 0.984208, 0.177016, -0.0003568, 0, -0.177016, 0.984208, -0.0019839, 0, -67.4424, 0, 1)`,
        },
        '100%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
        },
      },
      'animation-part-2': {
        '0%': {
          transform: `matrix3d(0.992108, 0.125388, 0, 0, -0.123165, 0.974519, 0.187463, -0.0003778, 0.0235056, -0.185983, 0.982272, -0.00198, 0, -57.1752, 0, 1)`,
        },
        '100%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
        },
      },
      'animation-part-1': {
        '0%': {
          transform: `matrix3d(0.947489, 0.319789, 0, 0, -0.282422, 0.836775, 0.46909, -0.0009455, 0.150009, -0.444457, 0.883151, -0.0017802, 0, -148.036, 0, 1)`,
        },
        '100%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
        },
      },
      'animation-title-1': {
        '0%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 399.503, 0, 0, 1)`,
        },
        '100%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
        },
      },
      'animation-title-2': {
        '0%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 200, 0, 0, 1)`,
        },
        '100%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
        },
      },
      'animation-title-3': {
        '0%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 150, 0, 0, 1)`,
        },
        '100%': {
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
        },
      },
    },
    animation: {
      'animation-part-10': 'animation-part-10 1s ease-in-out forwards',
      'animation-part-9': 'animation-part-9 1s ease-in-out forwards',
      'animation-part-8': 'animation-part-8 1s ease-in-out forwards',
      'animation-part-5': 'animation-part-5 1s ease-in-out forwards',
      'animation-part-4': 'animation-part-4 1s ease-in-out forwards',
      'animation-part-3': 'animation-part-3 1s ease-in-out forwards',
      'animation-part-2': 'animation-part-2 1s ease-in-out forwards',
      'animation-part-1': 'animation-part-1 1s ease-in-out forwards',
      'animation-title-1': 'animation-title-1 1s ease-in-out forwards',
      'animation-title-2': 'animation-title-2 1s ease-in-out forwards',
      'animation-title-3': 'animation-title-3 1s ease-in-out forwards',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  plugins: [],
};
