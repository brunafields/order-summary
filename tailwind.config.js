module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': 'url("images/pattern-background-mobile.svg")',
      },
      colors: {
        paleBlue: "hsl(225, 100%, 94%)",
        brightBlue: "hsl(245, 75%, 52%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        desaturatedBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",
        lightBlue: 'hsl(245, 50%, 52%)',
      },
      fontFamily: {
        sans: ['Red Hat Display', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
