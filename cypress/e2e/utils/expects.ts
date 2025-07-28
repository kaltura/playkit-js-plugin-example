export const expectElementExists = (getElement: () => any) => {
  getElement().should('exist');
};

export const expectElementDoesntExist = (getElement: () => any) => {
  getElement().should('not.exist');
};

export const expectElementVisible = (getElement: () => any) => {
  getElement().should('be.visible');
};

export const expectElementNotVisible = (getElement: () => any) => {
  getElement().should('not.be.visible');
};
