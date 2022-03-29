const { atom } = require("recoil");

const sideBarState = atom({
    key: "sideBarState",
    default: 0,
})

export { sideBarState };