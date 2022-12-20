/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      boxShadow: {
        'inner-16' : 'inset 0px 0px 16px 0px rgba(0,0,0,0.25)'
      },
      /*Awfully useful animation timing functions*/
      transitionTimingFunction: {
        'sine': {
          'in': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
          'out': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
          'in-out': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)'
        },
        'quadratic': {
          'in': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
          'out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          'in-out': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
        },
        'cubic': {
          'in': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          'out': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          'in-out': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
        },
        'quartic': {
          'in': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
          'out': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
          'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)'
        },
        'quintic': {
          'in': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          'out': 'cubic-bezier(0.23, 1, 0.32, 1)',
          'in-out': 'cubic-bezier(0.86, 0, 0.07, 1)'
        },
        'exponential': {
          'in': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
          'out': 'cubic-bezier(0.19, 1, 0.22, 1)',
          'in-out': 'cubic-bezier(1, 0, 0, 1)'
        },
        'circular': {
          'in': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
          'out': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
          'in-out': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)'
        },
        'back': {
          'in': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
          'out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          'in-out': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        }
      },
      keyframes: {
        'shake-horizontal': {
          '0%, 100%': {transform: 'translateX(0)'},
          '10%, 30%, 50%, 70%': {transform: 'translateX(-10px)'},
          '20%, 40%, 60%': {transform: 'translateX(10px)'},
          '80%': {transform: 'translateX(8px)'},
          '90%': {transform: 'translateX(-8px)'},
        }
      },
      animation: {
        'shake-horizontal' : 'shake-horizontal 0.8s cubic-bezier(0.445, 0.05, 0.55, 0.95) 1'
      }
    },
  },
  plugins: [],
}
