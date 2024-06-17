import React from "react";
import { connect } from "react-redux";
import { pagesComponentsCreators } from "store/pages";
import { ZHeader, ZMenu } from "../../components";

import { MainLayoutDiv } from "./style/MainLayout.styled";

const MainLayout = (props) => {
  const { children } = props;
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    getMenu();
  }, []); // eslint-disable-line

  const getMenu = async () => {
    const result = await props.getMenu();

    if (result.code === 200) {
      setItems(result.items);
    }
  };

  return (
    <MainLayoutDiv>
      <ZHeader></ZHeader>

      <div className="container">
        <ZMenu items={items}></ZMenu>
        <div className="main">{children}</div>
      </div>
    </MainLayoutDiv>
  );
};

const mapDispatchToProps = (dispatch) => ({
  async getMenu() {
    return await dispatch(pagesComponentsCreators.getMenu());
  },
});

export default connect(null, mapDispatchToProps)(MainLayout);
