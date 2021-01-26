module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        ratio: "100%",
      },
      backgroundImage: (theme) => ({
        "pic-woman":
          "url('https://lh3.googleusercontent.com/proxy/xZsW-gAzlQcfA4suTIG2QapE0rm03-eeOfZEiH6RCo7cMoeIRnRmpQ5Zx5YzvS6vzmGAHpLtR1YlLbVXJUMEcu96yZSU3ScDs4lIACe_DX_XNNE')",
      }),
      height: {
        main: "calc(100% - 5rem)",
      },
      flex: {
        "sy-header": "0 0 5rem",
        "sy-main": "1 1 auto",
        "sy-field": "0 0 3rem",
        "sy-min": "0 0 min-content",
      },
      letterSpacing: {
        max: ".72em",
      },
      minWidth: {
        aside: "350px",
      },
      colors: {
        "sy-blue": "#6977E4",
        "sy-blue-hover": "#3E4FCA",
        "sy-main": "#333333",
        "sy-main-hover": "#252525",
        "sy-gy": "#707070",
        "sy-guide": "#999999",
        "sy-error": "#FF0000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
