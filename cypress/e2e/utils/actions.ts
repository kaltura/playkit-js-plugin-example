export const clickOn = (getElement: () => any) => {
  getElement().click({ force: true });
};
